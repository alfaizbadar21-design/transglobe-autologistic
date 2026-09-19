import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Target, ShieldCheck, Globe2, Users } from 'lucide-react'
import { pageImages, categories, serviceTracks } from '@/lib/site-data'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'TransGlobe AutoLogistics — a single accountable desk for global fleet procurement and white-glove logistics, operating from Dubai across every major trade corridor.',
}

const values = [
  {
    icon: Target,
    title: 'Accountability',
    description: 'One desk manages your entire mandate — no fragmented vendors, no lost communication between parties.',
  },
  {
    icon: ShieldCheck,
    title: 'Verified Precision',
    description: 'Every asset is inspected, every document reviewed, every shipment coordinated with the same rigor.',
  },
  {
    icon: Globe2,
    title: 'Global Reach',
    description: 'Sourcing and logistics coordinated across Asia-Pacific, Europe, the Middle East and the Americas.',
  },
  {
    icon: Users,
    title: 'Client-First Coordination',
    description: 'A dedicated concierge contact stays with your mandate from first brief to final delivery.',
  },
]

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* ═══ 01 HERO ═══ */}
      <section className="relative h-[64svh] min-h-[480px] overflow-hidden -mt-16">
        <Image
          src={serviceTracks[0].image}
          alt="TransGlobe AutoLogistics — global fleet procurement operations"
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
              About TransGlobe
            </span>
            <h1 className="font-heading text-white text-[2.4rem] sm:text-[3.4rem] md:text-[4.2rem] font-medium leading-[0.98] tracking-tight max-w-3xl">
              One desk. Every border.
            </h1>
            <p className="mt-6 text-white/65 text-base md:text-lg max-w-lg leading-relaxed">
              We coordinate global fleet procurement and white-glove
              logistics under a single accountable mandate — from our Dubai
              operational hub to the world.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══ 02 OUR STORY ═══ */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <Reveal>
            <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[hsl(41_42%_56%)]">
              Our Story
            </span>
            <h2 className="mt-5 font-heading text-3xl md:text-[2.4rem] font-medium text-foreground leading-[1.08] tracking-tight">
              Built to remove the friction from global fleet movement
            </h2>
            <p className="mt-5 text-muted-foreground text-base leading-relaxed">
              Global fleet procurement and logistics has traditionally meant
              coordinating between sourcing agents, inspectors, freight
              forwarders and customs brokers separately — each with their
              own timeline, their own point of contact, and their own gaps
              in accountability.
            </p>
            <p className="mt-5 text-muted-foreground text-base leading-relaxed">
              TransGlobe AutoLogistics exists to close those gaps. Operating
              from our Dubai hub, we coordinate every stage of the journey —
              sourcing, inspection, acquisition, freight and customs — under
              one accountable desk, for clients moving anything from a
              single vehicle to a fleet of heavy machinery.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-luxe border border-[hsl(38_16%_22%)]">
              <Image
                src={pageImages.howItWorks}
                alt="TransGlobe coordinated procurement and logistics process"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ 03 VALUES ═══ */}
      <section className="py-24 md:py-32 bg-card border-t border-[hsl(38_16%_16%)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <Reveal>
            <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[hsl(41_42%_56%)]">
              What We Stand For
            </span>
            <h2 className="mt-4 font-heading text-3xl md:text-[2.4rem] font-medium text-foreground leading-[1.1] max-w-lg">
              Principles behind every mandate
            </h2>
          </Reveal>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[hsl(38_16%_16%)]">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="bg-[#0E0D0C] p-8 h-full">
                  <v.icon className="w-5 h-5 text-[hsl(41_42%_56%)] mb-5" strokeWidth={1.5} />
                  <h4 className="text-[15px] font-semibold text-foreground">{v.title}</h4>
                  <p className="mt-2.5 text-[13px] text-muted-foreground leading-relaxed">{v.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 04 WHY TRANSGLOBE ═══ */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-luxe border border-[hsl(38_16%_22%)]">
              <Image
                src={pageImages.globalFreight}
                alt="Global freight and logistics coordination across trade corridors"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[hsl(41_42%_56%)]">
              Why TransGlobe
            </span>
            <h2 className="mt-4 font-heading text-3xl md:text-[2.4rem] font-medium text-foreground leading-[1.1]">
              Six asset classes.
              <br />
              One accountable partner.
            </h2>
            <p className="mt-5 text-muted-foreground text-base leading-relaxed">
              From executive automobiles to heavy machinery and marine
              craft, we coordinate procurement and logistics across every
              category — so you never need a second partner for a
              different type of asset.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {categories.map((c) => (
                <Link
                  key={c.slug}
                  href={c.path}
                  className="px-4 py-2 rounded-full border border-[hsl(38_16%_22%)] text-[13px] text-foreground/70 hover:text-[hsl(41_42%_56%)] hover:border-[hsl(41_42%_56%_/_0.4)] transition-all duration-200"
                >
                  {c.title}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ 05 GLOBAL PRESENCE ═══ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <Image
          src={categories[2].image}
          alt="TransGlobe global operations and industrial reach"
          fill
          loading="lazy"
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/85" />

        <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10">
          <Reveal>
            <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[hsl(41_42%_56%)]">
              Global Presence
            </span>
            <h2 className="mt-4 font-heading text-3xl md:text-[2.4rem] font-medium text-white leading-[1.1] max-w-lg">
              Operating from Dubai, reaching every corridor
            </h2>
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4">
            {[
              { region: 'Asia-Pacific', desc: 'Japan, South Korea, Southeast Asia' },
              { region: 'Europe', desc: 'Western and Northern Europe' },
              { region: 'Middle East', desc: 'Dubai operational hub' },
              { region: 'Americas', desc: 'North American markets' },
            ].map((r, i) => (
              <Reveal key={r.region} delay={i * 0.06}>
                <div className="pr-8 py-2">
                  <Globe2 className="w-5 h-5 text-[hsl(41_42%_56%)] mb-4" strokeWidth={1.25} />
                  <h4 className="font-heading text-base font-medium text-white">{r.region}</h4>
                  <p className="mt-2 text-[13px] text-white/60 leading-relaxed">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 06 FINAL CTA ═══ */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <Image
          src={pageImages.intakeHub}
          alt="Begin your mandate with TransGlobe"
          fill
          loading="lazy"
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative max-w-3xl mx-auto px-6 sm:px-10 text-center">
          <Reveal>
            <h2 className="font-heading text-3xl md:text-[2.8rem] font-medium text-white leading-[1.1] tracking-tight">
              Ready to work with us?
            </h2>
            <p className="mt-6 text-white/60 text-base leading-relaxed max-w-md mx-auto">
              Tell us your asset and destination. We respond within 48
              hours with a tailored protocol.
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