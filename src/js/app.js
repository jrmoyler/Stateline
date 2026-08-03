// StateLine - licensing and certification prep across 23 credential tracks.
// Interactive 51-jurisdiction map + per-state (or per-credential) study hub.
//
// One map, many tracks. The map itself never changes; what changes is which track's
// data the detail panel reads from. State-licensed tracks use the map as a picker.
// Federal tracks (PMP, CISSP, the cloud certs, EA, AFSP) have one exam nationwide, so
// the map dims and any click opens the same single spec.

import stateData from '../data/us-states.json' with { type: 'json' };
import { TRACKS, TRACK_GROUPS, DEFAULT_TRACK_ID } from '../data/tracks/index.js';

const STATE_DATA = stateData;
const GLOBAL_KEY = '__global';   // progress key for tracks with no state dimension

// ---- App state ----
let currentTrackId = DEFAULT_TRACK_ID;
let currentAbbr = null;
let progress = {};   // trackId -> (abbr | '__global') -> {status, quizBest, lessonsPlayed, flashSeen}
let quizIdx = 0, quizScore = 0, quizAnswered = false;
let flashIdx = 0;
let speaking = null; // trackId+abbr+lessonIdx currently playing

const track = () => TRACKS[currentTrackId];
const isFederal = () => track().scope === 'federal';

// ---- Persistence ----
// window.storage when the host provides it (private to the signed-in user), localStorage
// otherwise, so a plain static deploy still remembers where you got to.
const PROGRESS_KEY = 'stateline-progress-v2';
const LEGACY_PROGRESS_KEY = 'stateline-progress';   // pre-tracks: a bare map of state -> progress
const TRACK_KEY = 'stateline-current-track';

let storageBackend = 'none';
const store = {
  async get(key){
    if(window.storage && window.storage.get){
      const res = await window.storage.get(key);
      storageBackend = 'account';
      return res && res.value ? res.value : null;
    }
    const v = localStorage.getItem(key);
    storageBackend = 'local';
    return v;
  },
  async set(key, value){
    if(window.storage && window.storage.set) return window.storage.set(key, value);
    localStorage.setItem(key, value);
  },
};

const STORAGE_NOTE = {
  account: 'Progress saved privately to your account.',
  local:   'Progress saved in this browser only.',
  none:    'Storage unavailable this session — progress will reset on reload.',
};

async function loadProgress(){
  try{
    const raw = await store.get(PROGRESS_KEY);
    if(raw){
      progress = JSON.parse(raw);
    } else {
      // Migrate a pre-tracks save: the old flat {CA:{...}} was all Life & Health.
      const legacy = await store.get(LEGACY_PROGRESS_KEY);
      progress = legacy ? {lh: JSON.parse(legacy)} : {};
      if(legacy) await saveProgress();
    }
    const saved = await store.get(TRACK_KEY);
    if(saved && TRACKS[saved]) currentTrackId = saved;
  }catch(e){
    progress = {};
    storageBackend = 'none';
  }
  document.getElementById('storage-flag').textContent = STORAGE_NOTE[storageBackend];
  applyTrack();
}

async function saveProgress(){
  try{
    await store.set(PROGRESS_KEY, JSON.stringify(progress));
  }catch(e){
    console.error('Could not save progress', e);
  }
}

// Federal tracks collapse every state onto one record; state tracks keep 51.
function entryKey(abbr){ return isFederal() ? GLOBAL_KEY : abbr; }
function trackProgress(id = currentTrackId){
  if(!progress[id]) progress[id] = {};
  return progress[id];
}
function getEntry(abbr){
  const p = trackProgress();
  const key = entryKey(abbr);
  if(!p[key]) p[key] = {status:'not-started', quizBest:null, lessonsPlayed:[], flashSeen:[]};
  return p[key];
}

// ---- Build map ----
const svg = document.getElementById('usmap');
const tooltip = document.getElementById('map-tooltip');
const paths = STATE_DATA.paths;
const names = STATE_DATA.names;

