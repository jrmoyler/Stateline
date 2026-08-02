// IRS Annual Filing Season Program — the Record of Completion for non-credentialed
// tax return preparers.
//
// Read src/data/tracks/CONTRACT.md before editing. Federal program: stateModule and
// stateSpecs are null, globalSpec carries everything.
//
// BUILT FROM irs.gov, NOT FROM THE INTERNAL SPEC. The spec's sample content for this
// track was wrong in three ways, all corrected below:
//   1. It invented an "AFSEE" exam and a two-tier "Record of Completion vs. Certificate
//      of Completion" structure. Neither exists. There is one award — the AFSP Record
//      of Completion — and the only test in the program is the AFTR comprehension test.
//   2. It said the program is administered by the NAEA. It is administered by the IRS
//      Return Preparer Office; the AFTR test itself is delivered by IRS-approved CE
//      providers, not by any exam vendor.
//   3. It put a `b:` key on a lesson entry (the flashcard key) and marked a federal
//      lesson stateSpecific:true. Neither is legal under the contract.
// It also described a "Nov 1 – Oct 31" cycle and a "3 hours state" CE category. The
// real deadline is December 31 and there is no state CE category in this program.

export default {
  id:       "afsp",
  name:     "AFSP",
  full:     "IRS Annual Filing Season Program — Record of Completion",
  category: "Tax",
  accent:   "tax",
  type:     "program",
  scope:    "federal",
  tagline:  "The IRS's voluntary annual program for non-credentialed preparers — continuing education in, limited representation rights out.",

  // Federal program: no per-state variation, so no stateSpecific lesson.
  lessons: [
  {t:"What the Annual Filing Season Program Is", d:"A voluntary annual record, not a licence or an exam", len:"12 min",
   script:"The Annual Filing Season Program is a voluntary I R S program for tax return preparers who hold no professional credential. It is not a licence and it is not an examination. What you earn is a Record of Completion, and you earn it by finishing a set number of continuing education hours each year, holding a valid Preparer Tax Identification Number, and consenting to be bound by the practice rules in Circular 230. The program is run by the I R S Return Preparer Office. No state board and no professional association administers it. And the record lasts one filing season only. You do the whole thing again every year."},

  {t:"The Non-Exempt Path — Eighteen Hours", d:"6-hour AFTR with test, 10 federal tax law, 2 ethics", len:"14 min",
   script:"Most participants take what the I R S calls the non exempt path. That is eighteen hours of continuing education from an I R S approved provider, and the eighteen breaks down in a fixed way. Six of them are the Annual Federal Tax Refresher course, which ends in a comprehension test you must pass. Ten more are general federal tax law. The last two are ethics. There is no state law category in this program, despite what some third party guides say, and no substitution is allowed between the buckets. Ten hours of ethics will not cover a shortfall in federal tax law. Every hour must come from a provider on the I R S approved list."},

  {t:"The Annual Federal Tax Refresher Course & Test", d:"Six hours, then 100 questions in three timed hours", len:"18 min",
   script:"The Annual Federal Tax Refresher course is the centrepiece of the non exempt path. It is six hours of instruction across three domains set by the I R S course outline, covering the filing season updates, general income tax review, and practices, procedures and professional responsibility. At the end sits a comprehension test. One hundred multiple choice questions, three hours, one continuous timed sitting. It is proctored and it is not open book. Seventy percent is the pass mark. You may retake it, and providers must change the questions once you reach a third version. Providers may offer the course from the first of June each year, and not a day past the thirty first of December."},

  {t:"The Exempt Path — Fifteen Hours", d:"Who skips the AFTR, and what they do instead", len:"13 min",
   script:"Some preparers are exempt from the refresher course, and it is worth checking whether you are one. You are exempt if you passed the Registered Tax Return Preparer test given between November two thousand eleven and January two thousand thirteen. You are exempt if you are an active registrant of the Oregon Board of Tax Practitioners, the California Tax Education Council, or the Maryland State Board of Individual Tax Preparers. You are also exempt if you passed part one of the Special Enrollment Examination within the last three years, if you hold the Accredited Business Accountant or Accredited Tax Preparer credential, or if you served as a Volunteer Income Tax Assistance instructor or quality reviewer. Exempt preparers do fifteen hours instead of eighteen. Three of federal tax law updates, ten of federal tax law, two of ethics."},

  {t:"The Cycle & the December Deadline", d:"Everything lands on December 31, then you consent", len:"11 min",
   script:"The Annual Filing Season Program runs on the calendar year, and everything you do this year buys you next year's filing season. The deadline is the thirty first of December, at midnight local time, and the I R S publishes it with the words no exceptions. That applies to the refresher course and its test in particular. Once your hours are logged and your Preparer Tax Identification Number is renewed for the coming year, the I R S emails you from the P T I N help address with instructions on how to sign the Circular 230 consent inside your online P T I N account. The Record of Completion is issued after that consent, not before. Miss the consent and the hours do you no good."},

  {t:"What the Record of Completion Buys You", d:"Limited representation rights and a directory listing", len:"14 min",
   script:"Two things, and it is important to be precise about both. First, limited representation rights. You may represent a client before revenue agents, customer service representatives and similar I R S employees, including the Taxpayer Advocate Service, but only for a return you personally prepared and signed. You may not go to appeals. You may not handle collection matters. You may not touch a return somebody else prepared. Second, you appear in the I R S Directory of Federal Tax Return Preparers with Credentials and Select Qualifications, listed by name, city, state and postcode. And here is the sharp edge. Since the first of January two thousand sixteen, a non credentialed preparer without a Record of Completion has no representation rights at all."},
  ],

  summarySections: [
  {h:"Program Basics", items:["Voluntary IRS program for non-credentialed preparers — not a licence, not an exam credential", "Administered by the IRS Return Preparer Office; the AFTR test is delivered by IRS-approved CE providers", "One award: the AFSP Record of Completion — there is no second tier and no 'AFSEE'", "Valid for one filing season; repeated annually"]},
  {h:"Continuing Education", items:["Non-exempt: 18 hours = 6-hour AFTR with test + 10 federal tax law + 2 ethics", "Exempt: 15 hours = 3 federal tax law updates + 10 federal tax law + 2 ethics", "No state-law CE category and no substitution between buckets", "All hours must come from an IRS-approved CE provider"]},
  {h:"The AFTR Test", items:["100 multiple-choice questions across the three domains of the IRS course outline", "3 continuous timed hours, proctored, closed book", "70% to pass; retakes permitted, with question changes required by the third version", "Course offered June 1 – Dec 31; must be completed by midnight local time Dec 31, no exceptions"]},
  {h:"What You Get — and Its Limits", items:["Limited representation: only clients whose returns you prepared AND signed", "Only before revenue agents, customer service reps and similar IRS staff, plus the Taxpayer Advocate Service", "NOT appeals, NOT collection, NOT another preparer's return", "Listing in the IRS Directory of Federal Tax Return Preparers", "Since Jan 1, 2016 a non-credentialed preparer without a Record of Completion has no representation rights at all"]},
  ],

  quiz: [
  {q:"How many continuing education hours does a non-exempt preparer need for the AFSP Record of Completion?",
   opts:["15 hours", "18 hours", "24 hours", "72 hours"], a:1,
   explanation:"Non-exempt preparers complete 18 hours. The 15-hour figure is the reduced requirement for exempt preparers; 72 hours is the enrolled agent's three-year cycle."},

  {q:"What does the non-exempt 18 hours consist of?",
   opts:["6-hour AFTR course with test, 10 hours federal tax law, 2 hours ethics", "3 hours updates, 13 hours federal tax law, 2 hours ethics", "6 hours ethics and 12 hours federal tax law", "Any 18 hours of IRS-approved CE, in any mix"], a:0,
   explanation:"The split is fixed: the 6-hour Annual Federal Tax Refresher course and its comprehension test, 10 hours of other federal tax law, and 2 hours of ethics. The buckets are not interchangeable."},

  {q:"How many questions are on the AFTR comprehension test?",
   opts:["50", "75", "100", "150"], a:2,
   explanation:"One hundred multiple-choice questions, drawn across the three domains of the IRS AFTR course outline."},

  {q:"How long does a candidate have to complete the AFTR comprehension test?",
   opts:["1 hour", "2 hours", "3 continuous timed hours", "It is untimed"], a:2,
   explanation:"IRS parameters require a three-hour continuous timed test. It is also proctored and closed book."},

  {q:"Which of these preparers is EXEMPT from the AFTR course requirement?",
   opts:["Anyone holding a valid PTIN", "An active registrant of the California Tax Education Council", "Any preparer in their first filing season", "Anyone who has prepared returns for five or more years"], a:1,
   explanation:"Active registrants of the Oregon Board of Tax Practitioners, the California Tax Education Council and the Maryland State Board of Individual Tax Preparers are exempt, along with RTRP test passers, recent SEE Part 1 passers, ABA/ATP holders and qualifying VITA volunteers. A PTIN alone earns no exemption."},

  {q:"What continuing education must an exempt preparer complete?",
   opts:["None — exemption removes the CE requirement entirely", "15 hours: 3 federal tax law updates, 10 federal tax law, 2 ethics", "18 hours minus the AFTR, in any mix", "6 hours of federal tax law only"], a:1,
   explanation:"Exemption removes the AFTR course, not the CE. Exempt preparers still complete 15 hours in a fixed split: 3 updates, 10 federal tax law, 2 ethics."},

  {q:"What is the deadline to complete AFSP continuing education for the coming filing season?",
   opts:["April 15", "October 31", "December 31", "January 31"], a:2,
   explanation:"Everything must be finished by midnight local time on December 31. The IRS states this for the AFTR course and test with the words 'no exceptions'."},

  {q:"Who administers the Annual Filing Season Program?",
   opts:["State boards of accountancy", "The IRS Return Preparer Office", "The National Association of Enrolled Agents", "PSI Services"], a:1,
   explanation:"The AFSP is an IRS program run by the Return Preparer Office. The AFTR course and its test are delivered by IRS-approved CE providers, not by a testing vendor and not by a professional association."},

  {q:"What representation rights does an AFSP Record of Completion confer?",
   opts:["Unlimited rights before any IRS office, like an enrolled agent", "Limited rights — only for clients whose returns the preparer prepared and signed, and only before revenue agents, customer service representatives and similar IRS employees", "The right to represent any taxpayer in appeals", "No representation rights at all"], a:1,
   explanation:"The rights are limited in two directions at once: limited to returns you prepared and signed, and limited to revenue agents, customer service representatives and similar IRS employees, including the Taxpayer Advocate Service."},

  {q:"An AFSP participant prepared and signed a client's return. That client now has an appeals conference scheduled. May the participant represent them there?",
   opts:["Yes — they prepared the return, so the right attaches", "No — appeals and collection matters fall outside the limited rights", "Yes, if they file Form 2848", "Only if the disputed amount is under $10,000"], a:1,
   explanation:"Preparing and signing the return is necessary but not sufficient. AFSP participants cannot represent clients on appeals or collection issues even for a return they prepared."},

  {q:"Since January 1, 2016, what representation rights does a non-credentialed preparer WITHOUT a Record of Completion have?",
   opts:["The same limited rights all PTIN holders used to have", "None", "Full rights, provided they signed the return", "Rights only during the year the return was filed"], a:1,
   explanation:"Before 2016 any PTIN holder had limited rights. From 2016 onward those rights belong only to AFSP participants who obtained a Record of Completion — everyone else has none."},

  {q:"Besides the continuing education, what else must a participant do to receive the Record of Completion?",
   opts:["Pass the Special Enrollment Examination", "Hold an active PTIN for the coming filing season and consent to Circular 230, Subpart B and section 10.51", "Hold a state tax preparer licence", "Complete a bachelor's degree in accounting"], a:1,
   explanation:"An active PTIN plus the Circular 230 consent, signed inside the online PTIN account, are both required. The IRS emails instructions once the CE is on record; the Record of Completion is issued after the consent."},

  {q:"Which statement about how the AFTR test is administered is correct?",
   opts:["It is open book and untimed", "It is proctored, timed and closed book", "It is delivered at PSI test centers", "It is administered directly by the IRS"], a:1,
   explanation:"IRS parameters require a proctored, three-hour continuous timed, closed-book test. It is delivered by the IRS-approved CE provider that gave the course — there is no exam vendor and no IRS-run sitting."},

  {q:"How is the AFSP annual cycle defined?",
   opts:["November 1 to October 31", "The calendar year, with a December 31 deadline for the filing season that follows", "April 15 to April 14", "July 1 to June 30"], a:1,
   explanation:"The program runs on the calendar year. CE completed by December 31 earns a Record of Completion for the following filing season; AFTR courses may be offered by providers from June 1 through December 31."},
  ],

  flashcards: [
  {f:"AFSP", b:"Annual Filing Season Program — a voluntary IRS program that gives non-credentialed return preparers an annual Record of Completion in exchange for continuing education and a Circular 230 consent."},
  {f:"Record of Completion", b:"The single award the AFSP confers, valid for one filing season. There is no second tier — no 'Certificate of Completion' and no advanced exam."},
  {f:"AFTR", b:"Annual Federal Tax Refresher — the 6-hour course, ending in a comprehension test, that anchors the 18-hour non-exempt path."},
  {f:"AFTR comprehension test", b:"100 multiple-choice questions in 3 continuous timed hours. Proctored, closed book, 70% to pass. Retakes allowed; providers must change items by the third version."},
  {f:"Non-exempt path", b:"18 CE hours: the 6-hour AFTR with test, plus 10 hours of federal tax law and 2 hours of ethics."},
  {f:"Exempt path", b:"15 CE hours for preparers exempt from the AFTR: 3 hours federal tax law updates, 10 hours federal tax law, 2 hours ethics."},
  {f:"Who is exempt", b:"RTRP test passers (Nov 2011 – Jan 2013); active registrants of the Oregon, California or Maryland preparer programs; SEE Part 1 passers within the last 3 years; ABA and ATP credential holders; qualifying VITA/TCE volunteers."},
  {f:"December 31 deadline", b:"All AFSP continuing education, including the AFTR course and test, must be completed by midnight local time on December 31. The IRS states 'no exceptions'."},
  {f:"June 1 – December 31", b:"The annual window during which IRS-approved CE providers may offer the AFTR course."},
  {f:"Circular 230 consent", b:"Agreement to be bound by Subpart B and section 10.51 of Circular 230, signed inside the online PTIN account. The Record of Completion is issued only after this consent."},
  {f:"PTIN", b:"Preparer Tax Identification Number — required of any paid federal return preparer, and must be active for the coming filing season to receive the Record of Completion."},
  {f:"Limited representation rights", b:"An AFSP participant may represent a client only for a return they prepared and signed, and only before revenue agents, customer service representatives and similar IRS employees, including the Taxpayer Advocate Service."},
  {f:"What limited rights exclude", b:"Appeals, collection matters, and any return prepared by someone else — even where the participant prepared and signed other returns for the same client."},
  {f:"The 2016 cliff", b:"Since January 1, 2016, non-credentialed preparers without a Record of Completion have no representation rights before the IRS at all."},
  {f:"Directory of Federal Tax Return Preparers", b:"The public IRS database listing credentialed preparers and AFSP Record of Completion holders by name, city, state and ZIP code."},
  {f:"AFSP vs. Enrolled Agent", b:"AFSP is annual, voluntary, CE-based and confers limited rights. An enrolled agent passes the three-part SEE, is licensed by Treasury, and holds unlimited practice rights."},
  ],

  // Federal program — no per-state module and no per-state exam specs.
  stateModule: null,
  stateSpecs:  null,

  globalSpec: {
    vendor:    "IRS Return Preparer Office. There is no testing vendor — the AFTR course and its comprehension test are delivered by IRS-approved continuing education providers.",
    questions: "AFTR comprehension test: 100 multiple-choice questions across the three domains of the IRS AFTR course outline. The AFSP has no other test.",
    time:      "3 hours, one continuous timed sitting; proctored and closed book",
    pass:      "70% on the AFTR comprehension test. Retakes are permitted; a third test version must differ from prior versions by at least 50% of its questions.",
    fee:       "No IRS program fee. Cost is whatever the CE provider charges for the 18-hour (or 15-hour) package. PTIN registration/renewal is a separate IRS fee — confirm the current amount at irs.gov.",
    note:      "THREE CORRECTIONS TO WIDELY CIRCULATED MATERIAL. (1) There is no 'AFSEE' exam and no two-tier award. The AFSP grants one thing — the Record of Completion — and the only test in the program is the AFTR comprehension test. (2) The program is administered by the IRS Return Preparer Office, not by a professional association or a state board. (3) The cycle is the calendar year with a December 31 deadline, not a Nov 1 – Oct 31 cycle, and there is no state-law CE category. STRUCTURE: non-exempt preparers complete 18 hours (6-hour AFTR with test + 10 federal tax law + 2 ethics); exempt preparers complete 15 hours (3 federal tax law updates + 10 federal tax law + 2 ethics) and skip the AFTR. Exempt = RTRP test passers (Nov 2011 – Jan 2013), active registrants of the Oregon Board of Tax Practitioners / California Tax Education Council / Maryland State Board of Individual Tax Preparers, SEE Part 1 passers within the last 3 years, ABA and ATP credential holders, and qualifying VITA/TCE volunteers. Also required: an active PTIN for the coming filing season and a signed Circular 230 Subpart B / section 10.51 consent in the online PTIN account. WHAT IT BUYS: limited representation — clients whose returns you prepared AND signed, before revenue agents, customer service representatives and similar IRS employees including the Taxpayer Advocate Service, but never on appeals or collection — plus a listing in the IRS Directory of Federal Tax Return Preparers with Credentials and Select Qualifications. Since Jan. 1, 2016 a non-credentialed preparer with no Record of Completion has no representation rights at all.",
    source:    "IRS — 'Annual filing season program', 'General requirements for the annual filing season program record of completion', 'Reduced requirements for exempt individuals…', 'Frequently asked questions: Annual filing season program', 'CE provider FAQs: Annual federal tax refresher (AFTR) course', and 'Understanding tax return preparer credentials and qualifications' (irs.gov)",
    verified:  true,
    confidence:"partial — the CE structure, exemption list, December 31 deadline, AFTR format (100 questions / 3 continuous timed hours / proctored / closed book / retake rules) and representation rights are all direct from irs.gov. The 70% passing threshold is set in IRS Publication 6012 (AFTR test parameters), which would not text-extract; it is corroborated by multiple IRS-approved CE providers but was not read from the IRS source itself.",
  },

  genericSpecNote: null,
};
