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
    entry({ id: 'cs-026', category: 'cars-suvs', make: 'Toyota', model: 'RAV4', variant: 'Adventure', year: 2024, specSummary: '2.5L Hybrid · AWD', origin: 'Toyota City, JP', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-027', category: 'cars-suvs', make: 'Toyota', model: 'Highlander', variant: 'Platinum', year: 2024, specSummary: 'V6 · AWD · 8-Seat', origin: 'Princeton, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-028', category: 'cars-suvs', make: 'Lexus', model: 'RX', variant: '500h F Sport', year: 2024, specSummary: 'Turbo Hybrid · AWD', origin: 'Nagoya, JP', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-029', category: 'cars-suvs', make: 'Lexus', model: 'NX', variant: '350h F Sport', year: 2023, specSummary: '2.5L Hybrid · AWD', origin: 'Nagoya, JP', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-030', category: 'cars-suvs', make: 'Mercedes-Benz', model: 'S-Class', variant: 'S 580 4MATIC', year: 2024, specSummary: 'V8 Biturbo · AWD', origin: 'Sindelfingen, DE', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true, featured: true }),
  entry({ id: 'cs-031', category: 'cars-suvs', make: 'Mercedes-Benz', model: 'EQS SUV', variant: '580 4MATIC', year: 2024, specSummary: 'Electric · AWD · 660km Range', origin: 'Tuscaloosa, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-032', category: 'cars-suvs', make: 'BMW', model: '7 Series', variant: '760i xDrive', year: 2024, specSummary: 'V8 · xDrive AWD', origin: 'Munich, DE', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-033', category: 'cars-suvs', make: 'BMW', model: 'iX', variant: 'M60', year: 2024, specSummary: 'Electric · AWD · 566km Range', origin: 'Dingolfing, DE', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-034', category: 'cars-suvs', make: 'Audi', model: 'RS Q8', year: 2024, specSummary: 'Twin-Turbo V8 · Quattro', origin: 'Bratislava, SK', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true, featured: true }),
  entry({ id: 'cs-035', category: 'cars-suvs', make: 'Audi', model: 'A8', variant: 'L 60 TFSIe', year: 2023, specSummary: 'V6 Hybrid · Quattro', origin: 'Neckarsulm, DE', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-036', category: 'cars-suvs', make: 'Porsche', model: '911', variant: 'Turbo S', year: 2024, specSummary: 'Twin-Turbo Flat-6 · AWD', origin: 'Zuffenhausen, DE', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true, featured: true }),
  entry({ id: 'cs-037', category: 'cars-suvs', make: 'Porsche', model: 'Panamera', variant: 'Turbo S E-Hybrid', year: 2024, specSummary: 'V8 Hybrid · AWD', origin: 'Leipzig, DE', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-038', category: 'cars-suvs', make: 'Range Rover', model: 'Range Rover Velar', variant: 'R-Dynamic', year: 2024, specSummary: 'Turbo I6 · AWD', origin: 'Solihull, UK', condition: 'New', driveType: 'RHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-039', category: 'cars-suvs', make: 'Range Rover', model: 'Defender', variant: '130 X-Dynamic', year: 2024, specSummary: 'Turbo I6 · 4WD', origin: 'Nitra, SK', condition: 'New', driveType: 'RHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-040', category: 'cars-suvs', make: 'Bentley', model: 'Continental GT', variant: 'Speed', year: 2024, specSummary: 'W12 · AWD', origin: 'Crewe, UK', condition: 'New', driveType: 'RHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true, featured: true }),
  entry({ id: 'cs-041', category: 'cars-suvs', make: 'Bentley', model: 'Flying Spur', variant: 'W12', year: 2023, specSummary: 'W12 · AWD', origin: 'Crewe, UK', condition: 'Used', driveType: 'RHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-042', category: 'cars-suvs', make: 'Rolls-Royce', model: 'Ghost', variant: 'Extended', year: 2024, specSummary: 'V12 · AWD', origin: 'Goodwood, UK', condition: 'New', driveType: 'RHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true, featured: true }),
  entry({ id: 'cs-043', category: 'cars-suvs', make: 'Rolls-Royce', model: 'Phantom', variant: 'Series II', year: 2024, specSummary: 'V12 · AWD', origin: 'Goodwood, UK', condition: 'New', driveType: 'RHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-044', category: 'cars-suvs', make: 'Ferrari', model: 'Purosangue', year: 2024, specSummary: 'V12 · AWD', origin: 'Maranello, IT', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available', featured: true }),
  entry({ id: 'cs-045', category: 'cars-suvs', make: 'Aston Martin', model: 'DB12', year: 2024, specSummary: 'Twin-Turbo V8', origin: 'Gaydon, UK', condition: 'New', driveType: 'RHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-046', category: 'cars-suvs', make: 'Lamborghini', model: 'Revuelto', year: 2024, specSummary: 'V12 Hybrid · AWD', origin: "Sant'Agata Bolognese, IT", condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available', featured: true }),
  entry({ id: 'cs-047', category: 'cars-suvs', make: 'Maserati', model: 'Grecale', variant: 'Trofeo', year: 2024, specSummary: 'Twin-Turbo V6 · AWD', origin: 'Cassino, IT', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-048', category: 'cars-suvs', make: 'Cadillac', model: 'Lyriq', variant: 'Sport 3', year: 2024, specSummary: 'Electric · AWD · 500km Range', origin: 'Tennessee, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-049', category: 'cars-suvs', make: 'GMC', model: 'Sierra Denali', variant: 'Ultimate', year: 2024, specSummary: 'V8 · 4WD · Pickup', origin: 'Michigan, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-050', category: 'cars-suvs', make: 'Chevrolet', model: 'Suburban', variant: 'High Country', year: 2024, specSummary: 'V8 · 4WD · 8-Seat', origin: 'Texas, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-051', category: 'cars-suvs', make: 'Ford', model: 'Expedition', variant: 'Platinum', year: 2024, specSummary: 'Twin-Turbo V6 · 4WD', origin: 'Kentucky, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-052', category: 'cars-suvs', make: 'Jeep', model: 'Wrangler', variant: 'Rubicon 392', year: 2024, specSummary: 'V8 · 4WD · Off-Road', origin: 'Ohio, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-053', category: 'cars-suvs', make: 'Nissan', model: 'Armada', variant: 'Platinum', year: 2024, specSummary: 'V8 · 4WD · 8-Seat', origin: 'Kyushu, JP', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-054', category: 'cars-suvs', make: 'Infiniti', model: 'QX80', variant: 'Autograph', year: 2023, specSummary: 'V8 · 4WD · 8-Seat', origin: 'Kyushu, JP', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-055', category: 'cars-suvs', make: 'Genesis', model: 'G90', variant: 'Black', year: 2024, specSummary: 'Twin-Turbo V6 · AWD', origin: 'Ulsan, KR', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-056', category: 'cars-suvs', make: 'Volvo', model: 'EX90', variant: 'Ultra', year: 2024, specSummary: 'Electric · AWD · 590km Range', origin: 'Charleston, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-057', category: 'cars-suvs', make: 'Volkswagen', model: 'Touareg', variant: 'R', year: 2023, specSummary: 'V6 Hybrid · 4Motion', origin: 'Bratislava, SK', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-058', category: 'cars-suvs', make: 'Land Rover', model: 'Discovery', variant: 'Metropolitan Edition', year: 2024, specSummary: 'Turbo I6 · 4WD · 7-Seat', origin: 'Solihull, UK', condition: 'New', driveType: 'RHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-059', category: 'cars-suvs', make: 'Honda', model: 'Pilot', variant: 'Elite', year: 2024, specSummary: 'V6 · AWD · 8-Seat', origin: 'Alabama, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-060', category: 'cars-suvs', make: 'Mazda', model: 'CX-90', variant: 'Signature', year: 2024, specSummary: 'Turbo I6 · AWD · 3-Row', origin: 'Hiroshima, JP', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-061', category: 'cars-suvs', make: 'Subaru', model: 'Ascent', variant: 'Touring', year: 2024, specSummary: 'Turbo H4 · AWD · 8-Seat', origin: 'Indiana, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-062', category: 'cars-suvs', make: 'Kia', model: 'Telluride', variant: 'SX Prestige', year: 2024, specSummary: 'V6 · AWD · 8-Seat', origin: 'West Point, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-063', category: 'cars-suvs', make: 'Hyundai', model: 'Palisade', variant: 'Calligraphy', year: 2024, specSummary: 'V6 · AWD · 8-Seat', origin: 'Ulsan, KR', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-064', category: 'cars-suvs', make: 'Mitsubishi', model: 'Pajero', variant: 'Exceed', year: 2023, specSummary: '3.2L Diesel · 4WD', origin: 'Okazaki, JP', condition: 'Used', driveType: 'RHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-065', category: 'cars-suvs', make: 'Suzuki', model: 'Jimny', variant: '5-Door', year: 2024, specSummary: '1.5L · 4WD · Compact', origin: 'Kosai, JP', condition: 'New', driveType: 'RHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-066', category: 'cars-suvs', make: 'Isuzu', model: 'MU-X', variant: 'LS-M', year: 2024, specSummary: '3.0L Diesel · 4WD', origin: 'Samut Prakan, TH', condition: 'New', driveType: 'RHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-067', category: 'cars-suvs', make: 'Toyota', model: 'Sequoia', variant: 'Capstone', year: 2024, specSummary: 'Twin-Turbo Hybrid V6 · 4WD', origin: 'Texas, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-068', category: 'cars-suvs', make: 'Toyota', model: 'Camry', variant: 'XSE Hybrid', year: 2024, specSummary: '2.5L Hybrid · FWD', origin: 'Kentucky, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-069', category: 'cars-suvs', make: 'Lexus', model: 'ES', variant: '350h', year: 2024, specSummary: '2.5L Hybrid · FWD', origin: 'Miyawaka, JP', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-070', category: 'cars-suvs', make: 'Mercedes-Benz', model: 'C-Class', variant: 'C 300 4MATIC', year: 2024, specSummary: 'Turbo I4 · AWD', origin: 'Bremen, DE', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-071', category: 'cars-suvs', make: 'BMW', model: '5 Series', variant: '540i xDrive', year: 2024, specSummary: 'Turbo I6 · xDrive', origin: 'Dingolfing, DE', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-072', category: 'cars-suvs', make: 'Audi', model: 'A6', variant: '55 TFSIe Quattro', year: 2023, specSummary: 'V6 Hybrid · Quattro', origin: 'Neckarsulm, DE', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-073', category: 'cars-suvs', make: 'Porsche', model: 'Taycan', variant: 'Turbo GT', year: 2024, specSummary: 'Electric · AWD · 590hp', origin: 'Zuffenhausen, DE', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available', featured: true }),
  entry({ id: 'cs-074', category: 'cars-suvs', make: 'Jaguar', model: 'F-PACE', variant: 'SVR', year: 2023, specSummary: 'Supercharged V8 · AWD', origin: 'Solihull, UK', condition: 'Used', driveType: 'RHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-075', category: 'cars-suvs', make: 'McLaren', model: 'GT', year: 2023, specSummary: 'Twin-Turbo V8 · RWD', origin: 'Woking, UK', condition: 'Used', driveType: 'RHD', priceLabel: 'On Request', availability: 'sourcing-available', featured: true }),
    entry({ id: 'cs-076', category: 'cars-suvs', make: 'Toyota', model: 'Sienna', variant: 'Platinum', year: 2024, specSummary: '2.5L Hybrid · AWD · 8-Seat', origin: 'Indiana, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-077', category: 'cars-suvs', make: 'Toyota', model: '4Runner', variant: 'TRD Pro', year: 2024, specSummary: '2.4L Turbo · 4WD', origin: 'Tahara, JP', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-078', category: 'cars-suvs', make: 'Lexus', model: 'LM', variant: '350h', year: 2024, specSummary: '2.5L Hybrid · AWD · 4-Seat Luxury', origin: 'Miyawaka, JP', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available', featured: true }),
  entry({ id: 'cs-079', category: 'cars-suvs', make: 'Lexus', model: 'IS', variant: '500 F Sport', year: 2024, specSummary: 'V8 · RWD', origin: 'Tahara, JP', condition: 'New', driveType: 'RHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-080', category: 'cars-suvs', make: 'Mercedes-Benz', model: 'AMG GT 63', variant: '4-Door', year: 2024, specSummary: 'V8 Biturbo · AWD', origin: 'Affalterbach, DE', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true, featured: true }),
  entry({ id: 'cs-081', category: 'cars-suvs', make: 'Mercedes-Benz', model: 'EQE SUV', variant: '500 4MATIC', year: 2024, specSummary: 'Electric · AWD · 550km Range', origin: 'Bremen, DE', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-082', category: 'cars-suvs', make: 'BMW', model: 'X6', variant: 'M60i', year: 2024, specSummary: 'V8 · xDrive Coupe SUV', origin: 'Spartanburg, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-083', category: 'cars-suvs', make: 'BMW', model: 'M3', variant: 'Competition', year: 2024, specSummary: 'Twin-Turbo I6 · RWD', origin: 'Munich, DE', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-084', category: 'cars-suvs', make: 'Audi', model: 'RS6 Avant', year: 2024, specSummary: 'Twin-Turbo V8 · Quattro', origin: 'Neckarsulm, DE', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available', featured: true }),
  entry({ id: 'cs-085', category: 'cars-suvs', make: 'Audi', model: 'e-tron GT', variant: 'RS', year: 2024, specSummary: 'Electric · Quattro · 475km Range', origin: 'Neckarsulm, DE', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-086', category: 'cars-suvs', make: 'Porsche', model: 'Macan', variant: 'GTS', year: 2023, specSummary: 'Twin-Turbo V6 · AWD', origin: 'Leipzig, DE', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-087', category: 'cars-suvs', make: 'Porsche', model: '718 Cayman', variant: 'GT4 RS', year: 2024, specSummary: 'Flat-6 · RWD', origin: 'Zuffenhausen, DE', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-088', category: 'cars-suvs', make: 'Range Rover', model: 'Evoque', variant: 'R-Dynamic', year: 2023, specSummary: 'Turbo I4 · AWD', origin: 'Halewood, UK', condition: 'Used', driveType: 'RHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-089', category: 'cars-suvs', make: 'Jaguar', model: 'F-TYPE', variant: 'R', year: 2023, specSummary: 'Supercharged V8 · AWD', origin: 'Castle Bromwich, UK', condition: 'Used', driveType: 'RHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-090', category: 'cars-suvs', make: 'Bentley', model: 'Bentayga', variant: 'S', year: 2024, specSummary: 'V8 · AWD', origin: 'Crewe, UK', condition: 'New', driveType: 'RHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-091', category: 'cars-suvs', make: 'Rolls-Royce', model: 'Spectre', year: 2024, specSummary: 'Electric · AWD · 530km Range', origin: 'Goodwood, UK', condition: 'New', driveType: 'RHD', priceLabel: 'On Request', availability: 'sourcing-available', featured: true }),
  entry({ id: 'cs-092', category: 'cars-suvs', make: 'Ferrari', model: 'Roma', year: 2023, specSummary: 'Twin-Turbo V8 · RWD', origin: 'Maranello, IT', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-093', category: 'cars-suvs', make: 'Lamborghini', model: 'Huracán', variant: 'STO', year: 2023, specSummary: 'V10 · RWD', origin: "Sant'Agata Bolognese, IT", condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available', featured: true }),
  entry({ id: 'cs-094', category: 'cars-suvs', make: 'Aston Martin', model: 'Vantage', year: 2024, specSummary: 'Twin-Turbo V8 · RWD', origin: 'Gaydon, UK', condition: 'New', driveType: 'RHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-095', category: 'cars-suvs', make: 'Maserati', model: 'MC20', year: 2024, specSummary: 'Twin-Turbo V6 · RWD', origin: 'Modena, IT', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-096', category: 'cars-suvs', make: 'Cadillac', model: 'CT5-V', variant: 'Blackwing', year: 2024, specSummary: 'Supercharged V8 · RWD', origin: 'Michigan, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-097', category: 'cars-suvs', make: 'GMC', model: 'Hummer EV', variant: 'SUV Edition 1', year: 2024, specSummary: 'Electric · AWD · 830hp', origin: 'Michigan, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available', featured: true }),
  entry({ id: 'cs-098', category: 'cars-suvs', make: 'Chevrolet', model: 'Corvette', variant: 'Z06', year: 2024, specSummary: 'Naturally Aspirated V8 · RWD', origin: 'Kentucky, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-099', category: 'cars-suvs', make: 'Ford', model: 'Mustang', variant: 'Dark Horse', year: 2024, specSummary: 'V8 · RWD', origin: 'Michigan, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-100', category: 'cars-suvs', make: 'Ford', model: 'F-150', variant: 'Raptor R', year: 2024, specSummary: 'Supercharged V8 · 4WD', origin: 'Michigan, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-101', category: 'cars-suvs', make: 'Jeep', model: 'Grand Cherokee', variant: 'Trailhawk', year: 2024, specSummary: 'V6 · 4WD', origin: 'Michigan, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-102', category: 'cars-suvs', make: 'Ram', model: '1500', variant: 'TRX', year: 2023, specSummary: 'Supercharged V8 · 4WD', origin: 'Michigan, US', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-103', category: 'cars-suvs', make: 'Nissan', model: 'GT-R', variant: 'Nismo', year: 2023, specSummary: 'Twin-Turbo V6 · AWD', origin: 'Tochigi, JP', condition: 'Used', driveType: 'RHD', priceLabel: 'On Request', availability: 'sourcing-available', featured: true }),
  entry({ id: 'cs-104', category: 'cars-suvs', make: 'Nissan', model: 'Z', variant: 'Nismo', year: 2024, specSummary: 'Twin-Turbo V6 · RWD', origin: 'Tochigi, JP', condition: 'New', driveType: 'RHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-105', category: 'cars-suvs', make: 'Infiniti', model: 'Q60', variant: 'Red Sport 400', year: 2023, specSummary: 'Twin-Turbo V6 · RWD', origin: 'Tochigi, JP', condition: 'Used', driveType: 'RHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-106', category: 'cars-suvs', make: 'Genesis', model: 'G70', variant: '3.3T Sport', year: 2024, specSummary: 'Twin-Turbo V6 · AWD', origin: 'Ulsan, KR', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-107', category: 'cars-suvs', make: 'Kia', model: 'EV9', variant: 'GT-Line', year: 2024, specSummary: 'Electric · AWD · 505km Range', origin: 'Gwangju, KR', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-108', category: 'cars-suvs', make: 'Hyundai', model: 'Ioniq 5 N', year: 2024, specSummary: 'Electric · AWD · 650hp', origin: 'Ulsan, KR', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-109', category: 'cars-suvs', make: 'Volvo', model: 'S90', variant: 'Recharge', year: 2023, specSummary: 'Plug-in Hybrid · AWD', origin: 'Gothenburg, SE', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-110', category: 'cars-suvs', make: 'Volkswagen', model: 'Golf R', year: 2024, specSummary: 'Turbo I4 · 4Motion', origin: 'Wolfsburg, DE', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-111', category: 'cars-suvs', make: 'Skoda', model: 'Kodiaq', variant: 'RS', year: 2023, specSummary: 'Twin-Turbo Diesel · 4x4', origin: 'Mladá Boleslav, CZ', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-112', category: 'cars-suvs', make: 'Honda', model: 'Civic Type R', year: 2024, specSummary: 'Turbo I4 · FWD', origin: 'Saitama, JP', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-113', category: 'cars-suvs', make: 'Honda', model: 'CR-V', variant: 'Hybrid Sport Touring', year: 2024, specSummary: '2.0L Hybrid · AWD', origin: 'Ohio, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-114', category: 'cars-suvs', make: 'Mazda', model: 'CX-5', variant: 'Turbo Signature', year: 2024, specSummary: 'Turbo I4 · AWD', origin: 'Hiroshima, JP', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-115', category: 'cars-suvs', make: 'Subaru', model: 'WRX STI', year: 2023, specSummary: 'Turbo H4 · AWD', origin: 'Gunma, JP', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-116', category: 'cars-suvs', make: 'Mitsubishi', model: 'Outlander', variant: 'PHEV', year: 2024, specSummary: 'Plug-in Hybrid · AWD', origin: 'Okazaki, JP', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-117', category: 'cars-suvs', make: 'Suzuki', model: 'Vitara', variant: 'AllGrip', year: 2023, specSummary: '1.4L Turbo · AWD', origin: 'Kosai, JP', condition: 'Used', driveType: 'RHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-118', category: 'cars-suvs', make: 'Isuzu', model: 'D-Max', variant: 'X-Terrain', year: 2024, specSummary: '3.0L Diesel · 4WD Pickup', origin: 'Samrong, TH', condition: 'New', driveType: 'RHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-119', category: 'cars-suvs', make: 'Toyota', model: 'Hilux', variant: 'GR Sport', year: 2024, specSummary: '2.8L Turbo Diesel · 4WD', origin: 'Samut Prakan, TH', condition: 'New', driveType: 'RHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-120', category: 'cars-suvs', make: 'Toyota', model: 'Corolla Cross', variant: 'Hybrid', year: 2024, specSummary: '1.8L Hybrid · AWD', origin: 'Aichi, JP', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-121', category: 'cars-suvs', make: 'Lexus', model: 'UX', variant: '250h', year: 2023, specSummary: '2.0L Hybrid · AWD', origin: 'Kyushu, JP', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-122', category: 'cars-suvs', make: 'Mercedes-Benz', model: 'GLC', variant: '300 4MATIC', year: 2024, specSummary: 'Turbo I4 · 4MATIC', origin: 'Bremen, DE', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-123', category: 'cars-suvs', make: 'Mercedes-Benz', model: 'G-Class', variant: 'G 550 4x4²', year: 2023, specSummary: 'V8 · 4x4 Portal Axles', origin: 'Graz, AT', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available', featured: true }),
  entry({ id: 'cs-124', category: 'cars-suvs', make: 'BMW', model: 'X3', variant: 'M40i', year: 2024, specSummary: 'Turbo I6 · xDrive', origin: 'Spartanburg, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-125', category: 'cars-suvs', make: 'BMW', model: 'X4', variant: 'M40i', year: 2023, specSummary: 'Turbo I6 · xDrive Coupe SUV', origin: 'Spartanburg, US', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-126', category: 'cars-suvs', make: 'Audi', model: 'Q5', variant: 'Sportback', year: 2024, specSummary: 'Turbo I4 · Quattro', origin: 'San José Chiapa, MX', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-127', category: 'cars-suvs', make: 'Audi', model: 'A4', variant: 'Allroad', year: 2023, specSummary: 'Turbo I4 · Quattro', origin: 'Ingolstadt, DE', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-128', category: 'cars-suvs', make: 'Porsche', model: 'Cayenne', variant: 'Coupe', year: 2024, specSummary: 'V6 · AWD', origin: 'Leipzig, DE', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-129', category: 'cars-suvs', make: 'Range Rover', model: 'Range Rover', variant: 'P530 Autobiography', year: 2024, specSummary: 'V8 · 4WD', origin: 'Solihull, UK', condition: 'New', driveType: 'RHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-130', category: 'cars-suvs', make: 'Jaguar', model: 'XF', variant: 'R-Dynamic', year: 2023, specSummary: 'Turbo I4 · AWD', origin: 'Castle Bromwich, UK', condition: 'Used', driveType: 'RHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-131', category: 'cars-suvs', make: 'Bentley', model: 'Bentayga', variant: 'Hybrid', year: 2023, specSummary: 'V6 Plug-in Hybrid · AWD', origin: 'Crewe, UK', condition: 'Used', driveType: 'RHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-132', category: 'cars-suvs', make: 'Maserati', model: 'Quattroporte', variant: 'Trofeo', year: 2023, specSummary: 'V8 · RWD', origin: 'Turin, IT', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-133', category: 'cars-suvs', make: 'Alfa Romeo', model: 'Stelvio', variant: 'Quadrifoglio', year: 2024, specSummary: 'Twin-Turbo V6 · AWD', origin: 'Cassino, IT', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-134', category: 'cars-suvs', make: 'Cadillac', model: 'XT6', variant: 'Sport', year: 2024, specSummary: 'V6 · AWD · 3-Row', origin: 'Tennessee, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-135', category: 'cars-suvs', make: 'GMC', model: 'Acadia', variant: 'Denali', year: 2024, specSummary: 'Turbo I4 · AWD', origin: 'Tennessee, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-136', category: 'cars-suvs', make: 'Chevrolet', model: 'Tahoe', variant: 'RST', year: 2024, specSummary: 'V8 · 4WD · 8-Seat', origin: 'Texas, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-137', category: 'cars-suvs', make: 'Ford', model: 'Bronco', variant: 'Raptor', year: 2024, specSummary: 'Twin-Turbo V6 · 4WD', origin: 'Michigan, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available', featured: true }),
  entry({ id: 'cs-138', category: 'cars-suvs', make: 'Jeep', model: 'Grand Wagoneer', variant: 'Obsidian', year: 2024, specSummary: 'V8 · 4WD · Full-Size', origin: 'Michigan, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-139', category: 'cars-suvs', make: 'Nissan', model: 'Pathfinder', variant: 'Platinum', year: 2024, specSummary: 'V6 · 4WD · 8-Seat', origin: 'Smyrna, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-140', category: 'cars-suvs', make: 'Infiniti', model: 'QX60', variant: 'Autograph', year: 2024, specSummary: 'V6 · AWD · 8-Seat', origin: 'Smyrna, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-141', category: 'cars-suvs', make: 'Genesis', model: 'GV70', variant: '3.5T Sport', year: 2024, specSummary: 'Twin-Turbo V6 · AWD', origin: 'Ulsan, KR', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-142', category: 'cars-suvs', make: 'Kia', model: 'Sorento', variant: 'X-Pro', year: 2024, specSummary: 'Turbo I4 · AWD', origin: 'West Point, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-143', category: 'cars-suvs', make: 'Hyundai', model: 'Santa Fe', variant: 'Calligraphy', year: 2024, specSummary: 'Turbo I4 · AWD', origin: 'Ulsan, KR', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-144', category: 'cars-suvs', make: 'Volvo', model: 'XC60', variant: 'Recharge', year: 2024, specSummary: 'Plug-in Hybrid · AWD', origin: 'Gothenburg, SE', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-145', category: 'cars-suvs', make: 'Volkswagen', model: 'Atlas', variant: 'Peak Edition', year: 2024, specSummary: 'V6 · 4Motion · 7-Seat', origin: 'Tennessee, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-146', category: 'cars-suvs', make: 'Land Rover', model: 'Range Rover Sport', variant: 'SV Edition One', year: 2024, specSummary: 'Twin-Turbo V8 · AWD', origin: 'Solihull, UK', condition: 'New', driveType: 'RHD', priceLabel: 'On Request', availability: 'sourcing-available', featured: true }),
  entry({ id: 'cs-147', category: 'cars-suvs', make: 'Honda', model: 'Passport', variant: 'TrailSport', year: 2024, specSummary: 'V6 · AWD', origin: 'Alabama, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-148', category: 'cars-suvs', make: 'Mazda', model: 'CX-90', variant: 'PHEV Premium', year: 2024, specSummary: 'Plug-in Hybrid · AWD', origin: 'Hiroshima, JP', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cs-149', category: 'cars-suvs', make: 'Subaru', model: 'Outback', variant: 'Wilderness', year: 2024, specSummary: 'H4 · AWD · Adventure', origin: 'Gunma, JP', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cs-150', category: 'cars-suvs', make: 'Toyota', model: 'Venza', variant: 'Limited', year: 2024, specSummary: '2.5L Hybrid · AWD', origin: 'Kentucky, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
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
    entry({ id: 'cf-021', category: 'commercial-fleet', make: 'Volvo Trucks', model: 'FMX', variant: '500 8x4', year: 2024, specSummary: '13L · 500hp · Construction Truck', origin: 'Gothenburg, SE', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cf-022', category: 'commercial-fleet', make: 'Mercedes-Benz', model: 'Arocs', variant: '3345 8x4', year: 2023, specSummary: '12.8L · 449hp · Tipper', origin: 'Wörth am Rhein, DE', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-023', category: 'commercial-fleet', make: 'Scania', model: 'XT', variant: '450 6x4', year: 2024, specSummary: '13L · 450hp · Construction', origin: 'Södertälje, SE', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cf-024', category: 'commercial-fleet', make: 'MAN', model: 'TGS', variant: '33.510 8x4', year: 2023, specSummary: '15.3L · 510hp · Mixer', origin: 'Salzgitter, DE', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-025', category: 'commercial-fleet', make: 'DAF', model: 'CF', variant: '450 FTG', year: 2024, specSummary: '10.8L · 450hp · 6x2', origin: 'Eindhoven, NL', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cf-026', category: 'commercial-fleet', make: 'Iveco', model: 'S-Way', variant: '570 6x4', year: 2024, specSummary: '12.9L · 570hp · Tractor Unit', origin: 'Madrid, ES', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cf-027', category: 'commercial-fleet', make: 'Freightliner', model: 'M2 106', variant: 'Box Truck', year: 2023, specSummary: '6.7L Diesel · Box Body', origin: 'North Carolina, US', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-028', category: 'commercial-fleet', make: 'International', model: 'HX Series', variant: 'HX620', year: 2024, specSummary: '15L · 565hp · Severe Duty', origin: 'Texas, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cf-029', category: 'commercial-fleet', make: 'Mack', model: 'Anthem', variant: '6x4', year: 2023, specSummary: '13L · 505hp · Tractor Unit', origin: 'Pennsylvania, US', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-030', category: 'commercial-fleet', make: 'Volvo Trucks', model: 'VNL', variant: '860 6x4', year: 2024, specSummary: '13L · 500hp · Long Haul', origin: 'Virginia, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cf-031', category: 'commercial-fleet', make: 'Volvo Buses', model: '9700', variant: 'Coach', year: 2023, specSummary: '53-Seat Coach · Diesel', origin: 'Borås, SE', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-032', category: 'commercial-fleet', make: 'Scania', model: 'Touring', variant: 'HD', year: 2024, specSummary: '49-Seat Coach · Diesel', origin: 'Vila Nova de Famalicão, PT', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cf-033', category: 'commercial-fleet', make: 'Mercedes-Benz', model: 'Citaro', variant: 'Hybrid', year: 2024, specSummary: 'Low-Floor Hybrid City Bus', origin: 'Mannheim, DE', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cf-034', category: 'commercial-fleet', make: 'Volkswagen', model: 'Crafter', variant: 'Kombi', year: 2023, specSummary: '2.0L Diesel · 9-Seat Van', origin: 'Września, PL', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-035', category: 'commercial-fleet', make: 'Ford', model: 'Transit', variant: 'Custom', year: 2024, specSummary: '2.0L Diesel · Cargo Van', origin: 'Kocaeli, TR', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cf-036', category: 'commercial-fleet', make: 'Fiat Professional', model: 'Ducato', variant: 'Maxi', year: 2023, specSummary: '2.3L Diesel · High Roof Van', origin: 'Atessa, IT', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-037', category: 'commercial-fleet', make: 'Renault Trucks', model: 'Master', variant: 'L4H3', year: 2024, specSummary: '2.3L Diesel · Extended Van', origin: 'Batilly, FR', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cf-038', category: 'commercial-fleet', make: 'Toyota', model: 'Hiace', variant: 'GL Grandia', year: 2024, specSummary: '2.8L Diesel · 15-Seat', origin: 'Kariya, JP', condition: 'New', driveType: 'RHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cf-039', category: 'commercial-fleet', make: 'Isuzu', model: 'Elf', variant: 'Wide Cab', year: 2023, specSummary: '3.0L Diesel · 4-Ton Truck', origin: 'Fujisawa, JP', condition: 'Used', driveType: 'RHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-040', category: 'commercial-fleet', make: 'Mitsubishi Fuso', model: 'Fighter', variant: '6x4', year: 2024, specSummary: '7.5L Diesel · Medium Truck', origin: 'Kawasaki, JP', condition: 'New', driveType: 'RHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cf-041', category: 'commercial-fleet', make: 'Hino', model: '700 Series', variant: 'Heavy Tractor', year: 2023, specSummary: '12.9L · 420hp · 6x4', origin: 'Hino, JP', condition: 'Used', driveType: 'RHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-042', category: 'commercial-fleet', make: 'UD Trucks', model: 'Quon', variant: 'GK', year: 2024, specSummary: '10.8L · 420hp · Heavy Duty', origin: 'Ageo, JP', condition: 'New', driveType: 'RHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cf-043', category: 'commercial-fleet', make: 'Tata Motors', model: 'Prima', variant: '4928.S', year: 2023, specSummary: '9.8L · 280hp · Tractor Unit', origin: 'Pune, IN', condition: 'Used', driveType: 'RHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-044', category: 'commercial-fleet', make: 'Ashok Leyland', model: 'Captain', variant: '3718', year: 2024, specSummary: '5.7L · 180hp · Tipper', origin: 'Chennai, IN', condition: 'New', driveType: 'RHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cf-045', category: 'commercial-fleet', make: 'FAW', model: 'J7', variant: '6x4', year: 2024, specSummary: '13L · 460hp · Tractor Unit', origin: 'Changchun, CN', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cf-046', category: 'commercial-fleet', make: 'Sinotruk', model: 'HOWO', variant: 'T7H', year: 2023, specSummary: '13L · 500hp · 6x4', origin: 'Jinan, CN', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-047', category: 'commercial-fleet', make: 'Dongfeng', model: 'KX', variant: '6x4', year: 2024, specSummary: '12.9L · 480hp · Dump Truck', origin: 'Shiyan, CN', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cf-048', category: 'commercial-fleet', make: 'BYD', model: 'K9', variant: 'Electric Bus', year: 2024, specSummary: 'Electric · Low-Floor · City Bus', origin: 'Shenzhen, CN', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-049', category: 'commercial-fleet', make: 'Yutong', model: 'ZK6146', variant: 'Coach', year: 2023, specSummary: '55-Seat Coach · Diesel', origin: 'Zhengzhou, CN', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-050', category: 'commercial-fleet', make: 'King Long', model: 'XMQ6900', variant: 'Coach', year: 2024, specSummary: '45-Seat Coach · Diesel', origin: 'Xiamen, CN', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cf-051', category: 'commercial-fleet', make: 'Higer', model: 'KLQ6928', variant: 'Microbus', year: 2023, specSummary: '19-Seat Microbus · Diesel', origin: 'Suzhou, CN', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-052', category: 'commercial-fleet', make: 'Foton', model: 'Auman', variant: 'EST 6x4', year: 2024, specSummary: '12.7L · 460hp · Tractor Unit', origin: 'Beijing, CN', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cf-053', category: 'commercial-fleet', make: 'Shacman', model: 'X6000', variant: '6x4', year: 2023, specSummary: '13L · 500hp · Heavy Truck', origin: "Xi'an, CN", condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-054', category: 'commercial-fleet', make: 'Mercedes-Benz', model: 'Actros', variant: '1845 4x2', year: 2024, specSummary: '12.8L · 449hp · Tractor Unit', origin: 'Wörth am Rhein, DE', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cf-055', category: 'commercial-fleet', make: 'Scania', model: 'S Series', variant: 'S650 V8', year: 2024, specSummary: '16.4L V8 · 650hp · Flagship', origin: 'Södertälje, SE', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available', featured: true }),
  entry({ id: 'cf-056', category: 'commercial-fleet', make: 'Volvo Trucks', model: 'FM', variant: '460 6x2', year: 2023, specSummary: '13L · 460hp · Distribution', origin: 'Gothenburg, SE', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-057', category: 'commercial-fleet', make: 'DAF', model: 'XG+', variant: '530 6x2', year: 2024, specSummary: '12.9L · 530hp · Premium Cab', origin: 'Eindhoven, NL', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cf-058', category: 'commercial-fleet', make: 'MAN', model: 'TGE', variant: 'Van', year: 2023, specSummary: '2.0L Diesel · Panel Van', origin: 'Wrzesnia, PL', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-059', category: 'commercial-fleet', make: 'Iveco', model: 'Eurocargo', variant: '120E', year: 2024, specSummary: '5.9L Diesel · Medium Truck', origin: 'Brescia, IT', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cf-060', category: 'commercial-fleet', make: 'Kenworth', model: 'T880', variant: '6x4', year: 2023, specSummary: '15L · 500hp · Vocational', origin: 'Washington, US', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-061', category: 'commercial-fleet', make: 'Peterbilt', model: '389', variant: '6x4', year: 2024, specSummary: '15L · 605hp · Legacy Class', origin: 'Texas, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available', featured: true }),
  entry({ id: 'cf-062', category: 'commercial-fleet', make: 'Freightliner', model: 'Coronado', variant: '6x4', year: 2023, specSummary: '14.8L · 505hp · Severe Duty', origin: 'North Carolina, US', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-063', category: 'commercial-fleet', make: 'International', model: 'LT Series', variant: 'LT625', year: 2024, specSummary: '12.4L · 450hp · Long Haul', origin: 'Illinois, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cf-064', category: 'commercial-fleet', make: 'Mack', model: 'Granite', variant: '8x4', year: 2023, specSummary: '13L · 505hp · Construction', origin: 'Pennsylvania, US', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-065', category: 'commercial-fleet', make: 'Prevost', model: 'H3-45', variant: 'Coach', year: 2024, specSummary: '56-Seat Luxury Coach · Diesel', origin: 'Sainte-Claire, CA', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-066', category: 'commercial-fleet', make: 'MCI', model: 'D45 CRT LE', variant: 'Coach', year: 2023, specSummary: '56-Seat Coach · Diesel', origin: 'Winnipeg, CA', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-067', category: 'commercial-fleet', make: 'Blue Bird', model: 'Vision', variant: 'School Bus', year: 2024, specSummary: '72-Seat School Bus · Diesel', origin: 'Georgia, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cf-068', category: 'commercial-fleet', make: 'Thomas Built', model: 'Saf-T-Liner', variant: 'C2', year: 2023, specSummary: '77-Seat School Bus · Diesel', origin: 'North Carolina, US', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-069', category: 'commercial-fleet', make: 'GMC', model: 'Savana', variant: 'Cargo', year: 2024, specSummary: '6.6L V8 · Cargo Van', origin: 'Missouri, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cf-070', category: 'commercial-fleet', make: 'Ford', model: 'E-Transit', variant: 'Cargo', year: 2024, specSummary: 'Electric · Cargo Van · 203km Range', origin: 'Missouri, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
     entry({ id: 'cf-071', category: 'commercial-fleet', make: 'Volvo Trucks', model: 'FE', variant: 'Electric', year: 2024, specSummary: 'Electric · Urban Distribution', origin: 'Gothenburg, SE', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-072', category: 'commercial-fleet', make: 'Mercedes-Benz', model: 'eActros', variant: '600', year: 2024, specSummary: 'Electric · 500km Range · Tractor', origin: 'Wörth am Rhein, DE', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available', featured: true }),
  entry({ id: 'cf-073', category: 'commercial-fleet', make: 'Scania', model: '25P', variant: 'Electric', year: 2024, specSummary: 'Electric · Distribution Truck', origin: 'Södertälje, SE', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-074', category: 'commercial-fleet', make: 'DAF', model: 'XD', variant: '350 FA', year: 2023, specSummary: '10.8L · 350hp · Distribution', origin: 'Eindhoven, NL', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-075', category: 'commercial-fleet', make: 'Iveco', model: 'X-Way', variant: '480 8x4', year: 2024, specSummary: '12.9L · 480hp · Off-Road', origin: 'Madrid, ES', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cf-076', category: 'commercial-fleet', make: 'Renault Trucks', model: 'C', variant: '520 8x4', year: 2023, specSummary: '13L · 520hp · Construction', origin: 'Bourg-en-Bresse, FR', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-077', category: 'commercial-fleet', make: 'Renault Trucks', model: 'D', variant: 'Wide 280', year: 2024, specSummary: '7.7L Diesel · Distribution', origin: 'Blainville-sur-Orne, FR', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cf-078', category: 'commercial-fleet', make: 'Setra', model: 'TopClass', variant: 'S 531 DT', year: 2024, specSummary: '77-Seat Double-Decker Coach', origin: 'Neu-Ulm, DE', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available', featured: true }),
  entry({ id: 'cf-079', category: 'commercial-fleet', make: 'Van Hool', model: 'TDX27', variant: 'Coach', year: 2023, specSummary: '57-Seat Coach · Diesel', origin: 'Koningshooikt, BE', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-080', category: 'commercial-fleet', make: 'Irizar', model: 'i8', variant: 'Coach', year: 2024, specSummary: '55-Seat Coach · Diesel', origin: 'Ormaiztegi, ES', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cf-081', category: 'commercial-fleet', make: 'Alexander Dennis', model: 'Enviro500', variant: 'Double Decker', year: 2023, specSummary: '87-Seat Double Decker Bus', origin: 'Falkirk, UK', condition: 'Used', driveType: 'RHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-082', category: 'commercial-fleet', make: 'Wrightbus', model: 'StreetDeck', variant: 'Electroliner', year: 2024, specSummary: 'Electric Double Decker Bus', origin: 'Ballymena, UK', condition: 'New', driveType: 'RHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-083', category: 'commercial-fleet', make: 'Iveco Bus', model: 'Crossway', variant: 'LE', year: 2023, specSummary: '55-Seat Intercity Bus', origin: 'Vysoké Mýto, CZ', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-084', category: 'commercial-fleet', make: 'Solaris', model: 'Urbino', variant: '18 Electric', year: 2024, specSummary: 'Electric · Articulated City Bus', origin: 'Bolechowo, PL', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-085', category: 'commercial-fleet', make: 'VDL', model: 'Citea', variant: 'SLF-120 Electric', year: 2024, specSummary: 'Electric · Low-Floor City Bus', origin: 'Valkenswaard, NL', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-086', category: 'commercial-fleet', make: 'Otokar', model: 'Territo', variant: 'U', year: 2023, specSummary: '25-Seat Midibus · Diesel', origin: 'Sakarya, TR', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-087', category: 'commercial-fleet', make: 'BMC', model: 'Procity', variant: 'Electric', year: 2024, specSummary: 'Electric · Midibus', origin: 'Izmir, TR', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-088', category: 'commercial-fleet', make: 'Tata Motors', model: 'Starbus', variant: 'Ultra', year: 2024, specSummary: '40-Seat City Bus · CNG', origin: 'Lucknow, IN', condition: 'New', driveType: 'RHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cf-089', category: 'commercial-fleet', make: 'Ashok Leyland', model: 'Viking', variant: 'BS6', year: 2023, specSummary: '50-Seat Coach · Diesel', origin: 'Hosur, IN', condition: 'Used', driveType: 'RHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-090', category: 'commercial-fleet', make: 'Eicher', model: 'Pro 6049', variant: '6x4', year: 2024, specSummary: '8.9L · 300hp · Tipper', origin: 'Pithampur, IN', condition: 'New', driveType: 'RHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cf-091', category: 'commercial-fleet', make: 'Krone', model: 'Cool Liner', variant: 'Reefer Trailer', year: 2023, specSummary: '13.6m Reefer · -25°C', origin: 'Werlte, DE', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-092', category: 'commercial-fleet', make: 'Schmitz Cargobull', model: 'S.CS', variant: 'Curtainsider', year: 2024, specSummary: '13.6m · 3-Axle Curtainsider', origin: 'Altenberge, DE', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cf-093', category: 'commercial-fleet', make: 'Kögel', model: 'Cargo', variant: 'Box Trailer', year: 2023, specSummary: '13.6m Box Trailer · 3-Axle', origin: 'Burtenbach, DE', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-094', category: 'commercial-fleet', make: 'Wielton', model: 'NS3', variant: 'Curtainsider', year: 2024, specSummary: '13.6m · 3-Axle Curtainsider', origin: 'Wieluń, PL', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cf-095', category: 'commercial-fleet', make: 'Utility Trailer', model: '4000D-X', variant: 'Reefer', year: 2023, specSummary: '53ft Reefer Trailer', origin: 'California, US', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-096', category: 'commercial-fleet', make: 'Great Dane', model: 'Everest', variant: 'Dry Van', year: 2024, specSummary: '53ft Dry Van Trailer', origin: 'Georgia, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cf-097', category: 'commercial-fleet', make: 'Wabash', model: 'DuraPlate', variant: 'Dry Van', year: 2023, specSummary: '53ft Dry Van Trailer', origin: 'Indiana, US', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-098', category: 'commercial-fleet', make: 'Fontaine', model: 'Magnitude', variant: 'Lowboy', year: 2024, specSummary: '55-Ton Lowboy Trailer', origin: 'Alabama, US', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'cf-099', category: 'commercial-fleet', make: 'XL Specialized', model: 'XL 80', variant: 'Extendable Trailer', year: 2023, specSummary: '80-Ton Extendable Trailer', origin: 'Iowa, US', condition: 'Used', driveType: 'LHD', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'cf-100', category: 'commercial-fleet', make: 'Broshuis', model: '2CSA', variant: 'Extendable Car Carrier', year: 2024, specSummary: '9-Vehicle Car Carrier Trailer', origin: 'Kaatsheuvel, NL', condition: 'New', driveType: 'LHD', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
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
     entry({ id: 'hm-021', category: 'heavy-machinery', make: 'Caterpillar', model: '336', variant: 'Excavator', year: 2024, specSummary: '36-Ton Crawler · 2.1m³ Bucket', origin: 'Illinois, US', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'hm-022', category: 'heavy-machinery', make: 'Caterpillar', model: '972', variant: 'Wheel Loader', year: 2024, specSummary: '4.5m³ Bucket · Z-Bar', origin: 'Illinois, US', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'hm-023', category: 'heavy-machinery', make: 'Caterpillar', model: '773', variant: 'Off-Highway Truck', year: 2023, specSummary: '55-Ton Payload · Mining', origin: 'Illinois, US', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available', featured: true }),
  entry({ id: 'hm-024', category: 'heavy-machinery', make: 'Komatsu', model: 'PC490', variant: 'LC-11 Excavator', year: 2024, specSummary: '49-Ton Crawler', origin: 'Tokyo, JP', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'hm-025', category: 'heavy-machinery', make: 'Komatsu', model: 'D65', variant: 'Bulldozer', year: 2023, specSummary: 'Crawler · Semi-U Blade', origin: 'Tokyo, JP', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'hm-026', category: 'heavy-machinery', make: 'Komatsu', model: 'HM400', variant: 'Articulated Dump Truck', year: 2024, specSummary: '40-Ton Payload · 6x6', origin: 'Tokyo, JP', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'hm-027', category: 'heavy-machinery', make: 'Volvo CE', model: 'EC750E', variant: 'Excavator', year: 2023, specSummary: '75-Ton Crawler · Mining Spec', origin: 'Eskilstuna, SE', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'hm-028', category: 'heavy-machinery', make: 'Volvo CE', model: 'L350H', variant: 'Wheel Loader', year: 2024, specSummary: '7.4m³ Bucket · Heavy Duty', origin: 'Eskilstuna, SE', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'hm-029', category: 'heavy-machinery', make: 'Hitachi', model: 'ZX490', variant: 'Excavator', year: 2023, specSummary: '49-Ton Crawler', origin: 'Ibaraki, JP', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'hm-030', category: 'heavy-machinery', make: 'Hitachi', model: 'EH3500', variant: 'Mining Truck', year: 2024, specSummary: '180-Ton Payload · Electric Drive', origin: 'Ibaraki, JP', condition: 'New', priceLabel: 'On Request', availability: 'sourcing-available', featured: true }),
  entry({ id: 'hm-031', category: 'heavy-machinery', make: 'Liebherr', model: 'LTM 1130', variant: 'Mobile Crane', year: 2024, specSummary: '130-Ton Telescopic · 6-Axle', origin: 'Ehingen, DE', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'hm-032', category: 'heavy-machinery', make: 'Liebherr', model: 'LR 1300', variant: 'Crawler Crane', year: 2023, specSummary: '300-Ton Crawler Crane', origin: 'Ehingen, DE', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'hm-033', category: 'heavy-machinery', make: 'Liebherr', model: '946', variant: 'Wheel Loader', year: 2024, specSummary: '3.8m³ Bucket · 4WD', origin: 'Telfs, AT', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'hm-034', category: 'heavy-machinery', make: 'JCB', model: '220X', variant: 'Excavator', year: 2023, specSummary: '22-Ton Crawler', origin: 'Staffordshire, UK', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'hm-035', category: 'heavy-machinery', make: 'JCB', model: '457', variant: 'Wheel Loader', year: 2024, specSummary: '5.2m³ Bucket · Articulated', origin: 'Staffordshire, UK', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'hm-036', category: 'heavy-machinery', make: 'John Deere', model: '333G', variant: 'Compact Track Loader', year: 2024, specSummary: 'Compact · Rubber Track', origin: 'Iowa, US', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'hm-037', category: 'heavy-machinery', make: 'John Deere', model: '870G', variant: 'Motor Grader', year: 2023, specSummary: 'Moldboard · AWD', origin: 'Iowa, US', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'hm-038', category: 'heavy-machinery', make: 'Case', model: 'CX350D', variant: 'Excavator', year: 2024, specSummary: '35-Ton Crawler', origin: 'Wisconsin, US', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'hm-039', category: 'heavy-machinery', make: 'Case', model: '821G', variant: 'Wheel Loader', year: 2023, specSummary: '3.4m³ Bucket · Z-Bar', origin: 'Wisconsin, US', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'hm-040', category: 'heavy-machinery', make: 'DEVELON', model: 'DX530LC', variant: 'Excavator', year: 2024, specSummary: '53-Ton Crawler', origin: 'Incheon, KR', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'hm-041', category: 'heavy-machinery', make: 'Hyundai CE', model: 'HX380AL', variant: 'Excavator', year: 2023, specSummary: '38-Ton Crawler · Long Reach', origin: 'Ulsan, KR', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'hm-042', category: 'heavy-machinery', make: 'SANY', model: 'SY750H', variant: 'Excavator', year: 2024, specSummary: '75-Ton Crawler · Mining', origin: 'Changsha, CN', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'hm-043', category: 'heavy-machinery', make: 'SANY', model: 'SCC4000A', variant: 'Crawler Crane', year: 2023, specSummary: '400-Ton Crawler Crane', origin: 'Changsha, CN', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'hm-044', category: 'heavy-machinery', make: 'XCMG', model: 'XE370CA', variant: 'Excavator', year: 2024, specSummary: '37-Ton Crawler', origin: 'Xuzhou, CN', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'hm-045', category: 'heavy-machinery', make: 'XCMG', model: 'XCT550', variant: 'Truck Crane', year: 2023, specSummary: '55-Ton Truck-Mounted Crane', origin: 'Xuzhou, CN', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'hm-046', category: 'heavy-machinery', make: 'Zoomlion', model: 'ZE370E', variant: 'Excavator', year: 2024, specSummary: '37-Ton Crawler', origin: 'Changsha, CN', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'hm-047', category: 'heavy-machinery', make: 'LiuGong', model: '856H', variant: 'Wheel Loader', year: 2023, specSummary: '3.0m³ Bucket · Articulated', origin: 'Liuzhou, CN', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'hm-048', category: 'heavy-machinery', make: 'Manitou', model: 'MRT 3255', variant: 'Rotating Telehandler', year: 2024, specSummary: 'Lift 32m · 5.5-Ton · 360° Rotation', origin: 'Ancenis, FR', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true, featured: true }),
  entry({ id: 'hm-049', category: 'heavy-machinery', make: 'Merlo', model: 'Roto 50.35', variant: 'Telehandler', year: 2023, specSummary: 'Lift 35m · 5-Ton · Rotating', origin: 'Cuneo, IT', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'hm-050', category: 'heavy-machinery', make: 'Genie', model: 'S-125', variant: 'Boom Lift', year: 2024, specSummary: 'Working Height 41m · Telescopic', origin: 'Washington, US', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'hm-051', category: 'heavy-machinery', make: 'JLG', model: '1500SJ', variant: 'Boom Lift', year: 2023, specSummary: 'Working Height 47m · Telescopic', origin: 'Pennsylvania, US', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'hm-052', category: 'heavy-machinery', make: 'Haulotte', model: 'HA260 PX', variant: 'Articulated Boom Lift', year: 2024, specSummary: 'Working Height 26m', origin: 'Nantes, FR', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'hm-053', category: 'heavy-machinery', make: 'Skyjack', model: 'SJ9250', variant: 'Scissor Lift', year: 2023, specSummary: 'Working Height 18m · RT', origin: 'Ontario, CA', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'hm-054', category: 'heavy-machinery', make: 'Bomag', model: 'BW219', variant: 'Single Drum Roller', year: 2024, specSummary: '19-Ton Vibratory Roller', origin: 'Boppard, DE', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'hm-055', category: 'heavy-machinery', make: 'Dynapac', model: 'CA6000D', variant: 'Soil Compactor', year: 2023, specSummary: '20-Ton Single Drum', origin: 'Karlskrona, SE', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'hm-056', category: 'heavy-machinery', make: 'Hamm', model: 'HD+ 120', variant: 'Tandem Roller', year: 2024, specSummary: '11-Ton Asphalt Roller', origin: 'Tirschenreuth, DE', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'hm-057', category: 'heavy-machinery', make: 'Vögele', model: 'Super 1900-5', variant: 'Asphalt Paver', year: 2023, specSummary: '9m Screed Width', origin: 'Ludwigshafen, DE', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'hm-058', category: 'heavy-machinery', make: 'Wirtgen', model: 'W150', variant: 'Milling Machine', year: 2024, specSummary: '1.5m Width · Cold Planer', origin: 'Windhagen, DE', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'hm-059', category: 'heavy-machinery', make: 'Sennebogen', model: '830', variant: 'Material Handler', year: 2023, specSummary: '30-Ton Material Handler', origin: 'Straubing, DE', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'hm-060', category: 'heavy-machinery', make: 'Terex', model: 'TA400', variant: 'Articulated Dump Truck', year: 2024, specSummary: '38-Ton Payload · 6x6', origin: 'Motherwell, UK', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'hm-061', category: 'heavy-machinery', make: 'Bell Equipment', model: 'B60E', variant: 'Articulated Dump Truck', year: 2023, specSummary: '60-Ton Payload · 6x6', origin: 'Richards Bay, ZA', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'hm-062', category: 'heavy-machinery', make: 'Doosan', model: 'DX140LC', variant: 'Excavator', year: 2024, specSummary: '14-Ton Crawler', origin: 'Incheon, KR', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'hm-063', category: 'heavy-machinery', make: 'Kobelco', model: 'SK350', variant: 'Excavator', year: 2023, specSummary: '35-Ton Crawler', origin: 'Hiroshima, JP', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'hm-064', category: 'heavy-machinery', make: 'Kubota', model: 'KX080', variant: 'Mini Excavator', year: 2024, specSummary: '8-Ton Compact Excavator', origin: 'Osaka, JP', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'hm-065', category: 'heavy-machinery', make: 'Takeuchi', model: 'TB290', variant: 'Compact Excavator', year: 2023, specSummary: '9-Ton Compact Excavator', origin: 'Okayama, JP', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'hm-066', category: 'heavy-machinery', make: 'Bobcat', model: 'E88', variant: 'Compact Excavator', year: 2024, specSummary: '8.8-Ton Compact Excavator', origin: 'North Dakota, US', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'hm-067', category: 'heavy-machinery', make: 'Bobcat', model: 'S770', variant: 'Skid-Steer Loader', year: 2023, specSummary: 'Compact · 3,300 lb Capacity', origin: 'North Dakota, US', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'hm-068', category: 'heavy-machinery', make: 'ASV', model: 'RT-135', variant: 'Compact Track Loader', year: 2024, specSummary: 'Rubber Track · 3,500 lb Capacity', origin: 'Minnesota, US', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'hm-069', category: 'heavy-machinery', make: 'Wacker Neuson', model: 'DPU130', variant: 'Plate Compactor', year: 2023, specSummary: 'Reversible Plate Compactor', origin: 'Munich, DE', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'hm-070', category: 'heavy-machinery', make: 'Atlas Copco', model: 'XAS 137', variant: 'Air Compressor', year: 2024, specSummary: 'Towable · 137 CFM', origin: 'Nacka, SE', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'hm-071', category: 'heavy-machinery', make: 'Caterpillar', model: 'C15', variant: 'Diesel Generator', year: 2023, specSummary: '500kVA · Prime Power', origin: 'Illinois, US', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'hm-072', category: 'heavy-machinery', make: 'Cummins', model: 'C1100D5', variant: 'Diesel Generator', year: 2024, specSummary: '1100kVA · Standby Power', origin: 'Indiana, US', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'hm-073', category: 'heavy-machinery', make: 'FKI', model: 'FRC 3800', variant: 'Rough Terrain Crane', year: 2023, specSummary: '38-Ton Rough Terrain', origin: 'Tadano JV, JP', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'hm-074', category: 'heavy-machinery', make: 'Tadano', model: 'GR-1000XL', variant: 'Rough Terrain Crane', year: 2024, specSummary: '100-Ton Rough Terrain', origin: 'Takamatsu, JP', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true, featured: true }),
  entry({ id: 'hm-075', category: 'heavy-machinery', make: 'Kato Works', model: 'NK-500', variant: 'Mobile Crane', year: 2023, specSummary: '50-Ton Telescopic', origin: 'Tokyo, JP', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'hm-076', category: 'heavy-machinery', make: 'Grove', model: 'GMK5250L', variant: 'All-Terrain Crane', year: 2024, specSummary: '250-Ton All-Terrain', origin: 'Pennsylvania, US', condition: 'New', priceLabel: 'On Request', availability: 'sourcing-available', featured: true }),
  entry({ id: 'hm-077', category: 'heavy-machinery', make: 'Link-Belt', model: '250 X4', variant: 'Crawler Crane', year: 2023, specSummary: '55-Ton Crawler Crane', origin: 'Kentucky, US', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'hm-078', category: 'heavy-machinery', make: 'Potain', model: 'MDT 219', variant: 'Tower Crane', year: 2024, specSummary: '10-Ton · 60m Jib', origin: 'Moulins, FR', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'hm-079', category: 'heavy-machinery', make: 'Liebherr', model: '280 EC-H', variant: 'Tower Crane', year: 2023, specSummary: '12-Ton · Flat-Top', origin: 'Biberach, DE', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'hm-080', category: 'heavy-machinery', make: 'XCMG', model: 'XGT7020', variant: 'Tower Crane', year: 2024, specSummary: '10-Ton · 70m Boom', origin: 'Xuzhou, CN', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
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
    entry({ id: 'mr-019', category: 'marine', make: 'Azimut', model: 'S8', year: 2024, specSummary: '25m Open Sport Yacht', origin: 'Avigliana, IT', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'mr-020', category: 'marine', make: 'Sunseeker', model: 'Manhattan', variant: '55', year: 2023, specSummary: '17m Flybridge Cruiser', origin: 'Poole, UK', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mr-021', category: 'marine', make: 'Princess', model: 'X95', year: 2024, specSummary: '29m Superyacht Class', origin: 'Plymouth, UK', condition: 'New', priceLabel: 'On Request', availability: 'sourcing-available', featured: true }),
  entry({ id: 'mr-022', category: 'marine', make: 'Ferretti Yachts', model: '500', year: 2023, specSummary: '15.5m · 3 Cabins', origin: 'Forlì, IT', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mr-023', category: 'marine', make: 'Riva', model: '68 Diable', year: 2024, specSummary: '20.9m · Sport Yacht', origin: 'Sarnico, IT', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'mr-024', category: 'marine', make: 'Pershing', model: '6X', year: 2023, specSummary: '18.9m · 40 Knots', origin: 'Mondolfo, IT', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mr-025', category: 'marine', make: 'Sanlorenzo', model: 'SX76', year: 2024, specSummary: '23m Crossover Yacht', origin: 'Viareggio, IT', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'mr-026', category: 'marine', make: 'Fairline', model: 'Squadron', variant: '58', year: 2023, specSummary: '17.7m Flybridge', origin: 'Northamptonshire, UK', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mr-027', category: 'marine', make: 'Beneteau', model: 'Grand Trawler', variant: '62', year: 2024, specSummary: '18.9m Long-Range Trawler', origin: 'Saint-Gilles-Croix-de-Vie, FR', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'mr-028', category: 'marine', make: 'Jeanneau', model: 'Leader', variant: '40', year: 2023, specSummary: '12m Day Cruiser', origin: 'Les Herbiers, FR', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mr-029', category: 'marine', make: 'Sea Ray', model: 'Sundancer', variant: '370', year: 2024, specSummary: '11.3m Sport Yacht', origin: 'Tennessee, US', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'mr-030', category: 'marine', make: 'Boston Whaler', model: '280', variant: 'Outrage', year: 2023, specSummary: '8.5m Center Console', origin: 'Florida, US', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mr-031', category: 'marine', make: 'Viking', model: '82', variant: 'Enclosed Bridge', year: 2024, specSummary: '25m · Sport Fisher Flagship', origin: 'New Jersey, US', condition: 'New', priceLabel: 'On Request', availability: 'sourcing-available', featured: true }),
  entry({ id: 'mr-032', category: 'marine', make: 'Hatteras', model: 'M90', variant: 'Panacera', year: 2023, specSummary: '27.4m Motor Yacht', origin: 'North Carolina, US', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mr-033', category: 'marine', make: 'Azimut', model: 'Verve', variant: '47', year: 2024, specSummary: '14.3m Sport Coupe', origin: 'Avigliana, IT', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'mr-034', category: 'marine', make: 'Numarine', model: '18XP', year: 2023, specSummary: '18m Explorer Yacht', origin: 'Antalya, TR', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mr-035', category: 'marine', make: 'Sanlorenzo', model: 'SD90', year: 2024, specSummary: '28m Semi-Displacement', origin: 'Viareggio, IT', condition: 'New', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mr-036', category: 'marine', make: 'Bavaria', model: 'Cruiser', variant: '46', year: 2023, specSummary: '14.3m Motor Cruiser', origin: 'Giebelstadt, DE', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mr-037', category: 'marine', make: 'Fjord', model: '44', variant: 'Open', year: 2024, specSummary: '13.4m Open Sport Boat', origin: 'Slagelse, DK', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'mr-038', category: 'marine', make: 'Nimbus', model: 'T11', year: 2023, specSummary: '11.5m Cabin Cruiser', origin: 'Skövde, SE', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mr-039', category: 'marine', make: 'Windy', model: 'SR52', variant: 'Xanthos', year: 2024, specSummary: '15.9m Sport Yacht', origin: 'Arendal, NO', condition: 'New', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mr-040', category: 'marine', make: 'Beneteau', model: 'Oceanis', variant: '51.1', year: 2023, specSummary: '15.7m Sailing Yacht', origin: 'Saint-Gilles-Croix-de-Vie, FR', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mr-041', category: 'marine', make: 'Jeanneau', model: 'Sun Odyssey', variant: '440', year: 2024, specSummary: '13.3m Sailing Yacht', origin: 'Les Herbiers, FR', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'mr-042', category: 'marine', make: 'Hanse', model: '460', year: 2023, specSummary: '14m Sailing Yacht', origin: 'Greifswald, DE', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mr-043', category: 'marine', make: 'Lagoon', model: '51', variant: 'Catamaran', year: 2024, specSummary: '15.5m Sailing Catamaran', origin: 'Bordeaux, FR', condition: 'New', priceLabel: 'On Request', availability: 'sourcing-available', featured: true }),
  entry({ id: 'mr-044', category: 'marine', make: 'Fountaine Pajot', model: 'Samana', variant: '59', year: 2023, specSummary: '18m Sailing Catamaran', origin: 'Aigrefeuille-d\'Aunis, FR', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mr-045', category: 'marine', make: 'Leopard', model: '53 PC', variant: 'Power Catamaran', year: 2024, specSummary: '16m Power Catamaran', origin: 'Cape Town, ZA', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'mr-046', category: 'marine', make: 'Aquila', model: '44', variant: 'Power Catamaran', year: 2023, specSummary: '13.4m Power Catamaran', origin: 'Qingdao, CN', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mr-047', category: 'marine', make: 'Boston Whaler', model: '380', variant: 'Realm', year: 2024, specSummary: '11.6m Dual Console', origin: 'Florida, US', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'mr-048', category: 'marine', make: 'Grady-White', model: 'Canyon', variant: '456', year: 2023, specSummary: '13.9m Center Console', origin: 'North Carolina, US', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mr-049', category: 'marine', make: 'Yellowfin', model: '42', variant: 'Offshore', year: 2024, specSummary: '12.8m Center Console', origin: 'Florida, US', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'mr-050', category: 'marine', make: 'Regulator', model: '41', year: 2023, specSummary: '12.5m Center Console', origin: 'North Carolina, US', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mr-051', category: 'marine', make: 'Wellcraft', model: '435', variant: 'Coastal', year: 2024, specSummary: '13.2m Coastal Cruiser', origin: 'Florida, US', condition: 'New', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mr-052', category: 'marine', make: 'Axopar', model: '37', variant: 'Sun-Top', year: 2023, specSummary: '11.2m Sport Cruiser', origin: 'Pietarsaari, FI', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mr-053', category: 'marine', make: 'De Antonio', model: 'D50', year: 2024, specSummary: '15.2m Open Yacht', origin: 'Barcelona, ES', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'mr-054', category: 'marine', make: 'Zodiac', model: 'Yachtline', variant: '760', year: 2023, specSummary: '7.6m Luxury RIB', origin: 'La Rochelle, FR', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mr-055', category: 'marine', make: 'Williams', model: 'Turbojet', variant: '445', year: 2024, specSummary: '4.5m Tender · Jet Drive', origin: 'Ryde, UK', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'mr-056', category: 'marine', make: 'Highfield', model: 'Sport', variant: '800', year: 2023, specSummary: '8m Rigid Inflatable Boat', origin: 'Zhuhai, CN', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mr-057', category: 'marine', make: 'Sea-Doo', model: 'RXP-X', variant: '325', year: 2024, specSummary: 'Personal Watercraft · 325hp', origin: 'Valcourt, CA', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'mr-058', category: 'marine', make: 'Yamaha', model: 'FX Cruiser', variant: 'SVHO', year: 2023, specSummary: 'Personal Watercraft · 3-Seat', origin: 'Shizuoka, JP', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mr-059', category: 'marine', make: 'Kawasaki', model: 'Ultra', variant: '310LX', year: 2024, specSummary: 'Personal Watercraft · Luxury', origin: 'Akashi, JP', condition: 'New', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mr-060', category: 'marine', make: 'Sunseeker', model: 'Ocean', variant: '90', year: 2024, specSummary: '27.4m Flybridge Motor Yacht', origin: 'Poole, UK', condition: 'New', priceLabel: 'On Request', availability: 'sourcing-available', featured: true }),

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
    entry({ id: 'mb-017', category: 'mobility', make: 'Ducati', model: 'Multistrada V4', variant: 'Rally', year: 2024, specSummary: '1158cc V4 · Adventure', origin: 'Bologna, IT', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'mb-018', category: 'mobility', make: 'Ducati', model: 'Monster', variant: 'SP', year: 2023, specSummary: '937cc Twin · Naked', origin: 'Bologna, IT', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mb-019', category: 'mobility', make: 'BMW Motorrad', model: 'M 1000 RR', year: 2024, specSummary: '999cc Inline-4 · 210hp', origin: 'Berlin, DE', condition: 'New', priceLabel: 'On Request', availability: 'sourcing-available', featured: true }),
  entry({ id: 'mb-020', category: 'mobility', make: 'BMW Motorrad', model: 'K 1600 GTL', year: 2023, specSummary: '1649cc Inline-6 · Touring', origin: 'Berlin, DE', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mb-021', category: 'mobility', make: 'Harley-Davidson', model: 'Street Glide', variant: 'ST', year: 2024, specSummary: '1923cc V-Twin · Touring', origin: 'Wisconsin, US', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'mb-022', category: 'mobility', make: 'Harley-Davidson', model: 'Fat Boy', year: 2023, specSummary: '1868cc V-Twin · Cruiser', origin: 'Wisconsin, US', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mb-023', category: 'mobility', make: 'Indian Motorcycle', model: 'Chieftain', variant: 'Dark Horse', year: 2024, specSummary: '1890cc V-Twin · Touring', origin: 'Iowa, US', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'mb-024', category: 'mobility', make: 'Yamaha', model: 'YZF-R1', year: 2024, specSummary: '998cc Inline-4 · 200hp', origin: 'Shizuoka, JP', condition: 'New', priceLabel: 'On Request', availability: 'sourcing-available', featured: true }),
  entry({ id: 'mb-025', category: 'mobility', make: 'Yamaha', model: 'Tenere 700', year: 2023, specSummary: '689cc Twin · Adventure', origin: 'Shizuoka, JP', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mb-026', category: 'mobility', make: 'Kawasaki', model: 'Z H2', year: 2024, specSummary: '998cc Supercharged Inline-4', origin: 'Akashi, JP', condition: 'New', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mb-027', category: 'mobility', make: 'Kawasaki', model: 'Versys 1000', year: 2023, specSummary: '1043cc Inline-4 · Adventure', origin: 'Akashi, JP', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mb-028', category: 'mobility', make: 'Suzuki', model: 'GSX-R1000', variant: 'R', year: 2024, specSummary: '999cc Inline-4', origin: 'Hamamatsu, JP', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'mb-029', category: 'mobility', make: 'Suzuki', model: 'V-Strom 1050', year: 2023, specSummary: '1037cc Twin · Adventure', origin: 'Hamamatsu, JP', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mb-030', category: 'mobility', make: 'Honda', model: 'CBR1000RR-R', variant: 'Fireblade SP', year: 2024, specSummary: '999cc Inline-4 · 217hp', origin: 'Kumamoto, JP', condition: 'New', priceLabel: 'On Request', availability: 'sourcing-available', featured: true }),
  entry({ id: 'mb-031', category: 'mobility', make: 'Honda', model: 'Gold Wing', variant: 'Tour', year: 2023, specSummary: '1833cc Flat-6 · Touring', origin: 'Kumamoto, JP', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mb-032', category: 'mobility', make: 'Triumph', model: 'Speed Triple', variant: '1200 RS', year: 2024, specSummary: '1160cc Triple · Naked', origin: 'Hinckley, UK', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'mb-033', category: 'mobility', make: 'Triumph', model: 'Tiger 1200', variant: 'GT Explorer', year: 2023, specSummary: '1160cc Triple · Adventure', origin: 'Hinckley, UK', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mb-034', category: 'mobility', make: 'KTM', model: '890 Adventure R', year: 2024, specSummary: '889cc Twin · Off-Road', origin: 'Mattighofen, AT', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'mb-035', category: 'mobility', make: 'KTM', model: 'RC 8C', year: 2023, specSummary: '889cc Twin · Track Only', origin: 'Mattighofen, AT', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mb-036', category: 'mobility', make: 'Aprilia', model: 'Tuono V4', variant: 'Factory', year: 2024, specSummary: '1099cc V4 · Naked', origin: 'Noale, IT', condition: 'New', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mb-037', category: 'mobility', make: 'MV Agusta', model: 'Brutale', variant: '1000 RR', year: 2023, specSummary: '998cc Inline-4 · 208hp', origin: 'Varese, IT', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available', featured: true }),
  entry({ id: 'mb-038', category: 'mobility', make: 'Moto Guzzi', model: 'V100', variant: 'Mandello', year: 2024, specSummary: '1042cc Twin · Sport Touring', origin: 'Mandello del Lario, IT', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'mb-039', category: 'mobility', make: 'Royal Enfield', model: 'Continental GT', variant: '650', year: 2023, specSummary: '648cc Twin · Cafe Racer', origin: 'Chennai, IN', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mb-040', category: 'mobility', make: 'Royal Enfield', model: 'Super Meteor', variant: '650', year: 2024, specSummary: '648cc Twin · Cruiser', origin: 'Chennai, IN', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'mb-041', category: 'mobility', make: 'Bajaj', model: 'Dominar 400', year: 2023, specSummary: '373cc Single · Sport Tourer', origin: 'Pune, IN', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mb-042', category: 'mobility', make: 'Vespa', model: 'Primavera', variant: '150', year: 2024, specSummary: '150cc Scooter · Automatic', origin: 'Pontedera, IT', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'mb-043', category: 'mobility', make: 'Piaggio', model: 'Beverly', variant: '400', year: 2023, specSummary: '400cc Maxi Scooter', origin: 'Pontedera, IT', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mb-044', category: 'mobility', make: 'Kymco', model: 'AK 550', year: 2024, specSummary: '550cc Maxi Scooter', origin: 'Kaohsiung, TW', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'mb-045', category: 'mobility', make: 'SYM', model: 'Maxsym TL', variant: '508', year: 2023, specSummary: '498cc Maxi Scooter', origin: 'New Taipei, TW', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mb-046', category: 'mobility', make: 'Zero Motorcycles', model: 'SR/S', year: 2024, specSummary: 'Electric · 322km Range', origin: 'California, US', condition: 'New', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mb-047', category: 'mobility', make: 'Energica', model: 'Experia', year: 2023, specSummary: 'Electric Touring · 420km Range', origin: 'Modena, IT', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mb-048', category: 'mobility', make: 'LiveWire', model: 'S2 Del Mar', year: 2024, specSummary: 'Electric · 225km Range', origin: 'Wisconsin, US', condition: 'New', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mb-049', category: 'mobility', make: 'Segway', model: 'Ninebot Max', variant: 'G3', year: 2024, specSummary: 'Electric Scooter · 70km Range', origin: 'Beijing, CN', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'mb-050', category: 'mobility', make: 'Xiaomi', model: 'Electric Scooter', variant: '4 Ultra', year: 2024, specSummary: 'Electric · 70km Range', origin: 'Beijing, CN', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'mb-051', category: 'mobility', make: 'Gogoro', model: 'CrossOver', variant: 'GX', year: 2023, specSummary: 'Electric · Swappable Battery', origin: 'Taipei, TW', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mb-052', category: 'mobility', make: 'NIU', model: 'MQi', variant: 'GT Evo', year: 2024, specSummary: 'Electric Scooter · 100km Range', origin: 'Beijing, CN', condition: 'New', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mb-053', category: 'mobility', make: 'Super Soco', model: 'CPx', year: 2023, specSummary: 'Electric Scooter · 130km Range', origin: 'Jiangmen, CN', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mb-054', category: 'mobility', make: 'Trek', model: 'Rail 9.9', variant: 'E-MTB', year: 2024, specSummary: 'Electric Mountain Bike', origin: 'Wisconsin, US', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'mb-055', category: 'mobility', make: 'Specialized', model: 'Turbo Levo', year: 2023, specSummary: 'Electric Mountain Bike', origin: 'California, US', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mb-056', category: 'mobility', make: 'Cannondale', model: 'Moterra', variant: 'Neo', year: 2024, specSummary: 'Electric Mountain Bike', origin: 'Connecticut, US', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'mb-057', category: 'mobility', make: 'Yamaha', model: 'TMAX', variant: '560', year: 2024, specSummary: '562cc Maxi Scooter', origin: 'Shizuoka, JP', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'mb-058', category: 'mobility', make: 'Honda', model: 'X-ADV', year: 2023, specSummary: '745cc Adventure Scooter', origin: 'Kumamoto, JP', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),
  entry({ id: 'mb-059', category: 'mobility', make: 'CFMOTO', model: '800MT', year: 2024, specSummary: '799cc Twin · Adventure', origin: 'Hangzhou, CN', condition: 'New', priceLabel: 'On Request', availability: 'procurement-available', procurementAvailable: true }),
  entry({ id: 'mb-060', category: 'mobility', make: 'Benelli', model: 'TRK 702', year: 2023, specSummary: '693cc Twin · Adventure', origin: 'Pesaro, IT', condition: 'Used', priceLabel: 'On Request', availability: 'sourcing-available' }),

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
    entry({ id: 'pc-016', category: 'parts-customization', make: 'Bilstein', model: 'B16 Ride Control', specSummary: 'Electronically Adjustable Suspension', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'Ennepetal, DE' }),
  entry({ id: 'pc-017', category: 'parts-customization', make: 'Eibach', model: 'Pro-Kit Lowering Springs', specSummary: 'Performance Lowering Springs', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'Finnentrop, DE' }),
  entry({ id: 'pc-018', category: 'parts-customization', make: 'H&R', model: 'Sport Springs', specSummary: 'Progressive Rate Springs', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'Wetzlar, DE' }),
  entry({ id: 'pc-019', category: 'parts-customization', make: 'Wilwood', model: 'Superlite Brake Kit', specSummary: '6-Piston Forged Caliper Kit', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'California, US' }),
  entry({ id: 'pc-020', category: 'parts-customization', make: 'StopTech', model: 'ST-60 Big Brake Kit', specSummary: '6-Piston · 380mm Rotor', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'California, US' }),
  entry({ id: 'pc-021', category: 'parts-customization', make: 'Vossen', model: 'HF-5 Wheels', specSummary: 'Flow-Formed Alloy Wheels', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'Wisconsin, US' }),
  entry({ id: 'pc-022', category: 'parts-customization', make: 'ADV.1', model: 'ADV5.2 Wheels', specSummary: '2-Piece Forged Wheels', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'Florida, US' }),
  entry({ id: 'pc-023', category: 'parts-customization', make: 'Rotiform', model: 'LVS Wheels', specSummary: 'Cast Aluminum Wheels', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'California, US' }),
  entry({ id: 'pc-024', category: 'parts-customization', make: 'Remus', model: 'GPF-Back System', specSummary: 'Sport Exhaust · Stainless Steel', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'Bärnbach, AT' }),
  entry({ id: 'pc-025', category: 'parts-customization', make: 'Capristo', model: 'Valved Exhaust System', specSummary: 'Full Titanium Valved Exhaust', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'Bochum, DE' }),
  entry({ id: 'pc-026', category: 'parts-customization', make: 'Armytrix', model: 'Valvetronic Exhaust', specSummary: 'Remote-Controlled Valved Exhaust', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'Taipei, TW' }),
  entry({ id: 'pc-027', category: 'parts-customization', make: 'APR', model: 'Stage 2 ECU Tune', specSummary: 'Performance ECU Software', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'South Carolina, US' }),
  entry({ id: 'pc-028', category: 'parts-customization', make: 'Unitronic', model: 'Stage 2+ Tune', specSummary: 'ECU + TCU Performance Package', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'Quebec, CA' }),
  entry({ id: 'pc-029', category: 'parts-customization', make: 'Liberty Walk', model: 'LB Silhouette Widebody', specSummary: 'Full Widebody Kit · Fiberglass', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'Nagano, JP', featured: true }),
  entry({ id: 'pc-030', category: 'parts-customization', make: 'Rowen', model: 'Aero Kit', specSummary: 'Full Aerodynamic Body Kit', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'Chiba, JP' }),
  entry({ id: 'pc-031', category: 'parts-customization', make: 'Prior Design', model: 'PD Widebody Kit', specSummary: 'Widebody Aero Package', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'Neu-Ulm, DE' }),
  entry({ id: 'pc-032', category: 'parts-customization', make: 'Carlex Design', model: 'Bespoke Interior', specSummary: 'Custom Leather Interior Retrim', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'Skierniewice, PL' }),
  entry({ id: 'pc-033', category: 'parts-customization', make: 'Alcantara', model: 'Headliner Retrim Kit', specSummary: 'Suede Headliner Replacement', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'Milan, IT' }),
  entry({ id: 'pc-034', category: 'parts-customization', make: 'Sparco', model: 'Evo QRT Seats', specSummary: 'Racing Bucket Seats · FIA', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'Volpiano, IT' }),
  entry({ id: 'pc-035', category: 'parts-customization', make: 'Bride', model: 'Zeta IV Seats', specSummary: 'Full Bucket Racing Seats', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'Osaka, JP' }),
  entry({ id: 'pc-036', category: 'parts-customization', make: 'Momo', model: 'Prototipo Steering Wheel', specSummary: 'Classic Leather Steering Wheel', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'Milan, IT' }),
  entry({ id: 'pc-037', category: 'parts-customization', make: 'OMP', model: 'Racing Harness', specSummary: '4-Point FIA Harness', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'Chieri, IT' }),
  entry({ id: 'pc-038', category: 'parts-customization', make: 'JIC Magic', model: 'Roll Cage', specSummary: 'CrMo Bolt-In Roll Cage', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'Osaka, JP' }),
  entry({ id: 'pc-039', category: 'parts-customization', make: 'Garrett', model: 'G-Series Turbocharger', specSummary: 'Ball-Bearing Performance Turbo', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'Rolle, CH' }),
  entry({ id: 'pc-040', category: 'parts-customization', make: 'Precision Turbo', model: 'PT6870 Turbocharger', specSummary: 'Billet Wheel Performance Turbo', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'Indiana, US' }),
  entry({ id: 'pc-041', category: 'parts-customization', make: 'BorgWarner', model: 'EFR Turbocharger', specSummary: 'Ball-Bearing Turbo Series', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'Auburn Hills, US' }),
  entry({ id: 'pc-042', category: 'parts-customization', make: 'Mishimoto', model: 'Performance Intercooler', specSummary: 'Bar-and-Plate Aluminum Core', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'Ohio, US' }),
  entry({ id: 'pc-043', category: 'parts-customization', make: 'CSF', model: 'High-Performance Radiator', specSummary: 'All-Aluminum Race Radiator', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'California, US' }),
  entry({ id: 'pc-044', category: 'parts-customization', make: 'Motul', model: '300V Racing Oil', specSummary: 'Ester-Core Competition Engine Oil', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'Aubervilliers, FR' }),
  entry({ id: 'pc-045', category: 'parts-customization', make: 'Setrab', model: 'Oil Cooler', specSummary: 'Plate-and-Fin Oil Cooler', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'Mölndal, SE' }),
  entry({ id: 'pc-046', category: 'parts-customization', make: 'Alcon', model: 'Monobloc Brake Kit', specSummary: '6-Piston Monobloc Caliper Kit', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'Tamworth, UK' }),
  entry({ id: 'pc-047', category: 'parts-customization', make: 'Project Mu', model: 'Brake Pad Set', specSummary: 'High-Performance Brake Pads', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'Osaka, JP' }),
  entry({ id: 'pc-048', category: 'parts-customization', make: 'Whiteline', model: 'Anti-Roll Bar Kit', specSummary: 'Adjustable Sway Bar Kit', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'Melbourne, AU' }),
  entry({ id: 'pc-049', category: 'parts-customization', make: 'Cusco', model: 'Strut Tower Brace', specSummary: 'Chassis Reinforcement Brace', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'Osaka, JP' }),
  entry({ id: 'pc-050', category: 'parts-customization', make: 'Voltex', model: 'GT Wing', specSummary: 'Carbon Fiber Adjustable Wing', condition: 'New', priceLabel: 'On Request', availability: 'catalog', origin: 'Chiba, JP' }),
  
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

// ─── Slug Generation ────────────────────────────────────────────────────────
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function getListingSlug(listing: Listing): string {
  const parts = [listing.make, listing.model, listing.variant]
    .filter(Boolean)
    .join(' ')
  return `${slugify(parts)}-${listing.id}`
}

export function getListingBySlug(
  category: CategorySlug,
  slug: string
): Listing | undefined {
  return getListingsByCategory(category).find(
    (l) => getListingSlug(l) === slug
  )
}

export function getSimilarListings(listing: Listing, limit = 3): Listing[] {
  return getListingsByCategory(listing.category)
    .filter((l) => l.id !== listing.id)
    .slice(0, limit)
}