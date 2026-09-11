'use client'

import { Clock, Scale, ShieldCheck, Eye } from 'lucide-react'
import StampCard from '@/components/StampCard'

const whyCards = [
  { icon: Clock, title: 'Avoid Delays', description: 'Documentation is prepared and verified before the shipment reaches customs, reducing hold-ups.' },
  { icon: Scale, title: 'Accurate Duty Structuring', description: 'Correct HS classification means duties and taxes are calculated correctly the first time.' },
  { icon: ShieldCheck, title: 'Regulatory Compliance', description: 'Origin and destination requirements are handled to the applicable regulatory standard.' },
  { icon: Eye, title: 'Full Transparency', description: 'You know what duties apply and why — no hidden clearance surprises at destination.' },
]

export default function WhyItMattersGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {whyCards.map((c, i) => (
        <StampCard
          key={c.title}
          icon={c.icon}
          title={c.title}
          description={c.description}
          delay={i * 0.08}
        />
      ))}
    </div>
  )
}