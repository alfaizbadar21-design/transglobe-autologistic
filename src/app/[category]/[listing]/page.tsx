import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight, ArrowRight, ShieldCheck } from 'lucide-react'
import { categories } from '@/lib/site-data'
import {
  getListingBySlug,
  getSimilarListings,
  getListingSlug,
  type CategorySlug,
} from '@/lib/listings-data'
import ListingGallery from '@/components/ListingGallery'
import ListingSpecs from '@/components/ListingSpecs'
import SimilarListings from '@/components/SimilarListings'
import Reveal from '@/components/Reveal'
import { allListings } from '@/lib/listings-data'

interface PageProps {
  params: Promise<{ category: string; listing: string }>
}

const VALID_CATEGORIES = categories.map((c) => c.slug)


export async function generateStaticParams() {
  return allListings.map((l) => ({
    category: l.category,
    listing: getListingSlug(l),
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, listing: listingSlug } = await params
  if (!VALID_CATEGORIES.includes(category)) return {}

  const listing = getListingBySlug(category as CategorySlug, listingSlug)
  if (!listing) return {}

  const title = [listing.year, listing.make, listing.model, listing.variant]
    .filter(Boolean)
    .join(' ')

  return {
    title,
    description: listing.specSummary,
  }
}

const availabilityCopy: Record<string, string> = {
  catalog: 'This is a catalog reference. Contact us to check current sourcing options for this specification.',
  'procurement-available': 'We can actively source and procure this exact specification for you.',
  'sourcing-available': 'We are actively sourcing this specification through our global network.',
  'verified-available': 'This specification has been verified as available through a confirmed source.',
  reserved: 'This specific listing is currently reserved. We can source a similar specification.',
  sold: 'This specific listing is no longer available. We can source a similar specification.',
}

export default async function ListingDetailPage({ params }: PageProps) {
  const { category, listing: listingSlug } = await params

  if (!VALID_CATEGORIES.includes(category)) notFound()

  const listing = getListingBySlug(category as CategorySlug, listingSlug)
  if (!listing) notFound()

  const categoryInfo = categories.find((c) => c.slug === category)
  const similar = getSimilarListings(listing, 3)

  const title = [listing.year, listing.make, listing.model, listing.variant]
    .filter(Boolean)
    .join(' ')

  return (
    <div className="min-h-screen bg-background pt-24 pb-4">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">

        {/* ── Breadcrumb ── */}
        <nav className="flex items-center gap-2 text-[13px] text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href={`/${category}`} className="hover:text-foreground transition-colors">
            {categoryInfo?.title}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground/70 truncate">{listing.make} {listing.model}</span>
        </nav>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16">

          {/* ── Left: Gallery ── */}
          <Reveal>
            <ListingGallery images={listing.images} alt={title} />
          </Reveal>

          {/* ── Right: Header + Specs summary ── */}
          <Reveal delay={0.1}>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-1 rounded-full bg-[hsl(41_42%_56%_/_0.1)] border border-[hsl(41_42%_56%_/_0.3)] text-[11px] font-semibold uppercase tracking-wide text-[hsl(41_42%_56%)]">
                  {listing.condition}
                </span>
                {listing.driveType && (
                  <span className="px-2.5 py-1 rounded-full bg-secondary border border-[hsl(38_16%_20%)] text-[11px] font-semibold text-muted-foreground">
                    {listing.driveType}
                  </span>
                )}
                {listing.featured && (
                  <span className="px-2.5 py-1 rounded-full bg-[hsl(41_42%_56%)] text-[11px] font-semibold uppercase tracking-wide text-[hsl(30_10%_8%)]">
                    Featured
                  </span>
                )}
              </div>

              <h1 className="mt-4 font-heading text-2xl md:text-[2rem] font-medium text-foreground leading-[1.15]">
                {title}
              </h1>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                {listing.specSummary}
              </p>

              <div className="mt-6 pt-6 border-t border-[hsl(38_16%_18%)]">
                <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-muted-foreground">
                  Price
                </span>
                <div className="mt-1 font-heading text-2xl font-medium text-foreground">
                  {listing.priceLabel}
                </div>
              </div>

              {/* Availability note */}
              <div className="mt-6 p-5 rounded-xl bg-card border border-[hsl(38_16%_20%)]">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[hsl(41_42%_56%)] shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-[13px] text-foreground/80 leading-relaxed">
                    {availabilityCopy[listing.availability]}
                  </p>
                </div>
              </div>

              <Link
                href={`/intake-hub?listing=${encodeURIComponent(title)}`}
                className="mt-6 inline-flex w-full items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[hsl(41_42%_56%)] text-[hsl(30_10%_8%)] text-sm font-semibold tracking-wide hover:bg-[hsl(41_42%_64%)] transition-colors"
              >
                Request This Asset
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* ── Full Specifications ── */}
        <Reveal delay={0.15}>
          <div className="mt-16 md:mt-20">
            <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[hsl(41_42%_56%)]">
              Full Specification
            </span>
            <h2 className="mt-3 font-heading text-2xl md:text-3xl font-medium text-foreground">
              Details
            </h2>
            <div className="mt-8 max-w-2xl">
              <ListingSpecs listing={listing} />
            </div>
          </div>
        </Reveal>
      </div>

      {/* ── Similar listings ── */}
      <div className="mt-16 md:mt-20">
        <SimilarListings listings={similar} category={category as CategorySlug} />
      </div>
    </div>
  )
}