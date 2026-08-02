// Massage Therapy license — a state-licensed credential sitting on top of a genuine
// national exam.
//
// Read src/data/tracks/CONTRACT.md before editing. The structural fact that shapes this
// whole track: unlike cosmetology or esthetics, massage therapy HAS a real national exam.
// The MBLEx, owned by the Federation of State Massage Therapy Boards and delivered at
// Pearson VUE centers, is accepted in 45 of the 48 regulated US jurisdictions. So the exam
// itself is close to uniform. What is NOT uniform: the required training hours (500 to
// 1,000), whether the state bolts a jurisprudence exam on top, the renewal cycle (1 to 4
// years), the CE burden (0 to 36 hours), and — the fact this app exists to surface —
// whether the state licenses massage therapists at all. Kansas, Minnesota and Wyoming
// do not. They are absent from the FSMTB regulated-states table entirely.
//
// Two corrections to material that circulates widely and is wrong:
//   1. The MBLEx does not report a percentage, and as of the current candidate handbook it
//      does not report a number at all. It is a fixed-length computer-adaptive test with a
//      criterion-referenced standard, reported PASS or FAIL. The old "630 out of 900 scaled"
//      figure is legacy and FSMTB no longer publishes a passing score.
//   2. New York and Hawaii have NOT transitioned to MBLEx-only. Both still run their own
//      state examinations and neither accepts the MBLEx. Verified on op.nysed.gov and
//      cca.hawaii.gov in August 2026. Florida and New Jersey DO accept the MBLEx.

