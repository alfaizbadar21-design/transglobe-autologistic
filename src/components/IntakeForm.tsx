'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ArrowRight, CheckCircle2, Loader2, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

// ── Schema — only truly essential fields required ──────────────────────────

const schema = z.object({
  fullName: z.string().min(2, 'Full name is required').max(80),
  email: z.string().min(1, 'Email is required').email('Enter a valid email address'),
  phone: z.string().min(7, 'Enter a valid phone number').max(20),

  serviceType: z.string().min(1, 'Please select a service type'),
  assetCategory: z.string().min(1, 'Please select an asset category'),
  assetDescription: z
    .string()
    .min(5, 'Tell us briefly what you need')
    .max(500),

  // Everything below is optional
  destinationCountry: z.string().max(60).optional(),
  budgetRange: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().max(1500).optional(),
})

type FormData = z.infer<typeof schema>

const SERVICE_TYPES = [
  { value: 'turnkey-procurement', label: 'Source & procure an asset for me' },
  { value: 'standalone-logistics', label: 'I own it — just ship it' },
  { value: 'both', label: 'Both procurement & shipping' },
]

const ASSET_CATEGORIES = [
  { value: 'cars-suvs', label: 'Cars & SUVs' },
  { value: 'commercial-fleet', label: 'Commercial Fleet' },
  { value: 'heavy-machinery', label: 'Heavy Machinery' },
  { value: 'marine', label: 'Marine' },
  { value: 'mobility', label: 'Mobility' },
  { value: 'parts-customization', label: 'Parts & Customization' },
  { value: 'multiple', label: 'Multiple Categories' },
]

const BUDGET_RANGES = [
  { value: 'under-50k', label: 'Under $50,000' },
  { value: '50k-150k', label: '$50,000 – $150,000' },
  { value: '150k-500k', label: '$150,000 – $500,000' },
  { value: '500k-1m', label: '$500,000 – $1,000,000' },
  { value: 'above-1m', label: 'Above $1,000,000' },
]

const TIMELINES = [
  { value: 'urgent', label: 'Urgent — within 30 days' },
  { value: '1-3-months', label: '1 – 3 months' },
  { value: '3-6-months', label: '3 – 6 months' },
  { value: 'flexible', label: 'Flexible' },
]

// ── Styles ────────────────────────────────────────────────────────────────

const inputClass =
  'w-full h-11 px-4 rounded-lg bg-secondary border border-[hsl(38_16%_22%)] text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-[hsl(41_42%_56%_/_0.35)] focus:border-[hsl(41_42%_56%_/_0.55)] transition-all duration-200'

const selectClass =
  'w-full h-11 px-4 rounded-lg bg-secondary border border-[hsl(38_16%_22%)] text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(41_42%_56%_/_0.35)] focus:border-[hsl(41_42%_56%_/_0.55)] transition-all duration-200 appearance-none cursor-pointer'

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

function SelectChevron() {
  return (
    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
      <ChevronDown className="w-3.5 h-3.5" />
    </div>
  )
}

// ── Main Component ───────────────────────────────────────────────────────

