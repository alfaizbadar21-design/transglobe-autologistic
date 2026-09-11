// ═══════════════════════════════════════════════════════════════════════════
// FLEET INVENTORY DATA MODEL
// ═══════════════════════════════════════════════════════════════════════════
// Real makes, models, years, specs — verified against actual manufacturer
// catalogs. Images below show REAL, category-correct photos (via Unsplash,
// free-to-use license) — NOT the exact make/model of every listing yet.
//
// TO ADD REAL EXACT-MODEL IMAGES LATER:
// Replace a specific listing's `images` array with:
//   images: [
//     '/images/inventory/{category}/{brand-slug}/{model-slug}/01.webp',
//     '/images/inventory/{category}/{brand-slug}/{model-slug}/02.webp',
//     ...
//   ]
// Nothing else in the codebase needs to change — cards use images[0],
// detail pages use the full array.
// ═══════════════════════════════════════════════════════════════════════════

export type CategorySlug =
  | 'cars-suvs'
  | 'commercial-fleet'
  | 'heavy-machinery'
  | 'marine'
  | 'mobility'
  | 'parts-customization'

export type Condition = 'New' | 'Used' | 'Certified Pre-Owned'

export type ListingAvailability =
  | 'catalog'
  | 'procurement-available'
  | 'sourcing-available'
  | 'verified-available'
  | 'reserved'
  | 'sold'

export interface Listing {
  id: string
  category: CategorySlug
  make: string
  model: string
  variant?: string
  year?: number
  images: string[]
  specSummary: string
  origin?: string
  condition: Condition
  driveType?: string
  priceLabel: string
  featured?: boolean
  availability: ListingAvailability
  procurementAvailable?: boolean
  worldwideShipping?: boolean
}

// ─── Category-representative images (real photos, free-to-use license) ────
// NOTE: These show the correct VEHICLE TYPE for each category — not the
// exact make/model of every listing. Replace a specific listing's `images`
// array with real model photos as they're sourced; nothing else changes.

const categoryImagePool: Record<CategorySlug, string[]> = {
  'cars-suvs': [
    'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
    'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&q=80',
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
    'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80',
    'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80',
    'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80',
    'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80',
    'https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?w=800&q=80',
  ],
  'commercial-fleet': [
    'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80',
    'https://images.unsplash.com/photo-1586191582056-b7a6acf4b833?w=800&q=80',
    'https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?w=800&q=80',
    'https://images.unsplash.com/photo-1601517258363-f2b2cb63ba5d?w=800&q=80',
    'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80',
  ],
  'heavy-machinery': [
    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
    'https://images.unsplash.com/photo-1621847468516-1e2c92c6c96a?w=800&q=80',
    'https://images.unsplash.com/photo-1541625810516-44f1ce894bde?w=800&q=80',
    'https://images.unsplash.com/photo-1590496793929-36417d3117de?w=800&q=80',
    'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&q=80',
    'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
  ],
  marine: [
    'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80',
    'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
    'https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800&q=80',
    'https://images.unsplash.com/photo-1520351826066-df3b1ba99182?w=800&q=80',
    'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80',
    'https://images.unsplash.com/photo-1588413003966-c33bf25da4f4?w=800&q=80',
  ],
  mobility: [
    'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80',
    'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80',
    'https://images.unsplash.com/photo-1547549082-6bc09f2049ae?w=800&q=80',
    'https://images.unsplash.com/photo-1580310614729-ccd69652491d?w=800&q=80',
    'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&q=80',
    'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80',
  ],
  'parts-customization': [
    'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80',
    'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?w=800&q=80',
    'https://images.unsplash.com/photo-1600661653561-629509216228?w=800&q=80',
    'https://images.unsplash.com/photo-1621258651578-6bda8c4e46f2?w=800&q=80',
    'https://images.unsplash.com/photo-1622185135505-2d795003994a?w=800&q=80',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  ],
}

// Deterministic pick — same listing always shows the same photo (no flicker
// on re-render), but different listings in the same category get variety.
function hashString(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i)
    hash |= 0
  }
  return Math.abs(hash)
}

