import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ListingCard from '@/components/ListingCard'
import { categories } from '@/lib/site-data'
import type { Listing, CategorySlug } from '@/lib/listings-data'

export default function SimilarListings({
  listings,
  category,
}: {
  listings: Listing[]
  category: CategorySlug
}) {
  if (listings.length === 0) return null

  const categoryInfo = categories.find((c) => c.slug === category)

  return (
    <section className="py-20 md:py-28 bg-card border-t border-[hsl(38_16%_16%)]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[hsl(41_42%_56%)]">
              Similar Listings
            </span>
            <h2 className="mt-3 font-heading text-2xl md:text-3xl font-medium text-foreground">
              More in {categoryInfo?.title}
            </h2>
          </div>
          <Link
            href={`/${category}`}
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-[hsl(41_42%_56%)] shrink-0"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((l) => (
            <ListingCard key={l.id} listing={l} />
          ))}
        </div>
      </div>
    </section>
  )
}