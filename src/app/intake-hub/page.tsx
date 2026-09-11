import type { Metadata } from 'next'
import IntakeForm from '../../components/IntakeForm'
import { pageImages } from '../../lib/site-data'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Intake Hub',
  description:
    'Submit your asset procurement or logistics request. Our concierge desk responds within 48 hours.',
}

export default function IntakeHubPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* ── Page Header ── */}
      <section className="relative h-[42vh] min-h-[320px] overflow-hidden -mt-16">
        <Image
          src={pageImages.intakeHub}
          alt="Transglobe concierge intake briefing"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0E0D0C]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

        <div className="relative h-full max-w-7xl mx-auto px-5 sm:px-8 flex flex-col justify-end pb-12 pt-24">
          <span className="inline-flex items-center gap-2.5 mb-4 text-[10px] font-semibold tracking-[0.28em] uppercase text-[hsl(41_42%_56%)]">
            <span className="h-px w-8 bg-[hsl(41_42%_56%_/_0.6)]" />
            Private Client Briefing
          </span>
          <h1 className="font-heading text-white text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.06]">
            Open a Mandate
          </h1>
          <p className="mt-3 text-white/60 text-sm md:text-base max-w-lg leading-relaxed">
            Tell us what you need. We respond within 48 hours with a tailored
            acquisition and transit protocol.
          </p>
        </div>
      </section>

      {/* ── Form Section ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">

          {/* Form */}
          <IntakeForm />

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-28">

            {/* Response promise */}
            <div className="bg-card border border-[hsl(38_16%_22%)] rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[hsl(41_42%_56%)]">
                  Concierge Desk Active
                </span>
              </div>
              <h3 className="font-heading text-xl font-medium text-foreground mb-3">
                What happens next?
              </h3>
              <div className="space-y-4">
                {[
                  {
                    step: '01',
                    title: 'Submit your brief',
                    desc: 'Fill out the form with your asset and logistics requirements.',
                  },
                  {
                    step: '02',
                    title: 'Concierge review',
                    desc: 'Our team reviews your mandate and identifies sourcing channels.',
                  },
                  {
                    step: '03',
                    title: '48h response',
                    desc: 'You receive a tailored acquisition and transit protocol.',
                  },
                  {
                    step: '04',
                    title: 'Mandate execution',
                    desc: 'We execute end-to-end — sourcing, logistics, delivery.',
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <span className="shrink-0 font-body text-[11px] text-[hsl(41_42%_56%)] tracking-widest mt-0.5">
                      {item.step}
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-foreground">
                        {item.title}
                      </div>
                      <div className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="bg-card border border-[hsl(38_16%_22%)] rounded-2xl p-7">
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

            {/* Confidentiality note */}
            <p className="text-xs text-muted-foreground leading-relaxed px-1">
              All mandates are handled with strict confidentiality. Your
              information is never shared with third parties without consent.
            </p>
          </aside>
        </div>
      </section>
    </div>
  )
}