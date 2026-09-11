'use client'

import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

interface StampCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay?: number
}

export default function StampCard({ icon: Icon, title, description, delay = 0 }: StampCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="relative p-7 rounded-2xl bg-card border border-[hsl(38_16%_20%)] overflow-hidden"
    >
      {/* Dashed stamp-ring accent */}
      <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full border border-dashed border-[hsl(41_42%_56%_/_0.2)]" />

      <span className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[hsl(41_42%_56%_/_0.1)] border border-[hsl(41_42%_56%_/_0.3)]">
        <Icon className="w-5 h-5 text-[hsl(41_42%_56%)]" strokeWidth={1.5} />
      </span>
      <h4 className="relative mt-5 font-heading text-[15px] font-medium text-foreground">
        {title}
      </h4>
      <p className="relative mt-2.5 text-[13px] text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}