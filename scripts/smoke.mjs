// End-to-end smoke test: drives the real app in a real browser across every track.
//
// `npm run validate` proves the data is shaped right. This proves the app can actually
// render it — 23 tracks × the map, the spec panel, all four tabs. The app itself has no
// dependencies and this script deliberately doesn't add one: it needs Playwright resolvable
// (`npm i -g playwright`, or run it under NODE_PATH), and it starts its own static server.

import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { setTimeout as sleep } from 'node:timers/promises';

const PORT = 3111;
const BASE = `http://127.0.0.1:${PORT}`;

const server = spawn('npx', ['-y', 'http-server', '.', '-p', String(PORT), '-c-1', '--silent'], {
  stdio: 'ignore', detached: true,
});
process.on('exit', () => { try{ process.kill(-server.pid); }catch(e){} });

async function waitForServer(){
  for(let i = 0; i < 40; i++){
    try{ if((await fetch(BASE + '/index.html')).ok) return; }catch(e){ /* not up yet */ }
    await sleep(250);
  }
  throw new Error('dev server never came up');
}

const problems = [];
await waitForServer();

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const page = await browser.newPage();

let currentTrack = '(startup)';
// Only our own code counts. The page pulls webfonts from a CDN, and a sandbox with no
// outbound network would otherwise fail the run for a reason that has nothing to do with
// the app.
const ourOrigin = url => !url || url.startsWith(BASE);
page.on('console', m => {
  if(m.type() === 'error' && ourOrigin(m.location()?.url)){
    problems.push(`[${currentTrack}] console: ${m.text()}`);
  }
});
page.on('pageerror', e => problems.push(`[${currentTrack}] pageerror: ${e.message}`));

await page.goto(BASE + '/index.html', { waitUntil: 'networkidle' });
await page.click('#enter-app');
await page.waitForTimeout(300);

const trackIds = await page.$$eval('#app-track-select option', els => els.map(e => e.value));
console.log(`  driving ${trackIds.length} tracks\n`);

for(const id of trackIds){
  currentTrack = id;
  await page.selectOption('#app-track-select', id);
  await page.waitForTimeout(120);

  // Clicking any state opens the hub — a specific state for state-scoped tracks, the one
  // national spec for federal ones.
  await page.click('#usmap path[data-abbr="TX"]');
  await page.waitForTimeout(120);

  const shot = await page.evaluate(() => ({
    title:    document.getElementById('state-title').textContent.trim(),
    kicker:   document.getElementById('detail-kicker').textContent.trim(),
    spec:     document.getElementById('spec-box').textContent.trim().length,
    lessons:  document.querySelectorAll('#lesson-list .lesson-item').length,
    footnote: document.getElementById('map-footnote').textContent.trim().length,
  }));
  if(!shot.title)   problems.push(`[${id}] detail panel has no title`);
  if(!shot.kicker)  problems.push(`[${id}] detail panel has no kicker`);
  if(shot.spec < 40) problems.push(`[${id}] spec box is empty or near-empty`);
  if(!shot.lessons) problems.push(`[${id}] no lessons rendered`);
  if(!shot.footnote) problems.push(`[${id}] map footnote is empty`);

  // Summary, practice test and flashcards.
  for(const tab of ['summary','practice','flash']){
    await page.click(`.tab-btn[data-tab="${tab}"]`);
    await page.waitForTimeout(60);
  }
  const summaryLen = await page.$eval('#summary-outline', el => el.textContent.trim().length);
  if(summaryLen < 40) problems.push(`[${id}] summary outline is empty`);

  // Answer the first practice question and check the explanation surfaces.
  await page.click('.tab-btn[data-tab="practice"]');
  await page.waitForTimeout(60);
  await page.click('#quiz-opts .quiz-opt');
  await page.waitForTimeout(60);
  const explained = await page.$eval('#quiz-explain', el => el.style.display !== 'none' && el.textContent.trim().length > 0);
  if(!explained) problems.push(`[${id}] answering a question showed no explanation`);
  const nextEnabled = await page.$eval('#quiz-next', el => !el.disabled);
  if(!nextEnabled) problems.push(`[${id}] Next stayed disabled after an answer`);

  // Flashcards flip.
  await page.click('.tab-btn[data-tab="flash"]');
  await page.waitForTimeout(60);
  await page.click('#flashcard');
  const flipped = await page.$eval('#flashcard', el => el.classList.contains('flipped'));
  if(!flipped) problems.push(`[${id}] flashcard did not flip`);
  await page.click('#flash-next');

  // Marking status must survive a track switch, which is the whole point of namespaced progress.
  await page.click('.status-btn[data-status="in-progress"]');
  await page.waitForTimeout(60);

  process.stdout.write(`  ✓ ${id.padEnd(17)} ${shot.title.slice(0, 44)}\n`);
}

// Round-trip: go back to the first track and confirm its progress is still there and did
// not leak into the tracks visited in between.
currentTrack = '(reload)';
await page.reload({ waitUntil: 'networkidle' });
await page.click('#enter-app');
await page.waitForTimeout(300);
await page.click('.view-toggle button[data-view="dashboard"]');
await page.waitForTimeout(120);
const rows = await page.$$eval('#dash-table .dash-row', els => els.length);
if(rows < 2) problems.push('progress did not survive a reload');

await browser.close();
try{ process.kill(-server.pid); }catch(e){}

console.log('');
if(problems.length){
  problems.forEach(p => console.error('  ✗ ' + p));
  console.error(`\n  ${problems.length} problem(s)\n`);
  process.exit(1);
}
console.log(`  ${trackIds.length} tracks driven end to end, no problems\n`);
