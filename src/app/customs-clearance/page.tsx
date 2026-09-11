import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, FileCheck } from 'lucide-react'
import { categories, pageImages } from '@/lib/site-data'
import { customsSteps } from '@/lib/journey-data'
import CustomsProcessRail from '@/components/CustomsProcessRail'
import WhyItMattersGrid from '@/components/WhyItMattersGrid'
import FaqAccordion from '@/components/FaqAccordion'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Customs Clearance',
  description:
    'Dubai-origin export declaration, HS coding, duty structuring and destination customs clearance — coordinated end to end.',
}

const documentation = [
  'Commercial invoice and packing list',
  'Bill of lading or airway bill',
  'Certificate of origin where applicable',
  'HS classification and duty calculation sheet',
  'Import/export permits where required',
  'Destination-specific regulatory documentation',
]

const faqs = [
  { question: 'What is HS coding and why does it matter?', answer: 'HS (Harmonized System) codes classify goods for customs purposes worldwide. The correct code determines applicable duties, taxes and regulatory requirements — an incorrect classification can cause delays or unexpected costs.' },
  { question: 'Who is responsible for paying import duties?', answer: 'This depends on the shipping terms agreed for your mandate. We structure duty calculations in advance so there are no surprises, and clarify responsibility as part of the coordination process.' },
  { question: 'Can customs delays be avoided entirely?', answer: 'We cannot guarantee zero delays, as customs authorities retain discretion — but accurate documentation and classification prepared in advance significantly reduces the likelihood of hold-ups.' },
  { question: 'Do you handle restricted or regulated goods?', answer: 'Certain asset categories carry additional regulatory requirements. We assess this as part of your intake and advise on any special permits or documentation needed before shipment.' },
  { question: 'Is customs clearance available as a standalone service?', answer: 'Customs clearance is coordinated as part of both our Turnkey Procurement and Standalone Logistics mandates — it is not typically offered in isolation, since it depends on the shipment it belongs to.' },
]