Object.keys(paths).forEach(abbr => {
  const p = document.createElementNS('http://www.w3.org/2000/svg','path');
  p.setAttribute('d', paths[abbr]);
  p.setAttribute('data-abbr', abbr);
  svg.appendChild(p);
  p.addEventListener('mousemove', (e) => {
    const rect = svg.getBoundingClientRect();
    tooltip.style.left = (e.clientX - rect.left) + 'px';
    tooltip.style.top = (e.clientY - rect.top) + 'px';
    tooltip.innerHTML = isFederal()
      ? '<b>' + names[abbr] + '</b> · one exam nationwide'
      : '<b>' + names[abbr] + '</b>' + tooltipSuffix(abbr);
    tooltip.style.opacity = 1;
  });
  p.addEventListener('mouseleave', () => tooltip.style.opacity = 0);
  p.addEventListener('click', () => selectState(abbr));
});

function tooltipSuffix(abbr){
  const spec = (track().stateSpecs || {})[abbr];
  if(!spec) return '';
  return spec.verified ? ' · verified specs' : ' · unverified draft';
}

function refreshMapClasses(){
  const p = trackProgress();
  svg.classList.toggle('federal', isFederal());
  document.querySelectorAll('#usmap path').forEach(path => {
    const abbr = path.getAttribute('data-abbr');
    path.classList.remove('status-inprogress','status-ready','selected');
    const entry = p[entryKey(abbr)];
    if(entry && entry.status === 'in-progress') path.classList.add('status-inprogress');
    if(entry && entry.status === 'ready') path.classList.add('status-ready');
    if(abbr === currentAbbr) path.classList.add('selected');
  });
  const vals = Object.values(p);
  document.getElementById('stat-ready').textContent = vals.filter(s=>s.status==='ready').length;
  document.getElementById('stat-progress').textContent = vals.filter(s=>s.status==='in-progress').length;
}

// ---- Track selector ----
function buildTrackSelect(el){
  el.innerHTML = TRACK_GROUPS.map(g =>
    '<optgroup label="'+esc(g.label)+'">'
    + g.ids.filter(id => TRACKS[id]).map(id =>
        '<option value="'+esc(id)+'">'+esc(TRACKS[id].name)+'</option>').join('')
    + '</optgroup>'
  ).join('');
  el.value = currentTrackId;
  el.addEventListener('change', () => setTrack(el.value));
}

async function setTrack(id){
  if(!TRACKS[id] || id === currentTrackId) return;
  stopSpeech();
  currentTrackId = id;
  closeDetail();
  try{ await store.set(TRACK_KEY, id); }catch(e){ /* the selection is not worth failing over */ }
  applyTrack();
}

