// structured data (schema.org ProfessionalService) for /en/ and
// /en/modeling-support/. rev 2, part B5. true facts only: nothing about
// saint-gobain or any client under a permission hold.
// legal name spelled exactly as jose gave it (2026-11-23).

export const LINKEDIN = 'https://www.linkedin.com/in/jose-barria-7572a4234';

export function business(url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'entrópica',
    legalName: 'Watts And Matter Consulting, S.EP.',
    description:
      'building-performance modeling for consultancies and design teams: energy, daylight, thermal comfort, facade solar and airflow simulations.',
    url,
    email: 'info@entropica-lab.com',
    telephone: '+507 6200-6909',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'PH Plaza Mar, Paitilla',
      addressLocality: 'Panama City',
      addressCountry: 'PA',
    },
    areaServed: [
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'Canada' },
      { '@type': 'Place', name: 'Latin America' },
    ],
    knowsAbout: [
      'building energy modeling',
      'daylight analysis',
      'thermal comfort',
      'CFD',
      'EnergyPlus',
      'Radiance',
      'Ladybug Tools',
    ],
    knowsLanguage: ['en', 'es'],
    founder: {
      '@type': 'Person',
      name: 'José Barría',
      jobTitle: 'founder, lead modeler',
      sameAs: [LINKEDIN],
    },
    sameAs: [LINKEDIN],
  };
}
