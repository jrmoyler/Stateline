// Lash Technician / Eyelash Extensions — a "state" track governed almost entirely by
// COSMETOLOGY and ESTHETICS boards rather than by health departments.
//
// Read src/data/tracks/CONTRACT.md before editing.
//
// The contrast with permanent-makeup.js is the point of this file. Classic and volume lash
// extensions do not break the skin, so they sit inside the esthetics or cosmetology scope of
// practice in nearly every state, licensed by the state beauty board. That makes lash the
// TIDIEST of the three beauty-adjacent tracks — but three complications recur:
//
//   1. STANDALONE LASH LICENCES. A small number of states carve out a dedicated credential
//      rather than folding lashes into esthetics — Texas's Eyelash Extension Specialist
//      (320 hours) is the clearest, with Minnesota, Connecticut, Kentucky and Florida
//      reported to run lash-specific licences or add-on training requirements.
//   2. LASH LIFTS ARE NOT ALWAYS THE SAME AS EXTENSIONS. A lift is a chemical service using a
//      thioglycolate or cysteamine perm applied millimetres from the cornea. Some states treat
//      it as plainly within esthetics; others treat chemical services as cosmetology-only.
//      Where the two diverge, the note says so.
//   3. NO STATE LICENCE AT ALL. A handful of states are reported to require nothing for lashes.
//      That is a liability question, not a permission slip — see the eye-safety lessons.
//
// Where a state's rule could not be established from a primary source, the entry is
// verified:false and the note says plainly what is and is not established.

