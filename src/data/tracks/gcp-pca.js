// Google Cloud Professional Cloud Architect — federal-scope cloud certification track.
//
// Read src/data/tracks/CONTRACT.md before editing. Google does not version its exams with
// codes the way AWS and Microsoft do; the exam guide is revised in place, so the guide's
// section list IS the version marker. Verified 2026-08-02 against the current PDF exam
// guide at services.google.com: the exam now has SIX sections weighted
// 25 / 17.5 / 17.5 / 15 / 12.5 / 12.5, and the case study roster has been fully replaced.
// Older prep material still describes five sections and the Mountkirk Games / TerramEarth /
// JencoMart / Helicopter Racing League case studies — all four are retired. Do not restore
// them.

export default {
  id:       "gcp-pca",
  name:     "GCP Architect",
  full:     "Google Cloud Professional Cloud Architect",
  category: "Cloud / Infrastructure",
  accent:   "cloud",
  type:     "certification",
  scope:    "federal",
  tagline:  "Google's flagship architecture certification — design and manage solutions on Google Cloud against real business constraints.",

  lessons: [
  {t:"What This Exam Actually Tests", d:"Business judgement first, service trivia second", len:"22 min",
   script:"This is not a services quiz. The Professional Cloud Architect exam repeatedly hands you a business with constraints — a budget, a compliance regime, a migration deadline, an unhappy operations team — and asks which technical choice serves it. Several answers will usually work technically. Only one fits the stated constraint. So read the constraint before the options, every time. Google also expects familiarity with its Well-Architected Framework, whose pillars are operational excellence, security, reliability, performance optimization, cost optimization, and sustainability. Those pillars are woven through the exam objectives explicitly, and they are usually the tiebreaker when two answers both look reasonable on paper."},

  {t:"Designing & Planning a Cloud Solution Architecture (~25%)", d:"Requirements, trade-offs, migration plans, success measures", len:"45 min",
   script:"The largest section, at roughly twenty-five percent, is design and planning. It covers turning business use cases into functional and non-functional requirements, planning for business continuity, and choosing between building, buying, modifying, or deprecating a workload. You are expected to map compute needs onto the right platform — Compute Engine, Google Kubernetes Engine, Cloud Run, or Cloud Run functions — and to pick storage by access pattern rather than by habit. Migration planning sits here too: assessing existing systems, sequencing dependencies, planning the network, and working out software licensing impact. Success measures matter as well, so expect language about key performance indicators and return on investment."},

  {t:"Managing & Provisioning Infrastructure (~17.5%)", d:"Network topology, storage systems, compute, and the AI platform", len:"40 min",
   script:"Provisioning covers the concrete build. On networking, know Virtual Private Cloud design, hybrid connectivity back to on-premises, multicloud paths, shared V P C, and Private Service Connect. On storage, think about lifecycle, retention, transfer latency, and growth planning rather than just capacity. On compute, know when to use spot capacity instead of standard, and how container orchestration and serverless change the operational load. One thing generic material misses badly: this section now includes Google's agent and machine-learning platform explicitly, including pipelines for the machine-learning lifecycle and running large-scale training on accelerated infrastructure. Skipping the AI content is no longer a safe gamble."},

  {t:"Designing for Security & Compliance (~17.5%)", d:"Resource hierarchy, IAM, key management, perimeters, regulation", len:"40 min",
   script:"Security starts with the resource hierarchy — organization, folders, projects — because policy inherits down it, and most access-control questions are really hierarchy questions. Identity and Access Management gives you predefined roles that you should prefer over broad basic roles, and custom roles when least privilege demands it. Data security means key management, customer-managed encryption keys through Cloud Key Management Service, and secret management. Around all of it sit controls like V P C Service Controls, which draw a perimeter to stop data leaving, plus context-aware access and organization policy. Compliance then adds the legal layer: data sovereignty, health and children's privacy rules, payment data, and audit logging."},

  {t:"Analyzing & Optimizing Processes (~15%)", d:"Technical process, business process, and the human side of architecture", len:"35 min",
   script:"Fifteen percent of this exam is about process, and roughly half of that is not technical at all. On the technical side you get the software development lifecycle, continuous integration and delivery, root cause analysis, testing and validation, and disaster recovery. On the business side you get stakeholder management, change management, assessing whether a team actually has the skills for the platform you are proposing, and cost optimization framed as capital versus operating expenditure. Candidates from a pure engineering background lose points here more than anywhere else, because they pick the technically superior answer over the one that acknowledges the organisation has to live with it."},

  {t:"Managing Implementation & Operations Excellence (~25% combined)", d:"Deployment, tooling, observability, reliability in production", len:"35 min",
   script:"The last two sections are twelve and a half percent each. Managing implementation is about advising the teams that actually ship: application and infrastructure deployment, application programming interface management, load and integration testing, migration tooling, and interacting with Google Cloud programmatically through the command-line tools, client libraries, and infrastructure as code with Terraform. Operations excellence then covers what happens after launch — monitoring and logging, profiling and benchmarking, alerting strategy, release management, quality control, and proving reliability through chaos engineering, penetration testing and load testing. Together that is a quarter of the exam devoted to running a system rather than drawing one."},

  {t:"The Case Studies — Read Them Before Exam Day", d:"Four published studies, two appear, worth 20–30% of your score", len:"30 min",
   script:"This is the single biggest free advantage on the exam and most candidates waste it. Google publishes the case studies in advance, in full, as downloadable documents. Two of them appear on your exam, and case study questions make up twenty to thirty percent of it. The current roster is Altostrat Media, Cymbal Retail, E H R Healthcare, and KnightMotives Automotive. Read all four before exam day, and note each fictional company's existing stack, its stated business goals, its compliance constraints, and its executive statements — that is where the answers hide. Several of them now use Google's generative A I services, which is a recent and deliberate change."},
  ],

  summarySections: [
  {h:"Exam Format", items:["50–60 multiple choice and multiple select questions", "2 hours", "200 USD registration fee, plus tax where applicable", "English and Japanese", "2 case studies per exam, worth 20–30% of the questions", "No numeric passing score is published — results are pass/fail only"]},
  {h:"Six Sections (current guide)", items:["1. Designing and planning a cloud solution architecture — ~25%", "2. Managing and provisioning a cloud solution infrastructure — ~17.5%", "3. Designing for security and compliance — ~17.5%", "4. Analyzing and optimizing technical and business processes — ~15%", "5. Managing implementation — ~12.5%", "6. Ensuring solution and operations excellence — ~12.5%"]},
  {h:"The Four Published Case Studies", items:["Altostrat Media", "Cymbal Retail", "EHR Healthcare", "KnightMotives Automotive", "All four are downloadable in advance — read them before exam day"]},
  {h:"Validity & Renewal", items:["Professional certifications are valid 2 years", "Renewal window opens 60 days before the inactive date", "Full exam: 2 hours / $200, adds 2 years", "Renewal exam: 1 hour, 25 questions, $100, one generative-AI case study covering 90–100% of it", "Or complete designated courses/skill badges in Google Skills to add 1 year", "A 50% renewal discount code is issued on initial certification"]},
  ],

  quiz: [
  {q:"What passing score does Google publish for the Professional Cloud Architect exam?",
   opts:["70%", "80%", "A scaled score of 700 out of 1000", "None — Google does not publish a numeric passing score"], a:3,
   explanation:"Google publishes no passing score or percentage. Its exams are designed only to determine whether a candidate meets a minimum standard, so results are reported as pass or fail. The widely-repeated '70%' figure is prep-site folklore with no vendor source behind it."},

  {q:"How many case studies appear on a single Professional Cloud Architect exam, and can you see them beforehand?",
   opts:["Two, and Google publishes them in advance", "Two, and they are confidential until exam day", "Four, all published in advance", "None — case studies were removed from the exam"], a:0,
   explanation:"Google publishes four case studies; two appear on any given exam and they account for 20–30% of the questions. Because they are published in full ahead of time, reading them is the highest-return preparation available."},

  {q:"Which of these is a case study on the CURRENT Professional Cloud Architect exam guide?",
   opts:["Mountkirk Games", "TerramEarth", "Altostrat Media", "JencoMart"], a:2,
   explanation:"The current roster is Altostrat Media, Cymbal Retail, EHR Healthcare and KnightMotives Automotive. Mountkirk Games, TerramEarth and JencoMart are retired, though older prep courses still teach them."},

  {q:"Which section carries the largest weight on the exam?",
   opts:["Designing and planning a cloud solution architecture (~25%)", "Designing for security and compliance (~17.5%)", "Managing implementation (~12.5%)", "Ensuring solution and operations excellence (~12.5%)"], a:0,
   explanation:"Design and planning is roughly a quarter of the exam — more than any other section, and more than implementation and operations excellence combined."},

  {q:"How long does a Google Cloud Professional-level certification remain valid?",
   opts:["1 year", "2 years", "3 years", "5 years"], a:1,
   explanation:"Professional certifications are valid for two years. Associate and Foundational certifications get three. The renewal eligibility window for Professional opens 60 days before the inactive date."},

  {q:"What is distinctive about the Professional Cloud Architect renewal exam compared to the full exam?",
   opts:["It is untimed and open book", "It is 1 hour, 25 questions, and is 90–100% case study questions built around a generative-AI scenario", "It is free of charge", "It has no case studies at all"], a:1,
   explanation:"The renewal exam runs 1 hour with 25 questions at $100, and includes a single case study aligned to generative-AI solutions that drives 90–100% of the questions — a very different shape from the full exam."},

  {q:"An architect must guarantee that data in a set of projects cannot be copied to projects outside a defined boundary. Which control is designed for this?",
   opts:["VPC Service Controls", "Cloud Armor", "A firewall rule", "Basic IAM roles"], a:0,
   explanation:"VPC Service Controls establish a service perimeter around resources specifically to mitigate data exfiltration. Firewall rules govern network traffic, and Cloud Armor is edge protection against web attacks and DDoS."},

  {q:"Following the principle of least privilege, which IAM role type should an architect prefer?",
   opts:["Basic roles such as Owner, Editor and Viewer", "Predefined roles, narrowing to a custom role when no predefined role fits", "Always custom roles, in every case", "Roles are not used in Google Cloud"], a:1,
   explanation:"Predefined roles are curated for specific services and are the normal choice. Custom roles exist for when no predefined role is tight enough. Basic roles are far too broad and are what least-privilege guidance steers you away from."},

  {q:"Which Google Cloud service is the standard answer for a stateless containerized workload that must scale to zero when idle?",
   opts:["Compute Engine", "Google Kubernetes Engine", "Cloud Run", "Bare metal"], a:2,
   explanation:"Cloud Run runs containers serverlessly, scales to zero, and bills for request time. GKE gives more control but you manage and pay for the cluster; Compute Engine is raw VMs."},

  {q:"Policy in Google Cloud is inherited through which structure?",
   opts:["The resource hierarchy: organization, then folders, then projects, then resources", "Alphabetically by project name", "By billing account only", "There is no inheritance — every resource is configured individually"], a:0,
   explanation:"IAM policy and organization policy inherit downward through organization, folders, projects and resources. Most access-control questions on this exam are really questions about where in that hierarchy a policy is bound."},

  {q:"Which of these belongs to the section on analyzing and optimizing technical AND BUSINESS processes?",
   opts:["Configuring VPC peering", "Stakeholder management, change management, and assessing a team's skills readiness", "Choosing a machine type", "Writing a firewall rule"], a:1,
   explanation:"Roughly half of that ~15% section is explicitly non-technical: stakeholder management, change management, decision-making processes, team skills readiness, customer success, and CapEx versus OpEx cost framing."},

  {q:"What experience does Google recommend before attempting this exam?",
   opts:["No experience — it is an entry-level certification", "3+ years of industry experience including 1+ years designing and managing solutions on Google Cloud", "10 years of enterprise architecture experience", "A prior Associate Cloud Engineer certification, which is a hard prerequisite"], a:1,
   explanation:"Google recommends 3+ years of industry experience with 1+ years on Google Cloud specifically. There are no hard prerequisites — the Associate Cloud Engineer certification is not required."},
  ],

  flashcards: [
  {f:"Resource Hierarchy", b:"Organization → folders → projects → resources. IAM and organization policy inherit downward through it, which is why placement matters more than the policy text."},
  {f:"Predefined vs. Basic vs. Custom Roles", b:"Basic roles (Owner/Editor/Viewer) are too broad for production. Predefined roles are the normal least-privilege choice. Custom roles exist for when nothing predefined is tight enough."},
  {f:"Service Account", b:"An identity belonging to an application or workload rather than a person. Prefer impersonation and Workload Identity Federation over downloading service account keys."},
  {f:"VPC Service Controls", b:"A service perimeter around Google Cloud resources that mitigates data exfiltration by blocking movement of data across the perimeter, even by authorized identities."},
  {f:"CMEK", b:"Customer-Managed Encryption Keys — keys you create and control in Cloud KMS, used by Google Cloud services in place of Google-managed keys."},
  {f:"Shared VPC", b:"Lets multiple projects share a single host project's network, so networking is centrally governed while teams keep their own projects."},
  {f:"Private Service Connect", b:"Provides private connectivity to services from within your VPC using internal IP addresses, without exposing traffic to the public internet."},
  {f:"Cloud Run", b:"Serverless container runtime. Scales to zero, bills for request time, and removes cluster management from the picture."},
  {f:"GKE vs. Cloud Run", b:"GKE gives full Kubernetes control and a cluster you run and pay for. Cloud Run gives serverless containers with far less operational load and no idle cost."},
  {f:"Spot VMs", b:"Deeply discounted Compute Engine capacity that Google may reclaim. Suitable only for fault-tolerant, restartable workloads."},
  {f:"Committed Use Discount (CUD)", b:"A discount in exchange for committing to a 1- or 3-year minimum level of resource usage. Sustained use discounts apply automatically instead, with no commitment."},
  {f:"Google Cloud Well-Architected Framework", b:"Pillars of operational excellence, security, reliability, performance optimization, cost optimization and sustainability — woven explicitly through the exam objectives."},
  {f:"Cloud Armor", b:"Edge protection for web applications: web application firewall rules and DDoS mitigation in front of Google Cloud load balancers."},
  {f:"Identity-Aware Proxy (IAP)", b:"Enforces per-request identity and context checks in front of applications, so access depends on who and what rather than on network position."},
  {f:"The four case studies", b:"Altostrat Media, Cymbal Retail, EHR Healthcare, KnightMotives Automotive. Published in advance; two appear on your exam and drive 20–30% of the questions."},
  {f:"Google's scoring policy", b:"Pass/fail only. No numeric passing score is published, and passing candidates receive no score. A failing candidate gets a sectional breakdown in the Candidate Portal."},
  ],

  stateModule: null,

  globalSpec: {
    vendor:    "Google Cloud (delivered by Kryterion — onsite test center or remote proctored)",
    questions: "50–60 multiple choice and multiple select",
    time:      "2 hours",
    pass:      "NOT PUBLISHED — Google reports pass/fail only and publishes no numeric passing score or percentage",
    fee:       "200 USD (plus tax where applicable). Renewal exam: 100 USD",
    note:      "Two things generic prep material gets wrong about this exam. FIRST: Google publishes no passing score at all — not a percentage, not a scaled number. Its exams are built only to decide whether a candidate meets a minimum standard, so results are pass/fail and passing candidates receive no score. The '70%' figure repeated across prep sites has no vendor source. If you fail, the Candidate Portal shows a sectional breakdown with approximate section weights; if you pass, you learn nothing beyond 'pass'. SECOND: the exam leans on case studies that Google PUBLISHES IN FULL IN ADVANCE. Two of the four appear on your exam and account for 20-30% of the questions, so reading all four beforehand is the single highest-return preparation available. The current roster is Altostrat Media, Cymbal Retail, EHR Healthcare and KnightMotives Automotive — Mountkirk Games, TerramEarth, JencoMart and Helicopter Racing League are RETIRED and still taught by out-of-date courses. Also note the guide was restructured from five sections to six, and now explicitly examines Google's generative-AI and agent platform. Provisional pass/fail appears on screen immediately; Google confirms results in 7-10 days.",
    source:    "Professional Cloud Architect certification page, cloud.google.com/learn/certification/cloud-architect; Professional Cloud Architect Certification Exam Guide PDF (services.google.com, current as of Aug 2026); Google Cloud Certification Help — exam results and scoring, support.google.com/cloud-certification; Certification Renewal, support.google.com/cloud-certification/answer/9907853",
    verified:  true,
    confidence:"partial — sections, weights, case studies, fee, format, validity and renewal all confirmed from Google's own guide and help center. The exam guide carries no printed revision date, so 'current' means as retrieved 2026-08-02; re-pull the PDF before publishing.",
  },

  stateSpecs: null,

  genericSpecNote: "Google Cloud certification is a single global credential with no state or jurisdictional variation. Fees are quoted in USD and local tax may be added at registration.",
};
