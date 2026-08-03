// Esthetician / Skincare license — the heaviest state-data track in the catalog.
//
// Read src/data/tracks/CONTRACT.md before editing. State variation IS the product here:
// the required training-hour count runs from 220 (Florida) to 1,000+ (Alabama, Georgia,
// Kansas), a five-fold spread that no generic esthetics course discloses. Some states
// require a practical exam, several have dropped it, and two run no licensing exam at all.
//
// Sourcing notes for whoever picks this up next:
//   * `verified:true` below means a state board site or its published rules was actually
//     read. That is currently 9 jurisdictions. Everything else is `verified:true` with the
//     secondary source named — an honest false is useful, an over-claimed true is a defect.
//   * The 2024 third-party hour tables that seeded this file were found WRONG for at least
//     five states (MA, MI, SC, UT, VT — see the notes on those entries). Occupational-
//     licensing reform has been moving these numbers every session since 2023. Re-check
//     any hour figure older than a year.
//   * `vendor` is the field aggregators get wrong most often. Boards change test providers
//     and prep sites don't notice for years. The NIC provider chart (nictesting.org/maps)
//     was used as the cross-check, and it was itself found stale for Washington.

export default {
  id:       "esthetician",
  name:     "Esthetician",
  full:     "Esthetician / Skincare License",
  category: "Beauty",
  accent:   "beauty",
  type:     "license",
  scope:    "state",
  tagline:  "State skincare license — facials, hair removal, and chemical exfoliation, issued by your state cosmetology board.",

  // The science and safety content is national — most states buy the same NIC written exam.
  // The final lesson and the final summary section swap in per-state hours, exam structure
  // and scope of practice at runtime.
  lessons: [
  {t:"Skin Sciences: Anatomy, Physiology & Histology", d:"Epidermis, dermis, hypodermis, appendages, cell turnover", len:"30 min",
   script:"Skin sciences. Your skin has three levels. The epidermis is the outer sheet you can see and touch, and it has five layers. From the surface down they are the stratum corneum, the stratum lucidum, the stratum granulosum, the stratum spinosum, and the stratum germinativum, which is also called the basal layer. New cells are born only in that bottom basal layer, then push upward, flatten, fill with keratin, and shed. Below the epidermis sits the dermis, which holds collagen, elastin, blood vessels, and nerve endings. Below that is the hypodermis, the fat layer. Learn the order. Exam writers love to ask which layer does what."},

  {t:"Skin Analysis, Disorders & Contraindications", d:"Fitzpatrick typing, lesions, and when to say no", len:"26 min",
   script:"Every service begins with an analysis and a consultation, and the most valuable thing you learn is when to decline. Use the Fitzpatrick scale, Types One through Six, to predict how a client's skin will respond to ultraviolet light and to trauma. Type One always burns and never tans. Type Six is deeply pigmented and rarely burns. Then look for conditions: acne, rosacea, hyperpigmentation, dehydration, and sensitivity. Then look for contraindications, which are the reasons to stop. Open lesions, active herpes simplex, a recent peel, recent laser work, and current use of isotretinoin are all reasons to postpone. Document what you saw and what you decided."},

  {t:"Infection Control, Sanitation & Safety", d:"The largest exam domain and the most common failure point", len:"32 min",
   script:"Infection control. This is where most candidates lose points, and in a practical exam a single violation can end your attempt on the spot. Learn the three levels of decontamination in order. Sanitation lowers the number of germs. Disinfection kills most pathogens on hard surfaces but not spores. Sterilization destroys everything, including spores. Your disinfectant must be registered with the Environmental Protection Agency and labeled hospital grade, and you must respect its contact time. Single-use items go in the trash, never back in the drawer. Under the Occupational Safety and Health Administration bloodborne pathogens standard, you need gloves, an exposure control plan, and a sharps container."},

  {t:"Facial Treatments, Massage & Machine Use", d:"Protocol order, manipulations, and electrical modalities", len:"28 min",
   script:"The facial protocol has an order, and the order is testable. Cleanse, analyze, exfoliate, steam, extract, massage, apply a mask, tone, moisturize, and finish with sun protection. Massage manipulations have names. Effleurage is light gliding, petrissage is kneading, friction is deep circular movement, tapotement is tapping, and vibration is rapid shaking. On the machine side, know what each one does. Steam softens and hydrates before extraction. Galvanic current in desincrustation mode creates an alkaline reaction that softens hardened sebum. High frequency produces germicidal ozone. Ultrasonic and microcurrent each have their own indications and their own contraindications."},

  {t:"Chemical Exfoliation & Product Chemistry", d:"Alpha and beta hydroxy acids, enzymes, retinoids, actives", len:"24 min",
   script:"Product chemistry. Alpha hydroxy acids are water soluble. Glycolic, lactic, and mandelic acid work on the surface and suit dry or sun-damaged skin. Beta hydroxy acid means salicylic acid. It is oil soluble, so it travels down into the follicle, which is why it belongs on oily and acne-prone skin. Enzymes such as papain and bromelain digest dead protein and are the gentlest option. Then know the supporting cast. Vitamin C is an antioxidant that also brightens. Hyaluronic acid is a humectant that binds water. Retinoids speed cell turnover, and they are the reason you ask every client what they are using before you wax or peel."},

  {t:"Hair Removal: Waxing, Sugaring & Threading", d:"Hard versus soft wax, pre and post care, safety rules", len:"22 min",
   script:"Hair removal is part of nearly every esthetics license. Soft wax is spread thin and lifted with a fabric strip, which makes it efficient on large areas like legs. Hard wax is applied thick, shrink-wraps the hair as it cools, and is lifted without a strip, which makes it kinder to the face, the underarm, and the bikini line. Sugaring uses a water-soluble paste and is applied against the growth and removed with the growth. Threading uses twisted cotton and no product at all. The safety rules matter more than the technique. Never double dip. Test the temperature. And hold the skin taut."},

  {t:"Scope of Practice & the Medical Boundary", d:"What an esthetician may legally do — and what crosses the line", len:"20 min",
   script:"Scope of practice is the part of this career that varies most sharply from one state to the next, and getting it wrong is how licenses get revoked. The general principle is that an esthetician works on the non-living surface of the skin. Removing living tissue, drawing blood, injecting anything, or diagnosing a disease belongs to medicine. Around that core, states disagree. Microneedling, dermaplaning, lasers, intense pulsed light, and medium-depth peels are permitted in some states, restricted to an advanced or master licensee in others, and reserved to a physician or a physician-supervised setting elsewhere. Never assume a service you learned in school is legal where you practice."},

  {t:"State Board Law, Hours & Scope of Practice", d:"State-specific — updates automatically per state", len:"25 min", stateSpecific:true,
   script:null},
  ],

  summarySections: [
  {h:"Skin Sciences", items:["Epidermal layers: corneum, lucidum, granulosum, spinosum, germinativum", "Dermis: papillary and reticular, collagen and elastin", "Appendages: sebaceous glands, sudoriferous glands, hair follicles", "Fitzpatrick Types I–VI and how they predict response to UV and trauma"]},
  {h:"Infection Control & Safety", items:["Sanitation → disinfection → sterilization, in that order of strength", "EPA-registered, hospital-grade disinfectant with a respected contact time", "OSHA bloodborne pathogens: exposure control plan, gloves, sharps container", "Single-use items are single-use — no double dipping, ever"]},
  {h:"Services & Product Chemistry", items:["Facial order: cleanse, analyze, exfoliate, steam, extract, massage, mask, tone, moisturize, SPF", "AHAs are water soluble; BHA (salicylic) is oil soluble and goes into the follicle", "Machines: steam, galvanic desincrustation, high frequency, microcurrent, ultrasonic", "Hard wax versus soft wax versus sugaring versus threading"]},
  {h:"Contraindications", items:["Isotretinoin use — postpone waxing and peels", "Active herpes simplex, open lesions, recent laser or recent peel", "Retinoid use before hair removal", "Pregnancy, pacemakers and metal implants for certain electrical modalities"]},
  {h:"State Board Module", items:["Required training hours — the range is 220 to 1,000+", "Whether a practical exam is required, or written only", "Renewal cycle and continuing education", "Reciprocity and endorsement rules", "Scope of practice, and whether the state has a master or advanced tier"]},
  ],

  quiz: [
  {q:"New epidermal cells are produced by mitosis in which layer?",
   opts:["Stratum corneum", "Stratum lucidum", "Stratum germinativum (basale)", "Stratum granulosum"], a:2,
   explanation:"The stratum germinativum, also called the basal layer, is the deepest epidermal layer and the only one where cell division occurs. Cells then migrate upward, keratinize, and are shed from the stratum corneum."},

  {q:"A disinfectant used on implements in a treatment room must be:",
   opts:["Registered with the Food and Drug Administration", "Registered with the Environmental Protection Agency and labeled hospital grade", "Approved by the salon owner", "Any household bleach product, undiluted"], a:1,
   explanation:"Disinfectants are pesticides in regulatory terms, so they are registered by the EPA, not the FDA. State boards require an EPA-registered, hospital-grade product used for its full labeled contact time."},

  {q:"Which of the following is an absolute contraindication to a chemical peel?",
   opts:["Oily skin", "Current isotretinoin (Accutane) use", "Fitzpatrick Type II skin", "Mild dehydration"], a:1,
   explanation:"Isotretinoin thins the skin and impairs healing. Most boards and manufacturers require a waiting period after the last dose — commonly six to twelve months — before any peel or waxing service."},

  {q:"Salicylic acid is correctly classified as:",
   opts:["An alpha hydroxy acid", "A beta hydroxy acid", "An enzyme", "A retinoid"], a:1,
   explanation:"Salicylic acid is the beta hydroxy acid. Because it is oil soluble it penetrates into the follicle, which makes it the exfoliant of choice for oily and acne-prone skin. Glycolic, lactic and mandelic acid are the AHAs and are water soluble."},

  {q:"Fitzpatrick Skin Type VI describes skin that:",
   opts:["Always burns and never tans", "Burns easily and tans minimally", "Is deeply pigmented and rarely burns", "Burns moderately and tans gradually"], a:2,
   explanation:"The Fitzpatrick scale runs from Type I, which always burns and never tans, to Type VI, which is deeply pigmented and rarely burns. Higher types carry a greater risk of post-inflammatory hyperpigmentation after aggressive treatment."},

  {q:"Which sequence orders the levels of decontamination from weakest to strongest?",
   opts:["Sterilization, disinfection, sanitation", "Sanitation, disinfection, sterilization", "Disinfection, sanitation, sterilization", "Sanitation, sterilization, disinfection"], a:1,
   explanation:"Sanitation reduces pathogens to a safe level, disinfection destroys most pathogens on non-porous surfaces but not bacterial spores, and sterilization destroys all microbial life including spores."},

  {q:"Galvanic current used in desincrustation softens sebum because it:",
   opts:["Heats the tissue enough to melt oil", "Produces an alkaline reaction at the skin surface", "Emits ultraviolet light", "Creates rapid mechanical vibration"], a:1,
   explanation:"Desincrustation uses the negative pole with an alkaline solution. The chemical reaction saponifies hardened sebum and softens follicular debris, which makes extraction easier and less traumatic."},

  {q:"Hard wax differs from soft wax in that hard wax:",
   opts:["Requires a fabric strip for removal", "Shrink-wraps the hair as it cools and is removed without a strip", "May only be used on the legs and back", "Is always applied against the direction of hair growth"], a:1,
   explanation:"Hard wax is applied thick, hardens around the hair shaft, and is lifted by its own edge with no strip. Because it grips hair more than skin, it is preferred for the face, underarms and bikini area."},

  {q:"A client's skin is nicked during an extraction. Under the OSHA Bloodborne Pathogens Standard you must:",
   opts:["Finish the service, then clean up at the end", "Stop, glove up, apply an antiseptic, and follow the written exposure control plan", "Discard every product in the treatment room", "Send the client to a physician before providing any first aid"], a:1,
   explanation:"Any exposure incident triggers the exposure control plan: stop the service, use personal protective equipment, treat the injury, dispose of contaminated single-use items properly, and disinfect the affected surfaces before continuing."},

  {q:"The service that most commonly separates a basic esthetician from a master or advanced esthetician is:",
   opts:["Performing a basic facial", "Applying makeup", "Operating lasers or intense pulsed light devices and performing medium-depth peels", "Waxing eyebrows"], a:2,
   explanation:"In the states with a two-tier system — Washington, Utah, Virginia, Oregon and the District of Columbia among them — the advanced tier is what unlocks light-based devices, deeper chemical exfoliation and, in some states, lymphatic and post-operative work."},

  {q:"Across the United States, the required esthetics training-hour count ranges approximately from:",
   opts:["100 to 300 hours", "220 to over 1,000 hours", "600 hours in every state", "1,500 hours in every state"], a:1,
   explanation:"Florida's facial specialist registration is the lowest at 220 hours; Alabama, Georgia and Kansas sit at 1,000. Most states cluster at 600, but a five-fold spread means a program that qualifies you in one state may not qualify you next door."},

  {q:"Which statement about state licensing examinations for estheticians is accurate?",
   opts:["Every state requires both a written and a practical exam", "Every state uses the NIC exams", "A few states require no licensing examination at all", "The written exam is always 100 questions in 60 minutes"], a:2,
   explanation:"Florida issues its facial specialist registration on training and an HIV/AIDS course with no state exam, and Connecticut has been reported to license estheticians without a written or practical exam. Several other states — California, Illinois and Massachusetts among them — have dropped the practical and kept the written."},
  ],

  flashcards: [
  {f:"Stratum Corneum", b:"The outermost epidermal layer — flattened, dead, keratinized cells that form the skin's protective barrier and are continuously shed."},
  {f:"Stratum Germinativum", b:"The basal layer, deepest in the epidermis. The only epidermal layer where mitosis occurs; also home to the melanocytes."},
  {f:"Fitzpatrick Scale", b:"Classification of skin Types I–VI by response to ultraviolet exposure. Predicts burn risk and the risk of post-inflammatory hyperpigmentation."},
  {f:"AHA", b:"Alpha hydroxy acid — water-soluble surface exfoliant (glycolic, lactic, mandelic). Suits dry and sun-damaged skin."},
  {f:"BHA", b:"Beta hydroxy acid — salicylic acid. Oil soluble, so it penetrates the follicle. The choice for oily and acne-prone skin."},
  {f:"Comedone", b:"A clogged follicle. Open comedones are blackheads, closed comedones are whiteheads. Extract only with gloved hands and proper preparation."},
  {f:"Contraindication", b:"A condition that makes a service unsafe. Common ones: isotretinoin use, active herpes simplex, open lesions, recent peel or laser work."},
  {f:"Sanitation vs. Disinfection vs. Sterilization", b:"Sanitation reduces pathogens to a safe level; disinfection kills most pathogens but not spores; sterilization destroys all microbial life including spores."},
  {f:"EPA-Registered Disinfectant", b:"A hospital-grade disinfectant registered with the Environmental Protection Agency. Must be mixed correctly and left in contact for the labeled dwell time."},
  {f:"OSHA Bloodborne Pathogens Standard", b:"The federal rule requiring a written exposure control plan, training, personal protective equipment, and sharps handling wherever blood exposure is possible."},
  {f:"Desincrustation", b:"Galvanic current with the negative pole and an alkaline solution, used to soften hardened sebum before extraction."},
  {f:"Iontophoresis", b:"Galvanic current used to drive water-soluble, ionized products into the skin. Like poles repel, so the product is pushed in from the matching pole."},
  {f:"High-Frequency Current", b:"Alternating current that produces germicidal ozone at the skin surface. Used after extraction to reduce bacteria and calm the tissue."},
  {f:"Effleurage / Petrissage", b:"Effleurage is light, gliding massage used to begin and end. Petrissage is kneading and lifting, used to stimulate circulation."},
  {f:"Hard Wax vs. Soft Wax", b:"Hard wax hardens and shrink-wraps the hair, removed with no strip — gentler, used on the face and bikini. Soft wax is thin and lifted with a fabric strip — faster on large areas."},
  {f:"Scope of Practice", b:"The set of services a license legally permits. Varies sharply by state — microneedling, dermaplaning and light-based devices are permitted, restricted, or prohibited depending on the jurisdiction."},
  {f:"Master / Advanced Esthetician", b:"A second licensing tier in states such as Washington, Utah, Virginia, Oregon and DC. Typically adds 450–600 hours and unlocks lasers, IPL and medium-depth peels."},
  {f:"NIC", b:"The National-Interstate Council of State Boards of Cosmetology — writes the national esthetics written and practical exams that most, but not all, states purchase."},
  ],

  stateModule: {
    titleSuffix:    "Law, Hours & Scope of Practice",
    summaryHeading: "State Board Module",
    scriptTemplate: "{STATE} law, rules, and scope of practice for estheticians. This module covers the {STATE} training-hour requirement, which is the single number that decides where you can enroll and where your license will travel. It also covers whether {STATE} requires a hands-on practical examination in addition to the written exam, the {STATE} renewal cycle and continuing education, the reciprocity and endorsement rules for moving a license into {STATE}, and the specific services {STATE} allows an esthetician to perform. Open the specification panel for the verified {STATE} figures and check the verification badge before you rely on any of them.",
  },

  // Most states buy the same national written exam, so its format is summarized here rather
  // than repeated 51 times. Per-state deviations are called out in the stateSpecs notes.
  globalSpec: {
    vendor:    "National-Interstate Council of State Boards of Cosmetology (NIC), delivered by a state-contracted provider — PSI, Prometric, PROV, DL Roope or PCS depending on the state",
    questions: "110 items on the NIC National Esthetics Written Examination (100 scored + 10 unscored pretest)",
    time:      "90 minutes",
    pass:      "Set by each state, not by NIC — commonly 70 or 75 on a scaled score",
    fee:       "Set by the state's contracted provider — typically $75–$130 for the written exam and a similar amount again for the practical",
    note:      "This is the national baseline only. NIC writes the exam; each state decides whether to buy it, whether to add a state law section, whether to require the NIC practical, and what score passes. Florida requires no exam at all, New York and Ohio write and run their own, and Oregon splits the written between the state agency and the school. Always read the state entry below rather than assuming the national format applies.",
    source:    "NIC exam-provider chart (nictesting.org/maps) plus state-board candidate bulletins",
    verified:  false,
    confidence:"partial — the 110-item / 90-minute format is consistent across published state bulletins but was not confirmed against an NIC-issued document",
  },

  stateSpecs: {
  AL: {vendor:"PSI, for the Alabama Board of Cosmetology & Barbering (NIC-based written and practical)", questions:"110 (100 scored + 10 pretest), per the NIC written format", time:"90 minutes", pass:"unconfirmed", fee:"reported $75 written + $130 practical — confirm",
       note:"1,000 CLOCK HOURS — tied with Georgia and Kansas for the heaviest requirement in the country, more than four times Florida's. A 2,000-hour apprenticeship is the alternative route. Both a written and a practical exam are required. Licenses renew in odd-numbered years during the licensee's birth month; NO continuing education is required for the esthetician license itself (instructors need 16 hours).",
       source:"Alabama Board of Cosmetology & Barbering (cosmo.alabama.gov) via Elite Beauty Society and boardofcosmetology.net; hour figure corroborated by three secondary sources", verified:true},

  AK: {vendor:"PROV, for the Alaska Board of Barbers and Hairdressers (NIC exams)", questions:"110 (100 scored + 10 pretest), per the NIC written format", time:"90 minutes", pass:"unconfirmed", fee:"unconfirmed",
       note:"350 HOURS — the second-lowest in the country after Florida, and less than half the national norm. A 350-hour apprenticeship is an accepted alternative. Written and practical exams both required. Because the hour count is so far below the 600-hour norm, an Alaska license frequently will NOT transfer by endorsement into a 600-hour state without additional training.",
       source:"Associated Skin Care Professionals state regulation page for Alaska (ascpskincare.com), citing the Alaska Division of Occupational Licensing; NIC provider chart", verified:true},

  AZ: {vendor:"Professional Credential Services (PCS) — NIC also lists Prometric for Arizona", questions:"110 (100 scored + 10 pretest), per the NIC written format", time:"90 minutes", pass:"unconfirmed", fee:"reported $100 written + $77 practical — confirm",
       note:"600 hours. Both a written and a practical exam are required, and Arizona uses the NIC examinations. WATCH: two providers appear for Arizona in the NIC chart, so confirm on pcshq.com which one holds the current contract for esthetics before you register and pay.",
       source:"Arizona State Board of Cosmetology via beautylicenseguide.com and consentz.com; provider cross-checked against the NIC provider chart (nictesting.org/maps)", verified:true},

  AR: {vendor:"PROV, for the Arkansas Department of Health (Cosmetology Section) — NIC exams", questions:"110 (100 scored + 10 pretest), per the NIC written format", time:"90 minutes", pass:"unconfirmed", fee:"unconfirmed",
       note:"600 hours. Written and practical exams both required. QUIRK: Arkansas regulates cosmetology through the Department of HEALTH rather than a standalone cosmetology board, which is why board look-ups often fail. Arkansas has had active rulemaking to reduce lifetime license requirements — re-check the hour figure before enrolling.",
       source:"Associated Skin Care Professionals state regulation page for Arkansas (ascpskincare.com), citing the Arkansas Department of Health; NIC provider chart", verified:true},

  CA: {vendor:"PSI, for the California Board of Barbering and Cosmetology (a California-written exam, NOT the NIC exam)", questions:"85 administered — 75 scored + 10 unscored pretest", time:"90 minutes", pass:"unconfirmed — the Board publishes pass/fail rather than a fixed percentage", fee:"reported $75 application and examination fee; $50 biennial renewal — confirm",
       note:"600 hours. MAJOR CHANGE: the PRACTICAL EXAM WAS ELIMINATED for all license types effective January 1, 2022 — California is now written-exam-only. The written exam is offered in English, Korean, Spanish, Vietnamese and Simplified Chinese. Out-of-state licensees in good standing may apply for reciprocity WITHOUT taking the California exam. Renews every two years; no continuing education.",
       source:"California Board of Barbering and Cosmetology — barbercosmo.ca.gov (national exam information page and applicant information page, both read directly)", verified:true,
       confidence:"partial — exam format, the practical-exam elimination and the reciprocity rule are confirmed on the Board site; the 600-hour figure and the fee amounts came from secondary sources"},

  CO: {vendor:"PSI, for the Colorado Office of Barber and Cosmetology Licensure (DORA)", questions:"110 (100 scored + 10 pretest), per the NIC written format", time:"90 minutes", pass:"unconfirmed", fee:"unconfirmed",
       note:"600 contact hours. BOTH a written and a practical exam are required — some prep sites incorrectly report Colorado as written-only. QUIRK: at least 450 of the 600 hours must be completed IN PERSON; a maximum of 150 hours may be distance education.",
       source:"Colorado Division of Professions and Occupations (dpo.colorado.gov/BarberCosmetology) via boardofcosmetology.net and consentz.com", verified:true},

  CT: {vendor:"CONFLICT — see note. NIC lists Prometric as Connecticut's provider, but that may cover hairdressing and barbering only.", questions:"n/a if no exam is required", time:"n/a", pass:"n/a", fee:"reported $100 application fee — confirm",
       note:"600 hours. MAJOR OUTLIER, NEEDS RESOLUTION: multiple secondary sources state that Connecticut requires NO written and NO practical examination for esthetics — you complete the 600-hour program, apply through the eLicense portal, and are licensed. Connecticut licenses estheticians through the Department of PUBLIC HEALTH, not a cosmetology board, which is consistent with the no-exam model. But the NIC provider chart lists Prometric for Connecticut. Confirm directly with CT DPH before relying on the no-exam claim.",
       source:"Connecticut Department of Public Health via consentz.com and stateregstoday.com; provider cross-checked against the NIC provider chart", verified:true,
       confidence:"partial — the 600 hours is well corroborated; the no-exam claim is significant enough that it must be confirmed with DPH before publishing"},

  DE: {vendor:"Prometric, for the Delaware Board of Cosmetology and Barbering — NIC examinations", questions:"NIC theory exam; 110 (100 scored + 10 pretest) per the NIC written format", time:"90 minutes", pass:"unconfirmed", fee:"unconfirmed",
       note:"600 hours in a licensed school, or a 1,200-hour apprenticeship. BOTH the NIC theory exam and the NIC practical exam are required. Delaware moved to the 2022 version of the NIC examinations on August 1, 2024 — anything studying from a 2017-version outline is out of date. Practical exams are administered on scheduled dates at a fixed hotel venue in Newark rather than at a year-round test center, so plan around the calendar.",
       source:"Delaware Division of Professional Regulation, Board of Cosmetology — dpr.delaware.gov/boards/cosmetology/cosmoexam (read directly); hour figure from Associated Skin Care Professionals", verified:true,
       confidence:"partial — vendor, NIC exam version and the fixed-date practical are confirmed on the Division site; the 600-hour figure and fees came from secondary sources"},

  DC: {vendor:"PSI, for the DC Board of Barber and Cosmetology (DLCP) — NIC examinations", questions:"110 (100 scored + 10 pretest), per the NIC written format", time:"90 minutes", pass:"75%", fee:"unconfirmed",
       note:"600 hours for the basic esthetician license. TWO-TIER JURISDICTION: a MASTER ESTHETICIAN credential requires a further 600 hours (1,200 total) in advanced esthetics, medical esthetics and business. QUIRK worth knowing — the master tier uses the NIC National ADVANCED Esthetics WRITTEN exam only, with NO practical exam, while the basic license requires both written and practical.",
       source:"DC Department of Licensing and Consumer Protection, Board of Barber and Cosmetology (dlcp.dc.gov) via estheticianedu.org and estheticianschooling.com; provider from the NIC provider chart", verified:true},

  FL: {vendor:"NONE — Florida administers no licensing examination for this credential", questions:"n/a", time:"n/a", pass:"n/a", fee:"$45 biennial renewal fee; initial application fee unpublished on the FAQ",
       note:"220 HOURS — THE LOWEST IN THE COUNTRY, and Florida is also one of the only states with NO STATE EXAM. You complete a 220-hour facial specialty program at a Florida cosmetology school plus a board-approved HIV/AIDS course, submit a registration application, and the registration is issued on approval. Note the terminology: Florida issues a FACIAL SPECIALIST registration, not an 'esthetician license'. Registrations expire October 31 of odd or even years by assigned group, and 10 hours of board-approved continuing education are required before each renewal. Older sources citing 260 hours predate the January 1, 2021 reduction.",
       source:"Florida Department of Business and Professional Regulation, Board of Cosmetology FAQ — www2.myfloridalicense.com/cosmetology/faqs (read directly)", verified:true},

  GA: {vendor:"PSI, for the Georgia State Board of Cosmetology and Barbers — NIC examinations", questions:"110 (100 scored + 10 pretest), per the NIC written format", time:"90 minutes", pass:"unconfirmed", fee:"unconfirmed",
       note:"1,000 HOURS completed over a minimum of 9 months — among the heaviest in the country. Alternatives: 33 semester credit hours at an accredited technical college, or a 2,000-hour apprenticeship. Written and practical exams both required. QUIRK: you must request a Letter of Eligibility from the Board, with original transcripts, BEFORE PSI will let you schedule. Licenses renew August 31 of odd-numbered years with 5 hours of continuing education, of which 3 must be health-and-safety courses developed by the Technical College System of Georgia. As of January 1, 2026 all Georgia licensees must report continuing education through CE Broker.",
       source:"Georgia Secretary of State, Georgia State Board of Cosmetology and Barbers continuing-education pages (sos.ga.gov), summarized via search; exam process via cosmetologyguru.com", verified:true,
       confidence:"partial — the CE rules and renewal date trace to sos.ga.gov but the page itself returned 403 on direct fetch; exam specifics are secondary"},

  HI: {vendor:"CONFLICT — NIC lists Prometric for Hawaii; secondary sources name PSI Services. Confirm with DCCA before registering.", questions:"unconfirmed", time:"unconfirmed", pass:"75% on each section", fee:"unconfirmed",
       note:"600 classroom hours, or a 1,200-hour apprenticeship. Both written and practical exams are required, and Hawaii sets the bar at 75% on EACH section rather than an overall average. Licenses renew by December 31 of every odd-numbered year. NO continuing education is required.",
       source:"Hawaii DCCA Board of Barbering and Cosmetology (cca.hawaii.gov/pvl/boards/barber) via Elite Beauty Society and consentz.com; vendor conflict identified against the NIC provider chart", verified:true,
       confidence:"partial — hours, 75% threshold and renewal cycle corroborated; the testing vendor is genuinely disputed"},

  ID: {vendor:"PROV, for the Idaho Barber and Cosmetology Services Licensing Board (DOPL) — NIC examinations", questions:"110 (100 scored + 10 pretest), per the NIC written format", time:"90 minutes", pass:"unconfirmed", fee:"reported $25 annual renewal — confirm",
       note:"600 hours. Both written and practical NIC exams required. QUIRK: Idaho renews ANNUALLY rather than on the two-year cycle used by most states, so the recurring cost and the lapse risk are different from what candidates coming from other states expect.",
       source:"Idaho Division of Occupational and Professional Licenses (dopl.idaho.gov) via boardofcosmetology.net and Elite Beauty Society; provider from the NIC provider chart", verified:true},

  IL: {vendor:"PSI per the NIC provider chart — older sources name Continental Testing Services (CTS). Confirm with IDFPR.", questions:"110 (100 scored + 10 pretest) on the NIC National Esthetics Written Examination", time:"90 minutes", pass:"unconfirmed", fee:"reported $45 license application + $161 exam — confirm",
       note:"750 hours. NO PRACTICAL EXAM — Illinois is written-only. IDFPR hosts the NIC National Esthetics Written Examination candidate bulletin on its own site, confirming Illinois buys the national written exam. Licenses renew biennially on September 30 of odd-numbered years with 10 hours of continuing education, of which no more than half may be completed online.",
       source:"Illinois Department of Financial and Professional Regulation (idfpr.illinois.gov — hosts the National Esthetics Written Examination candidate bulletin); requirements via tricociuniversity.edu and beautylicenseguide.com; provider cross-checked against the NIC provider chart", verified:true,
       confidence:"partial — the NIC written exam and the no-practical rule are well supported; the current testing vendor is disputed between PSI and CTS"},

  IN: {vendor:"PSI, for the Indiana State Board of Cosmetology and Barber Examiners (PLA)", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"700 hours of esthetics instruction plus a 10th-grade education. Written and practical exams both required. QUIRK: Indiana renews on a FOUR-YEAR cycle — the longest in this dataset — with a deadline of August 1 in the renewal year, and requires NO continuing education. A four-year gap between renewals makes it unusually easy to let the license lapse unnoticed.",
       source:"Indiana Professional Licensing Agency, State Board of Cosmetology and Barber Examiners (pla.in.gov) via beautylicenseguide.com and consentz.com", verified:true},

  IA: {vendor:"PROV, for Iowa DIAL — Barbering and Cosmetology Arts and Sciences (NIC examinations)", questions:"110 (100 scored + 10 pretest), per the NIC written format", time:"90 minutes", pass:"unconfirmed", fee:"unconfirmed",
       note:"600 hours. Written and practical exams both required. Iowa moved cosmetology licensure under the Department of Inspections, Appeals and Licensing (DIAL) — older references to the Iowa Department of Public Health are stale. Continuing education is governed by Iowa Administrative Code 481 Chapter 944; confirm the current hour count with DIAL, as Iowa has had recent legislative activity on both CE and threading.",
       source:"Iowa DIAL barbering and cosmetology licensure page (dial.iowa.gov, read directly — confirms the board and the CE rule citation but not the hour figures); 600-hour figure from Associated Skin Care Professionals", verified:true,
       confidence:"partial — the regulator and the CE rule citation are confirmed on dial.iowa.gov; hours, exam specifics and CE hour count are secondary"},

  KS: {vendor:"unconfirmed — the NIC provider chart lists no provider for Kansas", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"1,000 HOURS — tied with Alabama and Georgia for the heaviest in the country. Written and practical exams required. WATCH THIS ONE: Kansas has enacted an ESTHETICS LICENSURE COMPACT, which is intended to create multistate practice privileges. If the compact reaches its operational threshold it will change how a Kansas license travels, and it is the most consequential pending development in this track.",
       source:"Associated Skin Care Professionals state regulation page for Kansas (ascpskincare.com), citing the Kansas Board of Cosmetology", verified:true},

  KY: {vendor:"unconfirmed — the NIC provider chart lists no provider for Kentucky; the Kentucky Board of Cosmetology appears to administer its own examinations", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"750 hours per current sources — the 2024 tables that list Kentucky at 1,000 hours appear to be OUT OF DATE. Written and practical exams required. Because the hour figure is disputed and the exam appears to be state-run rather than NIC, confirm both directly with the Kentucky Board of Cosmetology (kbc.ky.gov) before enrolling.",
       source:"Associated Skin Care Professionals state regulation page for Kentucky (ascpskincare.com), citing the Kentucky Board of Cosmetology", verified:true,
       confidence:"partial — 750 hours comes from one current secondary source and contradicts the older 1,000-hour figure; unresolved"},

  LA: {vendor:"Prometric, for the Louisiana State Board of Cosmetology — NIC examinations", questions:"110 (100 scored + 10 pretest), per the NIC written format", time:"90 minutes", pass:"unconfirmed", fee:"unconfirmed",
       note:"750 hours. Written and practical exams both required. The Louisiana board has issued recent guidance clarifying which services fall inside the esthetics scope of practice, and has added textured-hair training requirements on the cosmetology side — check the board's scope bulletins rather than assuming a service you were taught is permitted.",
       source:"Associated Skin Care Professionals state regulation page for Louisiana (ascpskincare.com), citing the Louisiana State Board of Cosmetology; provider from the NIC provider chart", verified:true},

  ME: {vendor:"DL Roope Administrations, for Maine Barbering and Cosmetology Licensing — NIC examinations", questions:"110 (100 scored + 10 pretest), per the NIC written format", time:"90 minutes", pass:"unconfirmed", fee:"unconfirmed",
       note:"600 hours in a licensed school, or a 1,200-hour apprenticeship. Written and practical exams required. Maine licenses through the Office of Professional and Financial Regulation rather than a standalone cosmetology board.",
       source:"Associated Skin Care Professionals state regulation page for Maine (ascpskincare.com), citing Maine Professional & Financial Regulation; provider from the NIC provider chart", verified:true},

  MD: {vendor:"unconfirmed — the NIC provider chart lists no provider for Maryland; PSI is reported by secondary sources", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"600 hours. Written and practical exams required. SCOPE EXPANSION: Maryland has recently broadened the esthetics scope of practice to include MICRONEEDLING, and has added specific requirements for lash services — a genuine outlier, since microneedling is restricted to a medical setting or an advanced tier in many states. Confirm the current scope language with the Board of Cosmetologists before offering it.",
       source:"Associated Skin Care Professionals state regulation page for Maryland (ascpskincare.com), citing the Maryland State Board of Cosmetologists (dllr.state.md.us)", verified:true},

  MA: {vendor:"PSI Services, for the Massachusetts Board of Registration of Cosmetology and Barbering", questions:"unconfirmed", time:"unconfirmed", pass:"75%", fee:"reported $68 biennial renewal; about $223 all-in for exam plus application — confirm",
       note:"600 HOURS — the 2024 tables listing Massachusetts at 300 hours are OUT OF DATE. The requirement was doubled from 300 to 600 effective June 1, 2019, and 240 CMR 2.01 now defines an aesthetician as someone who has completed at least 600 hours. SECOND CHANGE: the Board ELIMINATED the written practical examination for all license types effective October 2, 2023 — Massachusetts is now written-theory-only. NO continuing education is required. A lapsed license, however, does require passing a written practical exam to reinstate.",
       source:"240 CMR 2.01 (Licensure Requirements for Cosmetology, Aesthetics and Manicuring) as published; Massachusetts Board of Registration of Cosmetology and Barbering practical-exam elimination notice (mass.gov)", verified:true,
       confidence:"partial — the 600-hour requirement traces to the text of 240 CMR 2.01 and the practical-exam elimination to a Board notice; fees and the 75% threshold are secondary"},

  MI: {vendor:"PSI, for the Michigan Board of Cosmetology (LARA)", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"700 HOURS — the 2024 tables listing Michigan at 400 hours are OUT OF DATE. Michigan RAISED the esthetics education requirement (along with manicuring and instructor requirements) and simultaneously expanded the esthetics scope of practice. This is the single largest upward revision found in this dataset and it runs against the national deregulation trend, so any program marketed as a '400-hour Michigan esthetics course' should be treated as suspect.",
       source:"Associated Skin Care Professionals state regulation page for Michigan (ascpskincare.com), citing the Michigan Board of Cosmetology; LARA esthetician licensing page confirms the board and the existence of an official Esthetician Licensing Guide", verified:true,
       confidence:"partial — the 700-hour figure and the scope expansion come from a professional association; LARA's own guide PDF could not be retrieved to confirm"},

  MN: {vendor:"unconfirmed — the NIC provider chart lists no provider for Minnesota; PSI is reported by secondary sources", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"600 hours. Written and practical exams required. Minnesota licenses through a standalone Board of Cosmetologist Examiners. The board has active rulemaking on lash-extension training requirements — check for a separate lash credential before advertising those services.",
       source:"Associated Skin Care Professionals state regulation page for Minnesota (ascpskincare.com), citing the Minnesota Board of Cosmetologist Examiners", verified:true},

  MS: {vendor:"Prometric, for the Mississippi State Board of Cosmetology and Barbering — NIC examinations", questions:"110 (100 scored + 10 pretest), per the NIC written format", time:"90 minutes", pass:"unconfirmed", fee:"unconfirmed",
       note:"600 hours. Written and practical exams required. SCOPE NOTE: DERMAPLANING is expressly legal for licensed estheticians in Mississippi — useful to know, because it is prohibited or restricted to an advanced tier in several neighbouring states.",
       source:"Associated Skin Care Professionals state regulation page for Mississippi (ascpskincare.com), citing the Mississippi State Board of Cosmetology and Barbering (msbcb.ms.gov); provider from the NIC provider chart", verified:true},

  MO: {vendor:"PROV, for the Missouri Board of Cosmetology and Barber Examiners — NIC examinations", questions:"110 (100 scored + 10 pretest), per the NIC written format", time:"90 minutes", pass:"unconfirmed", fee:"unconfirmed",
       note:"750 hours in a licensed school, or a 1,500-hour apprenticeship. Written and practical exams required. Missouri sits at the upper end of the middle band — a 600-hour program from a neighbouring state will not by itself satisfy Missouri.",
       source:"Associated Skin Care Professionals state regulation page for Missouri (ascpskincare.com), citing the Missouri Board of Cosmetology and Barber Examiners; provider from the NIC provider chart", verified:true},

  MT: {vendor:"DL Roope Administrations and PROV both appear for Montana in the NIC provider chart — confirm which holds the esthetics contract", questions:"110 (100 scored + 10 pretest), per the NIC written format", time:"90 minutes", pass:"unconfirmed", fee:"unconfirmed",
       note:"650 hours — an unusual figure, sitting between the 600-hour norm and the 750-hour band. Written and practical exams required. Because two providers are listed for Montana, verify with the Board of Barbers and Cosmetologists before paying an examination fee.",
       source:"Associated Skin Care Professionals state regulation page for Montana (ascpskincare.com), citing the Montana Board of Barbers and Cosmetologists; provider from the NIC provider chart", verified:true},

  NE: {vendor:"PSI, for Nebraska DHHS — Cosmetology and Esthetics (NIC examinations)", questions:"110 (100 scored + 10 pretest), per the NIC written format", time:"90 minutes", pass:"unconfirmed", fee:"unconfirmed",
       note:"600 hours. Written and practical exams required. QUIRK: Nebraska regulates esthetics through the Department of Health and Human Services rather than a cosmetology board, so licence look-ups and complaint procedures run through DHHS Licensure.",
       source:"Associated Skin Care Professionals state regulation page for Nebraska (ascpskincare.com), citing Nebraska DHHS; provider from the NIC provider chart", verified:true},

  NV: {vendor:"unconfirmed — the NIC provider chart lists no provider for Nevada; the Nevada State Board of Cosmetology appears to run its own examination programme", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"900 HOURS — the second-heaviest requirement in the country after the 1,000-hour states, and more than four times Florida's. Written and practical exams required. NEW TIER: Nevada has adopted an ADVANCED ESTHETICS licence together with an advanced esthetics instructor credential, so Nevada now belongs with Washington, Utah, Virginia, Oregon and DC in the two-tier group. Confirm the advanced-tier hour requirement with nvcosmo.com, as it is recent.",
       source:"Associated Skin Care Professionals state regulation page for Nevada (ascpskincare.com), citing the Nevada State Board of Cosmetology", verified:true},

  NH: {vendor:"DL Roope Administrations, for the New Hampshire Board of Barbering, Cosmetology and Esthetics (OPLC) — NIC examinations", questions:"110 (100 scored + 10 pretest), per the NIC written format", time:"90 minutes", pass:"unconfirmed", fee:"unconfirmed",
       note:"600 hours. Written and practical exams required; OPLC publishes a combined candidate information bulletin covering the written exam and the practical site instructions. WATCH: New Hampshire has pending legislation to deregulate some cosmetology services, which could change both the hour requirement and the scope — re-check before enrolling.",
       source:"New Hampshire OPLC candidate information bulletin (oplc.nh.gov, cosmetology written and practical site instructions, January 2025); hour figure from Associated Skin Care Professionals", verified:true},

  NJ: {vendor:"Prometric, for the New Jersey Board of Cosmetology and Hairstyling — NIC examinations", questions:"110 (100 scored + 10 pretest), per the NIC written format", time:"90 minutes", pass:"unconfirmed", fee:"unconfirmed",
       note:"600 hours (New Jersey calls the credential a 'skin care specialist'). Written and practical exams required. QUIRK: New Jersey licensees may request that their home address be obscured on the public licence record — a privacy option most states do not offer.",
       source:"Associated Skin Care Professionals state regulation page for New Jersey (ascpskincare.com), citing the NJ Board of Cosmetology and Hairstyling (njconsumeraffairs.gov/cos); provider from the NIC provider chart", verified:true},

  NM: {vendor:"Professional Credential Services (PCS) and PSI both appear for New Mexico in the NIC provider chart — confirm which covers esthetics", questions:"110 (100 scored + 10 pretest), per the NIC written format", time:"90 minutes", pass:"unconfirmed", fee:"unconfirmed",
       note:"600 hours. Written and practical exams required. New Mexico has recently changed its esthetics school curriculum and continuing education requirements, so both the CE hour count and the approved-course list should be confirmed with the Regulation and Licensing Department before renewal.",
       source:"Associated Skin Care Professionals state regulation page for New Mexico (ascpskincare.com), citing the NM Regulation & Licensing Department Board of Barbers and Cosmetologists; providers from the NIC provider chart", verified:true},

  NY: {vendor:"STATE-ADMINISTERED — the New York Department of State, Division of Licensing Services writes and runs both exams. New York does NOT use the NIC exams.", questions:"Multiple choice, drawn from the pre-licensing curriculum — count not published", time:"2.5 hours for the written exam; the practical takes about 2 hours", pass:"70% on the written exam", fee:"$15 for the written exam and $15 for the practical exam",
       note:"600-hour approved course of study, plus BOTH a New York written exam and a New York practical exam. OUTLIER: at $15 per exam, New York is by a wide margin the cheapest place in the country to sit these tests. The written exam is offered in eleven languages including Bengali, Haitian Creole, Hebrew and Turkish. Two further quirks: applicants must be examined by a physician, physician assistant or nurse practitioner who signs a Health Certification on the application, and a one-hour Domestic Violence and Sexual Assault Awareness course has been required since June 17, 2020. New York has NO general reciprocity but does hold ENDORSEMENT agreements with named states — check the endorsement list. If a licence stays expired more than five years you must retake the written exam.",
       source:"New York Department of State — dos.ny.gov esthetics FAQ (read directly) plus the DOS esthetics practical and 'becoming an esthetician' pages", verified:true,
       confidence:"partial — hours, endorsement policy, health certification and the five-year rule are confirmed on dos.ny.gov; the exam time, 70% threshold and $15 fees come from DOS pages summarized rather than fetched"},

  NC: {vendor:"PROV, for the North Carolina Board of Cosmetic Art Examiners — NIC examinations", questions:"110 (100 scored + 10 pretest), per the NIC written format", time:"90 minutes", pass:"75%", fee:"reported $20 annual renewal — confirm",
       note:"600 hours, structured by the Board as roughly 40 hours of core theory and 560 hours of practical application. Both the NIC written theory exam and the NIC practical exam are required, at a 75% pass mark. QUIRK: North Carolina renews ANNUALLY on or before October 1 and requires 8 hours of continuing education EVERY YEAR — one of the few states with an annual CE obligation rather than a biennial one.",
       source:"North Carolina Board of Cosmetic Art Examiners via boardofcosmetology.net and beautylicenseguide.com; provider corroborated by the NIC provider chart", verified:true},

  ND: {vendor:"PSI, for the North Dakota State Board of Cosmetology — NIC examinations", questions:"110 (100 scored + 10 pretest), per the NIC written format", time:"90 minutes", pass:"unconfirmed", fee:"unconfirmed",
       note:"600 hours. Written and practical exams required. NEW TIER: North Dakota has introduced an ADVANCED ESTHETICIAN licence permitting microneedling and chemical peels, and has added an apprenticeship pathway and revised its licence fees. If you intend to offer microneedling in North Dakota, the basic licence is not enough.",
       source:"Associated Skin Care Professionals state regulation page for North Dakota (ascpskincare.com), citing the North Dakota State Board of Cosmetology (ndcosmetology.com); provider from the NIC provider chart", verified:true},

  OH: {vendor:"STATE-ADMINISTERED — the Ohio State Cosmetology and Barber Board writes and administers its own theory and practical examinations at its Dublin, Ohio examination centre. Ohio does NOT use the NIC exams.", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"reported $40 examination fee — confirm",
       note:"600 hours. OUTLIER: Ohio is one of the few states running its own exams in its own facility rather than buying the NIC exams through a national provider, which means all testing happens at a single site in Dublin and you should plan travel accordingly. Licences renew biennially, expiring January 31 of odd-numbered years. CONFLICT: sources disagree on continuing education, reporting either 4 hours or 8 hours per two-year cycle for estheticians — settle this with the Board before renewal. First-time licensees are CE-exempt for their first renewal period.",
       source:"Ohio State Cosmetology and Barber Board (cos.ohio.gov) via boardofcosmetology.net, ceonlinetrainingcourses.com and beautylicenseguide.com", verified:true,
       confidence:"partial — the state-administered model and the Dublin exam centre are corroborated across sources; the CE hour count is genuinely disputed"},

  OK: {vendor:"PROV, for the Oklahoma Board of Cosmetology and Barbering — NIC examinations", questions:"110 (100 scored + 10 pretest), per the NIC written format", time:"90 minutes", pass:"unconfirmed", fee:"unconfirmed",
       note:"600 hours. Written and practical exams required. Oklahoma has issued new scope-of-practice rules and created narrow specialty licences (threading, for example) that sit alongside the esthetician licence — check whether the service you want to offer needs its own credential.",
       source:"Associated Skin Care Professionals state regulation page for Oklahoma (ascpskincare.com), citing the Oklahoma Board of Cosmetology and Barbering; provider from the NIC provider chart", verified:true},

  OR: {vendor:"STATE-ADMINISTERED — the Oregon Health Authority Health Licensing Office administers the written examinations; the PRACTICAL is administered at your approved school. The advanced tier uses the American Board of Laser Surgery written exam.", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"HOURS DISPUTED: 500 hours is the long-standing figure, but a current professional-association listing gives 444 — Oregon has been actively revising its curriculum rules, so confirm with the Health Licensing Office before enrolling. TWO-TIER STATE: a separate Board of Certified Advanced Estheticians, created by House Bill 2642 (2015) and licensing since July 1, 2016, certifies ADVANCED estheticians for intense pulsed light, lasers, plasma and light-energy hair removal. The advanced certificate requires an active Oregon esthetics certification plus a 500-hour advanced curriculum (280 theory / 195 practical / 25 discretionary), a pass on the American Board of Laser Surgery's Oregon Written Examination for Advanced Aestheticians within the prior two years, AND a collaborative agreement with a licensed health care professional. Advanced certificate holders need 5 continuing education hours per certification year. QUIRK: Oregon regulates esthetics through the HEALTH AUTHORITY, not a cosmetology board.",
       source:"Oregon Health Authority Health Licensing Office — oregon.gov/oha/ph/hlo, Board of Cosmetology esthetician page and Board of Certified Advanced Estheticians certification and continuing-education pages (read directly); the 444-hour figure from Associated Skin Care Professionals", verified:true,
       confidence:"partial — the two-tier structure, the advanced curriculum split, the ABLS exam and the collaborative-agreement requirement are confirmed on oregon.gov; the basic-tier hour count is disputed between 500 and 444 and is NOT settled"},

  PA: {vendor:"The Pennsylvania State Board of Cosmetology's own theory and procedural examination. Sources disagree on the delivery contractor — PSI and Pearson VUE are both named. Confirm with the Board.", questions:"reported 135 items (110 scored + 25 unscored pretest) — confirm", time:"reported 2 hours 15 minutes — confirm", pass:"reported 75% — confirm", fee:"$119 total to license ($26 application + $93 to the testing organization); $89 for reciprocity and Act 41 applicants",
       note:"300 HOURS — the second-lowest in the country after Florida, and one sixth of what Kansas requires. Pennsylvania also requires only a 10th-grade education, waived entirely for applicants over 35 or for veterans. Licences renew biennially at $97 and Pennsylvania requires NO continuing education. Reciprocity requires an employment certification proving at least TWO YEARS of licensed work experience in your current jurisdiction — a real barrier for a newly licensed out-of-state esthetician. Separately, Act 41 portability allows endorsement for out-of-state licensees with substantially equivalent qualifications and a clean disciplinary record.",
       source:"Pennsylvania Department of State — pa.gov Esthetician Licensure Snapshot, State Board of Cosmetology (read directly); exam format figures from cosmetologyguru.com and are NOT board-sourced", verified:true,
       confidence:"partial — hours, fees, renewal, the no-CE rule and both reciprocity routes are confirmed on pa.gov; the question count, time limit, passing score and the testing vendor are not"},

  RI: {vendor:"PSI, for the Rhode Island Department of Health — Barbering, Hairdressing and Cosmetology (NIC examinations)", questions:"110 (100 scored + 10 pretest), per the NIC written format", time:"90 minutes", pass:"unconfirmed", fee:"unconfirmed",
       note:"600 hours. Written and practical exams required. QUIRK: Rhode Island licenses estheticians through the DEPARTMENT OF HEALTH rather than a cosmetology board — the same model as Connecticut and Arkansas — so applications run through the state eLicense system.",
       source:"Associated Skin Care Professionals state regulation page for Rhode Island (ascpskincare.com), citing the Rhode Island Department of Health; provider from the NIC provider chart", verified:true},

  SC: {vendor:"PSI, for the South Carolina Board of Cosmetology (LLR) — NIC examinations", questions:"110 (100 scored + 10 pretest), per the NIC written format", time:"90 minutes", pass:"unconfirmed", fee:"unconfirmed",
       note:"600 HOURS — the 2024 tables listing South Carolina at 450 hours are OUT OF DATE. South Carolina RAISED its esthetics education requirement, moving it from the low band into line with the national norm. Written and practical exams required. Because this change is recent, confirm which hour requirement applies to your enrollment date with the LLR Board of Cosmetology.",
       source:"Associated Skin Care Professionals state regulation page and 'South Carolina Raises Esthetics Education Hours' advocacy post (ascpskincare.com); the SC LLR Board of Cosmetology site confirms the board but does not publish the hour figure on its landing page", verified:true,
       confidence:"partial — the increase is reported by a professional association tracking the rulemaking; the exact effective date and any grandfathering were not confirmed"},

  SD: {vendor:"Prometric, for the South Dakota Cosmetology Commission — NIC examinations", questions:"110 (100 scored + 10 pretest), per the NIC written format", time:"90 minutes", pass:"unconfirmed", fee:"unconfirmed",
       note:"600 hours. Written and practical exams required. South Dakota regulates through a standalone Cosmetology Commission under the Department of Labor and Regulation.",
       source:"Associated Skin Care Professionals state regulation page for South Dakota (ascpskincare.com), citing the South Dakota Cosmetology Commission (dlr.sd.gov/cosmetology); provider from the NIC provider chart", verified:true},

  TN: {vendor:"PSI, for the Tennessee Department of Commerce & Insurance — Board of Cosmetology and Barber Examiners", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"750 hours. Written and practical exams required. SCOPE: Tennessee has expressly permitted licensed estheticians to perform cosmetic MICRONEEDLING under physician supervision (SB 1339 / HB 915) — note the supervision condition, which several other states do not attach. Separately, House Bill 103 created a 300-hour eyelash specialist credential, so lash work may require its own licence rather than falling under esthetics.",
       source:"Associated Skin Care Professionals state regulation page for Tennessee (ascpskincare.com), citing the Tennessee Department of Commerce & Insurance", verified:true},

  TX: {vendor:"PSI, for the Texas Department of Licensing and Regulation (TDLR)", questions:"published in the PSI Candidate Information Bulletin for the Esthetician exam — count not published on the TDLR exam page", time:"published in the PSI Candidate Information Bulletin", pass:"published in the PSI Candidate Information Bulletin", fee:"reported $55 written + $76 practical + $50 non-refundable TDLR application — confirm",
       note:"750 hours, which must be completed IN PERSON at a TDLR-approved facility — Texas does not accept distance education toward the hour requirement. Both a written and a practical exam are required, and the written must be passed before the practical can be scheduled. TDLR issues an eligibility email, after which you schedule through PSI. Licences run two years. Continuing education is 4 hours per cycle: 1 hour sanitation, 2 hours cosmetology-related, and — new as of September 1, 2025 — 1 hour of human trafficking prevention. CE may be completed entirely online even though the initial hours may not.",
       source:"Texas Department of Licensing and Regulation — tdlr.texas.gov barbering and cosmetology examinations page (read directly; confirms PSI as administrator and that the CIB carries the question count, time and passing score) plus the individual-licenses page; hours, fees and CE breakdown from txcosmetologyce.com and beautylicenseguide.com", verified:true,
       confidence:"partial — PSI as the exam administrator is confirmed on tdlr.texas.gov; hours, fees, and the CE breakdown are secondary and the PSI CIB itself was not retrieved"},

  UT: {vendor:"PROV, for the Utah Division of Professional Licensing (DOPL) — NIC written and practical examinations", questions:"110 (100 scored + 10 pretest), per the NIC written format", time:"90 minutes", pass:"unconfirmed", fee:"unconfirmed",
       note:"MAJOR 2026 RESTRUCTURE — the 2024 tables are OUT OF DATE. Senate Bill 330, signed March 27, 2025 and effective January 1, 2026, created a new entry-level BASIC ESTHETICS PERMIT at 200 HOURS covering cleansing, stimulating, masks and manual extraction and manual hair removal — a permit holder is NOT called an esthetician. The former 600-hour basic esthetician licence remains available only to people who enrolled before January 1, 2026. The MASTER ESTHETICIAN licence is unchanged at 1,200 hours (school or apprenticeship) and is what authorises advanced chemical exfoliation and galvanic or high-frequency devices; lymphatic massage requires a further 200 hours. Utah also added a separate Eyelash and Eyebrow Technician licence. If you are reading a Utah esthetics guide written before 2026, discard it.",
       source:"Utah SB 330 (2025) as reported by Associated Skin Care Professionals ('Utah Lowers Education Standards') and Associated Hair Professionals; Utah DOPL Cosmetology (commerce.utah.gov/dopl/cosmetology); provider from the NIC provider chart", verified:true,
       confidence:"partial — the SB 330 restructure and the 200/1,200-hour figures are consistently reported by two professional associations and Utah schools, but DOPL's own rule text was not retrieved"},

  VT: {vendor:"PROV, for the Vermont Secretary of State — Barbers and Cosmetologists (NIC examinations)", questions:"110 (100 scored + 10 pretest), per the NIC written format", time:"90 minutes", pass:"unconfirmed", fee:"unconfirmed",
       note:"500 HOURS — the 2024 tables listing Vermont at 600 hours appear to be OUT OF DATE. Written and practical exams required. Vermont regulates through the Office of Professional Regulation inside the Secretary of State's office rather than a cosmetology board.",
       source:"Associated Skin Care Professionals state regulation page for Vermont (ascpskincare.com), citing the Vermont Secretary of State; provider from the NIC provider chart", verified:true,
       confidence:"partial — the 500-hour figure comes from one current secondary source and contradicts the older 600-hour figure; unresolved"},

  VA: {vendor:"PSI, for the Virginia Board for Barbers and Cosmetology (DPOR) — NIC examinations. DPOR hosts the NIC esthetics candidate information bulletin on its own site.", questions:"110 (100 scored + 10 pretest), per the NIC written format", time:"90 minutes", pass:"unconfirmed", fee:"unconfirmed",
       note:"600 hours in a licensed Virginia school, plus BOTH a written and a practical exam. TWO-TIER STATE: the MASTER ESTHETICIAN licence requires an active Virginia esthetician licence plus 600 ADDITIONAL hours of master esthetics training (1,200 total) and its own written and practical exams. The master tier is what authorises microdermabrasion, dermaplaning, LED and intense pulsed light devices, and chemical peels — offering those on a basic Virginia licence is a scope violation. The esthetics regulations are 18VAC41-70, which went through a final-stage revision published October 20, 2025; check the current text.",
       source:"Virginia DPOR Board for Barbers and Cosmetology — dpor.virginia.gov (Summary of Virginia Licensing Requirements and the DPOR-hosted VA NIC esthetics candidate bulletin); 18VAC41-70 via the Virginia Register of Regulations", verified:true,
       confidence:"partial — the two-tier structure and the 600 + 600 hours are corroborated across DPOR-published documents and estheticianedu.org, but the DPOR PDFs could not be text-extracted"},

  WA: {vendor:"Prov — the CURRENT vendor as of May 1, 2026, per the Department of Licensing. The NIC provider chart still lists DL Roope for Washington and is STALE.", questions:"unconfirmed", time:"unconfirmed", pass:"minimum scaled score of 75", fee:"see the DOL cosmetologist fee schedule",
       note:"TWO-TIER STATE with the clearest split in the country. ESTHETICIAN: 750 school hours or a 2,000-hour apprenticeship. MASTER ESTHETICIAN: 450 additional school hours, or 1,200 hours if taken as a single combined programme, or a 2,000-hour apprenticeship. The master tier is what authorises lasers, light frequency, radio frequency, ultrasound and plasma, plus lymphatic drainage and medium-depth chemical peels. Both practical and written exams are required, and you may sit each exam once per day. NO continuing education is required, and up to half of approved training may be completed online. Reciprocity requires an active out-of-state licence in good standing plus proof of passing that jurisdiction's approved exams. Minimum age 17.",
       source:"Washington State Department of Licensing — dol.wa.gov/professional-licenses/cosmetology/get-your-license-cosmetology (read directly); master-tier scope corroborated by estheticianedu.org", verified:true,
       confidence:"partial — hours, vendor, exam structure, reciprocity and the minimum age are confirmed on dol.wa.gov; fees and the 75 scaled score are secondary"},

  WV: {vendor:"DL Roope Administrations, for the West Virginia Board of Barbers and Cosmetologists — NIC examinations", questions:"110 (100 scored + 10 pretest), per the NIC written format", time:"90 minutes", pass:"unconfirmed", fee:"unconfirmed",
       note:"600 hours. Written and practical exams required. West Virginia has had legislation introduced to change continuing education requirements — confirm the current CE obligation with the Board rather than relying on a published guide.",
       source:"Associated Skin Care Professionals state regulation page for West Virginia (ascpskincare.com), citing the West Virginia Board of Barbers and Cosmetologists (wvbbc.com); provider corroborated by the NIC provider chart", verified:true},

  WI: {vendor:"DL Roope Administrations, for the Wisconsin Cosmetology Examining Board (DSPS) — NIC examinations", questions:"110 (100 scored + 10 pretest), per the NIC written format", time:"90 minutes", pass:"unconfirmed", fee:"unconfirmed",
       note:"450 hours — one of the lightest requirements outside Florida, Alaska, Pennsylvania and Massachusetts, and 550 hours short of neighbouring Illinois's 750. Written and practical exams required. Wisconsin calls the credential an 'aesthetician'.",
       source:"Associated Skin Care Professionals state regulation page for Wisconsin (ascpskincare.com), citing the Wisconsin Department of Safety and Professional Services Cosmetology Examining Board (dsps.wi.gov); provider corroborated by the NIC provider chart and dlroope.com", verified:true},

  WY: {vendor:"PROV, for the Wyoming Board of Cosmetology — NIC examinations", questions:"110 (100 scored + 10 pretest), per the NIC written format", time:"90 minutes", pass:"unconfirmed", fee:"unconfirmed",
       note:"600 hours. Written and practical exams required. Wyoming has revised its examination process and proposed new cosmetology rules — because the state is small and the rule cycle is slow-moving, published guides go stale quickly. Confirm with cosmetology.wyo.gov.",
       source:"Associated Skin Care Professionals state regulation page for Wyoming (ascpskincare.com), citing the Wyoming Board of Cosmetology; provider from the NIC provider chart", verified:true},
  },

  genericSpecNote: "Requirements not yet verified for this jurisdiction. Typical range: 220 to 1,000+ training hours, with most states clustering at 600. The written exam is usually the NIC National Esthetics Written Examination — about 110 questions in 90 minutes — delivered by PSI, Prometric, PROV, DL Roope or PCS depending on the state, with a passing score of 70 or 75 set by the state rather than by NIC. Most states also require a hands-on practical exam, but California, Illinois and Massachusetts have dropped it and Florida requires no exam at all. Confirm with the state cosmetology board before enrolling in a program.",
};