export default {
  id:       "lash-tech",
  name:     "Lash Technician",
  full:     "Lash Technician / Eyelash Extensions",
  category: "Beauty",
  accent:   "beauty",
  type:     "certification",
  scope:    "state",
  tagline:  "Classic, volume and hybrid eyelash extensions plus lash lifts — usually licensed under esthetics, occasionally as its own credential.",

  lessons: [
  {t:"Eye & Lash Anatomy and the Growth Cycle", d:"Anagen, catagen, telogen, and the structures you must not touch", len:"20 min",
   script:"Every natural lash is on its own timetable. Anagen is the active growth phase, roughly thirty to forty-five days, and lashes in anagen hold an extension longest. Catagen is a short transition of two to three weeks where growth stops. Telogen is the resting phase, up to a hundred days, and a telogen lash is about to shed — put weight on it and you lose both. Around forty percent of a healthy lash line is in anagen at any moment, which is why fills are needed every two to three weeks. Learn the structures you never touch: the lash line itself, the meibomian gland openings just behind it, and the waterline."},

  {t:"Adhesive Chemistry, Cure and Storage", d:"Cyanoacrylate, humidity, shock curing and shelf life", len:"22 min",
   script:"Lash adhesive is cyanoacrylate. It polymerises on contact with moisture in the air, so ambient humidity and temperature control your cure speed more than anything else you do. Forty to sixty percent relative humidity and around twenty to twenty-two degrees Celsius is the usual working window. Too dry and the bond cures slowly and poorly; too humid and it flash-cures before the extension is seated, which is why retention collapses in summer. Never use an accelerator or nano-mister without knowing your adhesive. Shake before every use, dispense a fresh drop every fifteen to twenty minutes, store unopened bottles cool and sealed, and discard an opened bottle at the manufacturer's date — usually four to eight weeks."},

  {t:"Allergic Reaction vs. Chemical Burn", d:"Telling them apart, and what to do in the chair", len:"22 min",
   script:"Two different emergencies look similar for the first ten seconds and are managed completely differently. An allergic reaction to cyanoacrylate is delayed — usually four to forty-eight hours — and presents with swelling of the lid, itching and redness on both eyes. It is an immune response, it tends to worsen with each exposure, and the answer is removal, a referral, and no further exposure to that adhesive family. A chemical burn is immediate. Vapour or a droplet reaches the cornea, the client reports sharp stinging and streaming, and the eye is red at once. That is a flush-immediately, refer-to-an-eye-doctor-today event. Never let a client drive themselves. Document both, every time."},

  {t:"Isolation, Weight and Retention", d:"One lash, one extension — and the maths that protects it", len:"25 min",
   script:"Isolation is the whole skill. You use a fine tweezer to separate one natural lash completely from its neighbours before the extension touches it. If two natural lashes are caught in one bond, they are locked together, and when the shorter one enters telogen it is pulled out early by the longer one. Repeated over months that is how you get traction alopecia of the lash line. Weight is the second discipline. An extension should not exceed roughly twenty to thirty percent of the natural lash's own weight, which in practice means matching diameter and length to the lash you are on — not to the look the client asked for."},

  {t:"Lash Lifts and Eye-Safety Chemistry", d:"Thioglycolate, timing, and the cornea two millimetres away", len:"22 min",
   script:"A lash lift is a perm. The lifting solution, usually thioglycolate or cysteamine based, breaks the disulphide bonds in the lash so it can be reshaped over a silicone shield, and the neutraliser re-forms them in the new curve. Timing is everything and the ranges are short — often six to twelve minutes for the lift and a similar window for the setting solution, adjusted down for fine or previously processed lashes. Over-processing is not reversible; the lash goes frizzy, brittle and breaks. And every second of that is happening two millimetres from an eye. Solution never touches the waterline, the client's eyes stay closed, and you keep sterile saline within arm's reach."},

  {t:"Sanitation, Consultation and Documentation", d:"Tweezers, patch tests, contraindications and records", len:"20 min",
   script:"Tweezers and reusable tools are cleaned of debris, disinfected in a hospital-grade solution for the full contact time on the label, and stored dry in a covered container. Anything porous — mascara wands, micro-brushes, adhesive rings, gel pads — is single use. Screen every client: active blepharitis, conjunctivitis, a stye, recent eye surgery or LASIK inside the surgeon's clearance window, trichotillomania, chemotherapy, and known cyanoacrylate or latex allergy are all reasons to stop. Patch test every new client twenty-four to forty-eight hours ahead and log the result. Your consent form should record the adhesive brand and batch, the lift solution used, the timings, and the aftercare you handed over."},

  {t:"State Regulation, Licensing & Scope", d:"State-specific — which licence lets you touch a lash", len:"20 min", stateSpecific:true,
   script:null},
  ],

  summarySections: [
  {h:"Anatomy & Technique", items:["Anagen, catagen and telogen — and why fills fall at 2–3 weeks", "Isolation: one natural lash, one extension, no exceptions", "Weight rule: extension ≤ ~20–30% of the natural lash's weight", "Classic, hybrid, volume and mega-volume fan construction", "Mapping to eye shape without over-extending the outer corner"]},
  {h:"Adhesive & Chemistry", items:["Cyanoacrylate cures on atmospheric moisture", "Working window ≈ 40–60% relative humidity, ~20–22°C", "Fresh drop every 15–20 minutes; shake before use", "Discard an opened bottle at the manufacturer's date (often 4–8 weeks)", "Lash lift: thioglycolate or cysteamine lifting solution plus neutraliser"]},
  {h:"Eye Safety & Liability", items:["Allergic reaction: delayed 4–48 hrs, bilateral, worsens on re-exposure", "Chemical burn: immediate, sharp pain, flush and refer same day", "Never let a client with an acute eye event drive themselves home", "Contraindications: blepharitis, conjunctivitis, stye, recent LASIK, trichotillomania", "Patch test every new client and log the result"]},
  {h:"State Board Module", items:["Which licence authorises lash extensions in your state", "Whether a standalone lash credential exists or esthetics covers it", "Training hours and the written and practical exams", "Whether a lash LIFT is treated differently from extensions", "Renewal cycle, continuing education and reciprocity"]},
  ],

  quiz: [
  {q:"The full natural lash growth cycle is approximately:",
   opts:["14 to 21 days", "60 to 90 days", "6 months", "12 months"], a:1,
   explanation:"Anagen runs roughly 30–45 days, catagen 2–3 weeks, and telogen up to about 100 days, giving a working figure of 60–90 days for a complete cycle."},

  {q:"Lash adhesive cure speed is controlled principally by:",
   opts:["Room lighting", "The colour of the extension", "Relative humidity and temperature", "The client's natural lash colour"], a:2,
   explanation:"Cyanoacrylate polymerises on contact with atmospheric moisture. Humidity and temperature therefore set the cure rate — which is why retention changes with the season if the room is not controlled."},

  {q:"A client phones the next morning with both eyelids swollen and itching that began overnight. This is most consistent with:",
   opts:["A delayed allergic reaction to cyanoacrylate", "A corneal chemical burn", "Normal post-service sensitivity", "Traction alopecia"], a:0,
   explanation:"Allergy to cyanoacrylate is a delayed immune response, typically 4–48 hours out, bilateral, with swelling and itching. A chemical burn is immediate and painful. Allergy means removal and no further exposure to that adhesive."},

  {q:"An extension should generally not exceed what proportion of the natural lash's own weight?",
   opts:["10%", "50%", "About 20 to 30%", "It does not matter if the fans are handmade"], a:2,
   explanation:"Exceeding roughly a fifth to a third of the natural lash's weight drags the follicle, shortens retention and over time causes premature shedding and traction damage."},

  {q:"Failing to isolate — bonding an extension across two natural lashes — causes:",
   opts:["Faster curing", "Better retention", "Premature shedding and, repeated over time, traction damage to the lash line", "A softer, more natural look"], a:2,
   explanation:"Two lashes on different points of the growth cycle are locked together. When one sheds it drags the other out early. Repeated stickies are the classic cause of thinning lash lines."},

  {q:"The active chemistry in a standard lash lift solution works by:",
   opts:["Bleaching melanin in the lash", "Breaking disulphide bonds so the lash can be reshaped, then re-forming them", "Coating the lash in a polymer film", "Dissolving the outer cuticle"], a:1,
   explanation:"Thioglycolate or cysteamine reduces the disulphide bonds in the lash's keratin. The neutraliser re-oxidises them, fixing the lash in the shape of the silicone shield."},

  {q:"A client reports sharp, immediate stinging and one eye is streaming and red seconds after a solution is applied. The correct first action is:",
   opts:["Continue and reduce the timing", "Apply a cool compress and finish the set", "Flush the eye immediately with sterile saline and arrange same-day assessment by an eye-care professional", "Tell the client it will settle within an hour"], a:2,
   explanation:"Immediate pain, redness and tearing after a chemical contact is a suspected corneal chemical injury. Flush at once, stop the service, and refer for same-day assessment — and do not let the client drive themselves."},

  {q:"Which of these is an absolute reason to decline a lash extension service?",
   opts:["Brown natural lashes", "Contact lens wear", "Active conjunctivitis or blepharitis", "A previous set applied elsewhere"], a:2,
   explanation:"Any active infection or inflammation of the lid or conjunctiva must resolve before any lash service. Contact lenses are simply removed beforehand, and brown lashes and prior sets are irrelevant."},

  {q:"A patch test for a new lash client should be carried out:",
   opts:["Immediately before the appointment", "24 to 48 hours before the full application, with the result logged", "Only if the client says they have allergies", "Only for coloured extensions"], a:1,
   explanation:"Cyanoacrylate sensitivity is delayed, so a test performed minutes before tells you nothing. Twenty-four to forty-eight hours ahead — and recorded in the client file — is the defensible standard."},

  {q:"In Texas, a technician who does eyelash extensions and nothing else can be licensed as:",
   opts:["A permanent cosmetics artist through the Department of State Health Services", "An Eyelash Extension Specialist through TDLR, after 320 hours of training", "A body art practitioner through the county health department", "No licence is required in Texas"], a:1,
   explanation:"The Texas Department of Licensing and Regulation issues a standalone Eyelash Extension Specialist licence requiring 320 hours at a licensed school plus written and practical exams through PSI — a narrower route than a full cosmetology or esthetician licence."},

  {q:"An opened bottle of lash adhesive should be:",
   opts:["Kept until it visibly thickens", "Refrigerated indefinitely", "Discarded at the manufacturer's stated date, commonly 4 to 8 weeks after opening", "Topped up from a fresh bottle"], a:2,
   explanation:"Cyanoacrylate degrades once exposed to atmospheric moisture. Manufacturers give an opened-bottle life, commonly four to eight weeks; past it, retention drops and the fume load rises."},

  {q:"Why is a lash technician still bound by infection-control standards even in a state with no lash licence?",
   opts:["They are not — an unregulated state imposes no duties", "Because federal law licenses lash technicians directly", "Because sanitation duties, OSHA workplace rules and civil liability for injury apply regardless of whether a state issues a licence", "Because the FDA inspects lash salons"], a:2,
   explanation:"Absence of a state licence is not absence of duty. Workplace safety rules, salon sanitation requirements where they exist, and ordinary negligence liability for a corneal injury all survive whether or not your state chooses to license the service."},
  ],

  flashcards: [
  {f:"Anagen", b:"The active growth phase of a natural lash — about 30 to 45 days. Extensions applied to anagen lashes retain longest."},
  {f:"Catagen", b:"The transition phase — roughly 2 to 3 weeks. Growth has stopped but the lash is still anchored."},
  {f:"Telogen", b:"The resting phase, up to about 100 days. The lash is ready to shed; loading it costs you both the lash and the extension."},
  {f:"Cyanoacrylate", b:"The adhesive monomer used in lash extensions. It polymerises on contact with moisture in the air, so humidity controls cure speed."},
  {f:"Shock Curing", b:"Flash-curing the adhesive with too much humidity or a nano-mister before the extension is seated — the bond goes brittle and retention fails."},
  {f:"Isolation", b:"Separating a single natural lash from its neighbours with fine tweezers before the extension is placed. The foundation skill of the whole trade."},
  {f:"Sticky", b:"Two or more natural lashes accidentally bonded together. The leading cause of premature shedding and long-term lash line damage."},
  {f:"Weight Rule", b:"An extension should not exceed roughly 20 to 30 percent of the natural lash's own weight — match diameter and length to the lash, not to the request."},
  {f:"Classic Set", b:"One extension to one isolated natural lash. The baseline technique and the safest weight profile."},
  {f:"Volume Fan", b:"Two to six ultra-fine extensions fanned and bonded to one natural lash. Fuller than classic, and only safe because each fibre is much lighter."},
  {f:"Patch Test", b:"A small adhesive or solution application 24 to 48 hours before service, logged in the client record, to expose delayed sensitivity."},
  {f:"Delayed Allergic Reaction", b:"Bilateral lid swelling, itching and redness 4 to 48 hours after exposure to cyanoacrylate. Remove, refer, and never re-expose."},
  {f:"Chemical Burn", b:"Immediate sharp pain, tearing and redness from solution or vapour reaching the cornea. Flush with sterile saline and refer for same-day eye assessment."},
  {f:"Thioglycolate", b:"The reducing agent in most lash lift solutions — breaks the disulphide bonds in lash keratin so the lash can be reshaped."},
  {f:"Neutraliser", b:"The setting solution applied after a lift. Re-forms the disulphide bonds, locking the lash into the shape of the silicone shield."},
  {f:"Blepharitis", b:"Inflammation of the eyelid margin. An absolute contraindication to lash extensions until fully resolved."},
  {f:"Traction Alopecia", b:"Hair loss caused by sustained mechanical pull. In lashes it is the endpoint of repeated stickies and over-weighted extensions."},
  ],

  stateModule: {
    titleSuffix:    "Lash Licensing, Scope & Sanitation Rules",
    summaryHeading: "State Board Module",
    scriptTemplate: "{STATE} lash licensing, scope and sanitation rules. This module covers which credential authorises eyelash extensions in {STATE} — a full cosmetology licence, an esthetics licence, or a standalone lash credential — the training hours and the written and practical examinations, whether a lash lift is treated differently from extensions, the salon and sanitation requirements, and the renewal and continuing education cycle. Confirm every figure with the {STATE} board named in the spec box before enrolling in a course.",
  },

  globalSpec: null,

  stateSpecs: {
  AL: {vendor:"Alabama Board of Cosmetology and Barbering", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"CONFLICTING REPORTS. At least one industry compilation lists Alabama as requiring no licence for eyelash extensions; the Board of Cosmetology and Barbering is the body that would regulate them if they sit inside esthetics. Do not act on 'no licence required' without confirming with the board — the downside of being wrong is practising unlicensed.",
       source:"LashFX US state licensing compilation ('no license required'); Alabama Board of Cosmetology and Barbering as the presumptive regulator", verified:false},

  AK: {vendor:"Alaska Board of Barbers and Hairdressers (Dept. of Commerce, Community & Economic Development)", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Lash extensions sit under the Board of Barbers and Hairdressers, which licenses esthetics as well as tattooing and permanent cosmetic coloring — an unusually broad single board. Hours, exam and fees not confirmed; the board's page returned 403 during research.",
       source:"Alaska Board of Barbers and Hairdressers scope; LashFX compilation (cosmetology or esthetician licence)", verified:false},

  AZ: {vendor:"Arizona Barbering & Cosmetology Board", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Lash extensions fall under the Arizona aesthetician or cosmetologist licence. Note the contrast with permanent makeup, which the same board treats as OUTSIDE its scope and which Arizona does not license at all — so the two services in the same room answer to different rules. Hours and exam detail not confirmed from a board page.",
       source:"Arizona Barbering & Cosmetology Board (bcb.az.gov) scope; LashFX compilation", verified:false},

  AR: {vendor:"Arkansas Dept. of Health — Section of Cosmetology", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Arkansas is unusual in housing cosmetology licensure inside the Department of Health rather than a standalone board. Lash extensions require a cosmetology or esthetician licence. Hours and exam detail not confirmed from a primary source.",
       source:"LashFX compilation (cosmetology or esthetician licence); Arkansas Dept. of Health Section of Cosmetology as regulator", verified:false},

  CA: {vendor:"California Board of Barbering and Cosmetology (Dept. of Consumer Affairs)", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Eyelash extensions require a California esthetician or cosmetologist licence. IMPORTANT CONTRAST: this is a completely different regulator from the county environmental health department that handles permanent makeup under the Safe Body Art Act — a California technician offering lashes and microblading needs two credentials from two agencies. Esthetician training hours and the exam are set by the board and were not confirmed during research.",
       source:"California Board of Barbering and Cosmetology as regulator; LashFX compilation. Contrast established from the California Safe Body Art Act county programmes.", verified:false},

  CO: {vendor:"Colorado Office of Barber and Cosmetology (DORA)", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Lash extensions require a Colorado esthetician or cosmetologist licence from DORA. Colorado is also the state where permanent makeup requires that SAME licence plus 132 hours of additional training — so in Colorado, unusually, the lash licence is the foundation credential for the whole beauty stack. Hours and exam detail not confirmed; dpo.colorado.gov returned 403 during research.",
       source:"DORA Office of Barber and Cosmetology (dpo.colorado.gov/BarberCosmetology) as regulator; LashFX compilation", verified:false},

  CT: {vendor:"Connecticut Dept. of Public Health — reported EYELASH TECHNICIAN licence", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"WORTH CHECKING CAREFULLY. Connecticut is unusual: it does not license estheticians the way most states do, and at least one industry compilation reports a dedicated Connecticut eyelash technician licence. Connecticut's health department is also the tattoo technician regulator, so DPH is the right first call. Neither the existence nor the requirements of the lash credential were confirmed on a portal.ct.gov page during research — confirm before enrolling.",
       source:"LashFX US state licensing compilation ('eyelash technician license required'); Connecticut Dept. of Public Health Practitioner Licensing as the plausible regulator", verified:false},

  DE: {vendor:"Delaware Board of Cosmetology and Barbering (Division of Professional Regulation)", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Lash extensions require a Delaware cosmetology or esthetician licence. Note the contrast with body art, where Delaware licenses establishments rather than individuals. Hours and exam detail not confirmed from a primary source.",
       source:"LashFX compilation (cosmetology or esthetician licence); Delaware Board of Cosmetology and Barbering as regulator", verified:false},

  DC: {vendor:"District of Columbia Board of Barber and Cosmetology (DLCP)", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Lash extensions in the District would fall under the Board of Barber and Cosmetology's esthetics licence. Not confirmed on a dc.gov page during research; the District's rules on the adjacent body-art services are themselves contested between sources, so verify directly with the board.",
       source:"American Academy of Micropigmentation state directory (naming the DC Board of Barber and Cosmetology); no dc.gov confirmation obtained", verified:false},

  FL: {vendor:"Florida Dept. of Business and Professional Regulation — Board of Cosmetology (full specialist or facial specialist licence)", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Florida licenses facials and lashes through DBPR's Board of Cosmetology — a cosmetology licence or a facial/full specialist registration — and at least one compilation reports a specific eyelash extension training expectation on top. CONTRAST WORTH REMEMBERING: permanent makeup in Florida is not DBPR's at all; it is a Department of Health tattoo artist licence obtained through your county health department. Two services, two agencies. Hours and exam detail not confirmed from a DBPR page.",
       source:"LashFX compilation ('cosmetology license plus eyelash extension technician training'); Florida DBPR Board of Cosmetology as regulator. Contrast confirmed from floridahealth.gov tattoo licensure pages.", verified:false},

  GA: {vendor:"Georgia Board of Cosmetology and Barbers (Secretary of State)", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Lash extensions require a Georgia esthetician or cosmetologist licence from the Board of Cosmetology and Barbers. CONTRAST: microblading in Georgia is a Department of Public Health Body Artist Certification with its own specialty exam, taken at a county environmental health office — a licensed Georgia esthetician is not thereby authorised to microblade. Lash hours and exam detail not confirmed from a board page.",
       source:"Georgia Board of Cosmetology and Barbers as regulator; contrast confirmed from Georgia DPH Body Art programme (dph.georgia.gov) and DPH Rules Chapter 511-3-8", verified:false},

  HI: {vendor:"Hawaii Board of Barbering and Cosmetology (DCCA)", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Lash extensions require a Hawaii esthetician or cosmetologist licence from the DCCA board. Hours and exam detail not confirmed from a primary source.",
       source:"LashFX compilation (cosmetology or esthetician licence); Hawaii DCCA Board of Barbering and Cosmetology as regulator", verified:false},

  ID: {vendor:"Idaho Board of Barber and Cosmetology (Division of Occupational and Professional Licenses)", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Lash extensions require an Idaho esthetician or cosmetologist licence. Note the asymmetry: Idaho licenses lashes but does not license permanent makeup at state level at all. Hours and exam detail not confirmed from a board page.",
       source:"LashFX compilation; Idaho DOPL Board of Barber and Cosmetology as regulator", verified:false},

  IL: {vendor:"Illinois Dept. of Financial and Professional Regulation (IDFPR) — esthetics or cosmetology licence", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Lash extensions sit inside the Illinois esthetics and cosmetology scope regulated by IDFPR. This matters as the boundary case: IDFPR treats microblading and permanent makeup as OUTSIDE that scope, so the licence that authorises your lashes explicitly does not authorise cosmetic tattooing, and Illinois warns licensees not to represent themselves as estheticians while performing body art. Hours and exam detail not confirmed from an IDFPR page.",
       source:"IDFPR cosmetology and esthetics scope, as described alongside the Illinois Dept. of Public Health Body Art programme (dph.illinois.gov)", verified:true,
       confidence:"partial — the scope boundary between esthetics and body art is confirmed; esthetics training hours, exam and fees are not"},

  IN: {vendor:"Indiana Professional Licensing Agency — State Board of Cosmetology and Barber Examiners", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"CONFLICTING REPORTS: one compilation describes Indiana as requiring a certificate of training rather than a licence for lash extensions, which would be unusual. The Board of Cosmetology and Barber Examiners licenses estheticians and cosmetologists and is the body to ask. Do not rely on 'certificate only' without confirming.",
       source:"LashFX compilation ('certificate of training, no license required'); Indiana PLA Board of Cosmetology and Barber Examiners as the presumptive regulator", verified:false},

  IA: {vendor:"Iowa Board of Cosmetology Arts and Sciences (Dept. of Health and Human Services)", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Lash extensions require an Iowa esthetics or cosmetology licence. Hours and exam detail not confirmed from a board page.",
       source:"LashFX compilation (cosmetology or esthetician licence); Iowa Board of Cosmetology Arts and Sciences as regulator", verified:false},

  KS: {vendor:"Kansas Board of Cosmetology — esthetician or cosmetologist licence", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Kansas licenses estheticians, nail technicians and cosmetologists — and, unusually, tattoo artists, body piercers and cosmetic tattoo artists — all through the SAME board. So a Kansas technician expanding from lashes into permanent makeup applies to one agency for both, though they remain two separate licences. Esthetics hours, exam and fees sit on profession-specific KBOC pages that could not be retrieved.",
       source:"Kansas Board of Cosmetology (kansas.gov/kboc) — board scope confirms it licenses estheticians alongside tattoo, cosmetic tattoo and body piercing professions", verified:true,
       confidence:"partial — the single-board structure and licence categories are confirmed; hours, exam and fees are not"},

  KY: {vendor:"Kentucky Board of Cosmetology — reported eyelash specialty permit alongside cosmetology/esthetics", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Kentucky is reported to offer an eyelash specialty permit as an alternative to a full cosmetology or esthetics licence — one of the small group of states with a lash-specific route. Not confirmed on a ky.gov page during research; confirm the permit's existence, hours and exam with the Board of Cosmetology before enrolling.",
       source:"LashFX compilation ('cosmetology/esthetician license or eyelash specialty permit'); Kentucky Board of Cosmetology as regulator", verified:false},

  LA: {vendor:"Louisiana State Board of Cosmetology — esthetician licence", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Lash extensions require a Louisiana esthetician or cosmetologist licence from the state cosmetology board. CONTRAST: cosmetic tattooing in Louisiana is a Department of Health commercial body art operator permit under LAC Title 51 Part XXVIII, with a facility permit and an Exposure Control Plan — a different agency and a different rulebook. Lash hours and exam detail not confirmed from a board page.",
       source:"Louisiana State Board of Cosmetology as regulator; contrast established from Louisiana Dept. of Health Commercial Body Art programme", verified:false},

  ME: {vendor:"Maine Office of Professional and Occupational Regulation — Board of Barbering and Cosmetology", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Lash extensions require a Maine cosmetology or esthetician licence. Note that Maine handles the adjacent micropigmentation practitioner licence through DHHS instead — two departments for two services. Hours and exam detail not confirmed from a board page.",
       source:"LashFX compilation (cosmetology or esthetician licence); Maine OPOR Board of Barbering and Cosmetology as regulator", verified:false},

  MD: {vendor:"Maryland State Board of Cosmetologists (Dept. of Labor)", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"CONFLICTING REPORTS: one compilation lists Maryland as requiring no licence for eyelash extensions. The Board of Cosmetologists licenses estheticians and is the body that would regulate them. Given Maryland separately bars cosmetic tattooing from licensed salons, the salon-scope rules are worth reading directly. Confirm before relying on 'no licence required'.",
       source:"LashFX compilation ('no license required'); Maryland State Board of Cosmetologists as the presumptive regulator", verified:false},

  MA: {vendor:"Massachusetts Board of Registration of Cosmetology and Barbering (Division of Occupational Licensure)", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Lash extensions require a Massachusetts aesthetician or cosmetologist licence. Contrast with body art, which Massachusetts leaves to municipal boards of health — the lash side is state, the tattoo side is town by town. Hours and exam detail not confirmed from a board page.",
       source:"LashFX compilation (cosmetology or esthetician licence); Massachusetts Board of Registration of Cosmetology and Barbering as regulator", verified:false},

  MI: {vendor:"Michigan Dept. of Licensing and Regulatory Affairs (LARA) — Board of Cosmetology", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Lash extensions require a Michigan esthetician or cosmetologist licence from LARA. CONTRAST: microblading is named directly in Michigan's public health statute and may only be performed in an MDHHS-licensed body art facility — a LARA esthetics licence does not authorise it. Lash hours and exam detail not confirmed from a LARA page.",
       source:"LashFX compilation; LARA Board of Cosmetology as regulator; contrast confirmed from MCL 333.13104 and MDHHS body art licensing", verified:false},

  MN: {vendor:"Minnesota Board of Cosmetologist Examiners — reported EYELASH TECHNICIAN licence alongside esthiology and cosmetology", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Minnesota is reported to offer a dedicated eyelash technician licence in addition to esthiology and cosmetology — one of the few states with a lash-specific credential. Not confirmed on a state page during research. Note the separation from body art: Minnesota's body art TECHNICIAN licence is issued by the Department of Health under Minn. Stat. ch. 146B and is a different credential entirely.",
       source:"LashFX compilation ('cosmetology, esthetician, or eyelash technician license required'); Minnesota Board of Cosmetologist Examiners as regulator. Body art contrast confirmed from Minn. Stat. 146B.03.", verified:false},

  MS: {vendor:"Mississippi State Board of Cosmetology", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"CONFLICTING REPORTS: one compilation lists Mississippi as requiring no licence for eyelash extensions. The State Board of Cosmetology licenses estheticians and would be the regulator if lashes fall inside esthetics. Confirm with the board before relying on this.",
       source:"LashFX compilation ('no license required'); Mississippi State Board of Cosmetology as the presumptive regulator", verified:false},

  MO: {vendor:"Missouri Board of Cosmetology and Barber Examiners (Division of Professional Registration)", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"CONFLICTING REPORTS: one compilation lists Missouri as requiring no licence for eyelash extensions, which would be unusual given the state licenses esthetics. Missouri's tattooing regulator sits in the same Division of Professional Registration but is a separate office. Confirm with the Board of Cosmetology and Barber Examiners before practising.",
       source:"LashFX compilation ('no license required'); Missouri Board of Cosmetology and Barber Examiners as the presumptive regulator", verified:false},

  MT: {vendor:"Montana Board of Barbers and Cosmetologists (Dept. of Labor & Industry)", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Lash extensions require a Montana esthetician or cosmetologist licence. Hours and exam detail not confirmed from a board page.",
       source:"LashFX compilation (cosmetology or esthetician licence); Montana Board of Barbers and Cosmetologists as regulator", verified:false},

  NE: {vendor:"Nebraska Dept. of Health and Human Services — Board of Cosmetology, Electrology, Esthetics, Nail Technology and Body Art", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Nebraska houses esthetics licensure inside DHHS, the same department that licenses body art professions including the Permanent Color Technician. Lash extensions require an esthetics or cosmetology licence; the permanent makeup credential is separate. Lash hours and exam detail not confirmed from a primary source.",
       source:"LashFX compilation (cosmetology, esthetician or medical licence); Nebraska DHHS licensure as regulator, confirmed for the adjacent body art professions at dhhs.ne.gov", verified:false},

  NV: {vendor:"Nevada State Board of Cosmetology", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Lash extensions require a Nevada esthetician or cosmetologist licence from the State Board of Cosmetology. CONTRAST: permanent makeup in Nevada is not the board's business at all — it is permitted by the county health authority, the Southern Nevada Health District in Clark County. Lash hours and exam detail not confirmed from a board page.",
       source:"LashFX compilation; Nevada State Board of Cosmetology as regulator; contrast from Southern Nevada Health District body art programme", verified:false},

  NH: {vendor:"New Hampshire Office of Professional Licensure and Certification — Board of Barbering, Cosmetology and Esthetics", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Lash extensions require a New Hampshire esthetics or cosmetology licence from OPLC. New Hampshire is one of the states where the same agency also handles body art licensure, so the lash and permanent makeup routes start at the same front door but are different credentials. Hours and exam detail not confirmed from an OPLC page.",
       source:"LashFX compilation (cosmetology, esthetician or medical licence); NH OPLC Board of Barbering, Cosmetology and Esthetics as regulator", verified:false},

  NJ: {vendor:"New Jersey State Board of Cosmetology and Hairstyling (Division of Consumer Affairs)", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Lash extensions require a New Jersey cosmetology-hairstyling or skin care specialty licence. Contrast with body art, which New Jersey regulates through N.J.A.C. 8:27 enforced by LOCAL health departments. Hours and exam detail not confirmed from a board page.",
       source:"LashFX compilation (cosmetology, esthetician or medical licence); NJ State Board of Cosmetology and Hairstyling as regulator", verified:false},

  NM: {vendor:"New Mexico Board of Barbers and Cosmetologists (Regulation & Licensing Dept.)", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Lash extensions require a New Mexico esthetician licence from the Board of Barbers and Cosmetologists. CONFIRMED CONTRAST: body art practitioners — including permanent cosmetics — are licensed by a SEPARATE New Mexico board, the Board of Body Art Practitioners, with its own apprenticeship, its own PCS examination at a 75% cut score and its own fees. The two boards sit inside the same department but do not substitute for one another. Esthetics hours, exam and fees were not published on the pages read.",
       source:"New Mexico Regulation & Licensing Dept. — Board of Barbers and Cosmetologists page (states body art practitioners fall under a separate board) and Board of Body Art Practitioners licensing pages (rld.nm.gov)", verified:true,
       confidence:"partial — the two-board split and the esthetics licence category are confirmed; esthetics hours, exam and fees are not"},

  NY: {vendor:"New York State Dept. of State — Division of Licensing Services (Esthetics licence)", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"New York licenses esthetics, nail specialty, natural hair styling and cosmetology through the Department of STATE, not a health department — so lash extensions are a Department of State licence. CONTRAST: tattooing and permanent makeup are county health department permits, and in New York City a $100 DOHMH Tattoo Artist Licence plus a mandatory four-hour infection control course. Esthetics hours and exam detail not confirmed from a dos.ny.gov page.",
       source:"NYS Dept. of State Division of Licensing Services as the esthetics regulator; contrast confirmed from NYC DOHMH tattoo and permanent makeup infection control requirements (nyc.gov)", verified:false},

  NC: {vendor:"North Carolina Board of Cosmetic Art Examiners", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Lash extensions require a North Carolina esthetician or cosmetologist licence from the Board of Cosmetic Art Examiners. Contrast with tattooing, which is a county health department permit under N.C.G.S. 130A-283. Hours and exam detail not confirmed from a board page.",
       source:"LashFX compilation (cosmetology or esthetician licence); NC Board of Cosmetic Art Examiners as regulator", verified:false},

  ND: {vendor:"North Dakota State Board of Cosmetology", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Lash extensions require a North Dakota esthetician or cosmetologist licence. Hours and exam detail not confirmed from a board page. Note that North Dakota's body-art position is itself contested between sources — see the permanent makeup track.",
       source:"LashFX compilation (cosmetology, esthetician or medical licence); ND State Board of Cosmetology as regulator", verified:false},

  OH: {vendor:"Ohio State Cosmetology and Barber Board", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Lash extensions require an Ohio esthetics or cosmetology licence from the State Cosmetology and Barber Board. CONTRAST: Ohio's Administrative Code defines permanent cosmetics — expressly including microblading — as a tattoo, licensed through LOCAL health districts, not the cosmetology board. Lash hours and exam detail not confirmed from a board page.",
       source:"LashFX compilation; Ohio State Cosmetology and Barber Board as regulator; contrast confirmed from Ohio Administrative Code Chapter 3701-9 and ORC 3730", verified:false},

  OK: {vendor:"Oklahoma State Board of Cosmetology and Barbering", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Lash extensions require an Oklahoma esthetician or cosmetologist licence. Contrast with tattooing and permanent makeup, licensed by the Oklahoma State Department of Health. Hours and exam detail not confirmed from a board page.",
       source:"LashFX compilation (cosmetology or esthetician licence); Oklahoma State Board of Cosmetology and Barbering as regulator", verified:false},

  OR: {vendor:"Oregon Health Authority — Health Licensing Office, Board of Cosmetology (esthetics certificate)", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"UNUSUAL STRUCTURE: Oregon runs BOTH its cosmetology and its body art licensing out of the same Health Licensing Office inside the Oregon Health Authority. Lash extensions require an esthetics certificate; tattooing and permanent makeup require the tattoo artist licence from the Board of Electrologists and Body Art Practitioners, which needs 360 training hours, 50 completed procedures and a 100-question exam at 75%. Same building, very different bar. Esthetics hours and exam detail not confirmed.",
       source:"Oregon Health Authority Health Licensing Office (oregon.gov/oha/ph/hlo) — body art requirements confirmed on the Board of Electrologists and Body Art Practitioners pages; esthetics specifics not read", verified:false},

  PA: {vendor:"Pennsylvania State Board of Cosmetology (Dept. of State)", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Lash extensions require a Pennsylvania esthetician or cosmetologist licence. THE SHARPEST CONTRAST IN THIS FILE: the same board holds that microblading is outside the cosmetology scope, and 49 Pa. Code §7.77 bars using a licensed salon for non-cosmetology purposes — so lashes are licensed and salon-legal in Pennsylvania while microblading is neither state-licensed nor salon-legal. Lash hours and exam detail not confirmed from a board page.",
       source:"LashFX compilation; PA State Board of Cosmetology as regulator; microblading scope position and 49 Pa. Code §7.77 as analysed by Tucker Arensberg P.C. (2023)", verified:false},

  RI: {vendor:"Rhode Island Dept. of Health — Board of Hairdressing, Barbering and Manicuring (esthetics licence)", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Rhode Island houses both cosmetology and body art licensure inside the Department of Health, but as separate credentials — an esthetics licence for lashes, a body art practitioner licence for tattooing. Hours and exam detail not confirmed from a primary source.",
       source:"LashFX compilation (cosmetology or esthetician licence); RI Dept. of Health as regulator for both cosmetology and body art", verified:false},

  SC: {vendor:"South Carolina Dept. of Labor, Licensing and Regulation — Board of Cosmetology", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Lash extensions require a South Carolina esthetician or cosmetologist licence. THE CONTRAST MATTERS ENORMOUSLY HERE: permanent makeup and micropigmentation in South Carolina are restricted by regulation to physicians and other legally authorised healthcare providers, so a South Carolina lash technician cannot lawfully add cosmetic tattooing to the menu under any beauty licence. Lash hours and exam detail not confirmed from a board page.",
       source:"LashFX compilation; SC LLR Board of Cosmetology as regulator; the micropigmentation restriction confirmed from the SC Board of Medical Examiners micropigmentation policy (llr.sc.gov) and S.C. Regs 61-111.900", verified:false},

  SD: {vendor:"South Dakota Cosmetology Commission", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Lash extensions require a South Dakota cosmetology or esthetics licence, and at least one compilation notes services must be performed in a licensed salon. Hours, exam and the salon requirement not confirmed from a state page.",
       source:"LashFX compilation ('cosmetology or esthetician; must operate in licensed salon'); South Dakota Cosmetology Commission as regulator", verified:false},

  TN: {vendor:"Tennessee Board of Cosmetology and Barber Examiners", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Lash extensions require a Tennessee esthetician or cosmetologist licence. Contrast with tattooing, licensed by the Tennessee Department of Health for both artist and studio. Hours and exam detail not confirmed from a board page.",
       source:"LashFX compilation (cosmetology or esthetician licence); TN Board of Cosmetology and Barber Examiners as regulator", verified:false},

  TX: {vendor:"Texas Dept. of Licensing and Regulation (TDLR) — EYELASH EXTENSION SPECIALIST licence; exams administered by PSI", questions:"written and practical exams — question counts published on TDLR's exam information page, not on the application page", time:"unconfirmed", pass:"unconfirmed", fee:"$50 non-refundable application fee",
       note:"THE MODEL STANDALONE LASH LICENCE. Texas issues an Eyelash Extension Specialist licence in its own right: 320 hours of instruction at a licensed Texas school covering sanitation and safety, Texas law and TDLR rules, lash theory and design, classic, volume and hybrid application, eye anatomy, adhesive chemistry, consultation and aftercare. You must be at least 17 with a high school diploma, GED or equivalent. TDLR verifies eligibility, then PSI emails scheduling instructions for the written and practical exams. The licence runs two years from date of issue. A full cosmetology or esthetician licence also covers lash extensions — the specialist licence is the narrower, faster route. Note that Texas's permanent makeup regulation is entirely separate, at the Department of State Health Services.",
       source:"Texas Dept. of Licensing and Regulation — 'Apply for an Eyelash Extension Specialist License' (tdlr.texas.gov/barbering-and-cosmetology/individuals/apply-eyelash.htm)", verified:true,
       confidence:"partial — hours, age, exam vendor, application fee and licence term confirmed on the TDLR page; exam question counts, time limits and passing scores are on a separate TDLR exam page not read"},

  UT: {vendor:"Utah Division of Professional Licensing — Board of Cosmetology/Barbering", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Lash extensions require a Utah esthetician or cosmetologist/barber licence from DOPL. Contrast with body art, which Utah leaves largely to county health departments. Hours and exam detail not confirmed from a DOPL page.",
       source:"LashFX compilation (cosmetology or esthetician licence); Utah DOPL Board of Cosmetology/Barbering as regulator", verified:false},

  VT: {vendor:"Vermont Office of Professional Regulation — Board of Barbers and Cosmetologists", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Vermont licenses both cosmetology and tattooing through the Office of Professional Regulation in the Secretary of State's office. Lash extensions would fall under the esthetician licence, but one compilation records Vermont's lash position only as 'professional licensure likely required — confirm with the state board.' Treat as unresolved and call OPR.",
       source:"LashFX compilation ('professional licensure likely required; details to confirm with state board'); Vermont OPR as regulator", verified:false},

  VA: {vendor:"Virginia Board for Barbers and Cosmetology (DPOR) — esthetician licence", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"CONFIRMED IN STATUTE: Va. Code §54.1-700 defines esthetics to include applying makeup AND EYELASHES, and §54.1-703 requires a Board for Barbers and Cosmetology licence to practise esthetics for compensation. The same board separately licenses tattooers, permanent cosmetic tattooers and master permanent cosmetic tattooers — one agency, distinct credentials, and the esthetics licence does not carry the tattooing privilege. Esthetics training hours, exam format and fees were not published in the code sections read.",
       source:"Virginia Code §54.1-700 (definition of esthetics, expressly including eyelashes) and §54.1-703 (law.lis.virginia.gov); Virginia Board for Barbers and Cosmetology", verified:true,
       confidence:"partial — the statutory scope and licence requirement are confirmed; hours, exam and fees are not"},

  WA: {vendor:"Washington State Dept. of Licensing — Cosmetology programme (esthetician or cosmetologist licence)", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Washington runs BOTH its cosmetology and its body art licensing out of the Department of Licensing, so lashes and permanent makeup are the same agency but separate licences with very different requirements — the permanent cosmetics artist licence needs only age 18 and a bloodborne pathogens certificate at $275 a year, whereas the esthetician licence requires school hours and an examination. Esthetics hours, exam and fees were not read during research.",
       source:"Washington State Dept. of Licensing (dol.wa.gov) — body art licence requirements and fees confirmed; cosmetology fee and requirement pages not read", verified:false},

  WV: {vendor:"West Virginia Board of Barbers and Cosmetologists", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Lash extensions require a West Virginia esthetician or cosmetologist licence. Contrast with tattooing, permitted by the state health department's environmental health office. Hours and exam detail not confirmed from a board page.",
       source:"LashFX compilation (cosmetology or esthetician licence); WV Board of Barbers and Cosmetologists as regulator", verified:false},

  WI: {vendor:"Wisconsin Dept. of Safety and Professional Services — Cosmetology Examining Board (aesthetician licence)", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Lash extensions require a Wisconsin aesthetician or cosmetologist licence from the DSPS Cosmetology Examining Board. Note that DSPS also licenses tattooists under Wis. Stat. ch. 463 — same department, separate credential, and in jurisdictions over 5,000 people a local health department may act as DSPS's agent for the tattoo side. Aesthetics hours and exam detail not confirmed.",
       source:"LashFX compilation; Wisconsin DSPS Cosmetology Examining Board as regulator; tattooist structure confirmed from Wis. Stat. ch. 463", verified:false},

  WY: {vendor:"Wyoming Board of Cosmetology", questions:"unconfirmed", time:"unconfirmed", pass:"unconfirmed", fee:"unconfirmed",
       note:"Lash extensions require a Wyoming esthetician or cosmetologist licence. Note the asymmetry: Wyoming licenses lashes but has no state licence for permanent makeup at all. Hours and exam detail not confirmed from a board page.",
       source:"LashFX compilation (cosmetology or esthetician licence); Wyoming Board of Cosmetology as regulator", verified:false},
  },

  genericSpecNote: "Lash licensing not yet verified for this jurisdiction. The dominant pattern across the 51 jurisdictions is that eyelash extensions sit inside the esthetics or cosmetology scope of practice and are licensed by the state beauty board — with a handful of states (Texas most clearly) offering a narrower standalone lash credential, and a handful reported to require nothing at all. Confirm with the state cosmetology or barbering board before enrolling in a course, ask specifically whether a lash LIFT is covered by the same licence, and remember that an absent licence does not remove liability for a corneal injury.",
};
