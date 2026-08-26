export const company = {
  name: "Icon Power Solutions Pvt. Ltd.",
  shortName: "Icon Power Solutions",
  tagline: "Power Electronics, Electrical & Mechanical Designing and Manufacturing",
  established: 2001,
  yearsExperience: "25+",
  employeeCount: "150+",
  manufacturingShare: "50%",
  certification: "AS9100D Certified",
  serviceSupport: "PAN India Service Support",
  address: {
    line1: "Plot No 112-113, Sector-5,",
    line2: "IMT Manesar, Gurugram – 122050, Haryana, India",
  },
  email: "marketing@iconpowersolutions.com",
  phones: ["+91-124-4120600", "+91-124-4120601", "+91-124-4120602"],
  website: "www.iconpowersolutions.com",
} as const;

export const heroStats = [
  { label: "Established", value: "2001" },
  { label: "Experience", number: 25, suffix: "+ yrs" },
  { label: "Employees", number: 150, suffix: "+" },
  { label: "Service Support", value: "PAN India" },
  { label: "Certification", value: "AS9100D" },
] as const;

export const strategicPillars = [
  {
    title: "World Class R&D Setup in Manesar",
    description: "Backward-integrated R&D at our Manesar headquarters drives in-house design ownership.",
  },
  {
    title: "Drive Localization",
    description: "Local supply chain development reduces lead times and strengthens quality control.",
  },
  {
    title: "Backward Integration",
    description: "In-house machine shop, laser cutting and moulding capability across the manufacturing chain.",
  },
  {
    title: "Acquisitions for Expansion",
    description: "Targeted acquisitions extend engineering and manufacturing capacity for future scale.",
  },
] as const;

export const quickLinks = [
  {
    href: "/capabilities",
    title: "Capabilities",
    description: "Engineering, harness manufacturing, mechanical services, testing and service support.",
    image: "/images/products/rack-integration-row.jpg",
  },
  {
    href: "/products",
    title: "Products",
    description: "Energy storage, power systems, rack integration, cooling and custom wire harnesses.",
    image: "/images/products/rectifier-module.jpg",
  },
  {
    href: "/solutions",
    title: "Solutions",
    description: "System integration for security, data centres, networking and critical infrastructure.",
    image: "/images/products/smart-rack-row.jpg",
  },
  {
    href: "/presence",
    title: "Global Presence",
    description: "PAN India service network plus operations across six countries.",
    image: "/images/products/hero-office-building.jpg",
  },
] as const;
