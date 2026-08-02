// CompTIA Security+ — the entry-level vendor-neutral cybersecurity certification.
//
// Read src/data/tracks/CONTRACT.md before editing. This is a federal-scope track:
// one exam, one vendor, no state variation, so stateModule and stateSpecs are null
// and globalSpec carries everything.
//
// VERSION WATCH (checked 2026-08-02): the live exam is still V7, exam code SY0-701,
// which launched 7 Nov 2023. CompTIA's own certification page names SY0-701 as the
// current series and gives no retirement date. V8 (SY0-801) exists only as draft
// objectives with a target general-availability date of 17 Nov 2026 — it cannot be
// booked today, so there is exactly ONE bookable version and no dual-version window
// yet. Re-check comptia.org before the next content refresh; when 801 goes live the
// two run concurrently for roughly six months and this file needs both weightings.

export default {
  id:       "security-plus",
  name:     "Security+",
  full:     "CompTIA Security+ (SY0-701)",
  category: "Cybersecurity",
  accent:   "security",
  type:     "certification",
  scope:    "federal",
  tagline:  "CompTIA's vendor-neutral baseline cybersecurity certification — one exam, no state variation.",

  lessons: [
  {t:"General Security Concepts (12%)", d:"CIA triad, control categories and types, change management", len:"30 min",
   script:"General security concepts. Everything on this exam rests on three pillars: confidentiality, integrity, and availability — the C I A triad. Confidentiality keeps data away from the wrong eyes. Integrity keeps it from being altered. Availability keeps it reachable when someone needs it. Next, learn the four control categories: technical, managerial, operational, and physical. Then the six control types: preventive, deterrent, detective, corrective, compensating, and directive. Comp T I A loves to hand you a scenario and ask which category and which type a control belongs to. Close the domain with authentication factors, the basics of zero trust, and why change management needs an approval process and a documented backout plan."},

  {t:"Threats, Vulnerabilities & Mitigations (22%)", d:"Threat actors, social engineering, attack types, mitigations", len:"45 min",
   script:"This is the vocabulary domain, and it is the second largest. Start with threat actors and learn to separate them by motivation and resources: nation-state, organized crime, hacktivist, insider threat, and unskilled attacker. Then work the social engineering family — phishing, spear phishing, whaling, vishing over the phone, smishing by text message, pretexting, and watering hole attacks. Then the technical attacks: S Q L injection, cross-site scripting, buffer overflow, race conditions, on-path attacks, and denial of service. For every threat, Comp T I A also wants the mitigation. Segmentation, patching, hardening, least privilege, and monitoring are the answers that come back again and again."},

  {t:"Security Architecture (18%)", d:"Cloud models, segmentation, zero trust, data protection", len:"40 min",
   script:"Security architecture asks you to design, not just identify. Know the three cloud service models — infrastructure as a service, platform as a service, and software as a service — and, for each, which side of the shared responsibility line the security work falls on. Know the deployment models: public, private, hybrid, and community. Then network design: segmentation, screened subnets, and zero trust with its separate control plane and data plane. Be able to tell a firewall from a web application firewall, and an intrusion detection system from an intrusion prevention system. Finish with data protection — classification, encryption at rest and in transit, tokenization, and masking."},

  {t:"Security Operations (28%)", d:"Monitoring, SIEM, vulnerability management, IAM, incident response", len:"55 min",
   script:"Security operations is the largest domain, so give it the most study time. It is the daily work: hardening baselines, asset management, vulnerability scanning, and knowing a false positive from a false negative. Learn the tooling — security information and event management, called S I E M, plus security orchestration automation and response, and endpoint detection and response. Then identity and access management: provisioning and deprovisioning, multifactor authentication, single sign-on, federation, and privileged access management. Then incident response. Memorize the phases in order: preparation, detection and analysis, containment, eradication, recovery, and lessons learned. Scenario questions usually turn on which phase you are standing in."},

  {t:"Security Program Management & Oversight (20%)", d:"Governance, risk, third parties, compliance, awareness", len:"35 min",
   script:"Program management is the governance domain, and it rewards precise vocabulary. A policy states intent. A standard is mandatory. A procedure is the step by step. A guideline is advisory. Know the risk language cold: qualitative versus quantitative analysis, single loss expectancy, annualized rate of occurrence, and annualized loss expectancy. Know the four risk responses — accept, avoid, transfer, and mitigate. Then third-party risk: vendor assessments, service level agreements, memoranda of understanding, and right-to-audit clauses. Finish with audits and attestation, penetration testing rules of engagement, and security awareness training. Twenty percent of the exam sits here, and it is the cheapest twenty percent to earn."},

  {t:"Exam Day: Format, PBQs & Scaled Scoring", d:"Ninety questions, ninety minutes, and how 750 works", len:"15 min",
   script:"Exam day mechanics. Security Plus, exam code S Y zero seven zero one, gives you a maximum of ninety questions in ninety minutes. That is one minute per question on average, and the performance-based questions will each eat far more than a minute. They tend to appear at the front. The standard tactic is to flag them, clear the multiple choice first, then come back with whatever time is left. Scoring is scaled from one hundred to nine hundred and you need seven fifty, so there is no fixed number of correct answers to aim at. Nothing is deducted for a wrong answer, so never leave an item blank."},
  ],

  summarySections: [
  {h:"Exam Format", items:["Maximum of 90 questions in 90 minutes", "Mix of multiple-choice and performance-based (PBQ) items", "Scaled score 100–900; pass at 750 — not a raw percentage", "Delivered by Pearson VUE test center or OnVUE online proctoring"]},
  {h:"Domain Weights (SY0-701)", items:["1. General Security Concepts — 12%", "2. Threats, Vulnerabilities & Mitigations — 22%", "3. Security Architecture — 18%", "4. Security Operations — 28%", "5. Security Program Management & Oversight — 20%"]},
  {h:"Cryptography Essentials", items:["Symmetric (AES, ChaCha20) vs. asymmetric (RSA, ECC)", "Hashing and salting: SHA-256 yes, MD5 and SHA-1 deprecated", "PKI: certificate authorities, X.509, CRL and OCSP", "TLS, IPsec, SSH — and what each one actually protects"]},
  {h:"Identity & Access", items:["Factors: something you know, have, are, do, or somewhere you are", "MFA, SSO and federation via SAML, OAuth 2.0 and OpenID Connect", "Access models: RBAC, ABAC, MAC, DAC and rule-based", "Privileged access management, just-in-time access, password vaulting"]},
  {h:"Cost & Maintenance", items:["Single exam voucher — reported $439 USD U.S. list as of June 2026", "Certification is valid for three years from the pass date", "Renew with 50 CEUs, the CertMaster CE course, or a higher CompTIA cert", "$50 annual continuing-education fee on top of the CEUs"]},
  ],

  quiz: [
  {q:"How many questions does the CompTIA Security+ SY0-701 exam contain, and how long is the sitting?",
   opts:["A maximum of 90 questions in 90 minutes", "Exactly 90 questions in 120 minutes", "A maximum of 100 questions in 90 minutes", "A maximum of 75 questions in 60 minutes"], a:0,
   explanation:"CompTIA publishes a maximum of 90 questions — a mix of multiple-choice and performance-based items — with a 90-minute limit. 'Maximum' matters: some forms deliver fewer."},

  {q:"What score is required to pass Security+ SY0-701?",
   opts:["700 on a 100–900 scale", "750 on a 100–900 scale", "75% of the questions answered correctly", "800 on a 200–1000 scale"], a:1,
   explanation:"750 on a scaled range of 100 to 900. Because the score is scaled and item difficulty varies, there is no fixed number of correct answers that guarantees a pass."},

  {q:"Which SY0-701 domain carries the largest share of the exam?",
   opts:["Threats, Vulnerabilities and Mitigations (22%)", "Security Architecture (18%)", "Security Operations (28%)", "Security Program Management and Oversight (20%)"], a:2,
   explanation:"Security Operations is 28% — more than a quarter of the exam. Threats is second at 22%."},

  {q:"A camera records everyone who enters the server room but does nothing to stop them. Which control TYPE is this?",
   opts:["Preventive", "Detective", "Compensating", "Directive"], a:1,
   explanation:"It observes and records rather than blocking, which makes it detective. A door lock would be preventive, a warning sign would be deterrent, and a written instruction would be directive."},

  {q:"An attacker sends an SMS text message posing as the victim's bank and asking them to confirm a transfer. This is:",
   opts:["Vishing", "Smishing", "Whaling", "Pretexting"], a:1,
   explanation:"SMS phishing is smishing. Vishing is voice, over the phone. Whaling targets a senior executive specifically. Pretexting is the invented backstory that any of these may use."},

  {q:"In the incident response process, which phase comes immediately AFTER containment?",
   opts:["Detection and analysis", "Eradication", "Recovery", "Lessons learned"], a:1,
   explanation:"The order is preparation, detection and analysis, containment, eradication, recovery, lessons learned. You stop the bleeding first (containment), then remove the cause (eradication), then restore service (recovery)."},

  {q:"Which of the following is an ASYMMETRIC encryption algorithm?",
   opts:["AES", "RSA", "SHA-256", "ChaCha20"], a:1,
   explanation:"RSA uses a public/private key pair, so it is asymmetric. AES and ChaCha20 are symmetric ciphers. SHA-256 is not encryption at all — it is a one-way hash."},

  {q:"In an infrastructure as a service (IaaS) deployment, who patches the guest operating system?",
   opts:["The cloud provider", "The customer", "Neither — IaaS exposes no guest operating system", "The provider for security patches, the customer for feature updates"], a:1,
   explanation:"Under the shared responsibility model, IaaS gives the customer the operating system and everything above it. The provider is responsible only for the hypervisor and the physical infrastructure below it."},

  {q:"A single loss is valued at $20,000 and the risk is expected to occur once every four years. What is the annualized loss expectancy?",
   opts:["$5,000", "$20,000", "$80,000", "$2,500"], a:0,
   explanation:"ALE = SLE × ARO. Once every four years gives an ARO of 0.25, so $20,000 × 0.25 = $5,000."},

  {q:"How long is Security+ valid, and how is it renewed?",
   opts:["Two years; 30 CEUs", "Three years; 50 CEUs, the CertMaster CE course, or a higher-level CompTIA certification", "Three years; you must retake the current exam", "It never expires"], a:1,
   explanation:"Three years from the pass date. CompTIA accepts 50 continuing education units, the CertMaster CE course, or passing a higher-level CompTIA certification — plus a $50 annual CE fee."},

  {q:"Which statement about performance-based questions (PBQs) is correct?",
   opts:["They only appear at the very end of the exam", "They are the only items that count toward your score", "They usually appear first and take far longer than a multiple-choice item, so many candidates flag them and return later", "They can be skipped with no scoring consequence"], a:2,
   explanation:"PBQs are simulations and drag-and-drop items that typically front-load the exam. They are scored, and an unanswered item is simply wrong — so flagging and returning is a time strategy, not a way to skip them."},

  {q:"In the zero trust architecture described in the SY0-701 objectives, which component actually makes the access decision?",
   opts:["The Policy Enforcement Point", "The Policy Decision Point", "The threat scope reduction boundary", "The implicit trust zone"], a:1,
   explanation:"The Policy Decision Point — the policy engine together with the policy administrator — evaluates the request and decides. The Policy Enforcement Point sits in the data plane and carries that decision out."},
  ],

  flashcards: [
  {f:"CIA Triad", b:"Confidentiality, Integrity, Availability — the three properties every security control ultimately serves."},
  {f:"Control Categories vs. Types", b:"Categories describe WHO implements it: technical, managerial, operational, physical. Types describe WHAT it does: preventive, deterrent, detective, corrective, compensating, directive."},
  {f:"Defense in Depth", b:"Layered, overlapping controls so that the failure of any one layer does not by itself compromise the system."},
  {f:"Zero Trust", b:"No implicit trust based on network location. Every request is authenticated and authorized, with a control plane that decides and a data plane that enforces."},
  {f:"PKI", b:"Public Key Infrastructure — certificate authorities, X.509 certificates, revocation lists and OCSP responders that make asymmetric trust workable at scale."},
  {f:"SIEM", b:"Security Information and Event Management — aggregates and correlates logs from across the estate so detection rules can fire on patterns no single log would show."},
  {f:"SOAR", b:"Security Orchestration, Automation and Response — playbook-driven automation that executes the repetitive parts of an incident response."},
  {f:"Incident Response Phases", b:"Preparation, Detection & Analysis, Containment, Eradication, Recovery, Lessons Learned."},
  {f:"MFA", b:"Multi-Factor Authentication — two or more DIFFERENT factors: something you know, have, are, do, or somewhere you are. Two passwords are not MFA."},
  {f:"SLE, ARO, ALE", b:"Single Loss Expectancy is the cost of one occurrence. Annualized Rate of Occurrence is how often per year. ALE = SLE × ARO."},
  {f:"Risk Responses", b:"Accept, Avoid, Transfer, Mitigate. Buying insurance is transfer. Shutting the service down is avoid."},
  {f:"Policy vs. Standard vs. Procedure vs. Guideline", b:"Policy states intent. Standard is mandatory and specific. Procedure is the step-by-step. Guideline is advisory."},
  {f:"Shared Responsibility Model", b:"In IaaS the customer owns the OS upward; in PaaS the customer owns the application and data; in SaaS the customer owns little beyond data and access."},
  {f:"Performance-Based Question (PBQ)", b:"A simulation or drag-and-drop item on Security+. They usually appear first, consume disproportionate time, and are scored like any other item."},
  {f:"Scaled Score", b:"Security+ reports 100–900 with a 750 pass mark. Item difficulty is factored in, so no fixed count of correct answers guarantees a pass."},
  ],

  stateModule: null,

  globalSpec: {
    vendor:    "CompTIA (delivered at Pearson VUE test centers or via OnVUE online proctoring)",
    questions: "Maximum of 90 — a mix of multiple-choice and performance-based (simulation / drag-and-drop) items",
    time:      "90 minutes",
    pass:      "750 on a scaled 100–900 range (not a raw percentage)",
    fee:       "Reported $439 USD for a single U.S. voucher, effective 1 June 2026 (was $425, and $404 before that). CompTIA's public store page does not render a standalone voucher price — confirm at checkout.",
    note:      "VERSION: the bookable exam today is V7, series code SY0-701, live since 7 November 2023. CompTIA's certification page still names it as current and publishes no retirement date. V8 (SY0-801) exists as draft objectives only, with a target release of 17 November 2026 — so as of August 2026 there is NO dual-version window and nothing to choose between. When 801 does go live, CompTIA's normal pattern is roughly six months of overlap before 701 retires; at that point this track needs both objective sets. Domain weights on the live 701 are General Security Concepts 12%, Threats/Vulnerabilities/Mitigations 22%, Security Architecture 18%, Security Operations 28%, Security Program Management & Oversight 20%. Renewal is every three years via 50 CEUs, the CertMaster CE course, or a higher-level CompTIA certification, plus a $50 annual continuing-education fee.",
    source:    "comptia.org CompTIA Security+ certification page (V7 / SY0-701, exam format, 90 questions, 90 minutes, 750 on 100–900, domain weights) and comptia.org continuing-education renewal pages (three years, 50 CEUs); SY0-801 timing from CompTIA Instructors Network discussion and training-partner briefings; voucher price from multiple training-partner price trackers",
    verified:  true,
    confidence:"partial — exam format, passing score, domain weights and the three-year / 50-CEU renewal are confirmed on comptia.org. The voucher price and the 17 Nov 2026 SY0-801 date are secondary-source only; CompTIA has published neither a price on the public certification page nor an official 801 launch date.",
  },

  stateSpecs: null,

  genericSpecNote: "Security+ is a single national certification with no state-level variation — the same exam, price and passing score apply in every jurisdiction.",
};
