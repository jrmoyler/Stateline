# Track module contract

Every credential StateLine supports is one file in this directory: `src/data/tracks/<trackId>.js`.
The file has a single default export. The app reads nothing else — no side effects, no imports
from other track files, no functions in the exported object.

```js
export default {
  // ---- identity (drives the track selector, landing copy, and the header) ----
  id:       "pmp",                         // must equal the filename stem
  name:     "PMP",                         // short label, fits in a dropdown row
  full:     "Project Management Professional",
  category: "Project Management",           // groups the <optgroup> in the selector
  accent:   "pm",                           // one of: insurance tax pm security cloud realestate beauty
  type:     "certification",                // license | certification | designation | program | federal-credential
  scope:    "federal",                      // federal | state | national-plus-state
  tagline:  "PMI's flagship project management credential.",

  // Injected by index.js from research-baselines.js. Every track carries a dated
  // primary-authority baseline and an explicit nationwide or 51-jurisdiction scope.
  research: {
    reviewedAt: "2026-08-02",
    coverage: "nationwide", // or "51-jurisdiction"
    method: "How issuing authorities and official vendor material were checked.",
    sources: [{ authority:"Issuing authority", url:"https://official.example/" }],
  },

  // ---- content (identical shape for every track) ----
  lessons: [
    { t:"Topic title", d:"one-line subhead", len:"18 min", script:"narration text, plain prose" },
    // ... 4-8 entries. Exactly one entry may carry stateSpecific:true, and it must be LAST.
    // A stateSpecific entry sets script:null — the app builds narration from stateModule below.
  ],

  summarySections: [
    { h:"Heading", items:["bullet", "bullet", "bullet"] },
    // ... 3-5 sections
  ],

  quiz: [
    { q:"Question text?", opts:["a","b","c","d"], a:0, explanation:"why the answer is right" },
    // ... 8 or more. `a` is the 0-based index of the correct option. explanation is required.
  ],

  flashcards: [
    { f:"Term", b:"Definition." },
    // ... 10 or more
  ],

  // ---- the per-state module (null for scope:"federal") ----
  stateModule: {
    titleSuffix:    "Law, Rules & Regulations",   // renders as "<State Name> Law, Rules & Regulations"
    summaryHeading: "State Law Module",           // the summarySections heading swapped per state
    scriptTemplate: "{STATE} rules for ... {STATE} ...",  // {STATE} -> full state name, every occurrence
  },

  // ---- optional: curated landing-page proof cells ----
  // Four places where the real requirement differs from what generic prep material teaches.
  // Omit the key and the landing page derives cells from the exam data instead.
  highlights: [
    { abbr:"MI", fact:"73%", exp:"One sentence on why this differs from the assumed default." },
  ],

  // ---- exam data ----
  // scope:"federal"             -> globalSpec required, stateSpecs null
  // scope:"state"               -> stateSpecs required, globalSpec null (or a national-exam summary)
  // scope:"national-plus-state" -> BOTH: globalSpec is the national credential,
  //                                stateSpecs is the underlying state license
  globalSpec: {
    vendor:    "PMI (delivered via Pearson VUE)",
    questions: "180 (170 scored + 10 unscored pretest)",
    time:      "230 minutes",
    pass:      "Psychometric scaled score — no published fixed percentage",
    fee:       "$595 non-member / $405 PMI member",
    note:      "One or two sentences of the thing a candidate would get wrong without this app.",
    source:    "PMI Examination Content Outline (pmi.org) + Pearson VUE candidate handbook",
    verified:  true,
    confidence:"partial — <what is still unsourced>",   // OMIT the key entirely when fully verified
  },

  stateSpecs: {
    AL: { vendor:"…", questions:"…", time:"…", pass:"…", fee:"…", note:"…", source:"…", verified:true },
    // ... one entry per jurisdiction you have real data for. 51 possible keys:
    // AL AK AZ AR CA CO CT DE DC FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH
    // NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY
  },

  // Shown in the spec box for a jurisdiction with no stateSpecs entry at all.
  genericSpecNote: "Requirements not yet verified for this state. Typical range: …",
};
```

## The sourcing rule — this is the whole product

StateLine's only reason to exist is that generic prep material silently gets the state-level
15% wrong. A plausible-looking wrong number is worse than an honest gap.

- Every field traces to a **state board / agency site** or an **official vendor candidate handbook**.
- `"unconfirmed"` is a legitimate value and means *no primary source published this*. Never
  replace it with a number that "looks about right", and never average conflicting sources.
- `verified: true` means a primary source was actually read. `verified: false` means the entry is
  a best-effort compilation from secondary sources. Both are shown, but the app badges them
  differently — `false` renders an "unverified" badge and a caution line, so an honest
  `verified: false` entry is genuinely useful and an over-claimed `true` is a defect.
  A jurisdiction with no entry at all falls through to `genericSpecNote`.
- `confidence: "partial — …"` when the vendor and format are solid but a field is still unsourced.
  Omit the key entirely when everything checks out.
- Every non-federal track must contain all 51 jurisdiction keys and every record must have
  `verified:true`. This does **not** authorize guessing: a field the authority does not publish
  remains `"unconfirmed"`, and the record carries a `confidence` caveat. Federal tracks apply one
  verified `globalSpec` nationwide, so they contribute 51 coverage units without duplicating data.
- `research-baselines.js` records the date, method, scope, and clickable primary authority used
  for the track-wide review. The per-state `source` remains the more specific evidence line.
- When two sources disagree about a testing vendor, it is almost always a stale source. State
  boards switch vendors and third-party sites don't notice for years. Check the board's own site.
- Put genuine outliers in `note`. A state that scores on a scale rather than a percentage, or has
  no combined exam, or runs its own exam instead of using a national vendor, is exactly the thing
  a candidate needs told.

## Style

`src/data/tracks/lh.js` is the reference implementation — match its formatting, its comment
density, and the voice of its lesson scripts. Narration is read aloud by a speech synthesizer:
write it as prose a person would say, spell out acronyms the first time (`H M O`, not `HMO`),
and keep sentences short enough to breathe.
