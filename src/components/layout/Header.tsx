/* eslint-disable react-hooks/set-state-in-effect */
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { categories, serviceTracks } from '../../lib/site-data'

// Core services for mega menu
const coreServices = [
  {
    title: 'Full-Cycle Turnkey Procurement',
    blurb: 'We source the exact asset globally and deliver it to your door — end to end.',
    path: '/turnkey-procurement',
    live: 34,
  },
  {
    title: 'Standalone White-Glove Logistics & Shipping',
    blurb: "You've acquired it — we move it with collector-grade care across continents.",
    path: '/white-glove-logistics',
    live: 22,
  },
  {
    title: 'Global Freight & Shipping',
    blurb: 'Container, RoRo, breakbulk and air freight engineered across trade corridors.',
    path: '/global-freight',
    live: 18,
  },
  {
  title: 'Customs Clearance',
  blurb: 'Dubai-origin customs, HS coding, duty structuring and destination clearance.',
  path: '/customs-clearance',   // ← updated from '/how-it-works'
  live: 12,
},

]

const activeRoutes: Record<string, number> = {
  'cars-suvs': 128,
  'commercial-fleet': 64,
  'heavy-machinery': 41,
  marine: 29,
  mobility: 52,
  'parts-customization': 96,
}

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Intake Hub', href: '/intake-hub' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [pathname])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-[#0E0D0C]/92 backdrop-blur-xl border-b border-[hsl(38_16%_14%)] py-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
          : 'py-5 bg-transparent'
      )}
    >
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10 flex items-center justify-between gap-6">

        {/* ── Logo ── */}
        <Link href="/" className="group flex items-center gap-3 shrink-0">
          <div className="relative h-9 w-9 grid place-items-center border border-[hsl(41_42%_56%_/_0.5)] rotate-45">
            <span className="-rotate-45 font-heading text-[hsl(41_42%_56%)] text-lg leading-none font-bold">
              T
            </span>
          </div>
          <div className="leading-none">
            <div className="font-heading text-[18px] tracking-[0.22em] text-white font-medium">
              TRANSGLOBE
            </div>
            <div className="text-[9px] tracking-[0.42em] text-[hsl(41_42%_56%_/_0.8)] mt-0.5 font-body">
              AUTOLOGISTICS
            </div>
          </div>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden lg:flex items-center gap-8">

          {/* Home */}
          <Link
            href="/"
            className={cn(
              'text-[13px] tracking-[0.18em] uppercase font-medium transition-colors duration-300',
              isActive('/')
                ? 'text-[hsl(41_42%_56%)]'
                : 'text-white/70 hover:text-white'
            )}
          >
            Home
          </Link>

          {/* Services Mega Menu */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={cn(
                'flex items-center gap-1.5 text-[13px] tracking-[0.18em] uppercase font-medium transition-colors duration-300',
                servicesOpen
                  ? 'text-[hsl(41_42%_56%)]'
                  : 'text-white/70 hover:text-white'
              )}
            >
              Services
              <ChevronDown
                className={cn(
                  'h-3.5 w-3.5 transition-transform duration-300',
                  servicesOpen && 'rotate-180'
                )}
              />
            </button>

            {/* Mega dropdown */}
            <div
              className={cn(
                'absolute left-1/2 -translate-x-1/2 top-full pt-5 transition-all duration-300 w-[780px]',
                servicesOpen
                  ? 'opacity-100 visible translate-y-0'
                  : 'opacity-0 invisible -translate-y-3'
              )}
            >
              <div className="bg-[#111010] border border-[hsl(38_16%_16%)] rounded-sm grid grid-cols-2 overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.7)]">

                {/* Left — Core Services */}
                <div className="bg-[#111010] p-2 border-r border-[hsl(38_16%_16%)]">
                  <div className="px-3 py-2.5 font-body text-[10px] tracking-[0.3em] text-[hsl(41_42%_56%_/_0.7)]">
                    CORE SERVICES
                  </div>
                  {coreServices.map((s) => (
                    <Link
                      key={s.path}
                      href={s.path}
                      className="group block px-3 py-3 rounded-sm hover:bg-[#1a1917] transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[13px] font-medium text-white/85 group-hover:text-[hsl(41_42%_56%)] transition-colors">
                          {s.title}
                        </span>
                        <span className="font-body text-[10px] text-[hsl(41_42%_56%_/_0.7)] ml-3 shrink-0">
                          {s.live} live
                        </span>
                      </div>
                      <p className="text-[11px] text-white/40 mt-1 leading-relaxed">
                        {s.blurb}
                      </p>
                    </Link>
                  ))}
                </div>

                {/* Right — Asset Categories */}
                <div className="bg-[#0f0e0d] p-2">
                  <div className="px-3 py-2.5 font-body text-[10px] tracking-[0.3em] text-[hsl(41_42%_56%_/_0.7)]">
                    ASSET CATEGORIES
                  </div>
                  {categories.map((c) => (
                    <Link
                      key={c.slug}
                      href={c.path}
                      className="group flex items-center gap-3 px-3 py-2.5 rounded-sm hover:bg-[#1a1917] transition-colors"
                    >
                      <div className="h-11 w-11 shrink-0 overflow-hidden rounded-sm border border-white/10 relative">
                        <Image
                          src={c.image}
                          alt={c.title}
                          fill
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                          sizes="44px"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[13px] font-medium text-white/85 group-hover:text-[hsl(41_42%_56%)] transition-colors truncate">
                          {c.title}
                        </div>
                        <div className="font-body text-[10px] text-white/35 mt-0.5">
                          {activeRoutes[c.slug]} active routes
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Other links */}
          {[
            { label: 'How It Works', href: '/how-it-works' },
            { label: 'Global Freight', href: '/global-freight' },
            { label: 'Gallery', href: '/gallery' },
            { label: 'Intake Hub', href: '/intake-hub' },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                'text-[13px] tracking-[0.18em] uppercase font-medium transition-colors duration-300',
                isActive(l.href)
                  ? 'text-[hsl(41_42%_56%)]'
                  : 'text-white/70 hover:text-white'
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* ── CTA ── */}
        <Link
          href="/intake-hub"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 border border-[hsl(41_42%_56%_/_0.5)] text-[hsl(41_42%_56%)] text-[12px] tracking-[0.2em] uppercase font-medium hover:bg-[hsl(41_42%_56%)] hover:text-[hsl(30_10%_8%)] transition-all duration-300"
        >
          Request Briefing
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>

        {/* ── Mobile Toggle ── */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden text-white/80 hover:text-white p-1 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={cn(
          'lg:hidden overflow-hidden transition-all duration-300 border-t border-[hsl(38_16%_16%)]',
          mobileOpen ? 'max-h-screen' : 'max-h-0'
        )}
      >
        <div className="bg-[#0E0D0C] px-5 py-6 space-y-5 max-h-[80vh] overflow-y-auto">

          {/* Home */}
          <Link
            href="/"
            className="block text-base tracking-[0.12em] uppercase text-white/85"
          >
            Home
          </Link>

          {/* Services accordion */}
          <div className="border-t border-[hsl(38_16%_18%)] pt-4">
            <button
              className="flex items-center justify-between w-full text-base tracking-[0.12em] uppercase text-white/85"
              onClick={() => setMobileServicesOpen((v) => !v)}
            >
              Services
              <ChevronDown
                className={cn(
                  'h-4 w-4 transition-transform',
                  mobileServicesOpen && 'rotate-180'
                )}
              />
            </button>

            {mobileServicesOpen && (
              <div className="mt-3 space-y-4">
                <div>
                  <div className="text-[10px] tracking-[0.3em] text-[hsl(41_42%_56%_/_0.7)] mb-2">
                    CORE SERVICES
                  </div>
                  <div className="space-y-2">
                    {coreServices.map((s) => (
                      <Link
                        key={s.path}
                        href={s.path}
                        className="block py-1.5 text-sm text-white/70 hover:text-white transition-colors"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-[10px] tracking-[0.3em] text-[hsl(41_42%_56%_/_0.7)] mb-2">
                    ASSET CATEGORIES
                  </div>
                  <div className="space-y-2">
                    {categories.map((c) => (
                      <Link
                        key={c.slug}
                        href={c.path}
                        className="flex items-center gap-3 py-1.5"
                      >
                        <div className="h-9 w-9 relative shrink-0 overflow-hidden rounded-sm border border-white/10">
                          <Image
                            src={c.image}
                            alt={c.title}
                            fill
                            className="object-cover grayscale"
                            sizes="36px"
                          />
                        </div>
                        <span className="text-sm text-white/70">{c.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Other links */}
          {[
            { label: 'How It Works', href: '/how-it-works' },
            { label: 'Gallery', href: '/gallery' },
            { label: 'Intake Hub', href: '/intake-hub' },
          ].map((l) => (
            <div key={l.href} className="border-t border-[hsl(38_16%_18%)] pt-4">
              <Link
                href={l.href}
                className="block text-base tracking-[0.12em] uppercase text-white/85"
              >
                {l.label}
              </Link>
            </div>
          ))}

          {/* CTA */}
          <div className="pt-2">
            <Link
              href="/intake-hub"
              className="block text-center py-3 border border-[hsl(41_42%_56%_/_0.5)] text-[hsl(41_42%_56%)] text-xs tracking-[0.2em] uppercase font-medium"
            >
              Request Briefing
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}