// Everything that has to change when the active credential changes.
function applyTrack(){
  const t = track();
  document.querySelectorAll('.track-select').forEach(el => { el.value = currentTrackId; });
  document.body.dataset.accent = t.accent || 'insurance';

  const specs = t.stateSpecs || {};
  const stateCount = Object.keys(specs).length;
  const verifiedCount = Object.values(specs).filter(s => s.verified).length;
  const totalCount = Object.keys(names).length;

  // Header
  document.getElementById('stat-scope').textContent = isFederal() ? '1' : totalCount;
  document.getElementById('stat-scope-label').textContent = isFederal() ? 'national exam' : 'jurisdictions';

  // Map panel
  document.getElementById('map-head-title').textContent = isFederal() ? 'One exam, everywhere' : 'Pick your state';
  document.getElementById('map-head-sub').textContent = isFederal()
    ? t.full + ' is a single national credential — the exam is identical in every state. Click anywhere on the map to open the study hub.'
    : 'Click any state to open its study hub. The core curriculum is shared everywhere — each state adds its own rules module.';
  document.getElementById('map-footnote').textContent = isFederal()
    ? t.full + ' has no state-by-state variation, so there is nothing to verify per jurisdiction. The exam specification is cited under the spec box.'
    : verifiedCount + ' of ' + totalCount + ' jurisdictions have ' + t.name + ' requirements sourced from a state board or an official vendor handbook, each cited under the spec box. '
      + (stateCount - verifiedCount > 0
          ? (stateCount - verifiedCount) + ' more are compiled from secondary sources and labeled unverified — don’t publish those as fact.'
          : 'Anything not yet researched shows a typical range and is labeled unverified.');

  // Empty state
  document.getElementById('empty-title').textContent = isFederal() ? 'Open the study hub' : 'No state selected';
  document.getElementById('empty-body').textContent = isFederal()
    ? 'Click anywhere on the map to open the ' + t.full + ' study hub — audio lessons, a summary guide, a practice test, and flashcards.'
    : 'Click a state on the map to see its ' + t.full + ' study hub — audio lessons, a summary guide, a practice test, and flashcards.';
  const hint = document.getElementById('empty-hint');
  if(isFederal() || !stateCount){
    hint.textContent = '';
  } else {
    const examples = Object.keys(specs).filter(a => specs[a].verified).slice(0, 4).map(a => names[a]);
    hint.innerHTML = examples.length
      ? 'Verified so far: <b>' + examples.map(esc).join('</b>, <b>') + '</b>'
        + (verifiedCount > examples.length ? ' and ' + (verifiedCount - examples.length) + ' more.' : '.')
      : 'Every jurisdiction in this track is still a compiled draft — check each one against its state board.';
  }

  document.getElementById('detail-kicker').textContent = t.full;
  renderLanding();
  refreshMapClasses();
  renderDashboard();
}

// ---- View toggle ----
document.querySelectorAll('.view-toggle button').forEach(b=>{
  b.addEventListener('click', () => {
    document.querySelectorAll('.view-toggle button').forEach(x=>x.classList.toggle('active', x===b));
    document.getElementById('map-view').classList.toggle('active', b.dataset.view==='map');
    document.getElementById('dashboard-view').classList.toggle('active', b.dataset.view==='dashboard');
    if(b.dataset.view === 'dashboard') renderDashboard();
  });
});

// ---- Spec rendering ----
// Four states: fully verified, verified with a caveat, compiled but unverified, and nothing
// at all. They look different on purpose — the whole point of the app is that you can tell
// at a glance how much weight a number will bear.
function specBlock(spec, label){
  if(!spec) return '';
  let badgeLabel = '✓ Verified', badgeClass = 'yes', caution = '';
  const openFieldText = [spec.vendor, spec.questions, spec.time, spec.pass, spec.fee, spec.note, spec.source]
    .filter(Boolean).join(' ');
  const hasOpenFields = /\bunconfirmed\b|\breported\b|secondary source|not directly read|not sourced|retrieval blocked/i.test(openFieldText);
  if(!spec.verified){
    badgeLabel = '⚠ Unverified draft';
    badgeClass = 'warn';
    caution = 'Compiled from secondary sources. Confirm every figure with the issuing authority before you rely on it.';
    // An unverified entry can still say precisely what is unknown, and that is worth more
    // than the generic warning on its own.
    if(spec.confidence) caution += ' ' + spec.confidence;
  } else if(spec.confidence || hasOpenFields){
    badgeLabel = '△ Verified with open fields';
    badgeClass = 'no';
    caution = spec.confidence
      || 'The issuing authority or official program baseline was reviewed, but one or more fields are unpublished or still rely on clearly labeled secondary reporting. No estimate has been promoted to fact.';
  }
  const research = track().research;
  const baseline = research?.sources?.[0];
  const researchLine = baseline
    ? '<div class="source-line">Research baseline: <a href="'+esc(baseline.url)+'" target="_blank" rel="noopener">'
      + esc(baseline.authority) + '</a> · reviewed ' + esc(research.reviewedAt) + '</div>'
    : '';
  return (label ? '<div class="spec-label">'+esc(label)+'</div>' : '')
    + '<span class="verified-badge '+badgeClass+'">'+badgeLabel+'</span>'
    + (caution ? '<div class="exam-note caution">'+esc(caution)+'</div>' : '')
    + '<div class="spec-grid">'
    + specCell('Vendor', spec.vendor)
    + specCell('Questions', spec.questions)
    + specCell('Time limit', spec.time)
    + specCell('Passing score', spec.pass)
    + specCell('Fee', spec.fee)
    + '</div>'
    + '<div class="exam-note">'+esc(spec.note)+'</div>'
    + '<div class="source-line">State/credential evidence: '+esc(spec.source)+'</div>'
    + researchLine;
}
function specCell(label, value){
  const v = value === undefined || value === null || value === '' ? '—' : value;
  const unknown = /^unconfirmed/i.test(String(v));
  return '<div><b>'+label+'</b><span'+(unknown ? ' class="unknown"' : '')+'>'+esc(v)+'</span></div>';
}
function noSpecBlock(){
  return '<span class="verified-badge no">Not yet verified</span>'
    + '<div class="exam-note">'+esc(track().genericSpecNote
        || 'Requirements for this jurisdiction have not been researched yet. Confirm with the issuing authority before relying on anything here.')+'</div>';
}

