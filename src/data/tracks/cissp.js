// CISSP — ISC2's management-level information security credential.
//
// Read src/data/tracks/CONTRACT.md before editing. Federal scope: one global exam,
// one vendor, no state variation, so stateModule and stateSpecs are null.
//
// TWO CORRECTIONS TO THE COMMON PREP-SITE PICTURE (checked 2026-08-02):
//   1. There is NO linear, fixed-form CISSP any more. ISC2 moved every remaining
//      language to Computerized Adaptive Testing on 15 April 2024. Any guide still
//      describing a 250-item, six-hour paper for non-English candidates is stale.
//      The current outline lists five languages, all CAT.
//   2. ISC2's own documents disagree about the item range and time limit. The
//      official Exam Outline PDF (effective 15 April 2024) says 125–150 items and
//      3 hours. ISC2's CISSP CAT web pages and the June 2022 change notice say
//      125–175 items and a 4-hour maximum. The scored-item range ISC2 publishes
//      (75–125 operational plus 50 pretest) only adds up to a 175 ceiling. That
//      conflict is recorded honestly in globalSpec rather than averaged away.

export default {
  id:       "cissp",
  name:     "CISSP",
  full:     "Certified Information Systems Security Professional",
  category: "Cybersecurity",
  accent:   "security",
  type:     "certification",
  scope:    "federal",
  tagline:  "ISC2's management-level credential — eight CBK domains, an adaptive exam, and five years of proven experience.",

  lessons: [
  {t:"Security & Risk Management (Domain 1 — 16%)", d:"Governance, ethics, law, risk, business continuity", len:"45 min",
   script:"Domain one is the largest and it sets the tone for the whole exam. It covers professional ethics, security governance, and the legal and regulatory landscape — data breach law, intellectual property, import and export controls, and privacy regimes like the General Data Protection Regulation. It covers policy, standards, procedures and guidelines, business continuity planning, personnel security, and the risk management lifecycle. The mindset to carry out of this domain is that security exists to support the business objective, not to override it. When a question offers a technically brilliant answer and a governance answer, the governance answer is usually the one I S C two wants."},

  {t:"Asset Security (Domain 2 — 10%)", d:"Classification, ownership, handling, retention, remanence", len:"30 min",
   script:"Asset security is about knowing what you hold and treating it according to its value. Learn the roles and never confuse them: the data owner sets classification and accepts risk, the data custodian implements the controls, and the data steward looks after quality and meaning. Learn the information lifecycle from creation through to destruction, and the retention and disposal rules that attach at each stage. Understand data remanence and the three ways to deal with it — clearing, purging, and destruction — and know that reformatting a drive is none of them. Also know the difference between scoping and tailoring a baseline."},

  {t:"Security Architecture & Engineering (Domain 3 — 13%)", d:"Secure design, models, cryptography, physical security", len:"45 min",
   script:"Architecture and engineering is the most technical domain, and it is where the classic security models live. Bell LaPadula protects confidentiality with no read up and no write down. Biba protects integrity with the mirror image, no read down and no write up. Clark Wilson uses well-formed transactions and separation of duties. Brewer and Nash, the Chinese Wall, prevents conflicts of interest. Then comes cryptography: symmetric versus asymmetric, hashing, digital signatures, and public key infrastructure. Be able to say what a given attack actually breaks. Finish with secure site design, fire suppression, and physical controls, because the exam still tests them."},

  {t:"Communication & Network Security (Domain 4 — 13%)", d:"OSI and TCP/IP, secure protocols, network attacks", len:"45 min",
   script:"Network security is dense but very learnable. Anchor everything to the seven-layer O S I model, then map the T C P I P suite onto it, then place every protocol and every device at its correct layer. A router is layer three. A switch is layer two. A stateful firewall works at layers three and four. Learn the secure protocols and what they replace — transport layer security, I P sec, secure shell. Learn the classic attacks: address resolution protocol poisoning, domain name system poisoning, on-path interception, and distributed denial of service. Then modern architecture — segmentation, micro-segmentation, software defined networking, and zero trust."},

  {t:"Identity & Access Management (Domain 5 — 13%)", d:"Identification, authentication, authorization, federation", len:"40 min",
   script:"Identity and access management is the plumbing of every other domain. Keep the four steps clean and in order: identification claims who you are, authentication proves it, authorization decides what you may do, and accounting records what you did. Learn the access control models and when each is appropriate. Mandatory access control is label-based and rigid, discretionary access control lets owners decide, role-based access control ties permissions to job function, and attribute-based access control evaluates context. Then federation — security assertion markup language, open authorization, and OpenID Connect — plus Kerberos, the identity lifecycle, and periodic access reviews."},

  {t:"Security Assessment & Testing (Domain 6 — 12%)", d:"Audit strategies, testing, metrics, and reporting to the board", len:"35 min",
   script:"Assessment and testing is about proving controls actually work rather than assuming they do. Know the difference between a vulnerability assessment, which finds and rates weaknesses, and a penetration test, which attempts to exploit them under an agreed rules of engagement document. Know the audit strategies — internal, external, and third-party — and the artefacts they produce, including the service organization control reports. Learn code review, static and dynamic testing, fuzzing, misuse case testing, and synthetic transactions. Then know your test outcomes: true positive, false positive, true negative, false negative. And know that results go to management in language management can act on."},

  {t:"Security Operations & Software Development Security (Domains 7 & 8 — 13% and 10%)", d:"Investigations, IR, DR, secure SDLC", len:"50 min",
   script:"Domain seven is operations. It covers investigations and the rules of evidence, logging and monitoring, configuration and change management, and the protective foundations — least privilege, need to know, job rotation, and separation of duties. It covers incident management, disaster recovery, and the recovery metrics. Recovery time objective is how long you may be down. Recovery point objective is how much data you may lose. Domain eight is software development security. Know the development lifecycle models, where security testing belongs in each, secure coding practices, the Open Web Application Security Project top ten, and how to assess the security of software you bought rather than built."},

  {t:"Passing the CAT: Thinking Like a Manager", d:"Adaptive mechanics, the 'best answer' habit, and endorsement", len:"25 min",
   script:"The mechanics matter as much as the content. The exam is adaptive, so it selects each item based on how you have answered so far, and you cannot go back and change anything. Answer, commit, move on. It ends when the algorithm is confident, not when the clock runs out. The bigger shift is in how you read the question. C I S S P rarely asks what is true. It asks what is best, or what you should do first. Two options will often both be correct actions. Choose the one a manager would take — the one that protects human life, then addresses root cause, then treats the symptom."},
  ],

  summarySections: [
  {h:"Exam Format", items:["Computerized Adaptive Testing (CAT) — every language, no linear form since 15 April 2024", "125–150 items per the official April 2024 exam outline (ISC2's CAT pages say 125–175 — see the spec note)", "50 of the delivered items are unscored pretest; 75–125 are operational", "Scaled 0–1000; pass at 700. No going back to change an answer"]},
  {h:"The Eight CBK Domains (outline effective 15 April 2024)", items:["1. Security and Risk Management — 16%", "2. Asset Security — 10%", "3. Security Architecture and Engineering — 13%", "4. Communication and Network Security — 13%", "5. Identity and Access Management (IAM) — 13%", "6. Security Assessment and Testing — 12%", "7. Security Operations — 13%", "8. Software Development Security — 10%"]},
  {h:"Getting Qualified", items:["Five years cumulative paid work experience in two or more of the eight domains", "A post-secondary degree in computer science / IT, OR one approved ISC2 credential, waives one year", "You cannot stack a degree and a credential — one year is the maximum waiver", "No experience yet? Pass the exam and become an Associate of ISC2, then six years to earn the five"]},
  {h:"After You Pass", items:["Complete the endorsement process within nine months of the pass date", "An ISC2-certified professional in good standing attests to your experience; ISC2 can endorse in some cases", "Pay the annual maintenance fee to stay active (reported $135 USD; $50 for Associates)", "Earn 120 CPE credits over each three-year cycle, at least 90 of them Group A"]},
  {h:"How CISSP Questions Behave", items:["Management perspective — judgment, not recall", "'BEST', 'FIRST' and 'MOST' change the answer; read them twice", "Human safety outranks every other consideration, always", "Multiple options are often correct; only one is the correct priority"]},
  ],

  quiz: [
  {q:"What scaled score is required to pass the CISSP?",
   opts:["650 out of 1000", "700 out of 1000", "750 out of 900", "70% of the operational items"], a:1,
   explanation:"700 out of a possible 1000 scaled points. Because scoring is scaled to item difficulty, there is no percentage of questions you can count on to reach it."},

  {q:"On the CISSP adaptive exam, what happens after you answer an item correctly?",
   opts:["The exam ends immediately", "The next item is drawn from a harder pool", "The next item is drawn from an easier pool", "You are given additional time"], a:1,
   explanation:"Computerized Adaptive Testing raises difficulty after a correct answer and lowers it after an incorrect one, converging on your ability level with far fewer items than a fixed-form exam."},

  {q:"Can you return to a previous question on the CISSP CAT exam?",
   opts:["Yes, at any point before you submit", "Yes, but only within the current section", "No — each item is scored before the next one is selected", "Only for the unscored pretest items"], a:2,
   explanation:"The algorithm uses your answer to choose the next item, so answers are final the moment you submit them. There is no review screen and no flagging for later."},

  {q:"What experience does the full CISSP credential require?",
   opts:["Three years in one CBK domain", "Four years across two or more CBK domains", "Five years cumulative paid work experience across two or more CBK domains", "Five years across all eight CBK domains"], a:2,
   explanation:"Five years cumulative, in two or more of the eight domains — not all eight. Part-time work and internships can count toward the total."},

  {q:"A candidate holds a bachelor's degree in computer science AND an approved credential from the ISC2 waiver list. How much of the experience requirement can be waived?",
   opts:["Nothing — waivers were discontinued", "One year in total", "Two years — one for the degree and one for the credential", "Three years"], a:1,
   explanation:"One year is the ceiling. A qualifying degree OR an approved credential satisfies up to one year; you cannot stack the two. ISC2 also cut the approved-credential list roughly in half for applications submitted from 1 April 2026 onward."},

  {q:"Someone passes the CISSP exam but has only two years of qualifying experience. What are their options?",
   opts:["The result is voided and the exam must be retaken later", "They may become an Associate of ISC2 and have six years to earn the required five", "They are certified but may not use the CISSP designation for three years", "They must find an endorser willing to vouch for experience they do not have"], a:1,
   explanation:"Passing without the experience earns the Associate of ISC2 designation, with a six-year window to accumulate the five years. The exam result is not wasted."},

  {q:"How long does a successful candidate have to complete the ISC2 endorsement process?",
   opts:["Three months", "Six months", "Nine months", "Twelve months"], a:2,
   explanation:"Nine months from the exam pass date. Endorsement is a separate step in which an ISC2-certified professional in good standing attests to your professional experience."},

  {q:"What are the ongoing maintenance requirements for a certified CISSP?",
   opts:["60 CPE credits over two years plus an annual fee", "120 CPE credits over a three-year cycle plus the annual maintenance fee", "Retake the current exam every three years", "40 CPE credits per year with no fee"], a:1,
   explanation:"120 CPEs across each three-year cycle — at least 90 of them Group A, domain-related — plus the annual maintenance fee. ISC2 suggests pacing at about 40 CPEs per year."},

  {q:"Which security model is defined by the simple security property ('no read up') and the star property ('no write down')?",
   opts:["Biba", "Bell-LaPadula", "Clark-Wilson", "Brewer-Nash"], a:1,
   explanation:"Bell-LaPadula protects CONFIDENTIALITY: you may not read above your clearance and may not write below it. Biba is the integrity mirror image — no read down, no write up."},

  {q:"A newly appointed CISO finds the organization has no inventory of its information assets. What should she do FIRST?",
   opts:["Deploy a data loss prevention platform", "Identify and classify the organization's information assets", "Purchase cyber-liability insurance", "Commission an external penetration test"], a:1,
   explanation:"A classic 'best answer' item. You cannot select proportionate controls, transfer risk, or scope a test until you know what you hold and what it is worth. Identification and classification come before every control decision."},

  {q:"In business continuity planning, which metric expresses the maximum acceptable amount of DATA loss, measured in time?",
   opts:["Recovery Time Objective (RTO)", "Recovery Point Objective (RPO)", "Maximum Tolerable Downtime (MTD)", "Mean Time To Repair (MTTR)"], a:1,
   explanation:"RPO looks backward from the incident and answers 'how much data can we afford to lose', which drives backup frequency. RTO looks forward and answers 'how long can we be down'."},

  {q:"Which of the following is NOT one of the four canons of the ISC2 Code of Professional Ethics?",
   opts:["Protect society, the common good, necessary public trust and confidence, and the infrastructure", "Act honorably, honestly, justly, responsibly and legally", "Provide diligent and competent service to principals", "Report all suspected criminal activity to law enforcement within 24 hours"], a:3,
   explanation:"The fourth canon is 'Advance and protect the profession.' There is no fixed reporting deadline in the Code — the mandatory-reporting option is a distractor of a kind CISSP uses often."},

  {q:"The April 2024 CISSP exam outline describes the 'five pillars of information security.' Which two join confidentiality, integrity and availability?",
   opts:["Accountability and auditability", "Authenticity and nonrepudiation", "Privacy and safety", "Assurance and resilience"], a:1,
   explanation:"Objective 1.2 of the current outline names confidentiality, integrity, availability, authenticity and nonrepudiation. The older three-pillar CIA framing is no longer the whole answer."},

  {q:"In what language and format is the CISSP delivered today?",
   opts:["English only, adaptive", "Five languages, all Computerized Adaptive Testing", "English adaptive; other languages a 250-item, six-hour linear exam", "Candidate's choice of adaptive or linear in any language"], a:1,
   explanation:"Since 15 April 2024 every CISSP exam in every offered language is CAT. The outline lists Chinese, English, German, Japanese and Spanish. The 250-item, six-hour linear paper no longer exists in any language."},
  ],

  flashcards: [
  {f:"CISSP CAT", b:"Computerized Adaptive Testing — item difficulty adjusts to your demonstrated ability, answers are final, and the exam ends when the algorithm reaches a confident pass/fail decision."},
  {f:"Passing Score", b:"700 out of 1000 scaled points. Scaled, not a raw percentage — difficulty of the items you saw is factored in."},
  {f:"The Eight Domains", b:"Security & Risk Management 16%, Asset Security 10%, Security Architecture & Engineering 13%, Communication & Network Security 13%, IAM 13%, Security Assessment & Testing 12%, Security Operations 13%, Software Development Security 10%."},
  {f:"Experience Requirement", b:"Five years cumulative paid work experience in two or more of the eight domains. One year — no more — may be waived by a qualifying degree OR one approved ISC2 credential, never both."},
  {f:"Associate of ISC2", b:"The status granted to someone who passes the CISSP exam without the required experience. Six years to accumulate the five years, then convert to full CISSP."},
  {f:"Endorsement", b:"Within nine months of passing, an ISC2-certified professional in good standing must attest to your experience. ISC2 can act as endorser where no one else is available."},
  {f:"AMF and CPEs", b:"An annual maintenance fee keeps the certification active (reported $135 USD; $50 for Associates), alongside 120 CPE credits per three-year cycle, at least 90 of them Group A."},
  {f:"ISC2 Code of Ethics — Four Canons", b:"Protect society, the common good, necessary public trust and confidence, and the infrastructure. Act honorably, honestly, justly, responsibly and legally. Provide diligent and competent service to principals. Advance and protect the profession."},
  {f:"Bell-LaPadula", b:"Confidentiality model. Simple security property: no read UP. Star property: no write DOWN."},
  {f:"Biba", b:"Integrity model. The mirror of Bell-LaPadula: no read DOWN, no write UP."},
  {f:"Clark-Wilson", b:"Integrity model built on well-formed transactions and separation of duties — subjects reach data only through certified programs."},
  {f:"Brewer-Nash (Chinese Wall)", b:"Dynamically restricts access to prevent conflicts of interest — once you touch one client's data, competing datasets close to you."},
  {f:"Data Owner vs. Custodian vs. Steward", b:"The owner classifies the data and accepts the risk. The custodian implements and operates the controls. The steward governs data quality and meaning."},
  {f:"RTO vs. RPO", b:"Recovery Time Objective is how long you may be down. Recovery Point Objective is how much data you may lose. RPO drives backup frequency."},
  {f:"MTD", b:"Maximum Tolerable Downtime — the outage length beyond which the business itself is not viable. Every RTO must sit inside it."},
  {f:"Data Remanence Countermeasures", b:"Clearing overwrites for reuse inside the organization. Purging renders data unrecoverable by laboratory attack. Destruction physically ends the media. Reformatting is none of these."},
  {f:"Vulnerability Assessment vs. Penetration Test", b:"An assessment finds and rates weaknesses. A penetration test attempts to exploit them, under written rules of engagement and authorization."},
  {f:"'BEST' and 'FIRST'", b:"CISSP's signature qualifiers. Several options will be genuinely correct actions; the qualifier asks for the correct PRIORITY, judged from a manager's seat."},
  {f:"Human Safety First", b:"Whenever life or safety appears among the options, it outranks assets, evidence, uptime and cost. No exceptions on this exam."},
  ],

  stateModule: null,

  globalSpec: {
    vendor:    "ISC2 (delivered at ISC2 Authorized PPC and PVTC Select Pearson VUE test centers)",
    questions: "125–150 items per the official April 2024 Exam Outline. 50 of the delivered items are unscored pretest; 75–125 are operational (scored). Multiple choice plus advanced innovative item types.",
    time:      "3 hours per the official April 2024 Exam Outline — but see note; ISC2's own CAT pages state a 4-hour maximum.",
    pass:      "700 out of 1000 scaled points",
    fee:       "Reported $749 USD (some mid-2026 sources report $699), charged in local-currency equivalent outside the US. Annual maintenance fee reported at $135 USD for certified members, $50 for Associates of ISC2.",
    note:      "TWO THINGS PREP SITES GET WRONG. First, the linear fixed-form CISSP is gone. As of 15 April 2024 every CISSP exam, in every offered language, is Computerized Adaptive Testing; the outline lists Chinese, English, German, Japanese and Spanish. Any source describing a 250-item, six-hour paper for non-English candidates is describing an exam that no longer exists. Second, ISC2's own publications contradict each other on exam length: the Exam Outline PDF effective 15 April 2024 states '3 hours' and '125 - 150' items, while ISC2's CISSP CAT pages and its June 2022 change notice state 125–175 items with a four-hour maximum. The published operational range — a minimum of 75 and a maximum of 125 scored items, plus 50 pretest items — arithmetically implies a 175 ceiling, so the CAT pages are likely right and the outline table is likely a stale cell. Plan for four hours and up to 175 items; do not be surprised by either figure on the day. QUALIFYING: five years cumulative paid experience in two or more of the eight domains; a post-secondary degree in computer science / IT or one approved ISC2 credential waives up to one year, and the two cannot be combined. ISC2 reduced the approved-credential list from roughly fifty to twenty-five certifications for applications submitted on or after 1 April 2026 — CEH, CISA, CRISC, OSCP and most GIAC certifications were removed. Without the experience, passing earns Associate of ISC2 status and a six-year window. Endorsement must be completed within nine months of passing. Maintenance is 120 CPEs per three-year cycle (at least 90 Group A) plus the annual maintenance fee.",
    source:    "ISC2 CISSP Certification Exam Outline, effective 15 April 2024 (official PDF — domains, weights, 700/1000, experience rules, Associate pathway, CAT-for-all-languages statement); isc2.org CISSP CAT pages and the ISC2 notice 'Changes to the CISSP Exam Length' (effective 1 June 2022) for the 125–175 / four-hour figures; ISC2 Insights, 'Computerized Adaptive Testing for CISSP Examinations in All Languages' (Feb 2024); ISC2 Insights, 'CISSP Experience Waiver Updates' (May 2026) and the ISC2 Community thread announcing the 1 April 2026 waiver-list reduction",
    verified:  true,
    confidence:"partial — the eight domains and their weights, the 700/1000 passing score, the CAT-only format and the experience/Associate rules are read directly from the official April 2024 outline PDF. The item range and time limit are genuinely contradicted between ISC2's own outline and its CAT web pages and are reported both ways above. Exam fee, annual maintenance fee, the nine-month endorsement window and the 120-CPE cycle come from ISC2 web pages that render client-side and could not be text-extracted, so they are corroborated secondary sources rather than a direct primary read.",
  },

  stateSpecs: null,

  genericSpecNote: "CISSP is a single global certification with no state-level variation — the same adaptive exam, passing score and maintenance rules apply in every jurisdiction.",
};
