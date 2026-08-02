// StateLine - Life & Health insurance licensing prep
// Interactive 51-jurisdiction map + per-state study hub.

import stateData from '../data/us-states.json' with { type: 'json' };
import { EXAM_SPECS, GENERIC_SPEC_NOTE } from '../data/exam-specs.js';
import { LESSONS, SUMMARY_SECTIONS, QUIZ, FLASHCARDS } from '../data/curriculum.js';

const STATE_DATA = stateData;
// ---- App state ----
let currentAbbr = null;
let progress = {};   // abbr -> {status, quizBest, lessonsPlayed:[idx...], flashSeen:[idx...]}
let quizIdx = 0, quizScore = 0, quizAnswered = false;
let flashIdx = 0;
let speaking = null; // abbr+lessonIdx currently playing

// ---- Persistence (window.storage — personal, private to this user) ----
async function loadProgress(){
  const flag = document.getElementById('storage-flag');
  try{
    const res = await window.storage.get('stateline-progress');
    progress = res && res.value ? JSON.parse(res.value) : {};
    flag.textContent = 'Progress saved privately to your account.';
  }catch(e){
    progress = {};
    flag.textContent = 'Storage unavailable this session — progress will reset on reload.';
  }
  refreshMapClasses();
  renderDashboard();
}
async function saveProgress(){
  try{
    await window.storage.set('stateline-progress', JSON.stringify(progress));
  }catch(e){
    console.error('Could not save progress', e);
  }
}
function getState(abbr){
  if(!progress[abbr]) progress[abbr] = {status:'not-started', quizBest:null, lessonsPlayed:[], flashSeen:[]};
  return progress[abbr];
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
    tooltip.innerHTML = '<b>' + names[abbr] + '</b>' + (EXAM_SPECS[abbr] ? ' · verified specs' : '');
    tooltip.style.opacity = 1;
  });
  p.addEventListener('mouseleave', () => tooltip.style.opacity = 0);
  p.addEventListener('click', () => selectState(abbr));
});

