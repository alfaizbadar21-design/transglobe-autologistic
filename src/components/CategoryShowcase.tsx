'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { categories } from '../lib/site-data'
import { getListingsByCategory, type CategorySlug } from '../lib/listings-data'

export default function CategoryShowcase() {
  return (
    <section className="relative bg-[#0E0D0C] border-b border-[hsl(38_16%_18%)] py-24 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-end justify-between flex-wrap gap-6"
        >
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.24em] uppercase text-[hsl(41_42%_56%)]">
              <span className="h-px w-8 bg-[hsl(41_42%_56%_/_0.6)]" />
              Six Asset Classes
            </span>
            <h2 className="mt-5 font-heading text-3xl md:text-[2.8rem] font-medium text-white leading-[1.06] tracking-tight">
              One desk. Every category.
            </h2>
            <p className="mt-4 text-white/45 text-base leading-relaxed max-w-md">
              From executive automobiles to earthmoving machinery and marine
              craft — each category runs through the same accountable desk.
            </p>
          </div>
        </motion.div>

        {/* ── Grid — asymmetric bento layout ── */}
        <div className="mt-14 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
          {categories.map((c, i) => {
            const count = getListingsByCategory(c.slug as CategorySlug).length
            // First card spans wider on desktop for visual rhythm
            const isFeatured = i === 0
            return (
              <CategoryTile
                key={c.slug}
                slug={c.slug}
                title={c.title}
                tag={c.tag}
                image={c.image}
                path={c.path}
                count={count}
                index={i}
                spanClass={isFeatured ? 'lg:col-span-3 lg:row-span-2' : 'lg:col-span-3'}
                heightClass={isFeatured ? 'h-[320px] lg:h-full' : 'h-[240px]'}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

function CategoryTile({
  title,
  tag,
  image,
  path,
  count,
  index,
  spanClass,
  heightClass,
}: {
  slug: string
  title: string
  tag: string
  image: string
  path: string
  count: number
  index: number
  spanClass: string
  heightClass: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={spanClass}
    >
      <Link
        href={path}
        className={`group relative flex flex-col overflow-hidden rounded-2xl border border-[hsl(38_16%_20%)] ${heightClass}`}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/5 group-hover:from-black/95 transition-all duration-500" />

        {/* Top — tag + count */}
        <div className="relative flex items-center justify-between p-5 md:p-6">
          <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[hsl(41_42%_56%)]">
            {tag}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-white/8 backdrop-blur-sm border border-white/15 text-[11px] font-semibold text-white/85">
            {count}+ listed
          </span>
        </div>

        {/* Bottom — title + CTA */}
        <div className="relative mt-auto p-5 md:p-6">
          <h3 className="font-heading text-xl md:text-2xl font-medium text-white leading-[1.15] max-w-[85%]">
            {title}
          </h3>
          <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-white/60 group-hover:text-[hsl(41_42%_56%)] transition-colors">
            Explore category
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  )
}