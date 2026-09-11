import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Search, ClipboardCheck, Ship, Globe2 } from 'lucide-react'
import { serviceTracks, categories, pageImages } from '../../lib/site-data'
import { procurementSteps } from '../../lib/journey-data'
import ServiceJourney from '../../components/ServiceJourney'
import FaqAccordion from '../../components/FaqAccordion'
import Reveal from '../../components/Reveal'

export const metadata: Metadata = {
  title: 'Full-Cycle Turnkey Procurement',
  description:
    'We source the exact vehicle, machinery, or asset globally, manage acquisition and inspection, and deliver it to your door — one accountable mandate.',
}

const whyCards = [
  { n: '01', title: 'One Accountable Desk', description: 'A single point of contact manages sourcing, inspection, acquisition and logistics — no fragmented vendors.' },
  { n: '02', title: 'Global Market Access', description: 'Our sourcing network spans manufacturers, dealers and private sellers across major trade regions.' },
  { n: '03', title: 'Verified Condition', description: 'Every asset is inspected and documented before acquisition — no surprises at delivery.' },
  { n: '04', title: 'Door-to-Door Coordination', description: 'From origin sourcing to destination delivery, every stage is coordinated under one mandate.' },
]

const included = [
  'Global market sourcing across manufacturers and verified sellers',
  'Pre-acquisition inspection and condition verification',
  'Documentation review and title transfer coordination',
  'Export customs handling at origin',
  'International freight arrangement (sea, air, or RoRo)',
  'Destination customs clearance coordination',
  'Final door-to-door delivery',
]

const faqs = [
  { question: 'How long does a typical procurement mandate take?', answer: 'Timelines vary by asset type, origin market and destination — typically ranging from a few weeks for readily available assets to several months for rare or highly specified sourcing. We provide a tailored estimate after reviewing your brief.' },
  { question: 'How is pricing structured?', answer: 'Pricing depends on the asset, sourcing complexity and logistics route. We provide a detailed quote after understanding your requirements — there are no hidden fees once a protocol is agreed.' },
  { question: 'What inspection standards do you apply?', answer: 'We coordinate independent condition verification covering mechanical, structural and documentation checks appropriate to the asset category before any acquisition is finalized.' },
  { question: 'Can I request a specific make, model, or specification?', answer: 'Yes. Tell us the exact requirements — including regional spec, condition, and any customization — and we will source accordingly.' },
  { question: 'Do you handle both new and used assets?', answer: 'Yes, across all six asset categories. Availability and sourcing timelines vary depending on whether an asset is new or used.' },
  { question: 'What happens if the exact asset cannot be sourced?', answer: "We will communicate this transparently and propose the closest verified alternative, or continue sourcing until the right match is found — we don't misrepresent availability." },
]

