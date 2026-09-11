import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Ship, Plane, Container, Package, Globe2 } from 'lucide-react'
import { pageImages, categories, serviceTracks } from '../../lib/site-data'
import FaqAccordion from '../../components/FaqAccordion'
import Reveal from '../../components/Reveal'
import FreightModeSwitcher from '../../components/FreightModeSwitcher'

export const metadata: Metadata = {
  title: 'Global Freight & Shipping',
  description:
    'Container, RoRo, breakbulk and air freight engineered across trade corridors — from our Dubai operational hub to the world.',
}

const whyCards = [
  { n: '01', title: 'Multi-Modal Capability', description: 'Sea, air, RoRo and breakbulk — the right mode selected for every asset and timeline.' },
  { n: '02', title: 'Dubai Operational Hub', description: 'Centrally positioned for Asia, Europe, Africa and the Americas trade corridors.' },
  { n: '03', title: 'Asset-Class Expertise', description: 'From single vehicles to heavy machinery and marine craft — freight engineered per category.' },
  { n: '04', title: 'One Coordinated Route', description: 'Origin handling, transit and destination clearance under a single accountable mandate.' },
]

const corridors = [
  { from: 'Asia-Pacific', to: 'Middle East', modes: ['Sea', 'Air'], desc: 'Japan, South Korea and Southeast Asia manufacturing hubs into the Gulf.' },
  { from: 'Europe', to: 'Middle East', modes: ['Sea', 'RoRo'], desc: 'Western and Northern European origins routed through Mediterranean and Gulf ports.' },
  { from: 'Americas', to: 'Middle East', modes: ['Sea', 'Air'], desc: 'North American manufacturers and specialist sellers into regional distribution.' },
  { from: 'Middle East', to: 'Africa', modes: ['Sea', 'RoRo'], desc: 'Dubai hub outbound into East and Southern African markets.' },
]

const stats = [
  { k: '6', v: 'Asset classes moved' },
  { k: '4', v: 'Freight modes engineered' },
  { k: '48h', v: 'Avg. concierge response' },
  { k: '100%', v: 'Door-to-door accountability' },
]

const faqs = [
  { question: 'Which freight mode is right for my shipment?', answer: 'It depends on asset type, value, timeline and origin/destination ports. Self-propelled vehicles often suit RoRo; high-value or delicate assets suit sealed containers; time-critical cargo may warrant air freight. We recommend the appropriate mode after reviewing your brief.' },
  { question: 'Do you handle full container loads and consolidated shipments?', answer: 'Yes. We coordinate both dedicated container loads and consolidated shipments where route and timing allow, matched to the asset volume and urgency.' },
  { question: 'What is included in freight coordination?', answer: 'Freight method selection, booking, origin handling, transit coordination, and destination arrival coordination — customs and final delivery are covered under our broader logistics service.' },
  { question: 'Can you move oversized or heavy machinery?', answer: 'Yes — breakbulk and RoRo methods are engineered specifically for oversized cargo such as construction equipment, industrial machinery and commercial vehicles.' },
  { question: 'Is marine insurance included in freight coordination?', answer: 'We coordinate marine insurance placement as part of the broader shipping mandate — terms and cost depend on the asset value and route.' },
  { question: 'How far in advance should I book freight?', answer: 'Lead times vary by mode and route availability — sea freight generally requires more advance booking than air freight. We advise on realistic timing once we understand your shipment.' },
]