export default {
  id:       "massage",
  name:     "Massage Therapy",
  full:     "Massage Therapy License",
  category: "Beauty / Wellness",
  accent:   "beauty",
  type:     "license",
  scope:    "state",
  tagline:  "State massage therapy license, built on the MBLEx — the national exam from the Federation of State Massage Therapy Boards.",

  // The seven core lessons map one-to-one onto the seven MBLEx content domains and their
  // published weightings. The final lesson swaps in per-state law at runtime.
  lessons: [
  {t:"Anatomy & Physiology for Massage", d:"Eleven body systems, tissue injury and repair", len:"38 min",
   script:"Anatomy and physiology is eleven percent of the M B L Ex, and it is the floor everything else stands on. You are asked about eleven body systems: cardiovascular, digestive, endocrine, integumentary, lymphatic and immune, musculoskeletal, nervous, reproductive, respiratory, sensory, and urinary. For each one, know its structure and know what it does. The exam also covers tissue injury and repair, so learn the three phases in order: acute inflammation, then repair, then remodeling. Energetic anatomy is on the outline too, so do not skip it. One piece of advice. Do not memorize muscles in isolation. Learn each muscle inside the system it belongs to, and the questions get much easier."},

  {t:"Kinesiology & Movement", d:"Origins, insertions, actions, proprioceptors, range of motion", len:"32 min",
   script:"Kinesiology is twelve percent of the exam, and it is the study of how the body actually moves. You need skeletal muscle components and characteristics, how a contraction works, and the two proprioceptors. The muscle spindle senses stretch and resists it. The Golgi tendon organ senses tension in the tendon and inhibits the contraction, which is why a held stretch eventually gives. You need muscle locations with their origins, insertions, and actions. You need joint structure and function. And you need three kinds of range of motion: active, where the client moves alone; passive, where you move the client while they stay relaxed; and resisted, where the client works against you. Expect questions that name an action and ask which muscle produced it."},

  {t:"Pathology, Contraindications & Special Populations", d:"The highest-stakes domain on the exam", len:"36 min",
   script:"Pathology, contraindications, areas of caution, and special populations is fourteen percent, and it is the highest-stakes material on the exam, because this is where a therapist actually hurts someone. Learn the distinction cold. An absolute contraindication means no massage at all today. Fever, an acute systemic infection, a suspected deep vein thrombosis. A local, or site specific, contraindication means work everywhere except that one area. An open wound, a fresh burn, a recent surgical incision. An area of caution means proceed, but lighten the pressure and know what lies underneath. The outline also lists classes of medications, and that matters in practice. A client on blood thinners bruises easily. A client on strong painkillers cannot give you accurate feedback about pressure."},

  {t:"Benefits & Effects of Soft Tissue Manipulation", d:"Mechanism, strokes, sequence, hot and cold", len:"30 min",
   script:"Benefits and effects of soft tissue manipulation is fifteen percent. This domain wants mechanism, not marketing. Know the physiological effects: increased local circulation, reduced muscle tone, activation of the parasympathetic nervous system, changes in connective tissue pliability. Know the psychological effects too, because they are examined. Reduced anxiety, improved body awareness, better sleep. Then know the strokes and what each one does. Effleurage is a long gliding stroke that warms tissue and lets you assess it. Petrissage lifts and kneads. Friction works across the fiber. Tapotement is rhythmic percussion. Vibration is oscillation. Learn the usual sequence of application, and learn when heat is indicated and when cold is."},

  {t:"Client Assessment & Treatment Planning", d:"Intake, visual assessment, palpation, clinical reasoning", len:"34 min",
   script:"Client assessment, reassessment, and treatment planning is seventeen percent. That is the largest single domain on the exam, and it follows the order of a real session. You take a verbal intake and a written health history. You do a visual assessment: general appearance, posture, and gait. You palpate. You test range of motion. Then comes clinical reasoning, which is what the exam is really measuring. Can you rule out a contraindication? Can you set a treatment goal with the client rather than for them? Can you evaluate how they responded to the last session and adjust? When a question describes a client and asks what you do next, it is testing this domain."},

  {t:"Ethics, Boundaries, Draping & Scope of Practice", d:"Where candidates lose the most marks", len:"33 min",
   script:"Ethics, boundaries, laws, and regulations is sixteen percent, and it is where candidates lose the most marks. The exam tests the therapeutic relationship and the power imbalance inside it. You hold more information and the client is undressed, so the duty to hold the boundary is always yours, never theirs. Dual relationships, meaning treating a friend, an employee, or a partner, are examined as risks you either manage or decline. Sexual misconduct is a separate listed topic and it is the fastest route to losing a license anywhere in the country. Consent is ongoing, not a signature at the start. And draping is not modesty theater. Only the region being worked is uncovered, the client is re-draped before you move on, and you never uncover an area simply to look at it."},

  {t:"Guidelines for Professional Practice", d:"Hygiene, sanitation, safety, body mechanics, self-care", len:"26 min",
   script:"Guidelines for professional practice is fifteen percent, and it is the easiest fifteen percent to bank. It covers safe use of equipment and supplies, practitioner hygiene, sanitation and cleanliness, and the safety of the facility, the client, and you. Body mechanics live here, and so do self-care and injury prevention, because massage therapy has a real attrition rate from thumb, wrist, and shoulder injury. Draping appears in this domain as well as in the ethics one. Expect straightforward questions. How you launder linens. When you wash your hands. How you stack your body weight over the stroke instead of pushing with your arm."},

  {t:"State Board Law, Hours & Scope of Practice", d:"State-specific — updates automatically per state", len:"24 min", stateSpecific:true,
   script:null},
  ],

  summarySections: [
  {h:"The MBLEx Itself", items:["100 questions, 110 minutes, fixed-length computer-adaptive test", "Reported PASS or FAIL — no numeric score is published", "$265 application fee, delivered at Pearson VUE centers", "Owned by the Federation of State Massage Therapy Boards, not by any state"]},
  {h:"The Seven Content Domains", items:["Client assessment & treatment planning — 17% (largest)", "Ethics, boundaries, laws & regulations — 16%", "Benefits & effects of soft tissue manipulation — 15%", "Guidelines for professional practice — 15%", "Pathology & contraindications — 14%", "Kinesiology — 12%; Anatomy & physiology — 11%"]},
  {h:"Contraindications — Get This Right", items:["Absolute: no massage at all (fever, systemic infection, suspected DVT)", "Local / site-specific: work everywhere but that area", "Area of caution: proceed with reduced pressure", "Classes of medication are examined — blood thinners, analgesics"]},
  {h:"Ethics & Scope", items:["Draping: only the worked region uncovered, re-drape before moving on", "Consent is ongoing, not a one-time signature", "Dual relationships must be managed or declined", "No diagnosing, no prescribing, no joint manipulation"]},
  {h:"State Board Module", items:["Required training hours: 500 to 1,000 depending on the state", "MBLEx accepted in 45 of 48 regulated jurisdictions", "Some states add a jurisprudence or state law exam", "Renewal cycles run 1 to 4 years; CE runs 0 to 36 hours", "Kansas, Minnesota and Wyoming have no statewide license at all"]},
  ],

  quiz: [
  {q:"The MBLEx is owned and administered by:",
   opts:["Each individual state massage board", "The Federation of State Massage Therapy Boards (FSMTB)", "The National Certification Board for Therapeutic Massage & Bodywork", "The American Massage Therapy Association"], a:1,
   explanation:"FSMTB owns the MBLEx. Pearson VUE is contracted to deliver, score and report it, but the exam and its passing standard belong to FSMTB. NCBTMB runs a separate board-certification exam that is not the same credential."},

  {q:"How are MBLEx results reported to the candidate?",
   opts:["A raw percentage out of 100", "A scaled score from 300 to 900, with 630 to pass", "PASS or FAIL only — no numeric score is given", "A percentile rank against other candidates"], a:2,
   explanation:"The current FSMTB candidate handbook states results are reported as PASS or FAIL. Failing candidates receive a diagnostic report by content area, not a score. The 300–900 scaled figure is legacy and FSMTB no longer publishes a numeric passing score — the standard is criterion-referenced, set by subject-matter experts."},

  {q:"The MBLEx format is:",
   opts:["150 questions in 180 minutes, fixed form", "100 questions in 110 minutes, fixed-length computer-adaptive", "200 questions in 240 minutes, split into two sittings", "Untimed and open book"], a:1,
   explanation:"100 multiple-choice questions in 110 minutes, inside a two-hour appointment that also covers the security agreement and a survey. It is a fixed-length CAT: every candidate answers 100 items, but item difficulty adapts. You must answer all 100 in time or you fail automatically."},

  {q:"Which MBLEx content domain carries the largest weighting?",
   opts:["Anatomy & Physiology", "Ethics, Boundaries, Laws & Regulations", "Client Assessment, Reassessment & Treatment Planning", "Kinesiology"], a:2,
   explanation:"Client assessment and treatment planning is 17%. Ethics is second at 16%. Anatomy and physiology is only 11% — candidates routinely over-study it and under-study assessment and ethics, which together are a third of the exam."},

  {q:"A client reports calf pain, swelling, warmth and redness in one leg that began two days ago. The correct action is:",
   opts:["Massage the calf gently using effleurage only", "Massage everywhere except the affected calf", "Do not massage; refer the client for medical evaluation", "Apply ice, then use cross-fibre friction on the calf"], a:2,
   explanation:"That is a textbook presentation of deep vein thrombosis. A DVT is an absolute, not a local, contraindication: massage anywhere on the body can raise circulation and a dislodged clot can be fatal. Refer out — do not treat and do not 'work around it'."},

  {q:"The Golgi tendon organ:",
   opts:["Detects the rate and degree of muscle stretch", "Detects tension in the tendon and inhibits the contraction", "Secretes synovial fluid into the joint capsule", "Carries pain signals from the periphery to the spinal cord"], a:1,
   explanation:"The muscle spindle detects stretch and triggers a protective contraction. The Golgi tendon organ sits at the musculotendinous junction, detects tension, and inhibits the muscle — which is why a sustained stretch eventually releases rather than fighting you."},

  {q:"Effleurage is best described as:",
   opts:["Rhythmic percussive tapping", "A long, gliding stroke", "Lifting and kneading of tissue", "Cross-fibre friction over a tendon"], a:1,
   explanation:"Effleurage is the long gliding stroke used to spread lubricant, warm the tissue and assess what you are about to work on. Tapotement is percussion, petrissage is kneading, friction works across the fibre."},

  {q:"A client asks whether their shoulder pain is a rotator cuff tear. The in-scope response is to:",
   opts:["Give your assessment of which tendon is torn", "Reassure them it is a strain rather than a tear", "Describe what you feel in the tissue and refer them to a physician for diagnosis", "Decline to discuss the shoulder at all"], a:2,
   explanation:"Naming a pathology is diagnosis, which is outside a massage therapist's scope of practice in every jurisdiction. Describing your palpation findings in neutral terms and referring for diagnosis is both in scope and useful to the client."},

  {q:"Which statement about draping is correct?",
   opts:["Draping is optional if the client states they do not mind", "Only the region being worked is uncovered, and the client is re-draped before you move on", "The therapist may briefly uncover an area to inspect it visually", "Draping requirements apply only to a client's first session"], a:1,
   explanation:"Draping is a professional and, in most states, a regulatory requirement — the client cannot waive it on the therapist's behalf. Uncover only the region being worked, re-drape it before moving to the next region, and keep gluteal and breast tissue covered."},

  {q:"A dual relationship is:",
   opts:["Treating two clients within a single appointment", "Holding a second role with the client — friend, employer, relative — alongside the therapeutic one", "Practising under two different professional licenses", "Holding licenses in two different states"], a:1,
   explanation:"Dual relationships blur the power differential that makes the therapeutic relationship safe. The MBLEx lists them as an examinable topic under ethics: they must be recognised, managed with explicit boundaries, or declined."},

  {q:"Passive range of motion means:",
   opts:["The client moves the joint unaided", "The therapist moves the joint while the client stays relaxed", "The client moves against the therapist's resistance", "The joint is immobilised and not moved at all"], a:1,
   explanation:"Active ROM is client-generated. Passive ROM is therapist-generated with the client relaxed — it tests the joint and inert tissue rather than the muscle. Resisted ROM has the client contract against your resistance and tests contractile tissue."},

  {q:"Which is TRUE about passing the MBLEx?",
   opts:["It licenses you to practise massage anywhere in the United States", "It supports a license application, but the state board issues the license", "It satisfies all state training-hour requirements automatically", "A passing result is accepted indefinitely by every state"], a:1,
   explanation:"The FSMTB handbook is explicit: passing the MBLEx is not a certification or a license. The state board issues the license and sets its own hours, background check, and often its own jurisprudence exam. Some states also cap how long a passing result stays usable."},

  {q:"Which two states do NOT accept the MBLEx and run their own licensing examination instead?",
   opts:["Texas and Utah", "New York and Hawaii", "Florida and New Jersey", "Oregon and Washington"], a:1,
   explanation:"New York's exam is administered by the NYSED Office of the Professions and offered only twice a year; Hawaii's is administered by PSI for the DCCA Board of Massage Therapy. Florida and New Jersey both accept the MBLEx. California and Vermont require no licensing exam at all."},

  {q:"Which states have no statewide massage therapy license, leaving regulation to cities and counties?",
   opts:["Kansas, Minnesota and Wyoming", "Vermont, Maine and New Hampshire", "Alaska, Hawaii and Idaho", "Nevada, Utah and Arizona"], a:0,
   explanation:"Kansas, Minnesota and Wyoming are absent from the FSMTB regulated-states table. In all three, massage therapists are regulated — if at all — by municipal ordinance, so requirements change from city to city. Vermont does register practitioners statewide, but with no hour or exam requirement."},

  {q:"Texas is unusual because it:",
   opts:["Refuses to accept the MBLEx", "Requires either its own PSI-administered exam, or the MBLEx PLUS a separate Texas jurisprudence exam", "Requires 1,000 training hours", "Has no continuing education requirement"], a:1,
   explanation:"TDLR gives candidates two routes: a Texas state exam through PSI that already covers state jurisprudence, or the MBLEx followed by a standalone Texas Jurisprudence Exam. Texas requires 500 hours — one of the lowest in the country, not the highest."},
  ],

  flashcards: [
  {f:"MBLEx", b:"Massage & Bodywork Licensing Examination. Owned by FSMTB, delivered at Pearson VUE. 100 questions, 110 minutes, fixed-length computer-adaptive, reported PASS/FAIL."},
  {f:"FSMTB", b:"Federation of State Massage Therapy Boards — the membership body of the state massage boards. It owns the MBLEx and sets its passing standard; it does not issue licenses."},
  {f:"Criterion-referenced scoring", b:"The passing standard is a fixed minimum level of competence set by subject-matter experts — not a curve against other candidates and not a raw percentage."},
  {f:"Absolute contraindication", b:"A condition where massage must not be performed at all that day — e.g. fever, acute systemic infection, suspected deep vein thrombosis."},
  {f:"Local (site-specific) contraindication", b:"A condition where the rest of the body may be massaged but one area must be avoided — e.g. open wound, fresh burn, unhealed surgical incision."},
  {f:"Area of caution", b:"A region that may be worked but with reduced pressure and awareness of underlying structures — e.g. anterior neck, popliteal fossa, axilla, femoral triangle."},
  {f:"Effleurage", b:"A long gliding stroke used to spread lubricant, warm the tissue, and assess it at the start and end of a session."},
  {f:"Petrissage", b:"Kneading — lifting, rolling and squeezing tissue to release tension and move fluid."},
  {f:"Tapotement", b:"Rhythmic percussive strokes — hacking, cupping, tapping — that stimulate rather than sedate."},
  {f:"Muscle spindle", b:"A proprioceptor inside the muscle belly that senses the rate and degree of stretch and triggers a protective contraction."},
  {f:"Golgi tendon organ", b:"A proprioceptor at the musculotendinous junction that senses tension and inhibits contraction — why a sustained stretch eventually releases."},
  {f:"Active vs. passive vs. resisted ROM", b:"Active: client moves alone. Passive: therapist moves a relaxed client. Resisted: client contracts against the therapist's resistance."},
  {f:"Draping", b:"Covering the client so only the region being worked is exposed, re-draping before moving on. A regulatory requirement in most states, not a client preference."},
  {f:"Informed consent", b:"Ongoing, revocable agreement to treatment after the client is told what will be done, where, and why — not a one-time signature at intake."},
  {f:"Dual relationship", b:"Holding a second role with a client — friend, employer, relative, romantic partner — alongside the therapeutic one. Must be managed with explicit boundaries or declined."},
  {f:"Scope of practice", b:"What a massage therapist may legally do. Universally excludes diagnosing, prescribing, and joint manipulation; the exact boundary is set by each state's practice act."},
  {f:"Jurisprudence exam", b:"A state law exam some boards require on top of the MBLEx — e.g. Texas, Nebraska, Oregon, Maryland, North Dakota, Utah, New Mexico. Usually short and often open-book."},
  {f:"IMpact (Interstate Massage Compact)", b:"A multistate-license compact stewarded by FSMTB. Enacted by Nevada, Ohio, Arkansas, Virginia and Montana; seven states are needed before the Commission convenes."},
  ],

  stateModule: {
    titleSuffix:    "Massage Law, Hours & Scope of Practice",
    summaryHeading: "State Board Module",
    scriptTemplate: "{STATE} massage therapy law, hours, and scope of practice. This module covers the {STATE} training-hour minimum, which examinations the {STATE} board accepts, any {STATE} jurisprudence or state law exam required on top of the national exam, the renewal cycle and continuing education, and how {STATE} handles applicants already licensed elsewhere. Replace this narration with your verified {STATE} practice-act content before publishing.",
  },

  // The national exam. Every figure below is from the FSMTB MBLEx Candidate Handbook,
  // read directly (PDF, fsmtb.org, 2025 edition, retrieved Aug 2026).
  globalSpec: {
    vendor:    "Federation of State Massage Therapy Boards (FSMTB) — delivered at Pearson VUE test centers",
    questions: "100 multiple-choice questions (fixed-length computer-adaptive test)",
    time:      "110 minutes of testing inside a 2-hour appointment (5 min security agreement + 5 min survey)",
    pass:      "NOT a percentage and NOT a published scaled score — criterion-referenced standard, reported to the candidate as PASS or FAIL only. Failing candidates receive a diagnostic by content area, no number.",
    fee:       "$265 application fee, nonrefundable and nontransferable. A $50 Pearson VUE fee applies to late reschedules; result transfers cost $40.",
    note:      "Content outline weightings (2022 Job Task Analysis): Client Assessment, Reassessment & Treatment Planning 17%; Ethics, Boundaries, Laws & Regulations 16%; Benefits & Effects of Soft Tissue Manipulation 15%; Guidelines for Professional Practice 15%; Pathology, Contraindications, Areas of Caution & Special Populations 14%; Kinesiology 12%; Anatomy & Physiology 11%. If you do not answer all 100 items inside 110 minutes you fail automatically. FSMTB sets no retake limit, but individual state boards may. Passing does NOT license you — the state board issues the license.",
    source:    "FSMTB MBLEx Candidate Handbook (fsmtb.org PDF, 2025 ed.) + fsmtb.org MBLEx Process & Requirements and MBLEx FAQ pages",
    verified:  true,
  },

  // Core figures (training hours, CE hours, renewal period, initial licensing fee, MBLEx
  // acceptance) for the 48 regulated jurisdictions come from the FSMTB Regulated States
  // table on fsmtb.org, parsed directly. That is the boards' own federation publishing
  // their own data — the closest thing to a primary source that exists across all states.
  // Where an individual board site was ALSO read, it is named in `source` and the extra
  // detail (jurisprudence exams, exact fee splits) comes from there.
  stateSpecs: {
  AL: {vendor:"FSMTB / MBLEx, via the Alabama Board of Massage Therapy (almtbd.alabama.gov)", questions:"100 (MBLEx)", time:"110 minutes", pass:"PASS/FAIL — MBLEx reports no numeric score", fee:"MBLEx $265 + $150 Alabama initial licensing fee",
       note:"650 training hours — above the 500-hour floor used by the lowest states. 16 CE hours per 2-year renewal. No separate Alabama jurisprudence exam is published. Alabama accepts the MBLEx; the retired NCBTMB exams are also recognised historically.",
       source:"FSMTB Regulated States table (fsmtb.org) + MBLEx Candidate Handbook", verified:true,
       confidence:"partial — hours, CE, renewal and fee from the FSMTB table; endorsement/reciprocity terms need the Alabama board's own application packet"},

  AK: {vendor:"FSMTB / MBLEx, via the Alaska Board of Massage Therapists (Dept. of Commerce, Community & Economic Development, Div. of Corporations, Business & Professional Licensing)", questions:"100 (MBLEx)", time:"110 minutes", pass:"PASS/FAIL — MBLEx reports no numeric score", fee:"MBLEx $265 + $565 Alaska initial licensing fee",
       note:"625 training hours, 16 CE hours per 2-year renewal. WATCH THE FEE: Alaska's $565 initial licensing fee is the HIGHEST of any US jurisdiction — nearly four times the national median. Budget roughly $830 before a single client.",
       source:"FSMTB Regulated States table (fsmtb.org) + MBLEx Candidate Handbook", verified:true,
       confidence:"partial — fee and hours from the FSMTB table; the Alaska board's fee schedule should be re-checked at application time"},

  AZ: {vendor:"FSMTB / MBLEx, via the Arizona State Board of Massage Therapy (massagetherapy.az.gov)", questions:"100 (MBLEx)", time:"110 minutes", pass:"PASS/FAIL — MBLEx reports no numeric score", fee:"MBLEx $265 + $195 Arizona initial licensing fee",
       note:"700 training hours — one of the heaviest requirements in the country and 200 hours above the 500-hour states. 24 CE hours per 2-year renewal. Arizona is one of the few states with a standalone massage board rather than a division inside a health or licensing department.",
       source:"FSMTB Regulated States table (fsmtb.org) + MBLEx Candidate Handbook", verified:true,
       confidence:"partial — hours, CE, renewal and fee from the FSMTB table; jurisprudence requirement not confirmed either way"},

  AR: {vendor:"FSMTB / MBLEx PLUS the Arkansas State Law examination, via the Arkansas Dept. of Health, Massage Therapy Section", questions:"100 (MBLEx) + separate Arkansas State Law exam", time:"110 minutes (MBLEx); state law exam separately timed", pass:"MBLEx PASS/FAIL; Arkansas State Law exam scored separately", fee:"MBLEx $265 + $180 Arkansas initial licensing fee",
       note:"QUIRK: the Arkansas State Law examination is administered IN PERSON by the Department itself — 'every Tuesday at 1 p.m., at the Department, 4815 West Markham, Little Rock.' There is no remote option and no other testing site, so out-of-region candidates must travel. 500 training hours, 18 CE hours per 2-year renewal. Arkansas has enacted the Interstate Massage Compact (IMpact).",
       source:"Arkansas Dept. of Health massage therapy pages (healthy.arkansas.gov — Massage Schools & Examinations) + FSMTB Regulated States table", verified:true},

  CA: {vendor:"NO STATE LICENSE AND NO EXAM — voluntary certification by the California Massage Therapy Council (CAMTC)", questions:"none — California requires no licensing examination", time:"n/a", pass:"n/a — there is no exam to pass", fee:"$300 CAMTC certification fee (no MBLEx fee, since no exam is required)",
       note:"MAJOR OUTLIER: California does not license massage therapists and does not accept — or require — the MBLEx. CAMTC issues a VOLUNTARY statewide certification requiring 500 hours at a CAMTC-approved school (of which at least 100 hours must cover anatomy & physiology, contraindications, health & hygiene, and business & ethics), a Live Scan background check, and the $300 fee. It is voluntary in statute but effectively mandatory in practice, because many California cities will only permit practitioners who hold it and CAMTC certification pre-empts most local permit schemes. Without it, you fall under whatever the city ordinance says.",
       source:"camtc.org (Requirements to Certify) + FSMTB Regulated States table, which lists California as 'Voluntary Certification / No Exam Required'", verified:true},

  CO: {vendor:"FSMTB / MBLEx, via the Colorado Office of Massage Therapy Licensure, Division of Professions & Occupations (DORA)", questions:"100 (MBLEx)", time:"110 minutes", pass:"PASS/FAIL — MBLEx reports no numeric score", fee:"MBLEx $265 + $200 Colorado initial licensing fee",
       note:"650 training hours. QUIRK: Colorado requires NO continuing education at all for renewal — one of only a handful of states (with Idaho, Maine, Massachusetts, Ohio and Utah) at zero. That is a genuine cost saving over a career, and a genuine risk if you later move to a state that wants a CE history.",
       source:"FSMTB Regulated States table (fsmtb.org) + MBLEx Candidate Handbook", verified:true,
       confidence:"partial — hours, zero-CE and fee from the FSMTB table; DORA's own rule cite not pulled"},

  CT: {vendor:"FSMTB / MBLEx, via the Connecticut Dept. of Public Health, Practitioner Licensing", questions:"100 (MBLEx)", time:"110 minutes", pass:"PASS/FAIL — MBLEx reports no numeric score", fee:"MBLEx $265 + $375 Connecticut initial licensing fee",
       note:"750 training hours — among the highest outside New York and Nebraska. QUIRK: Connecticut runs a FOUR-YEAR renewal cycle, the longest of any jurisdiction (24 CE hours across those four years). Most states renew every two. Connecticut licenses through the Department of Public Health rather than a dedicated massage board.",
       source:"FSMTB Regulated States table (fsmtb.org) + MBLEx Candidate Handbook", verified:true,
       confidence:"partial — the 4-year cycle and 750 hours come from the FSMTB table; confirm the CE split with CT DPH before relying on it"},

  DE: {vendor:"FSMTB / MBLEx, via the Delaware Board of Massage & Bodyworks (Division of Professional Regulation)", questions:"100 (MBLEx)", time:"110 minutes", pass:"PASS/FAIL — MBLEx reports no numeric score", fee:"MBLEx $265 + $175 Delaware initial licensing fee",
       note:"625 hours for the full Licensed Massage Therapist credential, 24 CE hours per 2-year renewal. QUIRK: Delaware runs a two-tier system — a lower-hour 'Certified Massage Technician' credential sits below the LMT. Check which one your employer or insurer actually requires before enrolling in a 300-hour programme.",
       source:"FSMTB Regulated States table (fsmtb.org) + MBLEx Candidate Handbook", verified:true,
       confidence:"partial — LMT hours and fee from the FSMTB table; the technician-tier hour count needs the Delaware board's own rules"},

  DC: {vendor:"FSMTB / MBLEx, via the District of Columbia Board of Massage Therapy (DC Health)", questions:"100 (MBLEx)", time:"110 minutes", pass:"PASS/FAIL — MBLEx reports no numeric score", fee:"MBLEx $265 + $262 District initial licensing fee",
       note:"500 training hours, 14 CE hours per 2-year renewal. DC's 14-hour CE requirement is unusually specific — most states land on 12, 16 or 24. The District licenses through DC Health's Board of Massage Therapy, one of the health-occupation boards.",
       source:"FSMTB Regulated States table (fsmtb.org) + MBLEx Candidate Handbook", verified:true,
       confidence:"partial — hours, CE and fee from the FSMTB table; DC Health's own application packet not pulled"},

  FL: {vendor:"FSMTB / MBLEx, via the Florida Board of Massage Therapy (floridasmassagetherapy.gov)", questions:"100 (MBLEx)", time:"110 minutes", pass:"PASS/FAIL — MBLEx reports no numeric score", fee:"MBLEx $265 + $155 Florida initial licensing fee",
       note:"CORRECTION to widely-repeated material: Florida DOES accept the MBLEx, and has for years. What Florida adds is not a proctored jurisprudence exam but three mandatory COURSES: a 10-hour Florida Laws and Rules course, a 2-hour prevention of medical errors course, and a 3-hour HIV/AIDS course. 500 training hours at a board-approved school — one of the lowest minimums nationally. 24 CE hours per 2-year renewal, which must themselves include Florida law, HIV/AIDS and medical errors content. Transcripts must come directly from the school; unofficial copies are rejected.",
       source:"Florida Board of Massage Therapy — Requirements for Examination Applicants (floridasmassagetherapy.gov) + FSMTB Regulated States table", verified:true},

  GA: {vendor:"FSMTB / MBLEx, via the Georgia Board of Massage Therapy (Office of the Secretary of State)", questions:"100 (MBLEx)", time:"110 minutes", pass:"PASS/FAIL — MBLEx reports no numeric score", fee:"MBLEx $265 + $125 Georgia initial licensing fee",
       note:"500 training hours, 24 CE hours per 2-year renewal. Georgia's $125 initial fee is among the lowest in the South. The board sits under the Secretary of State's professional licensing division rather than a health department, which matters mainly for where you file and who you call.",
       source:"FSMTB Regulated States table (fsmtb.org) + MBLEx Candidate Handbook", verified:true,
       confidence:"partial — hours, CE and fee from the FSMTB table; Georgia board rules not pulled directly"},

  HI: {vendor:"STATE EXAM ONLY — the Hawaii massage therapy examination, administered by PSI Services LLC for the Hawaii Board of Massage Therapy (DCCA Professional & Vocational Licensing). The MBLEx is NOT accepted.", questions:"Hawaii state examination — question count not published by the board", time:"not published by the board (see the PSI Hawaii candidate bulletin)", pass:"set by the Hawaii board — not published on the board's public pages", fee:"$214 Hawaii initial licensing fee + PSI exam fee (not published on the board site). No MBLEx fee — the MBLEx is not accepted.",
       note:"OUTLIER — one of only two states that reject the MBLEx outright. Hawaii requires 570 training hours, including at least 50 hours of physiology, anatomy and structural kinesiology and 100 hours of theory and demonstration. Registration is through the PSI candidate portal at test-takers.psiexams.com/hitrade. QUIRK: under Hawaii Administrative Rules §16-84-27(d) the application must be filed FORTY-FIVE DAYS before the exam date, counting weekends and holidays — and the board has publicly warned that processing is currently running 45–60 business days rather than the usual 15–20. Plan months ahead. Licences renew by June 30 of even-numbered years ($164 renewal, active status); 12 CE hours per cycle.",
       source:"Hawaii DCCA Professional & Vocational Licensing — Board of Massage Therapy and its Application Deadline & Examination Dates page (cca.hawaii.gov) + FSMTB Regulated States table (lists Hawaii as 'State Exam')", verified:true},

  ID: {vendor:"FSMTB / MBLEx, via the Idaho Board of Massage Therapy (Division of Occupational & Professional Licenses)", questions:"100 (MBLEx)", time:"110 minutes", pass:"PASS/FAIL — MBLEx reports no numeric score", fee:"MBLEx $265 + $180 Idaho initial licensing fee",
       note:"500 training hours — at the national floor. NO continuing education is required for renewal, one of only about six jurisdictions at zero. 2-year renewal cycle.",
       source:"FSMTB Regulated States table (fsmtb.org) + MBLEx Candidate Handbook", verified:true,
       confidence:"partial — hours, zero-CE and fee from the FSMTB table; Idaho DOPL rules not pulled directly"},

  IL: {vendor:"FSMTB / MBLEx, via the Illinois Dept. of Financial & Professional Regulation (IDFPR)", questions:"100 (MBLEx)", time:"110 minutes", pass:"PASS/FAIL — MBLEx reports no numeric score", fee:"MBLEx $265 + $175 Illinois initial licensing fee",
       note:"600 training hours. CE CHANGED: Illinois added one hour of domestic violence and sexual assault training, taking the requirement from 24 to 25 hours per 2-year cycle, effective with the 2026 renewal. Applications and renewals now run through IDFPR's CORE system, which replaced the legacy portal on 30 October 2024 — older guides pointing at the old system will send you to the wrong place.",
       source:"IDFPR Massage Therapy licensure page (idfpr.illinois.gov) + FSMTB Regulated States table", verified:true},

  IN: {vendor:"FSMTB / MBLEx, via the Indiana State Board of Massage Therapy (Professional Licensing Agency)", questions:"100 (MBLEx)", time:"110 minutes", pass:"PASS/FAIL — MBLEx reports no numeric score", fee:"MBLEx $265 + $100 Indiana initial licensing fee",
       note:"625 training hours, 24 CE hours. QUIRK: Indiana renews every FOUR years — with Connecticut, the longest cycle in the country. The $100 initial fee spread over four years makes Indiana one of the cheapest states to hold a licence in, but four years is a long time to keep CE certificates safe.",
       source:"FSMTB Regulated States table (fsmtb.org) + MBLEx Candidate Handbook", verified:true,
       confidence:"partial — 4-year cycle, hours and fee from the FSMTB table; Indiana PLA rules not pulled directly"},

  IA: {vendor:"FSMTB / MBLEx, via the Iowa Board of Massage Therapy (Dept. of Inspections, Appeals & Licensing)", questions:"100 (MBLEx)", time:"110 minutes", pass:"PASS/FAIL — MBLEx reports no numeric score", fee:"MBLEx $265 + $120 Iowa initial licensing fee",
       note:"600 training hours, 16 CE hours per 2-year renewal. Iowa's massage board moved under the Department of Inspections, Appeals and Licensing (DIAL) in the state's licensing-agency consolidation — older sources naming the Iowa Department of Public Health are stale.",
       source:"FSMTB Regulated States table (fsmtb.org) + MBLEx Candidate Handbook", verified:true,
       confidence:"partial — hours, CE and fee from the FSMTB table; DIAL board rules not pulled directly"},

  KS: {vendor:"NO STATEWIDE LICENSE — massage therapy is not a regulated profession in Kansas. There is no state board, no state exam and no state license.", questions:"n/a — no state exam exists", time:"n/a", pass:"n/a", fee:"no state fee. City permit fees vary.",
       note:"MAJOR OUTLIER: Kansas is absent from the FSMTB regulated-states table entirely. Regulation, where it exists, is MUNICIPAL — cities and counties set their own ordinances, and they do not agree with each other. Lenexa requires at least 500 hours at an approved school; Olathe, Mission and Junction City each run their own permit schemes. Practically: find out which city you will work in BEFORE you enrol anywhere, and sit the MBLEx anyway, because it is the credential every other state will want and Kansas licensure bills have been introduced repeatedly (SB 305, and SB 253 introduced 7 February 2025) without passing.",
       source:"Absence from the FSMTB Regulated States table (fsmtb.org), which notes 'Local (county or municipal) ordinances may apply for states that do not regulate massage therapy'; municipal detail from Olathe/Mission/Lenexa municipal codes and ABMP legislative updates", verified:false,
       confidence:"partial — the no-statewide-license fact is confirmed by FSMTB's own table; the city-by-city detail and the current status of SB 253 are from secondary sources and change quickly"},

  KY: {vendor:"FSMTB / MBLEx, via the Kentucky Board of Licensure for Massage Therapy (bmt.ky.gov)", questions:"100 (MBLEx)", time:"110 minutes", pass:"PASS/FAIL — MBLEx reports no numeric score", fee:"MBLEx $265 + $200 Kentucky initial licensing fee",
       note:"600 training hours, 12 CE hours per 2-year renewal — one of the lighter CE loads. Kentucky has a dedicated massage board rather than a division inside a larger agency.",
       source:"FSMTB Regulated States table (fsmtb.org) + MBLEx Candidate Handbook", verified:true,
       confidence:"partial — hours, CE and fee from the FSMTB table; Kentucky board regulations not pulled directly"},

  LA: {vendor:"FSMTB / MBLEx, via the Louisiana Board of Massage Therapy (labmt.org)", questions:"100 (MBLEx)", time:"110 minutes", pass:"PASS/FAIL — MBLEx reports no numeric score", fee:"MBLEx $265 + $250 Louisiana initial licensing fee",
       note:"625 training hours. QUIRK: Louisiana renews ANNUALLY, with 12 CE hours every single year — one of only four annual-renewal jurisdictions (with Maine, Massachusetts and South Dakota). Over a ten-year career that is ten renewals and 120 CE hours, against five renewals in a typical biennial state.",
       source:"FSMTB Regulated States table (fsmtb.org) + MBLEx Candidate Handbook", verified:true,
       confidence:"partial — annual cycle, hours and fee from the FSMTB table; LABMT rules not pulled directly"},

  ME: {vendor:"FSMTB / MBLEx, via the Maine Office of Professional & Occupational Regulation (Dept. of Professional & Financial Regulation)", questions:"100 (MBLEx)", time:"110 minutes", pass:"PASS/FAIL — MBLEx reports no numeric score", fee:"MBLEx $265 + $40 Maine initial licensing fee",
       note:"500 training hours and NO continuing education requirement — but an ANNUAL renewal. Maine's $40 initial fee is the LOWEST of any US jurisdiction, roughly a fourteenth of Alaska's. Maine regulates through OPOR rather than a standalone massage board.",
       source:"FSMTB Regulated States table (fsmtb.org) + MBLEx Candidate Handbook", verified:true,
       confidence:"partial — the $40 fee, annual cycle and zero-CE come from the FSMTB table; confirm the renewal fee separately, as it differs from the initial fee in most states"},

  MD: {vendor:"FSMTB / MBLEx PLUS the Maryland Jurisprudence (JP) Examination, via the Maryland Board of Massage Therapy Examiners (Maryland Dept. of Health)", questions:"100 (MBLEx) + a separate online Maryland jurisprudence exam", time:"110 minutes (MBLEx); jurisprudence exam is online and separately timed", pass:"MBLEx PASS/FAIL; Maryland jurisprudence exam requires 75% OR BETTER", fee:"MBLEx $265 + $350 Maryland initial licensing fee. Jurisprudence retakes cost $250 after two failures.",
       note:"750 training hours for the Licensed Massage Therapist credential — among the highest in the country. The Maryland Jurisprudence Exam is taken online, covers Maryland massage law and COMAR regulations, and is scored at a hard 75% threshold, notably higher than the 70% most states use for anything. HARSH RETAKE RULE: after two unsuccessful attempts the retake fee jumps to $250 and a mandatory 30-day wait applies from the date of the last failure. 24 CE hours per 2-year renewal. Maryland also runs a lower 'registered massage practitioner' tier alongside the LMT.",
       source:"Maryland Board of Massage Therapy Examiners — Examinations page (health.maryland.gov/massage) + FSMTB Regulated States table", verified:true},

  MA: {vendor:"FSMTB / MBLEx, via the Massachusetts Board of Registration of Massage Therapy (Division of Occupational Licensure)", questions:"100 (MBLEx)", time:"110 minutes", pass:"PASS/FAIL — MBLEx reports no numeric score", fee:"MBLEx $265 + $225 Massachusetts initial licensing fee",
       note:"650 training hours and NO continuing education requirement. CONFLICT WORTH RESOLVING: the FSMTB table lists Massachusetts on a ONE-YEAR renewal cycle, while several prep aggregators describe a two-year cycle. Confirm with the Board of Registration before you diary a renewal date — a lapsed licence in Massachusetts means reinstatement, not renewal.",
       source:"FSMTB Regulated States table (fsmtb.org) + MBLEx Candidate Handbook", verified:true,
       confidence:"partial — renewal cycle is disputed between FSMTB and secondary sources; hours, zero-CE and fee are from the FSMTB table"},

  MI: {vendor:"FSMTB / MBLEx, via the Michigan Board of Massage Therapy (Dept. of Licensing & Regulatory Affairs — LARA)", questions:"100 (MBLEx)", time:"110 minutes", pass:"PASS/FAIL — MBLEx reports no numeric score", fee:"MBLEx $265 + $270.10 Michigan initial licensing fee",
       note:"625 training hours, 18 CE hours per renewal. QUIRK: Michigan renews every THREE years — an unusual cycle shared with almost no other state (New York also uses three). The $270.10 fee is quoted to the cent by the board, which is a good sign the FSMTB figure is current rather than rounded.",
       source:"FSMTB Regulated States table (fsmtb.org) + MBLEx Candidate Handbook", verified:true,
       confidence:"partial — 3-year cycle, hours and fee from the FSMTB table; LARA rules not pulled directly"},

  MN: {vendor:"NO STATEWIDE LICENSE — Minnesota does not license or certify massage therapists at state level. There is no state board and no state exam.", questions:"n/a — no state exam exists", time:"n/a", pass:"n/a", fee:"no state fee. Municipal licence fees vary widely by city.",
       note:"MAJOR OUTLIER: Minnesota is absent from the FSMTB regulated-states table. Regulation is entirely MUNICIPAL — the state has been described in legislative testimony as having more than 100 separate local ordinances, so a therapist working across the Twin Cities metro may need several city licences at once. Statewide licensure has been attempted repeatedly; House File 362 (2026 session) was rejected 10–11 by the House Health Finance and Policy Committee on 23 February 2026 and was still moving. Sit the MBLEx regardless: it is what every neighbouring state requires and what any future Minnesota licence would almost certainly grandfather against.",
       source:"Absence from the FSMTB Regulated States table (fsmtb.org); mn.gov e-licensing 'the state does not license massage therapy'; legislative status from ABMP and AMTA legislative updates", verified:false,
       confidence:"partial — the no-statewide-license fact is solid; HF 362's current status is from secondary reporting and is actively changing"},

  MS: {vendor:"Mississippi State Board of Massage Therapy — MBLEx accepted, but Mississippi ALSO runs its own Mississippi State Law Exam (MSLE) and its own MPE professional examination", questions:"100 (MBLEx); MSLE separately; MPE split into MPE-1 and MPE-2", time:"110 minutes (MBLEx); MSLE and MPE separately scheduled", pass:"MBLEx PASS/FAIL; MSLE and MPE scored by the Mississippi board", fee:"MBLEx $265 + $250 Mississippi initial licensing fee (MSLE/MPE fees set by the board)",
       note:"BIGGEST STATE-EXAM OUTLIER after New York and Hawaii: Mississippi is the only MBLEx-accepting state that still administers a full professional examination of its own. The MPE runs in two parts — MPE-1 covers anatomy/physiology, pathology and kinesiology; MPE-2 covers allied modalities plus theory and practicum. Separately, every applicant sits the Mississippi State Law Exam (MSLE), which the board schedules on published dates and publishes a study guide for. 600 training hours; ANNUAL renewal with 12 CE hours. Mississippi also publishes a Universal Recognition of Occupational Licenses affidavit, its route for licensees moving in from other states.",
       source:"Mississippi State Board of Massage Therapy — Exams and Licensure pages (msbmt.ms.gov) + FSMTB Regulated States table", verified:true,
       confidence:"partial — the MSLE and MPE-1/MPE-2 structure is confirmed on the board's own site; whether the MPE is an ALTERNATIVE to the MBLEx or an ADDITION for some applicant classes needs a call to the board"},

  MO: {vendor:"FSMTB / MBLEx, via the Missouri Board of Therapeutic Massage (Division of Professional Registration)", questions:"100 (MBLEx)", time:"110 minutes", pass:"PASS/FAIL — MBLEx reports no numeric score", fee:"MBLEx $265 + $125 Missouri initial licensing fee",
       note:"625 training hours, 12 CE hours per 2-year renewal. Missouri also historically accepted the retired NCETMB. The board sits inside the Division of Professional Registration rather than operating standalone.",
       source:"FSMTB Regulated States table (fsmtb.org) + MBLEx Candidate Handbook", verified:true,
       confidence:"partial — hours, CE and fee from the FSMTB table; Missouri board rules not pulled directly"},

  MT: {vendor:"FSMTB / MBLEx, via the Montana Board of Massage Therapy (Dept. of Labor & Industry, Business Standards Division)", questions:"100 (MBLEx)", time:"110 minutes", pass:"PASS/FAIL — MBLEx reports no numeric score", fee:"MBLEx $265 + $140 Montana initial licensing fee",
       note:"500 training hours — at the national floor — with 12 CE hours per 2-year renewal. NOTABLE: Montana became the FIFTH state to enact the Interstate Massage Compact (IMpact), on 16 April 2025, joining Nevada, Ohio, Arkansas and Virginia. Seven states are needed before the IMpact Commission convenes and multistate licences can actually be issued, so as of August 2026 the compact confers no practical portability yet.",
       source:"FSMTB Regulated States table (fsmtb.org) + massagecompact.org (IMpact enactment status)", verified:true,
       confidence:"partial — hours, CE and fee from the FSMTB table; DLI board rules not pulled directly"},

  NE: {vendor:"FSMTB / MBLEx PLUS a Nebraska Jurisprudence Examination, via the Nebraska Dept. of Health & Human Services, Division of Public Health, Licensure Unit", questions:"100 (MBLEx) + 50 multiple-choice Nebraska jurisprudence questions", time:"110 minutes (MBLEx); jurisprudence exam is open-book and taken separately", pass:"MBLEx PASS/FAIL; jurisprudence exam scored by DHHS", fee:"MBLEx $265 + $110 Nebraska initial licensing fee. The jurisprudence exam is FREE.",
       note:"HIGHEST TRAINING REQUIREMENT IN THE COUNTRY, tied with New York: Nebraska requires 1,000 hours. That is double the 500-hour states and is the single biggest planning decision for anyone choosing where to train. The Nebraska jurisprudence exam is 50 multiple-choice questions, free, and open-book — a formality compared with Maryland's 75% closed threshold. Licences expire on 1 November of ODD-numbered years, and 16 CE hours are required to renew, of which up to half may be online or electronic media. DHHS does not pre-approve CE programmes; the licensee carries the risk that a course counts.",
       source:"Nebraska DHHS Licensure Unit — Massage Therapy page (dhhs.ne.gov) + FSMTB Regulated States table", verified:true},

  NV: {vendor:"FSMTB / MBLEx, via the Nevada State Board of Massage Therapy (massagetherapy.nv.gov)", questions:"100 (MBLEx)", time:"110 minutes", pass:"PASS/FAIL — MBLEx reports no numeric score", fee:"MBLEx $265 + $480 Nevada initial licensing fee",
       note:"625 training hours, 24 CE hours per 2-year renewal. WATCH THE FEE: Nevada's $480 initial licensing fee is the second highest in the country after Alaska — roughly $745 all-in with the MBLEx. Nevada was the FIRST state to enact the Interstate Massage Compact (2023). Nevada's board also licenses reflexologists and structural integration practitioners separately, so confirm you are applying for the right credential.",
       source:"FSMTB Regulated States table (fsmtb.org) + massagecompact.org (IMpact enactment status)", verified:true,
       confidence:"partial — hours, CE and fee from the FSMTB table; Nevada board rules not pulled directly"},

  NH: {vendor:"FSMTB / MBLEx, via the New Hampshire Office of Professional Licensure & Certification (OPLC)", questions:"100 (MBLEx)", time:"110 minutes", pass:"PASS/FAIL — MBLEx reports no numeric score", fee:"MBLEx $265 + $121 New Hampshire initial licensing fee",
       note:"750 training hours — high, matching Connecticut and Maryland — but only 12 CE hours per 2-year renewal and a modest $121 fee. New Hampshire consolidated its individual professional boards into the OPLC, so applications go through one central office rather than a standalone massage board.",
       source:"FSMTB Regulated States table (fsmtb.org) + MBLEx Candidate Handbook", verified:true,
       confidence:"partial — hours, CE and fee from the FSMTB table; OPLC rules not pulled directly"},

  NJ: {vendor:"FSMTB / MBLEx, via the New Jersey State Board of Massage and Bodywork Therapy (Division of Consumer Affairs)", questions:"100 (MBLEx)", time:"110 minutes", pass:"PASS/FAIL — MBLEx reports no numeric score", fee:"MBLEx $265 + $195 New Jersey initial licensing fee (the board prorates: roughly $120 if you qualify in the first year of the biennial cycle, about half that in the second)",
       note:"CORRECTION to widely-repeated material: New Jersey DOES accept the MBLEx and does not run a separate state licensing exam. 600 training hours of supervised classroom and clinical instruction from an accredited school. 20 CE hours per biennial cycle, which ends on 30 November of every even-numbered year. QUIRK: because the fee is prorated against a fixed biennial calendar, the same licence costs a new applicant a different amount depending on when in the two-year window they qualify.",
       source:"NJ Division of Consumer Affairs — Board of Massage and Bodywork Therapy FAQ and application guidance (njconsumeraffairs.gov) + FSMTB Regulated States table", verified:true,
       confidence:"partial — MBLEx acceptance, CE and the biennial cycle are confirmed; the exact prorated fee tiers should be read off the current NJ fee schedule"},

  NM: {vendor:"FSMTB / MBLEx (or the retired NCETM/NCETMB) PLUS the New Mexico Jurisprudence Examination, via the New Mexico Massage Therapy Board (Regulation & Licensing Dept.)", questions:"100 (MBLEx) + a separate New Mexico jurisprudence exam", time:"110 minutes (MBLEx); jurisprudence exam separately", pass:"MBLEx PASS/FAIL; New Mexico jurisprudence exam scored by the board", fee:"MBLEx $265 + $75 New Mexico initial licensing fee plus $5 per month (the board prorates by month)",
       note:"QUIRK: New Mexico's jurisprudence exam is required AT RENEWAL, not at initial licensure — the opposite of most jurisprudence states. 650 training hours, structured tightly by the board: 165 hours of anatomy, physiology, kinesiology and pathology (at least 40 of them pathology), 150 hours of massage training including contraindications with a minimum 100 hands-on hours before clinical practicum, and 75 hours of general instruction covering 20 hours business, 8 hydrotherapy, 30 professional ethics, 4 first aid and 4 CPR/AED. CPR and first aid certificates from online-only courses are NOT accepted. CONFLICT: the board's own page describes licences expiring ANNUALLY on 31 October with a 60-day grace period to 30 December, while the FSMTB table lists a 2-year cycle — resolve with the board before diarising.",
       source:"New Mexico Regulation & Licensing Dept. — Massage Therapy Board, Licensing, Registration and Renewal page (rld.nm.gov) + FSMTB Regulated States table", verified:true},

  NY: {vendor:"STATE EXAM ONLY — the New York State Massage Therapy Examination, administered by the NYS Education Department Office of the Professions. The MBLEx is NOT accepted.", questions:"New York State Massage Therapy Examination — question count not published on the Office of the Professions licensing page", time:"not published on the Office of the Professions licensing page", pass:"set by NYSED — not published on the public licensing page", fee:"$108 covers initial licensure AND the first registration. Limited permit $35, non-refundable. No MBLEx fee — the MBLEx is not accepted.",
       note:"THE BIGGEST OUTLIER IN THIS TRACK, and the spec's claim that New York has 'mostly transitioned to MBLEx-only' is WRONG as of August 2026. New York still runs its own state exam and it is offered only TWICE A YEAR, with deadlines months in advance — the Office of the Professions currently lists 18 September 2026 (deadline 1 July 2026) and 12 March 2027 (deadline 1 December 2026). Miss a deadline and you wait roughly six months. New York also requires 1,000 training hours (tied with Nebraska for the highest), covering anatomy, physiology, neurology, myology or kinesiology, pathology, hygiene, first aid, CPR, infection control, product chemistry, and BOTH oriental and western massage theory and practice — with at least 150 hours of hands-on practice on actual people. Registration runs on a 3-year cycle with 36 CE hours, the heaviest CE load in the country. Massage therapy in New York is regulated as a health profession by the Education Department, not by a health or licensing agency.",
       source:"NYS Education Department Office of the Professions — Massage Therapy License Requirements (op.nysed.gov) + FSMTB Regulated States table (lists New York as 'State Exam')", verified:true},

  NC: {vendor:"FSMTB / MBLEx, via the North Carolina Board of Massage & Bodywork Therapy (bmbt.org)", questions:"100 (MBLEx)", time:"110 minutes", pass:"PASS/FAIL — MBLEx reports no numeric score", fee:"MBLEx $265 + $170 North Carolina initial licensing fee",
       note:"650 training hours, 24 CE hours per 2-year renewal. North Carolina runs an independent board (bmbt.org) rather than a division of a state department, which in practice means faster, more specific answers than a consolidated agency.",
       source:"FSMTB Regulated States table (fsmtb.org) + MBLEx Candidate Handbook", verified:true,
       confidence:"partial — hours, CE and fee from the FSMTB table; NCBMBT rules not pulled directly"},

  ND: {vendor:"FSMTB / MBLEx (or the retired NCBTM/NCBTMB) PLUS a North Dakota Jurisprudence Examination, via the North Dakota Board of Massage Therapy (ndbmt.org)", questions:"100 (MBLEx) + a North Dakota jurisprudence exam issued after documentation review", time:"110 minutes (MBLEx); jurisprudence exam separately", pass:"MBLEx PASS/FAIL; jurisprudence exam scored by the board", fee:"MBLEx $265 + $150 North Dakota initial or reciprocity licensing fee",
       note:"750 training hours from a nationally or regionally accredited programme, or a programme meeting board standards. QUIRK: the jurisprudence exam is not something you book — the board ISSUES it to you once all your documentation has been received and reviewed. PLAN AHEAD: the board warns that an application 'can take up to 3 months after all paperwork is received' to review and approve. RECIPROCITY: available to therapists licensed elsewhere who have actively practised for at least two of the last three years — an activity test, not just a paper licence. 24 CE hours per 2-year renewal, with renewals split across even- and odd-numbered licence numbers.",
       source:"North Dakota Board of Massage Therapy — Requirements for Licensure (ndbmt.org/lic/licenserequirements.asp) + FSMTB Regulated States table", verified:true},

  OH: {vendor:"FSMTB / MBLEx, via the State Medical Board of Ohio", questions:"100 (MBLEx)", time:"110 minutes", pass:"PASS/FAIL — MBLEx reports no numeric score", fee:"MBLEx $265 + $153.50 Ohio initial licensing fee",
       note:"QUIRK: Ohio licenses massage therapists through the STATE MEDICAL BOARD, alongside physicians — not a massage board and not a cosmetology board. That framing matters: Ohio treats massage therapy as a limited branch of medicine, which affects scope-of-practice language in the statute. 600 training hours and NO continuing education requirement for renewal. Ohio enacted the Interstate Massage Compact in 2024, the second state to do so.",
       source:"FSMTB Regulated States table (fsmtb.org) + massagecompact.org (IMpact enactment status)", verified:true,
       confidence:"partial — hours, zero-CE and fee from the FSMTB table; Medical Board rules not pulled directly"},

  OK: {vendor:"FSMTB / MBLEx, via the Oklahoma State Board of Cosmetology and Barbering", questions:"100 (MBLEx)", time:"110 minutes", pass:"PASS/FAIL — MBLEx reports no numeric score", fee:"MBLEx $265 + $100 Oklahoma initial licensing fee",
       note:"QUIRK: Oklahoma regulates massage therapy through its COSMETOLOGY AND BARBERING board, not a health board or a dedicated massage board — one of very few states to do so, and a sign of how the profession is legally framed there. 500 training hours (the national floor), 10 CE hours per 2-year renewal — one of the lightest CE requirements anywhere.",
       source:"FSMTB Regulated States table (fsmtb.org) + MBLEx Candidate Handbook", verified:true,
       confidence:"partial — hours, CE and fee from the FSMTB table; Oklahoma board rules not pulled directly"},

  OR: {vendor:"FSMTB / MBLEx (or NCBTMB or CESI) PLUS the Oregon Jurisprudence Examination, via the Oregon Board of Massage Therapists (OBMT)", questions:"100 (MBLEx) + a 25-question Oregon jurisprudence exam", time:"110 minutes (MBLEx); jurisprudence exam is open-book and separately taken", pass:"MBLEx PASS/FAIL; Oregon jurisprudence exam scored by OBMT", fee:"MBLEx $265 + Oregon application $135 + fingerprint processing $47.25 + initial licence $135–$270 (the amount depends on your birth month, because it prorates to your first renewal date)",
       note:"625 training hours with a prescribed split: at least 200 hours of health sciences (anatomy, physiology, pathology, kinesiology), at least 300 hours of massage theory and clinical practice, and the remaining 125 in either. The Oregon jurisprudence exam is 25 multiple-choice questions and OPEN BOOK. Oregon also requires CURRENT BLS certification and electronic fingerprinting. QUIRK: your initial licence fee varies with your birth month because Oregon prorates to a birthday-anchored renewal date — two candidates applying the same week can pay $135 and $270. Note also that OBMT accepts CESI, a third national exam most states do not. 25 CE hours per 2-year renewal; the Oregon Pain Management Course is one accepted option.",
       source:"Oregon Board of Massage Therapists — Licensing Information (oregon.gov/obmt/Pages/license.aspx) + FSMTB Regulated States table", verified:true},

  PA: {vendor:"FSMTB / MBLEx, via the Pennsylvania State Board of Massage Therapy (Dept. of State, Bureau of Professional & Occupational Affairs)", questions:"100 (MBLEx)", time:"110 minutes", pass:"PASS/FAIL — MBLEx reports no numeric score", fee:"MBLEx $265 + $100 Pennsylvania initial licensing fee",
       note:"600 training hours, 24 CE hours per 2-year renewal. Pennsylvania's $100 initial fee is among the lowest for a state with a full 600-hour requirement.",
       source:"FSMTB Regulated States table (fsmtb.org) + MBLEx Candidate Handbook", verified:true,
       confidence:"partial — hours, CE and fee from the FSMTB table; PA board regulations not pulled directly"},

  RI: {vendor:"FSMTB / MBLEx, via the Rhode Island Dept. of Health, Board of Licensure for Massage Therapy", questions:"100 (MBLEx)", time:"110 minutes", pass:"PASS/FAIL — MBLEx reports no numeric score", fee:"MBLEx $265 + $65 Rhode Island initial licensing fee",
       note:"HIGHEST HOUR REQUIREMENT OUTSIDE NY AND NEBRASKA: Rhode Island demands 800 training hours — 300 more than the 500-hour states — while charging one of the lowest initial fees in the country at $65. 24 CE hours per 2-year renewal. If you train in a 500-hour Massachusetts or Connecticut programme intending to work in Providence, you will be 200–300 hours short.",
       source:"FSMTB Regulated States table (fsmtb.org) + MBLEx Candidate Handbook", verified:true,
       confidence:"partial — the 800-hour figure and fee are from the FSMTB table; confirm with RI DOH before enrolling anywhere, because it is an unusual number"},

  SC: {vendor:"FSMTB / MBLEx, via the South Carolina Board of Massage/Bodywork Therapy (Dept. of Labor, Licensing & Regulation)", questions:"100 (MBLEx)", time:"110 minutes", pass:"PASS/FAIL — MBLEx reports no numeric score", fee:"MBLEx $265 + $150 South Carolina initial licensing fee",
       note:"650 training hours, 12 CE hours per 2-year renewal. South Carolina sits inside LLR, the same umbrella agency that regulates cosmetology and the building trades.",
       source:"FSMTB Regulated States table (fsmtb.org) + MBLEx Candidate Handbook", verified:true,
       confidence:"partial — hours, CE and fee from the FSMTB table; SC LLR regulations not pulled directly"},

  SD: {vendor:"FSMTB / MBLEx, via the South Dakota Board of Massage Therapy (Dept. of Health)", questions:"100 (MBLEx)", time:"110 minutes", pass:"PASS/FAIL — MBLEx reports no numeric score", fee:"MBLEx $265 + $165 South Dakota initial licensing fee",
       note:"500 training hours — the national floor — and only 8 CE hours, the LIGHTEST continuing education requirement of any regulated jurisdiction. But South Dakota renews ANNUALLY, so those 8 hours come round every year rather than every two.",
       source:"FSMTB Regulated States table (fsmtb.org) + MBLEx Candidate Handbook", verified:true,
       confidence:"partial — hours, the 8-hour CE figure and annual cycle come from the FSMTB table; SD DOH rules not pulled directly"},

  TN: {vendor:"FSMTB / MBLEx, via the Tennessee Board of Massage Licensure (Dept. of Health)", questions:"100 (MBLEx)", time:"110 minutes", pass:"PASS/FAIL — MBLEx reports no numeric score", fee:"MBLEx $265 + $280 Tennessee initial licensing fee",
       note:"650 training hours, 24 CE hours per 2-year renewal. Tennessee's $280 initial fee is on the high side for the South — roughly double Georgia's — so budget about $545 all-in.",
       source:"FSMTB Regulated States table (fsmtb.org) + MBLEx Candidate Handbook", verified:true,
       confidence:"partial — hours, CE and fee from the FSMTB table; TN Board of Massage Licensure rules not pulled directly"},

  TX: {vendor:"Texas Dept. of Licensing & Regulation (TDLR). TWO ROUTES: (a) the Texas state massage examination administered by PSI, which already covers Texas jurisprudence; or (b) the FSMTB MBLEx PLUS a separate Texas Jurisprudence Examination.", questions:"100 (MBLEx) + the Texas Jurisprudence Exam — OR the PSI Texas state exam alone", time:"110 minutes (MBLEx); jurisprudence exam must be completed within 30 days of paying its registration fee", pass:"MBLEx PASS/FAIL; Texas jurisprudence and PSI state exam scored by TDLR/PSI", fee:"MBLEx $265 (or the PSI Texas exam fee) + Texas jurisprudence registration fee + $100 Texas initial licensing fee",
       note:"QUIRK: Texas is the clearest example of a state where the MBLEx is not sufficient on its own. Choosing the PSI Texas exam route folds jurisprudence into the single sitting; choosing the MBLEx route means a second, separate jurisprudence exam covering the state rules and laws of massage practice. HARD DEADLINE: once you pay the jurisprudence registration fee you have THIRTY DAYS to sit it. Only 500 training hours are required — one of the lowest minimums in the country, despite the extra exam. The NCBTMB Board Certification Exam (BCETMB) is explicitly NOT accepted. 12 CE hours per 2-year renewal. TDLR reported a 70.2% pass rate across 6,247 written massage exams in FY2025.",
       source:"Texas Dept. of Licensing & Regulation — Massage Therapy Exam Information (tdlr.texas.gov/mas/masexam.htm) + FSMTB Regulated States table", verified:true},

  UT: {vendor:"FSMTB / MBLEx (or NCBTMB) PLUS the Utah Massage Therapy Law & Rule Examination, via the Utah Division of Professional Licensing (DOPL)", questions:"100 (MBLEx) + the Utah Law & Rule exam", time:"110 minutes (MBLEx); Utah Law & Rule exam separately", pass:"MBLEx PASS/FAIL; Utah Law & Rule exam scored by DOPL", fee:"MBLEx $265 + $95 Utah initial licensing fee",
       note:"600 training hours, and NO continuing education required for renewal. QUIRK: Utah offers a formal APPRENTICESHIP route as an alternative to school — apprentice logs plus a passing score on the Utah law and rules exam. Very few states still allow this. Fingerprint cards are required. Utah publishes an explicit ENDORSEMENT path for therapists already licensed in another state, territory or district. MBLEx or NCBTMB results must be sent to DOPL directly by the exam provider — you cannot forward them yourself.",
       source:"Utah Division of Professional Licensing — Massage Therapist page (commerce.utah.gov/dopl/massage-therapist) + FSMTB Regulated States table", verified:true},

  VT: {vendor:"REGISTRATION, NOT LICENSURE — the Vermont Office of Professional Regulation (Secretary of State) registers massage therapists, bodyworkers and touch professionals. NO EXAMINATION IS REQUIRED and the MBLEx is not used.", questions:"none — Vermont requires no examination", time:"n/a", pass:"n/a — there is no exam to pass", fee:"$90 Vermont initial registration fee. No MBLEx fee, since no exam is required.",
       note:"OUTLIER: Vermont is the only jurisdiction that maintains a statewide credential while requiring NEITHER minimum training hours NOR an examination. The FSMTB table lists Vermont's education hours and CE hours both as not applicable. It is a registration — a roster the state keeps — rather than a competency licence. Renewal every 2 years at $90. PRACTICAL WARNING: a Vermont registration will NOT satisfy another state's endorsement requirements, because there is no hour count or exam behind it. If you might ever move, train to 500–625 hours and sit the MBLEx anyway.",
       source:"FSMTB Regulated States table (fsmtb.org), which lists Vermont as 'Registration', hours 'N/A', CE 'N/A', 'No Exam Required'", verified:true,
       confidence:"partial — the no-exam, no-hours model is confirmed on the FSMTB table; the Vermont Secretary of State's own page returned HTTP 403 and could not be read directly"},

  VA: {vendor:"FSMTB / MBLEx, via the Virginia Board of Nursing (Dept. of Health Professions)", questions:"100 (MBLEx)", time:"110 minutes", pass:"PASS/FAIL — MBLEx reports no numeric score", fee:"MBLEx $265 + $140 Virginia initial licensing fee",
       note:"QUIRK: Virginia regulates massage therapists through the BOARD OF NURSING, not a massage board — so application forms, disciplinary process and renewal all sit in the nursing board's system, which surprises applicants every year. 500 training hours (the national floor) but a full 24 CE hours per 2-year renewal. Virginia enacted the Interstate Massage Compact in 2025.",
       source:"FSMTB Regulated States table (fsmtb.org), whose Virginia link points to dhp.virginia.gov/Boards/Nursing + massagecompact.org (IMpact enactment status)", verified:true},

  WA: {vendor:"FSMTB / MBLEx, via the Washington State Dept. of Health, Board of Massage", questions:"100 (MBLEx)", time:"110 minutes", pass:"PASS/FAIL — MBLEx reports no numeric score", fee:"MBLEx $265 + $226 Washington initial licensing fee",
       note:"625 training hours, 24 CE hours per 2-year renewal. Washington's scope of practice is comparatively broad and massage therapy is more integrated with insurance billing there than in most states, which raises the practical importance of accurate SOAP documentation — the assessment and treatment-planning domain of the MBLEx maps directly onto daily work in Washington.",
       source:"FSMTB Regulated States table (fsmtb.org) + MBLEx Candidate Handbook", verified:true,
       confidence:"partial — hours, CE and fee from the FSMTB table; WA DOH rules and the insurance-billing detail not pulled from a primary source"},

  WV: {vendor:"FSMTB / MBLEx, via the West Virginia Massage Therapy Licensure Board (wvmassage.org)", questions:"100 (MBLEx)", time:"110 minutes", pass:"PASS/FAIL — MBLEx reports no numeric score", fee:"MBLEx $265 + $350 West Virginia initial licensing fee",
       note:"625 training hours and 24 CE hours per 2-year renewal. WATCH: the $350 initial fee is high for the region — more than double Kentucky's and nearly triple Pennsylvania's. CONFLICT: some secondary guides still list West Virginia at 500 hours; the FSMTB table gives 625. Treat 625 as the planning number and confirm with the board before enrolling.",
       source:"FSMTB Regulated States table (fsmtb.org) + MBLEx Candidate Handbook", verified:true,
       confidence:"partial — 625 hours is from the FSMTB table but is contradicted by several secondary aggregators claiming 500; resolve with the WV board"},

  WI: {vendor:"FSMTB / MBLEx, via the Massage Therapy & Bodywork Therapy Affiliated Credentialing Board (Wisconsin Dept. of Safety & Professional Services)", questions:"100 (MBLEx)", time:"110 minutes", pass:"PASS/FAIL — MBLEx reports no numeric score", fee:"MBLEx $265 + $60 Wisconsin initial licensing fee",
       note:"600 training hours, 24 CE hours per 2-year renewal, and the SECOND LOWEST initial fee in the country at $60 (only Maine's $40 is cheaper). The board's authority sits in Wis. Stat. ch. 460. UNRESOLVED: several aggregator sites claim Wisconsin adds a state statutes-and-rules exam on top of the MBLEx. That claim could not be confirmed on the DSPS board pages, which do not mention one. Confirm with DSPS before assuming a second exam is required.",
       source:"Wisconsin DSPS — Massage Therapy & Bodywork Therapy Affiliated Credentialing Board page (dsps.wi.gov) + FSMTB Regulated States table", verified:true,
       confidence:"partial — hours, CE and fee confirmed; the existence of a Wisconsin jurisprudence exam is claimed by secondary sources and NOT confirmed on the board's own site"},

  WY: {vendor:"NO STATEWIDE LICENSE — Wyoming has no massage therapy board, no state exam and no state license.", questions:"n/a — no state exam exists", time:"n/a", pass:"n/a", fee:"no state fee. Municipal permit fees vary.",
       note:"MAJOR OUTLIER: Wyoming is absent from the FSMTB regulated-states table. Where massage therapists are regulated at all it is by CITY OR COUNTY — Cheyenne and Laramie County have long-standing permit requirements typically asking for proof of massage education, a high-school diploma and a criminal background check, while much of rural Wyoming has no requirement whatsoever. CONSEQUENCE WORTH KNOWING: because Wyoming has no state licensure, it cannot join the Interstate Massage Compact — compact membership requires an existing state licensing system. A Wyoming-based therapist has no licence to port anywhere. Sit the MBLEx and train to at least 500 hours regardless, or you will be starting from zero the day you cross a state line.",
       source:"Absence from the FSMTB Regulated States table (fsmtb.org); municipal and IMpact-eligibility detail from massagecompact.org and secondary state-requirement guides", verified:false,
       confidence:"partial — the no-statewide-license fact follows from FSMTB's own table; the Cheyenne/Laramie County detail is secondary and city ordinances change without notice"},
  },

  genericSpecNote: "Requirements not yet verified for this jurisdiction. Typical range across the 48 regulated US jurisdictions: 500–1,000 training hours (median around 625), the MBLEx as the licensing exam (100 questions, 110 minutes, PASS/FAIL, $265), a $60–$565 initial licensing fee, a 2-year renewal cycle, and 0–36 CE hours. Confirm with the state board before publishing — and check whether the state adds a jurisprudence exam, because roughly a dozen do.",
};
