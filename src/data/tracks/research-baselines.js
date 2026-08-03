// Primary-source research baselines used for the 51-jurisdiction coverage audit.
//
// A baseline does not turn an unpublished number into a fact. It establishes the
// issuing authority, national exam owner, or official testing-program source that
// was checked for every record in the track. Individual stateSpecs keep their more
// specific board/handbook citations and explicitly retain "unconfirmed" whenever
// an authority does not publish a field.

export const RESEARCH_REVIEW_DATE = "2026-08-02";

const federal = (authority, url, method = "Issuer specification and candidate documentation reviewed") => ({
  reviewedAt: RESEARCH_REVIEW_DATE,
  coverage: "nationwide",
  method,
  sources: [{ authority, url }],
});

const state = (authority, url, method) => ({
  reviewedAt: RESEARCH_REVIEW_DATE,
  coverage: "51-jurisdiction",
  method,
  sources: [{ authority, url }],
});

export const RESEARCH_BASELINES = {
  lh: state(
    "State insurance departments and current official exam-vendor handbooks",
    "https://content.naic.org/state-insurance-departments",
    "Each jurisdiction was checked against its insurance department and the department's current testing vendor; unresolved unpublished fields remain explicit."
  ),
  cpa: state(
    "National Association of State Boards of Accountancy — CPA Exam jurisdictions",
    "https://nasba.org/exams/cpaexam/",
    "NASBA's jurisdiction directory and the linked state accountancy board were checked for exam eligibility, administration, and state licensure differences."
  ),
  ea: federal("Internal Revenue Service — Enrolled Agents", "https://www.irs.gov/tax-professionals/enrolled-agents"),
  afsp: federal("Internal Revenue Service — Annual Filing Season Program", "https://www.irs.gov/tax-professionals/annual-filing-season-program"),
  pmp: federal("Project Management Institute — PMP certification", "https://www.pmi.org/certifications/project-management-pmp"),
  csm: federal("Scrum Alliance — Certified ScrumMaster", "https://www.scrumalliance.org/get-certified/scrum-master-track/certified-scrummaster"),
  "security-plus": federal("CompTIA — Security+", "https://www.comptia.org/certifications/security"),
  cissp: federal("ISC2 — CISSP", "https://www.isc2.org/certifications/cissp"),
  "aws-saa": federal("Amazon Web Services — Solutions Architect Associate", "https://aws.amazon.com/certification/certified-solutions-architect-associate/"),
  "gcp-pca": federal("Google Cloud — Professional Cloud Architect", "https://cloud.google.com/learn/certification/cloud-architect"),
  "azure-admin": federal("Microsoft Learn — Azure Administrator Associate", "https://learn.microsoft.com/credentials/certifications/azure-administrator/"),

  crs: state(
    "State real estate commissions and their official testing-provider handbooks",
    "https://www.arello.org/resources/regulatory-agencies/",
    "The underlying salesperson/broker license was reviewed because it is the state prerequisite for the national designation; PSI, Pearson VUE, and state-administered exceptions are identified per jurisdiction."
  ),
  rene: state(
    "State real estate commissions and their official testing-provider handbooks",
    "https://www.arello.org/resources/regulatory-agencies/",
    "The underlying salesperson/broker license was reviewed because it is the state prerequisite for the national certification; PSI, Pearson VUE, and state-administered exceptions are identified per jurisdiction."
  ),
  psa: state(
    "State real estate commissions and their official testing-provider handbooks",
    "https://www.arello.org/resources/regulatory-agencies/",
    "The underlying salesperson/broker license was reviewed because it is the state prerequisite for the national certification; PSI, Pearson VUE, and state-administered exceptions are identified per jurisdiction."
  ),
  epro: state(
    "State real estate commissions and their official testing-provider handbooks",
    "https://www.arello.org/resources/regulatory-agencies/",
    "The underlying salesperson/broker license was reviewed because it is the state prerequisite for the national certification; PSI, Pearson VUE, and state-administered exceptions are identified per jurisdiction."
  ),

  esthetician: state(
    "NIC state testing-program map and linked state regulatory agencies",
    "https://nictesting.org/maps/",
    "State training, scope, exam, and renewal rules were reviewed against the responsible board or agency; NIC/provider data supplies the national-exam baseline."
  ),
  cosmetology: state(
    "NIC state testing-program map and linked state regulatory agencies",
    "https://nictesting.org/maps/",
    "State training, scope, exam, and renewal rules were reviewed against the responsible board or agency; NIC/provider data supplies the national-exam baseline."
  ),
  "nail-tech": state(
    "NIC state testing-program map and linked state regulatory agencies",
    "https://nictesting.org/maps/",
    "State manicurist/nail-technician training, exam, and renewal rules were reviewed; no-license jurisdictions remain called out rather than receiving invented exam data."
  ),
  barber: state(
    "NIC state testing-program map and linked state regulatory agencies",
    "https://nictesting.org/maps/",
    "State barber training, exam, and renewal rules were reviewed against the responsible board or agency, including states with separate barber tiers."
  ),
  massage: state(
    "Federation of State Massage Therapy Boards — regulated states",
    "https://fsmtb.org/regulated-states/",
    "The federation's board-supplied state table was cross-read with state board notes; Kansas, Minnesota, and Wyoming are explicitly treated as no-statewide-license jurisdictions."
  ),
  "permanent-makeup": state(
    "State/local body-art authorities, state cosmetology boards, and enacted law",
    "https://www.neha.org/body-art-resources",
    "Each jurisdiction's controlling model was classified as state body art, local health regulation, cosmetology, dual credential, or no statewide practitioner license; local variation is preserved in the state note."
  ),
  "lash-tech": state(
    "State cosmetology boards, limited-license programs, and NIC testing programs",
    "https://nictesting.org/maps/",
    "Each jurisdiction was checked for a dedicated lash credential or the esthetician/cosmetologist license that legally supplies the scope."
  ),
  "brow-specialist": state(
    "State/local body-art authorities, state cosmetology boards, and enacted law",
    "https://www.neha.org/body-art-resources",
    "Each jurisdiction was checked separately for surface brow services and skin-breaking microblading because the two services commonly fall under different regulators."
  ),
};
