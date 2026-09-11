'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

// ── Schema — Zod v4 Compatible ────────────────────────────────────────────────

const schema = z.object({
  fullName: z
    .string()
    .min(2, 'Full name must be at least 2 characters')
    .max(80, 'Name too long'),

  email: z
    .string()
    .min(1, 'Email is required')
    .email('Enter a valid email address'),

  phone: z
    .string()
    .min(7, 'Enter a valid phone number')
    .max(20, 'Phone number too long'),

  company: z.string().max(80).optional(),

  serviceType: z
    .string()
    .min(1, 'Please select a service type'),

  assetCategory: z
    .string()
    .min(1, 'Please select an asset category'),

  assetDescription: z
    .string()
    .min(10, 'Please describe the asset — at least 10 characters')
    .max(500, 'Description too long'),

  originCountry: z
    .string()
    .min(2, 'Enter origin country')
    .max(60, 'Too long'),

  destinationCountry: z
    .string()
    .min(2, 'Enter destination country')
    .max(60, 'Too long'),

  budgetRange: z
    .string()
    .min(1, 'Please select a budget range'),

  timeline: z
    .string()
    .min(1, 'Please select a timeline'),

  message: z.string().max(2000).optional(),
})

type FormData = z.infer<typeof schema>

// ── Options ────────────────────────────────────────────────────────────────────

const SERVICE_TYPES = [
  {
    value: 'turnkey-procurement',
    label: 'Full-Cycle Turnkey Procurement — Source, acquire & ship',
  },
  {
    value: 'standalone-logistics',
    label: 'Standalone Logistics — I own the asset, need shipping',
  },
  { value: 'both', label: 'Both — Procurement & Logistics' },
]

const ASSET_CATEGORIES = [
  { value: 'cars-suvs', label: 'Cars & SUVs' },
  { value: 'commercial-fleet', label: 'Trucks, Trailers, Buses & Microbuses' },
  { value: 'heavy-machinery', label: 'Construction & Heavy Machinery' },
  { value: 'marine', label: 'Watercraft & Boats' },
  { value: 'mobility', label: 'Motorcycles, Scooters & Personal Mobility' },
  { value: 'parts-customization', label: 'Parts, Tuning & Custom Modifications' },
  { value: 'multiple', label: 'Multiple Categories' },
]

const BUDGET_RANGES = [
  { value: 'under-50k', label: 'Under $50,000' },
  { value: '50k-150k', label: '$50,000 – $150,000' },
  { value: '150k-500k', label: '$150,000 – $500,000' },
  { value: '500k-1m', label: '$500,000 – $1,000,000' },
  { value: 'above-1m', label: 'Above $1,000,000' },
  { value: 'prefer-not', label: 'Prefer not to specify' },
]

const TIMELINES = [
  { value: 'urgent', label: 'Urgent — within 30 days' },
  { value: '1-3-months', label: '1 – 3 months' },
  { value: '3-6-months', label: '3 – 6 months' },
  { value: '6-plus-months', label: '6+ months' },
  { value: 'flexible', label: 'Flexible / No deadline' },
]

// ── Sub-components ─────────────────────────────────────────────────────────────

function FieldLabel({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string
  children: React.ReactNode
  required?: boolean
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-2"
    >
      {children}
      {required && (
        <span className="ml-1 text-[hsl(41_42%_56%)]">*</span>
      )}
    </label>
  )
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return <p className="mt-1.5 text-[11px] text-red-400">{message}</p>
}

function SectionTitle({
  number,
  title,
}: {
  number: string
  title: string
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-body text-[11px] text-[hsl(41_42%_56%)] tracking-[0.2em]">
        {number}
      </span>
      <span className="font-heading text-lg font-medium text-foreground">
        {title}
      </span>
      <span className="flex-1 h-px bg-[hsl(38_16%_22%)]" />
    </div>
  )
}

function Divider() {
  return <div className="h-px bg-[hsl(38_16%_18%)]" />
}

