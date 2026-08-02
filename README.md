# StateLine — Licensing Prep

Exam prep for 23 licenses and certifications, on one clickable map of all 51 US jurisdictions.
Pick a credential, pick your state, and get a study hub: audio lessons, a summary guide, a
practice test, and flashcards — built around the rules that actually apply to you.

## Why this exists

Almost every prep course teaches one national curriculum. For most credentials the bulk of that
content genuinely is identical everywhere — but the remainder is where candidates fail, and it is
different in every state. Generic material silently gets this wrong.

Life & Health insurance, the founding track, verified:

| Jurisdiction | Reality | What generic material says |
|---|---|---|
| Montana | A scaled **75** — the highest bar found anywhere | 70% |
| Michigan | **75%** combined, **72%** Life, **76%** Health | 70% |
| Mississippi | **65%** for L&H lines (70% for P&C) | 70% |
| California | **60%**, and the vendor is **PSI** | 70%, Pearson VUE |
| Alabama | Exam run by the **University of Alabama**, not a national vendor | PSI/Pearson VUE |
| Kentucky | Exam run by the **Dept. of Insurance** itself | PSI/Pearson VUE |

Two of those are worth dwelling on, because they show how the errors propagate.

Nearly every guide says Michigan's combined line is 73%. 73% is real — but it belongs to a *different*
Michigan exam, Life, Variable Life and Annuities. The combined Life, Accident & Health cut score is 75%.

And this repository itself used to claim Nevada required a scaled 80, "the highest bar found in any
state," on the strength of three separate secondary sources that agreed with each other. Nevada
Administrative Code 683A.270 says 70, and the Pearson VUE Nevada handbook cites that rule by number.
Three sources agreeing did not make it true. That claim was on the landing page.

A dozen-plus jurisdictions have **no combined Life & Health exam** at all — Life and Health are
separate sittings (AK, CO, DC, DE, HI, IA, ID, MT, NC, ND, NJ, RI, TN, WI, WV among them). Florida,
contrary to what a lot of material says, *does* have one: the 2-15.

And "70%" often isn't a percentage. Many states report a **scaled** 70 on a 0–100 range that their
own handbooks say is neither the count nor the percentage of questions you got right — so there is no
"how many can I miss" to compute. Some states publish no threshold at all.

The same pattern holds everywhere the research went:

- **Cosmetology** — California cut required training from 1,600 hours to 1,000 and eliminated the
  practical exam outright in 2022. Texas and Virginia also dropped to 1,000. A candidate in those
  states buying mannequin practical prep is buying nothing.
- **Nail technology** — Connecticut does not license manicuring at all; Massachusetts asks for
  roughly 100 hours; Alabama asks for 750.
- **CPA** — the credit-retention window moved from 18 months to **30** in 2023, and since 2025 a
  majority of jurisdictions have added a 120-hour-plus-experience pathway alongside the 150-hour rule.
- **Permanent makeup and microblading** are usually regulated as tattooing by a health department,
  not as esthetics by the cosmetology board — and several states require both credentials.

## Track types

The map is a track-aware picker. What a click does depends on the credential:

| Scope | Tracks | Behavior |
|---|---|---|
| `state` | L&H insurance, CPA, esthetician, cosmetology, nail tech, barber, massage, PMU, lash, brow | Click a state → that state's requirements and its own rules module. |
| `federal` | PMP, CSM, Security+, CISSP, AWS SAA, GCP PCA, AZ-104, EA, AFSP | One exam nationwide. The map dims and any click opens the same spec. |
| `national-plus-state` | CRS, RENE, PSA, e-PRO | Two specs: the NAR credential, and the state real estate license you must hold first. |

## Data integrity rules

`src/data/tracks/` is the core asset, and `src/data/tracks/CONTRACT.md` is its spec.
Read it before editing any track.

- Every field traces to the **issuing authority** — a state board, a state agency, or an official
  testing-vendor candidate handbook.
- `'unconfirmed'` means no primary source published that field. **Do not** replace it with a
  plausible number. Third-party aggregators were repeatedly found contradicting each other, the
  boards, and themselves.
- `verified: true` means a primary source was actually read. `verified: false` is an honest
  compilation from a named secondary source; the app badges it as an unverified draft. An
  over-claimed `true` is a defect.
- `confidence: 'partial'` = vendor and format are solid, some field still unsourced.
  No `confidence` key = fully verified.
- Vendors and hour requirements change, and stale sources are the main hazard. Insurance vendor
  switches caught during research: AZ 2025, SC 2023, OK 2023, UT 2020, NH July 2025. Beauty
  training hours moved in CA, TX, VA, SD and WI between 2022 and 2026.

## Structure

```
index.html                  page shell
assets/                     brand logo (mark + full lockup)
src/styles/app.css          all styles; brand colors sampled from the logo
src/js/app.js               app logic (ES module), track-aware
src/data/
  us-states.json            public-domain SVG paths + names for 51 jurisdictions
  tracks/
    CONTRACT.md             the shape every track file must satisfy — read this first
    index.js                the catalog: which tracks exist and how they group in the selector
    lh.js                   Life & Health insurance (the reference implementation)
    <trackId>.js            one file per credential, self-contained
scripts/
  validate-tracks.mjs       contract check across all 23 tracks
  smoke.mjs                 drives every track through a real browser
```

Adding a track is one file plus one line in `index.js`. There is no per-track code in `app.js`.

## Run locally

```bash
npm run dev          # serves at http://localhost:3000
npm run validate     # contract check on all track data
npm run smoke        # end-to-end browser pass over every track (needs playwright available)
```

Any static server works — there is no build step and the app itself has no dependencies.

## Deploy

Zero-config static deploy on Vercel. Import the repo; no build command or output directory needed.

## Known gaps

- **Audio** is browser speech synthesis (Web Speech API) as a working stopgap. The player checks
  for `audioUrl` on each lesson first, so dropping in produced MP3s is a one-line change per lesson.
- **Fees** are the least-sourced field across every track — they sit behind vendor scheduling
  portals and change often. Left as `unconfirmed` rather than guessed.
- **Verification coverage is uneven between tracks.** `npm run validate` prints the verified count
  per track; treat anything badged unverified in the app as a research ticket, not as fact.
- Progress is stored per-browser (or per-account where the host provides `window.storage`).
  There is no auth or backend yet.
