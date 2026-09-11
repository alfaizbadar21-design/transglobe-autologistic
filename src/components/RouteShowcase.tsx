'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Ship, Plane, Container, Anchor } from 'lucide-react'

interface Route {
  id: string
  asset: string
  category: string
  from: string
  to: string
  mode: string
  icon: typeof Ship
}

const routes: Route[] = [
  { id: 'r1', asset: 'Executive SUV Fleet', category: 'Cars & SUVs', from: 'Yokohama, JP', to: 'Dubai, UAE', mode: 'RoRo', icon: Ship },
  { id: 'r2', asset: 'Commercial Fleet Deployment', category: 'Commercial Fleet', from: 'Södertälje, SE', to: 'Riyadh, SA', mode: 'Container', icon: Container },
  { id: 'r3', asset: 'Mobile Crane Mobilization', category: 'Heavy Machinery', from: 'Ehingen, DE', to: 'Doha, QA', mode: 'Flat-Rack', icon: Anchor },
  { id: 'r4', asset: 'Motor Yacht Relocation', category: 'Marine', from: 'Viareggio, IT', to: 'Abu Dhabi, UAE', mode: 'Float-On/Off', icon: Ship },
  { id: 'r5', asset: 'Performance Parts Shipment', category: 'Parts & Atelier', from: 'Hamamatsu, JP', to: 'Kuwait City, KW', mode: 'Air Freight', icon: Plane },
  { id: 'r6', asset: 'Motorcycle Consignment', category: 'Mobility', from: 'Bologna, IT', to: 'Muscat, OM', mode: 'Container', icon: Container },
]

export default function RouteShowcase() {
  return (
    <section className="py-24 md:py-36 bg-card border-b border-[hsl(38_16%_18%)]">
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
            Example Routes
          </span>
          <h2 className="mt-5 font-heading text-3xl md:text-[2.6rem] font-medium text-foreground leading-[1.08] tracking-tight">
            Routes we coordinate
          </h2>
          <p className="mt-4 text-muted-foreground text-base leading-relaxed">
            A sample of the door-to-door and port-to-port movements our
            desk engineers across global trade corridors.
          </p>
        </motion.div>

        {/* ── Horizontal scroll cards ── */}
        <div className="mt-14 -mx-6 sm:mx-0 px-6 sm:px-0 overflow-x-auto scrollbar-hide">
          <div className="flex gap-5 w-max sm:w-auto sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {routes.map((r, i) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative w-[300px] sm:w-auto shrink-0 p-6 rounded-2xl bg-background border border-[hsl(38_16%_20%)] hover:border-[hsl(41_42%_56%_/_0.4)] transition-colors duration-400"
              >
                <div className="flex items-center justify-between">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[hsl(41_42%_56%_/_0.08)] border border-[hsl(41_42%_56%_/_0.25)]">
                    <r.icon className="w-4 h-4 text-[hsl(41_42%_56%)]" strokeWidth={1.5} />
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[hsl(38_16%_15%)] text-[10px] font-semibold tracking-wide uppercase text-muted-foreground">
                    {r.mode}
                  </span>
                </div>

                <h4 className="mt-5 font-heading text-base font-medium text-foreground leading-snug">
                  {r.asset}
                </h4>
                <span className="mt-1 block text-[11px] text-[hsl(41_42%_56%)] tracking-wide">
                  {r.category}
                </span>

                <div className="mt-5 pt-5 border-t border-[hsl(38_16%_18%)] flex items-center gap-2 text-[13px]">
                  <span className="text-foreground/80 truncate">{r.from}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[hsl(41_42%_56%)] shrink-0" />
                  <span className="text-foreground/80 truncate">{r.to}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}