function refreshMapClasses(){
  document.querySelectorAll('#usmap path').forEach(p => {
    const abbr = p.getAttribute('data-abbr');
    p.classList.remove('status-inprogress','status-ready','selected');
    const st = progress[abbr] && progress[abbr].status;
    if(st === 'in-progress') p.classList.add('status-inprogress');
    if(st === 'ready') p.classList.add('status-ready');
    if(abbr === currentAbbr) p.classList.add('selected');
  });
  const vals = Object.values(progress);
  document.getElementById('stat-ready').textContent = vals.filter(s=>s.status==='ready').length;
  document.getElementById('stat-progress').textContent = vals.filter(s=>s.status==='in-progress').length;
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

// ---- Select state ----
function selectState(abbr){
  stopSpeech();
  currentAbbr = abbr;
  document.getElementById('detail-empty').style.display = 'none';
  document.getElementById('detail-content').style.display = 'block';
  document.getElementById('state-title').textContent = names[abbr];

  const spec = EXAM_SPECS[abbr];
  const box = document.getElementById('spec-box');
  if(spec){
    const badgeLabel = spec.confidence ? ('△ Partially verified') : '✓ Verified exam specs';
    const badgeClass = spec.confidence ? 'no' : 'yes';
    box.innerHTML =
      '<span class="verified-badge '+badgeClass+'">'+badgeLabel+'</span>'
      + (spec.confidence ? '<div class="exam-note">'+spec.confidence+'</div>' : '')
      + '<div class="spec-grid">'
      + '<div><b>Vendor</b><span>'+spec.vendor+'</span></div>'
      + '<div><b>Questions</b><span>'+spec.questions+'</span></div>'
      + '<div><b>Time limit</b><span>'+spec.time+'</span></div>'
      + '<div><b>Passing score</b><span>'+spec.pass+'</span></div>'
      + '<div><b>Fee</b><span>'+spec.fee+'</span></div>'
      + '</div>'
      + '<div class="exam-note">'+spec.note+'</div>'
      + '<div class="source-line">Source: '+spec.source+'</div>';
  } else {
    box.innerHTML = '<span class="verified-badge no">Not yet verified</span><div class="exam-note">'+GENERIC_SPEC_NOTE+'</div>';
  }

  const st = getState(abbr);
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

document.getElementById('close-detail').addEventListener('click', () => {
  stopSpeech();
  currentAbbr = null;
  document.getElementById('detail-empty').style.display = 'flex';
  document.getElementById('detail-content').style.display = 'none';
  refreshMapClasses();
});

document.querySelectorAll('.status-btn').forEach(btn=>{
  btn.addEventListener('click', () => {
    if(!currentAbbr) return;
    getState(currentAbbr).status = btn.dataset.status;
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
function renderLessons(abbr){
  const list = document.getElementById('lesson-list');
  list.innerHTML = '';
  const st = getState(abbr);
  LESSONS.forEach((l, idx)=>{
    const li = document.createElement('li');
    li.className = 'lesson-item';
    const title = l.stateSpecific ? (names[abbr] + ' Law, Rules & Regulations') : l.t;
    const script = l.stateSpecific
      ? (names[abbr] + ' law, rules, and regulations. This module covers producer licensing requirements, continuing education, unfair trade practices, and the free look and replacement rules specific to ' + names[abbr] + '. Replace this narration with your verified ' + names[abbr] + ' statute content before publishing.')
      : l.script;
    const played = st.lessonsPlayed.includes(idx);
    li.innerHTML =
      '<button class="play" data-idx="'+idx+'">▶</button>'
      + '<span class="meta"><span class="t">'+title+'</span><span class="d">'+l.d+'</span></span>'
      + '<span class="len">'+l.len+(played ? '<span class="played-mark">✓ played</span>' : '')+'</span>';
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
  const key = abbr+':'+idx;
  if(speaking === key){ stopSpeech(); return; }
  stopSpeech();
  speaking = key;
  btn.classList.add('playing');
  const u = new SpeechSynthesisUtterance(scriptText);
  u.rate = 0.98;
  u.onend = () => {
    if(speaking === key){
      const st = getState(abbr);
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
  const el = document.getElementById('summary-outline');
  el.innerHTML = SUMMARY_SECTIONS.map(s=>{
    const heading = s.h.indexOf('State Law') === 0 ? (names[abbr] + ' Law Module') : s.h;
    return '<h4>'+heading+'</h4><ul>'+s.items.map(i=>'<li>'+i+'</li>').join('')+'</ul>';
  }).join('');
}

// ---- Practice test ----
function resetQuiz(){ quizIdx = 0; quizScore = 0; quizAnswered = false; renderQuiz(); }
function renderQuiz(){
  const q = QUIZ[quizIdx];
  document.getElementById('quiz-progress').textContent = 'Question ' + (quizIdx+1) + ' of ' + QUIZ.length;
  document.getElementById('quiz-q').textContent = q.q;
  document.getElementById('quiz-score').textContent = 'Score: ' + quizScore + ' / ' + quizIdx;
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
      document.getElementById('quiz-score').textContent = 'Score: ' + quizScore + ' / ' + (quizIdx+1);
      document.getElementById('quiz-next').disabled = false;
      if(quizIdx === QUIZ.length - 1 && currentAbbr){
        const pct = Math.round((quizScore/QUIZ.length)*100);
        const st = getState(currentAbbr);
        if(st.quizBest === null || pct > st.quizBest) st.quizBest = pct;
        saveProgress();
        renderDashboard();
      }
    });
    opts.appendChild(b);
  });
}
document.getElementById('quiz-next').addEventListener('click', () => {
  quizIdx = (quizIdx + 1) % QUIZ.length;
  renderQuiz();
});

// ---- Flashcards ----
function resetFlash(){ flashIdx = 0; renderFlash(); }
function renderFlash(){
  const c = FLASHCARDS[flashIdx];
  document.getElementById('flash-front').textContent = c.f;
  document.getElementById('flash-back').textContent = c.b;
  document.getElementById('flash-pos').textContent = (flashIdx+1) + ' / ' + FLASHCARDS.length;
  document.getElementById('flashcard').classList.remove('flipped');
  if(currentAbbr){
    const st = getState(currentAbbr);
    if(!st.flashSeen.includes(flashIdx)){ st.flashSeen.push(flashIdx); saveProgress(); }
  }
}
document.getElementById('flashcard').addEventListener('click', function(){ this.classList.toggle('flipped'); });
document.getElementById('flash-prev').addEventListener('click', (e)=>{ e.stopPropagation(); flashIdx = (flashIdx - 1 + FLASHCARDS.length) % FLASHCARDS.length; renderFlash(); });
document.getElementById('flash-next').addEventListener('click', (e)=>{ e.stopPropagation(); flashIdx = (flashIdx + 1) % FLASHCARDS.length; renderFlash(); });

// ---- Dashboard ----
function renderDashboard(){
  const entries = Object.entries(progress).filter(([abbr,st]) => st.status !== 'not-started' || st.quizBest !== null || st.lessonsPlayed.length);
  document.getElementById('d-total').textContent = entries.length;
  document.getElementById('d-progress').textContent = entries.filter(([,s])=>s.status==='in-progress').length;
  document.getElementById('d-ready').textContent = entries.filter(([,s])=>s.status==='ready').length;
  const scored = entries.filter(([,s])=>s.quizBest !== null);
  document.getElementById('d-quizavg').textContent = scored.length
    ? Math.round(scored.reduce((sum,[,s])=>sum+s.quizBest,0)/scored.length) + '%'
    : '—';

  const table = document.getElementById('dash-table');
  if(!entries.length){
    table.innerHTML = '<div class="dash-empty">No states touched yet — click a state on the map and change its status, play a lesson, or take the practice test to see it here.</div>';
    return;
  }
  entries.sort((a,b)=> names[a[0]].localeCompare(names[b[0]]));
  let rows = '<div class="dash-row head"><div>State</div><div>Status</div><div>Lessons played</div><div>Flashcards seen</div><div>Best quiz score</div></div>';
  entries.forEach(([abbr, st])=>{
    const pct = Math.round((st.lessonsPlayed.length / LESSONS.length) * 100);
    rows += '<div class="dash-row">'
      + '<div><b>'+names[abbr]+'</b></div>'
      + '<div><span class="dash-status-pill '+st.status+'">'+st.status.replace('-',' ')+'</span></div>'
      + '<div>'+st.lessonsPlayed.length+' / '+LESSONS.length+'<div class="bar-track"><div class="bar-fill" style="width:'+pct+'%"></div></div></div>'
      + '<div>'+st.flashSeen.length+' / '+FLASHCARDS.length+'</div>'
      + '<div>'+(st.quizBest===null ? '—' : st.quizBest+'%')+'</div>'
      + '</div>';
  });
  table.innerHTML = rows;
}


// ---- Landing: build map, animate west-to-east, then hand off to the app ----
(function(){
  const landing = document.getElementById('landing');
  if(!landing) return;
  document.body.classList.add('landing-open');

  const lmap = document.getElementById('landing-map');
  // highlight the four states named in the copy, so the map and the text agree
  const HIGHLIGHT = {MI:'lit', CA:'lit', NC:'lit-sage', WA:'lit-sage'};

  // sort west-to-east using each path's own horizontal position so the
  // reveal follows real geography rather than an arbitrary order
  const entries = Object.keys(paths).map(abbr => {
    const firstX = parseFloat((paths[abbr].match(/-?\d+\.?\d*/) || [500])[0]);
    return {abbr, x: isNaN(firstX) ? 500 : firstX};
  }).sort((a,b) => a.x - b.x);

  entries.forEach((e, i) => {
    const p = document.createElementNS('http://www.w3.org/2000/svg','path');
    p.setAttribute('d', paths[e.abbr]);
    if(HIGHLIGHT[e.abbr]) p.setAttribute('class', HIGHLIGHT[e.abbr]);
    p.style.animationDelay = (0.25 + i * 0.012) + 's';
    lmap.appendChild(p);
  });

  // Counts read from EXAM_SPECS so this page never needs hand-editing as states land
  const verifiedCount = Object.keys(EXAM_SPECS).length;
  const totalCount = Object.keys(names).length;
  document.getElementById('nav-note').textContent = totalCount + ' jurisdictions';
  document.getElementById('diffs-sub').textContent =
    verifiedCount + ' of ' + totalCount + ' jurisdictions verified so far against state insurance departments and official testing-vendor handbooks. Every state is labeled with its status and source.';

  // Light up whichever of the featured states currently have verified specs
  function enterApp(){
    landing.classList.add('leaving');
    document.body.classList.remove('landing-open');
    document.body.classList.add('entered');
    setTimeout(() => { landing.remove(); }, 800);
  }
  document.getElementById('enter-app').addEventListener('click', enterApp);
})();

// Keep in-app copy in sync with whatever is actually in EXAM_SPECS
(function(){
  const verified = Object.keys(EXAM_SPECS);
  const total = Object.keys(names).length;
  document.getElementById('map-footnote').textContent =
    verified.length + ' of ' + total + ' jurisdictions have exam specs pulled from state DOI or testing-vendor sources, each cited under the spec box. '
    + 'The rest show typical ranges and are labeled unverified \u2014 don\u2019t publish those as fact.';

  // name a few verified states as examples rather than hard-coding a list that goes stale
  const examples = verified.slice(0, 4).map(a => names[a]);
  document.getElementById('empty-hint').innerHTML =
    'Verified so far: <b>' + examples.join('</b>, <b>') + '</b> and ' + (verified.length - examples.length) + ' more.';
})();

// Bind the embedded brand assets (kept in CSS vars so they're declared once)
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

loadProgress();
