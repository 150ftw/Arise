"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Radio,
  Anchor,
  Server,
  Factory,
  Cpu,
  BatteryCharging,
  Gauge,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Domain = "defence" | "telecom" | "naval" | "datacenter" | "industrial";

const DOMAINS = [
  { id: "defence" as Domain, name: "Defence & Tactical", icon: Shield, defaultLoad: 12 },
  { id: "telecom" as Domain, name: "Telecom & 5G", icon: Radio, defaultLoad: 24 },
  { id: "naval" as Domain, name: "Submarine & Naval", icon: Anchor, defaultLoad: 48 },
  { id: "datacenter" as Domain, name: "Data Center Tier IV", icon: Server, defaultLoad: 48 },
  { id: "industrial" as Domain, name: "Heavy Industrial", icon: Factory, defaultLoad: 24 },
];

const BACKUP_HOURS = [
  { label: "30 Min (Grid Buffer)", value: 0.5 },
  { label: "2 Hours (Standard)", value: 2 },
  { label: "4 Hours (Critical)", value: 4 },
  { label: "8+ Hours (Deep Field)", value: 8 },
];

const INGRESS_OPTIONS = [
  { id: "ip20", name: "IP20 Indoor Clean", desc: "For controlled climate NOCs & server rooms" },
  { id: "ip55", name: "IP55 Outdoor Weatherproof", desc: "Rain, sand and dust protected field enclosure" },
  { id: "ip65", name: "IP65 Harsh / Military", desc: "Sealed heat-exchanger, naval shock & blast rated" },
];

