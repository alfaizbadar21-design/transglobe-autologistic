import { pageImages, categories, serviceTracks } from '../lib/site-data'

export interface JourneyStep {
  id: string
  number: string
  title: string
  description: string
  image: string
  imageAlt: string
}

export const procurementSteps: JourneyStep[] = [
  {
    id: 'discover',
    number: '01',
    title: 'Discover',
    description: 'Tell us exactly what you need.',
    image: pageImages.intakeHub,
    imageAlt: 'Global logistics operations and procurement planning',
  },
  {
    id: 'source',
    number: '02',
    title: 'Source',
    description: 'We identify the right asset across global markets.',
    image: categories[0].image,
    imageAlt: 'Global vehicle sourcing and fleet selection',
  },
  {
    id: 'inspect',
    number: '03',
    title: 'Inspect',
    description: 'We coordinate verification, condition and documentation.',
    image: categories[2].image,
    imageAlt: 'Vehicle inspection and condition verification',
  },
  {
    id: 'procure',
    number: '04',
    title: 'Procure',
    description: 'We manage the acquisition process.',
    image: serviceTracks[0].image,
    imageAlt: 'Fleet procurement and acquisition process',
  },
  {
    id: 'ship',
    number: '05',
    title: 'Ship',
    description: 'We arrange the appropriate international freight solution.',
    image: pageImages.globalFreight,
    imageAlt: 'Vehicle loading for international freight',
  },
  {
    id: 'deliver',
    number: '06',
    title: 'Deliver',
    description: 'We coordinate customs and destination delivery.',
    image: pageImages.howItWorks,
    imageAlt: 'Global vehicle delivery and destination logistics',
  },
]

export const shippingSteps: JourneyStep[] = [
  {
    id: 'submit',
    number: '01',
    title: 'Submit',
    description: 'Tell us about your existing asset and destination.',
    image: pageImages.intakeHub,
    imageAlt: 'Client submitting shipping request details',
  },
  {
    id: 'collect',
    number: '02',
    title: 'Collect',
    description: 'Coordinate pickup and preparation.',
    image: categories[1].image,
    imageAlt: 'Fleet collection and preparation for transit',
  },
  {
    id: 'export',
    number: '03',
    title: 'Export',
    description: 'Handle export documentation and requirements.',
    image: serviceTracks[1].image,
    imageAlt: 'Export documentation and shipping requirements',
  },
  {
    id: 'freight',
    number: '04',
    title: 'Freight',
    description: 'Select and arrange the appropriate freight method.',
    image: pageImages.globalFreight,
    imageAlt: 'International freight and shipping method selection',
  },
  {
    id: 'customs',
    number: '05',
    title: 'Customs',
    description: 'Coordinate destination clearance.',
    image: categories[3].image,
    imageAlt: 'Customs clearance and destination processing',
  },
  {
    id: 'deliver',
    number: '06',
    title: 'Deliver',
    description: 'Complete destination delivery.',
    image: pageImages.howItWorks,
    imageAlt: 'Final destination delivery of shipped asset',
  },
]

export interface CustomsStep {
  id: string
  number: string
  title: string
  description: string
}

export const customsSteps: CustomsStep[] = [
  {
    id: 'export-declaration',
    number: '01',
    title: 'Export Declaration',
    description: 'We file the export declaration at origin, ensuring documentation matches the asset and shipment method.',
  },
  {
    id: 'hs-classification',
    number: '02',
    title: 'HS Classification',
    description: 'Correct HS coding is applied to the asset, forming the basis for accurate duty and tax structuring.',
  },
  {
    id: 'duty-structuring',
    number: '03',
    title: 'Duty Structuring',
    description: 'We calculate and structure applicable duties and taxes in advance, avoiding surprises at clearance.',
  },
  {
    id: 'destination-clearance',
    number: '04',
    title: 'Destination Clearance',
    description: 'We coordinate with destination customs authorities to clear the asset for final delivery.',
  },
]