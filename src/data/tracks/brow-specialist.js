// Brow Specialist — Brow Lamination, Tinting & Microblading. A "state" track with a SPLIT
// regulator in most jurisdictions, which is the single thing this file exists to teach.
//
// Read src/data/tracks/CONTRACT.md before editing.
//
// A brow menu straddles a legal line that runs straight through the middle of it:
//
//   SHAPING, WAXING, THREADING, TINTING, LAMINATION  → esthetics / cosmetology scope,
//        licensed by the state beauty board. Chemical but non-invasive.
//   MICROBLADING (and nano brows, powder brows, ombré) → tattooing. A blade or needle deposits
//        pigment beneath the epidermis, so it meets the statutory definition of a tattoo almost
//        everywhere, and the regulator changes to a health department — sometimes the county.
//
// So the same technician, in the same chair, doing two services back to back, is frequently
// answering to two agencies under two rulebooks with two renewal cycles. Every stateSpecs entry
// below therefore names BOTH sides where a split exists. Where a state was not established from
// a primary source, verified:false, and the note says what is and is not established.
//
// Watch particularly: IL and PA (microblading expressly outside cosmetology scope), SC
// (micropigmentation restricted to physicians), CO (esthetics licence is a PREREQUISITE for PMU),
// GA (microblading is its own health-department specialty exam), CA/NV/NY/OH (county-level).

