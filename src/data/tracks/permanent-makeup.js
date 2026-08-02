// Permanent Makeup / Micropigmentation — a "state" track with an unusually messy regulator map.
//
// Read src/data/tracks/CONTRACT.md before editing. The sourcing rule is the whole product, and
// it matters more here than on any other track: permanent makeup BREAKS THE SKIN, so in most
// states it is not a beauty credential at all — it sits under tattoo / body-art law at a health
// department, sometimes at the county rather than the state. Getting this wrong doesn't cost a
// candidate an exam fee, it gets them cited for practising without a permit.
//
// Four regulatory patterns show up across the 51 jurisdictions:
//   1. HEALTH DEPARTMENT, STATE LEVEL  — FL, GA, LA, MN, NE, CT, OK, TN, AR, IA, ME, RI …
//   2. HEALTH DEPARTMENT, COUNTY LEVEL — CA (the classic case), NV, NY, OH, IN, KY, MA, NJ, UT
//   3. COSMETOLOGY / OCCUPATIONAL BOARD — VA, KS, NM, AK, WA, OR, WI, MO, VT, NH, CO
//   4. EFFECTIVELY UNREGULATED AT STATE LEVEL — PA, WY, ID, AZ, SD, MD (local rules may still bite)
// And one genuine prohibition: SOUTH CAROLINA restricts micropigmentation to physicians.
//
// Where a state's rule could not be established from a primary source, the entry is
// verified:false and the note says plainly what is and is not established. Do not upgrade an
// entry to verified:true without reading the board or department page yourself.

