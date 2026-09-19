import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { getListingSlug, type Listing } from '@/lib/listings-data'

export default function ListingCard({ listing }: { listing: Listing }) {
  return (
    <Link
      href={`/${listing.category}/${getListingSlug(listing)}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-card border border-[hsl(38_16%_22%)] shadow-luxe shadow-luxe-hover"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <Image
          src={listing.images[0]}
          alt={`${listing.make} ${listing.model}${listing.variant ? ' ' + listing.variant : ''}`}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="px-2.5 py-1 rounded-full bg-black/55 backdrop-blur-sm text-[10px] font-semibold tracking-wide uppercase text-white">
            {listing.condition}
          </span>
          {listing.featured && (
            <span className="px-2.5 py-1 rounded-full bg-[hsl(41_42%_56%)] text-[10px] font-semibold tracking-wide uppercase text-[hsl(30_10%_8%)]">
              Featured
            </span>
          )}
        </div>

        {listing.driveType && (
          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/55 backdrop-blur-sm text-[10px] font-semibold tracking-wide text-white">
            {listing.driveType}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-heading text-lg font-medium text-foreground leading-snug">
              {listing.make}
            </h3>
            <p className="text-sm text-muted-foreground">{listing.model}</p>
          </div>
          {listing.year && (
            <span className="text-[13px] font-semibold text-[hsl(41_42%_56%)] shrink-0">
              {listing.year}
            </span>
          )}
        </div>

        <p className="mt-3 text-[13px] text-muted-foreground leading-relaxed">
          {listing.specSummary}
        </p>

        <div className="mt-4 flex items-center justify-between pt-4 border-t border-[hsl(38_16%_18%)]">
          <span className="text-xs text-muted-foreground">{listing.origin}</span>
          <span className="inline-flex items-center gap-1 text-[12px] font-medium text-foreground/85 group-hover:text-foreground transition-colors">
            View Details
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  )
}