// ---- Select a jurisdiction ----
function selectState(abbr){
  stopSpeech();
  currentAbbr = abbr;
  const t = track();
  document.getElementById('detail-empty').style.display = 'none';
  document.getElementById('detail-content').style.display = 'block';
  document.getElementById('state-title').textContent = isFederal() ? t.full : names[abbr];

  const stateSpec = (t.stateSpecs || {})[abbr];
  const box = document.getElementById('spec-box');
  if(isFederal()){
    box.innerHTML = specBlock(t.globalSpec) || noSpecBlock();
  } else {
    // Two things are often true at once: the exam is national while the licence is not.
    // CPA is the clearest case — one Uniform CPA Exam, 51 different boards deciding what
    // else you owe them. The NAR designations and the NIC beauty exams work the same way.
    // Show whichever apply, national first, because that is the order you meet them in.
    const national = t.scope === 'national-plus-state'
      ? t.name + ' — national credential'
      : t.name + ' — national exam';
    const local = t.scope === 'national-plus-state'
      ? names[abbr] + ' licence — required first'
      : names[abbr] + ' — state licensure';
    const blocks = [];
    if(t.globalSpec) blocks.push(specBlock(t.globalSpec, national));
    blocks.push(stateSpec
      ? specBlock(stateSpec, t.globalSpec ? local : '')
      : (t.globalSpec ? '<div class="spec-label">'+esc(local)+'</div>' : '') + noSpecBlock());
    box.innerHTML = blocks.join('<div class="spec-divider"></div>');
  }

  const st = getEntry(abbr);
  document.querySelectorAll('.status-btn').forEach(b=>{
    b.classList.toggle('active', b.dataset.status === st.status);
  });

  renderLessons(abbr);
  renderSummary(abbr);
  resetQuiz();
  resetFlash();
  switchTab('audio');
  refreshMapClasses();
}

function closeDetail(){
  stopSpeech();
  currentAbbr = null;
  document.getElementById('detail-empty').style.display = 'flex';
  document.getElementById('detail-content').style.display = 'none';
  refreshMapClasses();
}
document.getElementById('close-detail').addEventListener('click', closeDetail);

document.querySelectorAll('.status-btn').forEach(btn=>{
  btn.addEventListener('click', () => {
    if(!currentAbbr) return;
    getEntry(currentAbbr).status = btn.dataset.status;
    document.querySelectorAll('.status-btn').forEach(b=>b.classList.toggle('active', b===btn));
    refreshMapClasses();
    saveProgress();
  });
});

// ---- Tabs ----
document.querySelectorAll('.tab-btn').forEach(btn=>{
  btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});
function switchTab(tab){
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.toggle('active', b.dataset.tab===tab));
  document.querySelectorAll('.tab-pane').forEach(p=>p.classList.remove('active'));
  document.getElementById('pane-'+tab).classList.add('active');
}

