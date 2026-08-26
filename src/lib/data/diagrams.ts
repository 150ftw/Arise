export const solarDiagram = {
  width: 720,
  height: 380,
  nodes: [
    { id: "solar", label: "Solar PV Module", sublabel: "& Charge Controller", x: 20, y: 20, w: 170, h: 56 },
    { id: "grid", label: "Grid", sublabel: "Mains / DG", x: 260, y: 20, w: 170, h: 56 },
    { id: "ems", label: "Energy Management System", x: 130, y: 150, w: 220, h: 60, accent: true },
    { id: "battery", label: "Battery Bank", x: 470, y: 150, w: 170, h: 56 },
    { id: "output", label: "DC 48V Output", sublabel: "LED Light & Fan", x: 130, y: 280, w: 220, h: 56 },
    { id: "console", label: "Console", sublabel: "Remote Monitoring via NMS", x: 470, y: 280, w: 170, h: 56 },
  ],
  edges: [
    { from: "solar", to: "ems" },
    { from: "grid", to: "ems" },
    { from: "ems", to: "battery" },
    { from: "ems", to: "output" },
    { from: "console", to: "ems", dashed: true },
  ],
};

export const powerManagementDiagram = {
  width: 820,
  height: 480,
  nodes: [
    { id: "dg", label: "DG", sublabel: "62.5 KVA", x: 20, y: 20, w: 150, h: 56 },
    { id: "mains", label: "Mains", sublabel: "Utility Grid", x: 20, y: 130, w: 150, h: 56 },
    { id: "console", label: "Console", sublabel: "Remote Monitoring", x: 20, y: 380, w: 150, h: 56 },
    { id: "pms", label: "Power Management System", x: 250, y: 75, w: 190, h: 64, accent: true },
    { id: "dvr", label: "Digital Voltage Regulator", sublabel: "with Isolation Transformer", x: 530, y: 20, w: 190, h: 60 },
    { id: "ups", label: "Modular UPS", sublabel: "40 KW (2+1)", x: 530, y: 150, w: 190, h: 56 },
    { id: "battery", label: "Battery Bank", sublabel: "for UPS", x: 530, y: 270, w: 190, h: 56 },
    { id: "bypass", label: "Bypass Switch", x: 300, y: 270, w: 150, h: 56 },
    { id: "acdist", label: "AC Distribution Box", x: 300, y: 380, w: 150, h: 56 },
    { id: "load", label: "Load", x: 530, y: 380, w: 190, h: 56, accent: true },
  ],
  edges: [
    { from: "dg", to: "pms" },
    { from: "mains", to: "pms" },
    { from: "pms", to: "dvr" },
    { from: "dvr", to: "ups" },
    { from: "ups", to: "battery" },
    { from: "ups", to: "bypass" },
    { from: "bypass", to: "acdist" },
    { from: "acdist", to: "load" },
    { from: "console", to: "pms", dashed: true },
  ],
};
