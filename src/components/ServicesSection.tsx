'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight, Truck, Ship, Globe2, FileCheck } from 'lucide-react'
import { serviceTracks, categories } from '@/lib/site-data'

interface ServiceCard {
  id: string
  icon: typeof Truck
  number: string
  title: string
  description: string
  href: string
  tag: string
  image: string
}

const services: ServiceCard[] = [
  {
    id: 'turnkey-procurement',
    icon: Truck,
    number: '01',
    title: 'Full-Cycle Turnkey Procurement',
    description: 'We source the exact asset globally and deliver it to your door — end to end.',
    href: '/turnkey-procurement',
    tag: 'Source → Deliver',
    image: serviceTracks[0].image,
  },
  {
    id: 'white-glove-logistics',
    icon: Ship,
    number: '02',
    title: 'Standalone White-Glove Logistics & Shipping',
    description: "You've acquired it — we move it with collector-grade care across continents.",
    href: '/white-glove-logistics',
    tag: 'Pickup → Delivery',
    image: serviceTracks[1].image,
  },
  {
    id: 'global-freight',
    icon: Globe2,
    number: '03',
    title: 'Global Freight & Shipping',
    description: 'Container, RoRo, breakbulk and air freight engineered across trade corridors.',
    href: '/global-freight',
    tag: 'Multi-Modal',
    image: categories[1].image,
  },
  {
    id: 'customs-clearance',
    icon: FileCheck,
    number: '04',
    title: 'Customs Clearance',
    description: 'Dubai-origin customs, HS coding, duty structuring and destination clearance.',
    href: '/customs-clearance',
    tag: 'Origin & Destination',
    image: categories[3].image,
  },
]

export default function ServicesSection() {
  return (
    <section className="relative bg-[#0E0D0C] border-b border-[hsl(38_16%_18%)] py-24 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl"
        >
          <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.24em] uppercase text-[hsl(41_42%_56%)]">
            <span className="h-px w-8 bg-[hsl(41_42%_56%_/_0.6)]" />
            Our Services
          </span>
          <h2 className="mt-5 font-heading text-3xl md:text-[2.8rem] font-medium text-white leading-[1.06] tracking-tight">
            What we deliver
          </h2>
          <p className="mt-4 text-white/45 text-base leading-relaxed max-w-md">
            From global sourcing to final delivery, every mandate is
            coordinated under one accountable desk.
          </p>
        </motion.div>

        {/* ── Grid ── */}
        <div className="mt-14 md:mt-16 grid sm:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <ServiceCardItem key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCardItem({ service, index }: { service: ServiceCard; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={service.href}
        className="group relative flex flex-col overflow-hidden rounded-2xl border border-[hsl(38_16%_20%)] h-[380px] md:h-[420px]"
      >
        {/* Background image */}
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, 50vw"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/55 to-black/10 group-hover:from-black/95 transition-all duration-500" />

        {/* Top row — number + icon */}
        <div className="relative flex items-start justify-between p-6 md:p-7">
          <span className="font-heading text-3xl font-light text-white/25 group-hover:text-[hsl(41_42%_56%_/_0.6)] transition-colors duration-500">
            {service.number}
          </span>
          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/15 group-hover:bg-[hsl(41_42%_56%)] group-hover:border-[hsl(41_42%_56%)] transition-all duration-500">
            <service.icon
              className="w-5 h-5 text-white/80 group-hover:text-[hsl(30_10%_8%)] transition-colors duration-500"
              strokeWidth={1.5}
            />
          </span>
        </div>

        {/* Bottom content */}
        <div className="relative mt-auto p-6 md:p-7">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.18em] uppercase text-[hsl(41_42%_56%)]">
            <span className="w-1 h-1 rounded-full bg-[hsl(41_42%_56%)]" />
            {service.tag}
          </span>
          <h3 className="mt-3 font-heading text-xl md:text-2xl font-medium text-white leading-[1.15]">
            {service.title}
          </h3>
          <p className="mt-2.5 text-[13px] md:text-sm text-white/55 leading-relaxed group-hover:text-white/75 transition-colors duration-300">
            {service.description}
          </p>

          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-white/70 group-hover:text-[hsl(41_42%_56%)] transition-colors">
            Learn more
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  )
}