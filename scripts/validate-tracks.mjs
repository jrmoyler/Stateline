// Contract check for every track module. Run with `npm run validate`.
//
// 23 track files written by different hands drift in ways that are invisible until a user
// clicks the wrong state: a quiz answer index off by one, a stateModule heading that no
// longer matches any summary section so the per-state swap silently never fires, a state
// abbreviation that isn't one. This catches those at the door.

import { TRACKS, TRACK_GROUPS, DEFAULT_TRACK_ID } from '../src/data/tracks/index.js';
import states from '../src/data/us-states.json' with { type: 'json' };

const ABBRS = new Set(Object.keys(states.names));
const JURISDICTION_COUNT = ABBRS.size;
const SCOPES = new Set(['federal', 'state', 'national-plus-state']);
const SPEC_FIELDS = ['vendor', 'questions', 'time', 'pass', 'fee', 'note', 'source'];

let errors = 0, warnings = 0;
const fail = (id, msg) => { errors++; console.error(`  ✗ ${id}: ${msg}`); };
const warn = (id, msg) => { warnings++; console.warn(`  ! ${id}: ${msg}`); };

function checkSpec(id, label, spec){
  for(const f of SPEC_FIELDS){
    if(typeof spec[f] !== 'string' || !spec[f].trim()) fail(id, `${label} is missing "${f}"`);
  }
  if(typeof spec.verified !== 'boolean') fail(id, `${label} has no boolean "verified"`);
  if(spec.confidence !== undefined && typeof spec.confidence !== 'string'){
    fail(id, `${label} has a non-string confidence note`);
  }
}

