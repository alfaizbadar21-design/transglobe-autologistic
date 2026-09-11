'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { categories } from '@/lib/site-data'
import { cn } from '@/lib/utils'

type FilterId = 'all' | (typeof categories)[number]['slug']

const filters: { id: FilterId; label: string }[] = [
  { id: 'all', label: 'All Categories' },
  ...categories.map((c) => ({ id: c.slug as FilterId, label: c.title })),
]

// Varying spans for masonry rhythm — not uniform grid
const spanPattern = ['lg:row-span-2', '', '', 'lg:row-span-2', '', '']

export default function GalleryMasonry() {
  const [activeFilter, setActiveFilter] = useState<FilterId>('all')

  const visible = categories.filter(
    (c) => activeFilter === 'all' || c.slug === activeFilter
  )

  return (
    <div>
      {/* Filter pills */}
      <div className="flex flex-wrap gap-2.5">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setActiveFilter(f.id)}
            className={cn(
              'px-4 py-2.5 rounded-full border text-[13px] font-medium transition-all duration-300',
              activeFilter === f.id
                ? 'bg-[hsl(41_42%_56%)] border-[hsl(41_42%_56%)] text-[hsl(30_10%_8%)]'
                : 'border-[hsl(38_16%_22%)] text-white/60 hover:text-white hover:border-white/30'
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <motion.div
        layout
        className="mt-10 grid grid-cols-2 lg:grid-cols-3 auto-rows-[180px] md:auto-rows-[220px] gap-4"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((c, i) => {
            const originalIndex = categories.findIndex((cat) => cat.slug === c.slug)
            return (
              <motion.div
                key={c.slug}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className={cn('relative', spanPattern[originalIndex % spanPattern.length])}
              >
                <Link
                  href={c.path}
                  className="group relative flex flex-col justify-end h-full overflow-hidden rounded-xl border border-[hsl(38_16%_20%)]"
                >
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent group-hover:from-black/92 transition-all duration-500" />

                  <div className="relative p-4 md:p-5">
                    <span className="text-[9px] font-semibold tracking-[0.14em] uppercase text-[hsl(41_42%_56%)]">
                      {c.tag}
                    </span>
                    <div className="mt-1.5 flex items-center justify-between gap-2">
                      <h4 className="font-heading text-sm md:text-base font-medium text-white leading-snug">
                        {c.title}
                      </h4>
                      <ArrowUpRight className="w-4 h-4 text-white/50 shrink-0 group-hover:text-[hsl(41_42%_56%)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}