export default function GlobalFreightPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* ═══ 01 HERO ═══ */}
      <section className="relative h-[86svh] min-h-[600px] overflow-hidden -mt-4">
        <Image
          src={pageImages.globalFreight}
          alt="Global freight and shipping operations"
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
              Sea · Air · RoRo · Breakbulk
            </span>
            <h1 className="font-heading text-white text-[2.6rem] sm:text-[4rem] md:text-[5.2rem] lg:text-[6rem] font-medium leading-[0.98] tracking-tight max-w-5xl">
              Global Freight
              <br />
              &amp; Shipping
            </h1>
            <p className="mt-7 text-white/65 text-base md:text-lg max-w-md leading-relaxed">
              Freight engineered across every mode and every trade corridor —
              from our Dubai operational hub to the world.
            </p>
            <Link
              href="/intake-hub?service=global-freight"
              className="mt-9 inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[hsl(41_42%_56%)] text-[hsl(30_10%_8%)] text-sm font-semibold tracking-wide hover:bg-[hsl(41_42%_64%)] transition-colors"
            >
              Request Freight Coordination
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ═══ 02 OVERVIEW ═══ */}
      <section className="py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-24 items-start">
          <Reveal>
            <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[hsl(41_42%_56%)]">
              Overview
            </span>
            <h2 className="mt-5 font-heading text-3xl md:text-[2.6rem] font-medium text-foreground leading-[1.08] tracking-tight">
              Every mode.
              <br />
              Every corridor.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              From single vehicles to heavy machinery and marine craft, we
              engineer the freight solution to fit the asset — not the other
              way around. Sea, air, RoRo and breakbulk, selected and
              coordinated from our Dubai operational hub across major
              global trade corridors.
            </p>

            <div className="mt-12 grid sm:grid-cols-3 gap-8">
              {[
                { icon: Ship, label: 'Sea & RoRo', desc: 'Container and drive-on/drive-off freight.' },
                { icon: Plane, label: 'Air Freight', desc: 'Expedited charter and consolidated air.' },
                { icon: Container, label: 'Breakbulk', desc: 'Oversized and heavy cargo, engineered.' },
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

      {/* ═══ 03 FREIGHT MODES — interactive switcher ═══ */}
      <section className="py-24 md:py-36 bg-card border-t border-[hsl(38_16%_16%)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <Reveal>
            <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[hsl(41_42%_56%)]">
              Freight Modes
            </span>
            <h2 className="mt-4 font-heading text-3xl md:text-[2.4rem] font-medium text-foreground leading-[1.1] max-w-lg">
              Engineered to the asset
            </h2>
          </Reveal>
          <div className="mt-14">
            <FreightModeSwitcher />
          </div>
        </div>
      </section>

      {/* ═══ 04 TRADE CORRIDORS — route cards ═══ */}
      <section className="py-24 md:py-36 border-t border-[hsl(38_16%_16%)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <Reveal>
            <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[hsl(41_42%_56%)]">
              Trade Corridors
            </span>
            <h2 className="mt-4 font-heading text-3xl md:text-[2.4rem] font-medium text-foreground leading-[1.1] max-w-lg">
              Routes we engineer
            </h2>
          </Reveal>

          <div className="mt-14 space-y-3">
            {corridors.map((c, i) => (
              <Reveal key={`${c.from}-${c.to}`} delay={i * 0.06}>
                <div className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 p-6 rounded-xl bg-card border border-[hsl(38_16%_20%)] hover:border-[hsl(41_42%_56%_/_0.35)] transition-colors">
                  <div className="flex items-center gap-4 sm:w-[340px] shrink-0">
                    <span className="font-heading text-base font-medium text-foreground">{c.from}</span>
                    <ArrowRight className="w-4 h-4 text-[hsl(41_42%_56%)] shrink-0" />
                    <span className="font-heading text-base font-medium text-foreground">{c.to}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{c.desc}</p>
                  <div className="flex gap-2 shrink-0">
                    {c.modes.map((m) => (
                      <span
                        key={m}
                        className="px-2.5 py-1 rounded-full bg-[hsl(41_42%_56%_/_0.1)] border border-[hsl(41_42%_56%_/_0.25)] text-[10px] font-semibold tracking-wide uppercase text-[hsl(41_42%_56%)]"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 05 WHY GLOBAL FREIGHT — numerals grid ═══ */}
      <section className="py-24 md:py-36 bg-card border-t border-[hsl(38_16%_16%)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <Reveal>
            <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[hsl(41_42%_56%)]">
              Why Global Freight
            </span>
            <h2 className="mt-4 font-heading text-3xl md:text-[2.4rem] font-medium text-foreground leading-[1.1] max-w-lg">
              Built for scale, engineered for precision
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

      {/* ═══ 06 CAPABILITY STATS ═══ */}
      <section className="py-24 md:py-36 border-t border-[hsl(38_16%_16%)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[hsl(38_16%_18%)] border border-[hsl(38_16%_18%)] rounded-2xl overflow-hidden">
            {stats.map((s, i) => (
              <Reveal key={s.v} delay={i * 0.06}>
                <div className="bg-card px-6 py-10 text-center h-full flex flex-col justify-center">
                  <div className="font-heading text-3xl md:text-4xl font-medium text-foreground chrome-text">
                    {s.k}
                  </div>
                  <div className="mt-2 text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
                    {s.v}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 07 FAQ ═══ */}
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

      {/* ═══ 08 FINAL CTA — full-bleed image band ═══ */}
      <section className="relative py-28 md:py-40 overflow-hidden">
        <Image
          src={serviceTracks[1].image}
          alt="Global freight delivery to destination"
          fill
          loading="lazy"
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/78" />
        <div className="relative max-w-3xl mx-auto px-6 sm:px-10 text-center">
          <Reveal>
            <h2 className="font-heading text-3xl md:text-[3rem] font-medium text-white leading-[1.1] tracking-tight">
              Ready to engineer
              <br />
              your route?
            </h2>
            <p className="mt-6 text-white/60 text-base leading-relaxed max-w-md mx-auto">
              Tell us the asset, origin and destination. We respond within
              48 hours with a tailored freight protocol.
            </p>
            <Link
              href="/intake-hub?service=global-freight"
              className="mt-10 inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[hsl(41_42%_56%)] text-[hsl(30_10%_8%)] text-sm font-semibold tracking-wide hover:bg-[hsl(41_42%_64%)] transition-colors"
            >
              Request Freight Coordination
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}