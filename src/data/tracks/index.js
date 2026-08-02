// The track catalog. One credential per file; this module is the only place that
// knows the whole set. Adding a track is: write src/data/tracks/<id>.js against
// CONTRACT.md, import it here, and list its id in a group below.

import lh              from './lh.js';
import cpa             from './cpa.js';
import ea              from './ea.js';
import afsp            from './afsp.js';
import pmp             from './pmp.js';
import csm             from './csm.js';
import securityPlus    from './security-plus.js';
import cissp           from './cissp.js';
import awsSaa          from './aws-saa.js';
import gcpPca          from './gcp-pca.js';
import azureAdmin      from './azure-admin.js';
import crs             from './crs.js';
import rene            from './rene.js';
import psa             from './psa.js';
import epro            from './epro.js';
import esthetician     from './esthetician.js';
import cosmetology     from './cosmetology.js';
import nailTech        from './nail-tech.js';
import barber          from './barber.js';
import massage         from './massage.js';
import permanentMakeup from './permanent-makeup.js';
import lashTech        from './lash-tech.js';

const ALL = [
  lh, cpa, ea, afsp, pmp, csm, securityPlus, cissp, awsSaa, gcpPca, azureAdmin,
  crs, rene, psa, epro, esthetician, cosmetology, nailTech, barber, massage,
  permanentMakeup, lashTech,
];

export const TRACKS = Object.fromEntries(ALL.map(t => [t.id, t]));

// Selector order. Insurance sits first because it is the track with the deepest
// verified data — it sets the expectation for what the others are working toward.
export const TRACK_GROUPS = [
  {label:"Insurance",                   ids:["lh"]},
  {label:"Tax & Accounting",            ids:["cpa","ea","afsp"]},
  {label:"Project Management & Agile",  ids:["pmp","csm"]},
  {label:"Cybersecurity",               ids:["security-plus","cissp"]},
  {label:"Cloud & Infrastructure",      ids:["aws-saa","gcp-pca","azure-admin"]},
  {label:"Real Estate",                 ids:["crs","rene","psa","epro"]},
  {label:"Beauty & Wellness",           ids:["esthetician","cosmetology","nail-tech","barber",
                                             "massage","permanent-makeup","lash-tech"]},
];

export const DEFAULT_TRACK_ID = "lh";
