import type { Listing } from '@/lib/listings-data'

interface SpecRow {
  label: string
  value: string
}

function buildSpecs(listing: Listing): SpecRow[] {
  const specs: SpecRow[] = []

  specs.push({ label: 'Make', value: listing.make })
  specs.push({ label: 'Model', value: listing.model })
  if (listing.variant) specs.push({ label: 'Variant', value: listing.variant })
  if (listing.year) specs.push({ label: 'Year', value: String(listing.year) })
  specs.push({ label: 'Condition', value: listing.condition })
  if (listing.driveType) specs.push({ label: 'Drive Type', value: listing.driveType })
  specs.push({ label: 'Specification', value: listing.specSummary })
  if (listing.origin) specs.push({ label: 'Origin', value: listing.origin })
  specs.push({
    label: 'Worldwide Shipping',
    value: listing.worldwideShipping ? 'Available' : 'On Request',
  })

  return specs
}

export default function ListingSpecs({ listing }: { listing: Listing }) {
  const specs = buildSpecs(listing)

  return (
    <div className="grid sm:grid-cols-2 gap-px bg-[hsl(38_16%_16%)] border border-[hsl(38_16%_16%)] rounded-xl overflow-hidden">
      {specs.map((s) => (
        <div key={s.label} className="bg-card px-5 py-4 flex items-center justify-between gap-4">
          <span className="text-[13px] text-muted-foreground">{s.label}</span>
          <span className="text-[13px] font-medium text-foreground text-right">{s.value}</span>
        </div>
      ))}
    </div>
  )
}