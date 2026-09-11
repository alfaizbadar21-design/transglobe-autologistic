import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { categories } from '@/lib/site-data'
import { getListingsByCategory, getUniqueMakes, type CategorySlug } from '@/lib/listings-data'
import ListingsGrid from '@/components/ListingsGrid'

interface PageProps {
  params: Promise<{ category: string }>
}

const VALID_CATEGORIES = categories.map((c) => c.slug)

export async function generateStaticParams() {
  return VALID_CATEGORIES.map((slug) => ({ category: slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params
  const cat = categories.find((c) => c.slug === category)
  if (!cat) return {}
  return {
    title: cat.title,
    description: cat.blurb,
  }
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params

  const cat = categories.find((c) => c.slug === category)
  if (!cat) notFound()

  const listings = getListingsByCategory(category as CategorySlug)
  const makes = getUniqueMakes(category as CategorySlug)

  return (
    <div className="min-h-screen bg-background">

      {/* ── Header ── */}
      <section className="relative h-[46vh] min-h-[360px] overflow-hidden -mt-16">
        <Image
          src={cat.image}
          alt={cat.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0E0D0C]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

        <div className="relative h-full max-w-7xl mx-auto px-5 sm:px-8 flex flex-col justify-end pb-12 pt-24">
          <span className="inline-flex items-center gap-2.5 mb-4 text-[10px] font-semibold tracking-[0.28em] uppercase text-[hsl(41_42%_56%)]">
            <span className="h-px w-8 bg-[hsl(41_42%_56%_/_0.6)]" />
            {cat.tag}
          </span>
          <h1 className="font-heading text-white text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.06] max-w-3xl">
            {cat.title}
          </h1>
          <p className="mt-3 text-white/65 text-sm md:text-base max-w-xl leading-relaxed">
            {cat.blurb}
          </p>
        </div>
      </section>

      {/* ── Listings ── */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <ListingsGrid listings={listings} makes={makes} />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="bg-card border border-[hsl(38_16%_22%)] rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-foreground mb-3">
              Can&apos;t find what you&apos;re looking for?
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto mb-7">
              Our sourcing network extends beyond this showcase. Tell us your
              exact requirements and we&apos;ll source it globally.
            </p>
            <Link
              href="/intake-hub"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[hsl(41_42%_56%)] text-[hsl(30_10%_8%)] text-sm font-semibold hover:bg-[hsl(41_42%_64%)] transition-colors"
            >
              Submit a Custom Request
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}