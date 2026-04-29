export const PHONE_DISPLAY = '(425) 489-0791';
export const PHONE_TEL = '+14254890791';

export const SERVICES = [
  {
    id: 'panel',
    title: 'Panel upgrades & rewiring',
    blurb: 'Modernize your main panel, add circuits, or rewire old knob-and-tube safely to code.',
    eta: '4–8 hrs',
    from: '$1,800',
    tag: 'Most requested',
  },
  {
    id: 'ev',
    title: 'EV charger installation',
    blurb: 'Level 2 EV chargers for Tesla, Rivian, Ford, and all J1772 vehicles. 240V dedicated circuits.',
    eta: '2–4 hrs',
    from: '$650',
    tag: 'Fast install',
  },
  {
    id: 'generator',
    title: 'Whole-home generator',
    blurb: 'Natural gas and propane standby generators sized for your home. Automatic transfer switch included.',
    eta: '1–2 days',
    from: '$7,500',
    tag: 'Storm-ready',
  },
  {
    id: 'smart',
    title: 'Smart home wiring',
    blurb: 'Structured wiring, smart switches, Lutron, Control4, whole-home audio, and network runs.',
    eta: '1–3 days',
    from: '$900',
    tag: 'Convenience',
  },
  {
    id: 'repair',
    title: 'Troubleshoot & repair',
    blurb: 'Flickering lights, dead outlets, tripping breakers. We diagnose and fix in one visit when possible.',
    eta: '1–2 hrs',
    from: '$185',
    tag: 'Stay Safe',
  },
  {
    id: 'lighting',
    title: 'Lighting design & install',
    blurb: 'Recessed, pendant, landscape, under-cabinet. Design consult included on projects over $2k.',
    eta: '4–8 hrs',
    from: '$450',
    tag: 'Increase Value',
  },
  {
    id: 'pool',
    title: 'Hot tub & pool wiring',
    blurb: 'Dedicated 240V circuits, GFCI protection, bonding, and permitting for spas and pools.',
    eta: '3–6 hrs',
    from: '$875',
    tag: 'Relax',
  },
];

export const COMMERCIAL_SERVICES = [
  { t: 'Tenant improvements', d: 'Full electrical for office buildouts, retail fit-outs, and restaurants.' },
  { t: 'Ground-up construction', d: 'Design-assist and design-build for commercial and light industrial.' },
  { t: 'Service upgrades', d: '400A–4000A service, switchgear replacement, and utility coordination.' },
  { t: 'Data & low-voltage', d: 'Structured cabling, access control, CCTV rough-in, and AV backbones.' },
  { t: 'Preventive maintenance', d: 'Thermal scans, panel surveys, lighting retrofits, emergency contracts.' },
  { t: 'Emergency response', d: '24/7 response for critical facilities. SLA contracts available.' },
];

export const TEAM = [
  {
    name: 'Michael & Jessica Smith',
    role: 'Owners & Master Electrician',
    since: 'Since 2003',
    bio: "Michael and Jessica started Home Run Electric in Lynnwood, Washington with a handshake guarantee. Twenty-plus years later, the guarantee hasn't changed.",
    tint: '#D6B468',
  },
  {
    name: 'Marissa Ng',
    role: 'Operations & Co-Owner',
    since: 'Since 2008',
    bio: 'Marissa runs scheduling, permitting, and the residential line. If you called in, you talked to her or to someone she trained.',
    tint: '#A7BFA0',
  },
  {
    name: 'Dev Whitfield',
    role: 'Lead Residential Electrician',
    since: 'Since 2014',
    bio: 'Dev leads the residential crew. Panels, EV chargers, and generators are his specialty. Known for leaving the jobsite cleaner than he found it.',
    tint: '#C38B6E',
  },
  {
    name: 'Kari Oshiro',
    role: 'Commercial Project Lead',
    since: 'Since 2011',
    bio: 'Kari runs commercial builds from estimate to close-out. Ran the Snohomish County fire station expansion and the North Sound Medical TI.',
    tint: '#7FA0B8',
  },
  {
    name: 'Tomás Reyes',
    role: 'Journeyman Electrician',
    since: 'Since 2019',
    bio: 'Tomás is the guy you want on a troubleshoot. He has a sixth sense for aluminum wiring and weird neutral issues.',
    tint: '#B5A087',
  },
  {
    name: 'Jess Halvorsen',
    role: 'Apprentice',
    since: 'Since 2023',
    bio: 'Jess is in year three of her apprenticeship. She pulled her first 400A service last month and is studying for her journeyman exam.',
    tint: '#9B9EB0',
  },
];

