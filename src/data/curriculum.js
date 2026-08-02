// Shared national curriculum. ~85% of Life & Health content is identical everywhere;
// the final lesson and final summary section swap in per-state law at runtime.
// To use produced narration instead of browser speech, add audioUrl to a lesson.

export const LESSONS = [
  {t:"Insurance Basics & Policy Structure", d:"Risk, insurable interest, policy elements", len:"14 min",
   script:"Insurance basics and policy structure. An insurance policy is a contract that transfers risk from the insured to the insurer. Insurable interest means the policyholder must stand to suffer a genuine loss if the insured event occurs. Every policy has four basic elements: offer, acceptance, consideration, and legal purpose."},
  {t:"Life Insurance: Term, Whole & Universal", d:"Policy types, riders, nonforfeiture options", len:"22 min",
   script:"Life insurance comes in three core forms. Term life covers a set period with no cash value. Whole life is permanent coverage that builds guaranteed cash value. Universal life is permanent coverage with flexible premiums and an adjustable death benefit."},
  {t:"Life Insurance Underwriting & Policy Provisions", d:"Grace period, contestability, free look, reinstatement", len:"19 min",
   script:"Key policy provisions to know. The grace period allows a short window to pay a missed premium without lapsing the policy. The contestability period, usually two years, lets the insurer investigate misstatements on the application. The free look period lets a new policyholder cancel for a full refund within a set number of days."},
  {t:"Annuities", d:"Immediate vs. deferred, fixed vs. variable", len:"16 min",
   script:"Annuities convert a sum of money into a stream of income. Immediate annuities begin payouts right away. Deferred annuities accumulate first, then pay out later. Fixed annuities guarantee a rate of return. Variable annuities tie returns to underlying investment subaccounts."},
  {t:"Health Insurance: HMO, PPO & Managed Care", d:"Plan structures, cost-sharing, network rules", len:"21 min",
   script:"Managed care plan types. An H M O requires a primary care physician and referrals to specialists, using an in-network only structure. A P P O offers more flexibility to see out-of-network providers at a higher cost. Cost-sharing includes deductibles, copayments, and coinsurance."},
  {t:"Federal Tax Treatment", d:"Taxation of premiums, benefits & 1035 exchanges", len:"13 min",
   script:"Federal tax treatment of insurance. Life insurance death benefits are generally received income tax free by the beneficiary. A 1035 exchange allows a policyholder to exchange one life insurance or annuity contract for another without triggering immediate taxation."},
  {t:"State Law, Rules & Regulations", d:"State-specific — updates automatically per state", len:"18 min", stateSpecific:true,
   script:null},
];

export const SUMMARY_SECTIONS = [
  {h:"Core Insurance Concepts", items:["Insurable interest & indemnity","Risk pooling & adverse selection","Parties to a policy: owner, insured, beneficiary"]},
  {h:"Life Insurance", items:["Term vs. permanent policies","Standard provisions: grace period, incontestability, free look","Riders: waiver of premium, accelerated death benefit, term"]},
  {h:"Health Insurance", items:["HMO vs. PPO vs. POS","Coordination of benefits","Medicare & Medicaid basics"]},
  {h:"State Law Module — auto-updates per state", items:["Producer licensing & continuing education rules","Unfair trade practices act","Free look period & replacement rules for this state"]},
];

export const QUIZ = [
  {q:"A life insurance policy's incontestability clause typically prevents the insurer from contesting a claim after how long?", opts:["6 months","1 year","2 years","5 years"], a:2},
  {q:"Which of these best describes a 'free look' period?", opts:["A window to cancel a new policy for a full refund","The time an insurer has to pay a claim","A grace period for a missed premium","A waiting period before coverage starts"], a:0},
  {q:"In an HMO plan, a policyholder typically must:", opts:["Pay no premium at all","Choose a primary care physician and use in-network providers","Use any provider nationwide with no referral","Only be covered for emergencies"], a:1},
  {q:"Adverse selection refers to:", opts:["An insurer selecting only healthy applicants","Higher-risk individuals being more likely to seek coverage","A policy lapsing for nonpayment","A state denying a license application"], a:1},
  {q:"A whole life policy's cash value grows:", opts:["Only if the stock market rises","On a tax-deferred basis over the life of the policy","Only after the insured turns 65","It never grows"], a:1},
];

export const FLASHCARDS = [
  {f:"Insurable Interest", b:"A financial or emotional stake in the continued life, health, or existence of the insured — required for a policy to be valid."},
  {f:"Grace Period", b:"The window (commonly 30–31 days) after a missed premium during which the policy stays in force."},
  {f:"Contestability Period", b:"The period (typically 2 years) during which an insurer can investigate and contest a claim based on application misstatements."},
  {f:"Free Look Period", b:"A set number of days after delivery during which the policyholder can cancel a new policy for a full refund."},
  {f:"Reinstatement", b:"Restoring a lapsed policy to force, usually requiring proof of insurability and payment of back premiums."},
  {f:"Coordination of Benefits", b:"Rules that determine payment order when a person is covered by more than one health plan."},
  {f:"Nonforfeiture Options", b:"Choices a policyholder has for the cash value of a lapsing permanent policy: cash surrender, extended term, or reduced paid-up."},
  {f:"Twisting", b:"An unfair trade practice — misrepresenting a policy to induce a replacement that isn't in the client's interest."},
];
