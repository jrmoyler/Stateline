# 51 × 23 verification report

**Research review:** 2026-08-02
**Coverage:** 23 tracks × 51 U.S. jurisdictions = **1,173 / 1,173 verified coverage units**

## What “verified” means

- A state-regulated track has all 51 jurisdiction records and each record has been reviewed
  against the responsible regulator, an official testing-provider handbook, or the documented
  national program authority.
- A federal credential has one verified issuer specification. That single specification applies
  in every jurisdiction; the project does not duplicate it 51 times.
- `unconfirmed` remains valid when the issuing authority does not publish a field. The UI labels
  these records **Verified with open fields** and explains the limitation.
- A secondary value is never silently promoted. The state evidence line retains the source and
  the caveat; the track-wide authority is shown separately with its review date.

## Coverage matrix

| Track | Scope | Jurisdiction coverage | Research authority |
|---|---|---:|---|
| Life & Health | State | 51 / 51 | State insurance departments and official exam vendors |
| CPA | State | 51 / 51 | NASBA jurisdiction directory and state accountancy boards |
| Enrolled Agent | Federal | 51 / 51 nationwide | IRS |
| AFSP | Federal | 51 / 51 nationwide | IRS |
| PMP | Federal | 51 / 51 nationwide | PMI |
| CSM | Federal | 51 / 51 nationwide | Scrum Alliance |
| Security+ | Federal | 51 / 51 nationwide | CompTIA |
| CISSP | Federal | 51 / 51 nationwide | ISC2 |
| AWS SAA | Federal | 51 / 51 nationwide | AWS Certification |
| GCP PCA | Federal | 51 / 51 nationwide | Google Cloud Certification |
| Azure Administrator | Federal | 51 / 51 nationwide | Microsoft Learn |
| CRS | National + state | 51 / 51 | State real estate commissions and official exam vendors |
| RENE | National + state | 51 / 51 | State real estate commissions and official exam vendors |
| PSA | National + state | 51 / 51 | State real estate commissions and official exam vendors |
| e-PRO | National + state | 51 / 51 | State real estate commissions and official exam vendors |
| Esthetician | State | 51 / 51 | State boards and NIC testing-program map |
| Cosmetology | State | 51 / 51 | State boards and NIC testing-program map |
| Nail Technician | State | 51 / 51 | State boards and NIC testing-program map |
| Barber | State | 51 / 51 | State boards and NIC testing-program map |
| Massage Therapy | State | 51 / 51 | FSMTB regulated-states table and state boards |
| Permanent Makeup | State/local | 51 / 51 | Body-art authorities, cosmetology boards, and enacted law |
| Lash Technician | State | 51 / 51 | State boards, limited-license programs, and NIC |
| Brow Specialist | State/local | 51 / 51 | Body-art authorities, cosmetology boards, and enacted law |

## Regression gate

`npm run validate` now fails if:

- any state-dependent track has fewer than 51 jurisdiction keys;
- any jurisdiction record has `verified !== true`;
- a federal track lacks a verified nationwide `globalSpec`;
- a track lacks a dated research method and HTTPS authority source; or
- the aggregate matrix is not exactly 1,173 / 1,173.
