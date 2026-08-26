export type TimelineMilestone = {
  year: string;
  title: string;
  category: "Founding" | "Expansion" | "Defence & Aerospace" | "Innovation" | "Scale";
  description: string;
  highlights: string[];
  badge: string;
};

export const companyTimeline: TimelineMilestone[] = [
  {
    year: "2001",
    title: "Foundation & Power Electronics R&D",
    category: "Founding",
    badge: "Origin",
    description:
      "Icon Power Solutions was incorporated by technocrats in Gurugram with a vision to deliver custom power electronics and precision electrical systems.",
    highlights: [
      "Set up first R&D laboratory for custom switch-mode power supplies",
      "Supplied custom rectifiers and power converters to domestic telecoms",
      "Established foundational ISO 9001 quality management framework",
    ],
  },
  {
    year: "2006",
    title: "Telecom Boom & Backward Integration",
    category: "Expansion",
    badge: "Scale",
    description:
      "Expanded manufacturing footprint to support PAN-India telecom infrastructure rollout with outdoor DC power systems, enclosures, and battery solutions.",
    highlights: [
      "Commissioned dedicated CNC sheet metal fabrication and powder coating lines",
      "Empanelled with BSNL, TCIL, and private telecom tower operators",
      "Shipped 10,000+ outdoor weatherproof DC power cabinets",
    ],
  },
  {
    year: "2012",
    title: "Defence & Aerospace AS9100D Entry",
    category: "Defence & Aerospace",
    badge: "Mil-Grade",
    description:
      "Achieved aerospace AS9100D certification and began manufacturing high-reliability tactical shelters, modular PPS, and submarine power systems.",
    highlights: [
      "Awarded critical projects for Indian Army, Air Force, DRDO, and BEL",
      "Developed MIL-STD-810G and MIL-STD-461 compliant power distribution units",
      "Inaugurated dedicated cleanroom wiring harness manufacturing cell",
    ],
  },
  {
    year: "2017",
    title: "IMT Manesar Mega Facility Commissioning",
    category: "Expansion",
    badge: "Infrastructure",
    description:
      "Constructed and inaugurated the state-of-the-art facility at Plot 112-113, Sector-5, IMT Manesar, Gurugram, housing advanced CNC machines, laser cutters, and climate chambers.",
    highlights: [
      "Expanded total manufacturing footprint to over 50,000+ sq. ft.",
      "Integrated Amada CNC turret punch presses and automated fiber lasers",
      "50% of workforce dedicated directly to advanced manufacturing",
    ],
  },
  {
    year: "2021",
    title: "Subsea & Maritime Power Engineering",
    category: "Innovation",
    badge: "Subsea Tech",
    description:
      "Engineered specialized high-density DC power systems and remote modules for underwater and maritime naval programs.",
    highlights: [
      "Galvanic isolation and acoustic shock-absorbing mounting designs",
      "Expanded export footprint across 6 international defense prime markets",
      "Launched Lithium-ion 48V battery storage with cloud IoT telemetry",
    ],
  },
  {
    year: "2024+",
    title: "Smart Racks & Next-Gen Critical Infra",
    category: "Scale",
    badge: "Future Ready",
    description:
      "Pioneering integrated Smart Rack rows, in-row precision cooling, and turnkey PSIM command center deployments for AI data centers and smart infrastructure.",
    highlights: [
      "Row-based modular data center cold-aisle containment systems",
      "Integrated DCIM real-time telemetry and automated power optimization",
      "Over 25+ years of zero-fail mission-critical engineering excellence",
    ],
  },
];

export type FactoryStation = {
  id: string;
  name: string;
  facility: "IMT Manesar HQ" | "Gurugram Plant";
  area: string;
  tagline: string;
  description: string;
  image: string;
  capabilities: string[];
  equipment: string[];
  metrics: { label: string; value: string }[];
};

