'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Compass } from 'lucide-react'
import { serviceTracks } from '@/lib/site-data'

export default function FinalCta() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      <Image
        src={serviceTracks[0].image}
        alt="Open a confidential procurement and logistics mandate"
        fill
        loading="lazy"
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/82" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />

      <div className="relative max-w-3xl mx-auto px-6 sm:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.24em] uppercase text-[hsl(41_42%_56%)]">
            <Compass className="w-3.5 h-3.5" strokeWidth={1.5} />
            Private Client Briefing
          </span>

          <h2 className="mt-6 font-heading text-3xl md:text-[3rem] font-medium text-white leading-[1.1] tracking-tight">
            Open a confidential
            <br />
            mandate with our desk
          </h2>

          <p className="mt-6 text-white/60 text-base md:text-lg leading-relaxed max-w-lg mx-auto">
            Tell us the asset and the destination. Within one business day
            you&apos;ll receive a tailored acquisition and transit protocol
            — no obligation.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/intake-hub"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[hsl(41_42%_56%)] text-[hsl(30_10%_8%)] text-sm font-semibold tracking-wide hover:bg-[hsl(41_42%_64%)] transition-colors"
            >
              Begin a Briefing
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/25 text-white/80 text-sm font-medium hover:border-white/50 hover:text-white transition-all"
            >
              See the Protocol
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}