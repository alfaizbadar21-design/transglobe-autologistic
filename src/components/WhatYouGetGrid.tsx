import { UserCheck, Clock, RefreshCw, FileText } from 'lucide-react'
import Reveal from '@/components/Reveal'

const commitments = [
  { icon: UserCheck, title: 'Dedicated Concierge', description: 'A single point of contact for your entire mandate — no call centers, no hand-offs.' },
  { icon: Clock, title: '48-Hour Response', description: 'Every initial brief receives a tailored protocol within 48 business hours.' },
  { icon: RefreshCw, title: 'Stage Updates', description: 'You are notified at each process milestone — sourcing, acquisition, freight, delivery.' },
  { icon: FileText, title: 'Full Documentation', description: 'Every document — invoices, customs paperwork, inspection reports — shared as it is generated.' },
]

export default function WhatYouGetGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[hsl(38_16%_16%)]">
      {commitments.map((c, i) => (
        <Reveal key={c.title} delay={i * 0.08}>
          <div className="bg-[#0E0D0C] p-8 h-full">
            <c.icon className="w-5 h-5 text-[hsl(41_42%_56%)] mb-5" strokeWidth={1.5} />
            <h4 className="text-[15px] font-semibold text-foreground">{c.title}</h4>
            <p className="mt-2.5 text-[13px] text-muted-foreground leading-relaxed">{c.description}</p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}