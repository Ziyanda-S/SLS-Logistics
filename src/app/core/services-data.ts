export interface TransportService {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  suitableFor: string[];
  ctaLabel: string;
  icon: string;
}

export const transportServices: TransportService[] = [
  {
    slug: 'general-freight',
    title: 'General Freight',
    shortDescription: 'Reliable road transportation for commercial goods, materials and supplies.',
    fullDescription: 'Reliable road transportation for commercial goods, materials and supplies. Possible loads can include suitable commercial goods, equipment, building materials and other general freight.',
    suitableFor: ['Commercial goods', 'Equipment', 'Building materials', 'General freight'],
    ctaLabel: 'Learn More',
    icon: 'cube-outline'
  },
  {
    slug: 'tipper-transport',
    title: 'Tipper Transport',
    shortDescription: 'Bulk material transportation for construction, infrastructure and related industries.',
    fullDescription: 'Bulk material transportation for construction, infrastructure and related industries.',
    suitableFor: ['Sand', 'Stone', 'Gravel', 'Aggregate', 'Suitable construction materials'],
    ctaLabel: 'Learn More',
    icon: 'layers-outline'
  },
  {
    slug: 'dedicated-transport',
    title: 'Dedicated Transport',
    shortDescription: 'Transport capacity allocated to businesses with recurring or ongoing transportation requirements.',
    fullDescription: 'Transport capacity allocated to businesses with recurring or ongoing transportation requirements.',
    suitableFor: ['Recurring routes', 'Ongoing supply needs', 'Scheduled deliveries'],
    ctaLabel: 'Discuss Dedicated Transport',
    icon: 'repeat-outline'
  },
  {
    slug: 'contract-transport',
    title: 'Contract Transport',
    shortDescription: 'Long-term transport arrangements designed around the operational requirements of businesses that need dependable vehicle capacity.',
    fullDescription: 'Long-term transport arrangements designed around the operational requirements of businesses that need dependable vehicle capacity.',
    suitableFor: ['Long-term contracts', 'Guaranteed capacity', 'Business partnerships'],
    ctaLabel: 'Discuss a Contract',
    icon: 'document-text-outline'
  }
];
