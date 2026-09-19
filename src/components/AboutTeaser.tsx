import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { pageImages } from '@/lib/site-data'

export default function AboutTeaser() {
  return (
    <section className="py-24 md:py-36 border-b border-[hsl(38_16%_18%)]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Text */}
        <div>
          <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[hsl(41_42%_56%)]">
            About TransGlobe
          </span>
          <h2 className="mt-5 font-heading text-3xl md:text-[2.6rem] font-medium text-foreground leading-[1.08] tracking-tight">
            One desk. Every border.
          </h2>
          <p className="mt-5 text-muted-foreground text-base leading-relaxed max-w-lg">
            TransGlobe AutoLogistics operates as a single accountable desk
            for global fleet procurement and white-glove logistics —
            coordinated from our Dubai operational hub across every major
            trade corridor.
          </p>
          <Link
            href="/about-us"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground/85 hover:text-[hsl(41_42%_56%)] transition-colors w-fit"
          >
            Learn more about us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Image */}
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-luxe border border-[hsl(38_16%_22%)]">
          <Image
            src={pageImages.howItWorks}
            alt="TransGlobe AutoLogistics operations"
            fill
            loading="lazy"
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      </div>
    </section>
  )
}