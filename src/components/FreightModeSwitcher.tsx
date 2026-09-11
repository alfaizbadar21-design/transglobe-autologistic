'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Ship, Plane, Container, Package } from 'lucide-react'
import { cn } from '@/lib/utils'
import { categories, serviceTracks } from '../lib/site-data'

interface FreightMode {
  id: string
  icon: typeof Ship
  label: string
  title: string
  description: string
  bestFor: string[]
  image: string
}

const modes: FreightMode[] = [
  {
    id: 'sea',
    icon: Container,
    label: 'Sea Freight',
    title: 'Containerized Ocean Freight',
    description: 'Secure loading, bracing and lashing for high-value assets in sealed containers — our most common mode for scheduled, cost-efficient transit.',
    bestFor: ['Cars & SUVs', 'Commercial Fleet', 'Parts & Customization'],
    image: serviceTracks[1].image,
  },
  {
    id: 'roro',
    icon: Ship,
    label: 'RoRo',
    title: 'Roll-On / Roll-Off',
    description: 'Drive-on, drive-off freight for self-propelled vehicles and machinery — efficient for fleet-scale and oversized moves.',
    bestFor: ['Commercial Fleet', 'Heavy Machinery', 'Cars & SUVs'],
    image: categories[1].image,
  },
  {
    id: 'air',
    icon: Plane,
    label: 'Air Freight',
    title: 'Expedited Air Freight',
    description: 'Charter and consolidated air freight for time-critical shipments — the fastest route from origin to destination.',
    bestFor: ['Mobility', 'Parts & Customization', 'Cars & SUVs'],
    image: categories[4].image,
  },
  {
    id: 'breakbulk',
    icon: Package,
    label: 'Breakbulk',
    title: 'Breakbulk Freight',
    description: 'Engineered handling for oversized and heavy cargo that exceeds standard container dimensions.',
    bestFor: ['Heavy Machinery', 'Marine', 'Commercial Fleet'],
    image: categories[2].image,
  },
]

export default function FreightModeSwitcher() {
  const [activeId, setActiveId] = useState(modes[0].id)
  const active = modes.find((m) => m.id === activeId) ?? modes[0]

  return (
    <div>
      {/* Tabs */}
      <div className="flex flex-wrap gap-2.5" role="tablist" aria-label="Freight modes">
        {modes.map((m) => (
          <button
            key={m.id}
            role="tab"
            aria-selected={activeId === m.id}
            onClick={() => setActiveId(m.id)}
            className={cn(
              'inline-flex items-center gap-2.5 px-5 py-3 rounded-full border text-sm font-medium transition-all duration-300',
              activeId === m.id
                ? 'bg-[hsl(41_42%_56%)] border-[hsl(41_42%_56%)] text-[hsl(30_10%_8%)]'
                : 'border-[hsl(38_16%_22%)] text-white/60 hover:text-white hover:border-white/30'
            )}
          >
            <m.icon className="w-4 h-4" strokeWidth={1.5} />
            {m.label}
          </button>
        ))}
      </div>

      {/* Detail panel */}
      <div className="mt-10 grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-14 items-center">
        <div key={`text-${active.id}`} className="animate-step-fade">
          <h3 className="font-heading text-2xl md:text-3xl font-medium text-foreground">
            {active.title}
          </h3>
          <p className="mt-4 text-muted-foreground text-sm md:text-base leading-relaxed max-w-md">
            {active.description}
          </p>
          <div className="mt-6">
            <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[hsl(41_42%_56%)]">
              Best For
            </span>
            <div className="mt-3 flex flex-wrap gap-2">
              {active.bestFor.map((b) => (
                <span
                  key={b}
                  className="px-3 py-1.5 rounded-full bg-background border border-[hsl(38_16%_20%)] text-[12px] text-foreground/75"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-luxe border border-[hsl(38_16%_22%)]">
          <div key={`image-${active.id}`} className="absolute inset-0 animate-image-fade">
            <Image
              src={active.image}
              alt={active.title}
              fill
              loading="lazy"
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </div>
  )
}