// Project Management Professional (PMP) — PMI's flagship credential. Federal/global scope:
// one exam worldwide, no state module.
//
// Read src/data/tracks/CONTRACT.md before editing. Everything below traces to two primary
// PMI documents, both pulled directly as PDFs:
//   1. "Project Management Professional (PMP) Examination Content Outline – July 2026"
//      (pmi.org, new-pmp-examination-content-outline-2026.pdf, © 2026 PMI)
//   2. "PMI Certification Handbook", revised June 2026 (pmi.org, generic-certification-handbook.pdf)
//
// TWO TRAPS FOR ANYONE MAINTAINING THIS FILE:
//  - The exam changed in July 2026. Almost every prep site still says 230 minutes; the current
//    ECO says 240. It also still says People 42 / Process 50 / Business Environment 8 — those
//    are the JANUARY 2021 weights. The July 2026 weights are 33 / 41 / 26.
//  - PMI publishes NO fee table in either PDF, and pmi.org's HTML pages return 403 to
//    automated fetches. The fee field below is therefore secondary-sourced and flagged.

export default {
  id:       "pmp",
  name:     "PMP",
  full:     "Project Management Professional",
  category: "Project Management",
  accent:   "pm",
  type:     "certification",
  scope:    "federal",
  tagline:  "PMI's flagship project management credential — rebuilt for the July 2026 exam, and now about 60% agile and hybrid.",

  lessons: [
  {t:"How the July 2026 Exam Is Built", d:"180 questions, 240 minutes, two breaks", len:"16 min",
   script:"How the July 2026 exam is built. The P M P is one hundred eighty questions, and you have two hundred forty minutes — four full hours — to answer them. Only one hundred seventy of those questions count. The other ten are unscored pretest items, scattered at random, and you will not be able to tell them apart. There are two ten-minute breaks. The first comes after the case study section. The second falls roughly midway through the independent questions. Once you start a break you cannot go back to the section you just finished, so review your answers before you stand up. Expect more than plain multiple choice: matching, drag and drop, point and click, graphic-based items, and questions with more than one correct answer."},

  {t:"People — Thirty-Three Percent", d:"Eight tasks, and most of them are about stakeholders", len:"34 min",
   script:"People is thirty-three percent of the exam, spread across eight tasks. Develop a common vision. Manage conflicts. Lead the project team. Engage stakeholders. Align stakeholder expectations. Manage stakeholder expectations. Help ensure knowledge transfer. And plan and manage communication. Notice how much of that sits outside your own team — three of the eight tasks are stakeholder tasks. The July 2026 outline also promoted shared vision to task one, ahead of conflict management. When a question describes friction on a team, your first move is almost never to escalate and almost never to impose a decision. Identify the source, analyze the context, then apply the resolution strategy the team already agreed to."},

  {t:"Process — Forty-One Percent", d:"The largest domain: ten tasks from planning to closure", len:"46 min",
   script:"Process is the biggest domain at forty-one percent, and it carries ten tasks. Develop an integrated project management plan. Develop and manage scope. Help ensure value-based delivery. Plan and manage resources. Plan and manage procurement. Plan and manage finance. Plan and optimize quality. Plan and manage schedule. Evaluate project status. And manage project closure. Two of those deserve extra attention. Value-based delivery is unfamiliar language to many candidates — it means prioritizing by value, delivering incrementally, and verifying that a benefits measurement system actually exists. And the planning task explicitly asks you to recommend a development approach: predictive, adaptive, or hybrid. The exam wants you choosing the approach, not defending one."},

  {t:"Business Environment — Twenty-Six Percent", d:"Was 8% in 2021. Risk and change control live here now.", len:"30 min",
   script:"Business Environment is twenty-six percent — roughly one question in four. Under the January 2021 outline this domain was only eight percent, so anyone studying from older material is badly under-prepared here. There are eight tasks. Define and establish project governance. Plan and manage compliance. Manage and control changes. Remove impediments and manage issues. Plan and manage risk. Continuous improvement. Support organizational change. And evaluate external business environment changes. Read that list twice. Risk and change control now sit in Business Environment, not in Process. Compliance now names security, health and safety, sustainability, and regulation explicitly — and so does risk. Sustainability is no longer a footnote on this exam."},

  {t:"Predictive, Agile and Hybrid — the Forty-Sixty Split", d:"The thing candidates most underestimate", len:"32 min",
   script:"Here is the thing candidates most underestimate. P M I states it plainly in the July 2026 outline: approximately forty percent of items represent predictive approaches, and the remaining sixty percent is divided between adaptive, meaning agile, and hybrid. Agile is not a section you can skip, and it is not isolated to one domain — predictive, adaptive, and hybrid questions appear throughout all three. So you need both vocabularies fluently. Work breakdown structure, critical path, earned value, change control board. And backlog, sprint, iteration, servant leadership, retrospective, story points, definition of done. Hybrid questions are the hardest of the three, because they hand you both worlds and ask which piece fits the situation in front of you."},

  {t:"Eligibility, Training Hours and Applying", d:"Four experience paths, not two, plus 35 training hours", len:"18 min",
   script:"Eligibility. There are now four paths, not two. With upper secondary school — a high school diploma or equivalent — you need sixty months of leading projects. With an associate level or short-cycle post-secondary qualification, forty-eight months. With a bachelor's degree or higher, thirty-six months. And with a degree from a program accredited by P M I's Global Accreditation Center, just twenty-four months. All of that experience must fall inside the last ten years, and overlapping projects only count once — two projects running the same February give you one month, not two. Everyone also needs thirty-five hours of project management training aligned to the content outline. One exception: an active C A P M certification waives those thirty-five hours entirely."},

  {t:"Scoring, Retakes and Keeping the Credential", d:"No published pass mark, and a 3-year PDU cycle", len:"15 min",
   script:"Scoring and upkeep. P M I publishes no passing percentage, and chasing one is wasted effort. The exam is criteria-based, and the cut score is set by psychometric analysis against the standard of a qualified project manager. Your report gives pass or fail plus a diagnostic band for each of the three domains. Once your application is approved you get a one-year eligibility window and up to three attempts inside it. Fail three times and you wait a full year before reapplying. After you pass, the credential runs on three-year cycles: sixty professional development units and a renewal fee each cycle, with at least thirty-five of those units earned through education rather than giving back."},
  ],

  summarySections: [
  {h:"July 2026 Exam Content Outline", items:["People 33% / Process 41% / Business Environment 26%", "180 questions — 170 scored + 10 unscored pretest", "240 minutes, with two 10-minute breaks", "~40% predictive, ~60% adaptive (agile) and hybrid", "No published pass mark — psychometric, criteria-based cut score"]},
  {h:"People Domain — 8 Tasks", items:["Develop a common vision", "Manage conflicts", "Lead the project team", "Engage stakeholders", "Align stakeholder expectations", "Manage stakeholder expectations", "Help ensure knowledge transfer", "Plan and manage communication"]},
  {h:"Process Domain — 10 Tasks", items:["Develop an integrated project management plan and plan delivery", "Develop and manage project scope", "Help ensure value-based delivery", "Plan and manage resources / procurement / finance", "Plan and optimize quality of deliverables", "Plan and manage schedule", "Evaluate project status", "Manage project closure"]},
  {h:"Business Environment — 8 Tasks", items:["Define and establish project governance", "Plan and manage project compliance", "Manage and control changes", "Remove impediments and manage issues", "Plan and manage risk (moved here from Process)", "Continuous improvement", "Support organizational change", "Evaluate external business environment changes"]},
  {h:"Eligibility & Maintenance", items:["Secondary school + 60 months leading projects", "Associate / short-cycle post-secondary + 48 months", "Bachelor's or higher + 36 months", "PMI GAC-accredited degree + 24 months", "35 training hours for everyone — waived by an active CAPM", "60 PDUs every 3 years + renewal fee"]},
  ],

  quiz: [
  {q:"Under the July 2026 Examination Content Outline, which domain carries the largest share of the exam, and what is its weight?",
   opts:["People — 42%", "Process — 50%", "Process — 41%", "People — 33%"], a:2,
   explanation:"July 2026 weights are People 33%, Process 41%, Business Environment 26%. Process is still the largest, but 42/50/8 are the JANUARY 2021 numbers that most prep material still quotes."},

  {q:"How long do you have to complete the PMP exam?",
   opts:["200 minutes", "230 minutes", "240 minutes", "260 minutes"], a:2,
   explanation:"240 minutes — four hours — per the July 2026 ECO. The widely-quoted 230 minutes describes the pre-July-2026 exam and is now wrong."},

  {q:"Of the 180 questions on the exam, how many are actually scored?",
   opts:["150", "170", "175", "180"], a:1,
   explanation:"170 are scored and 10 are unscored pretest items, randomly placed. You cannot identify them, so treat every question as if it counts."},

  {q:"What is the break structure on the PMP exam?",
   opts:["One 10-minute break at the halfway point", "Two 10-minute breaks", "Three 5-minute breaks", "No scheduled breaks — the 240 minutes runs straight through"], a:1,
   explanation:"Two 10-minute breaks: the first after the case study section, the second roughly midway through the independent questions. Once a break starts you cannot return to the previous section, so review before you stand up."},

  {q:"Approximately what share of exam items represents adaptive (agile) and hybrid approaches combined?",
   opts:["About 20 percent", "About 40 percent", "About 50 percent", "About 60 percent"], a:3,
   explanation:"PMI states roughly 40% of items represent predictive approaches and the remaining 60% is split between adaptive/agile and hybrid. These are spread across all three domains, not confined to one."},

  {q:"Which of these tasks sits in the Business Environment domain under the July 2026 ECO?",
   opts:["Manage conflicts", "Plan and manage schedule", "Plan and manage risk", "Develop a common vision"], a:2,
   explanation:"Risk moved into Business Environment in the 2026 outline. Managing conflicts and developing a common vision are People tasks; scheduling is a Process task."},

  {q:"A candidate holds a bachelor's degree from a standard (non-GAC) university. How many months of non-overlapping project leadership experience does the current ECO require?",
   opts:["24", "36", "48", "60"], a:1,
   explanation:"36 months for a bachelor's degree or higher. 24 months applies only to a degree from a PMI Global Accreditation Center-accredited program; 48 is the associate/short-cycle path and 60 is the secondary-school path."},

  {q:"Which credential waives the 35 project management training hours?",
   opts:["An active CAPM certification", "PMI membership", "Any bachelor's degree", "A passing score on a PMI practice exam"], a:0,
   explanation:"An active CAPM earns a 35-training-hour credit, waiving the requirement. Membership only affects price, and a plain degree affects the experience tier — not the training hours."},

  {q:"What passing score does PMI publish for the PMP exam?",
   opts:["61 percent of scored questions", "70 percent of scored questions", "'Above Target' in all three domains", "None — the cut score is set by psychometric analysis and is not published"], a:3,
   explanation:"The PMI Certification Handbook states the passing score for all PMI exams is determined by sound psychometric analysis against a criteria-based standard. You receive pass/fail plus per-domain diagnostics, never a percentage target."},

  {q:"How many times may you sit the exam within one eligibility period, and how long is that period?",
   opts:["Unlimited attempts within 1 year", "Three attempts within a 1-year eligibility period", "Two attempts within 90 days", "One attempt only, then reapply"], a:1,
   explanation:"A 1-year eligibility period with up to three attempts. Fees are repaid for the second and third attempts. Fail all three and you must wait one year from the last attempt before reapplying."},

  {q:"What does maintaining the PMP require?",
   opts:["30 PDUs every 2 years", "60 PDUs every 3 years plus a renewal fee", "60 PDUs every year", "Nothing — the PMP does not expire"], a:1,
   explanation:"The Continuing Certification Requirements program requires 60 professional development units in each 3-year cycle plus payment of the renewal fee."},

  {q:"Two projects you led ran 1 January to 31 March and 1 February to 31 May. How many months count toward eligibility?",
   opts:["Three", "Four", "Five", "Seven"], a:2,
   explanation:"Experience is counted in months of tenure, not per project, and overlapping time cannot be counted twice. 1 January through 31 May is five months."},
  ],

  flashcards: [
  {f:"Examination Content Outline (ECO)", b:"PMI's blueprint for the exam — domains, tasks and enablers, derived from a job task analysis. The current version is July 2026."},
  {f:"Domain weights (July 2026)", b:"People 33%, Process 41%, Business Environment 26%. The old 42/50/8 split belongs to the January 2021 ECO."},
  {f:"Enabler", b:"An illustrative example of the work inside a task. Enablers are deliberately not an exhaustive list — the exam tests judgement, not memorized bullets."},
  {f:"Pretest question", b:"One of 10 unscored items on every exam, placed at random, used to validate future questions. 170 of the 180 questions are scored."},
  {f:"Criteria-based exam", b:"An exam whose cut score reflects whether the candidate meets the standard of a qualified practitioner — not a fixed percentage and not a curve against other candidates."},
  {f:"The 40/60 split", b:"Roughly 40% of items are predictive; the other 60% is divided between adaptive (agile) and hybrid, spread across all three domains."},
  {f:"Hybrid approach", b:"Delivery that combines predictive and adaptive elements — e.g. a fixed-scope contract delivered in iterations. The hardest question type on the exam."},
  {f:"Value-based delivery", b:"A Process-domain task: prioritize work by value and stakeholder feedback, deliver incrementally, and verify a benefits measurement system is in place."},
  {f:"Project governance", b:"The structure, rules, procedures, reporting, ethics and policies for a project, plus success metrics and escalation thresholds. Business Environment, Task 1."},
  {f:"Critical path", b:"The longest-duration path through the schedule network. It determines the shortest possible project duration; activities on it have zero float."},
  {f:"Earned value analysis", b:"CPI = EV / AC (cost efficiency); SPI = EV / PV (schedule efficiency). Above 1.0 is favorable on both."},
  {f:"35 training hours", b:"Project management training aligned to the ECO, required of every candidate. Waived entirely by an active CAPM certification."},
  {f:"Non-overlapping experience", b:"Experience counted in calendar months of tenure, not per project. Two projects running the same month give you one month of credit."},
  {f:"PDU", b:"Professional Development Unit — one hour of qualifying learning or giving back. 60 PDUs per 3-year cycle, at least 35 of them from education."},
  {f:"1-year eligibility period", b:"The window after application approval in which you may sit the exam up to three times. Expiry means reapplying, even if you never tested."},
  ],

  // Federal credential — no per-jurisdiction variation.
  stateModule: null,

  globalSpec: {
    vendor:    "PMI, delivered by Pearson VUE — test center (CBT) or OnVUE online proctored. Paper-based delivery in mainland China via ATA.",
    questions: "180 total — 170 scored + 10 unscored pretest. Mixed formats: multiple choice, multiple response, matching, drag-and-drop, point-and-click, graphic-based, and case/scenario sets.",
    time:      "240 minutes, with two 10-minute breaks (first after the case study section, second roughly midway through the independent questions)",
    pass:      "No published percentage. Criteria-based exam with a cut score set by psychometric analysis; the report gives pass/fail plus a diagnostic band per domain.",
    fee:       "reported US$405 member / US$555–575 non-member, with an increase to roughly US$425–445 member / US$675 non-member reported effective 6 August 2026 — CONFIRM AT CHECKOUT. Renewal reported at US$60 member / US$150 non-member per 3-year cycle.",
    note:      "The exam was rebuilt in July 2026 and most prep material has not caught up. Two corrections that matter: it is 240 minutes, not 230; and Business Environment is 26% of the exam, not the 8% it was under the January 2021 outline — risk and change control both moved into it. The bigger trap is delivery approach: PMI states about 40% of items are predictive and about 60% are adaptive (agile) or hybrid, distributed across all three domains. Candidates who study PMBOK-style predictive material alone are preparing for well under half the exam.",
    source:    "PMI, 'Project Management Professional (PMP) Examination Content Outline – July 2026' (pmi.org PDF, © 2026 PMI) for domains, weights, question counts, time, breaks, eligibility, training hours, retakes and the 60-PDU cycle; PMI Certification Handbook revised June 2026 (pmi.org PDF) for scoring methodology and the eligibility period. Both PDFs were retrieved and read directly.",
    verified:  true,
    confidence:"partial — every structural and eligibility figure is quoted from the two primary PMI PDFs. The fee is NOT: PMI publishes no fee table in either document and pmi.org's pricing pages return 403 to automated fetches, so the amounts above are compiled from secondary sources that disagree with each other around a reported 6 August 2026 price change.",
  },

  stateSpecs: null,

  genericSpecNote: "The PMP is a single global exam with no state-level variation. Fees vary by region and PMI membership status — confirm the current price on pmi.org before applying.",
};
