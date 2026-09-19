"use client";

import { useState, useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { categories } from "@/lib/site-data";
import {
  getFeaturedListings,
  getTotalListingsCount,
  searchListings,
  type Listing,
  type CategorySlug,
} from "../lib/listings-data";

import { getListingSlug } from '@/lib/listings-data'

const categoryTabs = categories.map((c) => ({ slug: c.slug, label: c.title }));

export default function FleetDiscovery() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<CategorySlug>("cars-suvs");

  const totalCount = getTotalListingsCount();

  const featured = useMemo(
    () => getFeaturedListings(8).filter((l) => l.category === activeTab),
    [activeTab],
  );

  // fallback: agar us category mein featured kam hain, top 4 dikhao
  const displayListings = useMemo(() => {
    if (featured.length >= 4) return featured;
    const catListings = searchListings("", activeTab).slice(0, 4);
    return catListings;
  }, [featured, activeTab]);

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Search results ko category page pe redirect — filter query ke saath
    if (searchQuery.trim()) {
      window.location.href = `/${activeTab}?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <section className="relative bg-[#0E0D0C] border-b border-[hsl(38_16%_18%)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 md:py-20">
        {/* ── Search Header ── */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2.5 mb-4 text-[10px] font-semibold tracking-[0.28em] uppercase text-[hsl(41_42%_56%)]">
            <span className="h-px w-8 bg-[hsl(41_42%_56%_/_0.6)]" />
            Global Procurement Network
            <span className="h-px w-8 bg-[hsl(41_42%_56%_/_0.6)]" />
          </span>
          <h2 className="font-heading text-3xl md:text-[2.6rem] font-medium text-foreground leading-[1.1]">
            Find Your Next Fleet Asset
          </h2>
          <p className="mt-4 text-muted-foreground text-sm md:text-base leading-relaxed">
            Browse vehicles, commercial fleets, heavy machinery, marine assets
            and personal mobility sourced through our global procurement
            network.
          </p>
        </div>

        {/* ── Search Bar ── */}
        <form
          onSubmit={handleSearchSubmit}
          className="mt-9 max-w-2xl mx-auto flex flex-col sm:flex-row gap-2 sm:gap-0 sm:items-center bg-card border border-[hsl(38_16%_22%)] rounded-full sm:rounded-full p-1.5 shadow-luxe"
        >
          <div className="flex items-center flex-1 px-4 gap-3">
            <Search className="w-4 h-4 text-muted-foreground shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search make, model, equipment, or keyword"
              className="w-full h-11 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-6 h-11 rounded-full bg-[hsl(41_42%_56%)] text-[hsl(30_10%_8%)] text-sm font-semibold whitespace-nowrap hover:bg-[hsl(41_42%_64%)] transition-colors shrink-0"
          >
            Search {totalCount}+ Fleet Assets
          </button>
        </form>

        {/* ── Quick Category Chips ── */}
        <div className="mt-6 flex flex-wrap justify-center gap-2.5">
          {categoryTabs.map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}`}
              className="px-4 py-2 rounded-full border border-[hsl(38_16%_22%)] text-[13px] text-white/65 hover:text-[hsl(41_42%_56%)] hover:border-[hsl(41_42%_56%_/_0.4)] transition-all duration-200"
            >
              {c.label}
            </Link>
          ))}
        </div>
      </div>

      {/* ── Featured Fleet ── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pb-16 md:pb-20">
        {/* Heading row */}
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <h3 className="font-heading text-xl md:text-2xl font-medium text-foreground">
              Featured Fleet
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Selected assets available through our global procurement network.
            </p>
          </div>
          <Link
            href={`/${activeTab}`}
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-[hsl(41_42%_56%)] hover:gap-2.5 transition-all shrink-0"
          >
            View All Fleet
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Category Tabs */}
        <div className="relative -mx-5 sm:mx-0 mb-7">
          <div className="flex gap-1 overflow-x-auto scrollbar-hide px-5 sm:px-0 border-b border-[hsl(38_16%_18%)]">
            {categoryTabs.map((c) => (
              <button
                key={c.slug}
                onClick={() => setActiveTab(c.slug as CategorySlug)}
                className={cn(
                  "relative px-4 py-3 text-[13px] font-medium whitespace-nowrap transition-colors",
                  activeTab === c.slug
                    ? "text-[hsl(41_42%_56%)]"
                    : "text-white/55 hover:text-white/80",
                )}
              >
                {c.label}
                {activeTab === c.slug && (
                  <span className="absolute left-0 right-0 -bottom-px h-0.5 bg-[hsl(41_42%_56%)]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Cards + Controls */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory -mx-5 px-5 sm:mx-0 sm:px-0"
          >
            {displayListings.map((listing) => (
              <FleetCard key={listing.id} listing={listing} />
            ))}
          </div>

          {/* Desktop prev/next */}
          {displayListings.length > 4 && (
            <div className="hidden lg:flex items-center gap-2 justify-end mt-5">
              <button
                onClick={() => scroll("left")}
                aria-label="Previous listings"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-[hsl(38_16%_22%)] text-white/60 hover:border-[hsl(41_42%_56%_/_0.5)] hover:text-[hsl(41_42%_56%)] transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Next listings"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-[hsl(38_16%_22%)] text-white/60 hover:border-[hsl(41_42%_56%_/_0.5)] hover:text-[hsl(41_42%_56%)] transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Mobile view all */}
        <Link
          href={`/${activeTab}`}
          className="sm:hidden mt-6 flex items-center justify-center gap-1.5 text-sm font-medium text-[hsl(41_42%_56%)]"
        >
          View All Fleet
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}

// ─── Card ───────────────────────────────────────────────────────────────────

function availabilityLabel(listing: Listing) {
  if (listing.condition === "New") return "Procurement Available";
  return "Request This Asset";
}

function FleetCard({ listing }: { listing: Listing }) {
  return (
    <Link
     href={`/${listing.category}/${getListingSlug(listing)}`}
      className="group snap-start shrink-0 w-[280px] sm:w-[300px] flex flex-col overflow-hidden rounded-2xl bg-card border border-[hsl(38_16%_22%)] shadow-luxe shadow-luxe-hover"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <Image
          src={listing.images[0]}
          alt={`${listing.make} ${listing.model}`}
          fill
          loading="lazy"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 280px, 300px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

        {listing.featured && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[hsl(41_42%_56%)] text-[10px] font-semibold tracking-wide uppercase text-[hsl(30_10%_8%)]">
            Featured
          </span>
        )}
        <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/55 backdrop-blur-sm text-[10px] font-semibold tracking-wide text-white">
          {listing.condition}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h4 className="font-heading text-[15px] font-medium text-foreground leading-snug truncate">
              {listing.year} {listing.make} {listing.model}
            </h4>
          </div>
        </div>

        <p className="mt-1.5 text-[12.5px] text-muted-foreground leading-snug line-clamp-1">
          {listing.specSummary}
        </p>

        <div className="mt-3 flex items-center gap-1.5 text-[12px] text-white/45">
          <MapPin className="w-3 h-3 shrink-0" />
          <span className="truncate">{listing.origin}</span>
        </div>

        <div className="mt-4 pt-3 border-t border-[hsl(38_16%_18%)] flex items-center justify-between">
          <span className="text-[11px] font-medium text-[hsl(41_42%_56%)]">
            {availabilityLabel(listing)}
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[hsl(41_42%_56%)] group-hover:translate-x-0.5 transition-all" />
        </div>
      </div>
    </Link>
  );
}
