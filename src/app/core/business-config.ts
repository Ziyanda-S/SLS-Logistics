export const businessConfig = {
  companyName: 'Shamase Logistics Solutions',
  shortName: 'SLS',
  tagline: 'Moving Goods. Building Connections.',
  whatsappNumber: '27604139649', // e.g. '27821234567' (country code, no + or leading 0)
  phone: '27604139649',
  email: 'ziyandashamase760@gmail.com'
};

export function buildWhatsappUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${businessConfig.whatsappNumber}?text=${encoded}`;
}

export const whatsappMessages = {
  quote: 'Hello SLS, I would like to request a transport quotation.',
  contract: 'Hello SLS, I am interested in discussing a long-term transport contract.',
  general: 'Hello SLS, I have a general transport enquiry.',
  speak: 'Hello SLS, I would like to speak to someone at SLS.'
};