// ---- Audio (Web Speech API today; audioUrl-ready for produced files) ----
function stopSpeech(){
  if('speechSynthesis' in window) window.speechSynthesis.cancel();
  speaking = null;
  document.querySelectorAll('.lesson-item .play').forEach(b=>b.classList.remove('playing'));
}

// The state module's title and narration come from the track's stateModule template, so
// every track gets a per-state lesson without any track-specific code here.
function lessonTitle(lesson, abbr){
  if(!lesson.stateSpecific) return lesson.t;
  const sm = track().stateModule;
  return names[abbr] + ' ' + ((sm && sm.titleSuffix) || 'Rules & Regulations');
}
function lessonScript(lesson, abbr){
  if(!lesson.stateSpecific) return lesson.script;
  const sm = track().stateModule;
  if(sm && sm.scriptTemplate) return sm.scriptTemplate.split('{STATE}').join(names[abbr]);
  return names[abbr] + ' rules and regulations for this credential. Confirm the current requirements with the issuing authority before relying on this module.';
}

function renderLessons(abbr){
  const list = document.getElementById('lesson-list');
  list.innerHTML = '';
  const st = getEntry(abbr);
  track().lessons.forEach((l, idx)=>{
    const li = document.createElement('li');
    li.className = 'lesson-item';
    const title = lessonTitle(l, abbr);
    const script = lessonScript(l, abbr);
    const played = st.lessonsPlayed.includes(idx);
    li.innerHTML =
      '<button class="play" data-idx="'+idx+'">▶</button>'
      + '<span class="meta"><span class="t">'+esc(title)+'</span><span class="d">'+esc(l.d)+'</span></span>'
      + '<span class="len">'+esc(l.len)+(played ? '<span class="played-mark">✓ played</span>' : '')+'</span>';
    li.querySelector('.play').addEventListener('click', (e)=>{
      e.stopPropagation();
      playLesson(abbr, idx, script, li.querySelector('.play'));
    });
    list.appendChild(li);
  });
}

function playLesson(abbr, idx, scriptText, btn){
  if(!('speechSynthesis' in window)){
    alert('Browser speech synthesis unavailable — wire in a real audioUrl for this lesson instead.');
    return;
  }
  const key = currentTrackId+':'+abbr+':'+idx;
  if(speaking === key){ stopSpeech(); return; }
  stopSpeech();
  speaking = key;
  btn.classList.add('playing');
  const u = new SpeechSynthesisUtterance(scriptText);
  u.rate = 0.98;
  u.onend = () => {
    if(speaking === key){
      const st = getEntry(abbr);
      if(!st.lessonsPlayed.includes(idx)) st.lessonsPlayed.push(idx);
      saveProgress();
      renderLessons(abbr);
      renderDashboard();
    }
    speaking = null;
  };
  window.speechSynthesis.speak(u);
}

// ---- Summary ----
function renderSummary(abbr){
  const t = track();
  const swap = t.stateModule && t.stateModule.summaryHeading;
  const el = document.getElementById('summary-outline');
  el.innerHTML = t.summarySections.map(s=>{
    const heading = (!isFederal() && swap && s.h === swap) ? (names[abbr] + ' Rules Module') : s.h;
    return '<h4>'+esc(heading)+'</h4><ul>'+s.items.map(i=>'<li>'+esc(i)+'</li>').join('')+'</ul>';
  }).join('');
}

