'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ListingGalleryProps {
  images: string[]
  alt: string
}

export default function ListingGallery({ images, alt }: ListingGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div>
      {/* Main image */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[hsl(38_16%_22%)]">
        <Image
          key={activeIndex}
          src={images[activeIndex]}
          alt={`${alt} — image ${activeIndex + 1}`}
          fill
          priority
          className="object-cover animate-image-fade"
          sizes="(max-width: 1024px) 100vw, 55vw"
        />
        <span className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm text-[12px] font-medium text-white">
          {activeIndex + 1} / {images.length}
        </span>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-5 gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`View image ${i + 1}`}
              className={cn(
                'relative aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all duration-300',
                activeIndex === i
                  ? 'border-[hsl(41_42%_56%)]'
                  : 'border-[hsl(38_16%_20%)] opacity-60 hover:opacity-100'
              )}
            >
              <Image
                src={img}
                alt={`${alt} thumbnail ${i + 1}`}
                fill
                className="object-cover"
                sizes="120px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}