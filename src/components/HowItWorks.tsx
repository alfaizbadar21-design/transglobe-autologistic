/* eslint-disable react-hooks/set-state-in-effect */
'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { procurementSteps, shippingSteps, type JourneyStep } from '@/lib/journey-data'

type JourneyType = 'procurement' | 'shipping'

const journeys: Record<JourneyType, {
  label: string
  steps: JourneyStep[]
  cta: { label: string; href: string }
}> = {
  procurement: {
    label: 'Full-Cycle Procurement',
    steps: procurementSteps,
    cta: { label: 'Start Your Procurement Request', href: '/intake-hub?service=turnkey-procurement' },
  },
  shipping: {
    label: 'Standalone Shipping',
    steps: shippingSteps,
    cta: { label: 'Request Shipping', href: '/intake-hub?service=standalone-logistics' },
  },
}

const AUTOPLAY_INTERVAL = 3500

// ═══════════════════════════════════════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

export default function HowItWorks() {
  const [activeJourney, setActiveJourney] = useState<JourneyType>('procurement')
  const [activeStepId, setActiveStepId] = useState<string>('discover')
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const currentJourney = journeys[activeJourney]

  // Single source of truth — content AND image both derive from this
  const activeStep =
    currentJourney.steps.find((s) => s.id === activeStepId) ?? currentJourney.steps[0]
  const activeStepIndex = currentJourney.steps.findIndex((s) => s.id === activeStep.id)

  const handleJourneyChange = (journey: JourneyType) => {
    setActiveJourney(journey)
    setActiveStepId(journeys[journey].steps[0].id)
  }

  const handleManualStepSelect = (id: string) => {
    setActiveStepId(id)
  }

  // ── Autoplay — advances step every 3.5s within the current journey ──
  useEffect(() => {
    if (prefersReducedMotion || isPaused) return

    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      const nextIndex = (activeStepIndex + 1) % currentJourney.steps.length
      setActiveStepId(currentJourney.steps[nextIndex].id)
    }, AUTOPLAY_INTERVAL)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [activeStepIndex, activeJourney, isPaused, prefersReducedMotion, currentJourney.steps])

  return (
    <section
      className="relative bg-[#0E0D0C] border-b border-[hsl(38_16%_18%)] py-16 md:py-24"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2.5 mb-4 text-[10px] font-semibold tracking-[0.28em] uppercase text-[hsl(41_42%_56%)]">
            <span className="h-px w-8 bg-[hsl(41_42%_56%_/_0.6)]" />
            How It Works
            <span className="h-px w-8 bg-[hsl(41_42%_56%_/_0.6)]" />
          </span>
          <h2 className="font-heading text-3xl md:text-[2.6rem] font-medium text-foreground leading-[1.1]">
            One Request. One Coordinated Journey.
          </h2>
          <p className="mt-4 text-muted-foreground text-sm md:text-base leading-relaxed">
            From finding the right asset to delivering it across borders,
            TransGlobe coordinates the critical steps behind every
            procurement and logistics movement.
          </p>
        </div>

        {/* ── Toggle ── */}
        <div role="tablist" aria-label="Select service journey" className="mt-9 flex justify-center">
          <div className="inline-flex items-center gap-1 p-1 rounded-full bg-card border border-[hsl(38_16%_22%)]">
            {(Object.keys(journeys) as JourneyType[]).map((key) => (
              <button
                key={key}
                role="tab"
                aria-selected={activeJourney === key}
                onClick={() => handleJourneyChange(key)}
                className={cn(
                  'px-5 py-2.5 rounded-full text-[13px] font-medium tracking-wide transition-all duration-300',
                  activeJourney === key
                    ? 'bg-[hsl(41_42%_56%)] text-[hsl(30_10%_8%)]'
                    : 'text-white/60 hover:text-white'
                )}
              >
                {journeys[key].label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Step Navigation ── */}
        <div className="mt-12 md:mt-16">

          {/* Desktop */}
          <div
            role="tablist"
            aria-label={`${currentJourney.label} steps`}
            className="hidden md:grid grid-cols-6 gap-0"
          >
            {currentJourney.steps.map((step, i) => (
              <button
                key={step.id}
                role="tab"
                aria-selected={activeStepId === step.id}
                aria-label={`Step ${step.number}: ${step.title}`}
                onClick={() => handleManualStepSelect(step.id)}
                className="group relative flex flex-col items-start text-left pt-5 pr-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-[hsl(41_42%_56%)] rounded-sm"
              >
                <span
                  className={cn(
                    'absolute top-0 left-0 right-4 h-[2px] transition-colors duration-500',
                    activeStepIndex >= i ? 'bg-[hsl(41_42%_56%)]' : 'bg-[hsl(38_16%_22%)]'
                  )}
                />
                {/* Progress fill for the currently active segment */}
                {activeStepIndex === i && !prefersReducedMotion && (
                  <span
                    key={`progress-${activeJourney}-${activeStepId}`}
                    className="absolute top-0 left-0 right-4 h-[2px] bg-white/70 origin-left animate-step-progress"
                    style={{ animationDuration: `${AUTOPLAY_INTERVAL}ms` }}
                  />
                )}
                <span
                  className={cn(
                    'absolute -top-[5px] left-0 w-3 h-3 rounded-full border-2 transition-all duration-300',
                    activeStepId === step.id
                      ? 'bg-[hsl(41_42%_56%)] border-[hsl(41_42%_56%)] scale-110'
                      : activeStepIndex > i
                        ? 'bg-[hsl(41_42%_56%_/_0.4)] border-[hsl(41_42%_56%_/_0.6)]'
                        : 'bg-[#0E0D0C] border-[hsl(38_16%_28%)] group-hover:border-white/40'
                  )}
                />
                <span
                  className={cn(
                    'font-body text-[11px] tracking-[0.16em] transition-colors duration-300',
                    activeStepId === step.id ? 'text-[hsl(41_42%_56%)]' : 'text-white/35 group-hover:text-white/55'
                  )}
                >
                  {step.number}
                </span>
                <span
                  className={cn(
                    'mt-1.5 font-heading text-[15px] font-medium transition-colors duration-300',
                    activeStepId === step.id ? 'text-foreground' : 'text-white/45 group-hover:text-white/70'
                  )}
                >
                  {step.title}
                </span>
              </button>
            ))}
          </div>

          {/* Mobile */}
          <div className="md:hidden -mx-5 px-5 overflow-x-auto scrollbar-hide">
            <div role="tablist" aria-label={`${currentJourney.label} steps`} className="flex gap-2 pb-1 w-max">
              {currentJourney.steps.map((step) => (
                <button
                  key={step.id}
                  role="tab"
                  aria-selected={activeStepId === step.id}
                  aria-label={`Step ${step.number}: ${step.title}`}
                  onClick={() => handleManualStepSelect(step.id)}
                  className={cn(
                    'shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full border text-[13px] font-medium transition-all duration-300',
                    activeStepId === step.id
                      ? 'bg-[hsl(41_42%_56%)] border-[hsl(41_42%_56%)] text-[hsl(30_10%_8%)]'
                      : 'border-[hsl(38_16%_22%)] text-white/55'
                  )}
                >
                  <span className="text-[10px] opacity-70">{step.number}</span>
                  {step.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Active Step Detail + Image ── */}
        <div className="mt-10 md:mt-14 grid lg:grid-cols-[1fr_1.15fr] gap-8 lg:gap-14 items-center">

          {/* Text — keyed so it re-animates on step change */}
          <div
            key={`text-${activeJourney}-${activeStep.id}`}
            className={cn('order-2 lg:order-1', !prefersReducedMotion && 'animate-step-fade')}
          >
            <span className="font-body text-[13px] tracking-[0.2em] text-[hsl(41_42%_56%)]">
              {activeStep.number} / 06
            </span>
            <h3 className="mt-3 font-heading text-2xl md:text-3xl font-medium text-foreground">
              {activeStep.title}
            </h3>
            <p className="mt-4 text-muted-foreground text-sm md:text-base leading-relaxed max-w-md">
              {activeStep.description}
            </p>

            <Link
              href={currentJourney.cta.href}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[hsl(41_42%_56%)] text-[hsl(30_10%_8%)] text-sm font-semibold tracking-wide hover:bg-[hsl(41_42%_64%)] transition-colors"
            >
              {currentJourney.cta.label}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Image — keyed so it fades on step change, derived from same activeStep */}
          <div className="order-1 lg:order-2 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-luxe border border-[hsl(38_16%_22%)]">
            <div
              key={`image-${activeJourney}-${activeStep.id}`}
              className={cn(
                'absolute inset-0',
                !prefersReducedMotion && 'animate-image-fade'
              )}
            >
              <Image
                src={activeStep.image}
                alt={activeStep.imageAlt}
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}