// ---- Practice test ----
function resetQuiz(){ quizIdx = 0; quizScore = 0; quizAnswered = false; renderQuiz(); }
function renderQuiz(){
  const quiz = track().quiz;
  const q = quiz[quizIdx];
  const explain = document.getElementById('quiz-explain');
  document.getElementById('quiz-progress').textContent = 'Question ' + (quizIdx+1) + ' of ' + quiz.length;
  document.getElementById('quiz-q').textContent = q.q;
  document.getElementById('quiz-score').textContent = 'Score: ' + quizScore + ' / ' + quizIdx;
  explain.textContent = '';
  explain.style.display = 'none';
  const opts = document.getElementById('quiz-opts');
  opts.innerHTML = '';
  quizAnswered = false;
  document.getElementById('quiz-next').disabled = true;
  q.opts.forEach((optText, i) => {
    const b = document.createElement('button');
    b.className = 'quiz-opt';
    b.textContent = optText;
    b.addEventListener('click', () => {
      if(quizAnswered) return;
      quizAnswered = true;
      if(i === q.a){ b.classList.add('correct'); quizScore++; }
      else { b.classList.add('wrong'); opts.children[q.a].classList.add('correct'); }
      if(q.explanation){
        explain.textContent = q.explanation;
        explain.style.display = 'block';
      }
      document.getElementById('quiz-score').textContent = 'Score: ' + quizScore + ' / ' + (quizIdx+1);
      document.getElementById('quiz-next').disabled = false;
      if(quizIdx === quiz.length - 1 && currentAbbr){
        const pct = Math.round((quizScore/quiz.length)*100);
        const st = getEntry(currentAbbr);
        if(st.quizBest === null || pct > st.quizBest) st.quizBest = pct;
        saveProgress();
        renderDashboard();
      }
    });
    opts.appendChild(b);
  });
}
document.getElementById('quiz-next').addEventListener('click', () => {
  quizIdx = (quizIdx + 1) % track().quiz.length;
  renderQuiz();
});

// ---- Flashcards ----
function resetFlash(){ flashIdx = 0; renderFlash(); }
function renderFlash(){
  const cards = track().flashcards;
  const c = cards[flashIdx];
  document.getElementById('flash-front').textContent = c.f;
  document.getElementById('flash-back').textContent = c.b;
  document.getElementById('flash-pos').textContent = (flashIdx+1) + ' / ' + cards.length;
  document.getElementById('flashcard').classList.remove('flipped');
  if(currentAbbr){
    const st = getEntry(currentAbbr);
    if(!st.flashSeen.includes(flashIdx)){ st.flashSeen.push(flashIdx); saveProgress(); }
  }
}
document.getElementById('flashcard').addEventListener('click', function(){ this.classList.toggle('flipped'); });
document.getElementById('flash-prev').addEventListener('click', (e)=>{
  e.stopPropagation();
  const n = track().flashcards.length;
  flashIdx = (flashIdx - 1 + n) % n;
  renderFlash();
});
document.getElementById('flash-next').addEventListener('click', (e)=>{
  e.stopPropagation();
  flashIdx = (flashIdx + 1) % track().flashcards.length;
  renderFlash();
});

// ---- Dashboard ----
function renderDashboard(){
  const t = track();
  const entries = Object.entries(trackProgress())
    .filter(([,st]) => st.status !== 'not-started' || st.quizBest !== null || st.lessonsPlayed.length);
  document.getElementById('d-total').textContent = entries.length;
  document.getElementById('d-total-label').textContent = isFederal() ? 'Track started' : 'States touched';
  document.getElementById('d-progress').textContent = entries.filter(([,s])=>s.status==='in-progress').length;
  document.getElementById('d-ready').textContent = entries.filter(([,s])=>s.status==='ready').length;
  const scored = entries.filter(([,s])=>s.quizBest !== null);
  document.getElementById('d-quizavg').textContent = scored.length
    ? Math.round(scored.reduce((sum,[,s])=>sum+s.quizBest,0)/scored.length) + '%'
    : '—';
  document.getElementById('dash-track').textContent = t.full;

  const table = document.getElementById('dash-table');
  if(!entries.length){
    table.innerHTML = '<div class="dash-empty">Nothing tracked for ' + esc(t.name) + ' yet — '
      + (isFederal() ? 'open the study hub' : 'click a state on the map')
      + ' and change its status, play a lesson, or take the practice test to see it here.</div>';
    return;
  }
  const label = entry => entry[0] === GLOBAL_KEY ? t.full : (names[entry[0]] || entry[0]);
  entries.sort((a,b)=> label(a).localeCompare(label(b)));
  let rows = '<div class="dash-row head"><div>'+(isFederal() ? 'Credential' : 'State')
    + '</div><div>Status</div><div>Lessons played</div><div>Flashcards seen</div><div>Best quiz score</div></div>';
  entries.forEach(entry=>{
    const st = entry[1];
    const pct = Math.round((st.lessonsPlayed.length / t.lessons.length) * 100);
    rows += '<div class="dash-row">'
      + '<div><b>'+esc(label(entry))+'</b></div>'
      + '<div><span class="dash-status-pill '+st.status+'">'+st.status.replace('-',' ')+'</span></div>'
      + '<div>'+st.lessonsPlayed.length+' / '+t.lessons.length+'<div class="bar-track"><div class="bar-fill" style="width:'+pct+'%"></div></div></div>'
      + '<div>'+st.flashSeen.length+' / '+t.flashcards.length+'</div>'
      + '<div>'+(st.quizBest===null ? '—' : st.quizBest+'%')+'</div>'
      + '</div>';
  });
  table.innerHTML = rows;
}

