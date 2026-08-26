export type Capability = {
  slug: string;
  title: string;
  summary: string;
  items: string[];
};

export const capabilities: Capability[] = [
  {
    slug: "engineering",
    title: "Engineering",
    summary: "New product design through to mission-critical qualification.",
    items: [
      "New Product Design and Development",
      "Embedded Designing",
      "Value Engineering — Optimization, Alternate Solutions",
      "Prototyping",
      "Military Standards & Mission Critical Solutions",
    ],
  },
  {
    slug: "harness-manufacturing",
    title: "Harness Manufacturing",
    summary: "BTP and BTS MIL-grade cable assembly expertise.",
    items: [
      "BTP and BTS MIL grade Cable assembly",
      "Power cables",
      "Control Harness",
      "RF Cable Assembly",
      "Ethernet Cables",
      "Board Wires Assembly",
    ],
  },
  {
    slug: "mechanical-services",
    title: "Mechanical Services",
    summary: "Backward-integrated fabrication under one roof.",
    items: [
      "Partnered Backward Integration",
      "Machine shop",
      "Laser cutting",
      "Military STD Painting",
      "Moulding & Castings",
      "Certification — partnered with accredited labs for compliance",
    ],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing — Mil Grade & Industrial Product",
    summary: "Panels, distribution units and modular power products.",
    items: [
      "Electrical Panels",
      "Remote controls",
      "PDB & PDU",
      "PPS for Shelter",
      "AC-DC Power supply",
      "DC-DC Converter",
      "Modular UPS",
    ],
  },
  {
    slug: "testing-service",
    title: "Testing & Service Support",
    summary: "Qualification testing and lifecycle support, PAN India.",
    items: [
      "Salt Spray Setup",
      "Leakage Testing",
      "System Integration",
      "AMC services",
      "Safety Clearance",
    ],
  },
];
