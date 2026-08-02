// Microsoft Certified: Azure Administrator Associate (Exam AZ-104) — federal-scope track.
//
// Read src/data/tracks/CONTRACT.md before editing. Microsoft does NOT renumber this exam
// when it revises it — the number AZ-104 has been stable for years while the objectives
// are rewritten underneath it. That makes the SKILLS-MEASURED REVISION DATE the real
// version marker, not the exam code. Verified 2026-08-02 against learn.microsoft.com:
// objectives are current 'as of April 17, 2026', and the certification page carries the
// matching Last Updated 04/17/2026.
//
// CORRECTION vs. the source spec: virtual networking is 15-20%, NOT 20-25%, and is NOT the
// largest domain. Identities/governance and compute are joint-largest at 20-25% each.

export default {
  id:       "azure-admin",
  name:     "Azure Admin",
  full:     "Microsoft Certified: Azure Administrator Associate (AZ-104)",
  category: "Cloud / Infrastructure",
  accent:   "cloud",
  type:     "certification",
  scope:    "federal",
  tagline:  "Microsoft's core Azure operations credential — implement, manage and monitor identity, storage, compute, networking and governance.",

  lessons: [
  {t:"The Administrator Role & How Microsoft Scores You", d:"What the exam assumes you already do daily, and what 700 really means", len:"22 min",
   script:"Before the content, understand the assumption. Microsoft writes this exam for someone who already administers an Azure environment and is comfortable with operating systems, networking, servers and virtualization, plus PowerShell, the Azure command-line interface, the portal, and Resource Manager templates or Bicep. It is not a first cloud certification. Scoring matters too. Microsoft reports every technical exam on a scale of one to one thousand, and seven hundred passes. That seven hundred is not seventy percent — it is a scaled score, and Microsoft says plainly it may not equal seventy percent of the points. Harder question sets need fewer raw points to pass; easier sets need more."},

  {t:"Manage Azure Identities & Governance (20–25%)", d:"Entra ID, role-based access control, policy, subscriptions, cost controls", len:"45 min",
   script:"Identity and governance is one of the two heaviest domains. Microsoft Entra I D — the service formerly called Azure Active Directory — holds your users, groups, external guests, licences and self-service password reset. On top of that sits role-based access control, and the exam cares about scope: you assign a role at a management group, subscription, resource group or individual resource, and it inherits downward. Governance then adds Azure Policy, which enforces rules like mandatory tags or permitted regions and reports compliance at scale. Resource locks stop accidental deletion. Budgets, cost alerts and Azure Advisor recommendations are examinable too, so cost is an administrator's job here."},

  {t:"Implement & Manage Storage (15–20%)", d:"Storage accounts, redundancy, access control, blobs, files, lifecycle", len:"35 min",
   script:"Storage questions almost always turn on two things: redundancy and who can get in. Redundancy options run from locally redundant storage, which keeps three copies inside one datacenter, up through zone-redundant and geo-redundant options that survive a datacenter or an entire region. Access is a layered story — storage account keys are the blunt instrument, shared access signature tokens grant scoped time-limited access, stored access policies let you revoke those tokens centrally, and identity-based access is the preferred route for Azure Files. Then know the tiers: hot, cool, cold and archive, with lifecycle management rules moving blobs between them automatically as they age."},

  {t:"Deploy & Manage Azure Compute Resources (20–25%)", d:"ARM templates and Bicep, virtual machines, scale sets, containers, App Service", len:"50 min",
   script:"Compute is the other joint-largest domain, and it opens with infrastructure as code. You are expected to read an Azure Resource Manager template or a Bicep file, modify one, deploy from one, and export an existing deployment back into a template — reading these is genuinely examinable, not background. Then virtual machines: sizing, disks, encryption at host, and the distinction between availability sets, which spread machines across fault and update domains inside one datacenter, and availability zones, which spread them across physically separate datacenters. Scale sets add elasticity. Containers arrive through Container Registry, Container Instances and Container Apps, and App Service brings plans, scaling, custom domains, certificates and deployment slots."},

  {t:"Implement & Manage Virtual Networking (15–20%)", d:"Virtual networks, peering, routing, NSGs, private endpoints, load balancing", len:"45 min",
   script:"A quick correction first: networking is fifteen to twenty percent, not the largest domain — plenty of study guides still claim it is. Start with virtual networks and subnets, then peering, which connects two virtual networks privately over Microsoft's backbone without a gateway. User-defined routes override Azure's default routing when you need traffic to pass through an appliance. Network security groups filter traffic by rule, and the exam loves asking you to work out the effective rules when several apply at once. Azure Bastion gives browser-based access to virtual machines without exposing a public I P address. Service endpoints and private endpoints then bring platform services onto your private network."},

  {t:"Monitor & Maintain Azure Resources (10–15%)", d:"Azure Monitor, logs and alerts, Network Watcher, Backup, Site Recovery", len:"35 min",
   script:"The smallest domain is still the one that decides whether you actually keep a system running. Azure Monitor collects metrics and logs; you configure diagnostic settings to send logs somewhere useful, query them, and build alert rules with action groups so someone is actually told. Monitor Insights gives ready-made views for virtual machines, storage accounts and networks, while Network Watcher and Connection Monitor diagnose connectivity problems specifically. Protection is the other half. A Recovery Services vault plus a backup policy handles backup and restore, and Azure Site Recovery handles regional failover — including the drill where you fail over to a secondary region and prove it works."},

  {t:"Renewal — Free, Annual, and Nothing Like the Exam", d:"How Microsoft replaced paid recertification with an online assessment", len:"18 min",
   script:"Microsoft associate certifications expire after twelve months, which sounds harsh until you see how renewal works. You do not resit AZ-104 and you do not pay again. Instead you take a free online assessment hosted on Microsoft Learn — unproctored, taken from wherever you like, open to the documentation, and retakeable after a short wait if you do not pass. The renewal window opens six months before your expiry date, and renewing early does not cost you time, because the new expiry runs from the old one. This replaced the old model of buying a fresh exam every few years, so the only ongoing cost of holding this certification is your attention."},
  ],

  summarySections: [
  {h:"Exam Format", items:["Exam number AZ-104 — Microsoft revises objectives in place and does not renumber", "Objectives current as of April 17, 2026", "100 minutes exam time; allow 120 minutes seat time", "Typically 40–60 questions; multiple choice, drag-and-drop, hot area, build list, active screen, and possibly case studies", "Scheduled through Pearson VUE; test center or online proctored", "165 USD in the United States"]},
  {h:"Five Domains (as of April 17, 2026)", items:["Manage Azure identities and governance — 20–25%", "Implement and manage storage — 15–20%", "Deploy and manage Azure compute resources — 20–25%", "Implement and manage virtual networking — 15–20%", "Monitor and maintain Azure resources — 10–15%"]},
  {h:"Scoring — Read This Twice", items:["Scale of 1 to 1000; 700 or greater passes", "700 IS NOT 70% — Microsoft states a scaled score 'may not equal 70% of the points'", "Harder question sets require fewer raw points; easier sets require more", "The score report's per-skill bar chart cannot be converted into questions answered correctly", "No penalty for guessing"]},
  {h:"Validity & Free Renewal", items:["Renewal frequency: 12 months", "Renew free via an online assessment on Microsoft Learn — not the paid exam", "Unproctored, open to Microsoft Learn documentation, retakeable", "Renewal window opens 6 months before expiry", "Renewing early does not shorten your term"]},
  ],

  quiz: [
  {q:"A score of 700 is required to pass AZ-104. What does that 700 represent?",
   opts:["70% of the questions answered correctly", "A scaled score on a 1–1000 range that does not necessarily equal 70% of the points", "700 out of 700 possible points", "A percentile ranking against other candidates"], a:1,
   explanation:"Microsoft reports technical exams on a 1–1000 scale and states explicitly that because this is a scaled score, it may not equal 70% of the points. Harder question sets need fewer raw points to reach 700; easier sets need more."},

  {q:"Which two domains are joint-largest on the current AZ-104 objectives?",
   opts:["Virtual networking and storage", "Identities and governance, and compute resources — both 20–25%", "Monitoring and storage", "Virtual networking alone, at 25–30%"], a:1,
   explanation:"As of the April 17, 2026 objectives, identities/governance and compute are both 20–25%. Virtual networking is 15–20% — many study guides still wrongly call networking the largest domain."},

  {q:"How does Microsoft handle recertification for AZ-104?",
   opts:["You retake and pay for the AZ-104 exam every 2 years", "You renew free every 12 months by passing an unproctored online assessment on Microsoft Learn", "You submit continuing education credits", "The certification never expires"], a:1,
   explanation:"Microsoft role-based associate certifications carry a 12-month renewal frequency, renewed at no cost by passing an online assessment on Microsoft Learn. This replaced paid recertification exams."},

  {q:"How long do you have to complete the AZ-104 exam?",
   opts:["45 minutes", "100 minutes", "150 minutes", "180 minutes"], a:1,
   explanation:"Microsoft lists 100 minutes of exam time for AZ-104, with roughly 120 minutes of seat time once instructions, the candidate agreement and post-exam comments are included."},

  {q:"Which Azure service enforces an organizational rule such as 'every virtual machine must carry a costCenter tag' and reports compliance at scale?",
   opts:["Azure role-based access control", "Azure Policy", "A resource lock", "Microsoft Entra ID"], a:1,
   explanation:"Azure Policy evaluates resources against rules and reports or enforces compliance. RBAC controls who may act; a resource lock prevents deletion or modification; Entra ID handles identity."},

  {q:"What is the difference between an availability set and an availability zone?",
   opts:["An availability set spreads VMs across fault and update domains within a datacenter; an availability zone spreads them across physically separate datacenters in a region", "They are two names for the same feature", "An availability set spans regions; an availability zone spans subscriptions", "Availability zones apply only to storage accounts"], a:0,
   explanation:"Availability sets protect against rack-level and maintenance-related failure inside one datacenter. Availability zones protect against the loss of an entire datacenter within a region — a materially higher level of protection."},

  {q:"Which Azure Storage blob tier has the lowest storage cost but the highest retrieval cost and latency?",
   opts:["Hot", "Cool", "Cold", "Archive"], a:3,
   explanation:"Archive is the cheapest to store and the most expensive and slowest to read, requiring rehydration before access. Hot, cool and cold sit progressively between the extremes."},

  {q:"You need to grant a partner time-limited read access to one blob container without sharing the storage account key. What should you use?",
   opts:["A shared access signature (SAS) token", "The storage account key", "A network security group rule", "A resource lock"], a:0,
   explanation:"A SAS token grants scoped, time-limited access to specific storage resources. Pairing it with a stored access policy lets you revoke it centrally. Handing over the account key grants full control of the whole account."},

  {q:"What does virtual network peering do?",
   opts:["Connects two virtual networks privately over the Microsoft backbone", "Encrypts all traffic leaving a subnet", "Provides browser-based RDP access to a virtual machine", "Balances traffic across regions"], a:0,
   explanation:"Peering links two virtual networks so resources communicate over private IP addresses across Microsoft's backbone, without a gateway or the public internet. Bastion provides browser-based VM access; Traffic Manager and Front Door handle cross-region traffic."},

  {q:"Which service lets an administrator connect to a virtual machine over RDP or SSH from a browser without giving that VM a public IP address?",
   opts:["Azure Bastion", "A network security group", "Azure Firewall", "A user-defined route"], a:0,
   explanation:"Azure Bastion provides browser-based RDP and SSH from inside the virtual network, removing the need to expose management ports on a public IP address."},

  {q:"Which pairing correctly matches an Azure service to its job?",
   opts:["Azure Backup performs regional failover; Site Recovery restores individual files", "Azure Backup handles backup and restore via a Recovery Services vault; Azure Site Recovery handles replication and failover to a secondary region", "Both perform identical functions", "Neither is covered on AZ-104"], a:1,
   explanation:"Azure Backup protects and restores data through a Recovery Services vault. Azure Site Recovery replicates workloads so you can fail an environment over to another region and fail it back."},

  {q:"Which of these is NOT an expectation Microsoft sets for AZ-104 candidates?",
   opts:["Experience with PowerShell and the Azure CLI", "Familiarity with ARM templates or Bicep files", "Experience with Microsoft Entra ID", "Professional software development experience in C#"], a:3,
   explanation:"Microsoft's audience profile lists operating systems, networking, servers, virtualization, PowerShell, Azure CLI, the portal, ARM templates or Bicep, and Entra ID. Writing application code in C# is not among them — that is the developer track."},
  ],

  flashcards: [
  {f:"Microsoft Entra ID", b:"The current name for Azure Active Directory — Microsoft's cloud identity service holding users, groups, guests, licences and app registrations."},
  {f:"RBAC scope", b:"Role assignments apply at management group, subscription, resource group or resource level and inherit downward. Where you assign matters as much as which role."},
  {f:"Azure Policy", b:"Enforces and audits organizational rules — required tags, permitted regions, allowed SKUs — and reports compliance at scale. It governs what may exist, not who may act."},
  {f:"Resource Lock", b:"A CanNotDelete or ReadOnly lock preventing accidental deletion or change. It applies regardless of the user's RBAC role."},
  {f:"Management Group", b:"A container above subscriptions used to apply policy and access assignments across many subscriptions at once."},
  {f:"Storage redundancy (LRS / ZRS / GRS)", b:"LRS keeps three copies in one datacenter; ZRS spreads copies across availability zones; GRS replicates to a paired secondary region."},
  {f:"Shared Access Signature (SAS)", b:"A token granting scoped, time-limited access to storage resources. Bind it to a stored access policy so it can be revoked centrally."},
  {f:"Blob access tiers", b:"Hot, cool, cold and archive. Cost of storage falls and cost/latency of retrieval rises as you go down. Lifecycle management moves blobs automatically."},
  {f:"Availability Set vs. Availability Zone", b:"A set spreads VMs across fault and update domains inside one datacenter. A zone spreads them across physically separate datacenters within a region."},
  {f:"ARM template vs. Bicep", b:"Both declare infrastructure as code. Bicep is the cleaner domain-specific language that compiles to ARM JSON. AZ-104 expects you to read and modify either."},
  {f:"Network Security Group (NSG)", b:"Rule-based traffic filtering applied to a subnet or network interface. Expect questions asking you to derive the effective rules when several apply."},
  {f:"VNet Peering", b:"A private connection between two virtual networks over the Microsoft backbone — no gateway, no public internet."},
  {f:"User-Defined Route (UDR)", b:"A custom route that overrides Azure's default system routing, typically to force traffic through a firewall or network virtual appliance."},
  {f:"Azure Bastion", b:"Browser-based RDP and SSH into virtual machines with no public IP address and no exposed management ports."},
  {f:"Private Endpoint vs. Service Endpoint", b:"A private endpoint gives a PaaS service a private IP inside your VNet. A service endpoint keeps traffic on the Azure backbone but the service keeps its public endpoint."},
  {f:"Recovery Services Vault", b:"The container for Azure Backup items and policies, and for Site Recovery replication."},
  {f:"Scaled score of 700", b:"The AZ-104 pass mark on a 1–1000 scale. Microsoft states it may not equal 70% of the points — it is not a percentage."},
  ],

  stateModule: null,

  globalSpec: {
    vendor:    "Microsoft (delivered by Pearson VUE — test center or online proctored)",
    questions: "Not published per-exam; Microsoft states most certification exams contain 40–60 questions. Mixed formats: multiple choice, drag-and-drop, hot area, build list, active screen, and possibly case studies",
    time:      "100 minutes exam time (≈120 minutes seat time)",
    pass:      "700 on a scale of 1–1000 — a SCALED score, explicitly not a percentage",
    fee:       "165 USD in the United States; Microsoft prices by country/region and does not publish the figure on the credential page",
    note:      "READ THE SCORE FIRST: 700/1000 is NOT 70%. Microsoft's own scoring page states that because this is a scaled score, 'it may not equal 70% of the points' — harder question sets require fewer raw points to reach 700, easier sets require more, and the per-skill bar chart on your score report cannot be converted into a number of questions answered correctly. VERSIONING: Microsoft does not renumber this exam when it revises it. AZ-104 has kept its number while the objectives were rewritten underneath, so the meaningful version marker is the skills-measured revision date — currently 'as of April 17, 2026'. Note that virtual networking is 15-20% and is NOT the largest domain, contrary to many study guides; identities/governance and compute are joint-largest at 20-25% each. LABS: Microsoft deliberately refuses to publish which exams contain labs, because labs can be pulled at any time for Azure outages or bandwidth reasons. Its published duration table places associate exams WITHOUT labs at 100 minutes and those that MAY contain labs at 120 minutes — AZ-104 is currently listed at 100 minutes, which puts it in the no-lab bucket, but Microsoft's exam policy still warns 'you may have interactive components'. Check the overview screens when you launch the exam. UNDER-KNOWN ADVANTAGE: on role-based exams (this one included, but not Fundamentals) you may open learn.microsoft.com in a split screen during the exam. No extra time is given and the clock keeps running, so it is for the one or two questions you need to look up, not a general safety net. RENEWAL: paid recertification is gone. Associate certifications expire after 12 months and are renewed at no cost by passing an unproctored, open-documentation online assessment on Microsoft Learn, retakeable after a short wait. The renewal window opens 6 months before expiry and renewing early does not shorten your term.",
    source:    "Study guide for Exam AZ-104: Microsoft Azure Administrator (skills measured as of April 17, 2026), learn.microsoft.com/credentials/certifications/resources/study-guides/az-104; Microsoft Certified: Azure Administrator Associate certification page (Last Updated 04/17/2026), learn.microsoft.com/credentials/certifications/azure-administrator; Exam scoring and score reports, learn.microsoft.com/credentials/certifications/exam-scoring-reports; Exam duration and exam experience, learn.microsoft.com/credentials/support/exam-duration-exam-experience",
    verified:  true,
    confidence:"partial — domains, revision date, duration, scoring, lab policy and renewal all confirmed on learn.microsoft.com. The 165 USD figure is corroborated only by secondary sources: Microsoft states 'price based on the country or region in which the exam is proctored' and publishes no USD figure on the credential page. Confirm at the Pearson VUE checkout.",
  },

  stateSpecs: null,

  genericSpecNote: "Microsoft certification is a single global credential with no state or jurisdictional variation. Exam pricing is set per country/region by Microsoft and shown at Pearson VUE checkout; local tax may be added.",
};