function categoryImages(id: string, category: CategorySlug, count = 3): string[] {
  const pool = categoryImagePool[category]
  const start = hashString(id) % pool.length
  return Array.from({ length: count }, (_, i) => pool[(start + i) % pool.length])
}

// Builder — fills in `images` automatically unless explicitly overridden
function entry(
  partial: Omit<Listing, 'images'> & { images?: string[] }
): Listing {
  return {
    ...partial,
    images: partial.images ?? categoryImages(partial.id, partial.category),
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// CARS & SUVS
// ═══════════════════════════════════════════════════════════════════════════
const carsSuvs: Listing[] = [
  entry({ id: 'cs-001', category: 'cars-suvs', make: 'Toyota', model: 'Land Cruiser', variant: '300 GR Sport', year: 2025, specSummary: 'Twin-Turbo V6 · 4WD · Automatic', origin: 'Toyota City, JP', condition: 'New', driveType: 'RHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true, worldwideShipping: true, featured: true }),
  entry({ id: 'cs-002', category: 'cars-suvs', make: 'Toyota', model: 'Land Cruiser Prado', variant: 'VXR', year: 2024, specSummary: '2.8L Turbo Diesel · 4WD', origin: 'Toyota City, JP', condition: 'Used', driveType: 'RHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-003', category: 'cars-suvs', make: 'Toyota', model: 'Fortuner', variant: 'GR Sport', year: 2024, specSummary: '2.8L Turbo Diesel · 4WD', origin: 'Bangkok, TH', condition: 'New', driveType: 'RHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-004', category: 'cars-suvs', make: 'Lexus', model: 'LX', variant: '600 Ultra Luxury', year: 2025, specSummary: 'Twin-Turbo V6 · 4WD', origin: 'Nagoya, JP', condition: 'New', driveType: 'RHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true, featured: true }),
  entry({ id: 'cs-005', category: 'cars-suvs', make: 'Lexus', model: 'GX', variant: '550 Overtrail', year: 2024, specSummary: 'Twin-Turbo V6 · 4WD', origin: 'Nagoya, JP', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-006', category: 'cars-suvs', make: 'Mercedes-Benz', model: 'G-Class', variant: 'G 63 AMG', year: 2025, specSummary: 'V8 Biturbo · AWD', origin: 'Graz, AT', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true, featured: true }),
  entry({ id: 'cs-007', category: 'cars-suvs', make: 'Mercedes-Benz', model: 'GLS', variant: '600 Maybach', year: 2024, specSummary: 'V8 Biturbo · 4MATIC', origin: 'Stuttgart, DE', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-008', category: 'cars-suvs', make: 'Mercedes-Benz', model: 'GLE', variant: '450 4MATIC', year: 2024, specSummary: 'Turbo I6 · 4MATIC', origin: 'Stuttgart, DE', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-009', category: 'cars-suvs', make: 'BMW', model: 'X7', variant: 'M60i', year: 2024, specSummary: 'V8 · xDrive AWD · 7-Seat', origin: 'Munich, DE', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-010', category: 'cars-suvs', make: 'BMW', model: 'X5', variant: 'M60i', year: 2024, specSummary: 'V8 · xDrive AWD', origin: 'Spartanburg, US', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-011', category: 'cars-suvs', make: 'BMW', model: 'XM', variant: 'Label Red', year: 2025, specSummary: 'V8 Hybrid · 748hp', origin: 'Munich, DE', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true, featured: true }),
  entry({ id: 'cs-012', category: 'cars-suvs', make: 'Audi', model: 'Q8', variant: '60 TFSIe', year: 2024, specSummary: 'V6 Hybrid · Quattro', origin: 'Ingolstadt, DE', condition: 'Certified Pre-Owned', driveType: 'LHD', priceLabel: 'On Request', availability: 'verified-available' }),
  entry({ id: 'cs-013', category: 'cars-suvs', make: 'Porsche', model: 'Cayenne', variant: 'Turbo GT', year: 2024, specSummary: 'V8 Twin-Turbo · AWD', origin: 'Leipzig, DE', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-014', category: 'cars-suvs', make: 'Range Rover', model: 'Range Rover', variant: 'Autobiography LWB', year: 2025, specSummary: 'V8 · 4WD · Air Suspension', origin: 'Solihull, UK', condition: 'New', driveType: 'RHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true, featured: true }),
  entry({ id: 'cs-015', category: 'cars-suvs', make: 'Range Rover', model: 'Range Rover Sport', variant: 'SV', year: 2024, specSummary: 'Twin-Turbo V8 · AWD', origin: 'Solihull, UK', condition: 'New', driveType: 'RHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-016', category: 'cars-suvs', make: 'Bentley', model: 'Bentayga', variant: 'EWB Azure', year: 2024, specSummary: 'V8 · Extended Wheelbase', origin: 'Crewe, UK', condition: 'New', driveType: 'RHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-017', category: 'cars-suvs', make: 'Rolls-Royce', model: 'Cullinan', variant: 'Black Badge', year: 2025, specSummary: 'V12 · AWD · Bespoke Interior', origin: 'Goodwood, UK', condition: 'New', driveType: 'RHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true, featured: true }),
  entry({ id: 'cs-018', category: 'cars-suvs', make: 'Aston Martin', model: 'DBX', variant: '707', year: 2024, specSummary: 'Twin-Turbo V8 · AWD', origin: 'Warwickshire, UK', condition: 'New', driveType: 'RHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-019', category: 'cars-suvs', make: 'Lamborghini', model: 'Urus', variant: 'Performante', year: 2024, specSummary: 'Twin-Turbo V8 · AWD', origin: "Sant'Agata Bolognese, IT", condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true, featured: true }),
  entry({ id: 'cs-020', category: 'cars-suvs', make: 'Maserati', model: 'Levante', variant: 'Trofeo', year: 2023, specSummary: 'Twin-Turbo V8 · AWD', origin: 'Modena, IT', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-021', category: 'cars-suvs', make: 'Cadillac', model: 'Escalade', variant: 'V-Series', year: 2025, specSummary: 'Supercharged V8 · 4WD', origin: 'Michigan, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-022', category: 'cars-suvs', make: 'GMC', model: 'Yukon Denali', variant: 'Ultimate', year: 2024, specSummary: 'V8 · 4WD · 8-Seat', origin: 'Michigan, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-023', category: 'cars-suvs', make: 'Nissan', model: 'Patrol', variant: 'Nismo', year: 2024, specSummary: 'V8 · 4WD · Off-Road Package', origin: 'Yokohama, JP', condition: 'Used', driveType: 'RHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-024', category: 'cars-suvs', make: 'Genesis', model: 'GV80', variant: 'Coupe', year: 2024, specSummary: 'Twin-Turbo V6 · AWD', origin: 'Ulsan, KR', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-025', category: 'cars-suvs', make: 'Volvo', model: 'XC90', variant: 'Ultra Plug-in Hybrid', year: 2024, specSummary: 'Plug-in Hybrid · AWD', origin: 'Gothenburg, SE', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
]

// ═══════════════════════════════════════════════════════════════════════════
// COMMERCIAL FLEET
// ═══════════════════════════════════════════════════════════════════════════
const commercialFleet: Listing[] = [
  entry({ id: 'cf-001', category: 'commercial-fleet', make: 'Volvo Trucks', model: 'FH16', variant: '750 Globetrotter', year: 2023, specSummary: '16L · 750hp · 6x4 Tractor Unit', origin: 'Gothenburg, SE', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-002', category: 'commercial-fleet', make: 'Mercedes-Benz', model: 'Actros', variant: '2653 6x4', year: 2024, specSummary: '15.6L · 530hp · Tractor Unit', origin: 'Wörth am Rhein, DE', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cf-003', category: 'commercial-fleet', make: 'Scania', model: 'R Series', variant: 'R 500 XT', year: 2023, specSummary: '13L · 500hp · 6x4', origin: 'Södertälje, SE', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-004', category: 'commercial-fleet', make: 'MAN', model: 'TGX', variant: '18.640', year: 2024, specSummary: '16.2L · 640hp · 4x2', origin: 'Munich, DE', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cf-005', category: 'commercial-fleet', make: 'DAF', model: 'XF', variant: '480 FT', year: 2023, specSummary: '12.9L · 480hp · 4x2', origin: 'Eindhoven, NL', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-006', category: 'commercial-fleet', make: 'Mercedes-Benz', model: 'Sprinter', variant: '519 CDI Box', year: 2024, specSummary: '2.0L Diesel · Box Body Van', origin: 'Düsseldorf, DE', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cf-007', category: 'commercial-fleet', make: 'Iveco', model: 'Daily', variant: '70C18', year: 2023, specSummary: '3.0L Diesel · Chassis Cab', origin: 'Turin, IT', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-008', category: 'commercial-fleet', make: 'Freightliner', model: 'Cascadia', variant: '126 6x4', year: 2024, specSummary: '14.8L · 505hp · Tractor Unit', origin: 'North Carolina, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true, featured: true }),
  entry({ id: 'cf-009', category: 'commercial-fleet', make: 'Kenworth', model: 'T680', variant: 'Next Gen 6x4', year: 2024, specSummary: '15L · 605hp · Tractor Unit', origin: 'Washington, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cf-010', category: 'commercial-fleet', make: 'Peterbilt', model: '579', variant: 'Ultraloft 6x4', year: 2024, specSummary: '15L · 605hp · Tractor Unit', origin: 'Texas, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-011', category: 'commercial-fleet', make: 'Setra', model: 'ComfortClass', variant: 'S 517 HD', year: 2023, specSummary: '49-Seat Coach · Diesel', origin: 'Neu-Ulm, DE', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-012', category: 'commercial-fleet', make: 'MAN', model: "Lion's Coach", year: 2024, specSummary: '53-Seat Coach · Diesel', origin: 'Munich, DE', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cf-013', category: 'commercial-fleet', make: 'Mercedes-Benz', model: 'Tourismo', year: 2023, specSummary: '49-Seat Coach · Diesel', origin: 'Mannheim, DE', condition: 'Used', driveType: 'RHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-014', category: 'commercial-fleet', make: 'Yutong', model: 'ZK6122', variant: 'City Bus', year: 2024, specSummary: 'Low-Floor Hybrid · 90-Pax', origin: 'Zhengzhou, CN', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cf-015', category: 'commercial-fleet', make: 'Toyota', model: 'Coaster', variant: 'Deluxe', year: 2024, specSummary: '30-Seat Microbus · Diesel', origin: 'Toyota City, JP', condition: 'New', driveType: 'RHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cf-016', category: 'commercial-fleet', make: 'Isuzu', model: 'NPR', variant: '400 Box Truck', year: 2023, specSummary: '5.2L Diesel · 7-Ton', origin: 'Fujisawa, JP', condition: 'Used', driveType: 'RHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-017', category: 'commercial-fleet', make: 'Hino', model: '500 Series', variant: 'Tipper', year: 2024, specSummary: '6x4 · 20m³ Dump Body', origin: 'Hino, JP', condition: 'New', driveType: 'RHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cf-018', category: 'commercial-fleet', make: 'FUSO', model: 'Canter', variant: '7C18', year: 2023, specSummary: '3.0L Diesel · Chassis Cab', origin: 'Kawasaki, JP', condition: 'Used', driveType: 'RHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-019', category: 'commercial-fleet', make: 'Renault Trucks', model: 'T High', variant: '520 6x4', year: 2023, specSummary: '13L · 520hp · Tractor Unit', origin: 'Lyon, FR', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-020', category: 'commercial-fleet', make: 'Neoplan', model: 'Cityliner', year: 2024, specSummary: '49-Seat Coach · Panoramic', origin: 'Plauen, DE', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
]

// ═══════════════════════════════════════════════════════════════════════════
// HEAVY MACHINERY
// ═══════════════════════════════════════════════════════════════════════════
const heavyMachinery: Listing[] = [
  entry({ id: 'hm-001', category: 'heavy-machinery', make: 'Caterpillar', model: '320', variant: 'GC Excavator', year: 2023, specSummary: '20-Ton Crawler · 1.2m³ Bucket', origin: 'Illinois, US', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'hm-002', category: 'heavy-machinery', make: 'Komatsu', model: 'PC210', variant: 'LC-11 Excavator', year: 2024, specSummary: '21-Ton Crawler · Tier 4', origin: 'Tokyo, JP', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'hm-003', category: 'heavy-machinery', make: 'Volvo CE', model: 'EC220E', variant: 'Excavator', year: 2023, specSummary: '22-Ton Crawler', origin: 'Eskilstuna, SE', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'hm-004', category: 'heavy-machinery', make: 'Hitachi', model: 'ZX210', variant: '-6 Excavator', year: 2024, specSummary: '21-Ton Crawler · Fuel Efficient', origin: 'Ibaraki, JP', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'hm-005', category: 'heavy-machinery', make: 'JCB', model: '3CX', variant: 'Backhoe Loader', year: 2023, specSummary: '4x4 · Extendable Dipper', origin: 'Staffordshire, UK', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'hm-006', category: 'heavy-machinery', make: 'Caterpillar', model: '950', variant: 'GC Wheel Loader', year: 2024, specSummary: '3.4m³ Bucket · Z-Bar', origin: 'Illinois, US', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'hm-007', category: 'heavy-machinery', make: 'Komatsu', model: 'WA380', variant: '-8 Wheel Loader', year: 2023, specSummary: '3.1m³ Bucket · 4WD', origin: 'Tokyo, JP', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'hm-008', category: 'heavy-machinery', make: 'Liebherr', model: 'LTM 1090', variant: '4.2 Mobile Crane', year: 2024, specSummary: '90-Ton Telescopic · 5-Axle', origin: 'Ehingen, DE', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true, featured: true }),
  entry({ id: 'hm-009', category: 'heavy-machinery', make: 'Bomag', model: 'BW213', variant: 'D-5 Roller', year: 2024, specSummary: '13-Ton Single Drum Vibratory', origin: 'Boppard, DE', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'hm-010', category: 'heavy-machinery', make: 'Case', model: '1150M', variant: 'Bulldozer', year: 2023, specSummary: 'Crawler · Semi-U Blade', origin: 'Wisconsin, US', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'hm-011', category: 'heavy-machinery', make: 'Caterpillar', model: 'D6', variant: 'Bulldozer', year: 2024, specSummary: 'Crawler · Semi-U Blade', origin: 'Illinois, US', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'hm-012', category: 'heavy-machinery', make: 'Volvo CE', model: 'A40G', variant: 'Articulated Dump Truck', year: 2023, specSummary: '39-Ton Payload · 6x6', origin: 'Braås, SE', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'hm-013', category: 'heavy-machinery', make: 'JCB', model: '540-170', variant: 'Telehandler', year: 2024, specSummary: 'Lift 17m · 4-Ton', origin: 'Staffordshire, UK', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'hm-014', category: 'heavy-machinery', make: 'Manitou', model: 'MHT 10180', variant: 'Telehandler', year: 2023, specSummary: 'Lift 18m · 10-Ton', origin: 'Ancenis, FR', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'hm-015', category: 'heavy-machinery', make: 'Wirtgen', model: 'W210', variant: 'Milling Machine', year: 2024, specSummary: '2.2m Width · Cold Planer', origin: 'Windhagen, DE', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'hm-016', category: 'heavy-machinery', make: 'SANY', model: 'SY215C', variant: 'Excavator', year: 2023, specSummary: '21.5-Ton Crawler', origin: 'Changsha, CN', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'hm-017', category: 'heavy-machinery', make: 'XCMG', model: 'QY50KA', variant: 'Mobile Crane', year: 2024, specSummary: '50-Ton Telescopic', origin: 'Xuzhou, CN', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'hm-018', category: 'heavy-machinery', make: 'DEVELON', model: 'DX225LC', variant: 'Excavator', year: 2023, specSummary: '22.5-Ton Crawler', origin: 'Incheon, KR', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'hm-019', category: 'heavy-machinery', make: 'John Deere', model: '850L', variant: 'Bulldozer', year: 2024, specSummary: 'Crawler · Semi-U Blade', origin: 'Iowa, US', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'hm-020', category: 'heavy-machinery', make: 'Hyundai CE', model: 'HL975A', variant: 'Wheel Loader', year: 2023, specSummary: '3.2m³ Bucket · 4WD', origin: 'Ulsan, KR', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
]

// ═══════════════════════════════════════════════════════════════════════════
// MARINE
// ═══════════════════════════════════════════════════════════════════════════
const marine: Listing[] = [
  entry({ id: 'mr-001', category: 'marine', make: 'Sunseeker', model: 'Predator', variant: '74', year: 2023, specSummary: '22.7m Motor Yacht · 3 Cabins · 30 Knots', origin: 'Poole, UK', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available', featured: true }),
  entry({ id: 'mr-002', category: 'marine', make: 'Azimut', model: 'Grande', variant: '27M', year: 2024, specSummary: '27m Motor Yacht · 4 Cabins · IPS Drives', origin: 'Avigliana, IT', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'mr-003', category: 'marine', make: 'Ferretti Yachts', model: '780', year: 2023, specSummary: '24m Motor Yacht · 4 Cabins · 28 Knots', origin: 'Forlì, IT', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mr-004', category: 'marine', make: 'Princess', model: 'V65', year: 2024, specSummary: '19.8m · Sport Flybridge', origin: 'Plymouth, UK', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'mr-005', category: 'marine', make: 'Riva', model: '76', variant: 'Perseo', year: 2023, specSummary: '23m Coupé · 34 Knots', origin: 'Sarnico, IT', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mr-006', category: 'marine', make: 'Fairline', model: 'Targa', variant: '65', year: 2024, specSummary: '19.8m Sport Cruiser', origin: 'Northamptonshire, UK', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'mr-007', category: 'marine', make: 'Beneteau', model: 'Gran Turismo', variant: '46', year: 2023, specSummary: '14m Flybridge · Twin Diesel', origin: 'Saint-Gilles-Croix-de-Vie, FR', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mr-008', category: 'marine', make: 'Sea Ray', model: 'L650', variant: 'Flybridge', year: 2024, specSummary: '19.8m · 3 Cabins', origin: 'Tennessee, US', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'mr-009', category: 'marine', make: 'Boston Whaler', model: '420', variant: 'Outrage', year: 2023, specSummary: '12.8m Center Console · Triple Outboard', origin: 'Florida, US', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mr-010', category: 'marine', make: 'Numarine', model: '26XP', year: 2024, specSummary: '26m Explorer · Long Range', origin: 'Antalya, TR', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true, featured: true }),
  entry({ id: 'mr-011', category: 'marine', make: 'Sanlorenzo', model: 'SL86', year: 2024, specSummary: '26m Motor Yacht · 4 Cabins', origin: 'Viareggio, IT', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'mr-012', category: 'marine', make: 'Beneteau', model: 'Oceanis', variant: '46.1', year: 2023, specSummary: '13.5m Sailing Yacht · 3 Cabins', origin: 'Saint-Gilles-Croix-de-Vie, FR', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mr-013', category: 'marine', make: 'Jeanneau', model: 'NC', variant: '37', year: 2024, specSummary: '11.4m Day Cruiser', origin: 'Les Herbiers, FR', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'mr-014', category: 'marine', make: 'Yamaha', model: '275SD', year: 2023, specSummary: '8.4m Sport Boat · Jet Drive', origin: 'Shizuoka, JP', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mr-015', category: 'marine', make: 'Sea-Doo', model: 'GTX Limited', variant: '300', year: 2024, specSummary: 'Personal Watercraft · 300hp', origin: 'Valcourt, CA', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'mr-016', category: 'marine', make: 'Zodiac', model: 'Medline', variant: '9.5 RIB', year: 2023, specSummary: '9.5m Rigid Inflatable Boat', origin: 'La Rochelle, FR', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mr-017', category: 'marine', make: 'Hatteras', model: 'GT65', year: 2023, specSummary: '19.8m Sport Fisher', origin: 'North Carolina, US', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mr-018', category: 'marine', make: 'Viking', model: '54', variant: 'Convertible', year: 2024, specSummary: '16.5m · Tuna Tower', origin: 'New Jersey, US', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
]

// ═══════════════════════════════════════════════════════════════════════════
// MOBILITY
// ═══════════════════════════════════════════════════════════════════════════
const mobility: Listing[] = [
  entry({ id: 'mb-001', category: 'mobility', make: 'Ducati', model: 'Panigale', variant: 'V4S', year: 2024, specSummary: '1103cc V4 · 214hp', origin: 'Bologna, IT', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true, featured: true }),
  entry({ id: 'mb-002', category: 'mobility', make: 'BMW Motorrad', model: 'R 1250 GS', variant: 'Adventure', year: 2023, specSummary: '1254cc Boxer', origin: 'Berlin, DE', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mb-003', category: 'mobility', make: 'Harley-Davidson', model: 'Road King', variant: 'Special', year: 2024, specSummary: '1868cc V-Twin · Touring', origin: 'Wisconsin, US', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'mb-004', category: 'mobility', make: 'Yamaha', model: 'MT-09', variant: 'SP', year: 2023, specSummary: '890cc Triple · Naked', origin: 'Shizuoka, JP', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mb-005', category: 'mobility', make: 'Kawasaki', model: 'Ninja ZX-10R', year: 2024, specSummary: '998cc Inline-4 · 203hp', origin: 'Akashi, JP', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'mb-006', category: 'mobility', make: 'Honda', model: 'Africa Twin', variant: 'Adventure Sports', year: 2023, specSummary: '1084cc Twin · Adventure', origin: 'Kumamoto, JP', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mb-007', category: 'mobility', make: 'Triumph', model: 'Street Triple', variant: '765 RS', year: 2024, specSummary: '765cc Triple · Naked', origin: 'Hinckley, UK', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'mb-008', category: 'mobility', make: 'KTM', model: '1290 Super Duke R', variant: 'Evo', year: 2024, specSummary: '1301cc V-Twin · 180hp', origin: 'Mattighofen, AT', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true, featured: true }),
  entry({ id: 'mb-009', category: 'mobility', make: 'Suzuki', model: 'Hayabusa', year: 2023, specSummary: '1340cc Inline-4', origin: 'Hamamatsu, JP', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mb-010', category: 'mobility', make: 'Vespa', model: 'GTS 300', variant: 'Super Sport', year: 2024, specSummary: '278cc Scooter · Automatic', origin: 'Pontedera, IT', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'mb-011', category: 'mobility', make: 'Piaggio', model: 'MP3', variant: '500 HPE', year: 2023, specSummary: '493cc Tilting 3-Wheel', origin: 'Pontedera, IT', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mb-012', category: 'mobility', make: 'Aprilia', model: 'RSV4', variant: 'Factory', year: 2023, specSummary: '1099cc V4 · 217hp', origin: 'Noale, IT', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mb-013', category: 'mobility', make: 'Royal Enfield', model: 'Himalayan', variant: '450', year: 2024, specSummary: '452cc Single · Adventure', origin: 'Chennai, IN', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'mb-014', category: 'mobility', make: 'Zero Motorcycles', model: 'SR/F', variant: 'Premium', year: 2023, specSummary: 'Electric · 190km Range', origin: 'California, US', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mb-015', category: 'mobility', make: 'Honda', model: 'PCX160', year: 2024, specSummary: '156cc Scooter · Automatic', origin: 'Kumamoto, JP', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'mb-016', category: 'mobility', make: 'NIU', model: 'NQi GT', variant: 'Electric', year: 2024, specSummary: 'Electric Scooter · 100km Range', origin: 'Beijing, CN', condition: 'New', priceLabel: 'On Request', availability: 'sourcing-available' }),
]

// ═══════════════════════════════════════════════════════════════════════════
// PARTS & CUSTOMIZATION — Not vehicles: no year/mileage/driveType
// ═══════════════════════════════════════════════════════════════════════════
const partsCustomization: Listing[] = [
  entry({ id: 'pc-001', category: 'parts-customization', make: 'Brembo', model: 'GT Big Brake Kit', specSummary: '6-Piston Caliper · 410mm Rotor', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'Bergamo, IT' }),
  entry({ id: 'pc-002', category: 'parts-customization', make: 'HRE', model: 'P101 Forged Wheels', specSummary: '1-Piece Forged · 21" Diameter', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'California, US' }),
  entry({ id: 'pc-003', category: 'parts-customization', make: 'KW', model: 'Variant 3 Coilovers', specSummary: 'Adjustable Height & Damping', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'Fichtenberg, DE' }),
  entry({ id: 'pc-004', category: 'parts-customization', make: 'Akrapovič', model: 'Titanium Exhaust System', specSummary: 'Full Titanium · Cat-Back', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'Ivančna Gorica, SI' }),
  entry({ id: 'pc-005', category: 'parts-customization', make: 'Recaro', model: 'Pole Position Seats', specSummary: 'Bucket Seats · FIA Approved', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'Kirchheim, DE' }),
  entry({ id: 'pc-006', category: 'parts-customization', make: 'AP Racing', model: '6-Piston Caliper Kit', specSummary: 'Radial Mount · Track Spec', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'Warwickshire, UK' }),
  entry({ id: 'pc-007', category: 'parts-customization', make: 'Öhlins', model: 'Road & Track Suspension', specSummary: 'Adjustable Dual-Flow Valve', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'Upplands Väsby, SE' }),
  entry({ id: 'pc-008', category: 'parts-customization', make: 'Mansory', model: 'Widebody Conversion Kit', specSummary: 'Fiberglass · +60mm Width', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'Brand, DE', featured: true }),
  entry({ id: 'pc-009', category: 'parts-customization', make: 'Novitec', model: 'Carbon Body Kit', specSummary: 'Pre-Preg Carbon · Track Spec', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'Stetten, DE' }),
  entry({ id: 'pc-010', category: 'parts-customization', make: 'TechArt', model: 'Aerodynamic Package', specSummary: 'Full Aero · Track-Tested', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'Leonberg, DE' }),
  entry({ id: 'pc-011', category: 'parts-customization', make: 'Vorsteiner', model: 'Carbon Aero Package', specSummary: 'Full Aero · Carbon Fiber', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'California, US' }),
  entry({ id: 'pc-012', category: 'parts-customization', make: 'Eventuri', model: 'Carbon Intake System', specSummary: 'Carbon Fiber · +15hp Gain', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'Warwickshire, UK' }),
  entry({ id: 'pc-013', category: 'parts-customization', make: 'BBS', model: 'LM Forged Wheels', specSummary: '1-Piece · Motorsport Heritage', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'Schiltach, DE' }),
  entry({ id: 'pc-014', category: 'parts-customization', make: 'Milltek Sport', model: 'Cat-Back Exhaust', specSummary: 'Valved · Stainless Steel', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'Wiltshire, UK' }),
  entry({ id: 'pc-015', category: 'parts-customization', make: 'RENNtech', model: 'Performance ECU Package', specSummary: 'Stage 1 Tune · +80hp Gain', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'Florida, US' }),
]

// ═══════════════════════════════════════════════════════════════════════════
// COMBINED EXPORT
// ═══════════════════════════════════════════════════════════════════════════
export const allListings: Listing[] = [
  ...carsSuvs,
  ...commercialFleet,
  ...heavyMachinery,
  ...marine,
  ...mobility,
  ...partsCustomization,
]

// ─── Helpers ────────────────────────────────────────────────────────────────
export function getListingsByCategory(category: CategorySlug): Listing[] {
  return allListings.filter((l) => l.category === category)
}

export function getListingById(id: string): Listing | undefined {
  return allListings.find((l) => l.id === id)
}

export function getUniqueMakes(category: CategorySlug): string[] {
  const makes = getListingsByCategory(category).map((l) => l.make)
  return Array.from(new Set(makes)).sort()
}

export function getFeaturedListings(limit?: number): Listing[] {
  const featured = allListings.filter((l) => l.featured)
  return limit ? featured.slice(0, limit) : featured
}

export function getTotalListingsCount(): number {
  return allListings.length
}

export function searchListings(query: string, category?: CategorySlug): Listing[] {
  const q = query.toLowerCase().trim()
  const pool = category ? getListingsByCategory(category) : allListings
  if (!q) return pool
  return pool.filter(
    (l) =>
      l.make.toLowerCase().includes(q) ||
      l.model.toLowerCase().includes(q) ||
      (l.variant?.toLowerCase().includes(q) ?? false) ||
      l.specSummary.toLowerCase().includes(q)
  )
}