export default function CustomsClearancePage() {
  return (
    <div className="min-h-screen bg-background">

      {/* ═══ 01 HERO ═══ */}
      <section className="relative h-[70svh] min-h-[520px] overflow-hidden -mt-16">
        <Image
          src={categories[3].image}
          alt="Customs clearance and destination processing"
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
              Origin to Destination
            </span>
            <h1 className="font-heading text-white text-[2.4rem] sm:text-[3.4rem] md:text-[4.4rem] font-medium leading-[0.98] tracking-tight max-w-4xl">
              Customs Clearance
            </h1>
            <p className="mt-6 text-white/65 text-base md:text-lg max-w-md leading-relaxed">
              Dubai-origin export declaration, HS coding, duty structuring
              and destination clearance - handled so your shipment moves
              without unnecessary delay.
            </p>
            <Link
              href="/intake-hub?service=customs-clearance"
              className="mt-8 inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[hsl(41_42%_56%)] text-[hsl(30_10%_8%)] text-sm font-semibold tracking-wide hover:bg-[hsl(41_42%_64%)] transition-colors"
            >
              Ask About Customs Handling
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ═══ 02 OVERVIEW ═══ */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-24 items-start">
          <Reveal>
            <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[hsl(41_42%_56%)]">
              Overview
            </span>
            <h2 className="mt-5 font-heading text-3xl md:text-[2.4rem] font-medium text-foreground leading-[1.08] tracking-tight">
              Two borders.
              <br />
              One coordinated process.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Every shipment crosses at least two customs jurisdictions —
              origin and destination. We handle both under a single mandate:
              export declaration and HS classification at origin, duty
              structuring in advance, and coordinated clearance at
              destination — included as part of our procurement and
              logistics services.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══ 03 THE CUSTOMS PROCESS — animated scroll rail ═══ */}
      <section className="py-24 md:py-32 bg-card border-t border-[hsl(38_16%_16%)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <Reveal>
            <div className="text-center max-w-lg mx-auto">
              <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[hsl(41_42%_56%)]">
                The Process
              </span>
              <h2 className="mt-4 font-heading text-3xl md:text-[2.2rem] font-medium text-foreground leading-[1.1]">
                Four stages, fully coordinated
              </h2>
            </div>
          </Reveal>
          <div className="mt-20">
            <CustomsProcessRail steps={customsSteps} />
          </div>
        </div>
      </section>

      {/* ═══ 04 WHY IT MATTERS — stamp cards ═══ */}
      <section className="py-24 md:py-32 border-t border-[hsl(38_16%_16%)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <Reveal>
            <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[hsl(41_42%_56%)]">
              Why It Matters
            </span>
            <h2 className="mt-4 font-heading text-3xl md:text-[2.2rem] font-medium text-foreground leading-[1.1] max-w-lg">
              Precision at the border
            </h2>
          </Reveal>
          <div className="mt-14">
            <WhyItMattersGrid />
          </div>
        </div>
      </section>

      {/* ═══ 05 DOCUMENTATION HANDLED ═══ */}
      <section className="py-24 md:py-32 bg-card border-t border-[hsl(38_16%_16%)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 grid lg:grid-cols-[0.8fr_1.2fr] gap-14 lg:gap-24">
          <Reveal>
            <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[hsl(41_42%_56%)]">
              Documentation Handled
            </span>
            <h2 className="mt-4 font-heading text-3xl md:text-[2.2rem] font-medium text-foreground leading-[1.1]">
              Paperwork, managed
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-3.5">
            {documentation.map((item, i) => (
              <Reveal key={item} delay={i * 0.05}>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-[hsl(38_16%_18%)]">
                  <FileCheck className="w-4 h-4 text-[hsl(41_42%_56%)] shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-sm text-foreground/85 leading-relaxed">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 06 REGIONS COVERED ═══ */}
      <section className="py-24 md:py-32 border-t border-[hsl(38_16%_16%)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-20 items-center">
          <Reveal>
            <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[hsl(41_42%_56%)]">
              Regions Covered
            </span>
            <h2 className="mt-4 font-heading text-3xl md:text-[2.2rem] font-medium text-foreground leading-[1.1]">
              Origin and destination,
              <br />
              wherever the route leads
            </h2>
            <p className="mt-6 text-muted-foreground text-sm md:text-base leading-relaxed">
              Our Dubai operational hub handles export declaration for
              outbound shipments and coordinates destination clearance
              across the same major trade corridors we serve for
              procurement and logistics. Requirements are confirmed per
              shipment based on the specific origin-destination pair.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-px bg-[hsl(38_16%_16%)] border border-[hsl(38_16%_16%)]">
              {[
                { region: 'Asia-Pacific', desc: 'Japan, South Korea, Southeast Asia' },
                { region: 'Europe', desc: 'Western & Northern Europe' },
                { region: 'Middle East', desc: 'Dubai operational hub' },
                { region: 'Americas', desc: 'North American ports' },
              ].map((r) => (
                <div key={r.region} className="bg-[#0E0D0C] p-5">
                  <h4 className="text-sm font-semibold text-foreground">{r.region}</h4>
                  <p className="mt-1 text-[12px] text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-luxe border border-[hsl(38_16%_22%)]">
              <Image
                src={pageImages.globalFreight}
                alt="Global customs coordination across trade corridors"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-white/85">
                  <span className="w-1.5 h-1.5 rounded-full bg-[hsl(41_42%_56%)]" />
                  Dubai Operational Hub
                </span>
              </div>
            </div>
          </Reveal>
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
          src={pageImages.howItWorks}
          alt="Customs and destination delivery coordination"
          fill
          loading="lazy"
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/78" />
        <div className="relative max-w-3xl mx-auto px-6 sm:px-10 text-center">
          <Reveal>
            <h2 className="font-heading text-3xl md:text-[2.8rem] font-medium text-white leading-[1.1] tracking-tight">
              Questions about your
              <br />
              shipment&apos;s customs process?
            </h2>
            <p className="mt-6 text-white/60 text-base leading-relaxed max-w-md mx-auto">
              Tell us the asset and route — we&apos;ll walk you through
              what customs handling looks like for your specific mandate.
            </p>
            <Link
              href="/intake-hub?service=customs-clearance"
              className="mt-9 inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[hsl(41_42%_56%)] text-[hsl(30_10%_8%)] text-sm font-semibold tracking-wide hover:bg-[hsl(41_42%_64%)] transition-colors"
            >
              Ask About Customs Handling
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}