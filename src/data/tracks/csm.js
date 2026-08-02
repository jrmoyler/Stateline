// Certified ScrumMaster (CSM) — Scrum Alliance. Federal/global scope: one credential
// worldwide, no state module.
//
// Read src/data/tracks/CONTRACT.md before editing. Sources, all fetched directly:
//   1. scrumalliance.org — Certified ScrumMaster certification page (course + test details)
//   2. scrumalliance.org — Certification renewal page (2-year cycle, 20 SEUs, US$100)
//   3. scrumguides.org — The Scrum Guide, November 2020, which is STILL the current
//      official version. The June 2025 "Scrum Guide Expansion Pack" is a supplement
//      published by individuals, not a replacement, and is not the exam's reference.
//
// THREE THINGS PEOPLE GET WRONG ABOUT THIS CREDENTIAL:
//  - You cannot sit the CSM cold. A course with a Certified Scrum Trainer is mandatory
//    BEFORE Scrum Alliance will even release the test to you. This is the single biggest
//    structural difference from a PMP or a state license exam.
//  - "Three roles" and "five events" are pre-2020 vocabulary. The current guide says
//    three ACCOUNTABILITIES, and describes the Sprint as a container holding FOUR events.
//  - "Maximum team size 10" is wrong. The guide says "typically 10 or fewer people" —
//    guidance, not a hard ceiling. Older prep material states it as a rule.

