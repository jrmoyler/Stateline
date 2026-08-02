// AWS Certified Solutions Architect – Associate — federal-scope cloud certification track.
//
// Read src/data/tracks/CONTRACT.md before editing. Cloud vendors revise exam codes on a
// roughly 18-month cadence, so the code itself is the field most likely to rot. Verified
// 2026-08-02: SAA-C03 is still the live version. AWS's own exam guide at
// docs.aws.amazon.com names SAA-C03, and the AWS Certification "Coming Soon" page lists
// only the SysOps → CloudOps (SOA-C03) rename — no SAA-C04 and no SAA-C03 retirement
// date. Several 2026 prep blogs assert an "SAA-C04 released March 2024"; that claim is
// contradicted by AWS and is not reproduced here.

export default {
  id:       "aws-saa",
  name:     "AWS SAA",
  full:     "AWS Certified Solutions Architect – Associate",
  category: "Cloud / Infrastructure",
  accent:   "cloud",
  type:     "certification",
  scope:    "federal",
  tagline:  "Amazon's associate-level architecture credential — design secure, resilient, performant, cost-aware systems on AWS.",

  // Four domains, weighted 30/26/24/20 of SCORED content. The first lesson is deliberately
  // the global-infrastructure map, because every later domain leans on it.
  lessons: [
  {t:"AWS Global Infrastructure", d:"Regions, Availability Zones, edge locations — the map everything else sits on", len:"20 min",
   script:"Start with the map, because almost every design question depends on it. A Region is a geographic area, and inside each Region are Availability Zones — separate clusters of data centers with independent power and cooling, linked by low-latency private fiber. Spreading an application across two or three Availability Zones is how you survive a single facility failure without leaving the Region. Regions are isolated from one another by default, so anything cross-Region is replication you configure yourself. Edge locations are a third tier: they cache content for CloudFront and answer Route 53 queries close to your users. Latency, blast radius, and data residency all trace back to this layout."},

  {t:"Design Secure Architectures (30%)", d:"Identity as the boundary: roles, policies, encryption, account structure", len:"55 min",
   script:"Design Secure Architectures is the largest domain at thirty percent. The central idea is that identity, not the network, is the primary boundary in AWS. Identity and Access Management, or I A M, gives you users, groups, roles, and policies — and the role is the one to internalize, because a role hands out temporary credentials that expire on their own. Attach a role to an E C 2 instance or a Lambda function instead of embedding long-lived access keys anywhere. Above the account, AWS Organizations and service control policies set a ceiling no member account can exceed. Below it, Key Management Service protects data at rest. When a question mentions credentials sitting in code, the answer is almost always a role."},

  {t:"Design Resilient Architectures (26%)", d:"Removing single points of failure, decoupling, backup and recovery", len:"50 min",
   script:"Resilient architectures is twenty-six percent, and it is really one question asked many ways: what happens when a component dies? The pattern is to remove single points of failure and to decouple. A load balancer in front of instances spread across multiple Availability Zones absorbs the loss of any one instance. Relational Database Service Multi-A Z keeps a synchronous standby ready for automatic failover — that is availability, not extra capacity. Read replicas are the opposite: they add read throughput but no automatic failover. For asynchronous work, put a queue such as Simple Queue Service between producers and consumers, so a slow consumer creates a backlog instead of an outage. Backups and cross-Region replication cover the disaster you cannot design around."},

  {t:"Design High-Performing Architectures (24%)", d:"Choosing compute, storage, database and caching that fit the workload", len:"50 min",
   script:"High-performing architectures is twenty-four percent, and it rewards picking the right service rather than tuning the wrong one. Compute runs from E C 2 instances you manage, through containers on Elastic Container Service or Kubernetes, out to Lambda where you supply only a function. Storage splits three ways: block storage on Elastic Block Store attached to a single instance, shared file storage on Elastic File System, and object storage in S3 for anything web-facing or archival. On databases, relational workloads go to R D S or Aurora, while key-value workloads needing predictable single-digit-millisecond reads go to DynamoDB. When the complaint is latency, reach for a cache like ElastiCache or a content delivery network like CloudFront before you resize anything."},

  {t:"Design Cost-Optimized Architectures (20%)", d:"Matching pricing commitment to how predictable the workload really is", len:"35 min",
   script:"Cost-optimized architectures is twenty percent, and it is mostly about matching commitment to predictability. On-demand pricing costs the most and commits you to nothing. Savings Plans and Reserved Instances trade a one-year or three-year commitment for a substantial discount on steady baseline load. Spot capacity is cheapest of all but can be reclaimed with little warning, so it suits fault-tolerant batch work and nothing else. Storage follows the same logic through S3 storage classes: Standard for hot data, Infrequent Access for data you rarely read, and the Glacier tiers for archives where you will accept a retrieval delay measured in minutes or hours. Lifecycle policies move objects between classes automatically, so nobody has to remember."},

  {t:"Shared Responsibility & the Well-Architected Framework", d:"The two mental models AWS grades every design against", len:"25 min",
   script:"Two frameworks sit underneath every domain. The shared responsibility model divides the work: AWS secures the cloud itself — the hardware, the facilities, the managed service software — and you secure what you put in it, meaning your data, your access policies, and any patching that is still yours. That line moves with the service. With Lambda you patch nothing; with E C 2 the guest operating system is yours. The Well-Architected Framework then gives you six pillars to judge a design against: operational excellence, security, reliability, performance efficiency, cost optimization, and sustainability. When a question offers several answers that would all technically work, the pillar it emphasizes tells you which one AWS is looking for."},

  {t:"Exam Mechanics: Compensatory Scoring & Unscored Questions", d:"Why a weak domain cannot fail you, and why 15 questions do not count", len:"18 min",
   script:"Two mechanics should change how you sit this exam. First, sixty-five questions appear but only fifty are scored. The other fifteen are unmarked trial questions AWS is evaluating for future use. You cannot tell them apart, so a question that feels strange or off-syllabus may simply not count — do not let it rattle you, and never leave one blank, because there is no penalty for guessing. Second, scoring is compensatory. Your result is a single scaled score from one hundred to one thousand, and seven hundred and twenty passes. There is no per-domain bar to clear, so genuine strength in one area can carry a weak one. Section feedback on your report is directional, not a grade."},
  ],

  summarySections: [
  {h:"Exam Format (SAA-C03)", items:["65 questions — 50 scored, 15 unscored pretest", "130 minutes", "Multiple choice and multiple response only — no labs, no case studies", "Scaled 100–1000; 720 passes", "Compensatory scoring: one overall score, no per-domain minimum"]},
  {h:"The Four Scored Domains", items:["Design Secure Architectures — 30%", "Design Resilient Architectures — 26%", "Design High-Performing Architectures — 24%", "Design Cost-Optimized Architectures — 20%"]},
  {h:"Services That Carry the Most Weight", items:["Compute: EC2, Lambda, ECS, EKS, Fargate", "Storage: S3 and its storage classes, EBS, EFS", "Database: RDS, Aurora, DynamoDB, ElastiCache", "Networking & edge: VPC, ALB/NLB, CloudFront, Route 53", "Security: IAM roles, KMS, Organizations and SCPs"]},
  {h:"Lifecycle & Money", items:["150 USD, delivered by Pearson VUE or PSI", "Recommended: ~1 year hands-on AWS design experience", "Certification valid 3 years", "Recertify by retaking the current version, or by passing the Professional-level exam", "Passing any AWS exam issues a 50% voucher, good 12 months, usable on any exam"]},
  ],

  quiz: [
  {q:"What is the minimum passing score on the AWS Certified Solutions Architect – Associate exam?",
   opts:["700 out of 1000", "720 out of 1000", "750 out of 1000", "800 out of 1000"], a:1,
   explanation:"AWS reports results on a scaled range of 100 to 1000 and sets the minimum passing score at 720. The scale exists so scores stay comparable across exam forms of slightly different difficulty."},

  {q:"Of the 65 questions presented on the exam, how many actually affect your score?",
   opts:["50", "55", "60", "All 65"], a:0,
   explanation:"Fifty questions are scored. The remaining fifteen are unscored trial questions AWS is evaluating for future exams, and they are not identified on the exam — so answer every question."},

  {q:"The exam uses a compensatory scoring model. What does that mean in practice?",
   opts:["You must reach a passing score in each of the four domains separately", "You only need to pass overall — strength in one domain can offset weakness in another", "Wrong answers subtract from your score", "Your reported score is the raw percentage of questions answered correctly"], a:1,
   explanation:"Compensatory scoring means there is no per-section minimum. AWS states you do not need a passing score in each section, only on the overall exam."},

  {q:"An application on an EC2 instance needs to read objects from an S3 bucket. What is the recommended way to grant that access?",
   opts:["Embed an IAM user's long-lived access keys in the application code", "Attach an IAM role to the EC2 instance", "Make the S3 bucket publicly readable", "Store the access keys in a plaintext file on the instance"], a:1,
   explanation:"An IAM role attached to the instance supplies temporary, automatically rotated credentials. Long-lived keys stored in code or on disk are the anti-pattern this domain tests repeatedly."},

  {q:"What is the difference between RDS Multi-AZ and an RDS read replica?",
   opts:["Multi-AZ adds read capacity; a read replica provides failover", "Multi-AZ maintains a synchronous standby for automatic failover; read replicas add read capacity", "They are two names for the same feature", "Read replicas are synchronous and Multi-AZ is asynchronous"], a:1,
   explanation:"Multi-AZ is an availability feature — a synchronous standby in another Availability Zone that takes over automatically. Read replicas are asynchronous copies that scale read traffic, not availability."},

  {q:"Which S3 storage class offers the lowest storage cost while accepting retrieval times measured in hours?",
   opts:["S3 Standard", "S3 Standard-Infrequent Access", "S3 Glacier Deep Archive", "S3 One Zone-Infrequent Access"], a:2,
   explanation:"S3 Glacier Deep Archive is the cheapest storage tier and is intended for long-term archives where a retrieval delay of up to roughly 12 hours is acceptable."},

  {q:"How do an Application Load Balancer and a Network Load Balancer differ?",
   opts:["The Application Load Balancer operates at Layer 7 (HTTP/HTTPS); the Network Load Balancer operates at Layer 4 (TCP/UDP/TLS)", "The Application Load Balancer is global and the Network Load Balancer is regional", "The Network Load Balancer only supports HTTPS", "They are identical apart from price"], a:0,
   explanation:"The ALB routes on application-layer content such as host and path. The NLB works at the transport layer, which is what makes it the choice for extreme throughput, static IP addresses, and non-HTTP protocols."},

  {q:"A nightly batch job can be interrupted and restarted safely. Which EC2 purchasing option is the cheapest fit?",
   opts:["On-Demand Instances", "Reserved Instances", "Spot Instances", "Dedicated Hosts"], a:2,
   explanation:"Spot capacity is the deepest discount available but can be reclaimed by AWS with short notice, which is acceptable only for fault-tolerant, restartable workloads like this one."},

  {q:"Under the AWS shared responsibility model, who is responsible for patching the guest operating system on an EC2 instance?",
   opts:["AWS", "The customer", "The testing vendor", "Neither — EC2 instances have no guest operating system"], a:1,
   explanation:"AWS secures the cloud — hardware, facilities, and the hypervisor. The customer secures what runs in the cloud, and on EC2 that includes the guest OS, its patches, and everything above it."},

  {q:"How long is the AWS Certified Solutions Architect – Associate certification valid?",
   opts:["1 year", "2 years", "3 years", "It does not expire"], a:2,
   explanation:"AWS certifications are valid for three years. AWS extended the recertification period from two years to three in 2019, at the same time it discontinued standalone recertification exams."},

  {q:"Which content domain carries the greatest weight on the exam?",
   opts:["Design Secure Architectures — 30%", "Design Resilient Architectures — 26%", "Design High-Performing Architectures — 24%", "Design Cost-Optimized Architectures — 20%"], a:0,
   explanation:"Security is the heaviest domain at 30% of scored content, followed by resilience at 26%, performance at 24%, and cost at 20%."},

  {q:"Which service is the standard answer for decoupling a producer from a slower consumer so a traffic spike does not cause failures?",
   opts:["Amazon Simple Queue Service", "Amazon CloudFront", "AWS Key Management Service", "Amazon Route 53"], a:0,
   explanation:"SQS buffers messages between components. The producer keeps writing while the consumer drains the queue at its own pace, converting a would-be outage into a temporary backlog."},
  ],

  flashcards: [
  {f:"Availability Zone", b:"One or more discrete data centers within a Region with independent power, cooling and networking, connected to the other AZs by low-latency private links."},
  {f:"IAM Role", b:"An identity that is assumed rather than logged into, delivering temporary auto-rotating credentials. The preferred way to grant AWS access to EC2, Lambda, ECS and other accounts."},
  {f:"Service Control Policy (SCP)", b:"An AWS Organizations guardrail that caps the maximum permissions available in a member account. It grants nothing on its own — it only sets a ceiling."},
  {f:"VPC", b:"Virtual Private Cloud — a logically isolated network you define, with subnets, route tables, gateways, security groups and network ACLs."},
  {f:"Security Group vs. Network ACL", b:"A security group is stateful and attaches to an instance or interface. A network ACL is stateless and attaches to a subnet, so return traffic needs its own rule."},
  {f:"RDS Multi-AZ", b:"A high-availability deployment with a synchronous standby in a second Availability Zone and automatic failover. It adds availability, not read capacity."},
  {f:"Read Replica", b:"An asynchronous copy of a database used to scale read traffic. It does not provide automatic failover."},
  {f:"DynamoDB", b:"Fully managed key-value and document database delivering predictable single-digit-millisecond reads at effectively any scale."},
  {f:"S3 Glacier Deep Archive", b:"The lowest-cost S3 storage class, for archives you rarely touch and can wait hours to retrieve."},
  {f:"S3 Lifecycle Policy", b:"A rule that automatically transitions objects between storage classes, or expires them, based on age."},
  {f:"Savings Plans vs. Spot", b:"Savings Plans discount steady baseline usage in exchange for a 1- or 3-year commitment. Spot discounts spare capacity that AWS may reclaim, suiting only interruptible work."},
  {f:"CloudFront", b:"AWS's content delivery network. Caches content at edge locations to cut latency for globally distributed users."},
  {f:"KMS", b:"Key Management Service — managed encryption keys integrated with most AWS services, with the key policy controlling who may use each key."},
  {f:"Shared Responsibility Model", b:"AWS secures the cloud; the customer secures what is in the cloud. Where the line falls depends on how managed the service is."},
  {f:"Well-Architected Framework", b:"Six pillars used to evaluate a design: operational excellence, security, reliability, performance efficiency, cost optimization, and sustainability."},
  {f:"Compensatory Scoring", b:"One overall scaled score decides pass or fail. There is no minimum you must hit in each individual domain."},
  ],

  stateModule: null,

  globalSpec: {
    vendor:    "Amazon Web Services (delivered via Pearson VUE test centers, PSI, or online proctoring)",
    questions: "65 (50 scored + 15 unscored pretest); multiple choice and multiple response",
    time:      "130 minutes",
    pass:      "720 on a scaled range of 100–1000",
    fee:       "150 USD",
    note:      "The exam code is still SAA-C03 as of August 2026 — AWS's exam guide names SAA-C03 and its Coming Soon page announces no SAA-C04 and no retirement date, despite third-party 2026 blogs claiming otherwise. Scoring is COMPENSATORY: you are not graded per domain, so a weak area can be carried by a strong one and the section bars on your score report are directional feedback, not per-domain pass/fail. 15 of the 65 questions are unscored trial items you cannot identify, so never leave one blank — there is no guessing penalty. On recertification: AWS discontinued standalone (shorter, cheaper) recertification exams on March 3, 2019 and simultaneously extended validity from 2 years to 3. Today you recertify by passing the current full-length exam, or automatically by earning AWS Certified Solutions Architect – Professional. The surviving discount is a 50% voucher issued after you pass any AWS exam, valid 12 months and usable on any exam — it is not a recertification-specific rate.",
    source:    "AWS Certified Solutions Architect - Associate (SAA-C03) Exam Guide, docs.aws.amazon.com/aws-certification; AWS certification product page, aws.amazon.com/certification/certified-solutions-architect-associate; AWS Recertification Policy, aws.amazon.com/certification/policies/recertification; AWS Certification Coming Soon page; AWS announcement 'New AWS Certification Policies Offer Customers More Choices and Flexibility' (Feb 2019)",
    verified:  true,
  },

  stateSpecs: null,

  genericSpecNote: "AWS Certification is a single global credential — there is no state or jurisdictional variation. Exam fees are quoted in USD and converted at the point of registration; local tax may be added.",
};