// ---- Landing ----
// The landing sells one idea: the requirement you were told is the national one is not the
// one that applies to you. Every track argues that differently, so the copy and the proof
// cells are both derived from the active track's own data.
function renderLanding(){
  const t = track();
  const landing = document.getElementById('landing');
  if(!landing) return;

  const totalCount = Object.keys(names).length;
  const specs = t.stateSpecs || {};
  const stateCount = Object.keys(specs).length;
  const verifiedCount = Object.values(specs).filter(s => s.verified).length;

  document.getElementById('hero-eyebrow').textContent = t.full;
  document.getElementById('hero-headline').innerHTML = isFederal()
    ? 'One exam. <em>Everything</em> riding on it.'
    : 'Your exam isn’t the <em>same</em> as their exam.';
  document.getElementById('hero-lede').innerHTML = isFederal()
    ? esc(t.tagline) + ' No state variation to chase — just the published specification, the domain weights, and the material that is actually tested. <b>Sourced from the issuing body, not from a prep-site summary.</b>'
    : 'Every prep course teaches the same national curriculum &mdash; because most of it genuinely is the same. The rest is where people fail: <b>your state’s rules module, your vendor, your passing score.</b> Start from your state, not from a generic course.';

  document.getElementById('nav-note').textContent = isFederal() ? 'National credential' : totalCount + ' jurisdictions';
  document.getElementById('diffs-head').textContent = isFederal()
    ? 'What the exam actually asks for'
    : 'No two states test the same way';
  document.getElementById('diffs-sub').textContent = isFederal()
    ? 'Specification taken from the issuing body’s own published exam guide.'
    : verifiedCount + ' of ' + totalCount + ' jurisdictions verified so far against state boards and official testing-vendor handbooks. Every state is labeled with its status and source.';

  document.getElementById('diff-grid').innerHTML = landingCells(t).map(c =>
    '<article class="diff-cell"><div class="st">'+esc(c.st)+'</div><div class="fact">'+esc(c.fact)+'</div><p class="exp">'+esc(c.exp)+'</p></article>'
  ).join('');

  document.getElementById('inside-audio').textContent =
    t.lessons.length + ' modules covering the core curriculum'
    + (isFederal() ? ', organised the way the exam blueprint organises it.' : ', with the last one rewritten for your state’s rules and regulations.');
  document.getElementById('inside-practice').textContent =
    t.quiz.length + ' scored questions, each one explaining why the right answer is right — so a wrong answer teaches you something.';
  document.getElementById('inside-flash').textContent =
    t.flashcards.length + ' cards on the definitions that carry the most marks on this exam.';
  document.getElementById('foot-note').textContent = isFederal()
    ? 'Every exam specification is labeled with its verification status and source.'
    : 'Every jurisdiction’s requirements are labeled with verification status and source'
      + (stateCount ? ' — ' + verifiedCount + ' of ' + stateCount + ' verified against a primary source.' : '.');

  landingHighlightMap(t);
}

