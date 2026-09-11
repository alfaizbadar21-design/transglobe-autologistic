import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { pageImages } from '@/lib/site-data'
import { procurementSteps, shippingSteps } from '@/lib/journey-data'
import ServiceJourney from '@/components/ServiceJourney'
import JourneyOverviewSplit from '@/components/JourneyOverviewSplit'
import TimelineBars from '@/components/TimelineBars'
import WhatYouGetGrid from '@/components/WhatYouGetGrid'
import FaqAccordion from '@/components/FaqAccordion'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'How It Works',
  description:
    'The full procurement and logistics process — from first brief to final delivery, for both turnkey procurement and standalone shipping.',
}

const faqs = [
  { question: 'How do I know which path applies to me?', answer: "If you need us to find and acquire the asset, that's Full-Cycle Procurement. If you already own the asset and just need it moved, that's Standalone Shipping. If you're unsure, tell us in your intake brief and we'll confirm the right path." },
  { question: 'What if my needs span both procurement and shipping?', answer: 'Some mandates involve both — for example, sourcing one asset while also shipping one you already own. We coordinate both under a single desk when needed.' },
  { question: 'How will I be kept updated during the process?', answer: 'You receive updates at each major stage — sourcing or pickup, inspection or export, freight transit, and destination clearance — through your dedicated concierge contact.' },
  { question: 'What happens if a delay occurs?', answer: 'Delays can occur due to factors outside our control, such as customs processing or carrier scheduling. When they do, we communicate the cause and revised timeline as soon as we are aware.' },
  { question: 'Can I switch from standalone shipping to full procurement mid-process?', answer: "Yes — if your requirements change, tell your concierge contact and we'll adjust the mandate accordingly." },
]

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* ═══ 01 HERO ═══ */}
      <section className="relative h-[70svh] min-h-[520px] overflow-hidden -mt-16">
        <Image
          src={pageImages.howItWorks}
          alt="TransGlobe procurement and logistics process"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#0E0D0C]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent" />

        <div className="relative h-full max-w-[1400px] mx-auto px-6 sm:px-10 flex flex-col justify-end pb-16 pt-28">
          <Reveal>
            <span className="inline-flex items-center gap-3 mb-6 text-[10px] font-semibold tracking-[0.32em] uppercase text-[hsl(41_42%_56%)]">
              <span className="h-px w-10 bg-[hsl(41_42%_56%_/_0.6)]" />
              The Full Protocol
            </span>
            <h1 className="font-heading text-white text-[2.4rem] sm:text-[3.4rem] md:text-[4.4rem] font-medium leading-[0.98] tracking-tight max-w-4xl">
              How It Works
            </h1>
            <p className="mt-6 text-white/65 text-base md:text-lg max-w-md leading-relaxed">
              Every mandate follows a coordinated, transparent process —
              here is exactly what happens, step by step.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══ 02 OVERVIEW — two paths ═══ */}
      <JourneyOverviewSplit />

      {/* ═══ 03 PROCUREMENT JOURNEY ═══ */}
      <section className="py-24 md:py-32 bg-card border-t border-[hsl(38_16%_16%)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <Reveal>
            <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[hsl(41_42%_56%)]">
              Path One
            </span>
            <h2 className="mt-4 font-heading text-3xl md:text-[2.4rem] font-medium text-foreground leading-[1.1] max-w-lg">
              Full-Cycle Procurement
            </h2>
            <p className="mt-4 text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl">
              From first brief to final delivery — six coordinated stages.
            </p>
          </Reveal>
          <div className="mt-14">
            <ServiceJourney
              steps={procurementSteps}
              cta={{ label: 'Start Your Procurement Request', href: '/intake-hub?service=turnkey-procurement' }}
            />
          </div>
        </div>
      </section>

      {/* ═══ 04 SHIPPING JOURNEY ═══ */}
      <section className="py-24 md:py-32 border-t border-[hsl(38_16%_16%)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <Reveal>
            <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[hsl(41_42%_56%)]">
              Path Two
            </span>
            <h2 className="mt-4 font-heading text-3xl md:text-[2.4rem] font-medium text-foreground leading-[1.1] max-w-lg">
              Standalone Shipping
            </h2>
            <p className="mt-4 text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl">
              You own the asset — six coordinated stages move it anywhere.
            </p>
          </Reveal>
          <div className="mt-14">
            <ServiceJourney
              steps={shippingSteps}
              cta={{ label: 'Request Shipping', href: '/intake-hub?service=standalone-logistics' }}
            />
          </div>
        </div>
      </section>

      {/* ═══ 05 TIMELINE EXPECTATIONS ═══ */}
      <section className="py-24 md:py-32 bg-card border-t border-[hsl(38_16%_16%)]">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-10">
          <Reveal>
            <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[hsl(41_42%_56%)]">
              Timeline Expectations
            </span>
            <h2 className="mt-4 font-heading text-3xl md:text-[2.2rem] font-medium text-foreground leading-[1.1] max-w-lg">
              How long does it typically take?
            </h2>
          </Reveal>
          <div className="mt-14">
            <TimelineBars />
          </div>
        </div>
      </section>

      {/* ═══ 06 WHAT YOU GET ═══ */}
      <section className="py-24 md:py-32 border-t border-[hsl(38_16%_16%)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <Reveal>
            <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[hsl(41_42%_56%)]">
              What You Get
            </span>
            <h2 className="mt-4 font-heading text-3xl md:text-[2.2rem] font-medium text-foreground leading-[1.1] max-w-lg">
              Transparency at every stage
            </h2>
          </Reveal>
          <div className="mt-14">
            <WhatYouGetGrid />
          </div>
        </div>
      </section>

      {/* ═══ 07 FAQ ═══ */}
      <section className="py-24 md:py-32 bg-card border-t border-[hsl(38_16%_16%)]">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <Reveal>
            <div className="text-center">
              <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[hsl(41_42%_56%)]">
                FAQ
              </span>
              <h2 className="mt-4 font-heading text-3xl md:text-[2.2rem] font-medium text-foreground leading-[1.1]">
                Common questions
              </h2>
            </div>
          </Reveal>
          <div className="mt-14">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* ═══ 08 FINAL CTA ═══ */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <Image
          src={pageImages.intakeHub}
          alt="Begin your procurement or logistics mandate"
          fill
          loading="lazy"
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative max-w-3xl mx-auto px-6 sm:px-10 text-center">
          <Reveal>
            <h2 className="font-heading text-3xl md:text-[2.8rem] font-medium text-white leading-[1.1] tracking-tight">
              Ready to begin?
            </h2>
            <p className="mt-6 text-white/60 text-base leading-relaxed max-w-md mx-auto">
              Tell us your asset and destination. We&apos;ll confirm the
              right path and respond within 48 hours.
            </p>
            <Link
              href="/intake-hub"
              className="mt-9 inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[hsl(41_42%_56%)] text-[hsl(30_10%_8%)] text-sm font-semibold tracking-wide hover:bg-[hsl(41_42%_64%)] transition-colors"
            >
              Begin a Briefing
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}