export default {
  id:       "csm",
  name:     "CSM",
  full:     "Certified ScrumMaster",
  category: "Agile / Product",
  accent:   "pm",
  type:     "certification",
  scope:    "federal",
  tagline:  "Scrum Alliance's entry-level Scrum Master credential — earned through a mandatory trainer-led course, then a 50-question test.",

  lessons: [
  {t:"How the CSM Is Actually Earned", d:"Course first. You cannot sit this one cold.", len:"14 min",
   script:"Start here, because this is where most people get it wrong. You cannot book the C S M and sit it cold the way you would a P M P or a state licensing exam. Scrum Alliance requires you to attend a course taught by a Certified Scrum Trainer first. That is sixteen hours of live training — most classes run across two or three days — delivered in person or live online, never as a recording. Only after your trainer submits your attendance does Scrum Alliance email you an account activation link, and only then can you take the test. The course fee is set by the individual trainer, not by Scrum Alliance, and the test itself is bundled into it."},

  {t:"Scrum Theory — Empiricism and Lean Thinking", d:"Three pillars, five values", len:"20 min",
   script:"Scrum's foundation is empiricism: knowledge comes from experience, and decisions are made on what is actually observed. Three pillars hold it up. Transparency means the work and the process are visible to the people doing the work and the people receiving it. Inspection means checking progress toward a goal frequently and diligently. Adaptation means adjusting the moment you learn something is off. Alongside empiricism sits lean thinking, which says to remove waste and focus on the essentials. Then there are five values: commitment, focus, openness, respect, and courage. If a question asks you why a particular event exists at all, the answer is almost always one of the three pillars."},

  {t:"The Three Accountabilities", d:"Product Owner, Scrum Master, Developers", len:"24 min",
   script:"The current Scrum Guide does not say roles. It says accountabilities, and there are three. The Product Owner is one person, never a committee, accountable for maximizing the value of the product and for effective Product Backlog management. The Scrum Master is accountable for the team's effectiveness and for Scrum being understood and enacted. The Developers are everyone doing the work of creating a usable increment each Sprint. Together they are the Scrum Team — one team, no sub-teams, no hierarchies, holding every skill needed to create value each Sprint. On size, the guide says typically ten or fewer people. That is guidance, not a hard ceiling, and any question that treats ten as a rule is using out-of-date material."},

  {t:"The Sprint and the Four Events Inside It", d:"Timeboxes you must know cold", len:"28 min",
   script:"People often say Scrum has five events. Be careful with that phrasing. The guide describes the Sprint as a container — a fixed timebox of one month or less — holding four formal events for inspection and adaptation. Sprint Planning is timeboxed to a maximum of eight hours for a one-month Sprint. The Daily Scrum is fifteen minutes, every day, and it is for the Developers. Sprint Review is a maximum of four hours for a one-month Sprint, and it is a working session with stakeholders, not a status report. Sprint Retrospective is a maximum of three hours and closes the Sprint. Every timebox scales down for shorter Sprints, and a new Sprint starts immediately after the previous one ends."},

  {t:"Artifacts and Their Commitments", d:"Each artifact carries exactly one commitment", len:"22 min",
   script:"Three artifacts, and each one carries a commitment. That pairing is heavily tested, so learn it as pairs. The Product Backlog is an ordered, emergent list of what would improve the product, and its commitment is the Product Goal. The Sprint Backlog is the Sprint Goal plus the selected items plus the plan for delivering them; it is a plan by and for the Developers, and its commitment is the Sprint Goal. The Increment is a concrete stepping stone toward the Product Goal, and its commitment is the Definition of Done. Work that does not meet the Definition of Done is not an increment. It cannot be released, cannot be presented at the Sprint Review, and returns to the Product Backlog."},

  {t:"What a Scrum Master Actually Does", d:"Serving the team, the Product Owner, and the organization", len:"22 min",
   script:"The Scrum Master is described as a true leader who serves, and serves three constituencies. To the Scrum Team: coaching self-management and cross-functionality, helping the team focus on creating high-value increments, and causing the removal of impediments. To the Product Owner: helping with Product Goal definition, Product Backlog management, and empirical planning. To the organization: leading Scrum adoption, planning implementations, and removing barriers between stakeholders and teams. Pay attention to the verbs. Cause the removal of impediments, not personally remove them. Coach, not assign. The Scrum Master is not a project manager, does not own the backlog, does not hand out tasks, and does not report on the team's velocity to management."},

  {t:"The Test, and Keeping the Badge", d:"50 questions, 74%, and a two-year renewal", len:"12 min",
   script:"The test itself is fifty multiple-choice questions in sixty minutes, and you need thirty-seven of them correct — seventy-four percent. It is taken online at home after your course, and while it is open book, the clock is real, so know the timeboxes cold rather than planning to look them up. Two attempts are free within ninety days of your welcome email. Past that window, or after two failures, each further attempt costs twenty-five U S dollars. The certification then lasts two years. To renew you need twenty Scrum Education Units and a one hundred dollar fee. Earning any other Scrum Alliance certification renews all of the ones you already hold."},
  ],

  summarySections: [
  {h:"How You Earn It", items:["Mandatory 16-hour live course with a Certified Scrum Trainer (CST)", "In-person or live online — never a recording", "Test released only after the trainer submits attendance", "50 questions / 60 minutes / 37 correct (74%) to pass", "Two free attempts within 90 days, then US$25 per attempt"]},
  {h:"Scrum Theory & Values", items:["Empiricism — knowledge comes from experience", "Three pillars: transparency, inspection, adaptation", "Lean thinking — remove waste, focus on essentials", "Five values: commitment, focus, openness, respect, courage"]},
  {h:"The Scrum Team — Three Accountabilities", items:["Product Owner — one person, maximizes product value, owns Product Backlog management", "Scrum Master — accountable for team effectiveness and for Scrum being enacted", "Developers — create a usable Increment each Sprint", "One team, no sub-teams, no hierarchies", "Typically 10 or fewer people — guidance, not a hard cap"]},
  {h:"Events & Timeboxes (one-month Sprint)", items:["The Sprint — one month or less; the container for the other four", "Sprint Planning — max 8 hours", "Daily Scrum — 15 minutes, for the Developers", "Sprint Review — max 4 hours, a working session with stakeholders", "Sprint Retrospective — max 3 hours, closes the Sprint"]},
  {h:"Artifacts & Their Commitments", items:["Product Backlog → Product Goal", "Sprint Backlog → Sprint Goal", "Increment → Definition of Done", "Work that fails the Definition of Done cannot be released or shown as done"]},
  ],

  quiz: [
  {q:"Can you register for and sit the CSM test without taking a course first?",
   opts:["Yes — register on scrumalliance.org and sit it any time", "No — you must first complete a course with a Certified Scrum Trainer", "Only if you already hold a PMP", "Only with two years of documented Scrum experience"], a:1,
   explanation:"This is the CSM's defining feature. Scrum Alliance requires a 16-hour live course with a Certified Scrum Trainer, and only releases the test after the trainer submits your attendance. There is no challenge or exam-only path."},

  {q:"The current Scrum Guide refers to Product Owner, Scrum Master and Developers as:",
   opts:["Roles", "Accountabilities", "Job titles", "Positions"], a:1,
   explanation:"The 2020 Scrum Guide deliberately replaced 'roles' with 'accountabilities', and replaced 'Development Team' with 'Developers' as one of three accountabilities within a single Scrum Team. Material still saying 'three roles' predates November 2020."},

  {q:"Who is accountable for effective Product Backlog management?",
   opts:["The Scrum Master", "The Developers", "The Product Owner", "The whole Scrum Team equally"], a:2,
   explanation:"The Product Owner — a single person, not a committee. The Product Owner may delegate the work of ordering and refining the backlog, but remains accountable for it."},

  {q:"What does the current Scrum Guide say about Scrum Team size?",
   opts:["Exactly seven, plus or minus two", "A hard maximum of 10 people", "Typically 10 or fewer people — guidance, not a hard limit", "The guide gives no size guidance at all"], a:2,
   explanation:"The exact wording is 'small enough to remain nimble and large enough to complete significant work within a Sprint, typically 10 or fewer people.' It is a heuristic. Prep material that states 10 as a maximum is treating guidance as a rule."},

  {q:"How many formal events does the Scrum Guide describe as contained within the Sprint?",
   opts:["Three", "Four", "Five", "Six"], a:1,
   explanation:"Four: Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective. The Sprint itself is the container that holds them. 'Five events' is common shorthand that counts the Sprint, but it is not the guide's wording."},

  {q:"What is the maximum timebox for Sprint Planning on a one-month Sprint?",
   opts:["Four hours", "Six hours", "Eight hours", "There is no timebox"], a:2,
   explanation:"Eight hours maximum for a one-month Sprint, and usually shorter for shorter Sprints. Compare: Sprint Review is four hours max and the Retrospective three hours max on the same one-month Sprint."},

  {q:"Which commitment belongs to the Product Backlog?",
   opts:["The Definition of Done", "The Sprint Goal", "The Product Goal", "The release plan"], a:2,
   explanation:"Product Backlog → Product Goal. Sprint Backlog → Sprint Goal. Increment → Definition of Done. Learn all three as pairs; the exam mixes them."},

  {q:"Which commitment belongs to the Increment?",
   opts:["The Definition of Done", "The Product Goal", "The Sprint Goal", "Team velocity"], a:0,
   explanation:"The Definition of Done is the Increment's commitment — the formal description of the quality state the work must reach. Velocity is not in the Scrum Guide at all."},

  {q:"The Daily Scrum is a 15-minute event held for the benefit of:",
   opts:["The whole Scrum Team plus stakeholders", "The Developers", "The Scrum Master, who runs it", "Management, as a status update"], a:1,
   explanation:"It is for the Developers, to inspect progress toward the Sprint Goal and adapt the Sprint Backlog. The Product Owner or Scrum Master participate only if they are actively working on Sprint Backlog items."},

  {q:"Which best describes the Sprint Review?",
   opts:["A status report delivered to management", "A working session where the Scrum Team and stakeholders inspect the Increment and adapt the Product Backlog", "The event where the team inspects its own process and people", "A demo presented by the Scrum Master on the team's behalf"], a:1,
   explanation:"The Sprint Review inspects the outcome and adapts the Product Backlog collaboratively with stakeholders. Inspecting the team's own process and interactions is the Sprint Retrospective."},

  {q:"A Product Owner asks that an item which does not meet the Definition of Done be released anyway. What does Scrum say?",
   opts:["It may be released once the Product Owner approves it", "It may be presented at the Sprint Review as done", "It cannot be released or presented as done, and returns to the Product Backlog", "It automatically carries into the next Sprint Backlog"], a:2,
   explanation:"Work that does not meet the Definition of Done cannot be released, and cannot even be presented at the Sprint Review. It goes back to the Product Backlog for future consideration — it does not auto-carry to the next Sprint."},

  {q:"What score do you need to pass the CSM test?",
   opts:["30 of 50 (60%)", "35 of 50 (70%)", "37 of 50 (74%)", "40 of 50 (80%)"], a:2,
   explanation:"37 correct out of 50, which is 74%, within a 60-minute limit."},

  {q:"How is the CSM maintained?",
   opts:["It never expires", "Every 2 years: 20 SEUs plus a US$100 renewal fee", "Every 3 years: 60 PDUs plus a renewal fee", "Annually: 10 SEUs plus a fee"], a:1,
   explanation:"A two-year cycle with 20 Scrum Education Units and a US$100 fee for foundational certifications. Earning any other Scrum Alliance certification renews all existing ones automatically. 60 PDUs on a 3-year cycle is the PMI/PMP model, not this one."},
  ],

  flashcards: [
  {f:"Certified Scrum Trainer (CST)", b:"A Scrum Alliance-vetted trainer. Only a CST can deliver the mandatory CSM course and release you to take the test."},
  {f:"Empiricism", b:"Scrum's foundation: knowledge comes from experience, and decisions are made on what is observed rather than what was predicted."},
  {f:"Three pillars", b:"Transparency, inspection, adaptation. Every Scrum event exists to enable at least one of them."},
  {f:"Scrum values", b:"Commitment, focus, openness, respect, courage."},
  {f:"Product Owner", b:"A single person accountable for maximizing product value and for effective Product Backlog management. May delegate the work, never the accountability."},
  {f:"Scrum Master", b:"Accountable for the Scrum Team's effectiveness and for Scrum being understood and enacted. A true leader who serves the team, the Product Owner and the organization."},
  {f:"Developers", b:"The Scrum Team members committed to creating any aspect of a usable Increment each Sprint. They own the Sprint Backlog and the technical decisions."},
  {f:"The Sprint", b:"A fixed timebox of one month or less, and the container for the other four events. A new Sprint starts immediately after the previous one ends."},
  {f:"Sprint Planning", b:"Opens the Sprint. Addresses why (the Sprint Goal), what (selected backlog items), and how (the plan). Max 8 hours for a one-month Sprint."},
  {f:"Daily Scrum", b:"A 15-minute daily event for the Developers to inspect progress toward the Sprint Goal and adapt the Sprint Backlog. Same time, same place, every day."},
  {f:"Sprint Review", b:"A working session where the Scrum Team and stakeholders inspect the Increment and adapt the Product Backlog. Max 4 hours for a one-month Sprint. Not a status meeting."},
  {f:"Sprint Retrospective", b:"Closes the Sprint. The team inspects individuals, interactions, processes, tools and its Definition of Done, and plans improvements. Max 3 hours."},
  {f:"Product Goal", b:"The commitment attached to the Product Backlog — the long-term objective the Scrum Team plans against."},
  {f:"Sprint Goal", b:"The commitment attached to the Sprint Backlog — the single objective for the Sprint. Scope may be renegotiated with the Product Owner; the Sprint Goal does not change mid-Sprint."},
  {f:"Increment", b:"A concrete stepping stone toward the Product Goal, additive to all prior Increments and verified to work with them. Multiple Increments may be created within a single Sprint."},
  {f:"Definition of Done", b:"The commitment attached to the Increment — a formal description of the quality state work must reach. Work that fails it cannot be released or presented as done."},
  {f:"Scrum Education Unit (SEU)", b:"One hour of qualifying learning, event participation or volunteering. Foundational certifications like CSM need 20 SEUs per 2-year cycle."},
  ],

  // Global credential — no per-jurisdiction variation.
  stateModule: null,

  globalSpec: {
    vendor:    "Scrum Alliance — online test, taken after a mandatory course delivered by a Certified Scrum Trainer (CST)",
    questions: "50 multiple choice, drawn from the CSM Learning Objectives and the Scrum Guide",
    time:      "60 minutes",
    pass:      "74% — 37 of 50 correct",
    fee:       "No standalone exam fee: the test is bundled into the CST course price, which each trainer sets independently and Scrum Alliance does not publish. Two attempts are free within 90 days of the welcome email; each attempt after that (or after the window closes) is US$25. Renewal is US$100 every two years.",
    note:      "The CSM cannot be sat cold. Scrum Alliance requires 16 hours of live training with a Certified Scrum Trainer — in person or live online, never recorded — and only releases the test after the trainer submits your attendance. That single requirement is what most PMP-trained candidates get wrong. Second trap: study the November 2020 Scrum Guide, not older summaries. The current guide describes three ACCOUNTABILITIES (not roles), the Sprint as a container holding FOUR formal events (not five), three artifacts each carrying one commitment, and a team size of 'typically 10 or fewer' as guidance rather than a hard cap.",
    source:    "scrumalliance.org — Certified ScrumMaster certification page (course length, trainer requirement, 50 questions / 60 minutes / 37 of 50, two free attempts, 90-day window) and the certification renewal page (2-year cycle, 20 SEUs, US$100). Content model from The Scrum Guide, November 2020 (scrumguides.org), which remains the current official version — the June 2025 'Scrum Guide Expansion Pack' is a supplement, not a replacement.",
    verified:  true,
    confidence:"partial — course, test and renewal figures come from scrumalliance.org pages read directly, and all Scrum content is quoted from the November 2020 Scrum Guide. Two gaps: the US$25 per-attempt retake fee is sourced from the Scrum Alliance Help Center via search results rather than a directly fetched page, and course prices are set by individual trainers so no single figure can be published.",
  },

  stateSpecs: null,

  genericSpecNote: "The CSM is a single global credential with no state-level variation. Course prices are set by each Certified Scrum Trainer and vary widely by region and delivery format — compare trainers on scrumalliance.org before booking.",
};
