export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": "https://blockoutdigital.com",
  name: "Blockout Digital",
  url: "https://blockoutdigital.com",
  logo: "https://blockoutdigital.com/logo.webp",
  description: "Bold design studio specializing in web development, branding, social media, exhibitions, and 3D visualization.",
  foundingDate: "2026",
  founder: {
    "@type": "Person",
    name: "Craig Ormston",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nuneaton",
    addressRegion: "Warwickshire",
    addressCountry: "GB",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    telephone: "+44-7931-876340",
    email: "hello@blockoutdigital.com",
    areaServed: "GB",
  },
  sameAs: [
    "https://linkedin.com/company/blockout-digital",
    "https://instagram.com/blockout.digital",
  ],
  priceRange: "£££",
};

export const getServiceSchema = (serviceName: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: serviceName,
  description: description,
  provider: {
    "@type": "Organization",
    name: "Blockout Digital",
    url: "https://blockoutdigital.com",
  },
  areaServed: "GB",
  availableLanguage: "en",
});

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://blockoutdigital.com/about",
  name: "Craig Ormston",
  url: "https://blockoutdigital.com/about",
  image: "https://blockoutdigital.com/craig-portrait.jpg",
  jobTitle: "Designer, Developer, Creative Director",
  description: "Founder of Blockout Digital. 11+ years of experience in design, architecture, exhibition design, and web development.",
  knowsAbout: [
    "Web Design",
    "UI/UX Design",
    "Branding",
    "3D Visualization",
    "Exhibition Design",
    "Digital Marketing",
    "Frontend Development",
    "Next.js",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Blockout Digital",
    url: "https://blockoutdigital.com",
  },
};

export const serviceSchemas = [
  {
    name: "Website Development",
    description: "Custom full-stack website design and development using HTML, CSS, Next.JS, PHP with custom animations, e-commerce, CMS, SEO optimization, and hosting.",
  },
  {
    name: "Branding",
    description: "Complete brand identity system including logo development, brand guidelines, color palette, typography, website branding, and social media branding.",
  },
  {
    name: "Social Media Marketing",
    description: "Strategic content creation, graphics design, community management, and audience growth planning for social media platforms.",
  },
  {
    name: "Exhibition Design",
    description: "Concept design, 3D rendering, print-ready artwork, electrical drawings, construction drawings for beMatrix modular systems, and on-site design support.",
  },
  {
    name: "3D Design",
    description: "Photorealistic 3D visualization including project visualization, architectural rendering, exhibition rendering, 3D asset development, and CGI for marketing campaigns.",
  },
];