export const LOCATIONS = [
  { city: 'Lynnwood', slug: 'lynnwood', county: 'Snohomish County', eta: '5 min', jobs: 412, hq: true },
  { city: 'Edmonds', slug: 'edmonds', county: 'Snohomish County', eta: '20 min', jobs: 221 },
  { city: 'Mountlake Terrace', slug: 'mountlake-terrace', county: 'Snohomish County', eta: '15 min', jobs: 143, emergency: true },
  { city: 'Mill Creek', slug: 'mill-creek', county: 'Snohomish County', eta: '20 min', jobs: 167 },
  { city: 'Everett', slug: 'everett', county: 'Snohomish County', eta: '25 min', jobs: 188, emergency: true },
  { city: 'Mukilteo', slug: 'mukilteo', county: 'Snohomish County', eta: '25 min', jobs: 92 },
  { city: 'Bothell', slug: 'bothell', county: 'King County', eta: '20 min', jobs: 156, emergency: true },
  { city: 'Kirkland', slug: 'kirkland', county: 'King County', eta: '30 min', jobs: 129, emergency: true },
  { city: 'Shoreline', slug: 'shoreline', county: 'King County', eta: '20 min', jobs: 119, emergency: true },
  { city: 'Lake Forest Park', slug: 'lake-forest-park', county: 'King County', eta: '25 min', jobs: 78, emergency: true },
  { city: 'Bellevue', slug: 'bellevue', county: 'King County', eta: '40 min', jobs: 84, emergency: true },
  { city: 'Redmond', slug: 'redmond', county: 'King County', eta: '40 min', jobs: 54, emergency: true },
  { city: 'Seattle', slug: 'seattle', county: 'King County', eta: '35 min', jobs: 98, emergency: true },
  { city: 'Olympia', slug: 'olympia', county: 'Thurston County', eta: '1 hr 30 min', jobs: 64 },
  { city: 'Lacey', slug: 'lacey', county: 'Thurston County', eta: '1 hr 35 min', jobs: 41 },
  { city: 'Tumwater', slug: 'tumwater', county: 'Thurston County', eta: '1 hr 35 min', jobs: 28 },
  { city: 'Tacoma', slug: 'tacoma', county: 'Pierce County', eta: '1 hr 15 min', jobs: 61 },
  { city: 'Puyallup', slug: 'puyallup', county: 'Pierce County', eta: '1 hr 20 min', jobs: 44 },
  { city: 'Lakewood', slug: 'lakewood', county: 'Pierce County', eta: '1 hr 25 min', jobs: 33 },
];

export const TESTIMONIALS = [
  {
    quote: "Ray's team upgraded our panel and ran a new EV circuit in one day. Permit was handled. Cleaner than when they got here.",
    name: 'Jordan M.',
    where: 'Gig Harbor',
    rating: 5,
  },
  {
    quote: 'Our breaker kept tripping on a Sunday night. A real electrician — not dispatch — called me back in ten minutes.',
    name: 'Priya R.',
    where: 'Lynnwood',
    rating: 5,
  },
  {
    quote: "HRE has handled our office buildouts for six years. First residential call was for my own house. No surprises either way.",
    name: 'Devon K.',
    where: 'Puyallup',
    rating: 5,
  },
];

export const COMMERCIAL_CLIENTS = [
  'GROCERY HUB, LYNNWOOD', 'PIER 88 SEAFOOD, ISSAQUAH', 'QUALITY INN, ARLINGTON',
  'CEDAR & OAK GROUP', 'NORTHWEST LOGISTICS', 'TIDEWATER CAPITAL',
  'MAPLE RIDGE SCHOOLS', 'SNOHOMISH COUNTY', 'ANCHOR BAY HOTELS',
];

export const STATS = [
  { n: 'LOCALLY', l: 'Owned & operated' },
  { n: '23+', l: 'Years in business' },
  { n: '4', l: 'Counties served' },
  { n: '1 YR', l: 'Warrantee' },
];
