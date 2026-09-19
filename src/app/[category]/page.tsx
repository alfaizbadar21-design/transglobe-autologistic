import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { categories } from '@/lib/site-data'
import { categoryShowcaseContent } from '@/lib/category-showcase-data'
import type { CategorySlug } from '@/lib/listings-data'
import CuratedExamplesCarousel from '@/components/CuratedExamplesCarousel'
import CategoryIntakeForm from '@/components/CategoryIntakeForm'
import Reveal from '@/components/Reveal'

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

  const content = categoryShowcaseContent[category as CategorySlug]

  return (
    <div className="min-h-screen bg-background">

      {/* ═══ HERO ═══ */}
      <section className="relative h-[56vh] min-h-[440px] overflow-hidden -mt-16">
        <Image
          src={cat.image}
          alt={cat.title}
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
              {content.eyebrow}
            </span>
            <h1 className="font-heading text-white text-3xl sm:text-4xl md:text-[3.2rem] font-medium leading-[1.05] max-w-2xl">
              {cat.title}
            </h1>
            <p className="mt-4 text-white/65 text-sm md:text-base max-w-xl leading-relaxed">
              {content.pitch}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══ OVERVIEW + WHAT WE COORDINATE ═══ */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-24 items-start">
          <Reveal>
            <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[hsl(41_42%_56%)]">
              Curated Acquisition
            </span>
            <h2 className="mt-4 font-heading text-2xl md:text-[2rem] font-medium text-foreground leading-[1.15]">
              {content.desk}
            </h2>
            <p className="mt-5 text-muted-foreground text-sm md:text-base leading-relaxed">
              {content.pitch}
            </p>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              Each example below is representative of the assets our
              syndicate sources, inspects, and ships worldwide. If the
              exact specification you require is not listed, our
              procurement desk will locate it on your behalf — and
              deliver it to your door, turnkey.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/turnkey-procurement"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[hsl(41_42%_56%)] text-[hsl(30_10%_8%)] text-sm font-semibold hover:bg-[hsl(41_42%_64%)] transition-colors"
              >
                Request turnkey sourcing
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/white-glove-logistics"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[hsl(38_16%_22%)] text-foreground text-sm font-medium hover:bg-card transition-colors"
              >
                Ship an asset I own
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="p-7 rounded-2xl bg-card border border-[hsl(38_16%_22%)]">
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[hsl(41_42%_56%)]">
                What This Desk Coordinates
              </span>
              <div className="mt-5 space-y-3.5">
                {content.coordinates.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-[hsl(41_42%_56%)] shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span className="text-sm text-foreground/85 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ CURATED EXAMPLES ═══ */}
      <section className="py-20 md:py-28 bg-card border-t border-[hsl(38_16%_16%)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <Reveal>
            <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[hsl(41_42%_56%)]">
              Curated Examples
            </span>
            <h2 className="mt-4 font-heading text-2xl md:text-3xl font-medium text-foreground">
              {content.examples.length} representative assets
            </h2>
            <p className="mt-3 text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl">
              A selection of specifications our syndicate has sourced or
              can procure on mandate. Use the intake form below to specify
              your exact requirement.
            </p>
          </Reveal>
          <div className="mt-10">
            <CuratedExamplesCarousel examples={content.examples} />
          </div>
        </div>
      </section>

      {/* ═══ TAILORED INTAKE FORM ═══ */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-16">
          <Reveal>
            <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[hsl(41_42%_56%)]">
              Tailored Intake · {content.eyebrow}
            </span>
            <h2 className="mt-4 font-heading text-2xl md:text-3xl font-medium text-foreground leading-[1.15]">
              Request your {cat.title.toLowerCase()} brief
            </h2>
            <p className="mt-4 text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl">
              Specify the exact asset, condition, and destination. Our
              desk responds within one business day with sourcing
              options and a transit protocol.
            </p>

            <div className="mt-10 p-7 rounded-2xl bg-card border border-[hsl(38_16%_22%)]">
              <h3 className="font-heading text-lg font-medium text-foreground mb-1">
                Acquire or ship {cat.title.toLowerCase()}
              </h3>
              <p className="text-xs text-muted-foreground mb-6">
                Complete the brief below. Fields marked * are required.
              </p>
              <CategoryIntakeForm categoryLabel={cat.title} />
            </div>
          </Reveal>

                    <Reveal delay={0.1}>
            <div className="space-y-6 lg:sticky lg:top-28">

              {/* What happens next */}
              <div className="p-7 rounded-2xl bg-card border border-[hsl(38_16%_22%)]">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[hsl(41_42%_56%)]">
                    Concierge Desk Active
                  </span>
                </div>
                <h3 className="font-heading text-lg font-medium text-foreground mb-5">
                  What happens next?
                </h3>
                <div className="space-y-4">
                  {[
                    { step: '01', title: 'Submit your brief', desc: 'Fill out the form with your asset and logistics requirements.' },
                    { step: '02', title: 'Concierge review', desc: 'Our team reviews your mandate and identifies sourcing channels.' },
                    { step: '03', title: '48h response', desc: 'You receive a tailored acquisition and transit protocol.' },
                    { step: '04', title: 'Mandate execution', desc: 'We execute end-to-end — sourcing, logistics, delivery.' },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <span className="shrink-0 font-body text-[11px] text-[hsl(41_42%_56%)] tracking-widest mt-0.5">
                        {item.step}
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-foreground">{item.title}</div>
                        <div className="mt-0.5 text-xs text-muted-foreground leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct contact */}
              <div className="p-7 rounded-2xl bg-card border border-[hsl(38_16%_22%)]">
                <h3 className="font-heading text-base font-medium text-foreground mb-4">
                  Prefer direct contact?
                </h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <span className="text-[hsl(41_42%_56%)]">✉</span>
                    concierge@transglobe.ae
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[hsl(41_42%_56%)]">◎</span>
                    Dubai, UAE — Worldwide Operations
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[hsl(41_42%_56%)]">◷</span>
                    Response within 48 business hours
                  </div>
                </div>
              </div>

              {/* Turnkey cross-link */}
              <div className="p-6 rounded-2xl bg-card border border-[hsl(38_16%_22%)]">
                <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[hsl(41_42%_56%)]">
                  Prefer the full turnkey journey?
                </span>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  We source, acquire, and deliver — one mandate, one
                  accountable partner.
                </p>
                <Link
                  href="/turnkey-procurement"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground/85 hover:text-[hsl(41_42%_56%)] transition-colors"
                >
                  Explore turnkey procurement
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}