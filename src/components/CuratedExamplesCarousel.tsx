'use client'

import { useState } from 'react'
import type { ShowcaseExample } from '@/lib/category-showcase-data'

interface CuratedExamplesCarouselProps {
  examples: ShowcaseExample[]
}

function MarqueeCard({ ex, index, totalCount }: { ex: ShowcaseExample; index: number; totalCount: number }) {
  return (
    <div className="shrink-0 w-[240px] sm:w-[260px] p-6 rounded-xl bg-card border border-[hsl(38_16%_20%)]">
      <span className="font-body text-[11px] text-[hsl(41_42%_56%)] tracking-widest">
        {String((index % totalCount) + 1).padStart(2, '0')}
      </span>
      <p className="mt-1 text-[12px] text-muted-foreground">{ex.origin}</p>
      <h4 className="mt-3 font-heading text-[15px] font-medium text-foreground leading-snug">
        {ex.title}
      </h4>
      <p className="mt-1.5 text-[13px] text-muted-foreground">{ex.spec}</p>
    </div>
  )
}

function MarqueeRow({
  examples,
  direction,
  isPaused,
}: {
  examples: ShowcaseExample[]
  direction: 'left' | 'right'
  isPaused: boolean
}) {
  const loopedExamples = [...examples, ...examples]

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-r from-card to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-l from-card to-transparent z-10" />

      <div
        className="flex gap-4 w-max"
        style={{
          animation: `${direction === 'left' ? 'marquee-left' : 'marquee-right'} 38s linear infinite`,
          animationPlayState: isPaused ? 'paused' : 'running',
        }}
      >
        {loopedExamples.map((ex, i) => (
          <MarqueeCard key={`${direction}-${ex.title}-${i}`} ex={ex} index={i} totalCount={examples.length} />
        ))}
      </div>
    </div>
  )
}

export default function CuratedExamplesCarousel({ examples }: CuratedExamplesCarouselProps) {
  const [isPaused, setIsPaused] = useState(false)

  // Split the set into two halves so each row shows different examples
  const midpoint = Math.ceil(examples.length / 2)
  const topRow = examples.slice(0, midpoint)
  const bottomRow = examples.slice(midpoint)

  return (
    <div
      className="space-y-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <MarqueeRow examples={topRow} direction="right" isPaused={isPaused} />
      <MarqueeRow examples={bottomRow.length > 0 ? bottomRow : topRow} direction="left" isPaused={isPaused} />

      <style jsx global>{`
        @keyframes marquee-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  )
}