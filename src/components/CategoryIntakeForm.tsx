'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const schema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().min(1, 'Email is required').email('Enter a valid email address'),
  phone: z.string().min(7, 'Enter a valid phone number'),
  destination: z.string().max(80).optional(),
  assetOfInterest: z.string().min(3, 'Please describe the asset you need'),
  budget: z.string().max(60).optional(),
  timeline: z.string().max(60).optional(),
  message: z.string().max(1500).optional(),
})

type FormData = z.infer<typeof schema>

const inputClass =
  'w-full h-11 px-4 rounded-lg bg-secondary border border-[hsl(38_16%_22%)] text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-[hsl(41_42%_56%_/_0.35)] focus:border-[hsl(41_42%_56%_/_0.55)] transition-all duration-200'

const textareaClass =
  'w-full px-4 py-3 rounded-lg bg-secondary border border-[hsl(38_16%_22%)] text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-[hsl(41_42%_56%_/_0.35)] focus:border-[hsl(41_42%_56%_/_0.55)] transition-all duration-200 resize-none leading-relaxed'

function FieldLabel({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-2">
      {children}
      {required && <span className="ml-1 text-[hsl(41_42%_56%)]">*</span>}
    </label>
  )
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return <p className="mt-1.5 text-[11px] text-red-400">{message}</p>
}

export default function CategoryIntakeForm({ categoryLabel }: { categoryLabel: string }) {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200))
      console.log('Category intake submitted:', { category: categoryLabel, ...data })
      setSubmitted(true)
      reset()
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="p-10 rounded-2xl bg-card border border-[hsl(38_16%_22%)] text-center">
        <div className="flex justify-center mb-5">
          <div className="w-14 h-14 rounded-full border border-[hsl(41_42%_56%_/_0.4)] flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6 text-[hsl(41_42%_56%)]" />
          </div>
        </div>
        <h3 className="font-heading text-xl font-medium text-foreground">Brief Received</h3>
        <p className="mt-3 text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
          Our desk will respond within one business day with sourcing options and a transit protocol.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[hsl(41_42%_56%_/_0.4)] text-[hsl(41_42%_56%)] text-sm font-medium hover:bg-[hsl(41_42%_56%_/_0.08)] transition-colors"
        >
          Submit another brief
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <FieldLabel required>Full Name</FieldLabel>
          <input className={cn(inputClass, errors.fullName && 'border-red-500/60')} {...register('fullName')} placeholder="John Smith" />
          <FieldError message={errors.fullName?.message} />
        </div>
        <div>
          <FieldLabel required>Email</FieldLabel>
          <input className={cn(inputClass, errors.email && 'border-red-500/60')} {...register('email')} placeholder="john@company.com" />
          <FieldError message={errors.email?.message} />
        </div>
        <div>
          <FieldLabel required>Phone / WhatsApp</FieldLabel>
          <input className={cn(inputClass, errors.phone && 'border-red-500/60')} {...register('phone')} placeholder="+971 50 000 0000" />
          <FieldError message={errors.phone?.message} />
        </div>
        <div>
          <FieldLabel>Delivery Destination</FieldLabel>
          <input className={inputClass} {...register('destination')} placeholder="City, country" />
        </div>
      </div>

      <div>
        <FieldLabel required>Asset of Interest</FieldLabel>
        <input
          className={cn(inputClass, errors.assetOfInterest && 'border-red-500/60')}
          {...register('assetOfInterest')}
          placeholder={`e.g. ${categoryLabel} — specification, condition, quantity`}
        />
        <FieldError message={errors.assetOfInterest?.message} />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <FieldLabel>Indicative Budget</FieldLabel>
          <input className={inputClass} {...register('budget')} placeholder="e.g. $150,000 – $250,000" />
        </div>
        <div>
          <FieldLabel>Desired Timeline</FieldLabel>
          <input className={inputClass} {...register('timeline')} placeholder="e.g. Within 2 months" />
        </div>
      </div>

      <div>
        <FieldLabel>Additional Detail</FieldLabel>
        <textarea className={textareaClass} rows={4} {...register('message')} placeholder="Any additional specification, preferences, or context…" />
      </div>

      <div className="pt-1">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[hsl(41_42%_56%)] text-[hsl(30_10%_8%)] text-sm font-semibold hover:bg-[hsl(41_42%_64%)] disabled:opacity-60 transition-all min-w-[180px]"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Submitting…
            </>
          ) : (
            <>
              Submit Brief
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
        <p className="mt-3 text-xs text-muted-foreground">
          Confidential. Your details are used solely to prepare your protocol.
        </p>
      </div>
    </form>
  )
}