function SelectChevron() {
  return (
    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path
          d="M2 4L6 8L10 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

// ── Class strings ──────────────────────────────────────────────────────────────

const inputClass =
  'w-full h-11 px-4 rounded-lg bg-secondary border border-[hsl(38_16%_22%)] text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-[hsl(41_42%_56%_/_0.35)] focus:border-[hsl(41_42%_56%_/_0.55)] transition-all duration-200'

const selectClass =
  'w-full h-11 px-4 rounded-lg bg-secondary border border-[hsl(38_16%_22%)] text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(41_42%_56%_/_0.35)] focus:border-[hsl(41_42%_56%_/_0.55)] transition-all duration-200 appearance-none cursor-pointer'

const textareaClass =
  'w-full px-4 py-3 rounded-lg bg-secondary border border-[hsl(38_16%_22%)] text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-[hsl(41_42%_56%_/_0.35)] focus:border-[hsl(41_42%_56%_/_0.55)] transition-all duration-200 resize-none leading-relaxed'

// ── Main Component ─────────────────────────────────────────────────────────────

export default function IntakeForm() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      company: '',
      serviceType: '',
      assetCategory: '',
      assetDescription: '',
      originCountry: '',
      destinationCountry: '',
      budgetRange: '',
      timeline: '',
      message: '',
    },
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      // TODO: Replace with your API endpoint / email service
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log('Form submitted:', data)
      setSubmitted(true)
      reset()
    } catch (err) {
      console.error('Submission error:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  // ── Success State ──────────────────────────────────────────────────────────

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
          Thank you. Our concierge desk will review your brief and respond
          within 48 business hours with a tailored protocol.
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

  // ── Form ──────────────────────────────────────────────────────────────────

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-10">

      {/* 01 — Contact */}
      <div>
        <SectionTitle number="01" title="Contact Details" />
        <div className="mt-6 grid sm:grid-cols-2 gap-5">

          <div>
            <FieldLabel htmlFor="fullName" required>Full Name</FieldLabel>
            <input
              id="fullName"
              type="text"
              placeholder="John Smith"
              autoComplete="name"
              className={cn(inputClass, errors.fullName && 'border-red-500/60')}
              {...register('fullName')}
            />
            <FieldError message={errors.fullName?.message} />
          </div>

          <div>
            <FieldLabel htmlFor="email" required>Email Address</FieldLabel>
            <input
              id="email"
              type="email"
              placeholder="john@company.com"
              autoComplete="email"
              className={cn(inputClass, errors.email && 'border-red-500/60')}
              {...register('email')}
            />
            <FieldError message={errors.email?.message} />
          </div>

          <div>
            <FieldLabel htmlFor="phone" required>Phone / WhatsApp</FieldLabel>
            <input
              id="phone"
              type="tel"
              placeholder="+971 50 000 0000"
              autoComplete="tel"
              className={cn(inputClass, errors.phone && 'border-red-500/60')}
              {...register('phone')}
            />
            <FieldError message={errors.phone?.message} />
          </div>

          <div>
            <FieldLabel htmlFor="company">Company / Organisation</FieldLabel>
            <input
              id="company"
              type="text"
              placeholder="Optional"
              autoComplete="organization"
              className={inputClass}
              {...register('company')}
            />
          </div>
        </div>
      </div>

      <Divider />

      {/* 02 — Service & Asset */}
      <div>
        <SectionTitle number="02" title="Service & Asset" />
        <div className="mt-6 space-y-5">

          <div>
            <FieldLabel htmlFor="serviceType" required>Service Required</FieldLabel>
            <div className="relative">
              <select
                id="serviceType"
                className={cn(selectClass, errors.serviceType && 'border-red-500/60')}
                {...register('serviceType')}
              >
                <option value="">Select service type…</option>
                {SERVICE_TYPES.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              <SelectChevron />
            </div>
            <FieldError message={errors.serviceType?.message} />
          </div>

          <div>
            <FieldLabel htmlFor="assetCategory" required>Asset Category</FieldLabel>
            <div className="relative">
              <select
                id="assetCategory"
                className={cn(selectClass, errors.assetCategory && 'border-red-500/60')}
                {...register('assetCategory')}
              >
                <option value="">Select asset category…</option>
                {ASSET_CATEGORIES.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              <SelectChevron />
            </div>
            <FieldError message={errors.assetCategory?.message} />
          </div>

          <div>
            <FieldLabel htmlFor="assetDescription" required>
              Asset Description
            </FieldLabel>
            <textarea
              id="assetDescription"
              rows={4}
              placeholder="Describe the asset — make, model, year, specifications, quantity, condition (new/used), any special requirements…"
              className={cn(textareaClass, errors.assetDescription && 'border-red-500/60')}
              {...register('assetDescription')}
            />
            <FieldError message={errors.assetDescription?.message} />
          </div>
        </div>
      </div>

      <Divider />

      {/* 03 — Logistics */}
      <div>
        <SectionTitle number="03" title="Logistics Details" />
        <div className="mt-6 grid sm:grid-cols-2 gap-5">

          <div>
            <FieldLabel htmlFor="originCountry" required>Origin Country / Region</FieldLabel>
            <input
              id="originCountry"
              type="text"
              placeholder="e.g. Germany, Japan, USA"
              className={cn(inputClass, errors.originCountry && 'border-red-500/60')}
              {...register('originCountry')}
            />
            <FieldError message={errors.originCountry?.message} />
          </div>

          <div>
            <FieldLabel htmlFor="destinationCountry" required>Destination Country</FieldLabel>
            <input
              id="destinationCountry"
              type="text"
              placeholder="e.g. UAE, Saudi Arabia, Kenya"
              className={cn(inputClass, errors.destinationCountry && 'border-red-500/60')}
              {...register('destinationCountry')}
            />
            <FieldError message={errors.destinationCountry?.message} />
          </div>
        </div>
      </div>

      <Divider />

      {/* 04 — Budget & Timeline */}
      <div>
        <SectionTitle number="04" title="Budget & Timeline" />
        <div className="mt-6 grid sm:grid-cols-2 gap-5">

          <div>
            <FieldLabel htmlFor="budgetRange" required>Estimated Budget (USD)</FieldLabel>
            <div className="relative">
              <select
                id="budgetRange"
                className={cn(selectClass, errors.budgetRange && 'border-red-500/60')}
                {...register('budgetRange')}
              >
                <option value="">Select budget range…</option>
                {BUDGET_RANGES.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              <SelectChevron />
            </div>
            <FieldError message={errors.budgetRange?.message} />
          </div>

          <div>
            <FieldLabel htmlFor="timeline" required>Required Timeline</FieldLabel>
            <div className="relative">
              <select
                id="timeline"
                className={cn(selectClass, errors.timeline && 'border-red-500/60')}
                {...register('timeline')}
              >
                <option value="">Select timeline…</option>
                {TIMELINES.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              <SelectChevron />
            </div>
            <FieldError message={errors.timeline?.message} />
          </div>
        </div>
      </div>

      <Divider />

      {/* 05 — Additional */}
      <div>
        <SectionTitle number="05" title="Additional Information" />
        <div className="mt-6">
          <FieldLabel htmlFor="message">Message / Special Requirements</FieldLabel>
          <textarea
            id="message"
            rows={5}
            placeholder="Any additional context, special handling, preferred shipping method, port preferences, documentation needs…"
            className={textareaClass}
            {...register('message')}
          />
          <FieldError message={errors.message?.message} />
        </div>
      </div>

      {/* Submit */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[hsl(41_42%_56%)] text-[hsl(30_10%_8%)] text-sm font-bold tracking-wide hover:bg-[hsl(41_42%_64%)] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 min-w-[220px]"
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
          * Required fields. All information is kept strictly confidential.
        </p>
      </div>
    </form>
  )
}