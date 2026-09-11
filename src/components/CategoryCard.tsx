import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { type Category } from '../lib/site-data'

interface CategoryCardProps {
  category: Category
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={category.path}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-card border border-[hsl(38_16%_22%)] shadow-luxe shadow-luxe-hover h-full"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
        <Image
          src={category.image}
          alt={category.title}
          fill
          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-[10px] font-semibold tracking-[0.16em] uppercase text-primary">
          {category.tag}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-heading text-xl font-medium text-foreground leading-snug">
          {category.title}
        </h3>
        <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed flex-1">
          {category.blurb}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
          Explore
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  )
}