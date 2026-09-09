export interface Industry {
  title: string;
  description: string;
  icon: string;
}

export const industries: Industry[] = [
  { title: 'Construction & Infrastructure', description: 'Transport solutions for construction materials and suitable bulk loads.', icon: 'construct-outline' },
  { title: 'Manufacturing', description: 'Transportation of materials, supplies and goods between business locations.', icon: 'cog-outline' },
  { title: 'Mining & Resources', description: 'Transport solutions for suitable materials and operational requirements.', icon: 'earth-outline' },
  { title: 'Agriculture', description: 'Transportation of agricultural goods and materials.', icon: 'leaf-outline' },
  { title: 'Commercial & Retail', description: 'Reliable movement of commercial goods and supplies.', icon: 'storefront-outline' }
];