export default {
  id:       "permanent-makeup",
  name:     "Permanent Makeup",
  full:     "Permanent Makeup / Micropigmentation",
  category: "Beauty",
  accent:   "beauty",
  type:     "certification",
  scope:    "state",
  tagline:  "Cosmetic tattooing — brows, eyeliner, lip blush and areola restoration. Regulated as body art in most states, not as beauty.",

  // The craft content is near-identical everywhere. What changes state to state is WHO licenses
  // you and WHAT they call the credential — which is the final lesson and the final summary card.
  lessons: [
  {t:"Skin Anatomy & Depth of Implantation", d:"Epidermis, dermis, and the one-millimetre window", len:"22 min",
   script:"Permanent makeup lives in a very narrow band of tissue. The epidermis is the outer layer, and it renews itself roughly every four to six weeks, so anything you leave there simply sheds. Below it sits the dermis. Pigment placed in the upper dermis, around one to one and a half millimetres deep, is captured by fibroblasts and stays put. Go deeper, into the lower dermis or the fat beneath it, and the pigment spreads sideways through the tissue and the shape blurs. Depth is controlled by needle protrusion, machine speed, hand pressure, and skin tension. Thin eyelid skin needs a far lighter touch than the tail of a brow."},

  {t:"Pigment Chemistry & Colour Theory", d:"How pigments heal, shift and fade over years", len:"25 min",
   script:"Permanent makeup pigments are suspensions, not dyes. Iron oxides are opaque, warm, and prone to shifting. Carbon black is stable but often heals cool or blue. Organic lake pigments are brighter and fade faster. Every pigment heals underneath a layer of skin, and skin is a warm, slightly yellow filter, so a colour that looks correct in the bottle heals warmer and lighter than you expect. Read the client's undertone before you open a bottle. A warm pigment on cool olive skin drifts orange over two years. Correction works on the complementary wheel: olive and green neutralise red, orange neutralises blue-grey. Choose for the healed result three years out, not for the day of."},

  {t:"Bloodborne Pathogens & the OSHA Standard", d:"29 CFR 1910.1030, exposure control, sharps", len:"20 min",
   script:"Permanent makeup breaks the skin, so you fall under the Occupational Safety and Health Administration bloodborne pathogens standard, twenty-nine C F R nineteen ten point ten thirty. That standard requires a written exposure control plan reviewed every year, universal precautions, personal protective equipment supplied at no cost to the worker, a sharps container at the point of use, hepatitis B vaccination offered free to employees, and a documented post-exposure evaluation procedure. The three organisms it targets are hepatitis B, hepatitis C, and H I V. Most states also demand a separate bloodborne pathogens certificate, renewed annually, before they will issue your permit. Keep that card current — an expired certificate is the most common licence problem there is."},

  {t:"Sterilisation & Single-Use Protocols", d:"Barrier film, sharps, autoclave, spore testing", len:"20 min",
   script:"Everything that touches blood is single use. Needles, cartridges, blades, ink caps and gloves go into the sharps container or the biohazard waste stream the moment the procedure ends, and they never travel to a second client. Anything reusable — machine bodies, clip cords, trays, lamp handles — is barrier-filmed before you start and disinfected between clients with a hospital-grade tuberculocidal product, respecting the full wet contact time printed on the label. If your state permits reusable instruments, they must be cleaned in an ultrasonic bath, bagged, and run through a steam autoclave with spore testing at whatever interval your regulator sets. Set the tray up before you glove, and never break the clean field."},

  {t:"Consultation & Contraindications", d:"Who you must turn away, and why", len:"22 min",
   script:"The consultation is where you prevent the complaint. Absolute contraindications include pregnancy and breastfeeding, active skin infection or inflammation in the area, uncontrolled diabetes, current chemotherapy, a keloid history, and blood thinners taken without a physician's clearance. Isotretinoin needs six to twelve months clear of the last dose. Recent botulinum toxin or dermal filler in the brow area distorts your map, so wait at least two weeks. Ask about latex, lidocaine, nickel and previous pigment reactions, and patch test wherever there is doubt. And always ask whether they have had permanent makeup before. Old iron oxide sitting under new work is the single most common reason a result cannot be predicted."},

  {t:"Consent, Records & Aftercare", d:"The paperwork that defends you", len:"18 min",
   script:"Informed consent is a legal document, not a formality. It must name the specific procedure, state plainly that results vary and that pigment fades and shifts, disclose the risk of infection, allergic reaction and scarring, confirm the client is over eighteen, and record the pigment brand, colour name and lot number actually used. Photograph before and after. Most states require you to keep these records for a set period — commonly two to seven years — and to produce them on inspection. Aftercare goes home in writing: keep it clean, no picking, no sun, no swimming, no exfoliants, and a named contact if anything starts to look infected."},

  {t:"State Regulation, Permits & Scope", d:"State-specific — who licenses you and what it is called", len:"24 min", stateSpecific:true,
   script:null},
  ],

  summarySections: [
  {h:"Technique & Craft", items:["Depth control — upper dermis, roughly 1–1.5 mm", "Pigment chemistry: iron oxide vs. carbon vs. organic lake", "Healed-result colour theory and complementary correction", "Brow mapping, eyeliner, lip blush, areola restoration"]},
  {h:"Infection Control", items:["OSHA bloodborne pathogens standard, 29 CFR 1910.1030", "Written exposure control plan, reviewed annually", "Single-use needles, cartridges and blades; sharps at point of use", "Barrier film plus hospital-grade tuberculocidal disinfection", "Annual bloodborne pathogens certificate — most states require the card"]},
  {h:"Client Management", items:["Absolute vs. relative contraindications", "Isotretinoin, anticoagulants, keloid history, pregnancy", "Patch testing and previous-pigment history", "Informed consent naming pigment brand, colour and lot number", "Written aftercare and a documented touch-up window"]},
  {h:"State Board Module", items:["Which agency regulates you: cosmetology board, state health department, or county", "Whether a prerequisite esthetics or cosmetology licence is required first", "Training hours, apprenticeship and exam, where one exists", "Permit fees, renewal cycle and bloodborne pathogens requirements", "Whether the service is restricted or prohibited outright in your state"]},
  ],

  quiz: [
  {q:"Permanent makeup pigment is implanted into:",
   opts:["The stratum corneum", "The upper dermis", "The subcutaneous fat", "The epidermis only"], a:1,
   explanation:"The epidermis renews itself every four to six weeks, so pigment left there sheds. The upper dermis — roughly one to one and a half millimetres deep — traps pigment without letting it migrate."},

  {q:"Which federal standard governs bloodborne pathogen exposure in a permanent makeup studio?",
   opts:["FDA 21 CFR Part 700", "EPA 40 CFR Part 261", "OSHA 29 CFR 1910.1030", "CDC 42 CFR Part 84"], a:2,
   explanation:"OSHA's bloodborne pathogens standard, 29 CFR 1910.1030, is the operative federal rule. It requires a written exposure control plan, universal precautions, free PPE, sharps containers and offered hepatitis B vaccination."},

  {q:"Pigment implanted too deeply will most likely:",
   opts:["Migrate and blur", "Flake off within two weeks", "Never show at all", "Turn permanently black"], a:0,
   explanation:"Below the upper dermis the pigment spreads laterally through looser tissue, so the crisp edge of a hair stroke or a liner turns into a soft grey shadow. Too shallow is what flakes off."},

  {q:"A client who finished a course of isotretinoin should:",
   opts:["Be treated normally", "Be treated with a smaller needle", "Only have lip blush", "Wait six to twelve months after the last dose"], a:3,
   explanation:"Isotretinoin thins the skin and impairs healing. Standard practice — and most consent forms — require six to twelve months clear before any cosmetic tattooing."},

  {q:"Why does the same pigment usually heal warmer than it looks in the bottle?",
   opts:["The machine heats the pigment", "Skin is a warm, slightly yellow filter sitting over the pigment", "Iron oxide oxidises to blue on contact with air", "Topical anaesthetic bleaches the colour"], a:1,
   explanation:"Healed pigment is viewed through the epidermis, which is warm and slightly yellow. That is why you select for the healed result, not for how the colour looks wet on the day."},

  {q:"In most states, microblading is legally classified as:",
   opts:["Esthetics", "Cosmetology", "Tattooing or body art", "A medical procedure in every state"], a:2,
   explanation:"Because a blade deposits pigment beneath the epidermis, microblading meets the statutory definition of tattooing almost everywhere — even though it is marketed as a brow service. South Carolina is the outlier that treats it as medical."},

  {q:"Used needles and cartridges must be:",
   opts:["Rinsed and reused on the same client", "Autoclaved and reused", "Placed in general waste", "Placed in a puncture-resistant sharps container at the point of use"], a:3,
   explanation:"OSHA requires sharps containers to be closable, puncture-resistant, leak-proof and located as close as practical to where the sharps are used. Needles are never reused, even on the same client."},

  {q:"The written plan OSHA requires a body art studio to maintain and review annually is the:",
   opts:["Exposure control plan", "Sanitation log", "Client consent form", "Safety data sheet"], a:0,
   explanation:"The exposure control plan documents how the studio identifies exposure risk and controls it. It must be reviewed and updated at least annually and made available to employees."},

  {q:"To neutralise a brow that has healed too red or pink, you would reach for:",
   opts:["More red", "A warm orange", "An olive or green-based corrector", "Pure carbon black"], a:2,
   explanation:"Complementary colours cancel. Green and olive sit opposite red on the wheel, so an olive corrector neutralises a red-healed brow. Orange is the corrector for blue-grey."},

  {q:"Recording the pigment lot number on the consent form matters because:",
   opts:["It sets the price of the service", "It is needed to renew your licence", "It determines the needle configuration", "It lets a reaction or a product recall be traced back to a specific batch"], a:3,
   explanation:"Pigment recalls happen, and adverse reactions are investigated batch by batch. Brand, colour name and lot number in the record is what makes tracing possible — and several states require it."},

  {q:"In California, a permanent makeup practitioner registers with:",
   opts:["The California Board of Barbering and Cosmetology", "The local county environmental health department", "The California Medical Board", "Nobody — permanent makeup is unregulated in California"], a:1,
   explanation:"The Safe Body Art Act is state law, but enforcement is delegated to local enforcement agencies. Registration and the facility permit are handled by the county environmental health department, not by the cosmetology board."},

  {q:"A client returns ten days after a brow procedure saying the colour looks much lighter than it did on the day. This is:",
   opts:["A failed procedure requiring immediate rework", "Normal — colour looks darker while healing, then lightens as the epidermis regenerates", "Evidence of an allergic reaction", "A sign the pigment was implanted too deep"], a:1,
   explanation:"Healing skin and lymph over the pigment make it look dark and intense for roughly seven to ten days. As the epidermis regenerates the colour softens, typically by thirty to fifty percent. Assess at the touch-up appointment, not before."},
  ],

  flashcards: [
  {f:"Upper Dermis", b:"The target layer for permanent makeup — roughly 1 to 1.5 mm deep. Shallower sheds with the epidermis; deeper migrates and blurs."},
  {f:"Fibroblast", b:"The dermal cell that traps and holds pigment particles, which is why dermal placement is permanent and epidermal placement is not."},
  {f:"Migration", b:"Lateral spread of pigment through tissue when it is implanted too deep — the cause of blurred, grey, soft-edged healed work."},
  {f:"Iron Oxide", b:"An opaque, warm inorganic pigment. Stable in volume but prone to shifting warm or orange as it fades over years."},
  {f:"Carbon Black", b:"A very stable pigment used in liner and hair strokes. Fades cool — often blue or grey — rather than warm."},
  {f:"Complementary Correction", b:"Neutralising an unwanted healed tone with its opposite: olive or green over red, orange over blue-grey."},
  {f:"29 CFR 1910.1030", b:"The OSHA bloodborne pathogens standard — exposure control plan, universal precautions, free PPE, sharps containers, hepatitis B vaccination, post-exposure evaluation."},
  {f:"Exposure Control Plan", b:"The written, annually reviewed document describing how a studio identifies and controls bloodborne pathogen exposure. Inspectors ask for it first."},
  {f:"Universal Precautions", b:"Treating all human blood and body fluids as if known to be infectious, regardless of what the client discloses."},
  {f:"Barrier Film", b:"Disposable plastic wrap applied to machines, cords, lamps and work surfaces before a procedure so they never contact contaminated hands or spatter."},
  {f:"Tuberculocidal Disinfectant", b:"A hospital-grade surface disinfectant rated against Mycobacterium tuberculosis — the benchmark most body-art codes specify, used for its full wet contact time."},
  {f:"Spore Test", b:"A biological indicator run through an autoclave to prove it actually sterilises. Required at a set interval wherever reusable instruments are permitted."},
  {f:"Isotretinoin Window", b:"The six to twelve months after finishing isotretinoin during which cosmetic tattooing is contraindicated because the skin is thinned and heals unpredictably."},
  {f:"Informed Consent", b:"A signed record naming the procedure, disclosing infection, allergy and scarring risk, confirming age, and logging pigment brand, colour and lot number."},
  {f:"Body Art Permit", b:"The health-department credential most states require for permanent makeup — separate from, and usually in addition to, any cosmetology or esthetics licence."},
  {f:"Touch-Up", b:"The refinement appointment, normally six to eight weeks out, once the epidermis has fully regenerated and the true healed colour is visible."},
  ],

  stateModule: {
    titleSuffix:    "Permanent Makeup Law & Permits",
    summaryHeading: "State Board Module",
    scriptTemplate: "{STATE} permanent makeup law and permits. This module covers which agency regulates cosmetic tattooing in {STATE} — a cosmetology board, a state health department, or a county health authority — whether a prerequisite esthetics licence is required, the training, apprenticeship or examination you must complete, the bloodborne pathogens certificate, the permit fees and renewal cycle, and any restriction or prohibition specific to {STATE}. Confirm every figure against the {STATE} agency named in the spec box before you apply.",
  },

  globalSpec: null,

  stateSpecs: {
  AL: {vendor:"Alabama Dept. of Public Health — Division of Food, Milk and Lodging (body art program)", questions:"—", time:"—", pass:"—", fee:"unconfirmed",
       note:"Permanent makeup falls under Alabama's body art rules, not the Board of Cosmetology and Barbering. Practitioner permit plus a permitted body art facility; bloodborne pathogens training required. An Alabama cosmetology or esthetics licence does NOT authorise cosmetic tattooing on its own. Exact permit fee and training hours not established from a primary source.",
       source:"American Academy of Micropigmentation state directory (names ADPH Division of Food, Milk and Lodging); AMA Academy 2026 state compilation", verified:false},

  AK: {vendor:"Alaska Board of Barbers and Hairdressers (Dept. of Commerce, Community & Economic Development)", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"UNUSUAL: Alaska puts tattooing AND permanent cosmetic coloring under the same occupational board that licenses hairdressers and estheticians, rather than under a health department. Secondary sources report roughly 250 training hours for the permanent cosmetic colorist practitioner licence. Shop sanitation is separately overseen by Environmental Health. Hours, exam and fees not confirmed from the board's own site — the board page returned 403 during research.",
       source:"American Academy of Micropigmentation state directory; AMA Academy 2026 state compilation (~250 hours)", verified:false},

  AZ: {vendor:"NO state licence — county health departments only (Arizona Barbering & Cosmetology Board does NOT license permanent makeup)", questions:"—", time:"—", pass:"—", fee:"varies by county",
       note:"Arizona is one of the genuinely unregulated states at state level: there is no Arizona permanent makeup or tattoo artist licence. The Barbering & Cosmetology Board treats cosmetic tattooing as outside the cosmetology scope, so an Arizona aesthetician licence neither authorises nor is required for it. Check the county — Maricopa and Pima impose local body art requirements. Verify directly before opening; 'unregulated' does not mean 'no rules'.",
       source:"Arizona Barbering & Cosmetology Board (bcb.az.gov) scope; American Academy of Micropigmentation state directory ('no state-level regulations; check local jurisdictions'); AMA Academy 2026 compilation", verified:false},

  AR: {vendor:"Arkansas Dept. of Health — Body Art Program", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Arkansas licenses cosmetic tattooing artists individually AND requires the establishment to be licensed. Secondary sources report an apprenticeship of roughly six months / 375 hours. Note Arkansas is unusual in that cosmetology licensing ALSO sits inside the Dept. of Health, but the body art licence is a separate credential from an esthetics licence. Hours, exam and fee not confirmed from a primary source.",
       source:"American Academy of Micropigmentation state directory; AMA Academy 2026 state compilation", verified:false},

  CA: {vendor:"COUNTY environmental health departments, under the state Safe Body Art Act (AB 300) — NOT the California Board of Barbering and Cosmetology", questions:"—", time:"—", pass:"—", fee:"set by each county — typically $100–$400 annually for practitioner registration, higher for the facility permit",
       note:"THE CLASSIC COUNTY CASE. The Safe Body Art Act is state law but enforcement is delegated to the local enforcement agency, so you register as a body art practitioner with the county environmental health department where you work — Los Angeles, San Diego, Orange, Santa Clara, Contra Costa and Ventura all run their own programmes and their own fee schedules. Registration requires proof of age, bloodborne pathogens training, and work in a permitted body art facility; it renews annually. A California esthetician licence does NOT authorise permanent makeup, and a body art registration does not authorise facials. Exemption: practitioners applying permanent cosmetics solely under the direction of a physician or surgeon do not need the registration or the facility permit.",
       source:"California Safe Body Art Act (AB 300, 2011); county environmental health body art programmes — LA County Public Health, San Diego County DEH (SBAA guidance PDF), Orange County HCA, Santa Clara County DEH, Contra Costa Health, Ventura County RMA", verified:true},

  CO: {vendor:"Colorado Dept. of Regulatory Agencies (DORA) — Office of Barber and Cosmetology; facilities also under CDPHE body art rules", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"COLORADO REQUIRES BOTH. You must first hold a Colorado cosmetologist or esthetician licence, and then complete 132 contact hours of approved permanent makeup training before performing semi-permanent or permanent makeup. This is the reverse of the health-department model — the beauty regulator owns the credential, and the esthetics licence is a legal prerequisite rather than an alternative. Facility sanitation sits with the Colorado Dept. of Public Health and Environment. The 132-hour figure is consistently reported by DORA-approved schools but was not read on a DORA page (dpo.colorado.gov returned 403 during research), so treat it as unverified.",
       source:"DORA Office of Barber and Cosmetology (dpo.colorado.gov/BarberCosmetology) named as regulator; 132-hour prerequisite reported by multiple DORA-approved training providers and the AMA Academy 2026 compilation", verified:false,
       confidence:"partial — the both-credentials structure is well corroborated; the 132-hour figure needs a DORA primary source"},

  CT: {vendor:"Connecticut Dept. of Public Health — Practitioner Licensing & Investigations (Tattoo Technician licence)", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"$250 initial licence; $200 renewal (biennial); $250 reinstatement",
       note:"Permanent makeup and microblading require a Connecticut Tattoo Technician licence issued by DPH — a health credential, not a beauty one. DPH publishes an apprenticeship pathway (a training permit) and an out-of-state endorsement route. Fees confirmed on portal.ct.gov. What the DPH page does not state, and what still needs confirming, is the exact supervised-hours requirement and whether a written examination is administered.",
       source:"Connecticut Dept. of Public Health, Tattoo Technician licensure pages (portal.ct.gov)", verified:true,
       confidence:"partial — fees, renewal cycle and the apprenticeship pathway confirmed on the DPH site; training hours and any exam still unsourced"},

  DE: {vendor:"Delaware Division of Public Health — body art ESTABLISHMENT licensing", questions:"—", time:"—", pass:"—", fee:"unconfirmed",
       note:"QUIRK: Delaware licenses body art establishments, not individual artists. There is no Delaware permanent makeup artist licence — the legal requirement is that you work in a licensed establishment that meets DPH sanitation standards. The Delaware Board of Cosmetology and Barbering does not issue a cosmetic tattooing credential. Establishment fee and inspection cycle not established from a primary source.",
       source:"American Academy of Micropigmentation state directory ('Body Art Establishments (not Artists)'); AMA Academy 2026 compilation", verified:false},

  DC: {vendor:"CONFLICTING — DC Health body art establishment/operator licensing vs. the DC Board of Barber and Cosmetology", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"SOURCES DISAGREE and this one is not safe to guess at. The American Academy of Micropigmentation directory lists the DC Board of Barber and Cosmetology as the authority; a 2026 industry compilation describes the District as having no district-level requirement. Neither was confirmed on a dc.gov page. Contact DC Health and the Board of Barber and Cosmetology directly before practising in the District.",
       source:"American Academy of Micropigmentation state directory vs. AMA Academy 2026 compilation — the two contradict each other; no dc.gov confirmation obtained", verified:false},

  FL: {vendor:"Florida Dept. of Health — tattoo artist licence, applied for through your COUNTY health department", questions:"—", time:"—", pass:"70% on the bloodborne pathogens and communicable disease course exam", fee:"$60 state tattoo artist licence + $85 biomedical waste generator permit; county fees may apply",
       note:"Florida states it explicitly: microblading, permanent cosmetics and micro-needling using pigments, dyes or ink ARE tattooing. You need a Florida tattoo artist licence — 18 or over, government photo ID, and a certificate of completion from a Department-approved bloodborne pathogens and communicable diseases course passed at 70% or better. You apply through the county health department where you live, and you must name the licensed tattoo establishment you will work in. Because needles and pigment-contaminated waste are generated, a separate $85 Biomedical Waste Generator Permit is also required. A DBPR cosmetology or facial specialist licence does not substitute.",
       source:"Florida Dept. of Health — Tattoo Artist Licensure and 'Microblading, Permanent Cosmetics, and ONLY Micro-needling Using Pigments, Dye, or Ink' (floridahealth.gov)", verified:true},

  GA: {vendor:"Georgia Dept. of Public Health — statewide Body Artist Certification, examined at your COUNTY environmental health office", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"reported $50 per specialty exam — confirm with your county office",
       note:"RECENTLY CHANGED — do not rely on pre-2023 guides. Georgia's statewide body art rules (DPH Chapter 511-3-8) took effect 6 October 2023, with a one-year grace period to 6 October 2024. Georgia certifies body artists by SPECIALTY, and microblading is its own specialty alongside tattooing and piercing. You schedule the exam through your county environmental health office; the exam is drawn from the Rules and Regulations for Body Art. Certification requires current Bloodborne Pathogens, First Aid and CPR training, none of which may expire within six months of your renewal date. The studio is permitted separately. A Georgia Board of Cosmetology esthetics licence is a separate credential and does not cover microblading.",
       source:"Georgia Dept. of Public Health — Body Art programme (dph.georgia.gov/environmental-health/body-art) and DPH Rules Chapter 511-3-8; O.C.G.A. Title 31 Chapter 40", verified:true,
       confidence:"partial — certification structure, specialties, training prerequisites and effective dates confirmed on dph.georgia.gov; exam length and the $50 fee come from a secondary guide"},

  HI: {vendor:"Hawaii Dept. of Health — tattoo artist permit (HAR Title 11)", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Hawaii requires a Department of Health tattoo licence for cosmetic tattooing; secondary sources describe a written and a practical component. The Hawaii Board of Barbering and Cosmetology (DCCA) licenses estheticians separately and its licence does not cover micropigmentation. Exam specifics and fees not established from a health department primary source.",
       source:"American Academy of Micropigmentation state directory; AMA Academy 2026 compilation", verified:false},

  ID: {vendor:"NO state licence — Idaho regulates body art on MINORS only; local public health districts otherwise", questions:"—", time:"—", pass:"—", fee:"varies by health district",
       note:"Idaho has no state permanent makeup or tattoo artist licence. State law addresses tattooing, branding and piercing of minors; day-to-day sanitation oversight, where it exists, is at the public health district. The Idaho Board of Barber and Cosmetology (DOPL) licenses estheticians but does not license cosmetic tattooing. Confirm with your local public health district before opening.",
       source:"American Academy of Micropigmentation state directory (Dept. of Health and Welfare, Licensing & Certification); AMA Academy 2026 compilation ('none at state level')", verified:false},

  IL: {vendor:"Illinois Dept. of Public Health — Body Art Establishment registration (Tattoo and Body Piercing Establishment Registration Act)", questions:"—", time:"—", pass:"—", fee:"unconfirmed",
       note:"IMPORTANT SCOPE RULE: IDPH registers the ESTABLISHMENT, not the individual artist — so the 'licence' belongs to the studio. And Illinois is explicit that microblading and permanent makeup do NOT fall within the cosmetology or esthetics scope of practice regulated by IDFPR. A licensed Illinois esthetician who microblades must do it under the body art establishment registration and must not hold themselves out as practising esthetics while doing it. OSHA bloodborne pathogens certification is required. Registration fee not established from a primary source.",
       source:"Illinois Dept. of Public Health — Body Art Establishments programme (dph.illinois.gov, Body Art Program, dph.bodyart@illinois.gov); IDFPR cosmetology/esthetics scope", verified:true,
       confidence:"partial — the establishment-registration model and the esthetics scope exclusion are confirmed; fees and inspection cycle unsourced"},

  IN: {vendor:"COUNTY health departments, under Indiana state body art rules (410 IAC 1-5)", questions:"—", time:"—", pass:"—", fee:"varies by county",
       note:"Indiana sets body art sanitation standards at state level but permits and inspects at the county health department. There is no Indiana state permanent makeup artist licence. The Indiana Professional Licensing Agency's cosmetology and esthetics licences do not cover cosmetic tattooing. Check the county where the studio sits — Marion County and other urban counties run their own permit systems.",
       source:"American Academy of Micropigmentation state directory (Indiana State Dept. of Public Health); AMA Academy 2026 compilation ('local body-art permit')", verified:false},

  IA: {vendor:"Iowa Dept. of Health and Human Services — tattoo artist permit plus licensed establishment", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Iowa requires a state tattoo artist permit and requires the work to be done in a licensed tattoo establishment; cosmetic tattooing is included. The Iowa Board of Cosmetology Arts and Sciences licenses estheticians separately and that licence does not authorise micropigmentation. Permit fee, renewal and any training requirement not established from a primary source.",
       source:"American Academy of Micropigmentation state directory; AMA Academy 2026 compilation", verified:false},

  KS: {vendor:"Kansas Board of Cosmetology — Cosmetic Tattoo Artist licence (body art division of the same board that licenses estheticians)", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"UNUSUAL AND CONVENIENT: Kansas puts body art and cosmetology under ONE board. The Kansas Board of Cosmetology licenses Tattoo Artists, Cosmetic Tattoo Artists and Body Piercers alongside cosmetologists, estheticians and nail technicians. Cosmetic Tattoo Artist is a distinct licence — an esthetics licence does not include it, and you do not need an esthetics licence to hold it. Apprenticeship hours, exam format and fees are on profession-specific KBOC pages that could not be retrieved during research.",
       source:"Kansas Board of Cosmetology (kansas.gov/kboc) — board scope confirms Tattoo Artist, Body Piercer and Cosmetic Tattoo Artist licensure alongside cosmetology professions", verified:true,
       confidence:"partial — the licence type and the single-board structure are confirmed on the board site; hours, exam and fees are not"},

  KY: {vendor:"LOCAL health departments, under the Kentucky Cabinet for Health and Family Services (902 KAR 45:065)", questions:"—", time:"—", pass:"—", fee:"varies by local health department",
       note:"Kentucky's body art rules are state regulations administered by the local health department for the county where you work — you register there, not with a state board. The Kentucky Board of Cosmetology does not license cosmetic tattooing. Registration fees and any training requirement vary locally and were not established from a primary source.",
       source:"American Academy of Micropigmentation state directory (Cabinet for Health and Family Services working with the county board of health); AMA Academy 2026 compilation", verified:false},

  LA: {vendor:"Louisiana Dept. of Health — commercial body art OPERATOR permit plus FACILITY permit (LAC Title 51, Part XXVIII)", questions:"—", time:"—", pass:"—", fee:"unconfirmed",
       note:"Louisiana's body art rules explicitly name COSMETIC TATTOOING alongside tattooing, piercing, branding and scarification, so permanent makeup and microblading are squarely inside them. Both the operator and the facility are permitted. A valid bloodborne pathogens certificate is a prerequisite for the operator permit, and the facility must maintain a written Exposure Control Plan and comply with OSHA. Out-of-state applicants must show a valid registration or licence from another state or local authority. The Louisiana State Board of Cosmetology's esthetician licence covers the esthetics services, not the tattooing. Permit fees not established — ldh.la.gov returned 403 during research.",
       source:"Louisiana Dept. of Health, Commercial Body Art programme (ldh.la.gov/page/commercial-body-art) as reported in search results; LAC Title 51 Part XXVIII; La. R.S. Title 40 Chapter 33", verified:false,
       confidence:"partial — the operator/facility permit structure, cosmetic tattooing coverage and BBP/ECP requirements are consistently described; the LDH page itself could not be fetched, and fees are unsourced"},

  ME: {vendor:"Maine Dept. of Health and Human Services — Health Inspection Program (tattoo artist and micropigmentation practitioner licences)", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Maine licenses a MICROPIGMENTATION PRACTITIONER as its own category, distinct from the general tattoo artist licence — one of a small number of states to name permanent makeup separately in statute. Licensing sits with DHHS environmental and community health, not with the Maine Board of Cosmetology. Training hours, exam and fees not established from a primary source.",
       source:"American Academy of Micropigmentation state directory (Division of Environmental and Community Health); AMA Academy 2026 compilation ('practitioner license')", verified:false},

  MD: {vendor:"NO state body art licence — county and municipal health rules; Maryland Board of Cosmetologists prohibits it in licensed salons", questions:"—", time:"—", pass:"—", fee:"varies by jurisdiction",
       note:"Maryland has no statewide tattoo or permanent makeup practitioner licence. Requirements are set county by county — Baltimore City and several counties impose their own body art rules. Separately, cosmetic tattooing is treated as outside the cosmetology scope and is not permitted in a licensed Maryland salon. Verify with the local health department AND check the salon-premises restriction before signing a lease.",
       source:"American Academy of Micropigmentation state directory (Maryland Dept. of Labor); AMA Academy 2026 compilation ('local rules; prohibited in salons')", verified:false},

  MA: {vendor:"LOCAL boards of health, under the Massachusetts model body art regulations (105 CMR 300.000 framework)", questions:"—", time:"—", pass:"—", fee:"set by each municipality",
       note:"Massachusetts has no state body art practitioner licence. Each city or town board of health adopts body art regulations and issues the practitioner permit and the establishment permit — so the rule genuinely changes at the town line. Bloodborne pathogens training and hepatitis B vaccination or declination are standard local requirements. The Massachusetts Board of Registration of Cosmetology and Barbering licenses aestheticians but not cosmetic tattooing.",
       source:"American Academy of Micropigmentation state directory (Massachusetts Dept. of Public Health, local board of health administration); AMA Academy 2026 compilation", verified:false},

  MI: {vendor:"Michigan Dept. of Health and Human Services — body art FACILITY licence (MCL 333.13101 et seq.)", questions:"—", time:"—", pass:"—", fee:"unconfirmed",
       note:"Michigan names MICROBLADING directly in the statute: an individual shall not tattoo, brand, microblade or body pierce another individual unless it occurs at a body art facility licensed by MDHHS. The licence attaches to the FACILITY, not the artist — Michigan does not issue an individual permanent makeup licence. Working out of an unlicensed premises is the violation. LARA's cosmetology board licenses estheticians separately and that licence does not cover microblading. Facility fee and inspection cycle not read from the MDHHS page.",
       source:"Michigan Compiled Laws 333.13104 (legislature.mi.gov); MDHHS Body Art Licensing programme (michigan.gov/mdhhs/doing-business/licensing/body-art)", verified:true,
       confidence:"partial — the microblading-in-statute language and facility-licensing model are confirmed; fees and inspection detail are not"},

  MN: {vendor:"Minnesota Dept. of Health — body art technician licence (Minn. Stat. ch. 146B)", questions:"—", time:"—", pass:"—", fee:"set under Minn. Stat. 146B.10 — amount unconfirmed",
       note:"Minnesota licenses the TECHNICIAN, at state level, through MDH. A tattoo technician licence requires a minimum of 200 hours of supervised tattooing experience; a dual licence adds the piercing requirements. Every applicant must complete at least five hours of coursework within the year before applying, covering bloodborne pathogens, disease transmission prevention, infection control and aseptic technique — Red Cross, OSHA and the Alliance of Professional Tattooists are named as acceptable providers. The licence runs two years and renewal requires continuing education. The statute regulates tattooing generally and does not carve permanent makeup out, so cosmetic tattooing is covered.",
       source:"Minnesota Statutes 146B.03, Body Art Technician Licensure (revisor.mn.gov)", verified:true,
       confidence:"partial — hours, coursework, term and renewal confirmed in statute; the fee schedule sits in 146B.10 and was not read"},

  MS: {vendor:"Mississippi State Dept. of Health — tattoo artist licence", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Mississippi requires an MSDH tattoo licence for cosmetic tattooing; secondary sources describe an apprenticeship of roughly nine months. The Mississippi State Board of Cosmetology licenses estheticians separately. Apprenticeship length, exam and fees not established from a primary source.",
       source:"American Academy of Micropigmentation state directory; AMA Academy 2026 compilation (~9 months apprenticeship)", verified:false},

  MO: {vendor:"Missouri Division of Professional Registration — Office of Tattooing, Body Piercing and Branding (20 CSR 2267)", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Missouri is one of the few states with a dedicated occupational office for tattooing rather than a health-department programme, sitting inside the Division of Professional Registration alongside the cosmetology board. Both the artist and the establishment are licensed. Secondary sources report an apprenticeship of roughly 300 hours. The pr.mo.gov pages returned 503 during research, so hours, exam and fees are unconfirmed.",
       source:"Missouri Code of State Regulations Title 20 Division 2267 (Office of Tattooing, Body Piercing and Branding); AMA Academy 2026 compilation (~300 hours)", verified:false},

  MT: {vendor:"Montana Dept. of Public Health and Human Services with local health departments — body art licence", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Montana body art licensing runs through DPHHS with county-level administration. The Montana Board of Barbers and Cosmetologists licenses estheticians but does not license cosmetic tattooing. Fee, training and renewal detail not established from a primary source; confirm with your county health department.",
       source:"American Academy of Micropigmentation state directory; AMA Academy 2026 compilation ('county (MT DPHHS)')", verified:false},

  NE: {vendor:"Nebraska Dept. of Health and Human Services — PERMANENT COLOR TECHNICIAN licence, plus a licensed body art facility", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"NAMED CATEGORY: Nebraska licenses a 'Permanent Color Technician' — a practitioner who applies permanent makeup and cosmetic tattoos — as a distinct body art profession alongside Tattoo Artist, Body Piercer and Brander. You must hold the Nebraska licence AND practise in a Nebraska-licensed body art facility. All licences expire on 31 March of odd-numbered years, and renewal requires at least two hours of bloodborne pathogens training completed within the previous 24 months, covering sanitation, infection control and sterilisation. Fees and initial training hours were not on the page read.",
       source:"Nebraska Dept. of Health and Human Services — Body Art Profession licensure (dhhs.ne.gov/licensure/Pages/Body-Art-Profession.aspx)", verified:true,
       confidence:"partial — licence categories, facility requirement, renewal date and the BBP continuing-education rule confirmed; fees and entry training hours unsourced"},

  NV: {vendor:"COUNTY health authorities — Southern Nevada Health District (Clark County) and Washoe County Health District; no statewide Nevada licence", questions:"—", time:"—", pass:"—", fee:"varies by health district",
       note:"Nevada has no state permanent makeup licence. Body art is permitted and inspected by the county health authority: the Southern Nevada Health District runs the Clark County programme covering tattoo and permanent makeup artists and establishments, and Washoe County runs its own. The Nevada State Board of Cosmetology licenses estheticians but does not license cosmetic tattooing. Fee schedules are set district by district and were not retrievable during research.",
       source:"Southern Nevada Health District Body Art programme (southernnevadahealthdistrict.org); American Academy of Micropigmentation state directory (Division of Public and Behavioral Health plus SNHD)", verified:false,
       confidence:"partial — the county-permit model and SNHD's role are confirmed; fee amounts and any state-level rule are unsourced"},

  NH: {vendor:"New Hampshire Office of Professional Licensure and Certification — body art practitioner licensure", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"New Hampshire licenses tattoo artists and body art practitioners through OPLC — the same agency that houses barbering, cosmetology and esthetics — rather than through a health department. SOURCES CONFLICT on the entry route: one directory describes a three-year apprenticeship with a licensed artist, another describes a microblading certificate from an accredited course. Resolve with OPLC before enrolling anywhere; the difference is years of your life.",
       source:"American Academy of Micropigmentation state directory ('apprentice with a licensed Artist for at least three years') vs. AMA Academy 2026 compilation ('microblading certificate; accredited course') — the two contradict each other", verified:false},

  NJ: {vendor:"LOCAL health departments, under New Jersey Dept. of Health body art rules (N.J.A.C. 8:27)", questions:"—", time:"—", pass:"—", fee:"varies by municipality",
       note:"New Jersey sets body art standards at state level in N.J.A.C. 8:27 but the operator registration and establishment licence are issued and inspected by the LOCAL health department. Secondary sources describe 40 or more hours of permanent makeup training as a common local expectation. The New Jersey Board of Cosmetology and Hairstyling does not license cosmetic tattooing. Confirm with the municipal health officer for the town the studio sits in.",
       source:"American Academy of Micropigmentation state directory (NJ Dept. of Health); AMA Academy 2026 compilation ('local health department; 40+ hours PMU training')", verified:false},

  NM: {vendor:"New Mexico Board of Body Art Practitioners (Regulation & Licensing Dept.) — PERMANENT COSMETICS PRACTITIONER licence", questions:"unconfirmed — Professional Credential Services (PCS) exam, per-specialty index published by the board", time:"unconfirmed", pass:"75%", fee:"$100 initial practitioner licence; $100 renewal; $50 apprentice registration; $300 establishment licence; $100 expedited licensure from an approved state",
       note:"New Mexico runs a dedicated Board of Body Art Practitioners — separate from the Board of Barbers and Cosmetologists — and licenses Permanent Cosmetics Practitioners as their own category alongside tattoo artists, body piercers and scarification practitioners. The route is an apprenticeship under a licensed sponsor with a documented apprentice log; tattoo artists serve 1,400 hours and body piercers 1,200 (the permanent cosmetics figure was not published on the page read). Every applicant must hold current CPR, First Aid AND bloodborne pathogens certification, and must keep all three current at each annual renewal. The exam is administered by Professional Credential Services and requires 75% to pass. Military and veteran applicants may qualify for a fee waiver.",
       source:"New Mexico Regulation & Licensing Dept., Board of Body Art Practitioners — board page and Licensing, Registration and Renewal page (rld.nm.gov)", verified:true,
       confidence:"partial — licence category, exam vendor, 75% cut score, fees and certification requirements confirmed; the permanent-cosmetics apprenticeship hour count specifically was not published on the page"},

  NY: {vendor:"COUNTY health departments and NYC DOHMH — no statewide New York artist licence (NYS Public Health Law Article 4-A)", questions:"—", time:"—", pass:"—", fee:"NYC: $100 Tattoo Artist Licence + $26 Infection Control Course; other counties vary",
       note:"New York State sets tattoo law in Public Health Law Article 4-A but does not issue a statewide artist licence — permits come from the county. In New York City the Department of Health and Mental Hygiene issues a $100 Tattoo Artist Licence, and every applicant, including microblading, scalp micropigmentation and micro-needling practitioners, must first complete the four-hour Infection Control Course for Tattoo and Permanent Makeup Artists ($26, run twice a month). Nassau County issues its own Tattoo/Body Piercing Artist Certification. NYSDOH has been reported to be working toward a statewide programme — check whether that has landed before relying on this entry. The NYS Dept. of State Division of Licensing Services licenses estheticians separately.",
       source:"New York City Dept. of Health and Mental Hygiene — Infection Control Training for Tattoo and Permanent Makeup Artists (nyc.gov); Nassau County Dept. of Health tattoo/body piercing certification; NYS Public Health Law Article 4-A", verified:true,
       confidence:"partial — the NYC licence, course and fees are confirmed; the other 61 counties each set their own rule and a statewide programme may be in progress"},

  NC: {vendor:"COUNTY health departments, under N.C.G.S. 130A-283 — tattoo artist permit", questions:"—", time:"—", pass:"—", fee:"state-set annual permit fee — commonly reported as $250; confirm with your county",
       note:"North Carolina requires a tattoo artist permit issued by the local health department, renewed annually, under a state statute. The NC Board of Cosmetic Art Examiners licenses estheticians but does not license cosmetic tattooing. The permit fee figure comes from secondary sources and was not confirmed on a state or county page.",
       source:"American Academy of Micropigmentation state directory (NC Dept. of Health and Human Services); AMA Academy 2026 compilation", verified:false},

  ND: {vendor:"CONFLICTING — North Dakota Health and Human Services vs. no state-level regulation", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"SOURCES DISAGREE. One directory names the North Dakota Department of Health as the authority; a 2026 compilation lists North Dakota as unregulated at state level with local control. Neither was confirmed on an nd.gov page. Do not rely on this entry — contact North Dakota HHS and your city or county health authority before practising.",
       source:"American Academy of Micropigmentation state directory vs. AMA Academy 2026 compilation — the two contradict each other; no nd.gov confirmation obtained", verified:false},

  OH: {vendor:"LOCAL health districts, approved by the Ohio Dept. of Health (ORC 3730; OAC 3701-9)", questions:"—", time:"—", pass:"—", fee:"set by each local health district",
       note:"Ohio defines PERMANENT COSMETICS in the Administrative Code as a tattoo — expressly including permanent makeup, micropigment implantation, dermagraphics and MICROBLADING. Facilities are licensed by the local health district where they sit, not by the state, and plans must be submitted for pre-approval before you open. Ohio does not issue an individual state artist licence, so the operative requirement is a licensed facility plus whatever the local district demands. The Ohio State Cosmetology and Barber Board licenses estheticians separately and that licence does not cover permanent cosmetics.",
       source:"Ohio Dept. of Health Body Art Program (odh.ohio.gov); Ohio Revised Code Chapter 3730 and Ohio Administrative Code Chapter 3701-9 (definition of 'permanent cosmetics')", verified:true,
       confidence:"partial — the statutory definition and local-district licensing model are confirmed; individual district fees and any practitioner requirements vary and were not collected"},

  OK: {vendor:"Oklahoma State Dept. of Health — tattoo/body piercing artist and facility licensing (63 O.S. §1-1530)", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Oklahoma licenses both the artist and the facility through the State Department of Health; one 2026 compilation describes a permanent makeup specialist licence specifically. The Oklahoma State Board of Cosmetology and Barbering licenses estheticians separately. Apprenticeship hours, exam and fees not established from a primary source — the OSDH page could not be retrieved during research.",
       source:"American Academy of Micropigmentation state directory; AMA Academy 2026 compilation ('PMU specialist license')", verified:false},

  OR: {vendor:"Oregon Health Authority — Health Licensing Office, Board of Electrologists and Body Art Practitioners (tattoo artist licence)", questions:"100 multiple choice", time:"100 minutes", pass:"75%", fee:"unconfirmed — HLO publishes a separate fee schedule",
       note:"Oregon runs one of the most demanding entry routes in the country and it covers cosmetic tattooing. You must complete 360 hours at an Oregon-licensed tattoo career school — 210 theory and 150 practical — plus documentation of at least 50 COMPLETED procedures, meaning finished including touch-ups after healing and the client released from service. Practical training on the public is one-to-one supervised by a registered teacher. The written exam is 100 questions in 100 minutes, 75% to pass, taken on a walk-in basis at the Health Licensing Office in Salem, Monday to Friday 9am to 1pm, and must be passed within two years of application. The licence runs one year and renewal attests to current CPR, first aid and bloodborne pathogens certification plus continuing education.",
       source:"Oregon Health Authority Health Licensing Office — Board of Electrologists and Body Art Practitioners, Tattoo Artists licence and continuing education pages (oregon.gov/oha/ph/hlo); OAR Chapter 331", verified:true,
       confidence:"partial — hours, procedure count, exam format and renewal confirmed on the HLO pages; the fee schedule sits on a separate page not read"},

  PA: {vendor:"NONE at state level — no Pennsylvania tattoo or permanent makeup licence; local health departments (e.g. Philadelphia, Allegheny County) only", questions:"—", time:"—", pass:"—", fee:"varies by local health department, where one exists",
       note:"MAJOR OUTLIER, AND A TRAP. Pennsylvania does not license tattoo artists or microblading artists at all — there is no state health regulation of the practice and no certification requirement. The only statewide rule is the 2001 law prohibiting tattooing of anyone under 18. Separately, the Pennsylvania State Board of Cosmetology has taken the position that microblading is OUTSIDE the cosmetology scope, and 49 Pa. Code §7.77 bars using a licensed salon for anything other than cosmetology — so a licensed Pennsylvania salon is the one place you cannot legally do it. Cities and counties with their own health departments may impose local requirements. Legislation to regulate the industry has been introduced repeatedly and has not passed; check whether that changed before relying on this.",
       source:"Pennsylvania State Board of Cosmetology position on microblading and 49 Pa. Code §7.77, as analysed by Tucker Arensberg P.C. (2023); American Academy of Micropigmentation state directory ('no state level health regulations … services are not allowed in salons')", verified:false,
       confidence:"partial — the absence of state licensure and the salon-premises prohibition are consistently reported across independent sources, but neither was read on a pa.gov page"},

  RI: {vendor:"Rhode Island Dept. of Health — body art practitioner licence AND establishment licence", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Rhode Island licenses both the artist and the parlour through the Department of Health — one of the states that regulates the individual, not just the premises. The RI Dept. of Health also houses hairdressing and barbering licensure, but the esthetics licence does not cover cosmetic tattooing. Training hours, exam and fees not established from a primary source.",
       source:"American Academy of Micropigmentation state directory ('license for Tattoo Artist and also for Tattoo Parlor'); AMA Academy 2026 compilation", verified:false},

  SC: {vendor:"SOUTH CAROLINA BOARD OF MEDICAL EXAMINERS — micropigmentation is restricted to PHYSICIANS", questions:"—", time:"—", pass:"—", fee:"—",
       note:"THE MOST IMPORTANT ENTRY IN THIS FILE. South Carolina does not permit lay practitioners to perform permanent makeup. S.C. Regs 61-111.900 provides that tattoo removal, micropigmentation and permanent cosmetic procedures shall be provided only by physicians or other legally authorised healthcare providers, and the Board of Medical Examiners' micropigmentation policy holds that because the procedure structurally alters tissue it is the practice of medicine. A physician may delegate the procedure to an employee, but only where the physician directs the course of treatment, directly supervises the person performing it, and is physically present on site for the entire procedure. Separately, S.C. Code Title 44 Chapter 34 prohibits tattooing of the head, face and neck, and the Board treats permanent cosmetics as a specialty outside the tattoo statute altogether. Do not train for a South Carolina tattoo licence expecting it to authorise brows.",
       source:"South Carolina Board of Medical Examiners, Micropigmentation policy (llr.sc.gov/med/Policies); S.C. Regs 61-111.900; S.C. Code Title 44 Chapter 34", verified:true},

  SD: {vendor:"South Dakota Dept. of Health with local authorities — minimal state-level body art regulation", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"South Dakota is reported to have little or no state-level licensure of tattoo or permanent makeup artists, with any requirements set locally. The South Dakota Cosmetology Commission licenses estheticians separately. Not confirmed from a state primary source — verify with the Department of Health and your municipality.",
       source:"American Academy of Micropigmentation state directory (SD Dept. of Health); AMA Academy 2026 compilation ('minimal state regulation')", verified:false},

  TN: {vendor:"Tennessee Dept. of Health — tattoo artist licence and tattoo studio licence (T.C.A. Title 62, Ch. 38)", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Tennessee licenses both the artist and the studio through the Department of Health, and cosmetic tattooing is included. The Tennessee Board of Cosmetology and Barber Examiners licenses estheticians separately and that licence does not cover micropigmentation. Age, training, exam and fee detail not established — the TN health page could not be retrieved during research.",
       source:"American Academy of Micropigmentation state directory ('artist + establishment license'); AMA Academy 2026 compilation", verified:false},

  TX: {vendor:"Texas Dept. of State Health Services — tattoo STUDIO licence (Health & Safety Code Ch. 146)", questions:"—", time:"—", pass:"—", fee:"unconfirmed",
       note:"IMPORTANT STRUCTURE: Texas licenses the STUDIO, not the individual artist. DSHS states that any business inserting pigment under the skin with needles, scalpels or related equipment must be licensed — and names traditional tattooing, PERMANENT COSMETICS, MICROBLADING and scarification explicitly. Licences are site-specific, carry the studio's name and physical address, and must be displayed prominently; the premises must be a permanent non-dwelling building. Note the split: your permanent makeup practice sits with DSHS, but if you also do lashes, brows or facials that side sits with TDLR. A TDLR cosmetology or esthetician licence does not authorise cosmetic tattooing, and a DSHS studio licence does not authorise esthetics.",
       source:"Texas Dept. of State Health Services — Licensing Requirements, Tattoo and Body Piercing Studios (dshs.texas.gov); Texas Health & Safety Code Chapter 146", verified:true,
       confidence:"partial — the studio-licence model, covered services and facility standards are confirmed on dshs.texas.gov; the fee schedule and licence term were not published on that page"},

  UT: {vendor:"LOCAL health departments (e.g. Salt Lake County Health Dept.) — no statewide Utah practitioner licence", questions:"—", time:"—", pass:"—", fee:"varies by local health department",
       note:"Utah body art regulation is largely local: county health departments issue body art establishment and practitioner permits and run inspections. The Utah Division of Professional Licensing licenses estheticians and cosmetologists but does not license cosmetic tattooing. Confirm with the local health department for the county the studio sits in.",
       source:"American Academy of Micropigmentation state directory (Utah Dept. of Health); AMA Academy 2026 compilation ('county; largely unregulated at state level')", verified:false},

  VT: {vendor:"Vermont Office of Professional Regulation (Secretary of State) — tattooist and body piercer licensure", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Vermont licenses tattooists through the Office of Professional Regulation inside the Secretary of State's office, alongside barbers and cosmetologists — not through a health department. One directory reports a minimum of 60 hours of training at a state-approved course for permanent cosmetics. Hours, exam and fees not confirmed from an OPR page.",
       source:"American Academy of Micropigmentation state directory ('Secretary of the State; 60 hour minimum training at a state approved training course'); AMA Academy 2026 compilation", verified:false},

  VA: {vendor:"Virginia Board for Barbers and Cosmetology (DPOR) — PERMANENT COSMETIC TATTOOER and MASTER PERMANENT COSMETIC TATTOOER licences", questions:"unconfirmed — board-approved exam", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Virginia is the cleanest example of the occupational-board model. Va. Code §54.1-700 defines TATTOOING to expressly include permanent make-up, and §54.1-703 requires a licence from the Board for Barbers and Cosmetology before practising tattooing, body-piercing or esthetics — so the same board that licenses your esthetician licences your cosmetic tattooing, as two distinct credentials. 18VAC41-50 sets the routes: an approved apprenticeship in a licensed tattoo parlour, an approved programme in a licensed tattoo school, or a permanent cosmetic tattooing training programme in a licensed school. Out-of-state applicants may substitute three years of documented work experience plus board-approved health education in bloodborne pathogens, sterilisation, aseptic technique and first aid. All routes end in a board-approved examination administered by the board or its designated testing service. The regulation does not state hour minimums on the sections read.",
       source:"Virginia Code §54.1-700 and §54.1-703 (law.lis.virginia.gov); 18VAC41-50-20 and 18VAC41-50-30; Virginia Board for Barbers and Cosmetology (DPOR)", verified:true,
       confidence:"partial — statutory definitions, licence categories and the exam requirement are confirmed; training hours, exam format and fees are not published in the sections read"},

  WA: {vendor:"Washington State Dept. of Licensing — PERMANENT COSMETICS ARTIST licence (not Labor & Industries)", questions:"—", time:"—", pass:"—", fee:"$275 artist licence, $275 annual renewal ($385 if late), $330 per shop or mobile-unit location, $5 to print a licence",
       note:"Washington issues four separate body art credentials — Tattoo Artist, Body Piercing Artist, Body Art Artist (branding and scarification) and PERMANENT COSMETICS ARTIST, which covers permanent eyeliner, eyebrows, lip colour and re-pigmentation. Requirements are strikingly light on paper: 18 or over and a current, active bloodborne pathogens certificate. There is NO state examination and NO minimum training hours. The licence runs one year and can be renewed up to 120 days early; the shop or mobile unit is licensed separately at $330 per location. Note that some third-party guides name Labor & Industries or quote $250 — the Department of Licensing is the regulator and its published artist fee is $275.",
       source:"Washington State Dept. of Licensing — Tattoos, body piercing, body art and permanent cosmetics: 'Get your license' and 'Fees' pages (dol.wa.gov)", verified:true},

  WV: {vendor:"West Virginia Dept. of Health — Office of Environmental Health Services (tattoo studio and artist permits, W. Va. Code §16-38)", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"West Virginia permits tattoo studios and artists through the state health department's environmental health office; cosmetic tattooing is included. The WV Board of Barbers and Cosmetologists licenses estheticians separately. Permit fees, training and any exam not established from a primary source.",
       source:"American Academy of Micropigmentation state directory (WV Dept. of Health and Human Resources); AMA Academy 2026 compilation", verified:false},

  WI: {vendor:"Wisconsin Dept. of Safety and Professional Services — tattooist licence plus tattoo establishment licence (Wis. Stat. ch. 463)", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"set under Wis. Stat. §440.03(9) — amount unconfirmed",
       note:"Wisconsin licenses the artist AND the establishment, through DSPS — the same department that houses the Cosmetology Examining Board, but as an entirely separate credential. QUIRK worth knowing: under §463.16, a local health department serving a jurisdiction of more than 5,000 people may act as DSPS's agent, issue the licences itself and set its own fees, so in some Wisconsin cities you apply locally rather than to Madison. Chapter 463 defines tattooing by cross-reference to §948.70(1)(b) and does not carve out cosmetic tattooing, but the chapter text read did not name permanent makeup explicitly — confirm coverage with DSPS if your work is brows-only.",
       source:"Wisconsin Statutes Chapter 463, §463.10, §463.12 and §463.16 (docs.legis.wisconsin.gov); Wisconsin DSPS", verified:true,
       confidence:"partial — the dual artist/establishment licence and the local-agent rule are confirmed in statute; fees, training and the explicit PMU coverage are not"},

  WY: {vendor:"NO state licence — local authorities only", questions:"—", time:"—", pass:"—", fee:"varies locally",
       note:"Wyoming has no state tattoo or permanent makeup practitioner licence. The Wyoming Board of Cosmetology licenses estheticians but does not license cosmetic tattooing. Any requirement will come from the city or county — verify locally before opening, and note that being unlicensed does not exempt you from the OSHA bloodborne pathogens standard or from liability.",
       source:"American Academy of Micropigmentation state directory (Wyoming Dept. of Health); AMA Academy 2026 compilation ('none at state level')", verified:false},
  },

  genericSpecNote: "Permanent makeup regulation not yet verified for this jurisdiction. Across the 51 jurisdictions the pattern is: a state health department body-art permit, a county health department permit, an occupational-board tattoo or permanent cosmetics licence, or no state requirement at all — and a cosmetology or esthetics licence is almost never sufficient on its own. Contact BOTH the state cosmetology board and the state or county health department before training, and assume the OSHA bloodborne pathogens standard applies regardless of what your state licenses.",
};
