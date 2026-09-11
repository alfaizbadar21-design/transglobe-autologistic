import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { pageImages, categories } from '@/lib/site-data'
import GalleryMasonry from '@/components/GalleryMasonry'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'A visual introduction to the six asset categories TransGlobe sources and moves — cars, commercial fleet, heavy machinery, marine, mobility and parts.',
}

const process = [
  {
    title: 'Inspection & Verification',
    description: 'Every asset is independently inspected before acquisition — condition, documentation and specification confirmed.',
    image: categories[2].image,
  },
  {
    title: 'Loading & Freight',
    description: 'Secure loading, bracing and lashing — the same precision whether it\'s a single vehicle or a full fleet.',
    image: categories[1].image,
  },
  {
    title: 'Documentation & Handover',
    description: 'Full paper trail from origin to destination, shared as it is generated — no surprises at delivery.',
    image: categories[3].image,
  },
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* ═══ 01 HERO ═══ */}
      <section className="relative h-[56vh] min-h-[420px] overflow-hidden -mt-16">
        <Image
          src={pageImages.intakeHub}
          alt="TransGlobe fleet procurement and logistics gallery"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-[#0E0D0C]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 to-transparent" />

        <div className="relative h-full max-w-[1400px] mx-auto px-6 sm:px-10 flex flex-col justify-end pb-14 pt-24">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 mb-4 text-[10px] font-semibold tracking-[0.28em] uppercase text-[hsl(41_42%_56%)]">
              <span className="h-px w-8 bg-[hsl(41_42%_56%_/_0.6)]" />
              Gallery
            </span>
            <h1 className="font-heading text-white text-3xl sm:text-4xl md:text-[3.2rem] font-medium leading-[1.05] max-w-2xl">
              The world we operate in
            </h1>
            <p className="mt-4 text-white/65 text-sm md:text-base max-w-lg leading-relaxed">
              A visual introduction to the six asset categories we source,
              procure and move across the world.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══ 02 CATEGORY MASONRY ═══ */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <Reveal>
            <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[hsl(41_42%_56%)]">
              Browse by Category
            </span>
            <h2 className="mt-4 font-heading text-3xl md:text-[2.4rem] font-medium text-foreground leading-[1.1] max-w-lg">
              Six asset classes
            </h2>
          </Reveal>
          <div className="mt-12">
            <GalleryMasonry />
          </div>
        </div>
      </section>

      {/* ═══ 03 BEHIND THE OPERATION ═══ */}
      <section className="py-20 md:py-28 bg-card border-t border-[hsl(38_16%_16%)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <Reveal>
            <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[hsl(41_42%_56%)]">
              Behind the Operation
            </span>
            <h2 className="mt-4 font-heading text-3xl md:text-[2.4rem] font-medium text-foreground leading-[1.1] max-w-lg">
              How the process looks
            </h2>
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-[hsl(38_16%_20%)]">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 p-6">
                    <h4 className="font-heading text-lg font-medium text-white leading-snug">
                      {p.title}
                    </h4>
                    <p className="mt-2 text-[13px] text-white/60 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 04 FINAL CTA ═══ */}
      <section className="py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-6 sm:px-10 text-center">
          <Reveal>
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-foreground leading-[1.15]">
              See your asset category in detail
            </h2>
            <p className="mt-4 text-muted-foreground text-sm md:text-base leading-relaxed">
              Browse live listings, specifications and procurement
              availability across all six categories.
            </p>
            <Link
              href="/cars-suvs"
              className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[hsl(41_42%_56%)] text-[hsl(30_10%_8%)] text-sm font-semibold hover:bg-[hsl(41_42%_64%)] transition-colors"
            >
              Explore Fleet Listings
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}