export function InteractiveConfigurator() {
  const [selectedDomain, setSelectedDomain] = useState<Domain>("defence");
  const [loadKw, setLoadKw] = useState(12);
  const [backupHour, setBackupHour] = useState(2);
  const [ingress, setIngress] = useState("ip65");

  // Dynamic calculations
  const batteryKwh = Math.round(loadKw * backupHour * 1.15);
  const efficiency = loadKw >= 24 ? "97.2%" : "96.4%";
  const redundancy = loadKw > 12 ? "N+1 Hot-Swappable Active-Parallel" : "Redundant Dual-Bus";

  const getArchitecture = () => {
    switch (selectedDomain) {
      case "defence":
        return {
          title: "Modular PPS (Power Supply for Shelter) Architecture",
          product: "Modular PPS — Version 2",
          productLink: "/products#modular-pps",
          enclosure: ingress === "ip65" ? "HEX-Based IP65 Military Enclosure" : "OD 42U/21U Dual Chamber",
          features: [
            "Redundant 48V/100A rectifiers with automatic phase transfer",
            "Vibration-isolated MIL-STD-810H sub-rack mounting",
            "Lithium LiFePO4 battery management with remote telemetry",
            "Class I+II 40kA lightning surge suppression",
          ],
        };
      case "telecom":
        return {
          title: "High-Efficiency Outdoor Telecom Power Plant",
          product: "Outdoor DC Power Supply for Field Equipment",
          productLink: "/products#outdoor-dc-power-supply",
          enclosure: "IP55/IP65 Heat-Exchanger Modular Cabinet",
          features: [
            "-48V DC bus with intelligent dynamic load priority cut-off",
            "Modular expansion slots up to 6x high-efficiency rectifier units",
            "Deep-discharge protected 48V Communication Lithium battery bank",
            "SNMP / GSM remote alarm telemetry and energy analytics",
          ],
        };
      case "naval":
        return {
          title: "Naval Submarine Dual-Bus Power Distribution System",
          product: "Submarine Power Distribution Unit",
          productLink: "/products#submarine-power-systems",
          enclosure: "Shock-Hardened IP65 Naval Steel Sub-Assembly",
          features: [
            "MIL-S-901D Heavyweight shock-isolated mounting chassis",
            "Galvanically isolated dual redundant DC/AC power buses",
            "Flame-retardant low-smoke zero-halogen (LSZH) internal cabling",
            "Zero electromagnetic interference (MIL-STD-461G EMI/EMC compliance)",
          ],
        };
      case "datacenter":
        return {
          title: "Integrated Smart Rack Row-Based Power & Cooling Solution",
          product: "Smart Rack Row-Based Solution",
          productLink: "/products#smart-rack",
          enclosure: "Cold-Aisle Contained 42U Server Smart Rack Row",
          features: [
            "In-row inverter precision cooling with hot/cold aisle containment",
            "High-density intelligent rack PDUs with per-outlet metering",
            "Modular online double-conversion UPS topology with bypass",
            "Centralized Environmental Monitoring (Temp, Humidity, Smoke, Water)",
          ],
        };
      case "industrial":
        return {
          title: "Industrial Voltage Regulation & Centralized PLC Power Distribution",
          product: "PLC-Controlled Electrical Rack System",
          productLink: "/products#rack-integration",
          enclosure: "IP55 Heavy Gauge Steel Floor-Mount Enclosure",
          features: [
            "Digital servo-controlled micro-stepping voltage stabilization",
            "Siemens/Schneider PLC automated breaker sequence controller",
            "Harmonic mitigation filter with power factor correction to >0.98",
            "Touchscreen HMI operator console with alarm diagnostic logging",
          ],
        };
    }
  };

  const arch = getArchitecture();

  return (
    <section className="border-t border-brand-line bg-brand-paper py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Interactive Configurator"
            title="Design your mission-critical power topology"
            description="Configure real-time load parameters, runtime demands, and environmental ingress to inspect recommended Icon Power architectures."
          />
          <div className="flex items-center gap-2 rounded-full border border-brand-line bg-white px-3.5 py-1.5 shadow-sm text-xs font-semibold text-brand-navy-900 w-fit shrink-0">
            <Sparkles className="h-4 w-4 text-brand-accent-500" />
            <span>Live Architecture Calculator</span>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.15fr]">
          {/* Controls Panel */}
          <div className="flex flex-col gap-6 rounded-2xl border border-brand-line bg-white p-6 sm:p-8 shadow-sm">
            {/* Step 1: Sector */}
            <div>
              <label className="text-xs font-bold tracking-wider text-brand-navy-900 uppercase">
                1. Select Application Domain
              </label>
              <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {DOMAINS.map((domain) => {
                  const Icon = domain.icon;
                  const active = selectedDomain === domain.id;
                  return (
                    <button
                      key={domain.id}
                      type="button"
                      onClick={() => {
                        setSelectedDomain(domain.id);
                        setLoadKw(domain.defaultLoad);
                      }}
                      className={`flex flex-col items-start gap-2.5 rounded-xl border p-3.5 text-left transition-all ${
                        active
                          ? "border-brand-navy-900 bg-brand-navy-900 text-white shadow-md"
                          : "border-brand-line bg-brand-paper text-brand-navy-900 hover:border-brand-navy-900/40 hover:bg-white"
                      }`}
                    >
                      <Icon className={`h-5 w-5 ${active ? "text-brand-accent-400" : "text-brand-accent-600"}`} />
                      <span className="text-xs font-semibold leading-tight">{domain.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Continuous Load */}
            <div>
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold tracking-wider text-brand-navy-900 uppercase">
                  2. Continuous Power Load
                </label>
                <span className="font-mono text-sm font-bold text-brand-accent-600">
                  {loadKw} kVA / kW
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="60"
                step="1"
                value={loadKw}
                onChange={(e) => setLoadKw(Number(e.target.value))}
                className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-lg bg-brand-line accent-brand-navy-900"
              />
              <div className="mt-1 flex justify-between font-mono text-[10px] text-brand-steel-600">
                <span>5 kVA (Tactical)</span>
                <span>24 kVA (Standard)</span>
                <span>60 kVA (High Capacity)</span>
              </div>
            </div>

            {/* Step 3: Backup Duration */}
            <div>
              <label className="text-xs font-bold tracking-wider text-brand-navy-900 uppercase">
                3. Battery Autonomy Requirement
              </label>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {BACKUP_HOURS.map((opt) => {
                  const active = backupHour === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setBackupHour(opt.value)}
                      className={`rounded-lg border px-3 py-2 text-xs font-semibold transition-all ${
                        active
                          ? "border-brand-accent-600 bg-brand-accent-50 text-brand-accent-600"
                          : "border-brand-line bg-brand-paper text-brand-navy-900 hover:border-brand-line hover:bg-white"
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Ingress Protection */}
            <div>
              <label className="text-xs font-bold tracking-wider text-brand-navy-900 uppercase">
                4. Environmental Ingress Protection
              </label>
              <div className="mt-3 flex flex-col gap-2">
                {INGRESS_OPTIONS.map((opt) => {
                  const active = ingress === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setIngress(opt.id)}
                      className={`flex items-center justify-between rounded-xl border p-3 text-left transition-all ${
                        active
                          ? "border-brand-navy-900 bg-brand-navy-950 text-white"
                          : "border-brand-line bg-white text-brand-navy-900 hover:bg-brand-paper"
                      }`}
                    >
                      <div>
                        <p className="text-xs font-semibold">{opt.name}</p>
                        <p className={`text-[11px] ${active ? "text-white/70" : "text-brand-steel-600"}`}>
                          {opt.desc}
                        </p>
                      </div>
                      <div
                        className={`h-4 w-4 rounded-full border flex items-center justify-center ${
                          active ? "border-brand-accent-400 bg-brand-accent-400" : "border-brand-line"
                        }`}
                      >
                        {active && <div className="h-1.5 w-1.5 rounded-full bg-brand-navy-950" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Real-Time Specification Readout & Recommended Architecture */}
          <div className="flex flex-col justify-between rounded-2xl border border-brand-navy-900 bg-brand-navy-950 p-6 sm:p-8 text-white shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedDomain}-${loadKw}-${backupHour}-${ingress}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-6"
              >
                <div>
                  <span className="inline-block font-mono text-xs font-semibold tracking-wider text-brand-accent-400 uppercase">
                    Calculated Topology
                  </span>
                  <h3 className="mt-1 text-xl font-semibold text-white sm:text-2xl">
                    {arch.title}
                  </h3>
                  <p className="mt-2 text-xs font-medium text-white/60">
                    Target Unit: <strong className="text-brand-accent-400">{arch.product}</strong> in {arch.enclosure}
                  </p>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-3 gap-3 border-y border-white/10 py-5">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-white/50 text-[11px]">
                      <BatteryCharging className="h-3.5 w-3.5 text-brand-accent-400" />
                      <span>Storage Capacity</span>
                    </div>
                    <span className="font-mono text-lg font-bold text-white sm:text-xl">
                      {batteryKwh} <span className="text-xs font-normal text-white/60">kWh</span>
                    </span>
                  </div>

                  <div className="flex flex-col gap-1 border-x border-white/10 px-3">
                    <div className="flex items-center gap-1.5 text-white/50 text-[11px]">
                      <Gauge className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Efficiency</span>
                    </div>
                    <span className="font-mono text-lg font-bold text-emerald-400 sm:text-xl">
                      {efficiency}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1 pl-1">
                    <div className="flex items-center gap-1.5 text-white/50 text-[11px]">
                      <Cpu className="h-3.5 w-3.5 text-brand-copper-400" />
                      <span>Redundancy</span>
                    </div>
                    <span className="font-mono text-xs font-semibold text-white leading-tight">
                      {redundancy}
                    </span>
                  </div>
                </div>

                {/* Architecture Highlights */}
                <div>
                  <h4 className="text-xs font-semibold tracking-wider text-white/80 uppercase">
                    Integrated System Engineering Highlights
                  </h4>
                  <ul className="mt-3 flex flex-col gap-2.5">
                    {arch.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs leading-relaxed text-white/75">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-accent-400 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-white/10 pt-6">
              <Link
                href={arch.productLink}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-accent-500 px-5 py-3 text-xs font-semibold text-brand-navy-950 uppercase transition-all duration-200 hover:bg-brand-accent-400 hover:shadow-lg"
              >
                <span>View Full System Blueprints</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-3 text-xs font-semibold text-white uppercase transition-all duration-200 hover:bg-white/10"
              >
                Request Custom Quotation
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