export default function TurnkeyProcurementPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* ═══ 01 HERO — full-bleed, dramatic type ═══ */}
      <section className="relative h-[86svh] min-h-[600px] overflow-hidden -mt-16">
        <Image
          src={serviceTracks[0].image}
          alt="Full-cycle turnkey procurement operations"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-[#0E0D0C]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent" />

        <div className="relative h-full max-w-[1400px] mx-auto px-6 sm:px-10 flex flex-col justify-end pb-16 pt-28">
          <Reveal>
            <span className="inline-flex items-center gap-3 mb-6 text-[10px] font-semibold tracking-[0.32em] uppercase text-[hsl(41_42%_56%)]">
              <span className="h-px w-10 bg-[hsl(41_42%_56%_/_0.6)]" />
              Source · Acquire · Ship · Deliver
            </span>
            <h1 className="font-heading text-white text-[2.6rem] sm:text-[4rem] md:text-[5.2rem] lg:text-[6rem] font-medium leading-[0.98] tracking-tight max-w-5xl">
              Turnkey
              <br />
              Procurement
            </h1>
            <p className="mt-7 text-white/65 text-base md:text-lg max-w-md leading-relaxed">
              One mandate, one accountable partner — from first brief to
              final delivery, anywhere in the world.
            </p>
            <Link
              href="/intake-hub?service=turnkey-procurement"
              className="mt-9 inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[hsl(41_42%_56%)] text-[hsl(30_10%_8%)] text-sm font-semibold tracking-wide hover:bg-[hsl(41_42%_64%)] transition-colors"
            >
              Start Your Procurement Request
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ═══ 02 OVERVIEW — editorial split ═══ */}
      <section className="py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-24 items-start">
          <Reveal>
            <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[hsl(41_42%_56%)]">
              Overview
            </span>
            <h2 className="mt-5 font-heading text-3xl md:text-[2.6rem] font-medium text-foreground leading-[1.08] tracking-tight">
              One mandate.
              <br />
              Every stage handled.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Whether you need a single executive SUV or a fleet of heavy
              machinery, our turnkey procurement service manages the entire
              journey — from initial sourcing through final delivery — so
              you deal with one accountable desk, not a chain of vendors.
            </p>

            <div className="mt-12 grid sm:grid-cols-3 gap-8">
              {[
                { icon: Search, label: 'Global Sourcing', desc: 'Manufacturers, dealers and verified sellers worldwide.' },
                { icon: ClipboardCheck, label: 'Verified Condition', desc: 'Independent inspection before acquisition.' },
                { icon: Ship, label: 'Seamless Transit', desc: 'Freight and customs under one mandate.' },
              ].map((h) => (
                <div key={h.label}>
                  <h.icon className="w-5 h-5 text-[hsl(41_42%_56%)] mb-3" strokeWidth={1.25} />
                  <h4 className="text-sm font-semibold text-foreground">{h.label}</h4>
                  <p className="mt-1.5 text-[13px] text-muted-foreground leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ 03 WHY — large numerals, minimal chrome ═══ */}
      <section className="py-24 md:py-36 border-t border-[hsl(38_16%_16%)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <Reveal>
            <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[hsl(41_42%_56%)]">
              Why Turnkey Procurement
            </span>
            <h2 className="mt-4 font-heading text-3xl md:text-[2.4rem] font-medium text-foreground leading-[1.1] max-w-lg">
              Built for accountability
            </h2>
          </Reveal>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[hsl(38_16%_16%)]">
            {whyCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.08}>
                <div className="bg-[#0E0D0C] p-8 h-full">
                  <span className="font-heading text-4xl text-white/15 font-light">{card.n}</span>
                  <h4 className="mt-6 text-[15px] font-semibold text-foreground">{card.title}</h4>
                  <p className="mt-2.5 text-[13px] text-muted-foreground leading-relaxed">{card.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 04 HOW IT WORKS ═══ */}
      <section className="py-24 md:py-36 bg-card border-t border-[hsl(38_16%_16%)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <Reveal>
            <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[hsl(41_42%_56%)]">
              How It Works
            </span>
            <h2 className="mt-4 font-heading text-3xl md:text-[2.4rem] font-medium text-foreground leading-[1.1] max-w-lg">
              The procurement journey
            </h2>
          </Reveal>
          <div className="mt-16">
            <ServiceJourney
              steps={procurementSteps}
              cta={{ label: 'Start Your Procurement Request', href: '/intake-hub?service=turnkey-procurement' }}
            />
          </div>
        </div>
      </section>

      {/* ═══ 05 WHAT'S INCLUDED — numbered list, editorial ═══ */}
      <section className="py-24 md:py-36 border-t border-[hsl(38_16%_16%)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 grid lg:grid-cols-[0.8fr_1.2fr] gap-14 lg:gap-24">
          <Reveal>
            <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[hsl(41_42%_56%)]">
              What&apos;s Included
            </span>
            <h2 className="mt-4 font-heading text-3xl md:text-[2.4rem] font-medium text-foreground leading-[1.1]">
              Every stage covered
            </h2>
          </Reveal>

          <div>
            {included.map((item, i) => (
              <Reveal key={item} delay={i * 0.05}>
                <div className="flex items-baseline gap-6 py-5 border-b border-[hsl(38_16%_18%)] last:border-0">
                  <span className="font-body text-[13px] text-[hsl(41_42%_56%)] tracking-widest shrink-0 w-8">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[15px] text-foreground/85 leading-relaxed">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 06 ASSET CATEGORIES — full image break ═══ */}
      <section className="py-24 md:py-36 bg-card border-t border-[hsl(38_16%_16%)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <Reveal>
            <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[hsl(41_42%_56%)]">
              Asset Categories
            </span>
            <h2 className="mt-4 font-heading text-3xl md:text-[2.4rem] font-medium text-foreground leading-[1.1] max-w-lg">
              Sourced across six classes
            </h2>
          </Reveal>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 3) * 0.07}>
                <Link href={c.path} className="group relative flex flex-col overflow-hidden rounded-sm h-[340px]">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="relative mt-auto p-6">
                    <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[hsl(41_42%_56%)]">
                      {c.tag}
                    </span>
                    <h4 className="mt-2 font-heading text-lg font-medium text-white leading-snug">
                      {c.title}
                    </h4>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] text-white/70 group-hover:text-white transition-colors">
                      Explore
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 07 GLOBAL REACH ═══ */}
      <section className="py-24 md:py-36 border-t border-[hsl(38_16%_16%)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <Reveal>
            <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[hsl(41_42%_56%)]">
              Global Reach
            </span>
            <h2 className="mt-4 font-heading text-3xl md:text-[2.4rem] font-medium text-foreground leading-[1.1] max-w-lg">
              Sourcing across major trade regions
            </h2>
          </Reveal>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4">
            {[
              { region: 'Asia-Pacific', desc: 'Japan, South Korea, Southeast Asia manufacturing hubs' },
              { region: 'Europe', desc: 'Western and Northern European manufacturers' },
              { region: 'Middle East', desc: 'Regional distribution and Dubai operational hub' },
              { region: 'Americas', desc: 'North American manufacturers and specialist sellers' },
            ].map((r, i) => (
              <Reveal key={r.region} delay={i * 0.06}>
                <div className="pr-8 py-2">
                  <Globe2 className="w-5 h-5 text-[hsl(41_42%_56%)] mb-4" strokeWidth={1.25} />
                  <h4 className="font-heading text-base font-medium text-foreground">{r.region}</h4>
                  <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 08 FAQ ═══ */}
      <section className="py-24 md:py-36 bg-card border-t border-[hsl(38_16%_16%)]">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <Reveal>
            <div className="text-center">
              <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[hsl(41_42%_56%)]">
                FAQ
              </span>
              <h2 className="mt-4 font-heading text-3xl md:text-[2.4rem] font-medium text-foreground leading-[1.1]">
                Common questions
              </h2>
            </div>
          </Reveal>
          <div className="mt-14">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* ═══ 09 FINAL CTA — full-bleed image band ═══ */}
      <section className="relative py-28 md:py-40 overflow-hidden">
        <Image
          src={pageImages.howItWorks}
          alt="Global procurement and delivery"
          fill
          loading="lazy"
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/78" />
        <div className="relative max-w-3xl mx-auto px-6 sm:px-10 text-center">
          <Reveal>
            <h2 className="font-heading text-3xl md:text-[3rem] font-medium text-white leading-[1.1] tracking-tight">
              Ready to open a
              <br />
              procurement mandate?
            </h2>
            <p className="mt-6 text-white/60 text-base leading-relaxed max-w-md mx-auto">
              Tell us the asset and destination. We respond within 48 hours
              with a tailored acquisition and transit protocol.
            </p>
            <Link
              href="/intake-hub?service=turnkey-procurement"
              className="mt-10 inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[hsl(41_42%_56%)] text-[hsl(30_10%_8%)] text-sm font-semibold tracking-wide hover:bg-[hsl(41_42%_64%)] transition-colors"
            >
              Start Your Procurement Request
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}