export interface Category {
  slug: string
  title: string
  tag: string
  blurb: string
  image: string
  path: string
}

export interface ServiceTrack {
  slug: string
  title: string
  short: string
  blurb: string
  image: string
  path: string
  cta: string
}

export interface ShowcaseItem {
  name: string
  spec: string
  origin: string
}

export const heroImage =
  'https://media.base44.com/images/public/6a95b6c23e09b63b19fe8c4b/f8821d574_generated_c82d54e7.jpg'

export const categories: Category[] = [
  {
    slug: 'cars-suvs',
    title: 'Cars & SUVs',
    tag: 'LHD & RHD',
    blurb: 'Curated acquisition of luxury sedans, performance coupés and SUVs in both left- and right-hand drive, sourced globally and delivered turnkey to your door.',
    image: 'https://media.base44.com/images/public/6a95b6c23e09b63b19fe8c4b/7135ebce9_generated_dc2526d3.jpg',
    path: '/cars-suvs',
  },
  {
    slug: 'commercial-fleet',
    title: 'Trucks, Trailers & Buses',
    tag: 'Commercial Fleet',
    blurb: 'Heavy haulers, articulated trailers, coaches and microbuses — procured, inspected and deployed for operators who cannot afford downtime.',
    image: 'https://media.base44.com/images/public/6a95b6c23e09b63b19fe8c4b/d38ed381a_generated_6c86c0b1.jpg',
    path: '/commercial-fleet',
  },
  {
    slug: 'heavy-machinery',
    title: 'Construction & Heavy Machinery',
    tag: 'Industrial Assets',
    blurb: 'Excavators, loaders, cranes and earthmoving equipment — sourced to spec, certified and mobilized to any jobsite on the map.',
    image: 'https://media.base44.com/images/public/6a95b6c23e09b63b19fe8c4b/5720788aa_generated_8f648b25.jpg',
    path: '/heavy-machinery',
  },
  {
    slug: 'marine',
    title: 'Watercraft & Boats',
    tag: 'Marine Division',
    blurb: 'Motor yachts, sport cruisers and commercial watercraft — acquired, surveyed and shipped across oceans with white-glove marine logistics.',
    image: 'https://media.base44.com/images/public/6a95b6c23e09b63b19fe8c4b/15b2a8d65_generated_f447dd4c.jpg',
    path: '/marine',
  },
  {
    slug: 'mobility',
    title: 'Motorcycles & Personal Mobility',
    tag: 'Two-Wheeler & Mobility',
    blurb: 'Performance motorcycles, urban scooters and personal mobility platforms — sourced, tuned and crated for pristine global delivery.',
    image: 'https://media.base44.com/images/public/6a95b6c23e09b63b19fe8c4b/52a3ff024_generated_da12f6a7.jpg',
    path: '/mobility',
  },
  {
    slug: 'parts-customization',
    title: 'Parts, Tuning & Custom Modifications',
    tag: 'Parts & Atelier',
    blurb: 'OEM and performance parts, bespoke tuning, accessories and full custom modifications — engineered and dispatched worldwide.',
    image: 'https://media.base44.com/images/public/6a95b6c23e09b63b19fe8c4b/6d7947b4e_generated_64bc1ae5.jpg',
    path: '/parts-customization',
  },
]

export const serviceTracks: ServiceTrack[] = [
  {
    slug: 'turnkey-procurement',
    title: 'Full-Cycle Turnkey Procurement',
    short: 'Source → Acquire → Ship → Deliver',
    blurb: 'We source the exact vehicle, machine or part globally, negotiate and acquire on your behalf, then engineer seamless door-to-door transit. One mandate, one accountable partner.',
    image: 'https://media.base44.com/images/public/6a95b6c23e09b63b19fe8c4b/0f33ee2db_generated_118f39d3.jpg',
    path: '/turnkey-procurement',
    cta: 'Request Full Concierge Sourcing',
  },
  {
    slug: 'white-glove-logistics',
    title: 'Standalone White-Glove Logistics & Shipping',
    short: 'Port-to-port & door-to-door freight',
    blurb: 'You own the asset — we move it. Containerization, RORO, air freight, marine insurance, customs clearance and last-mile delivery, handled with surgical precision.',
    image: 'https://media.base44.com/images/public/6a95b6c23e09b63b19fe8c4b/9d25378bb_generated_7fd30944.jpg',
    path: '/white-glove-logistics',
    cta: 'Book Standalone Shipping & Freight',
  },
]

export const pageImages = {
  globalFreight: 'https://media.base44.com/images/public/6a95b6c23e09b63b19fe8c4b/def25744d_generated_e4726644.jpg',
  howItWorks: 'https://media.base44.com/images/public/6a95b6c23e09b63b19fe8c4b/3ed54f5d5_generated_0d5c189b.jpg',
  intakeHub: 'https://media.base44.com/images/public/6a95b6c23e09b63b19fe8c4b/c0b131d52_generated_4f510c10.jpg',
}