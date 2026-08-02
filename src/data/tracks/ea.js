// Enrolled Agent — the IRS Special Enrollment Examination (SEE).
//
// Read src/data/tracks/CONTRACT.md before editing. This is a federal credential:
// stateModule and stateSpecs are null, globalSpec carries everything.
//
// TWO THINGS MOST PREP MATERIAL GETS WRONG as of the 2026 test cycle, both
// confirmed on irs.gov and both corrected here:
//   1. VENDOR. Prometric administered the SEE for years. Effective March 1, 2026
//      the IRS moved the exam to PSI Services. Anything naming Prometric is stale.
//   2. SCORING. The Prometric-era scale (40–130, pass at 105) is retired. The IRS
//      now publishes a 200–800 scale with a scaled passing score of 500 per part.
// The internal StateLine spec asserted the opposite on both points. irs.gov wins.

export default {
  id:       "ea",
  name:     "Enrolled Agent",
  full:     "Enrolled Agent — IRS Special Enrollment Examination",
  category: "Tax",
  accent:   "tax",
  type:     "federal-credential",
  scope:    "federal",
  tagline:  "The only tax credential awarded directly by the U.S. Treasury — unlimited rights to represent any taxpayer before the IRS.",

  // Federal credential: no per-state variation, so no stateSpecific lesson.
  lessons: [
  {t:"What an Enrolled Agent Actually Is", d:"Federal licensure, unlimited practice rights, the two routes in", len:"12 min",
   script:"An enrolled agent is a tax practitioner licensed by the United States Treasury, not by any state. That single fact shapes everything else. Because the license is federal, it works in all fifty states, and it carries what the I R S calls unlimited practice rights. You may represent any taxpayer, on any tax matter, before any I R S office. Attorneys and certified public accountants share that standing. Nobody else does. There are only two ways in. You pass a three part examination called the Special Enrollment Examination, or you qualify through past employment with the I R S. This track prepares you for the examination route."},

  {t:"How the Special Enrollment Examination Is Built", d:"Three parts, 85 scored plus 15 experimental, 3.5 hours each", len:"16 min",
   script:"The Special Enrollment Examination has three parts. Part one is Individuals. Part two is Businesses. Part three is Representation, Practices and Procedures. Each part gives you one hundred multiple choice questions, and here is the detail candidates miss. Only eighty five of those are scored. The other fifteen are experimental items the I R S is trialling for future exams, and they are scattered through the test unmarked. You cannot tell which is which, so you answer every question as if it counts. You get three and a half hours per part. Seat time is four hours, which covers a tutorial, a short survey, and two scheduled ten minute breaks."},

  {t:"Part One — Individuals", d:"Filing status, income, adjustments, deductions, credits", len:"45 min",
   script:"Part one is the individual return, start to finish. You need every filing status and the tie breaker rules that decide between them. You need dependency: the qualifying child tests and the qualifying relative tests, and where the two diverge. You need the full sweep of gross income, what is included, what is excluded, and how each piece lands on the return. Then adjustments to income, the standard deduction against itemized deductions, and the qualified business income deduction. Finally the credits. Child tax credit, earned income credit, education credits, the retirement savings contributions credit, and the premium tax credit. Inflation adjusted figures change every year. Study the current year's numbers."},

  {t:"Part Two — Businesses", d:"Entities, basis, depreciation, retirement plans, exempt organizations", len:"50 min",
   script:"Part two covers business taxation, and most candidates find it the hardest of the three. A sole proprietor reports on Schedule C. A partnership files Form 1065 and pushes results out to partners on Schedule K one. An S corporation files Form 1120 S, and you must be able to track a shareholder's stock basis and debt basis through income, losses and distributions. A C corporation files Form 1120 and faces tax at the entity level and again on dividends. Around that core you need depreciation and section 179, net operating losses, farm and rental reporting, employment taxes, retirement plans, and the rules for tax exempt organizations."},

  {t:"Part Three — Representation, Practices & Procedures", d:"Circular 230, examinations, collection, appeals, the Tax Court", len:"40 min",
   script:"Part three is where practice rules live. The governing document is Treasury Department Circular 230, which sets out who may practise before the I R S, the duties owed to clients and to the Service, the restrictions on fees and advertising, and the sanctions for breaching any of it. On top of that you need procedure. How an examination opens and closes. Assessment and the statutes of limitation. Liens, levies and seizures, and the Collection Due Process hearing that lets a taxpayer challenge them. Appeals inside the I R S, and the route from a notice of deficiency to the United States Tax Court. Also powers of attorney, on Form 2848."},

  {t:"Scheduling, Fees & Scoring", d:"PSI, the testing window, $317 per part, the 200–800 scale", len:"14 min",
   script:"Scheduling changed in 2026. The exam is no longer developed or administered by Prometric. Since the first of March that year the vendor has been P S I Services, and you book through the P S I site or by phone. The fee is three hundred seventeen dollars per part, paid when you schedule. Normally the testing window runs from the first of May to the end of February, and you may sit any single part up to four times inside one window. Parts may be taken in any order. Scoring is scaled from two hundred to eight hundred, and five hundred is the pass mark. Fail, and you get your scaled score plus diagnostics. Pass, and you simply get the word pass, with no number."},

  {t:"From Passing to Enrolled", d:"PTIN, Form 23, the $140 fee, suitability, and 72 hours of CE", len:"13 min",
   script:"Passing is not the same as being enrolled. Before you can even register for the exam you need a Preparer Tax Identification Number, so start there. Each passing part then stays good for three years from the date you passed it, which is the real clock on your study plan. Once all three are done you have one year from the date you passed the third part to file Form 23, the application for enrolment to practise before the I R S, with a one hundred forty dollar fee. The I R S then runs a suitability check on your own tax compliance and your criminal background. After enrolment you carry seventy two hours of continuing education per three year cycle, at least sixteen hours each year, two of which must be ethics."},
  ],

  summarySections: [
  {h:"Exam Structure", items:["Three parts: Individuals, Businesses, Representation/Practices/Procedures", "100 questions per part — 85 scored, 15 unmarked experimental", "3.5 hours testing per part, 4 hours seat time", "Scaled 200–800; the passing score is 500 per part"]},
  {h:"Logistics & Money", items:["Vendor is PSI Services as of March 1, 2026 — no longer Prometric", "$317 per part, paid to PSI at scheduling", "Testing window normally May 1 – end of February; four attempts per part per window", "Parts may be sat in any order; passing scores carry for 3 years"]},
  {h:"Getting Enrolled", items:["PTIN required before you can register for the exam", "Form 23 within 1 year of passing the third part, with a $140 fee", "IRS suitability check: personal tax compliance and criminal background", "72 CE hours per 3-year cycle; 16 minimum per year including 2 ethics"]},
  {h:"What the Credential Buys", items:["Unlimited practice rights before the IRS — any taxpayer, any matter, any office", "Valid in all 50 states because it is federal, not state, licensure", "Same standing as a CPA or attorney for IRS representation", "Governed by Treasury Department Circular 230"]},
  ],

  quiz: [
  {q:"Each part of the Special Enrollment Examination contains how many questions, and how many of them are scored?",
   opts:["100 total, all 100 scored", "100 total — 85 scored and 15 experimental", "85 total, all of them scored", "120 total — 100 scored and 20 experimental"], a:1,
   explanation:"Every part serves 100 multiple-choice questions: 85 are scored and 15 are unscored experimental items the IRS is trialling. They are not identified on the exam, so treat all 100 as live."},

  {q:"What is the scaled passing score on each part of the SEE?",
   opts:["105 on a 40–130 scale", "500 on a 200–800 scale", "70% of the scored questions", "750 on a 200–800 scale"], a:1,
   explanation:"The IRS sets the scaled passing score at 500 on a 200–800 scale. Prep material still quoting a 40–130 scale with 105 passing is describing the retired Prometric-era scoring and is out of date."},

  {q:"Who develops and administers the SEE for the 2026 test cycle?",
   opts:["Prometric", "Pearson VUE", "PSI Services", "The IRS, at its own service centers"], a:2,
   explanation:"Effective March 1, 2026 the EA-SEE is no longer developed or administered by Prometric. PSI Services took over; candidates register at the PSI site for the IRS program."},

  {q:"How long does a passing score on one part remain valid while you finish the others?",
   opts:["1 year", "2 years", "3 years", "5 years"], a:2,
   explanation:"Passing scores carry over for up to three years from the date you passed that part. Miss the window and the earliest part expires and must be retaken."},

  {q:"Must the three parts be taken in numerical order?",
   opts:["Yes — Part 1, then 2, then 3", "Yes, except Part 3 may be taken first", "No — the parts may be taken in any order", "Only Parts 1 and 2 are order-dependent"], a:2,
   explanation:"The IRS places no ordering requirement on the parts. Many candidates sit Part 3 first because it is the shortest body of material."},

  {q:"How many times may a candidate sit a single part within one testing window?",
   opts:["Once", "Twice", "Four times", "Unlimited"], a:2,
   explanation:"Each exam part may be taken up to four times per testing window, which normally runs May 1 through the end of February."},

  {q:"After passing the third part, how long do you have to apply for enrollment?",
   opts:["90 days", "6 months", "1 year", "3 years"], a:2,
   explanation:"You must file Form 23, Application for Enrollment to Practice Before the IRS, within one year of the date you passed the third part."},

  {q:"Which document sets out the rules of practice before the IRS?",
   opts:["Publication 17", "Treasury Department Circular 230", "Form 2848", "The Internal Revenue Manual"], a:1,
   explanation:"Circular 230 — Title 31, Part 10 of the Code of Federal Regulations — governs who may practice before the IRS and the duties, restrictions and sanctions that apply. It is the backbone of Part 3."},

  {q:"What continuing education must an enrolled agent complete?",
   opts:["24 hours per year with no ethics minimum", "72 hours per three-year cycle, at least 16 per year including 2 ethics", "40 hours per year including 4 hours of ethics", "15 hours per year"], a:1,
   explanation:"Enrolled agents need a minimum of 72 hours per three-year enrollment cycle, with at least 16 hours earned each year and two of those on ethics."},

  {q:"What must a candidate have before registering for the SEE?",
   opts:["A CPA license", "A Preparer Tax Identification Number", "A state tax preparer registration", "A bachelor's degree in accounting"], a:1,
   explanation:"A PTIN is a prerequisite to registering for the exam. There is no degree or experience requirement to sit the SEE."},

  {q:"What is the exam fee per part for the 2026 test cycle?",
   opts:["$140", "$206", "$317", "$99"], a:2,
   explanation:"The fee is $317 per part, paid at the time you schedule the appointment. The older $206 figure predates the vendor change. The $140 figure is the Form 23 enrollment fee, which is separate."},

  {q:"Which part of the SEE covers liens, levies, Collection Due Process hearings and the Tax Court?",
   opts:["Part 1 — Individuals", "Part 2 — Businesses", "Part 3 — Representation, Practices and Procedures", "The material is split evenly across all three parts"], a:2,
   explanation:"Collection, appeals and litigation procedure all sit in Part 3, alongside Circular 230 and the rules on powers of attorney."},
  ],

  flashcards: [
  {f:"Enrolled Agent", b:"A tax practitioner licensed by the U.S. Treasury with unlimited rights to represent any taxpayer, on any tax matter, before any IRS office. Earned by passing the SEE or through qualifying IRS employment."},
  {f:"SEE", b:"Special Enrollment Examination — the three-part exam (Individuals; Businesses; Representation, Practices & Procedures) that leads to enrollment."},
  {f:"Scored vs. experimental items", b:"Each SEE part has 100 questions: 85 scored and 15 unscored experimental. They are not flagged, so every question must be answered as if it counts."},
  {f:"Scaled passing score", b:"500 on a 200–800 scale, per part. Failing reports show your scaled score plus diagnostics; passing reports show only 'pass', with no number."},
  {f:"PSI Services", b:"The SEE testing vendor as of March 1, 2026, replacing Prometric. Registration and scheduling run through the PSI site for the IRS program."},
  {f:"Testing window", b:"The SEE testing year normally runs May 1 through the end of February, with the exam unavailable in March and April while content is updated. Four attempts per part per window."},
  {f:"Three-year carryover", b:"A passing part stays valid for three years from the date passed. All three parts must be cleared inside that rolling window."},
  {f:"Form 23", b:"Application for Enrollment to Practice Before the IRS. Filed within one year of passing the third part, with a $140 fee."},
  {f:"PTIN", b:"Preparer Tax Identification Number — required of any paid federal return preparer, and a prerequisite to registering for the SEE."},
  {f:"Circular 230", b:"Title 31, Part 10 of the CFR — Treasury's rules governing practice before the IRS: who may practise, their duties, fee and advertising limits, and the sanctions for breach."},
  {f:"Suitability check", b:"The IRS review of an applicant's own tax compliance and criminal background before enrollment is granted."},
  {f:"EA continuing education", b:"72 hours per three-year enrollment cycle, with a minimum of 16 hours per year, two of which must be ethics."},
  {f:"Form 2848", b:"Power of Attorney and Declaration of Representative — the form that authorises a practitioner to represent a taxpayer before the IRS."},
  {f:"CDP hearing", b:"Collection Due Process hearing — a taxpayer's right to challenge a lien or levy before the IRS Independent Office of Appeals."},
  {f:"Assessment statute of limitations", b:"Generally 3 years from the later of the due date or the filing date; 6 years for a substantial omission of income; unlimited where the return is fraudulent or never filed."},
  {f:"Unlimited practice rights", b:"The standing shared by enrolled agents, CPAs and attorneys — representation of any taxpayer on any matter, including audits, collection and appeals."},
  ],

  // Federal credential — no per-state module and no per-state exam specs.
  stateModule: null,
  stateSpecs:  null,

  globalSpec: {
    vendor:    "IRS Return Preparer Office; exam developed and administered by PSI Services (replaced Prometric effective March 1, 2026)",
    questions: "100 multiple-choice per part (85 scored + 15 experimental, unscored and unmarked)",
    time:      "3.5 hours per part; 4-hour seat time covering a tutorial, a survey and two scheduled 10-minute breaks",
    pass:      "Scaled 500 on a 200–800 scale, per part. Passing score reports show only 'pass' with no number; failing reports show the scaled score plus diagnostic feedback.",
    fee:       "$317 per part, paid to PSI at the time of scheduling (2026 test cycle)",
    note:      "TWO CORRECTIONS TO WIDELY CIRCULATED PREP MATERIAL. (1) VENDOR: Prometric no longer develops or administers the EA-SEE — PSI Services took over on March 1, 2026. (2) SCORING: the Prometric-era 40–130 scale with 105 passing is retired; irs.gov now publishes a 200–800 scale with a scaled passing score of 500. Three parts — Part 1 Individuals, Part 2 Businesses, Part 3 Representation, Practices and Procedures — sittable in any order, four attempts per part per testing window. The window normally runs May 1 to the end of February, but the vendor transition shifted the 2026 cycle to July 1, 2026 – Feb. 28, 2027 for domestic candidates and Sept. 1, 2026 – Feb. 28, 2027 for international candidates; confirm the current window before planning a study calendar. A PTIN is required to register. Passing scores carry for three years; enrollment must be applied for on Form 23 within one year of passing the third part, with a $140 fee, followed by an IRS suitability check on personal tax compliance and criminal background. Once enrolled: 72 CE hours per three-year cycle, minimum 16 per year, 2 of them ethics.",
    source:    "IRS — 'Enrolled agents: Frequently asked questions', 'Enrolled agent news' and the EA-SEE testing vendor transition notice (irs.gov); PSI candidate scheduling portal (test-takers.psigov.us/irs)",
    verified:  true,
    confidence:"partial — every exam mechanic, the $317 per-part fee, the 200–800/500 scale and the PSI transition are direct from irs.gov. The internal breakdown of that fee ($66 IRS user fee + $251 vendor fee, per the April 20, 2026 interim final rule) comes from secondary reporting of the Federal Register notice, which could not be read directly.",
  },

  genericSpecNote: null,
};