export default function IntakeForm() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showMore, setShowMore] = useState(false)

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
      console.log('Form submitted:', data)
      setSubmitted(true)
      reset()
      setShowMore(false)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-card border border-[hsl(38_16%_22%)] rounded-2xl p-10 md:p-14 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full border border-[hsl(41_42%_56%_/_0.4)] flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8 text-[hsl(41_42%_56%)]" />
          </div>
        </div>
        <h2 className="font-heading text-2xl md:text-3xl font-medium text-foreground mb-4">
          Mandate Received
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto mb-8">
          Thank you. Our concierge desk will respond within 48 business
          hours with a tailored protocol.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[hsl(41_42%_56%_/_0.4)] text-[hsl(41_42%_56%)] text-sm font-medium hover:bg-[hsl(41_42%_56%_/_0.08)] transition-colors"
        >
          Submit another request
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">

      {/* ── Essentials — always visible ── */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <FieldLabel required>Full Name</FieldLabel>
          <input
            className={cn(inputClass, errors.fullName && 'border-red-500/60')}
            placeholder="John Smith"
            {...register('fullName')}
          />
          <FieldError message={errors.fullName?.message} />
        </div>

        <div>
          <FieldLabel required>Email</FieldLabel>
          <input
            className={cn(inputClass, errors.email && 'border-red-500/60')}
            placeholder="john@company.com"
            {...register('email')}
          />
          <FieldError message={errors.email?.message} />
        </div>

        <div>
          <FieldLabel required>Phone / WhatsApp</FieldLabel>
          <input
            className={cn(inputClass, errors.phone && 'border-red-500/60')}
            placeholder="+971 50 000 0000"
            {...register('phone')}
          />
          <FieldError message={errors.phone?.message} />
        </div>

        <div>
          <FieldLabel required>What do you need?</FieldLabel>
          <div className="relative">
            <select
              className={cn(selectClass, errors.serviceType && 'border-red-500/60')}
              {...register('serviceType')}
              defaultValue=""
            >
              <option value="" disabled>Select…</option>
              {SERVICE_TYPES.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            <SelectChevron />
          </div>
          <FieldError message={errors.serviceType?.message} />
        </div>
      </div>

      <div>
        <FieldLabel required>Asset Category</FieldLabel>
        <div className="relative">
          <select
            className={cn(selectClass, errors.assetCategory && 'border-red-500/60')}
            {...register('assetCategory')}
            defaultValue=""
          >
            <option value="" disabled>Select category…</option>
            {ASSET_CATEGORIES.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
          <SelectChevron />
        </div>
        <FieldError message={errors.assetCategory?.message} />
      </div>

      <div>
        <FieldLabel required>Tell us briefly what you need</FieldLabel>
        <textarea
          rows={3}
          placeholder="e.g. 2025 Toyota Land Cruiser 300, new condition, shipping to Dubai"
          className={cn(textareaClass, errors.assetDescription && 'border-red-500/60')}
          {...register('assetDescription')}
        />
        <FieldError message={errors.assetDescription?.message} />
      </div>

      {/* ── Optional details — collapsed by default ── */}
      <div className="pt-1">
        <button
          type="button"
          onClick={() => setShowMore((v) => !v)}
          className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[hsl(41_42%_56%)] hover:text-[hsl(41_42%_64%)] transition-colors"
        >
          {showMore ? 'Hide additional details' : 'Add more details (optional)'}
          <ChevronDown className={cn('w-3.5 h-3.5 transition-transform', showMore && 'rotate-180')} />
        </button>

        {showMore && (
          <div className="mt-5 space-y-5 animate-step-fade">
            <div className="grid sm:grid-cols-3 gap-5">
              <div>
                <FieldLabel>Destination</FieldLabel>
                <input className={inputClass} placeholder="e.g. UAE" {...register('destinationCountry')} />
              </div>
              <div>
                <FieldLabel>Budget</FieldLabel>
                <div className="relative">
                  <select className={selectClass} {...register('budgetRange')} defaultValue="">
                    <option value="">Not specified</option>
                    {BUDGET_RANGES.map((o) => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                  <SelectChevron />
                </div>
              </div>
              <div>
                <FieldLabel>Timeline</FieldLabel>
                <div className="relative">
                  <select className={selectClass} {...register('timeline')} defaultValue="">
                    <option value="">Not specified</option>
                    {TIMELINES.map((o) => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                  <SelectChevron />
                </div>
              </div>
            </div>

            <div>
              <FieldLabel>Anything else?</FieldLabel>
              <textarea
                rows={3}
                placeholder="Special handling, preferred shipping method, documentation needs…"
                className={textareaClass}
                {...register('message')}
              />
            </div>
          </div>
        )}
      </div>

      {/* Submit */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[hsl(41_42%_56%)] text-[hsl(30_10%_8%)] text-sm font-bold tracking-wide hover:bg-[hsl(41_42%_64%)] disabled:opacity-60 transition-all duration-300 min-w-[200px]"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Submitting…
            </>
          ) : (
            <>
              Submit Mandate
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
        <p className="mt-4 text-xs text-muted-foreground">
          * Required. Takes less than a minute.
        </p>
      </div>
    </form>
  )
}