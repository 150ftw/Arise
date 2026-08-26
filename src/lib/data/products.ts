export type ProductImage = {
  src: string;
  alt: string;
};

export type Product = {
  slug: string;
  name: string;
  description?: string;
  features: string[];
  images: ProductImage[];
};

export type ProductCategory = {
  slug: string;
  title: string;
  intro: string;
  products: Product[];
};

const IMG = "/images/products";

export const productCategories: ProductCategory[] = [
  {
    slug: "leoch-energy-storage",
    title: "Leoch Energy Storage Products",
    intro:
      "Lithium battery and rectifier systems built for continuous, unattended operation in telecom and industrial sites.",
    products: [
      {
        slug: "48v-communication-lithium-battery",
        name: "48V Communication Lithium Battery",
        features: [
          "High energy density",
          "Easy installation and upgrade",
          "High operational reliability",
          "Exceptionally long service life",
          "Anti-theft protection via gyroscope and GPS",
          "User-friendly human-machine interface",
          "Optimized monitoring through remote control/diagnosis",
          "RS232 and RS485 communication, compatible with power and environmental monitoring systems",
          "Operating range: -20°C to 60°C",
        ],
        images: [{ src: `${IMG}/battery-48v-lithium.jpg`, alt: "48V Communication Lithium Battery tower" }],
      },
      {
        slug: "pu4c-ups-short-term-backup",
        name: "PU(4C) UPS Short-Term Backup Series",
        features: [
          "High-energy-density, ultra-safe LiFePO₄ batteries",
          "Multi-level battery management system",
          "Multiple communication methods, international standard protocols",
          "Effortless multi-unit parallel connection via automated current cycling",
        ],
        images: [
          { src: `${IMG}/ups-pu4c-backup-1.jpg`, alt: "PU(4C) UPS short-term backup tower unit" },
          { src: `${IMG}/ups-pu4c-backup-2.jpg`, alt: "PU(4C) UPS short-term backup tower unit, front open" },
          { src: `${IMG}/ups-pu4c-rackmount.png`, alt: "PU(4C) UPS short-term backup rack-mount unit" },
        ],
      },
      {
        slug: "rectifier-power-system",
        name: "Rectifier & Outdoor Power System",
        features: [
          "High-efficiency rectifiers > 96.5%",
          "Flexible outdoor cabinet solutions, 10U to 42U",
          "Wide SMPS range, 15A to 10,000A",
          "Failure rate < 0.3%",
          "Advanced rectifier modules, 850W to 6kW, modular for scalability with AI-enabled predictive maintenance",
          "Comprehensive portfolio: AMF/ATS panels, electrical panels, cooling, small cell, RMS with cloud connectivity, IPMS, telecom inverters, MPPT",
          "Suitable for harsh, tough outdoor conditions",
        ],
        images: [{ src: `${IMG}/rectifier-module.jpg`, alt: "Modular rectifier unit with cooling fans" }],
      },
    ],
  },
  {
    slug: "cooling-cabinets",
    title: "Cooling Solutions / IP55 / IP65 Cabinets / Server Racks",
    intro: "Outdoor-rated enclosures for telecom, edge compute and field electronics.",
    products: [
      {
        slug: "aircon-ip65-cabinet",
        name: "Aircon Based IP65 Cabinet",
        features: ["Integrated air-conditioning unit", "IP65-rated for outdoor deployment", "Wall or floor mount"],
        images: [{ src: `${IMG}/cabinet-aircon-ip65.jpg`, alt: "Aircon based IP65 outdoor cabinet" }],
      },
      {
        slug: "od-cabinet-ip55",
        name: "OD Cabinet 42U / 21U, IP55",
        features: ["Available in 42U and 21U formats", "IP55-rated outdoor enclosure", "Passive ventilation"],
        images: [{ src: `${IMG}/cabinet-od-42u-21u-ip55.jpg`, alt: "OD Cabinet 42U and 21U, IP55" }],
      },
      {
        slug: "hex-ip65-cabinet",
        name: "HEX Based IP65 Cabinet",
        features: ["Heat-exchanger cooled", "IP65-rated, no moving-air ingress", "Suited to dusty outdoor sites"],
        images: [{ src: `${IMG}/cabinet-hex-ip65.jpg`, alt: "HEX based IP65 outdoor cabinet" }],
      },
      {
        slug: "id-server-rack-ip20",
        name: "ID Server Racks, IP20",
        features: ["Indoor server rack enclosure", "IP20-rated", "Perforated glass front door"],
        images: [{ src: `${IMG}/server-rack-id-ip20.jpg`, alt: "Indoor server rack, IP20" }],
      },
    ],
  },
  {
    slug: "modular-pps",
    title: "Electrical — Modular PPS for Shelter (AC & DC Distribution)",
    intro:
      "Modular power distribution systems for shelters, designed to MIL 810 STD and customizable to system architecture.",
    products: [
      {
        slug: "modular-pps-version-1",
        name: "Modular PPS — Version 1",
        features: ["AC & DC distribution with backup", "Customizable system architecture", "Designed to meet MIL 810 STD"],
        images: [{ src: `${IMG}/pps-version1.jpg`, alt: "Modular PPS for shelter, Version 1" }],
      },
      {
        slug: "modular-pps-version-2",
        name: "Modular PPS — Version 2",
        features: ["Upgraded modular architecture", "AC & DC distribution with backup", "Designed to meet MIL 810 STD"],
        images: [{ src: `${IMG}/pps-version2.jpg`, alt: "Modular PPS for shelter, Version 2" }],
      },
      {
        slug: "power-distribution-12kva",
        name: "12 KVA Power Distribution",
        features: ["Shelter-mount power distribution", "AC & DC with backup"],
        images: [{ src: `${IMG}/power-distribution-12kva.jpg`, alt: "12 KVA power distribution unit" }],
      },
      {
        slug: "power-distribution-24kva",
        name: "24 KVA Power Distribution",
        features: ["Shelter-mount power distribution", "AC & DC with backup"],
        images: [{ src: `${IMG}/power-distribution-24kva.jpg`, alt: "24 KVA power distribution unit" }],
      },
    ],
  },
  {
    slug: "power-supply",
    title: "Power Supply Products",
    intro: "Complete customizable DC/DC and AC/DC power conversion range, built to customer requirement.",
    products: [
      {
        slug: "external-transformer-unit",
        name: "External Transformer Unit",
        features: ["Rugged outdoor enclosure", "Customizable per customer requirement"],
        images: [{ src: `${IMG}/external-transformer-unit.jpg`, alt: "External transformer unit" }],
      },
      {
        slug: "dc-dc-ac-dc-power-supply",
        name: "DC/DC & AC/DC Power Supply",
        features: ["Complete customizable product range", "Galvanically isolated, PWM-based conversion"],
        images: [
          { src: `${IMG}/dc-ac-power-supply-1.png`, alt: "DC/DC power supply heatsink unit" },
          { src: `${IMG}/dc-ac-power-supply-2.png`, alt: "AC/DC power supply converter module" },
          { src: `${IMG}/dc-ac-power-supply-3.png`, alt: "Compact DC/DC converter module" },
        ],
      },
    ],
  },
  {
    slug: "rack-integration",
    title: "Rack Integration",
    intro: "Electrical systems with PLC control and automatic motorized control.",
    products: [
      {
        slug: "plc-controlled-rack-system",
        name: "PLC-Controlled Electrical Rack System",
        features: ["PLC control", "Automatic motorized control", "Factory-integrated and tested"],
        images: [
          { src: `${IMG}/rack-integration-row.jpg`, alt: "Row of integrated PLC-controlled electrical racks" },
          { src: `${IMG}/rack-integration-panel-closed.jpg`, alt: "PLC-controlled rack, closed front" },
          { src: `${IMG}/rack-integration-panel-open.jpg`, alt: "PLC-controlled rack, open showing wiring and PLC" },
        ],
      },
    ],
  },
  {
    slug: "smart-rack",
    title: "Integrated Smart Rack Solution",
    intro:
      "Indoor, air-conditioned server enclosures for mission-critical IT and networking environments — Data Centres, CCTV Control Rooms, Smart City ICCC, Government and Industrial IT infrastructure.",
    products: [
      {
        slug: "smart-rack",
        name: "Icon Smart Rack",
        features: [
          "LCD/LED display for real-time temperature and humidity monitoring",
          "Inbuilt fire and smoke detector with hooter",
          "Air-conditioned indoor enclosure",
        ],
        images: [{ src: `${IMG}/smart-rack-single.jpg`, alt: "Icon Smart Rack, single unit" }],
      },
      {
        slug: "smart-rack-row-based",
        name: "Smart Rack Row-Based Solution",
        features: ["Row-based deployment for intelligent data centres", "Same monitoring and fire/smoke detection as single-rack unit"],
        images: [{ src: `${IMG}/smart-rack-row.jpg`, alt: "Row-based smart rack solution for data centres" }],
      },
    ],
  },
  {
    slug: "submarine-power-systems",
    title: "Power System — Submarine Application",
    intro: "Power distribution and remote power-on modules engineered for submarine deployment.",
    products: [
      {
        slug: "submarine-power-distribution",
        name: "Power Distribution",
        features: ["Submarine-application rated enclosure", "Isolated internal distribution wiring"],
        images: [
          { src: `${IMG}/submarine-power-distribution.jpg`, alt: "Submarine power distribution unit" },
          { src: `${IMG}/submarine-power-distribution-open.jpg`, alt: "Submarine power distribution unit, open" },
        ],
      },
      {
        slug: "remote-power-on-module",
        name: "Remote Power ON Module",
        features: ["Local/remote on-off switch panel", "LED status indication per unit"],
        images: [
          { src: `${IMG}/submarine-remote-power-module.jpg`, alt: "Remote power ON module, front panel" },
          { src: `${IMG}/submarine-remote-power-module-open.jpg`, alt: "Remote power ON module, internal wiring" },
        ],
      },
    ],
  },
  {
    slug: "custom-wire-harnesses",
    title: "Custom Wire Harnesses",
    intro:
      "BTP & BTS harness manufacturing expertise across power, communication, radio antenna, GPS/navigation, mobile communication, RF Bluetooth/WLAN, vehicle auxiliary heating and sensor cable applications.",
    products: [
      {
        slug: "custom-wire-harnesses",
        name: "Custom Wire Harness Range",
        features: [
          "Power cables",
          "Communication and radio antenna harnesses",
          "GPS telematics / navigation cable",
          "Mobile communication and RF Bluetooth / WLAN harnesses",
          "Vehicle auxiliary heating harness",
          "Sensor cable",
        ],
        images: Array.from({ length: 10 }, (_, i) => ({
          src: `${IMG}/harness-${String(i + 1).padStart(2, "0")}.jpg`,
          alt: `Custom wire harness assembly, sample ${i + 1}`,
        })),
      },
    ],
  },
  {
    slug: "outdoor-dc-power-supply",
    title: "Outdoor DC Power Supply for Field Equipment",
    intro:
      "Rugged IP65 outdoor junction box with built-in DC power UPS, for Oil & Refinery, Railways, Smart City and City Surveillance deployments.",
    products: [
      {
        slug: "outdoor-dc-power-supply",
        name: "Outdoor DC Power Supply",
        features: [
          "IP65-rated enclosure, protection against dust and heavy rain",
          "30-minute Li-ion battery backup with in-built BMS",
          "8-port Active PoE+ switch, IEEE 802.3 af/at compliant, 150W PoE budget",
          "Wide AC input, 90–264 VAC",
          "Fully discharged battery recharges in under 2 hours",
          "Galvanically isolated PWM AC/DC and DC/DC conversion",
          "6kV surge protection at power input and Ethernet ports",
          "Operating range: -10°C to +55°C",
          "Pole, wall or rack mount",
        ],
        images: [
          { src: `${IMG}/outdoor-dc-supply-closed.jpg`, alt: "Outdoor DC power supply junction box, closed" },
          { src: `${IMG}/outdoor-dc-supply-open.jpg`, alt: "Outdoor DC power supply junction box, open showing electronics" },
          { src: `${IMG}/outdoor-dc-supply-rackmount.png`, alt: "Outdoor DC power supply, rack-mount front panel" },
        ],
      },
    ],
  },
  {
    slug: "voltage-regulation",
    title: "Digital Voltage Regulator",
    intro: "Direct AC-AC conversion voltage regulation with no moving parts.",
    products: [
      {
        slug: "digital-voltage-regulator",
        name: "Digital Voltage Regulator",
        features: [
          "Direct AC-AC conversion for improved efficiency and reliability",
          "Rapid cycle-by-cycle correction, 3000V per second",
          "IGBT power stage; input range 90–300V (1Ph), 156–300V (3Ph)",
          "Output regulation: 220V ±1% settable (1Ph), 400V ±1% settable (3Ph)",
          "EMI/RFI protected, no distortion in output waveform",
          "Over/under voltage and short-circuit cut-off",
          "LCD display for input voltage, output voltage and load",
          "No moving parts — long life, no maintenance",
        ],
        images: [{ src: `${IMG}/voltage-regulator.jpg`, alt: "Digital voltage regulator with isolation transformer" }],
      },
    ],
  },
  {
    slug: "modular-parallel-power-supply",
    title: "Modular Parallel Power Supply Sub-systems",
    intro: "Switched-mode rectifier systems scaling from 3kW to 67.5kW.",
    products: [
      {
        slug: "modular-rectifier",
        name: "Modular Rectifier",
        features: [
          "Switched-mode rectifiers, 3kW to 67.5kW (customizable)",
          "Wide input range: 85–264V (3-phase), 360–460V",
          "Output voltages: 12V, 24V, 48V, 60V, 110V, 220V as required",
          "Hot-pluggable modules, n+1 redundancy",
          "IGBT-based digital controller",
          "Efficiency up to 91%, power factor 0.99",
        ],
        images: [{ src: `${IMG}/rectifier-module.jpg`, alt: "Modular parallel power supply rectifier" }],
      },
    ],
  },
];

export function findProduct(categorySlug: string, productSlug: string) {
  const category = productCategories.find((c) => c.slug === categorySlug);
  const product = category?.products.find((p) => p.slug === productSlug);
  return category && product ? { category, product } : null;
}
