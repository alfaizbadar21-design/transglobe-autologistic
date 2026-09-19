'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { categories } from '@/lib/site-data'
import { getListingsByCategory, type CategorySlug } from '@/lib/listings-data'

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
            const listings = getListingsByCategory(c.slug as CategorySlug)
            const count = listings.length
            // Take up to 8 distinct images for the mini carousel
            const carouselImages = listings.slice(0, 8).map((l) => l.images[0])
            const isFeatured = i === 0
            return (
              <CategoryTile
                key={c.slug}
                title={c.title}
                tag={c.tag}
                fallbackImage={c.image}
                carouselImages={carouselImages}
                path={c.path}
                count={count}
                index={i}
                spanClass={isFeatured ? 'lg:col-span-3 lg:row-span-2' : 'lg:col-span-3'}
                heightClass={isFeatured ? 'h-[360px] lg:h-full' : 'h-[280px]'}
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
  fallbackImage,
  carouselImages,
  path,
  count,
  index,
  spanClass,
  heightClass,
}: {
  title: string
  tag: string
  fallbackImage: string
  carouselImages: string[]
  path: string
  count: number
  index: number
  spanClass: string
  heightClass: string
}) {
  const images = carouselImages.length > 0 ? carouselImages : [fallbackImage]
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef(0)

  // ── Autoplay — pauses on hover or manual interaction ──
  useEffect(() => {
    if (images.length <= 1 || isPaused) return
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length)
    }, 3200)
    return () => clearInterval(timer)
  }, [images.length, isPaused])

  const goPrev = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goNext = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setActiveIndex((prev) => (prev + 1) % images.length)
  }

  const goToIndex = (e: React.MouseEvent, i: number) => {
    e.preventDefault()
    e.stopPropagation()
    setActiveIndex(i)
  }

  // ── Touch swipe support ──
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > 30) {
      if (dx < 0) setActiveIndex((prev) => (prev + 1) % images.length)
      else setActiveIndex((prev) => (prev - 1 + images.length) % images.length)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={spanClass}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className={`group relative flex flex-col overflow-hidden rounded-2xl border border-[hsl(38_16%_20%)] ${heightClass}`}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* ── Carousel — crossfade background ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={images[activeIndex]}
              alt={`${title} — example ${activeIndex + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
            />
          </motion.div>
        </AnimatePresence>
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

        {/* ── Manual prev/next controls — appear on hover ── */}
        {images.length > 1 && (
          <>
            <button
              onClick={goPrev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm border border-white/15 text-white/70 opacity-0 group-hover:opacity-100 hover:bg-[hsl(41_42%_56%)] hover:text-[hsl(30_10%_8%)] hover:border-[hsl(41_42%_56%)] transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={goNext}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm border border-white/15 text-white/70 opacity-0 group-hover:opacity-100 hover:bg-[hsl(41_42%_56%)] hover:text-[hsl(30_10%_8%)] hover:border-[hsl(41_42%_56%)] transition-all duration-300"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Carousel dots — also clickable */}
        {images.length > 1 && (
          <div className="relative z-10 flex justify-center gap-1.5 px-5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => goToIndex(e, i)}
                aria-label={`Go to image ${i + 1}`}
                className="p-1 -m-1"
              >
                <span
                  className={`block h-1 rounded-full transition-all duration-500 ${
                    i === activeIndex ? 'w-5 bg-[hsl(41_42%_56%)]' : 'w-1 bg-white/25 hover:bg-white/50'
                  }`}
                />
              </button>
            ))}
          </div>
        )}

        {/* Bottom — title + Learn More button */}
        <div className="relative mt-auto p-5 md:p-6">
          <h3 className="font-heading text-xl md:text-2xl font-medium text-white leading-[1.15] max-w-[85%]">
            {title}
          </h3>
          <Link
            href={path}
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 backdrop-blur-sm border border-white/20 text-[13px] font-medium text-white hover:bg-[hsl(41_42%_56%)] hover:border-[hsl(41_42%_56%)] hover:text-[hsl(30_10%_8%)] transition-all duration-300"
          >
            Learn More
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}