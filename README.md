# StateLine — Licensing Prep

Life & Health insurance licensing exam prep. A clickable map of all 51 US jurisdictions;
each state opens a study hub with audio lessons, a summary guide, a practice test, and flashcards.

## Why this exists

Almost every prep course teaches one national curriculum. About 85% of Life & Health content
genuinely is identical everywhere — but the remaining 15% is where candidates fail, and it is
different in every state. Generic material silently gets this wrong.

Verified examples:

| Jurisdiction | Reality | What generic material says |
|---|---|---|
| Nevada | Passing score is a scaled **80** | 70% |
| Montana | **75%** | 70% |
| Michigan | **72%** Life / **73%** combined | 70% |
| Mississippi | **65%** for L&H lines (70% for P&C) | 70% |
| California | **60%** | 70% |
| Alabama | Exam run by the **University of Alabama**, not a national vendor | PSI/Pearson VUE |
| Kentucky | Exam run by the **Dept. of Insurance** itself | PSI/Pearson VUE |

13 jurisdictions have **no combined Life & Health exam** at all (CO, NC, NJ, MA, WI, RI, DE, FL, IL, TN…).
Several score on a scale rather than a raw percentage, so "X out of Y correct" targets don't apply.

## Data integrity rules

`src/data/exam-specs.js` is the core asset. Read the header before editing.

- Every field traces to a **state DOI** or an **official testing-vendor candidate handbook**.
- `'unconfirmed'` means no primary source published that field. **Do not** replace it with a
  plausible number. Third-party prep sites were repeatedly found contradicting each other and
  the states themselves.
- `confidence: 'partial'` = vendor and format are solid, some field still unsourced.
  No `confidence` key = fully verified.
- Testing vendors change. Four switches were caught during research (AZ 2025, SC 2023, OK 2023,
  UT 2020, NH July 2025). When sources disagree on vendor, it is almost always a stale source —
  check the state's own site for a "new testing vendor" notice.

Current coverage: **51/51 jurisdictions**, vendor confirmed for 50 (DC outstanding),
passing score for 43.

## Structure

```
index.html            page shell
assets/               brand logo (mark + full lockup)
src/styles/app.css    all styles; brand colors sampled from the logo
src/js/app.js         app logic (ES module)
src/data/
  exam-specs.js       per-jurisdiction exam specifications + sources
  curriculum.js       shared national curriculum, quiz, flashcards
  us-states.json      public-domain SVG paths + names for 51 jurisdictions
```

## Run locally

```bash
npm run dev          # serves at http://localhost:3000
```

Any static server works — there is no build step.

## Deploy

Zero-config static deploy on Vercel. Import the repo; no build command or output directory needed.

## Known gaps

- **Audio** is browser speech synthesis (Web Speech API) as a working stopgap. The player checks
  for `audioUrl` on each lesson first, so dropping in produced MP3s is a one-line change per lesson.
- **Exam fees** are unsourced for 32 jurisdictions — they live behind vendor scheduling portals
  and change often. Left as `unconfirmed` rather than guessed.
- **DC's testing vendor** is the one unresolved vendor field.
- Progress is stored per-browser. There is no auth or backend yet.
