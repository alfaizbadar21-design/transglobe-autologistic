import Link from 'next/link'
import {
  Globe2,
  Mail,
  ArrowUpRight,
  MapPin,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
} from 'lucide-react'
import { categories } from '@/lib/site-data'

const serviceLinks = [
  { label: 'Turnkey Procurement', href: '/turnkey-procurement' },
  { label: 'White-Glove Logistics', href: '/white-glove-logistics' },
  { label: 'Global Freight', href: '/global-freight' },
  { label: 'Customs Clearance', href: '/customs-clearance' },
]

const companyLinks = [
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Intake Hub', href: '/intake-hub' },
]

const socials = [
  { label: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { label: 'Facebook', href: 'https://facebook.com', icon: Facebook },
  { label: 'YouTube', href: 'https://youtube.com', icon: Youtube },
]

export default function Footer() {
  return (
    <footer className="bg-[#080807] border-t border-[hsl(38_16%_22%)]">

      {/* ── Top CTA band ── */}
      <div className="border-b border-[hsl(38_16%_18%)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-14 md:py-16 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[hsl(41_42%_56%)]">
              Open a Mandate
            </span>
            <h3 className="mt-3 font-heading text-2xl md:text-[2rem] font-medium text-white leading-[1.15] max-w-md">
              Tell us the asset and the destination.
            </h3>
          </div>
          <Link
            href="/intake-hub"
            className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[hsl(41_42%_56%)] text-[hsl(30_10%_8%)] text-sm font-semibold tracking-wide hover:bg-[hsl(41_42%_64%)] transition-colors w-fit shrink-0"
          >
            Request Mandate
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

      {/* ── Main columns ── */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr_0.9fr_0.9fr] gap-12 lg:gap-8">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <div className="relative w-9 h-9 grid place-items-center border border-[hsl(41_42%_56%_/_0.5)] rotate-45">
                <span className="-rotate-45 font-heading text-[hsl(41_42%_56%)] text-base font-bold">T</span>
              </div>
              <div className="leading-none">
                <div className="font-heading text-white font-medium text-[15px]">Transglobe</div>
                <div className="text-[9px] tracking-[0.28em] uppercase text-[hsl(41_42%_56%_/_0.8)]">Autologistics</div>
              </div>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              Global fleet procurement and white-glove logistics, engineered
              from our Dubai operational hub to every major trade corridor.
            </p>

            <div className="mt-7 space-y-3">
              <div className="flex items-center gap-3 text-sm text-white/45">
                <MapPin className="w-4 h-4 text-[hsl(41_42%_56%)] shrink-0" strokeWidth={1.5} />
                Dubai, UAE — Worldwide Operations
              </div>
              <a
                href="mailto:concierge@transglobe.ae"
                className="flex items-center gap-3 text-sm text-white/45 hover:text-white transition-colors w-fit"
              >
                <Mail className="w-4 h-4 text-[hsl(41_42%_56%)] shrink-0" strokeWidth={1.5} />
                concierge@transglobe.ae
              </a>
            </div>

            {/* Social icons */}
            <div className="mt-7 flex items-center gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="group flex items-center justify-center w-9 h-9 rounded-full border border-[hsl(38_16%_22%)] text-white/45 hover:border-[hsl(41_42%_56%)] hover:text-[hsl(41_42%_56%)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <s.icon className="w-4 h-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Asset Classes */}
          <div>
            <h4 className="text-[10px] font-semibold tracking-[0.22em] uppercase text-white/35 mb-6">
              Asset Classes
            </h4>
            <ul className="space-y-3.5">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={c.path}
                    className="group inline-flex items-center gap-1.5 text-sm text-white/55 hover:text-white transition-colors"
                  >
                    {c.title}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 text-[hsl(41_42%_56%)] transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] font-semibold tracking-[0.22em] uppercase text-white/35 mb-6">
              Services
            </h4>
            <ul className="space-y-3.5">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-white/55 hover:text-white transition-colors"
                  >
                    {l.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 text-[hsl(41_42%_56%)] transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] font-semibold tracking-[0.22em] uppercase text-white/35 mb-6">
              Company
            </h4>
            <ul className="space-y-3.5">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-white/55 hover:text-white transition-colors"
                  >
                    {l.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 text-[hsl(41_42%_56%)] transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-[hsl(38_16%_16%)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Transglobe Autologistics. All rights reserved.
          </p>
          <p className="inline-flex items-center gap-2 text-xs text-white/25">
            <Globe2 className="w-3.5 h-3.5 text-[hsl(41_42%_56%_/_0.6)]" strokeWidth={1.5} />
            Dubai Operational Hub · Worldwide Trade Corridors
          </p>
        </div>
      </div>
    </footer>
  )
}