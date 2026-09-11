'use client'

import { motion } from 'framer-motion'

interface TimelineRange {
  label: string
  detail: string
  minWeeks: number
  maxWeeks: number
  maxScale: number // the longest bar in the whole chart, for proportional width
}

const ranges: TimelineRange[] = [
  { label: 'Procurement — Readily Available', detail: 'Typical range: 2–4 weeks', minWeeks: 2, maxWeeks: 4, maxScale: 16 },
  { label: 'Procurement — Rare / Specified Sourcing', detail: 'Typical range: 2–4 months', minWeeks: 8, maxWeeks: 16, maxScale: 16 },
  { label: 'Standalone Shipping — Regional Route', detail: 'Typical range: 1–3 weeks', minWeeks: 1, maxWeeks: 3, maxScale: 16 },
  { label: 'Standalone Shipping — Intercontinental', detail: 'Typical range: 3–6 weeks', minWeeks: 3, maxWeeks: 6, maxScale: 16 },
]

export default function TimelineBars() {
  return (
    <div className="space-y-7">
      {ranges.map((r, i) => {
        const startPct = (r.minWeeks / r.maxScale) * 100
        const widthPct = ((r.maxWeeks - r.minWeeks) / r.maxScale) * 100
        return (
          <div key={r.label}>
            <div className="flex items-baseline justify-between gap-4 mb-2.5">
              <span className="text-sm font-medium text-foreground">{r.label}</span>
              <span className="text-[12px] text-muted-foreground shrink-0">{r.detail}</span>
            </div>
            <div className="relative h-2 rounded-full bg-[hsl(38_16%_16%)] overflow-hidden">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-0 bottom-0 rounded-full bg-[hsl(41_42%_56%)] origin-left"
                style={{ left: `${startPct}%`, width: `${widthPct}%` }}
              />
            </div>
          </div>
        )
      })}
      <p className="pt-2 text-[12px] text-muted-foreground/70 leading-relaxed">
        Ranges reflect typical timelines and vary by asset, route and
        documentation requirements. We provide a tailored estimate after
        reviewing your specific mandate.
      </p>
    </div>
  )
}