// Curated cells when the track supplies them, otherwise derived from real data — the
// federal specification, or four jurisdictions that actually differ from each other.
function landingCells(t){
  if(t.highlights && t.highlights.length){
    return t.highlights.slice(0, 4).map(h => ({st: names[h.abbr] || h.abbr, fact: h.fact, exp: h.exp}));
  }
  if(isFederal() && t.globalSpec){
    const g = t.globalSpec;
    return [
      {st:'Questions',     fact: firstFragment(g.questions), exp: g.questions},
      {st:'Time limit',    fact: firstFragment(g.time),      exp: g.time},
      {st:'Passing score', fact: firstFragment(g.pass),      exp: g.pass},
      {st:'Fee',           fact: firstFragment(g.fee),       exp: g.fee},
    ];
  }
  const specs = t.stateSpecs || {};
  const picks = Object.keys(specs).filter(a => specs[a].verified).slice(0, 4);
  return picks.map(a => ({
    st: names[a] || a,
    fact: firstFragment(specs[a].pass && specs[a].pass !== '—' ? specs[a].pass : specs[a].vendor),
    exp: firstSentence(specs[a].note),
  }));
}
// A headline number has to fit in a card — take the leading figure, not the whole caveat.
function firstFragment(value){
  const s = String(value == null ? '—' : value).trim();
  const m = s.match(/^[^.(—]{1,22}/);
  return ((m ? m[0] : s.slice(0, 22)).trim()) || '—';
}
function firstSentence(value){
  const s = String(value || '').trim();
  const cut = s.indexOf('. ');
  return cut > 0 ? s.slice(0, cut + 1) : s;
}

// Light up the states the copy actually names, so the map and the text agree.
function landingHighlightMap(t){
  const lit = {};
  (t.highlights || []).slice(0, 4).forEach((h, i) => { lit[h.abbr] = i < 2 ? 'lit' : 'lit-sage'; });
  document.querySelectorAll('#landing-map path').forEach(p => {
    p.setAttribute('class', lit[p.getAttribute('data-abbr')] || '');
  });
}

// ---- Landing map: build once, animate west-to-east ----
(function(){
  const landing = document.getElementById('landing');
  if(!landing) return;
  document.body.classList.add('landing-open');

  const lmap = document.getElementById('landing-map');
  // Sort west-to-east using each path's own horizontal position so the reveal follows
  // real geography rather than an arbitrary order.
  const entries = Object.keys(paths).map(abbr => {
    const firstX = parseFloat((paths[abbr].match(/-?\d+\.?\d*/) || [500])[0]);
    return {abbr, x: isNaN(firstX) ? 500 : firstX};
  }).sort((a,b) => a.x - b.x);

  entries.forEach((e, i) => {
    const p = document.createElementNS('http://www.w3.org/2000/svg','path');
    p.setAttribute('d', paths[e.abbr]);
    p.setAttribute('data-abbr', e.abbr);
    p.style.animationDelay = (0.25 + i * 0.012) + 's';
    lmap.appendChild(p);
  });

  document.getElementById('enter-app').addEventListener('click', () => {
    landing.classList.add('leaving');
    document.body.classList.remove('landing-open');
    document.body.classList.add('entered');
    setTimeout(() => { landing.remove(); }, 800);
  });
})();

// ---- Bind the embedded brand assets (kept in CSS vars so they're declared once) ----
(function(){
  const cs = getComputedStyle(document.documentElement);
  const strip = v => v.trim().replace(/^url\(['"]?/, '').replace(/['"]?\)$/, '');
  const full = strip(cs.getPropertyValue('--logo-full'));
  const mark = strip(cs.getPropertyValue('--logo-mark'));
  const hero = document.getElementById('hero-logo');
  if(hero) hero.src = full;
  const fav = document.getElementById('favicon');
  if(fav) fav.href = mark;
  ['app-logo-mark','nav-logo-mark'].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.src = mark;
  });
})();

function esc(s){
  return String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
}

document.querySelectorAll('.track-select').forEach(buildTrackSelect);
loadProgress();
