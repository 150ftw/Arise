export type SolutionPillar = {
  slug: string;
  title: string;
};

export const solutionPillars: SolutionPillar[] = [
  { slug: "security-surveillance", title: "Security & Surveillance Solutions" },
  { slug: "voice-data", title: "IP-PABX, Voice & Data Solutions" },
  { slug: "surge-protection", title: "Lightning Prevention, Surge Protection & Telecom Infra" },
  { slug: "solar-power", title: "Solar Based Power Solutions" },
  { slug: "networking", title: "Networking (LAN, WAN, WiFi & GEPON)" },
  { slug: "power-management", title: "Power Supply & Management System" },
  { slug: "video-conference", title: "Video Conference & AV Solution" },
  { slug: "data-centre", title: "Data Center & Command Control Center" },
];

export const dataCentreHubItems = [
  "Software",
  "Servers",
  "Storage",
  "Networking",
  "Infrastructure",
  "Cabling",
  "Environment Monitoring",
  "Backup Power",
  "Cooling",
];

export const criticalSectors = [
  "Public Safety",
  "Food Production",
  "Health",
  "Government",
  "Defence and National Security",
  "Transport",
  "Communications",
  "Space",
  "Banking",
  "Utilities",
];

export const dataCentreObjectives = [
  "Tier III/IV architecture",
  "40G backbone with 1/10G direct connectivity",
  "Spine-leaf architecture to avoid multiple hops",
  "Centralized monitoring and management from an on-site NOC",
  "Centralized security policies — user authentication, web filtering, anti-malware, anti-spam",
  "SDC-enabled network from day one",
  "Low smoke, low flame (plenum-rated) structured cabling",
  "Mail, audio conferencing, VOIP and VMS integration",
  "5-year onsite comprehensive support",
  "NAC operational from day one",
  "Traffic segregation through VLAN",
  "Server segregation through zones (DMZ, MZ)",
  "Ingress/egress (East-West and North-South) traffic segregation through firewall",
  "Implementation of QoS",
];

export const voiceDataFeatures = {
  intro:
    "World-class IP Exchange, partnered with ALCATEL-LUCENT for voice solutions. Single-box interfaces for E1 PRI, IP, E&M, Digital and IP Subscribers, Analogue Subscribers, Voicemail and voice guidance.",
  points: [
    "Redundant call server eliminates any single point of failure",
    "Scalable from 100 to 50,000 users and up to 1,000 trunks",
    "Redundant servers, easy expansion via licenses and cards",
    "Media independent — analog, digital, IP, wireless and soft phones",
    "Distributed, universal networking — IP, ISDN/PSTN, ATM, Frame relay",
    "Open standards — TCP/IP, CSTA, H.323, 802.1p/Q, TOS/DiffServ, LDAP, SNMP, DHCP, SIP, XML, IMAP4",
    "Embedded applications — mobility, contact centre, messaging",
  ],
};

export const cctvFeatures = [
  "IP Bullet, PTZ and PTZ Dome cameras from leading OEMs",
  "HD resolution",
  "Wide Dynamic Range (WDR)",
  "Video management",
  "Intelligence & reliability",
  "Mobility & scalability",
];

export const commandControlFeatures = {
  intro: "Integrates multiple technologies into a single window for alerts and management — Situational Awareness Matters.",
  integratedSystems: [
    "Access Control",
    "Video System",
    "Intrusion Detection",
    "Fire Alarm",
    "Intercom",
    "Heating",
    "Water",
    "Electricity",
  ],
  outputs: [
    "Graphical User Interface",
    "Video Wall",
    "Alarm Monitoring",
    "Incident Management",
    "Workflow",
    "Alarm Broadcast",
    "Reporting",
    "Return on Investment",
  ],
  videoAnalytics: [
    "Perimeter Trip Wire",
    "Crossing Virtual Line",
    "Object/Vehicle Counting Analytics",
    "Stopped Vehicle Detection",
    "Crowd Detection",
    "Abandoned Baggage Detection",
    "Missing Object Detection",
    "Camera Tampering Detection",
  ],
};

export const securitySuiteAcronyms = [
  { code: "ATCC", name: "Automatic Traffic Counter and Classification" },
  { code: "ATMS", name: "Advanced Traffic Management System" },
  { code: "VIDS", name: "Video Incident Detection System" },
  { code: "PIDS", name: "Perimeter Intrusion Detection System" },
  { code: "ICCC", name: "Integrated Command Control Centre" },
  { code: "FRS", name: "Facial Recognition Solution" },
  { code: "ANPR", name: "Automatic Number Plate Recognition" },
  { code: "ADAS", name: "Advance Driver Assistance System" },
  { code: "PMS", name: "Parking Management Solution" },
  { code: "FDS", name: "Fire and Smoke Detection" },
];

export const networkingFeatures = [
  "Master-slave architecture — cascade unlimited MCUs in a distributed, load-balanced setup",
  "MCU combining and splitting — each MCU acts independently as master or slave, cross-utilising idle resources",
  "MCU upgradable in additions of 1, not in blocks of 5 or 10",
  "Unlimited recording of complete VC meetings — audio, video and data",
  "Standby option — failover to a second MCU/server within minutes",
  "H.264 VBR/CBR compression for high-quality video conferencing from 80–128 Kbps",
  "Optional TelePresence software module with high-end HDMI decoder card for multi-display viewing",
  "Inbuilt H.323 gateway with H.239 support for hardware VC devices",
];
