'use client'

import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { FileText, Tag, Calculator, CheckCircle2 } from 'lucide-react'
import type { CustomsStep } from '../lib/journey-data'

const icons = [FileText, Tag, Calculator, CheckCircle2]

interface CustomsProcessRailProps {
  steps: CustomsStep[]
}

export default function CustomsProcessRail({ steps }: CustomsProcessRailProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.75', 'end 0.4'],
  })
  const lineProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 22 })

  return (
    <div ref={containerRef} className="relative max-w-2xl mx-auto">
      {/* Track — static */}
      <div className="absolute left-[19px] md:left-1/2 md:-translate-x-1/2 top-3 bottom-3 w-px bg-[hsl(38_16%_18%)]" />

      {/* Track — animated fill, grows with scroll */}
      <motion.div
        className="absolute left-[19px] md:left-1/2 md:-translate-x-1/2 top-3 w-px bg-[hsl(41_42%_56%)] origin-top"
        style={{ scaleY: lineProgress, height: 'calc(100% - 1.5rem)' }}
      />

      <div className="space-y-12 md:space-y-16">
        {steps.map((step, i) => {
          const Icon = icons[i % icons.length]
          const isLeft = i % 2 === 0
          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex items-start gap-6 pl-14 md:pl-0 ${
                isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Node — icon in circle */}
              <span className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#0E0D0C] border-2 border-[hsl(41_42%_56%_/_0.5)] z-10">
                <Icon className="w-4 h-4 text-[hsl(41_42%_56%)]" strokeWidth={1.75} />
              </span>

              {/* Content */}
              <div
                className={`md:w-[calc(50%-3rem)] ${
                  isLeft ? 'md:text-right md:mr-auto' : 'md:text-left md:ml-auto'
                }`}
              >
                <span className="font-body text-[11px] tracking-[0.2em] text-[hsl(41_42%_56%)]">
                  {step.number}
                </span>
                <h3 className="mt-2 font-heading text-xl font-medium text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}