import Link from 'next/link'
import { ArrowRight, Search, Package } from 'lucide-react'
import Reveal from '@/components/Reveal'

const paths = [
  {
    icon: Search,
    label: 'If you need us to find it',
    title: 'Full-Cycle Procurement',
    description: 'You don\'t yet own the asset. We source it globally, verify its condition, acquire it on your behalf, and deliver it to your door.',
    href: '/turnkey-procurement',
  },
  {
    icon: Package,
    label: 'If you already own it',
    title: 'Standalone Shipping',
    description: 'You already own the asset. We manage pickup, freight, customs and delivery — no sourcing or acquisition involved.',
    href: '/white-glove-logistics',
  },
]

export default function JourneyOverviewSplit() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        <Reveal>
          <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[hsl(41_42%_56%)]">
            Two Paths
          </span>
          <h2 className="mt-4 font-heading text-3xl md:text-[2.4rem] font-medium text-foreground leading-[1.1] max-w-lg">
            Which one applies to you?
          </h2>
          <p className="mt-4 text-muted-foreground text-base leading-relaxed max-w-2xl">
            Every mandate starts with a single distinction. Read below to
            find your path — the detailed process for each follows.
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 gap-5">
          {paths.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="p-8 rounded-2xl bg-card border border-[hsl(38_16%_20%)] h-full flex flex-col">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[hsl(41_42%_56%_/_0.1)] border border-[hsl(41_42%_56%_/_0.3)]">
                  <p.icon className="w-5 h-5 text-[hsl(41_42%_56%)]" strokeWidth={1.5} />
                </span>
                <span className="mt-5 text-[11px] font-semibold tracking-[0.14em] uppercase text-muted-foreground">
                  {p.label}
                </span>
                <h3 className="mt-2 font-heading text-xl font-medium text-foreground">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                  {p.description}
                </p>
                <Link
                  href={p.href}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-[hsl(41_42%_56%)] transition-colors w-fit"
                >
                  Learn more about this service
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}