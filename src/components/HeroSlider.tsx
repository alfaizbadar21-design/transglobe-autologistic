/* eslint-disable react-hooks/set-state-in-effect */
'use client'

import {
  useEffect,
  useRef,
  useState,
  useCallback,
  useReducer,
} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

// ─── Slide Data ───────────────────────────────────────────────────────────────

interface Slide {
  id: string
  image: string
  imagePosition: string
  alt: string
  eyebrow: string
  title: string
  description: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
}

const SLIDES: Slide[] = [
  {
    id: 'global',
    image:
      'https://media.base44.com/images/public/6a95b6c23e09b63b19fe8c4b/f8821d574_generated_c82d54e7.jpg',
    imagePosition: 'center',
    alt: 'Global fleet logistics operations at sunrise',
    eyebrow: 'Global Fleet & Logistics',
    title: 'Worldwide Fleet Procurement & Logistics',
    description:
      'Source the right assets globally, manage every logistics stage, and deliver them to their destination with confidence.',
    primaryCta: { label: 'Request a Consultation', href: '/intake-hub' },
    secondaryCta: { label: 'Explore Our Services', href: '/turnkey-procurement' },
  },
  {
    id: 'cars-suvs',
    image:
      'https://media.base44.com/images/public/6a95b6c23e09b63b19fe8c4b/7135ebce9_generated_dc2526d3.jpg',
    imagePosition: 'center',
    alt: 'Luxury cars and SUVs sourced and shipped worldwide',
    eyebrow: 'Cars & SUVs',
    title: 'Source. Procure. Ship. Deliver.',
    description:
      'From premium SUVs to specialized vehicles, we source your requirements globally and manage the journey from acquisition to final delivery.',
    primaryCta: { label: 'Explore Cars & SUVs', href: '/cars-suvs' },
    secondaryCta: { label: 'Start Your Request', href: '/intake-hub' },
  },
  {
    id: 'commercial-fleet',
    image:
      'https://media.base44.com/images/public/6a95b6c23e09b63b19fe8c4b/d38ed381a_generated_6c86c0b1.jpg',
    imagePosition: 'center',
    alt: 'Commercial fleet trucks trailers and buses',
    eyebrow: 'Commercial Fleet',
    title: 'Commercial Fleet, Sourced Worldwide.',
    description:
      'We procure trucks, trailers, buses and microbuses, then coordinate inspection, export handling and worldwide transportation.',
    primaryCta: { label: 'Explore Commercial Fleet', href: '/commercial-fleet' },
    secondaryCta: { label: 'Request Fleet Sourcing', href: '/intake-hub' },
  },
  {
    id: 'marine',
    image:
      'https://media.base44.com/images/public/6a95b6c23e09b63b19fe8c4b/15b2a8d65_generated_f447dd4c.jpg',
    imagePosition: 'center',
    alt: 'Marine watercraft and yacht international logistics',
    eyebrow: 'Marine & Watercraft',
    title: 'Move Your Vessel Across Borders.',
    description:
      'From boats and jet skis to luxury yachts, we coordinate sourcing, handling and international marine transportation.',
    primaryCta: { label: 'Explore Marine', href: '/marine' },
    secondaryCta: { label: 'Start Your Request', href: '/intake-hub' },
  },
  {
    id: 'mobility',
    image:
      'https://media.base44.com/images/public/6a95b6c23e09b63b19fe8c4b/52a3ff024_generated_da12f6a7.jpg',
    imagePosition: 'center',
    alt: 'Motorcycles scooters and personal mobility assets',
    eyebrow: 'Personal Mobility',
    title: 'Two Wheels. Worldwide Reach.',
    description:
      'Source motorcycles, scooters and personal mobility assets internationally, with secure handling and coordinated global delivery.',
    primaryCta: { label: 'Explore Mobility', href: '/mobility' },
    secondaryCta: { label: 'Start Your Request', href: '/intake-hub' },
  },
  {
    id: 'concierge',
    image:
      'https://media.base44.com/images/public/6a95b6c23e09b63b19fe8c4b/0f33ee2db_generated_118f39d3.jpg',
    imagePosition: 'center top',
    alt: 'Full-cycle procurement inspection and logistics concierge',
    eyebrow: 'Full-Cycle Concierge',
    title: 'From Global Search to Your Door.',
    description:
      'Tell us what you need. We source it, coordinate inspection and documentation, arrange transportation, and manage delivery worldwide.',
    primaryCta: { label: 'Start Your Request', href: '/intake-hub' },
    secondaryCta: { label: 'Standalone Shipping', href: '/white-glove-logistics' },
  },
]

