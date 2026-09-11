/* eslint-disable react-hooks/set-state-in-effect */
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '../lib/utils'
import type { JourneyStep } from '../lib/journey-data'

interface ServiceJourneyProps {
  steps: JourneyStep[]
  cta: { label: string; href: string }
}

export default function ServiceJourney({ steps, cta }: ServiceJourneyProps) {
  const [activeStepId, setActiveStepId] = useState(steps[0].id)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const activeStep = steps.find((s) => s.id === activeStepId) ?? steps[0]
  const activeStepIndex = steps.findIndex((s) => s.id === activeStep.id)

  return (
    <div>
      {/* Desktop step nav */}
      <div className="hidden md:grid grid-cols-6 gap-0">
        {steps.map((step, i) => (
          <button
            key={step.id}
            role="tab"
            aria-selected={activeStepId === step.id}
            aria-label={`Step ${step.number}: ${step.title}`}
            onClick={() => setActiveStepId(step.id)}
            className="group relative flex flex-col items-start text-left pt-5 pr-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-[hsl(41_42%_56%)] rounded-sm"
          >
            <span
              className={cn(
                'absolute top-0 left-0 right-4 h-[2px] transition-colors duration-500',
                activeStepIndex >= i ? 'bg-[hsl(41_42%_56%)]' : 'bg-[hsl(38_16%_22%)]'
              )}
            />
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

      {/* Mobile step nav */}
      <div className="md:hidden -mx-5 px-5 overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 pb-1 w-max">
          {steps.map((step) => (
            <button
              key={step.id}
              role="tab"
              aria-selected={activeStepId === step.id}
              aria-label={`Step ${step.number}: ${step.title}`}
              onClick={() => setActiveStepId(step.id)}
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

      {/* Active detail + image */}
      <div className="mt-10 md:mt-14 grid lg:grid-cols-[1fr_1.15fr] gap-8 lg:gap-14 items-center">
        <div
          key={`text-${activeStep.id}`}
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
            href={cta.href}
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[hsl(41_42%_56%)] text-[hsl(30_10%_8%)] text-sm font-semibold tracking-wide hover:bg-[hsl(41_42%_64%)] transition-colors"
          >
            {cta.label}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="order-1 lg:order-2 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-luxe border border-[hsl(38_16%_22%)]">
          <div
            key={`image-${activeStep.id}`}
            className={cn('absolute inset-0', !prefersReducedMotion && 'animate-image-fade')}
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
  )
}