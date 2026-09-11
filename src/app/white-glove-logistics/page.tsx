import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Package, ShieldCheck, Ship, Plane, Container, FileCheck, Globe2 } from 'lucide-react'
import { serviceTracks, categories, pageImages } from '../../lib/site-data'
import { shippingSteps } from '../../lib/journey-data'
import ServiceJourney from '../../components/ServiceJourney'
import FaqAccordion from '../../components/FaqAccordion'
import Reveal from '../../components/Reveal'

export const metadata: Metadata = {
  title: 'Standalone White-Glove Logistics & Shipping',
  description:
    'You own the asset — we move it. Containerization, RoRo, air freight, marine insurance, customs clearance and last-mile delivery, handled with surgical precision.',
}

const whyCards = [
  { n: '01', title: 'Collector-Grade Care', description: "Every asset is handled with the same precision whether it's a single vehicle or a full fleet." },
  { n: '02', title: 'Multi-Modal Freight', description: 'Container, RoRo, breakbulk or air — we select the method that fits your asset and timeline.' },
  { n: '03', title: 'End-to-End Customs', description: 'Origin export and destination clearance coordinated under one mandate — no gaps in accountability.' },
  { n: '04', title: 'Marine Insurance', description: 'Coverage placed with A-rated underwriters appropriate to the asset value and route.' },
]

const included = [
  'Pickup coordination and pre-shipment preparation',
  'Export documentation and customs declaration',
  'Freight method selection (container, RoRo, breakbulk, or air)',
  'Marine insurance placement coordination',
  'Real-time shipment coordination across the route',
  'Destination customs clearance',
  'Final door-to-door delivery',
]

const freightMethods = [
  { icon: Container, title: 'Containerization', desc: 'Secure loading, bracing and lashing for high-value assets in sealed containers.' },
  { icon: Ship, title: 'RoRo & Breakbulk', desc: 'Drive-on/drive-off for self-propelled vehicles and machinery.' },
  { icon: Plane, title: 'Air Freight', desc: 'Expedited charter and consolidated air freight for time-critical moves.' },
  { icon: ShieldCheck, title: 'Marine Insurance', desc: 'All-risk coverage coordination placed with A-rated underwriters.' },
]

const faqs = [
  { question: 'Do I need to own the asset already to use this service?', answer: 'Yes — standalone shipping is for assets you already own. If you need us to source and acquire an asset first, our Full-Cycle Turnkey Procurement service covers that instead.' },
  { question: 'How long does shipping typically take?', answer: 'Transit time depends on the route, freight method and customs processing at both ends — sea freight routes commonly range from a few weeks to over a month, while air freight is significantly faster. We provide a route-specific estimate once we understand your requirements.' },
  { question: 'Which freight method is right for my asset?', answer: 'It depends on the asset type, value, timeline and budget. Self-propelled vehicles often suit RoRo; high-value or delicate assets suit sealed containers; time-critical shipments may warrant air freight. We recommend the appropriate method after reviewing your brief.' },
  { question: 'Is insurance included?', answer: 'We coordinate marine insurance placement with A-rated underwriters as part of the service — coverage terms and cost depend on the asset value and route, and are confirmed before shipment.' },
  { question: 'How does customs clearance work?', answer: 'We handle export documentation and customs declaration at origin, and coordinate clearance procedures at the destination — including HS coding and duty structuring where applicable — so you are not navigating multiple jurisdictions alone.' },
  { question: 'Can you ship multiple assets together as a fleet?', answer: 'Yes. We coordinate consolidated shipments for multiple assets where route and timing allow, which can improve efficiency for fleet-scale movements.' },
]

export default function WhiteGloveLogisticsPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* ═══ 01 HERO — full-bleed, dramatic type ═══ */}
      <section className="relative h-[86svh] min-h-[600px] overflow-hidden -mt-16">
        <Image
          src={serviceTracks[1].image}
          alt="Standalone white-glove logistics and shipping operations"
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
              Port-to-Port · Door-to-Door
            </span>
            <h1 className="font-heading text-white text-[2.6rem] sm:text-[4rem] md:text-[5.2rem] lg:text-[6rem] font-medium leading-[0.98] tracking-tight max-w-5xl">
              White-Glove
              <br />
              Logistics
            </h1>
            <p className="mt-7 text-white/65 text-base md:text-lg max-w-md leading-relaxed">
              You own the asset — we move it, with surgical precision, to
              any port or door in the world.
            </p>
            <Link
              href="/intake-hub?service=standalone-logistics"
              className="mt-9 inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[hsl(41_42%_56%)] text-[hsl(30_10%_8%)] text-sm font-semibold tracking-wide hover:bg-[hsl(41_42%_64%)] transition-colors"
            >
              Request Shipping
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
              You own it.
              <br />
              We move it — anywhere.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              If you already own a vehicle, machine, vessel or fleet and need
              it relocated internationally, our standalone logistics service
              manages the full transit — from pickup through customs to
              final delivery — without requiring any procurement involvement.
            </p>

            <div className="mt-12 grid sm:grid-cols-3 gap-8">
              {[
                { icon: Package, label: 'Pickup & Prep', desc: 'Coordinated collection and pre-shipment preparation.' },
                { icon: Ship, label: 'Multi-Modal Freight', desc: 'Container, RoRo, breakbulk or air — matched to you.' },
                { icon: FileCheck, label: 'Customs Handled', desc: 'Export and destination clearance under one mandate.' },
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
              Why Standalone Shipping
            </span>
            <h2 className="mt-4 font-heading text-3xl md:text-[2.4rem] font-medium text-foreground leading-[1.1] max-w-lg">
              Precision, without the procurement
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
              The shipping journey
            </h2>
          </Reveal>
          <div className="mt-16">
            <ServiceJourney
              steps={shippingSteps}
              cta={{ label: 'Request Shipping', href: '/intake-hub?service=standalone-logistics' }}
            />
          </div>
        </div>
      </section>

      {/* ═══ 05 WHAT'S INCLUDED — numbered list, editorial ═══ */}
           {/* ═══ 05 WHAT'S INCLUDED — zigzag wire-connected flow ═══ */}
      <section className="py-24 md:py-36 border-t border-[hsl(38_16%_16%)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <Reveal>
            <div className="text-center max-w-lg mx-auto">
              <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[hsl(41_42%_56%)]">
                What&apos;s Included
              </span>
              <h2 className="mt-4 font-heading text-3xl md:text-[2.4rem] font-medium text-foreground leading-[1.1]">
                Every stage covered
              </h2>
            </div>
          </Reveal>

          {/* ── Zigzag wire connector ── */}
          <div className="relative mt-20 max-w-3xl mx-auto">
            {/* Center wire — desktop only */}
            <div
              className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px"
              style={{
                background:
                  'repeating-linear-gradient(to bottom, hsl(41 42% 56% / 0.35) 0, hsl(41 42% 56% / 0.35) 4px, transparent 4px, transparent 10px)',
              }}
            />
            {/* Left wire — mobile only */}
            <div
              className="md:hidden absolute top-0 bottom-0 left-[15px] w-px"
              style={{
                background:
                  'repeating-linear-gradient(to bottom, hsl(41 42% 56% / 0.35) 0, hsl(41 42% 56% / 0.35) 4px, transparent 4px, transparent 10px)',
              }}
            />

            <div className="space-y-4 md:space-y-2">
              {included.map((item, i) => {
                const isLeft = i % 2 === 0
                return (
                  <Reveal key={item} delay={i * 0.06}>
                    <div
                      className={`relative flex items-center gap-5 md:gap-0 pl-10 md:pl-0 ${
                        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                      }`}
                    >
                      {/* Node dot */}
                      <span className="absolute left-[9px] md:left-1/2 md:-translate-x-1/2 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[hsl(41_42%_56%)] ring-4 ring-[#0E0D0C] z-10" />

                      {/* Content card */}
                      <div
                        className={`md:w-[46%] py-5 px-6 rounded-xl bg-card border border-[hsl(38_16%_20%)] ${
                          isLeft ? 'md:text-right md:mr-auto' : 'md:text-left md:ml-auto'
                        }`}
                      >
                        <span className="font-body text-[11px] text-[hsl(41_42%_56%)] tracking-widest">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <p className="mt-1.5 text-[14px] md:text-[15px] text-foreground/85 leading-relaxed">
                          {item}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      {/* ═══ 06 FREIGHT METHODS ═══ */}
      <section className="py-24 md:py-36 bg-card border-t border-[hsl(38_16%_16%)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <Reveal>
            <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[hsl(41_42%_56%)]">
              Freight Methods
            </span>
            <h2 className="mt-4 font-heading text-3xl md:text-[2.4rem] font-medium text-foreground leading-[1.1] max-w-lg">
              Matched to your asset
            </h2>
          </Reveal>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[hsl(38_16%_16%)]">
            {freightMethods.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="bg-card p-8 h-full">
                  <f.icon className="w-6 h-6 text-[hsl(41_42%_56%)] mb-5" strokeWidth={1.25} />
                  <h4 className="text-[15px] font-semibold text-foreground">{f.title}</h4>
                  <p className="mt-2.5 text-[13px] text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CUSTOMS CLEARANCE — full-bleed image split, anchor for popup ═══ */}
      <section id="customs" className="py-24 md:py-36 border-t border-[hsl(38_16%_16%)] scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 grid lg:grid-cols-2 gap-0 lg:gap-0 items-stretch rounded-sm overflow-hidden">
          <Reveal className="bg-card p-10 md:p-16 flex flex-col justify-center">
            <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[hsl(41_42%_56%)]">
              Customs Clearance
            </span>
            <h2 className="mt-4 font-heading text-2xl md:text-[2.2rem] font-medium text-foreground leading-[1.15]">
              Dubai-origin customs,
              <br />
              handled end to end
            </h2>
            <p className="mt-5 text-muted-foreground text-sm md:text-base leading-relaxed max-w-md">
              Every shipment we coordinate includes customs handling at both
              ends of the route — HS coding, duty structuring and destination
              clearance — so your asset moves without unnecessary delay.
            </p>
            <div className="mt-8 space-y-4">
              {[
                'Export customs declaration at origin',
                'HS code classification and duty structuring',
                'Destination clearance coordination',
                'Documentation review to prevent hold-ups',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <FileCheck className="w-4 h-4 text-[hsl(41_42%_56%)] shrink-0 mt-0.5" strokeWidth={1.25} />
                  <span className="text-sm text-foreground/85">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative min-h-[320px] lg:min-h-0">
            <Image
              src={categories[3].image}
              alt="Customs clearance and destination processing"
              fill
              loading="lazy"
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:bg-gradient-to-l" />
          </Reveal>
        </div>
      </section>

      {/* ═══ 07 GLOBAL REACH ═══ */}
      <section className="py-24 md:py-36 bg-card border-t border-[hsl(38_16%_16%)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <Reveal>
            <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[hsl(41_42%_56%)]">
              Global Reach
            </span>
            <h2 className="mt-4 font-heading text-3xl md:text-[2.4rem] font-medium text-foreground leading-[1.1] max-w-lg">
              Shipping across major trade corridors
            </h2>
          </Reveal>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4">
            {[
              { region: 'Asia-Pacific', desc: 'Major ports across Japan, South Korea and Southeast Asia' },
              { region: 'Europe', desc: 'Western and Northern European shipping routes' },
              { region: 'Middle East', desc: 'Dubai operational hub and regional distribution' },
              { region: 'Americas', desc: 'North American ports and inland delivery' },
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
      <section className="py-24 md:py-36 border-t border-[hsl(38_16%_16%)]">
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
          src={pageImages.globalFreight}
          alt="Global shipping and freight delivery"
          fill
          loading="lazy"
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/78" />
        <div className="relative max-w-3xl mx-auto px-6 sm:px-10 text-center">
          <Reveal>
            <h2 className="font-heading text-3xl md:text-[3rem] font-medium text-white leading-[1.1] tracking-tight">
              Ready to move
              <br />
              your asset?
            </h2>
            <p className="mt-6 text-white/60 text-base leading-relaxed max-w-md mx-auto">
              Tell us the asset and the route. We respond within 48 hours
              with a tailored freight and customs protocol.
            </p>
            <Link
              href="/intake-hub?service=standalone-logistics"
              className="mt-10 inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[hsl(41_42%_56%)] text-[hsl(30_10%_8%)] text-sm font-semibold tracking-wide hover:bg-[hsl(41_42%_64%)] transition-colors"
            >
              Request Shipping
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}