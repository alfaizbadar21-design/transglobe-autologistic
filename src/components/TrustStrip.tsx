'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe2, LayoutGrid, Clock, ShieldCheck } from 'lucide-react'

interface Stat {
  icon: typeof Globe2
  value: number
  suffix: string
  label: string
}

const stats: Stat[] = [
  { icon: Globe2, value: 120, suffix: '+', label: 'Trade corridors served' },
  { icon: LayoutGrid, value: 6, suffix: '', label: 'Asset classes procured' },
  { icon: Clock, value: 48, suffix: 'h', label: 'Avg. concierge response' },
  { icon: ShieldCheck, value: 100, suffix: '%', label: 'Door-to-door accountability' },
]

function CountUpValue({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf: number
    const duration = 1600
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target])

  return (
    <span className="font-heading text-4xl md:text-5xl font-medium chrome-text">
      {count}
      {suffix}
    </span>
  )
}

export default function TrustStrip() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative z-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[hsl(38_16%_16%)] border border-[hsl(38_16%_16%)] rounded-2xl overflow-hidden shadow-luxe"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-card px-6 py-8 text-center overflow-hidden"
            >
              {/* Hover gold wash */}
              <div className="absolute inset-0 bg-[hsl(41_42%_56%_/_0.04)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative flex flex-col items-center">
                <s.icon
                  className="w-5 h-5 text-[hsl(41_42%_56%)] mb-3 transition-transform duration-500 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                />
                <CountUpValue target={s.value} suffix={s.suffix} inView={inView} />
                <div className="mt-2 text-[11px] tracking-[0.12em] text-muted-foreground uppercase">
                  {s.label}
                </div>
                {/* Underline reveal on hover */}
                <span className="mt-3 h-px w-0 bg-[hsl(41_42%_56%)] transition-all duration-500 group-hover:w-8" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}