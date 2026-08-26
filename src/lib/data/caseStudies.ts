export type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  client: string;
  sector: "Defence & Aerospace" | "Telecom & Energy" | "Smart Cities & Security" | "Rail & Transit";
  location: string;
  image: string;
  summary: string;
  challenge: string;
  solution: string;
  impact: {
    metric: string;
    label: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  tags: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-01",
    slug: "high-altitude-radar-power",
    title: "High-Altitude Tactical Radar Power & Shelter PPS",
    client: "Indian Armed Forces & Defence Primes",
    sector: "Defence & Aerospace",
    location: "Ladakh & Northern High-Altitude Sector (14,000+ ft)",
    image: "/images/products/pps-version1.jpg",
    summary:
      "Engineered ruggedized modular shelter power distribution and DC power plants operable under extreme sub-zero temperatures (-40°C) with dual-redundant automatic static transfer.",
    challenge:
      "Remote high-altitude defense radar shelters suffered from frequent grid dropouts, severe thermal cycling (-40°C to +45°C), and low atmospheric pressure, requiring power supplies that operate without derating.",
    solution:
      "Developed an AS9100D-certified Modular PPS Shelter Unit with integrated IP65 thermal regulation, intelligent battery heating jackets, and Mil-grade vibration isolation.",
    impact: [
      { metric: "99.999%", label: "Uptime achieved in sub-zero trials" },
      { metric: "-40°C", label: "Cold-start operational temperature" },
      { metric: "50+ Sites", label: "Deployed across forward border posts" },
    ],
    specifications: [
      { label: "Power Rating", value: "24 kVA Dual Redundant" },
      { label: "Operating Temp", value: "-40°C to +55°C" },
      { label: "Ingress Rating", value: "IP65 Enclosure / MIL-STD-810G" },
      { label: "Transfer Time", value: "< 4ms Seamless STS" },
    ],
    tags: ["Modular PPS", "MIL-STD-810G", "Thermal Management", "Defence"],
  },
  {
    id: "cs-02",
    slug: "submarine-dc-power-distribution",
    title: "Submarine Remote Power & Distribution Unit",
    client: "Naval Defense & Maritime Engineering",
    sector: "Defence & Aerospace",
    location: "Naval Dockyards & Maritime Vessels",
    image: "/images/products/submarine-power-distribution.jpg",
    summary:
      "Custom-designed compact high-density DC power distribution sub-assemblies engineered for shock-isolated maritime and subsea vessels.",
    challenge:
      "Tight envelope constraints inside maritime hulls with zero tolerance for electromagnetic interference (EMI/EMC) and high underwater acoustic shock requirements.",
    solution:
      "Engineered bespoke stainless-steel sub-rack distribution panels with MIL-STD-461 EMI filtering, hermetic internal connections, and modular hot-swappable DC-DC modules.",
    impact: [
      { metric: "40% Less Space", label: "Volume reduction vs legacy racks" },
      { metric: "MIL-STD-461", label: "Full EMI/EMC compliance passed" },
      { metric: "100%", label: "Zero-fail subsea operational record" },
    ],
    specifications: [
      { label: "Input Voltage", value: "220V DC / 415V 3-Phase AC" },
      { label: "Isolation", value: "Galvanic Isolation > 2.5 kV" },
      { label: "Shock Resistance", value: "MIL-STD-901D Grade A Heavy Shock" },
      { label: "Enclosure", value: "Marine-Grade 316L Stainless Steel" },
    ],
    tags: ["Subsea Systems", "Shock Resistance", "EMI/EMC", "Naval"],
  },
  {
    id: "cs-03",
    slug: "smart-city-command-center",
    title: "Integrated Command & Control Center (ICCC) Infrastructure",
    client: "State Government & Municipal Corporation",
    sector: "Smart Cities & Security",
    location: "Capital City Municipal Operations Center",
    image: "/images/products/smart-rack-row.jpg",
    summary:
      "Turnkey Tier-III data center infrastructure including aisle containment smart racks, precision cooling, and integrated PSIM situational awareness displays.",
    challenge:
      "The city required 24/7 centralized monitoring for 4,000+ CCTV streams, traffic sensors, and emergency dispatch without single point of failure and under tight power budgets.",
    solution:
      "Delivered a row-based Smart Rack cold-aisle containment system with in-row precision cooling, automatic fire suppression, and unified DCIM remote power management.",
    impact: [
      { metric: "1.25 PUE", label: "Power Usage Effectiveness rating" },
      { metric: "4,000+", label: "Integrated security camera feeds" },
      { metric: "Zero Downtime", label: "Continuous 24/7/365 operations" },
    ],
    specifications: [
      { label: "Architecture", value: "Tier III Data Center Standard" },
      { label: "Cooling Tech", value: "In-Row Precision Chilled Water" },
      { label: "Racks Deployed", value: "24x 42U High-Density Server Racks" },
      { label: "Monitoring", value: "SNMP / Modbus DCIM with Touchscreen" },
    ],
    tags: ["Smart City", "Tier-III", "Precision Cooling", "Smart Racks"],
  },
  {
    id: "cs-04",
    slug: "pan-india-telecom-storage",
    title: "PAN-India 48V Lithium BTS Energy Storage Rollout",
    client: "National Telecom Operator (BSNL / TCIL)",
    sector: "Telecom & Energy",
    location: "Over 3,500+ BTS Sites across 12 Circles",
    image: "/images/products/battery-48v-lithium.jpg",
    summary:
      "Replacement of aging lead-acid battery banks with smart 48V Lithium-ion communication batteries with cloud telemetry across off-grid and weak-grid towers.",
    challenge:
      "Remote towers experienced heavy battery degradation, high diesel generator fuel costs, and battery theft, necessitating smart BMS with remote tracking.",
    solution:
      "Supplied and commissioned 48V/100Ah & 48V/200Ah Lithium Battery Systems with integrated anti-theft GPS, intelligent CAN/RS485 BMS, and 15-year design life.",
    impact: [
      { metric: "62% Fuel Cut", label: "Diesel generator runtime reduction" },
      { metric: "3,500+ Towers", label: "Modernized nationwide in 18 months" },
      { metric: "3x Cycle Life", label: "4,000+ cycles @ 80% DoD" },
    ],
    specifications: [
      { label: "Nominal Voltage", value: "48.0 V (51.2 V LiFePO4)" },
      { label: "Capacity Range", value: "100Ah / 200Ah Rack-Mountable" },
      { label: "Communication", value: "RS485, CAN, SNMP Remote Telemetry" },
      { label: "Certifications", value: "IEC 62619, CE, UN38.3" },
    ],
    tags: ["Energy Storage", "Telecom BTS", "Lithium Battery", "Green Energy"],
  },
  {
    id: "cs-05",
    slug: "metro-signaling-power-backup",
    title: "Metro Rail Critical Signaling & Interlocking Power System",
    client: "Alstom & Urban Metro Rail Corporation",
    sector: "Rail & Transit",
    location: "Metro Line Extension Phase II",
    image: "/images/products/rack-integration-panel-closed.jpg",
    summary:
      "High-reliability PLC-controlled electrical rack integration and static inverters ensuring zero-glitch power for train signaling and automated interlocking.",
    challenge:
      "Signaling track circuits demand harmonic-free, microsecond-transfer power supplies resilient to severe railway traction electrical noise and vibration.",
    solution:
      "Fabricated custom IP55 enclosures housing dual-online static bypass systems, galvanic isolation transformers, and automated PLC changeover controls.",
    impact: [
      { metric: "< 2ms", label: "Interlocking power transfer time" },
      { metric: "SIL-4", label: "Safety integrity alignment" },
      { metric: "24 Stations", label: "Fully protected along 32 km corridor" },
    ],
    specifications: [
      { label: "System Rating", value: "3x 40 kVA Parallel Redundant" },
      { label: "THD Voltage", value: "< 2% under full non-linear load" },
      { label: "Standards", value: "RDSO / EN 50121-4 Railway EMC" },
      { label: "Control", value: "Redundant PLC with Modbus TCP/IP" },
    ],
    tags: ["Metro Rail", "Signaling", "Power Quality", "PLC Automation"],
  },
  {
    id: "cs-06",
    slug: "aerospace-tactical-wiring-harnesses",
    title: "Mil-Spec Tactical Wiring Harnesses & Sub-Assemblies",
    client: "Global Aerospace & UAV Primes (Elbit, IAI)",
    sector: "Defence & Aerospace",
    location: "Domestic & International Aerospace Programs",
    image: "/images/products/harness-01.jpg",
    summary:
      "Automated design and high-volume manufacture of ruggedized, laser-marked wiring harnesses for airborne surveillance and ground telemetry stations.",
    challenge:
      "Complex pinouts with zero margin for crimping resistance variances, requiring 100% automated continuity and high-potential insulation testing.",
    solution:
      "Implemented a dedicated AS9100D harness cell with Schleuniger automated cut/strip/crimp machinery, UV laser wire marking, and Cirris automated test jigs.",
    impact: [
      { metric: "100%", label: "Automated point-to-point test pass" },
      { metric: "AS9100D", label: "Aerospace quality compliance" },
      { metric: "50,000+", label: "Harness assemblies shipped globally" },
    ],
    specifications: [
      { label: "Wire Standards", value: "MIL-W-22759 / Raychem Spec 44/55" },
      { label: "Connectors", value: "MIL-DTL-38999 Series III / Amphenol" },
      { label: "Testing", value: "1500V DC Hi-Pot & 4-Wire Resistance" },
      { label: "Marking", value: "UV Laser Non-Destructive Wire Coding" },
    ],
    tags: ["Wiring Harness", "AS9100D", "Aerospace", "Mil-Spec"],
  },
];
