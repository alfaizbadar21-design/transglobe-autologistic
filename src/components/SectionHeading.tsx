import { cn } from '../lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === 'center' && 'text-center mx-auto max-w-2xl',
        className
      )}
    >
      {eyebrow && (
        <span className="inline-block text-[11px] font-semibold tracking-[0.22em] uppercase text-primary mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground leading-[1.1] text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  )
}