export const factoryStations: FactoryStation[] = [
  {
    id: "station-cnc-laser",
    name: "Precision CNC Sheet Metal & Laser Cutting",
    facility: "IMT Manesar HQ",
    area: "Bay 1 — Heavy Fabrication",
    tagline: "Sub-millimeter accuracy for ruggedized enclosures and sub-racks",
    description:
      "Fully automated fabrication cell equipped with multi-axis CNC turret punch presses, fiber laser cutting systems, and precision hydraulic press brakes capable of processing CRCA, aluminum, and 316L stainless steel.",
    image: "/images/products/rack-integration-row.jpg",
    capabilities: [
      "CRCA, Aluminum (Al 5052/6061), and Marine Stainless Steel 316L",
      "±0.1 mm dimensional tolerance on complex folded chassis",
      "High-speed automated nesting for optimized material utilization",
    ],
    equipment: [
      "Amada CNC Turret Punch Press (30 Ton)",
      "Bystronic 4kW High-Precision Fiber Laser Cutter",
      "CNC Multi-Axis Synchronized Hydraulic Press Brakes",
    ],
    metrics: [
      { label: "Daily Output", value: "150+ Racks/Cabinets" },
      { label: "Tolerance", value: "±0.1 mm" },
      { label: "Material Range", value: "0.8mm – 12mm" },
    ],
  },
  {
    id: "station-harness",
    name: "Automated Wiring Harness & Cable Assembly Cell",
    facility: "IMT Manesar HQ",
    area: "Bay 2 — Aerospace Clean Cell",
    tagline: "Zero-defect point-to-point looms with automated continuity testing",
    description:
      "Dedicated ESD-controlled harness shop assembling complex aerospace, defense, and power wiring looms. Features computerized cut, strip, crimp, non-destructive UV laser wire printing, and 100% automated high-voltage test jigs.",
    image: "/images/products/harness-02.jpg",
    capabilities: [
      "Mil-Spec MIL-DTL-38999, Amphenol, Radiall, and LEMO connectors",
      "Raychem Spec 44/55 and Teflon high-temperature wire assemblies",
      "Automated 1500V DC Hi-Pot insulation and milliohm continuity verification",
    ],
    equipment: [
      "Schleuniger Computerized Wire Stripper & Crimp Center",
      "Cirris Automated Multi-Pin Loom Testing Stations",
      "Laser Non-Contact Wire Identification & Marking Machine",
    ],
    metrics: [
      { label: "Annual Looms", value: "50,000+ Units" },
      { label: "Test Pass Rate", value: "100% Automated" },
      { label: "Standards", value: "IPC/WHMA-A-620 Class 3" },
    ],
  },
  {
    id: "station-powder-coating",
    name: "7-Tank Pre-Treatment & Powder Coating Line",
    facility: "IMT Manesar HQ",
    area: "Bay 3 — Surface Finishing",
    tagline: "Corrosion resistance exceeding 1,000+ hours of salt spray testing",
    description:
      "Automated conveyorized powder coating plant with multi-stage chemical cleaning, de-greasing, zinc-phosphating/nano-ceramic pre-treatment, and high-durability epoxy-polyester electrostatic powder application.",
    image: "/images/products/cabinet-hex-ip65.jpg",
    capabilities: [
      "Pure Polyester, Epoxy-Polyester, and PU weather-resistant coatings",
      "C4 / C5 Marine-grade atmospheric corrosion resistance",
      "Uniform 70–90 micron dry film thickness (DFT) control",
    ],
    equipment: [
      "Automated 7-Tank Pre-Treatment Chemical Immersion Line",
      "Nordson Electrostatic Powder Spray Booth & Cyclone Recovery",
      "Continuous Gas-Fired Curing Oven with Digital Thermal Profiling",
    ],
    metrics: [
      { label: "Salt Spray Rating", value: "1,000+ Hours (ASTM B117)" },
      { label: "DFT Uniformity", value: "80 ± 10 µm" },
      { label: "Colors / Finishes", value: "RAL 7035, 7021, Olive Drab" },
    ],
  },
  {
    id: "station-power-electronics",
    name: "Power Electronics SMT & Module Integration",
    facility: "Gurugram Plant",
    area: "Bay 4 — Electronics Assembly",
    tagline: "High-efficiency rectifiers, DC-DC converters & STS subsystems",
    description:
      "Cleanroom electronic assembly floor dedicated to mounting, soldering, and calibrating switch-mode power supply (SMPS) rectifiers, microprocessor control units, DC distribution busbars, and static transfer switches.",
    image: "/images/products/rectifier-module.jpg",
    capabilities: [
      "96%+ ultra-high efficiency rectifier module calibration",
      "Automated optical inspection (AOI) for PCB component alignment",
      "Galvanic isolation transformer assembly and magnetic core winding",
    ],
    equipment: [
      "Precision SMT Pick-and-Place Mounting System",
      "Multi-Zone Nitrogen Reflow Soldering Oven",
      "Chroma Programmable AC/DC Electronic Load Banks",
    ],
    metrics: [
      { label: "Module Efficiency", value: "> 96.5%" },
      { label: "Power Range", value: "1 kVA – 120 kVA" },
      { label: "Quality Checks", value: "100% In-Circuit Test" },
    ],
  },
  {
    id: "station-testing-lab",
    name: "Environmental & MIL-STD Qualification Lab",
    facility: "IMT Manesar HQ",
    area: "Bay 5 — Testing & Metrology",
    tagline: "Rigorous thermal shock, vibration, and IP65 ingress qualification",
    description:
      "On-site test laboratory equipped with programmable climatic environmental chambers, electrodynamic vibration tables, rain test rigs, and power quality harmonic analyzers to qualify systems to defense standards.",
    image: "/images/products/cabinet-aircon-ip65.jpg",
    capabilities: [
      "MIL-STD-810G thermal shock (-40°C to +85°C) and altitude testing",
      "MIL-STD-167 / 901D electrodynamic vibration and shock endurance",
      "IP55 & IP65 high-pressure water spray and dust ingress validation",
    ],
    equipment: [
      "Thermotron Climatic Thermal Shock Chamber (1,000L)",
      "Unholtz-Dickie Electrodynamic Vibration Test Shaker",
      "Fluke High-Precision 3-Phase Power Quality Analyzer",
    ],
    metrics: [
      { label: "Temp Testing", value: "-40°C to +85°C" },
      { label: "Ingress Testing", value: "IP55 / IP65 / IP68" },
      { label: "Burn-in Standard", value: "72-Hour Full-Load" },
    ],
  },
  {
    id: "station-integration",
    name: "Full-System Staging & 72-Hour Burn-in Bay",
    facility: "IMT Manesar HQ",
    area: "Bay 6 — System Integration",
    tagline: "End-to-end multi-rack staging, live load testing and customer FAT",
    description:
      "Spacious final integration area where complete 24U–42U smart rack rows, modular shelter PPS units, and submarine distribution panels are staged, wired, cold-tested, and subjected to a mandatory 72-hour continuous burn-in.",
    image: "/images/products/smart-rack-row.jpg",
    capabilities: [
      "Simultaneous staging of up to 50+ full-height server rack systems",
      "Factory Acceptance Test (FAT) facility with dedicated client viewing room",
      "Integrated telemetry testing with live SNMP / Modbus DCIM dashboards",
    ],
    equipment: [
      "500 kVA Regenerative Grid Simulator & Active Load Bank",
      "Automated Hi-Pot & Insulation Resistance Test Stations",
      "Real-Time SCADA Multi-Channel Data Acquisition Loggers",
    ],
    metrics: [
      { label: "Staging Bay", value: "50+ Systems at once" },
      { label: "Burn-in Time", value: "72 Hours Continuous" },
      { label: "FAT Ready", value: "100% Pre-tested" },
    ],
  },
];
