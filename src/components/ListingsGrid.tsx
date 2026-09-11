'use client'

import { useState, useMemo } from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'
import ListingCard from '@/components/ListingCard'
import { type Listing, type CategorySlug } from '@/lib/listings-data'

interface ListingsGridProps {
  listings: Listing[]
  makes: string[]
}

type SortOption = 'newest' | 'oldest' | 'make-asc'

export default function ListingsGrid({ listings, makes }: ListingsGridProps) {
  const [search, setSearch] = useState('')
  const [selectedMake, setSelectedMake] = useState('')
  const [selectedCondition, setSelectedCondition] = useState('')
  const [sortBy, setSortBy] = useState<SortOption>('newest')

  const filtered = useMemo(() => {
    let result = [...listings]

    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(
        (l) =>
          l.make.toLowerCase().includes(q) ||
          l.model.toLowerCase().includes(q) ||
          l.specSummary.toLowerCase().includes(q)
      )
    }

    if (selectedMake) {
      result = result.filter((l) => l.make === selectedMake)
    }

    if (selectedCondition) {
      result = result.filter((l) => l.condition === selectedCondition)
    }

   switch (sortBy) {
  case 'newest':
    result.sort((a, b) => (b.year ?? 0) - (a.year ?? 0))
    break
  case 'oldest':
    result.sort((a, b) => (a.year ?? 0) - (b.year ?? 0))
    break
  case 'make-asc':
    result.sort((a, b) => a.make.localeCompare(b.make))
    break
}
    return result
  }, [listings, search, selectedMake, selectedCondition, sortBy])

  return (
    <div>
      {/* ── Filters Bar ── */}
      <div className="bg-card border border-[hsl(38_16%_22%)] rounded-2xl p-5 mb-8">
        <div className="flex flex-col lg:flex-row gap-3">

          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by make, model, or spec…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-11 pl-10 pr-4 rounded-lg bg-secondary border border-[hsl(38_16%_22%)] text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-[hsl(41_42%_56%_/_0.35)] focus:border-[hsl(41_42%_56%_/_0.55)] transition-all"
            />
          </div>

          {/* Make filter */}
          <select
            value={selectedMake}
            onChange={(e) => setSelectedMake(e.target.value)}
            className="h-11 px-4 rounded-lg bg-secondary border border-[hsl(38_16%_22%)] text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(41_42%_56%_/_0.35)] cursor-pointer min-w-[160px]"
          >
            <option value="">All Makes</option>
            {makes.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>

          {/* Condition filter */}
          <select
            value={selectedCondition}
            onChange={(e) => setSelectedCondition(e.target.value)}
            className="h-11 px-4 rounded-lg bg-secondary border border-[hsl(38_16%_22%)] text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(41_42%_56%_/_0.35)] cursor-pointer min-w-[150px]"
          >
            <option value="">All Conditions</option>
            <option value="New">New</option>
            <option value="Used">Used</option>
            <option value="Certified Pre-Owned">Certified Pre-Owned</option>
          </select>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="h-11 px-4 rounded-lg bg-secondary border border-[hsl(38_16%_22%)] text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(41_42%_56%_/_0.35)] cursor-pointer min-w-[150px]"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="make-asc">Make A–Z</option>
          </select>
        </div>

        <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
          <SlidersHorizontal className="w-3.5 h-3.5" />
          {filtered.length} of {listings.length} listings
        </div>
      </div>

      {/* ── Grid ── */}
      {filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-muted-foreground">
            No listings match your filters. Try adjusting your search.
          </p>
        </div>
      )}
    </div>
  )
}