export default {
  id:       "brow-specialist",
  name:     "Brow Specialist",
  full:     "Brow Specialist / Brow Lamination & Microblading",
  category: "Beauty",
  accent:   "beauty",
  type:     "certification",
  scope:    "state",
  tagline:  "Shaping, tinting, lamination and microblading — one service menu, two regulators in most states.",

  lessons: [
  {t:"Brow Mapping, Anatomy & the Hair Cycle", d:"Golden ratio, bone structure, anagen brows", len:"20 min",
   script:"Brows frame the face, and mapping is what stops a good technique producing a bad result. Use the golden ratio, roughly one to one point six one eight, to place the start above the inner corner, the arch about two thirds along, and the tail on the line from the nostril through the outer canthus. Then read the bone, not just the hair — the supraorbital ridge dictates where an arch can sit without looking painted on. Brow hair has a much shorter growth cycle than scalp hair, around four months in total, so an over-plucked brow takes a season to recover, and a client on a growth cycle you have not asked about will judge you on hair you never touched."},

  {t:"Shaping Methods & Skin Safety", d:"Waxing, threading, tweezing, sugaring — and when to refuse", len:"20 min",
   script:"Four methods, four risk profiles. Waxing is fast but lifts the stratum corneum, so it is contraindicated on skin thinned by retinoids, acids, isotretinoin or recent chemical peels — that is how you take a strip of skin off a brow bone. Threading is precise and does not touch the skin surface, which makes it the safer choice on sensitised or retinoid-treated skin. Tweezing is for strays and for control. Sugaring is water soluble, applied at body temperature, and removes in the direction of growth, so it is gentler. Whatever you use, one stick, one dip. Double dipping a wax pot is the most common sanitation citation in the whole industry."},

  {t:"Lamination Chemistry: Thioglycolate & Timing", d:"Bond breaking, neutralising, and over-processing", len:"25 min",
   script:"Brow lamination is a perm on very small hair. The lifting solution — usually ammonium thioglycolate, sometimes cysteamine — reduces the disulphide bonds in the hair's keratin so it can be combed into a new direction. The setting solution re-oxidises those bonds and locks the shape in. The whole result lives inside the timer. Typical ranges are six to twelve minutes for the lift and a similar window for the set, and you shorten both for fine, light, previously laminated or chemically treated hair. Over-processing is not recoverable. The hair goes dry, frizzy and brittle, then it snaps at the follicle, and your client has no brows for a season."},

  {t:"Tinting, Henna & Patch Testing", d:"Oxidative dye, PPD, staining the skin as well as the hair", len:"20 min",
   script:"Tint is an oxidative dye. It uses a developer, usually a low-volume hydrogen peroxide, and many tints contain paraphenylenediamine or a close relative, which is a well-documented contact allergen. Henna is different chemistry — a plant stain that colours the skin beneath as well as the hair, which is why it suits sparse brows, and why so-called black henna adulterated with paraphenylenediamine has caused severe chemical burns. Patch test every new client forty-eight hours ahead, behind the ear or in the inner elbow, and log it. Never tint over broken skin or immediately after waxing. And never apply lash or brow tint that is not labelled for use near the eye."},

  {t:"Microblading Is Tattooing", d:"Why the law reclassifies your brow service", len:"22 min",
   script:"This is the lesson that keeps people licensed. A microblade is a row of fine needles on a handle. It opens the epidermis and deposits pigment into the upper dermis. That is the statutory definition of tattooing in most states, and it is why microblading — along with nano brows, powder brows and ombré — is regulated as body art even though it is sold as a brow service and taught in beauty schools. The practical consequences are concrete: a different regulator, often a health department rather than a cosmetology board; a bloodborne pathogens certificate; single-use blades and a sharps container; and in several states a rule that you may not perform it inside a licensed salon at all."},

  {t:"Sanitation, Consent & Documentation", d:"Cross-contamination, records and the consult form", len:"18 min",
   script:"Non-invasive brow work still transmits infection. Wax sticks, mascara wands, micro-brushes, cotton buds and applicators are single use. Tweezers and scissors are cleaned, disinfected for the full contact time on the label, and stored dry and covered. Microblading adds a whole layer: barrier film, single-use blades, a sharps container at the point of use, and a written exposure control plan. Your consent form should name the service, record patch test dates and results, list the products and — for pigment work — the brand, colour and lot number, disclose that colour fades and shifts, and confirm the client is over eighteen. Photograph before and after. Records get requested when something goes wrong, not before."},

  {t:"State Regulation, Scope & the Microblading Split", d:"State-specific — the two agencies you answer to", len:"22 min", stateSpecific:true,
   script:null},
  ],

  summarySections: [
  {h:"Design & Shaping", items:["Golden ratio mapping — start, arch, tail", "Reading the supraorbital ridge, not just the hair", "Waxing vs. threading vs. tweezing vs. sugaring, and the risk profile of each", "Retinoids, acids, isotretinoin and recent peels as shaping contraindications", "One stick, one dip — never double dip a wax pot"]},
  {h:"Chemistry", items:["Lamination: ammonium thioglycolate or cysteamine breaks disulphide bonds", "Setting solution re-oxidises and locks the new shape", "Typical timings ≈ 6–12 minutes, shortened for fine or processed hair", "Tint: oxidative dye plus low-volume peroxide; PPD is a known allergen", "Henna stains skin as well as hair; 'black henna' adulterated with PPD causes burns"]},
  {h:"The Microblading Line", items:["A microblade deposits pigment into the upper dermis — legally a tattoo", "Nano, powder and ombré brows fall the same side of the line", "Different regulator: usually a health department, sometimes the county", "Bloodborne pathogens certificate, single-use blades, sharps container", "Several states bar it from licensed cosmetology salons entirely"]},
  {h:"State Regulation Module", items:["Which board licenses your shaping, tinting and lamination", "Which agency licenses microblading in the same state", "Whether an esthetics licence is a prerequisite, an alternative, or irrelevant", "Training hours, exams and fees on each side of the split", "States where microblading is restricted or prohibited outright"]},
  ],

  quiz: [
  {q:"Brow lamination works by:",
   opts:["Bleaching the melanin in the hair", "Breaking the hair's disulphide bonds so it can be reshaped, then re-forming them", "Coating each hair in a setting polymer", "Dissolving the hair cuticle"], a:1,
   explanation:"Lamination is a perm. Ammonium thioglycolate or cysteamine reduces the disulphide bonds in keratin; the setting solution re-oxidises them, fixing the hair in its new direction."},

  {q:"The golden ratio used in brow mapping is approximately:",
   opts:["1 to 1.5", "1 to 2", "1 to 1.618", "1 to 1"], a:2,
   explanation:"Phi, roughly 1:1.618, is the proportion used to place the start, arch and tail relative to facial landmarks."},

  {q:"Over-processing during a lamination produces:",
   opts:["A longer-lasting result", "Dry, frizzy, brittle hair that breaks at the follicle", "Deeper colour uptake", "No effect — the hair simply relaxes"], a:1,
   explanation:"Once too many disulphide bonds are broken, the hair's structure cannot be restored by the setting solution. It goes brittle and snaps, and brow hair takes roughly four months to regrow."},

  {q:"Threading is generally preferred over waxing for a client who:",
   opts:["Has very thick brow hair", "Wants a faster service", "Is using a topical retinoid", "Has dark hair"], a:2,
   explanation:"Retinoids thin the stratum corneum. Wax adheres to that layer and can lift skin. Threading traps the hair without adhering to the skin surface, so it is the safer method on retinoid-treated or otherwise sensitised skin."},

  {q:"Henna differs from a conventional brow tint because it:",
   opts:["Only colours the hair", "Only colours the skin", "Stains both the hair and the skin beneath it", "Requires no patch test"], a:2,
   explanation:"Henna is a plant stain that colours the skin as well as the hair, which is why it suits sparse brows. It still requires a patch test, and so-called black henna adulterated with PPD has caused severe reactions."},

  {q:"A brow patch test should be performed:",
   opts:["Immediately before the service", "48 hours before, and the result recorded in the client file", "Only for henna", "Only if the client reports previous reactions"], a:1,
   explanation:"Contact allergy to PPD and related dyes is delayed. A test done minutes before tells you nothing; 48 hours ahead with a logged result is the defensible standard."},

  {q:"Microblading is regulated in most states as:",
   opts:["A form of esthetics", "A form of cosmetology", "Tattooing or body art", "An unregulated cosmetic service"], a:2,
   explanation:"A microblade opens the epidermis and deposits pigment into the upper dermis, meeting the statutory definition of tattooing. The service is sold as a brow treatment but licensed as body art."},

  {q:"In Illinois, a licensed esthetician who wishes to microblade must:",
   opts:["Simply add it to their esthetics menu", "Work under an Illinois Department of Public Health body art establishment registration, and not hold themselves out as practising esthetics while doing it", "Obtain a medical licence", "Register with the Illinois Secretary of State"], a:1,
   explanation:"IDFPR treats microblading and permanent makeup as outside the cosmetology and esthetics scope. IDPH registers the body art establishment, and Illinois warns licensees not to represent themselves as estheticians while performing body art."},

  {q:"Which pairing correctly describes the usual regulatory split for a brow menu?",
   opts:["Lamination and tinting under a health department; microblading under a cosmetology board", "Lamination and tinting under a cosmetology or esthetics board; microblading under body art or tattoo law", "Both under the cosmetology board in every state", "Both under federal OSHA licensing"], a:1,
   explanation:"Non-invasive chemical services stay inside esthetics. Microblading crosses into tattoo law, which almost always lives with a state or county health department — or, in a minority of states, an occupational board's separate tattoo licence."},

  {q:"In South Carolina, permanent makeup and micropigmentation may lawfully be performed by:",
   opts:["Any licensed esthetician", "Any licensed tattoo artist", "Physicians or other legally authorised healthcare providers, with the physician physically present", "Anyone who holds a bloodborne pathogens certificate"], a:2,
   explanation:"S.C. Regs 61-111.900 restricts micropigmentation and permanent cosmetic procedures to physicians or other legally authorised healthcare providers, and the Board of Medical Examiners requires the physician to directly supervise and be physically present on site throughout."},

  {q:"Double dipping a wax applicator is a problem because:",
   opts:["It cools the wax too quickly", "It wastes product", "It reintroduces skin flora and potentially blood-contaminated material into the shared pot", "It changes the wax's melting point"], a:2,
   explanation:"A used stick returns skin cells, bacteria and sometimes blood to the reservoir that will be applied to every subsequent client. One stick, one dip, then discard — and it is one of the most commonly cited sanitation violations."},

  {q:"Why does the microblading side of a brow business usually carry a separate renewal cycle from the lamination side?",
   opts:["Because pigment expires annually", "Because the two services are licensed by different agencies under different statutes", "Because OSHA sets a one-year term for all beauty licences", "Because insurance requires it"], a:1,
   explanation:"The esthetics licence comes from a beauty board and the body art credential from a health department or a separate tattoo authority. Two statutes, two agencies, two renewal dates — a common way for otherwise careful technicians to lapse."},
  ],

  flashcards: [
  {f:"Golden Ratio", b:"Approximately 1:1.618 — the proportion used to place the start, arch and tail of a mapped brow relative to facial landmarks."},
  {f:"Supraorbital Ridge", b:"The brow bone. It sets where an arch can physically sit; mapping that ignores it produces a brow that reads as drawn on."},
  {f:"Ammonium Thioglycolate", b:"The reducing agent in most brow lamination lifting solutions — breaks disulphide bonds in keratin so the hair can be reshaped."},
  {f:"Setting Solution", b:"The neutraliser applied after the lift. Re-oxidises the disulphide bonds, locking the hair into its new direction."},
  {f:"Over-processing", b:"Leaving lifting solution on too long. Bonds break past the point of recovery, the hair goes brittle and snaps — brow hair takes about four months to regrow."},
  {f:"Oxidative Tint", b:"Brow dye developed with low-volume hydrogen peroxide. Many formulations contain PPD or a close relative, a documented contact allergen."},
  {f:"PPD", b:"Paraphenylenediamine — the dye ingredient behind most brow and lash tint allergies, and the adulterant that makes 'black henna' dangerous."},
  {f:"Henna", b:"A plant-based stain that colours the skin as well as the hair, useful on sparse brows. Still requires a patch test."},
  {f:"Patch Test", b:"A small product application 48 hours ahead of a colour service, logged in the client record, to expose delayed contact allergy."},
  {f:"Threading", b:"Hair removal with twisted cotton thread. It does not adhere to the skin surface, making it the safer option on retinoid-treated or sensitised skin."},
  {f:"Sugaring", b:"A water-soluble paste applied at body temperature and removed in the direction of hair growth — gentler on the skin than hot wax."},
  {f:"Double Dipping", b:"Returning a used applicator to the wax pot. It reintroduces skin flora and possibly blood to the reservoir, and it is a routine inspection citation."},
  {f:"Microblading", b:"Depositing pigment into the upper dermis with a bladed row of needles. Marketed as a brow service; regulated as tattooing in most states."},
  {f:"Nano Brows", b:"Machine-implanted hair strokes using a single fine needle. Same legal classification as microblading — it is still tattooing."},
  {f:"The Split", b:"The core regulatory fact of a brow business: shaping, tinting and lamination sit with a beauty board, while microblading sits with a body art or tattoo authority."},
  {f:"Exposure Control Plan", b:"The written, annually reviewed OSHA document a microblading operation must maintain. Not required for lamination; required the moment you break skin."},
  ],

  stateModule: {
    titleSuffix:    "Brow Scope, Licensing & the Microblading Split",
    summaryHeading: "State Regulation Module",
    scriptTemplate: "{STATE} brow scope, licensing and the microblading split. This module covers which board licenses shaping, tinting and brow lamination in {STATE}, which separate agency governs microblading and other pigment work, whether an esthetics licence is a prerequisite or simply a different credential, the training hours, examinations and fees on each side, and any {STATE} rule restricting where pigment work may be performed. Confirm both sides with the agencies named in the spec box before you advertise a full brow menu.",
  },

  globalSpec: null,

  stateSpecs: {
  AL: {vendor:"Lamination/tint: Alabama Board of Cosmetology and Barbering · Microblading: Alabama Dept. of Public Health body art programme", questions:"—", time:"—", pass:"—", fee:"unconfirmed on both sides",
       note:"Split confirmed only at the level of which agency owns which service. Alabama's body art permit sits with ADPH's Division of Food, Milk and Lodging, not with the cosmetology board, so a cosmetology or esthetics licence does not authorise microblading. Hours, exams and fees not established from primary sources on either side.",
       source:"American Academy of Micropigmentation state directory (ADPH); Alabama Board of Cosmetology and Barbering as the esthetics regulator", verified:false},

  AK: {vendor:"BOTH SIDES, ONE BOARD: Alaska Board of Barbers and Hairdressers", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Alaska is one of the rare states with no split — the Board of Barbers and Hairdressers licenses esthetics AND permanent cosmetic coloring/tattooing. They remain separate credentials, but one agency and one renewal portal. Secondary sources report roughly 250 hours for the permanent cosmetic colorist route. Not confirmed; the board's site returned 403 during research.",
       source:"American Academy of Micropigmentation state directory; AMA Academy 2026 compilation (~250 hours)", verified:false},

  AZ: {vendor:"Lamination/tint: Arizona Barbering & Cosmetology Board · Microblading: NO state licence — county health only", questions:"—", time:"—", pass:"—", fee:"varies by county for body art",
       note:"An unusual asymmetry. Arizona licenses your lamination and tinting through the Barbering & Cosmetology Board, but that board treats microblading as outside the cosmetology scope AND Arizona issues no state body art licence — so the microblading side is governed, if at all, by county rules (Maricopa and Pima being the ones to check). Unregulated is not the same as permitted-anywhere; verify locally.",
       source:"Arizona Barbering & Cosmetology Board scope (bcb.az.gov); American Academy of Micropigmentation state directory ('no state-level regulations; check local jurisdictions')", verified:false},

  AR: {vendor:"Lamination/tint: Arkansas Dept. of Health, Section of Cosmetology · Microblading: Arkansas Dept. of Health, Body Art Program", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Arkansas keeps both sides inside the Department of Health, but in two different programmes with two different credentials. The body art route is an individual artist licence plus a licensed establishment, with a reported apprenticeship of roughly six months / 375 hours. Neither side confirmed from a primary source.",
       source:"American Academy of Micropigmentation state directory; AMA Academy 2026 compilation", verified:false},

  CA: {vendor:"Lamination/tint: California Board of Barbering and Cosmetology · Microblading: COUNTY environmental health department under the Safe Body Art Act", questions:"—", time:"—", pass:"—", fee:"Body art practitioner registration set by each county, typically $100–$400 annually",
       note:"THE TEXTBOOK SPLIT. Brow shaping, waxing, tinting and lamination require a California esthetician or cosmetologist licence from the state board. Microblading is 'permanent cosmetics' under the Safe Body Art Act and requires registration as a body art practitioner with the COUNTY environmental health department where you work, plus work in a permitted body art facility — Los Angeles, San Diego, Orange, Santa Clara, Contra Costa and Ventura each run their own programme and fee schedule. Registration renews annually and requires proof of bloodborne pathogens training. Neither credential substitutes for the other.",
       source:"California Safe Body Art Act (AB 300) and county environmental health body art programmes — LA County Public Health, San Diego County DEH, Orange County HCA, Santa Clara County DEH, Contra Costa Health, Ventura County RMA; California Board of Barbering and Cosmetology as the esthetics regulator", verified:true,
       confidence:"partial — the body art side is confirmed from county programme pages; esthetics hours and exam detail were not read"},

  CO: {vendor:"BOTH SIDES: Colorado Office of Barber and Cosmetology (DORA) — esthetics licence is a PREREQUISITE for the pigment work", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"COLORADO STACKS RATHER THAN SPLITS. Your lamination and tinting need a Colorado esthetician or cosmetologist licence — and so does your microblading, because Colorado requires 132 contact hours of approved permanent makeup training to be completed BY an already-licensed cosmetologist or esthetician. That makes Colorado one of the clearest 'both credentials required' states, though both sit with DORA rather than with a health department; CDPHE governs facility sanitation. The 132-hour figure is consistently reported by DORA-approved schools but was not read on a DORA page (dpo.colorado.gov returned 403).",
       source:"DORA Office of Barber and Cosmetology as regulator; 132-hour prerequisite reported by multiple DORA-approved providers and the AMA Academy 2026 compilation", verified:false,
       confidence:"partial — the prerequisite structure is well corroborated; the hour figure needs a DORA primary source"},

  CT: {vendor:"Lamination/tint: Connecticut Dept. of Public Health (Connecticut does not license estheticians conventionally) · Microblading: CT DPH Tattoo Technician licence", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"Tattoo Technician: $250 initial, $200 biennial renewal, $250 reinstatement",
       note:"Connecticut is a genuine oddity: both sides point back at the Department of Public Health rather than at a conventional cosmetology board, and Connecticut does not license estheticians the way most states do. Microblading requires the DPH Tattoo Technician licence, with an apprenticeship training-permit pathway and an out-of-state endorsement route; fees confirmed on portal.ct.gov. What the brow-lamination side requires in Connecticut was NOT established and should be confirmed with DPH directly.",
       source:"Connecticut Dept. of Public Health Tattoo Technician licensure pages (portal.ct.gov)", verified:true,
       confidence:"partial — the tattoo technician credential and fees are confirmed; the lamination/tinting side of Connecticut licensing was not established"},

  DE: {vendor:"Lamination/tint: Delaware Board of Cosmetology and Barbering · Microblading: Delaware Division of Public Health — ESTABLISHMENT licensing only", questions:"—", time:"—", pass:"—", fee:"unconfirmed",
       note:"Asymmetric split: Delaware licenses the individual for esthetics, but for body art it licenses the ESTABLISHMENT and not the artist. So the microblading requirement is that you work in a DPH-licensed body art establishment, not that you hold a personal body art licence. Fees and inspection detail not established from a primary source.",
       source:"American Academy of Micropigmentation state directory ('Body Art Establishments (not Artists)'); Delaware Board of Cosmetology and Barbering as the esthetics regulator", verified:false},

  DC: {vendor:"Lamination/tint: DC Board of Barber and Cosmetology · Microblading: CONFLICTING — DC Health vs. the same board", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Not safe to act on. One industry directory places body art with the DC Board of Barber and Cosmetology; another describes the District as imposing no requirement. Neither was confirmed on a dc.gov page. Contact both DC Health and the Board of Barber and Cosmetology before offering pigment work in the District.",
       source:"American Academy of Micropigmentation state directory vs. AMA Academy 2026 compilation — the two contradict each other", verified:false},

  FL: {vendor:"Lamination/tint: Florida DBPR Board of Cosmetology (facial or full specialist) · Microblading: Florida Dept. of Health tattoo artist licence, applied for at your COUNTY health department", questions:"—", time:"—", pass:"70% on the approved bloodborne pathogens and communicable disease course exam", fee:"Microblading side: $60 tattoo artist licence + $85 biomedical waste generator permit (county fees may apply)",
       note:"Florida says it in as many words: MICROBLADING, permanent cosmetics and micro-needling using pigments, dyes or ink ARE tattooing. That side needs a Department of Health tattoo artist licence — 18 or over, photo ID, and a Department-approved bloodborne pathogens and communicable diseases course passed at 70% or better — applied for through your county health department and tied to a named licensed tattoo establishment. Because needles and pigment-contaminated waste are generated, a separate $85 Biomedical Waste Generator Permit is required too. Your brow waxing, tinting and lamination remain a DBPR cosmetology or specialist credential. Two agencies, two applications.",
       source:"Florida Dept. of Health — 'Microblading, Permanent Cosmetics, and ONLY Micro-needling Using Pigments, Dye, or Ink' and Tattoo Artist Licensure pages (floridahealth.gov); Florida DBPR Board of Cosmetology as the esthetics regulator", verified:true,
       confidence:"partial — the microblading side is fully confirmed on floridahealth.gov; DBPR specialist hours and exam detail were not read"},

  GA: {vendor:"Lamination/tint: Georgia Board of Cosmetology and Barbers · Microblading: Georgia Dept. of Public Health Body Artist Certification, MICROBLADING specialty, examined at your county environmental health office", questions:"unconfirmed — exam drawn from DPH Rules Chapter 511-3-8", time:"unconfirmed", pass:"unconfirmed", fee:"reported $50 per specialty exam — confirm with your county office",
       note:"RECENTLY CHANGED — ignore pre-2023 guides. Georgia's statewide body art rules took effect 6 October 2023 with a grace period to 6 October 2024, and Georgia certifies body artists BY SPECIALTY, with microblading as its own specialty alongside tattooing and piercing. You book the exam through your county environmental health office. Certification requires current Bloodborne Pathogens, First Aid and CPR training, none expiring within six months of your renewal date, and the studio is permitted separately. A Georgia esthetics licence covers your lamination and tinting and does nothing for your microblading.",
       source:"Georgia Dept. of Public Health Body Art programme (dph.georgia.gov/environmental-health/body-art), DPH Rules Chapter 511-3-8, O.C.G.A. Title 31 Ch. 40; Georgia Board of Cosmetology and Barbers as the esthetics regulator", verified:true,
       confidence:"partial — the microblading specialty certification is confirmed on dph.georgia.gov; the $50 exam fee comes from a secondary guide and esthetics hours were not read"},

  HI: {vendor:"Lamination/tint: Hawaii Board of Barbering and Cosmetology (DCCA) · Microblading: Hawaii Dept. of Health tattoo permit", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Standard split — beauty board for the non-invasive services, Department of Health for pigment work. Secondary sources describe written and practical components on the DOH side. Neither side confirmed from a primary source.",
       source:"American Academy of Micropigmentation state directory; Hawaii DCCA Board of Barbering and Cosmetology as the esthetics regulator", verified:false},

  ID: {vendor:"Lamination/tint: Idaho Board of Barber and Cosmetology (DOPL) · Microblading: NO state licence — public health districts only", questions:"—", time:"—", pass:"—", fee:"varies by health district",
       note:"Asymmetric: Idaho licenses your esthetics but has no state body art practitioner licence. State law addresses body art on minors; anything else is local. Do not read the absence of a state licence as permission — confirm with your public health district, and note that the OSHA bloodborne pathogens standard applies regardless.",
       source:"American Academy of Micropigmentation state directory (Idaho Dept. of Health and Welfare); AMA Academy 2026 compilation ('none at state level'); Idaho DOPL Board of Barber and Cosmetology as the esthetics regulator", verified:false},

  IL: {vendor:"Lamination/tint: Illinois Dept. of Financial and Professional Regulation (IDFPR) · Microblading: Illinois Dept. of Public Health — Body Art Establishment registration", questions:"—", time:"—", pass:"—", fee:"unconfirmed",
       note:"ILLINOIS IS EXPLICIT AND THE WORDING MATTERS. Microblading and permanent makeup do NOT fall under the Illinois cosmetology or esthetics licence. They must be performed under an IDPH body art establishment registration — the registration belongs to the STUDIO, not the artist — and Illinois warns that a licensed esthetician or cosmetologist performing microblading must not represent themselves as practising esthetics while doing it. OSHA bloodborne pathogens certification is required. Your lamination and tinting stay with IDFPR. Registration fees not established.",
       source:"Illinois Dept. of Public Health Body Art Establishments programme (dph.illinois.gov, dph.bodyart@illinois.gov); IDFPR cosmetology and esthetics scope", verified:true,
       confidence:"partial — the scope exclusion and establishment-registration model are confirmed; fees, inspection cycle and IDFPR esthetics hours are not"},

  IN: {vendor:"Lamination/tint: Indiana Professional Licensing Agency, Board of Cosmetology and Barber Examiners · Microblading: COUNTY health departments under 410 IAC 1-5", questions:"—", time:"—", pass:"—", fee:"varies by county",
       note:"Indiana sets body art standards at state level but permits and inspects at the county health department, so the microblading side changes at the county line while the esthetics side is statewide. Neither side confirmed from a primary source.",
       source:"American Academy of Micropigmentation state directory (Indiana State Dept. of Public Health); AMA Academy 2026 compilation ('local body-art permit'); Indiana PLA as the esthetics regulator", verified:false},

  IA: {vendor:"Lamination/tint: Iowa Board of Cosmetology Arts and Sciences · Microblading: Iowa Dept. of Health and Human Services tattoo artist permit plus licensed establishment", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Both boards sit inside Iowa HHS but issue different credentials: an esthetics licence for lamination and tinting, a tattoo artist permit and a licensed establishment for pigment work. Neither side confirmed from a primary source.",
       source:"American Academy of Micropigmentation state directory; Iowa Board of Cosmetology Arts and Sciences as the esthetics regulator", verified:false},

  KS: {vendor:"BOTH SIDES, ONE BOARD: Kansas Board of Cosmetology — esthetician licence and a separate COSMETIC TATTOO ARTIST licence", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"NO AGENCY SPLIT IN KANSAS. The Board of Cosmetology licenses cosmetologists, estheticians and nail technicians AND tattoo artists, body piercers and cosmetic tattoo artists. 'Cosmetic Tattoo Artist' is its own licence, so an esthetics licence still does not authorise microblading — but you deal with one agency for both, which is unusual and worth knowing if you are choosing where to set up. Hours, exams and fees sit on profession-specific KBOC pages that could not be retrieved.",
       source:"Kansas Board of Cosmetology (kansas.gov/kboc) — board scope confirms cosmetology and body art licensure, including a distinct Cosmetic Tattoo Artist licence", verified:true,
       confidence:"partial — the single-board structure and the Cosmetic Tattoo Artist category are confirmed; hours, exam and fees are not"},

  KY: {vendor:"Lamination/tint: Kentucky Board of Cosmetology · Microblading: LOCAL health departments under 902 KAR 45:065 (Cabinet for Health and Family Services)", questions:"—", time:"—", pass:"—", fee:"varies locally",
       note:"Kentucky's brow split runs state board for the beauty services, local health department for the body art registration. Kentucky is also reported to offer an eyelash specialty permit, which suggests the board does carve out narrow beauty credentials — worth asking whether anything similar exists on the brow side. Neither side confirmed from a primary source.",
       source:"American Academy of Micropigmentation state directory (Cabinet for Health and Family Services with the county board of health); Kentucky Board of Cosmetology as the esthetics regulator", verified:false},

  LA: {vendor:"Lamination/tint: Louisiana State Board of Cosmetology · Microblading: Louisiana Dept. of Health — commercial body art OPERATOR permit plus FACILITY permit (LAC Title 51, Part XXVIII)", questions:"—", time:"—", pass:"—", fee:"unconfirmed",
       note:"Louisiana's body art rules name COSMETIC TATTOOING explicitly, so microblading is squarely inside them: both the operator and the facility are permitted, a valid bloodborne pathogens certificate is a prerequisite, and the facility must maintain a written Exposure Control Plan and comply with OSHA. Out-of-state applicants must show a valid registration or licence from another state or local authority. Your lamination and tinting remain with the Board of Cosmetology. LDH fee schedule not established — ldh.la.gov returned 403 during research.",
       source:"Louisiana Dept. of Health Commercial Body Art programme (ldh.la.gov/page/commercial-body-art) as reported in search results; LAC Title 51 Part XXVIII; Louisiana State Board of Cosmetology as the esthetics regulator", verified:false,
       confidence:"partial — the operator/facility structure and cosmetic tattooing coverage are consistently described; the LDH page itself could not be fetched"},

  ME: {vendor:"Lamination/tint: Maine Office of Professional and Occupational Regulation, Board of Barbering and Cosmetology · Microblading: Maine DHHS Health Inspection Program — MICROPIGMENTATION PRACTITIONER licence", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Maine names micropigmentation as its own licence category, distinct from the general tattoo artist licence — one of the few states to do so — and puts it in a different department from cosmetology. Two departments, two credentials. Neither side confirmed from a primary source.",
       source:"American Academy of Micropigmentation state directory (Division of Environmental and Community Health); Maine OPOR Board of Barbering and Cosmetology as the esthetics regulator", verified:false},

  MD: {vendor:"Lamination/tint: Maryland State Board of Cosmetologists (Dept. of Labor) · Microblading: NO state body art licence — county and municipal rules, and NOT permitted in a licensed salon", questions:"—", time:"—", pass:"—", fee:"varies by jurisdiction",
       note:"TWO TRAPS IN ONE STATE. Maryland has no statewide tattoo or permanent makeup practitioner licence, so the microblading requirement is whatever the county or city imposes. Separately, cosmetic tattooing is treated as outside the cosmetology scope and is reported not to be permitted in a licensed Maryland salon — which means the room where you laminate may be the room where you cannot microblade. Confirm the premises rule before signing a lease.",
       source:"American Academy of Micropigmentation state directory (Maryland Dept. of Labor); AMA Academy 2026 compilation ('local rules; prohibited in salons')", verified:false},

  MA: {vendor:"Lamination/tint: Massachusetts Board of Registration of Cosmetology and Barbering · Microblading: LOCAL boards of health (105 CMR 300.000 model regulations)", questions:"—", time:"—", pass:"—", fee:"set by each municipality",
       note:"The esthetics side is statewide; the body art side is town by town. Each Massachusetts municipality's board of health adopts its own body art regulations and issues both the practitioner and the establishment permit, with bloodborne pathogens training and hepatitis B vaccination or declination as standard local requirements. Confirm with the board of health for the specific town.",
       source:"American Academy of Micropigmentation state directory (Massachusetts DPH, local board of health administration); Massachusetts Board of Registration of Cosmetology and Barbering as the esthetics regulator", verified:false},

  MI: {vendor:"Lamination/tint: Michigan LARA Board of Cosmetology · Microblading: Michigan Dept. of Health and Human Services — body art FACILITY licence", questions:"—", time:"—", pass:"—", fee:"unconfirmed",
       note:"MICROBLADING IS NAMED IN THE STATUTE. Michigan law provides that an individual shall not tattoo, brand, MICROBLADE or body pierce another individual unless it occurs at a body art facility licensed by MDHHS. The licence attaches to the facility, not the artist — Michigan issues no individual microblading licence — so working out of an unlicensed premises is the violation. Your lamination and tinting remain a LARA esthetics or cosmetology licence. MDHHS facility fees not read.",
       source:"Michigan Compiled Laws 333.13104 (legislature.mi.gov); MDHHS Body Art Licensing (michigan.gov/mdhhs/doing-business/licensing/body-art); LARA Board of Cosmetology as the esthetics regulator", verified:true,
       confidence:"partial — the statutory microblading language and facility model are confirmed; fees and LARA esthetics detail are not"},

  MN: {vendor:"Lamination/tint: Minnesota Board of Cosmetologist Examiners · Microblading: Minnesota Dept. of Health — body art TECHNICIAN licence (Minn. Stat. ch. 146B)", questions:"—", time:"—", pass:"—", fee:"set under Minn. Stat. 146B.10 — amount unconfirmed",
       note:"Minnesota licenses the individual on both sides, but through different agencies. The MDH body art technician licence for tattooing requires a minimum of 200 hours of supervised experience, plus at least five hours of coursework within the preceding year covering bloodborne pathogens, disease transmission prevention, infection control and aseptic technique — the Red Cross, OSHA and the Alliance of Professional Tattooists are named as acceptable providers. The licence runs two years with continuing education at renewal. The statute regulates tattooing generally without carving out cosmetic work.",
       source:"Minnesota Statutes 146B.03 (revisor.mn.gov); Minnesota Board of Cosmetologist Examiners as the esthetics regulator", verified:true,
       confidence:"partial — the body art side is confirmed in statute; the Minnesota esthiology hours and exam were not read"},

  MS: {vendor:"Lamination/tint: Mississippi State Board of Cosmetology · Microblading: Mississippi State Dept. of Health tattoo licence", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Standard split. Secondary sources describe an apprenticeship of roughly nine months on the MSDH side. Neither side confirmed from a primary source.",
       source:"American Academy of Micropigmentation state directory; AMA Academy 2026 compilation (~9 months apprenticeship); Mississippi State Board of Cosmetology as the esthetics regulator", verified:false},

  MO: {vendor:"Lamination/tint: Missouri Board of Cosmetology and Barber Examiners · Microblading: Missouri Office of Tattooing, Body Piercing and Branding (20 CSR 2267)", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Unusually, both Missouri regulators sit inside the same Division of Professional Registration — the cosmetology board and a dedicated tattooing office — rather than splitting across a health department. They remain separate licences. Secondary sources report roughly 300 apprenticeship hours on the tattooing side. pr.mo.gov returned 503 during research, so nothing here is primary-sourced.",
       source:"Missouri Code of State Regulations Title 20 Division 2267; AMA Academy 2026 compilation (~300 hours); Missouri Board of Cosmetology and Barber Examiners as the esthetics regulator", verified:false},

  MT: {vendor:"Lamination/tint: Montana Board of Barbers and Cosmetologists · Microblading: Montana DPHHS with local health departments", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Standard split with county-level administration on the body art side. Neither side confirmed from a primary source; confirm the microblading requirement with the county health department where the studio sits.",
       source:"American Academy of Micropigmentation state directory; AMA Academy 2026 compilation ('county (MT DPHHS)'); Montana Board of Barbers and Cosmetologists as the esthetics regulator", verified:false},

  NE: {vendor:"BOTH SIDES, ONE DEPARTMENT: Nebraska DHHS — esthetics licence and a separate PERMANENT COLOR TECHNICIAN licence, plus a licensed body art facility", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Nebraska houses both sides in DHHS. The pigment side is a named category — 'Permanent Color Technician', for practitioners applying permanent makeup and cosmetic tattoos — held alongside Tattoo Artist, Body Piercer and Brander. You need the licence AND must practise in a Nebraska-licensed body art facility. All body art licences expire on 31 March of odd-numbered years, and renewal requires at least two hours of bloodborne pathogens training within the previous 24 months. Entry training hours and fees were not on the page read.",
       source:"Nebraska DHHS Body Art Profession licensure (dhhs.ne.gov/licensure/Pages/Body-Art-Profession.aspx)", verified:true,
       confidence:"partial — the body art categories, facility rule and renewal cycle are confirmed; the esthetics side and all fees are not"},

  NV: {vendor:"Lamination/tint: Nevada State Board of Cosmetology · Microblading: COUNTY health authorities — Southern Nevada Health District (Clark County), Washoe County Health District", questions:"—", time:"—", pass:"—", fee:"varies by health district",
       note:"Nevada has no state body art licence at all, so your microblading answers to the county health authority while your lamination answers to the state cosmetology board. The Southern Nevada Health District runs the Clark County body art programme covering permanent makeup artists and establishments. District fee schedules were not retrievable during research.",
       source:"Southern Nevada Health District Body Art programme (southernnevadahealthdistrict.org); American Academy of Micropigmentation state directory; Nevada State Board of Cosmetology as the esthetics regulator", verified:false,
       confidence:"partial — the county-permit model and SNHD's role are corroborated; fee amounts and the esthetics side are unsourced"},

  NH: {vendor:"BOTH SIDES, ONE AGENCY: New Hampshire Office of Professional Licensure and Certification — Board of Barbering, Cosmetology and Esthetics also handles body art", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"New Hampshire keeps esthetics and body art in the same agency rather than splitting to a health department. SOURCES CONFLICT badly on the microblading entry route: one directory describes a three-year apprenticeship under a licensed artist, another a microblading certificate from an accredited course. That is a difference of years — resolve it with OPLC before enrolling anywhere.",
       source:"American Academy of Micropigmentation state directory ('apprentice with a licensed Artist for at least three years') vs. AMA Academy 2026 compilation ('microblading certificate') — the two contradict each other", verified:false},

  NJ: {vendor:"Lamination/tint: New Jersey State Board of Cosmetology and Hairstyling · Microblading: LOCAL health departments under N.J.A.C. 8:27", questions:"—", time:"—", pass:"—", fee:"varies by municipality",
       note:"New Jersey writes body art standards at state level in N.J.A.C. 8:27 but issues and inspects the operator registration and establishment licence LOCALLY. Secondary sources describe 40 or more hours of permanent makeup training as a common local expectation. Confirm with the municipal health officer for the town the studio sits in.",
       source:"American Academy of Micropigmentation state directory (NJ Dept. of Health); AMA Academy 2026 compilation ('local health department; 40+ hours PMU training'); NJ State Board of Cosmetology and Hairstyling as the esthetics regulator", verified:false},

  NM: {vendor:"TWO BOARDS, ONE DEPARTMENT: NM Board of Barbers and Cosmetologists (esthetics) · NM Board of Body Art Practitioners (permanent cosmetics)", questions:"unconfirmed — Professional Credential Services (PCS) exam with a published per-specialty index", time:"unconfirmed", pass:"75% on the body art side", fee:"Body art: $100 initial practitioner licence, $100 renewal, $50 apprentice registration, $300 establishment licence",
       note:"CONFIRMED: the New Mexico Board of Barbers and Cosmetologists states that body art practitioners fall under a SEPARATE board. That board licenses Permanent Cosmetics Practitioners in their own category, via apprenticeship under a licensed sponsor with a documented apprentice log (tattoo artists serve 1,400 hours and body piercers 1,200; the permanent cosmetics figure was not published on the page read). Every applicant must hold and maintain current CPR, First Aid AND bloodborne pathogens certification. The PCS examination requires 75% to pass, and renewal is annual and requires an active establishment licence. Your lamination and tinting stay with the cosmetology board.",
       source:"New Mexico Regulation & Licensing Dept. — Board of Barbers and Cosmetologists page and Board of Body Art Practitioners licensing pages (rld.nm.gov)", verified:true,
       confidence:"partial — the two-board split, exam vendor, cut score and fees are confirmed; the permanent cosmetics apprenticeship hours and the esthetics side are not"},

  NY: {vendor:"Lamination/tint: NYS Dept. of State, Division of Licensing Services (Esthetics) · Microblading: COUNTY health departments; in NYC, DOHMH Tattoo Artist Licence", questions:"—", time:"—", pass:"—", fee:"NYC: $100 Tattoo Artist Licence + $26 Infection Control Course; other counties vary",
       note:"A three-way oddity: your esthetics licence comes from the Department of STATE, while your microblading permit comes from a county health department — and New York State issues no statewide tattoo artist licence under Public Health Law Article 4-A. In New York City, DOHMH requires a $100 Tattoo Artist Licence, and every applicant including MICROBLADING, scalp micropigmentation and micro-needling practitioners must first complete the four-hour Infection Control Course for Tattoo and Permanent Makeup Artists ($26, run twice a month). Nassau County issues its own certification. NYSDOH has been reported to be developing a statewide programme — check before relying on this.",
       source:"NYC Dept. of Health and Mental Hygiene — Infection Control Training for Tattoo and Permanent Makeup Artists (nyc.gov); Nassau County Dept. of Health; NYS Public Health Law Article 4-A; NYS Dept. of State Division of Licensing Services as the esthetics regulator", verified:true,
       confidence:"partial — the NYC requirements and fees are confirmed; the other 61 counties each set their own rule and a statewide programme may be in progress"},

  NC: {vendor:"Lamination/tint: North Carolina Board of Cosmetic Art Examiners · Microblading: COUNTY health departments under N.C.G.S. 130A-283", questions:"—", time:"—", pass:"—", fee:"state-set annual tattoo permit fee, commonly reported as $250 — confirm with your county",
       note:"Standard split with a state-set fee administered locally. The permit renews annually. The fee figure comes from secondary sources and was not confirmed on a state or county page.",
       source:"American Academy of Micropigmentation state directory (NC DHHS); NC Board of Cosmetic Art Examiners as the esthetics regulator", verified:false},

  ND: {vendor:"Lamination/tint: North Dakota State Board of Cosmetology · Microblading: CONFLICTING — ND Health and Human Services vs. no state-level regulation", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"The microblading side is genuinely unresolved: one directory names the state health department, a 2026 compilation lists North Dakota as unregulated at state level with local control, and neither was confirmed on an nd.gov page. Do not rely on this entry — contact North Dakota HHS and your city or county health authority.",
       source:"American Academy of Micropigmentation state directory vs. AMA Academy 2026 compilation — the two contradict each other; ND State Board of Cosmetology as the esthetics regulator", verified:false},

  OH: {vendor:"Lamination/tint: Ohio State Cosmetology and Barber Board · Microblading: LOCAL health districts approved by the Ohio Dept. of Health (ORC 3730; OAC 3701-9)", questions:"—", time:"—", pass:"—", fee:"set by each local health district",
       note:"OHIO NAMES MICROBLADING IN THE CODE. The Ohio Administrative Code defines 'permanent cosmetics' as a tattoo, expressly including permanent makeup, micropigment implantation, dermagraphics and MICROBLADING. Facilities are licensed by the local health district where they sit — not by the state — and plans must be submitted for pre-approval before opening. Ohio does not issue an individual state artist licence on the body art side, so the operative requirement is a licensed facility plus local rules. Your lamination and tinting stay with the State Cosmetology and Barber Board.",
       source:"Ohio Dept. of Health Body Art Program (odh.ohio.gov); Ohio Revised Code Ch. 3730 and Ohio Administrative Code Ch. 3701-9; Ohio State Cosmetology and Barber Board as the esthetics regulator", verified:true,
       confidence:"partial — the code definition and local-district model are confirmed; district fees and the esthetics side are not"},

  OK: {vendor:"Lamination/tint: Oklahoma State Board of Cosmetology and Barbering · Microblading: Oklahoma State Dept. of Health (63 O.S. §1-1530)", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Standard split. Oklahoma licenses both the artist and the facility on the health department side, and one 2026 compilation describes a permanent makeup specialist licence specifically. The OSDH page could not be retrieved during research, so neither side is primary-sourced.",
       source:"American Academy of Micropigmentation state directory; AMA Academy 2026 compilation ('PMU specialist license'); Oklahoma State Board of Cosmetology and Barbering as the esthetics regulator", verified:false},

  OR: {vendor:"BOTH SIDES, ONE OFFICE: Oregon Health Authority Health Licensing Office — esthetics certificate (Board of Cosmetology) and tattoo artist licence (Board of Electrologists and Body Art Practitioners)", questions:"100 multiple choice (tattoo artist exam)", time:"100 minutes", pass:"75%", fee:"unconfirmed — HLO publishes a separate fee schedule",
       note:"Oregon puts cosmetology and body art in the same Health Licensing Office, but the bar on the pigment side is among the highest in the country and it covers microblading: 360 hours at an Oregon-licensed tattoo career school (210 theory, 150 practical), documentation of at least 50 COMPLETED procedures — finished including post-heal touch-ups with the client released from service — and one-to-one supervised practical work on the public. The written exam is 100 questions in 100 minutes at 75%, walk-in Monday to Friday 9am to 1pm at the HLO in Salem, and must be passed within two years of application. Annual renewal attests to current CPR, first aid and bloodborne pathogens certification plus continuing education.",
       source:"Oregon Health Authority Health Licensing Office — Board of Electrologists and Body Art Practitioners, Tattoo Artists licence and continuing education pages (oregon.gov/oha/ph/hlo); OAR Ch. 331", verified:true,
       confidence:"partial — the body art requirements are confirmed on the HLO pages; the fee schedule and the esthetics certificate detail were not read"},

  PA: {vendor:"Lamination/tint: Pennsylvania State Board of Cosmetology (Dept. of State) · Microblading: NO state licence — and NOT permitted in a licensed salon", questions:"—", time:"—", pass:"—", fee:"varies by local health department, where one exists",
       note:"THE SHARPEST SPLIT IN THE COUNTRY, AND A GENUINE TRAP. Your brow shaping, tinting and lamination require a Pennsylvania esthetician or cosmetologist licence and are perfectly at home in a salon. Microblading is neither state-licensed nor salon-legal: Pennsylvania has no tattoo or microblading licence at all — the only statewide rule is the 2001 law barring tattooing of under-18s — while the State Board of Cosmetology holds microblading to be OUTSIDE the cosmetology scope and 49 Pa. Code §7.77 prohibits using a licensed salon for anything other than cosmetology. Cities and counties with their own health departments may impose local requirements. Regulatory legislation has been introduced repeatedly without passing; check whether that has changed.",
       source:"Pennsylvania State Board of Cosmetology position on microblading and 49 Pa. Code §7.77, as analysed by Tucker Arensberg P.C. (2023); American Academy of Micropigmentation state directory ('no state level health regulations … services are not allowed in salons')", verified:false,
       confidence:"partial — the absence of state licensure and the salon prohibition are consistently reported by independent sources but were not read on a pa.gov page"},

  RI: {vendor:"BOTH SIDES, ONE DEPARTMENT: Rhode Island Dept. of Health — esthetics licence and a separate body art practitioner licence plus establishment licence", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Rhode Island houses cosmetology and body art in the same department but issues distinct credentials, and unusually licenses the body art PRACTITIONER as well as the parlour. Neither side confirmed from a primary source.",
       source:"American Academy of Micropigmentation state directory ('license for Tattoo Artist and also for Tattoo Parlor'); RI Dept. of Health as regulator for both", verified:false},

  SC: {vendor:"Lamination/tint: SC Dept. of Labor, Licensing and Regulation, Board of Cosmetology · Microblading: SOUTH CAROLINA BOARD OF MEDICAL EXAMINERS — physicians only", questions:"—", time:"—", pass:"—", fee:"—",
       note:"THE HARD STOP. South Carolina does not permit lay practitioners to microblade at all. S.C. Regs 61-111.900 provides that tattoo removal, micropigmentation and permanent cosmetic procedures shall be provided only by physicians or other legally authorised healthcare providers, and the Board of Medical Examiners' micropigmentation policy treats the procedure as the practice of medicine because it structurally alters tissue. A physician may delegate to an employee only where the physician directs the treatment, directly supervises the person performing it, and is physically present on site throughout. S.C. Code Title 44 Ch. 34 separately prohibits tattooing of the head, face and neck, and the Board treats permanent cosmetics as a specialty outside the tattoo statute entirely. Brow shaping, tinting and lamination remain ordinary Board of Cosmetology services — the line falls exactly at the point where you break skin.",
       source:"South Carolina Board of Medical Examiners micropigmentation policy (llr.sc.gov/med/Policies); S.C. Regs 61-111.900; S.C. Code Title 44 Ch. 34; SC LLR Board of Cosmetology as the esthetics regulator", verified:true},

  SD: {vendor:"Lamination/tint: South Dakota Cosmetology Commission · Microblading: South Dakota Dept. of Health with local authorities — minimal state regulation", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"South Dakota is reported to have little state-level licensure of body art, with requirements set locally, while esthetics is a Cosmetology Commission licence and services are reported to require a licensed salon. Neither side confirmed from a state primary source.",
       source:"American Academy of Micropigmentation state directory (SD Dept. of Health); AMA Academy 2026 compilation ('minimal state regulation'); South Dakota Cosmetology Commission as the esthetics regulator", verified:false},

  TN: {vendor:"Lamination/tint: Tennessee Board of Cosmetology and Barber Examiners · Microblading: Tennessee Dept. of Health — tattoo artist and studio licences (T.C.A. Title 62, Ch. 38)", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Standard split, with Tennessee licensing both the artist and the studio on the health department side. Neither side confirmed from a primary source — the TN health page could not be retrieved during research.",
       source:"American Academy of Micropigmentation state directory ('artist + establishment license'); Tennessee Board of Cosmetology and Barber Examiners as the esthetics regulator", verified:false},

  TX: {vendor:"Lamination/tint: Texas Dept. of Licensing and Regulation (TDLR) · Microblading: Texas Dept. of State Health Services — tattoo STUDIO licence (HSC Ch. 146)", questions:"—", time:"—", pass:"—", fee:"unconfirmed on the DSHS side",
       note:"CLEAN AGENCY SPLIT, AND AN UNUSUAL SHAPE ON THE PIGMENT SIDE. TDLR licenses your esthetics and cosmetology work — and, notably, issues narrow specialty licences such as the 320-hour Eyelash Extension Specialist, which tells you Texas is willing to carve out beauty credentials. But DSHS licenses the STUDIO, not the individual artist, for pigment work, and names traditional tattooing, permanent cosmetics, MICROBLADING and scarification explicitly. Studio licences are site-specific, carry the studio's name and physical address, must be displayed prominently, and require a permanent non-dwelling building. A TDLR licence does not authorise microblading; a DSHS studio licence does not authorise esthetics.",
       source:"Texas Dept. of State Health Services — Licensing Requirements, Tattoo and Body Piercing Studios (dshs.texas.gov); Texas Health & Safety Code Ch. 146; TDLR Barbering and Cosmetology programme (tdlr.texas.gov)", verified:true,
       confidence:"partial — the DSHS studio model and covered services are confirmed; DSHS fees and licence term were not published on the page read"},

  UT: {vendor:"Lamination/tint: Utah Division of Professional Licensing, Board of Cosmetology/Barbering · Microblading: LOCAL health departments (e.g. Salt Lake County)", questions:"—", time:"—", pass:"—", fee:"varies by local health department",
       note:"Utah's esthetics side is a state DOPL licence; its body art side is largely county — local health departments issue body art establishment and practitioner permits and run inspections. Neither side confirmed from a primary source.",
       source:"American Academy of Micropigmentation state directory (Utah Dept. of Health); AMA Academy 2026 compilation ('county; largely unregulated at state level'); Utah DOPL as the esthetics regulator", verified:false},

  VT: {vendor:"BOTH SIDES, ONE OFFICE: Vermont Office of Professional Regulation (Secretary of State) — Board of Barbers and Cosmetologists and tattooist licensure", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Vermont keeps cosmetology and tattooing together in the Secretary of State's Office of Professional Regulation rather than a health department. One directory reports a minimum of 60 hours of training at a state-approved course on the permanent cosmetics side. Neither side confirmed from an OPR page.",
       source:"American Academy of Micropigmentation state directory ('Secretary of the State; 60 hour minimum training at a state approved training course'); Vermont OPR as regulator for both", verified:false},

  VA: {vendor:"BOTH SIDES, ONE BOARD: Virginia Board for Barbers and Cosmetology (DPOR) — esthetician licence and separate PERMANENT COSMETIC TATTOOER / MASTER PERMANENT COSMETIC TATTOOER licences", questions:"unconfirmed — board-approved examination", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"THE CLEANEST OCCUPATIONAL-BOARD MODEL. Va. Code §54.1-700 defines tattooing to expressly include permanent make-up, and defines esthetics to include applying makeup and eyelashes; §54.1-703 requires a Board for Barbers and Cosmetology licence for barbering, cosmetology, nail care, waxing, tattooing, body-piercing, ear-piercing OR esthetics. So both sides of your brow menu are licensed by one board, as distinct credentials, and Virginia recognises Permanent Cosmetic Tattooer and Master Permanent Cosmetic Tattooer as their own categories. 18VAC41-50 offers three routes to the tattooing credential: an approved apprenticeship in a licensed parlour, an approved programme in a licensed tattoo school, or a permanent cosmetic tattooing programme in a licensed school; out-of-state applicants may substitute three years of documented experience plus board-approved health education in bloodborne pathogens, sterilisation, aseptic technique and first aid. All routes end in a board-approved examination. The regulation sections read do not state hour minimums.",
       source:"Virginia Code §54.1-700 and §54.1-703; 18VAC41-50-20 and 18VAC41-50-30 (law.lis.virginia.gov); Virginia Board for Barbers and Cosmetology (DPOR); licence category names corroborated by the American Academy of Micropigmentation state directory", verified:true,
       confidence:"partial — statutory scope, licence structure and the exam requirement are confirmed; hours, exam format and fees are not"},

  WA: {vendor:"BOTH SIDES, ONE AGENCY: Washington State Dept. of Licensing — cosmetology/esthetics licence and a separate PERMANENT COSMETICS ARTIST licence", questions:"—", time:"—", pass:"—", fee:"Permanent cosmetics artist: $275 initial and $275 annual renewal ($385 late); shop or mobile unit $330 per location; $5 to print a licence",
       note:"Washington issues four body art credentials — Tattoo Artist, Body Piercing Artist, Body Art Artist and PERMANENT COSMETICS ARTIST — through the Department of Licensing, the same agency that licenses cosmetology. The pigment-side requirements are remarkably light on paper: 18 or over and a current, active bloodborne pathogens certificate, with NO state examination and NO minimum training hours. The licence runs one year and may be renewed up to 120 days early; the premises is licensed separately at $330 per location. Third-party guides naming Labor & Industries as the regulator or quoting $250 are wrong on both counts.",
       source:"Washington State Dept. of Licensing — Tattoos, body piercing, body art and permanent cosmetics: 'Get your license' and 'Fees' pages (dol.wa.gov)", verified:true,
       confidence:"partial — the body art side is fully confirmed; the Washington esthetics hours and exam were not read"},

  WV: {vendor:"Lamination/tint: West Virginia Board of Barbers and Cosmetologists · Microblading: WV Dept. of Health, Office of Environmental Health Services (W. Va. Code §16-38)", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Standard split — beauty board for the non-invasive work, state environmental health for tattoo studio and artist permits. Neither side confirmed from a primary source.",
       source:"American Academy of Micropigmentation state directory (WV DHHR); WV Board of Barbers and Cosmetologists as the esthetics regulator", verified:false},

  WI: {vendor:"BOTH SIDES, ONE DEPARTMENT: Wisconsin DSPS — Cosmetology Examining Board (aesthetics) and tattooist plus tattoo establishment licences under Wis. Stat. ch. 463", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"set under Wis. Stat. §440.03(9) — amount unconfirmed",
       note:"Wisconsin keeps both sides in the Department of Safety and Professional Services, licensing the tattooist AND the establishment. QUIRK: under §463.16, a local health department serving a jurisdiction of more than 5,000 people may act as DSPS's agent, issue the body art licences itself and set its own fees — so in some Wisconsin cities the microblading application is filed locally rather than in Madison. Chapter 463 defines tattooing by cross-reference to §948.70(1)(b); the chapter text read did not name permanent makeup explicitly, so confirm coverage with DSPS if your work is brows-only.",
       source:"Wisconsin Statutes Ch. 463 — §463.10, §463.12, §463.16 (docs.legis.wisconsin.gov); Wisconsin DSPS Cosmetology Examining Board as the esthetics regulator", verified:true,
       confidence:"partial — the dual licences and the local-agent rule are confirmed in statute; fees, training and explicit PMU coverage are not"},

  WY: {vendor:"Lamination/tint: Wyoming Board of Cosmetology · Microblading: NO state licence — local authorities only", questions:"—", time:"—", pass:"—", fee:"varies locally",
       note:"Wyoming licenses your esthetics but has no state tattoo or permanent makeup credential, so any microblading requirement comes from the city or county. Being unlicensed does not exempt you from the OSHA bloodborne pathogens standard or from negligence liability for an infection or a botched result.",
       source:"American Academy of Micropigmentation state directory (Wyoming Dept. of Health); AMA Academy 2026 compilation ('none at state level'); Wyoming Board of Cosmetology as the esthetics regulator", verified:false},
  },

  genericSpecNote: "Brow regulation not yet verified for this jurisdiction. Assume a SPLIT: shaping, waxing, threading, tinting and brow lamination almost always sit inside the esthetics or cosmetology scope licensed by the state beauty board, while microblading, nano, powder and ombré brows are classified as tattooing and licensed separately — usually by a state or county health department, occasionally by the same occupational board as a distinct credential, and in a few states not at all. Contact BOTH agencies before advertising a full brow menu, ask specifically whether pigment work is permitted on the premises where you laminate, and assume the OSHA bloodborne pathogens standard applies the moment you break skin.",
};