const AUTOPLAY_INTERVAL = 6000
const TOTAL = SLIDES.length

// ─── State ────────────────────────────────────────────────────────────────────

type Action =
  | { type: 'NEXT' }
  | { type: 'PREV' }
  | { type: 'GOTO'; index: number }
  | { type: 'MARK_READY'; index: number }

interface SliderState {
  current: number
  previous: number
  direction: 1 | -1
  loadedSet: Set<number>
}

function reducer(state: SliderState, action: Action): SliderState {
  switch (action.type) {
    case 'NEXT': {
      const next = (state.current + 1) % TOTAL
      return { ...state, current: next, previous: state.current, direction: 1 }
    }
    case 'PREV': {
      const prev = (state.current - 1 + TOTAL) % TOTAL
      return { ...state, current: prev, previous: state.current, direction: -1 }
    }
    case 'GOTO':
      return {
        ...state,
        current: action.index,
        previous: state.current,
        direction: action.index > state.current ? 1 : -1,
      }
    case 'MARK_READY': {
      const next = new Set(state.loadedSet)
      next.add(action.index)
      return { ...state, loadedSet: next }
    }
    default:
      return state
  }
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function HeroSlider() {
  const [state, dispatch] = useReducer(reducer, {
    current: 0,
    previous: -1,
    direction: 1,
    loadedSet: new Set([0]),
  })

  const { current, previous } = state

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isTabVisible, setIsTabVisible] = useState(true)

  const sectionRef = useRef<HTMLElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const touchStartX = useRef<number>(0)
  const touchStartY = useRef<number>(0)

  // ── Reduced motion ──
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  // ── Page visibility ──
  useEffect(() => {
    const handler = () => setIsTabVisible(!document.hidden)
    document.addEventListener('visibilitychange', handler)
    return () => document.removeEventListener('visibilitychange', handler)
  }, [])

  // ── Intersection observer ──
  useEffect(() => {
    if (!sectionRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    )
    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // ── Autoplay ──
  const shouldPlay = isVisible && isTabVisible && !prefersReducedMotion

  const scheduleNext = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(
      () => dispatch({ type: 'NEXT' }),
      AUTOPLAY_INTERVAL
    )
  }, [])

  useEffect(() => {
    if (!shouldPlay) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      return
    }
    scheduleNext()
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [current, shouldPlay, scheduleNext])

  // ── Preload next slide ──
  useEffect(() => {
    const nextIndex = (current + 1) % TOTAL
    dispatch({ type: 'MARK_READY', index: current })
    // Preload next after brief delay
    const t = setTimeout(
      () => dispatch({ type: 'MARK_READY', index: nextIndex }),
      800
    )
    return () => clearTimeout(t)
  }, [current])

  // ── Keyboard ──
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') dispatch({ type: 'PREV' })
      if (e.key === 'ArrowRight') dispatch({ type: 'NEXT' })
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  // ── Touch / Swipe ──
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current
    const dy = e.changedTouches[0].clientY - touchStartY.current
    // Only trigger if horizontal swipe is dominant
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      if (dx < 0) dispatch({ type: 'NEXT' })
      else dispatch({ type: 'PREV' })
    }
  }

  const goTo = (i: number) => dispatch({ type: 'GOTO', index: i })
  const goPrev = () => dispatch({ type: 'PREV' })
  const goNext = () => dispatch({ type: 'NEXT' })

  // ── Render ──
  return (
    <section
      ref={sectionRef}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden -mt-16"
      aria-label="Hero slideshow"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* ── Image Layers ── */}
      {SLIDES.map((slide, i) => {
        const isActive = i === current
        const wasActive = i === previous
        const shouldRender = state.loadedSet.has(i) || isActive || wasActive

        return (
          <div
            key={slide.id}
            aria-hidden={!isActive}
            className={cn(
              'absolute inset-0 transition-opacity',
              prefersReducedMotion ? 'duration-0' : 'duration-1000 ease-in-out',
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
            )}
          >
            {shouldRender && (
              <div
                className={cn(
                  'absolute inset-0',
                  !prefersReducedMotion && isActive && 'animate-ken-burns'
                )}
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={i === 0}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  className="object-cover"
                  style={{ objectPosition: slide.imagePosition }}
                  sizes="100vw"
                />
              </div>
            )}

            {/* Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/65 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent pointer-events-none" />
          </div>
        )
      })}

      {/* ── Content ── */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-5 sm:px-8 flex flex-col justify-center pt-16 pb-28 sm:pb-24">
        {SLIDES.map((slide, i) => {
          const isActive = i === current
          return (
            <div
              key={slide.id}
              aria-hidden={!isActive}
              className={cn(
                'absolute inset-x-5 sm:inset-x-8 flex flex-col justify-center transition-all',
                prefersReducedMotion
                  ? 'duration-0'
                  : 'duration-700 ease-out',
                isActive
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 translate-y-4 pointer-events-none'
              )}
              style={{ top: '50%', transform: isActive ? 'translateY(-50%)' : 'translateY(calc(-50% + 1rem)' }}
            >
              {/* Eyebrow */}
              <span className="inline-flex w-fit items-center gap-2.5 mb-5 md:mb-7 text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-white/75">
                <span className="h-px w-8 bg-[hsl(41_42%_56%_/_0.7)]" />
                {slide.eyebrow}
              </span>

              {/* Heading */}
              <h1 className="font-heading text-white font-medium leading-[1.04] text-balance max-w-[820px] text-[2.1rem] sm:text-[3rem] md:text-[3.8rem] lg:text-[4.4rem]">
                {slide.title}
              </h1>

              {/* Description */}
              <p className="mt-5 md:mt-6 text-white/78 text-sm md:text-base lg:text-lg leading-relaxed max-w-[580px]">
                {slide.description}
              </p>

              {/* CTAs */}
              <div className="mt-7 md:mt-9 flex flex-col sm:flex-row gap-3">
                <Link
                  href={slide.primaryCta.href}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[hsl(41_42%_56%)] text-[hsl(30_10%_8%)] text-sm font-semibold tracking-wide hover:bg-[hsl(41_42%_64%)] transition-colors"
                >
                  {slide.primaryCta.label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={slide.secondaryCta.href}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/35 text-white text-sm font-medium tracking-wide hover:bg-white/10 transition-colors backdrop-blur-sm"
                >
                  {slide.secondaryCta.label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )
        })}
      </div>

      {/* ── Controls + Indicator ── */}
      <div className="absolute bottom-8 sm:bottom-10 right-5 sm:right-8 z-30 flex items-end gap-6">

        {/* Slide indicators */}
        <div className="flex flex-col gap-2.5" role="tablist" aria-label="Slide indicators">
          {SLIDES.map((slide, i) => {
            const isActive = i === current
            return (
              <button
                key={slide.id}
                role="tab"
                aria-selected={isActive}
                aria-label={`Go to slide ${i + 1}: ${slide.eyebrow}`}
                onClick={() => goTo(i)}
                className="group flex items-center gap-2.5 focus:outline-none"
              >
                <span
                  className={cn(
                    'font-body text-[10px] tracking-[0.14em] transition-colors duration-300',
                    isActive ? 'text-[hsl(41_42%_56%)]' : 'text-white/30 group-hover:text-white/50'
                  )}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className={cn(
                    'block h-px transition-all duration-500',
                    isActive
                      ? 'w-10 bg-[hsl(41_42%_56%)]'
                      : 'w-4 bg-white/25 group-hover:bg-white/40'
                  )}
                />
              </button>
            )
          })}
        </div>

        {/* Prev / Next buttons */}
        <div className="flex flex-col gap-2">
          <button
            onClick={goPrev}
            aria-label="Previous slide"
            className="w-9 h-9 flex items-center justify-center border border-white/25 text-white/60 hover:border-[hsl(41_42%_56%_/_0.6)] hover:text-[hsl(41_42%_56%)] transition-all duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-[hsl(41_42%_56%)]"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={goNext}
            aria-label="Next slide"
            className="w-9 h-9 flex items-center justify-center border border-white/25 text-white/60 hover:border-[hsl(41_42%_56%_/_0.6)] hover:text-[hsl(41_42%_56%)] transition-all duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-[hsl(41_42%_56%)]"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ── Bottom fade ── */}
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#0E0D0C] to-transparent pointer-events-none z-20" />
    </section>
  )
}