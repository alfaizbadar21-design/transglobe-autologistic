'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Ship, Plane, Container, Globe2 } from 'lucide-react'
import { pageImages } from '@/lib/site-data'

const capabilities = [
  { icon: Container, label: 'Container Freight' },
  { icon: Ship, label: 'RoRo & Breakbulk' },
  { icon: Plane, label: 'Air Freight' },
  { icon: Globe2, label: 'Global Corridors' },
]

export default function LogisticsPowerhouse() {
  return (
    <section className="relative min-h-[640px] overflow-hidden border-b border-[hsl(38_16%_18%)]">
      <Image
        src={pageImages.globalFreight}
        alt="Global freight and logistics operations"
        fill
        loading="lazy"
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/40 to-black/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-transparent" />

      <div className="relative flex flex-col justify-between min-h-[640px]">

        {/* ── Top content ── */}
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 pt-24 md:pt-28 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2.5 mb-5 text-[10px] font-semibold tracking-[0.28em] uppercase text-[hsl(41_42%_56%)]">
              <span className="h-px w-8 bg-[hsl(41_42%_56%_/_0.6)]" />
              Global Logistics Powerhouse
            </span>
            <h2 className="font-heading text-white text-3xl sm:text-4xl md:text-[3.4rem] font-medium leading-[1.05] tracking-tight">
              No route too far.
              <br />
              No asset too complex.
            </h2>
            <p className="mt-5 text-white/60 text-base md:text-lg leading-relaxed max-w-lg">
              From a single motorcycle to a fleet of heavy machinery, our
              freight infrastructure is engineered to move it — coordinated
              from our Dubai operational hub across every major trade
              corridor in the world.
            </p>
            <Link
              href="/global-freight"
              className="mt-8 inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[hsl(41_42%_56%)] text-[hsl(30_10%_8%)] text-sm font-semibold tracking-wide hover:bg-[hsl(41_42%_64%)] transition-colors w-fit"
            >
              Explore Global Freight
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* ── Bottom capability strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="border-t border-white/10 bg-black/30 backdrop-blur-md"
        >
          <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {capabilities.map((c) => (
              <div key={c.label} className="flex items-center gap-3">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 border border-white/15 shrink-0">
                  <c.icon className="w-4 h-4 text-[hsl(41_42%_56%)]" strokeWidth={1.5} />
                </span>
                <span className="text-[13px] font-medium text-white/75">{c.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}