for(const [id, t] of Object.entries(TRACKS)){
  if(t.id !== id) fail(id, `id "${t.id}" does not match its catalog key`);
  for(const f of ['name','full','category','type','tagline']){
    if(!t[f]) fail(id, `missing "${f}"`);
  }
  if(!SCOPES.has(t.scope)) fail(id, `scope "${t.scope}" is not one of ${[...SCOPES].join(', ')}`);

  // ---- research baseline ----
  // Every track needs a dated, clickable primary-source baseline. Per-state source
  // lines remain more specific; this record makes the review method auditable and
  // prevents an entire track from being marked verified without an authority.
  const research = t.research;
  if(!research) fail(id, 'missing track research baseline');
  else {
    if(!/^\d{4}-\d{2}-\d{2}$/.test(research.reviewedAt || '')){
      fail(id, 'research.reviewedAt must be an ISO date');
    }
    const expectedCoverage = t.scope === 'federal' ? 'nationwide' : '51-jurisdiction';
    if(research.coverage !== expectedCoverage){
      fail(id, `research.coverage must be "${expectedCoverage}" for scope "${t.scope}"`);
    }
    if(typeof research.method !== 'string' || research.method.length < 40){
      fail(id, 'research.method must explain the verification approach');
    }
    if(!Array.isArray(research.sources) || !research.sources.length){
      fail(id, 'research.sources needs at least one primary authority');
    }
    for(const [i, source] of (research.sources || []).entries()){
      if(!source.authority) fail(id, `research.sources[${i}] has no authority label`);
      if(!/^https:\/\//.test(source.url || '')) fail(id, `research.sources[${i}] needs an https URL`);
    }
  }

  // ---- lessons ----
  if(!Array.isArray(t.lessons) || t.lessons.length < 4 || t.lessons.length > 8){
    fail(id, `lessons must have 4-8 entries, found ${t.lessons?.length}`);
  }
  const stateLessons = (t.lessons || []).filter(l => l.stateSpecific);
  if(stateLessons.length > 1) fail(id, `${stateLessons.length} lessons are marked stateSpecific — only one is allowed`);
  if(stateLessons.length === 1 && !t.lessons[t.lessons.length - 1].stateSpecific){
    fail(id, 'the stateSpecific lesson must be last');
  }
  if(t.scope !== 'federal' && stateLessons.length === 0){
    fail(id, 'a state-scoped track needs one stateSpecific lesson');
  }
  if(t.scope === 'federal' && stateLessons.length) fail(id, 'a federal track must not have a stateSpecific lesson');
  (t.lessons || []).forEach((l, i) => {
    for(const f of ['t','d','len']) if(!l[f]) fail(id, `lesson ${i} is missing "${f}"`);
    if(l.stateSpecific){
      if(l.script !== null) fail(id, `lesson ${i} is stateSpecific so its script must be null`);
    } else {
      const words = String(l.script || '').trim().split(/\s+/).length;
      if(!l.script) fail(id, `lesson ${i} has no script`);
      else if(words < 40) warn(id, `lesson ${i} narration is only ${words} words`);
    }
  });

  // ---- summary ----
  if(!Array.isArray(t.summarySections) || t.summarySections.length < 3 || t.summarySections.length > 5){
    fail(id, `summarySections must have 3-5 entries, found ${t.summarySections?.length}`);
  }
  (t.summarySections || []).forEach((s, i) => {
    if(!s.h) fail(id, `summary section ${i} has no heading`);
    if(!Array.isArray(s.items) || !s.items.length) fail(id, `summary section ${i} has no items`);
  });

  // ---- quiz ----
  if(!Array.isArray(t.quiz) || t.quiz.length < 8) fail(id, `quiz needs 8+ questions, found ${t.quiz?.length}`);
  const seen = new Set();
  (t.quiz || []).forEach((q, i) => {
    if(!q.q) fail(id, `quiz ${i} has no question text`);
    if(seen.has(q.q)) fail(id, `quiz ${i} duplicates an earlier question`);
    seen.add(q.q);
    if(!Array.isArray(q.opts) || q.opts.length < 2) fail(id, `quiz ${i} needs at least 2 options`);
    if(!Number.isInteger(q.a) || q.a < 0 || q.a >= (q.opts || []).length){
      fail(id, `quiz ${i} answer index ${q.a} is out of range — this teaches the wrong answer`);
    }
    if(new Set(q.opts || []).size !== (q.opts || []).length) fail(id, `quiz ${i} has duplicate options`);
    if(!q.explanation) warn(id, `quiz ${i} has no explanation`);
  });

  // ---- flashcards ----
  if(!Array.isArray(t.flashcards) || t.flashcards.length < 10){
    fail(id, `flashcards need 10+ cards, found ${t.flashcards?.length}`);
  }
  (t.flashcards || []).forEach((c, i) => {
    if(!c.f || !c.b) fail(id, `flashcard ${i} is missing a side`);
  });

  // ---- state module ----
  if(t.scope === 'federal'){
    if(t.stateModule) fail(id, 'a federal track must have stateModule: null');
    if(t.stateSpecs && Object.keys(t.stateSpecs).length) fail(id, 'a federal track must not carry stateSpecs');
    if(!t.globalSpec) fail(id, 'a federal track needs a globalSpec');
  } else {
    const sm = t.stateModule;
    if(!sm) fail(id, 'a state-scoped track needs a stateModule');
    else {
      for(const f of ['titleSuffix','summaryHeading','scriptTemplate']){
        if(!sm[f]) fail(id, `stateModule is missing "${f}"`);
      }
      if(sm.scriptTemplate && !sm.scriptTemplate.includes('{STATE}')){
        fail(id, 'stateModule.scriptTemplate has no {STATE} placeholder');
      }
      // If no summary section carries this heading, the per-state swap never happens and
      // every state silently shows the same generic heading.
      if(sm.summaryHeading && !(t.summarySections || []).some(s => s.h === sm.summaryHeading)){
        fail(id, `stateModule.summaryHeading "${sm.summaryHeading}" matches no summarySections heading`);
      }
    }
    if(!t.genericSpecNote) fail(id, 'a state-scoped track needs a genericSpecNote fallback');
    if(!t.stateSpecs || !Object.keys(t.stateSpecs).length) fail(id, 'a state-scoped track needs stateSpecs');

    const specKeys = Object.keys(t.stateSpecs || {});
    const missing = [...ABBRS].filter(abbr => !t.stateSpecs?.[abbr]);
    if(specKeys.length !== JURISDICTION_COUNT || missing.length){
      fail(id, `stateSpecs must cover all ${JURISDICTION_COUNT} jurisdictions; missing ${missing.join(', ') || 'none'}`);
    }
    const unverified = Object.entries(t.stateSpecs || {})
      .filter(([, spec]) => spec.verified !== true)
      .map(([abbr]) => abbr);
    if(unverified.length){
      fail(id, `${unverified.length} jurisdiction(s) remain unverified: ${unverified.join(', ')}`);
    }
  }
  if(t.scope === 'national-plus-state' && !t.globalSpec){
    fail(id, 'a national-plus-state track needs a globalSpec for the national credential');
  }

  // ---- exam data ----
  if(t.globalSpec) checkSpec(id, 'globalSpec', t.globalSpec);
  for(const [abbr, spec] of Object.entries(t.stateSpecs || {})){
    if(!ABBRS.has(abbr)) fail(id, `stateSpecs key "${abbr}" is not a jurisdiction`);
    checkSpec(id, `stateSpecs.${abbr}`, spec);
  }

  // ---- landing highlights ----
  for(const h of t.highlights || []){
    if(!ABBRS.has(h.abbr)) fail(id, `highlight references "${h.abbr}", which is not a jurisdiction`);
    if(!h.fact || !h.exp) fail(id, `highlight for ${h.abbr} is missing fact or exp`);
    if(t.stateSpecs && !t.stateSpecs[h.abbr]) warn(id, `highlight for ${h.abbr} has no matching stateSpecs entry`);
  }
}

// ---- catalog ----
const grouped = TRACK_GROUPS.flatMap(g => g.ids);
for(const id of grouped) if(!TRACKS[id]) fail('catalog', `group lists "${id}", which has no track module`);
for(const id of Object.keys(TRACKS)) if(!grouped.includes(id)) fail('catalog', `"${id}" is in no selector group, so it is unreachable`);
if(new Set(grouped).size !== grouped.length) fail('catalog', 'a track appears in more than one selector group');
if(!TRACKS[DEFAULT_TRACK_ID]) fail('catalog', `DEFAULT_TRACK_ID "${DEFAULT_TRACK_ID}" has no track module`);

// ---- summary ----
console.log('');
const rows = Object.values(TRACKS).map(t => {
  const specs = t.stateSpecs || {};
  const n = Object.keys(specs).length;
  const v = Object.values(specs).filter(s => s.verified).length;
  return [t.id.padEnd(17), t.scope.padEnd(21),
          String(t.lessons?.length ?? 0).padStart(2) + ' lessons',
          String(t.quiz?.length ?? 0).padStart(3) + ' quiz',
          String(t.flashcards?.length ?? 0).padStart(3) + ' cards',
          t.scope === 'federal'
            ? `${String(t.globalSpec?.verified ? JURISDICTION_COUNT : 0).padStart(2)}/${JURISDICTION_COUNT} nationwide`
            : `${String(v).padStart(2)}/${String(n).padStart(2)} verified`].join('  ');
});
rows.forEach(r => console.log('  ' + r));
const coverageUnits = Object.values(TRACKS).reduce((sum, t) => {
  if(t.scope === 'federal') return sum + (t.globalSpec?.verified ? JURISDICTION_COUNT : 0);
  return sum + Object.values(t.stateSpecs || {}).filter(spec => spec.verified).length;
}, 0);
const expectedUnits = Object.keys(TRACKS).length * JURISDICTION_COUNT;
if(coverageUnits !== expectedUnits) fail('coverage', `${coverageUnits}/${expectedUnits} track-jurisdiction units verified`);
console.log(`\n  ${Object.keys(TRACKS).length} tracks × ${JURISDICTION_COUNT} jurisdictions = ${coverageUnits}/${expectedUnits} verified coverage units`);
console.log(`  ${errors} error(s) · ${warnings} warning(s)\n`);
process.exit(errors ? 1 : 0);
