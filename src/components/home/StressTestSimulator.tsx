"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ThermometerSnowflake,
  Activity,
  Zap,
  Droplets,
  ShieldCheck,
  CheckCircle,
  FileCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const TESTS = [
  {
    id: "thermal",
    title: "Thermal Extremes (-20°C to +55°C)",
    standard: "MIL-STD-810H Method 501.7 & 502.7",
    icon: ThermometerSnowflake,
    accentColor: "text-amber-500",
    summary: "Simulates harsh desert heat and sub-zero high-altitude Himalayan border deployments.",
    metrics: [
      { label: "Operating Range", value: "-20°C to +55°C" },
      { label: "Thermal Dissipation", value: "HEX Dual-Loop Air-to-Air" },
      { label: "Full Load Junction Temp", value: "< 68°C (Nominal)" },
      { label: "De-rating Threshold", value: "None up to 55°C" },
    ],
    status: "PASS — ZERO THERMAL DERATING AT +55°C AMBIENT",
    telemetryTitle: "Chamber Temp Gradient",
    telemetryValue: "-20°C ⟷ +55°C Stable Cycle",
  },
  {
    id: "vibration",
    title: "Naval Shock & Ballistic Vibration",
    standard: "MIL-STD-901D Heavyweight & MIL-STD-167-1A",
    icon: Activity,
    accentColor: "text-brand-accent-400",
    summary: "Ensures submarine and naval shipboard electronics survive explosive underwater blast shock waves.",
    metrics: [
      { label: "Shock Level", value: "Up to 50G Tri-Axial" },
      { label: "Vibration Band", value: "5 Hz to 500 Hz Sine/Random" },
      { label: "Chassis Mounts", value: "Wire-Rope Visco-Elastic Dampers" },
      { label: "Structural Integrity", value: "No mechanical or electrical rupture" },
    ],
    status: "PASS — CERTIFIED FOR SUBMARINE & TACTICAL VEHICLE MOUNTING",
    telemetryTitle: "Tri-Axial G-Force Damping",
    telemetryValue: "50G Impact Damped to <2.2G Internally",
  },
  {
    id: "surge",
    title: "40kA Lightning & EMP Surge",
    standard: "IEC 61643-11 Class I+II & IEEE C62.41",
    icon: Zap,
    accentColor: "text-yellow-400",
    summary: "Protects sensitive telecom base stations and radar electronics from direct lightning strikes.",
    metrics: [
      { label: "Max Discharge Current", value: "40kA (8/20 µs) Class I+II" },
      { label: "Response Time", value: "< 25 Nanoseconds (Instant Clamp)" },
      { label: "Grounding Resistance", value: "< 1.0 Ohm Target" },
      { label: "Residual Voltage", value: "< 1.5 kV at Peak Strike" },
    ],
    status: "PASS — ZERO DAMAGE TO DOWNSTREAM CRITICAL ELECTRONICS",
    telemetryTitle: "Surge Clamp Response",
    telemetryValue: "<25ns Zero-Break Clamping Active",
  },
  {
    id: "ingress",
    title: "IP65 Ingress & Sandstorm Sealing",
    standard: "IEC 60529 / EN 60529 IP65 & IP55",
    icon: Droplets,
    accentColor: "text-sky-400",
    summary: "Hermetically seals internal electronics against dust storms, torrential rains, and corrosive coastal salt fog.",
    metrics: [
      { label: "Dust Protection", value: "Talcum Chamber Dust-Tight (Category 1)" },
      { label: "Water Jet Rating", value: "12.5 mm nozzle @ 100 kPa from 3m" },
      { label: "Gasket Seal", value: "Continuous CNC Polyurethane Foam" },
      { label: "Salt Spray Rating", value: "1,000+ Hours ASTM B117" },
    ],
    status: "PASS — 100% HERMETIC SEAL INTEGRITY VERIFIED",
    telemetryTitle: "Seal Chamber Pressure",
    telemetryValue: "Positive Internal Pressure Maintained",
  },
];

export function StressTestSimulator() {
  const [activeTest, setActiveTest] = useState(TESTS[0]);

  return (
    <section className="border-t border-brand-line bg-brand-navy-950 py-20 sm:py-24 text-white">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            tone="light"
            eyebrow="Mission Qualification"
            title="Engineered and qualified for the most severe environments"
            description="Every Icon Power architecture undergoes rigorous testing protocols to meet stringent defence, naval, and telecom standards before deployment."
          />
          <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 backdrop-blur-md text-xs font-semibold text-white w-fit shrink-0">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>NABL Accredited Testing Protocol</span>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {TESTS.map((test) => {
            const Icon = test.icon;
            const active = activeTest.id === test.id;
            return (
              <button
                key={test.id}
                type="button"
                onClick={() => setActiveTest(test)}
                className={`flex flex-col items-start gap-3 rounded-xl border p-5 text-left transition-all ${
                  active
                    ? "border-brand-accent-400 bg-white/10 shadow-[0_0_25px_rgba(22,175,226,0.2)]"
                    : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.08]"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <Icon className={`h-6 w-6 ${active ? "text-brand-accent-400" : "text-white/60"}`} />
                  {active && (
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  )}
                </div>
                <div>
                  <h4 className="text-xs font-bold leading-tight text-white">{test.title}</h4>
                  <p className="mt-1 font-mono text-[10px] text-white/50">{test.standard.split("&")[0]}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Live Test Chamber Readout */}
        <div className="mt-6 rounded-2xl border border-white/15 bg-brand-navy-900/90 p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTest.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center"
            >
              {/* Left Column: Test Spec */}
              <div className="flex flex-col gap-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold tracking-wider text-brand-accent-400 uppercase">
                      Standard Qualification Procedure
                    </span>
                    <span className="rounded bg-brand-accent-500/20 px-2 py-0.5 font-mono text-[10px] font-semibold text-brand-accent-300">
                      {activeTest.standard}
                    </span>
                  </div>
                  <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                    {activeTest.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {activeTest.summary}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-5">
                  {activeTest.metrics.map((metric, i) => (
                    <div key={i} className="flex flex-col gap-1">
                      <dt className="text-[11px] font-medium tracking-wide text-white/50 uppercase">
                        {metric.label}
                      </dt>
                      <dd className="font-mono text-xs font-semibold text-white">
                        {metric.value}
                      </dd>
                    </div>
                  ))}
                </div>

                {/* Qualification Status Badge */}
                <div className="flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4">
                  <CheckCircle className="h-5 w-5 shrink-0 text-emerald-400" />
                  <span className="font-mono text-xs font-bold tracking-wide text-emerald-300">
                    {activeTest.status}
                  </span>
                </div>
              </div>

              {/* Right Column: Interactive Diagnostic Chamber Visualizer */}
              <div className="flex flex-col gap-4 rounded-xl border border-white/10 bg-brand-navy-950 p-6 shadow-inner">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-mono text-[11px] font-semibold text-brand-accent-400 uppercase">
                    CHAMBER TELEMETRY FEED
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE SENSORS ACTIVE
                  </span>
                </div>

                <div className="flex flex-col gap-2 py-4">
                  <span className="text-xs font-medium text-white/60">{activeTest.telemetryTitle}</span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-xl font-bold text-white sm:text-2xl">
                      {activeTest.telemetryValue}
                    </span>
                  </div>

                  {/* Animated Sensor Progress Bar */}
                  <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      key={activeTest.id}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-brand-accent-500 to-emerald-400"
                    />
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-white/60">
                    <FileCheck className="h-4 w-4 text-brand-accent-400" />
                    <span>Lab Test Certificate on File</span>
                  </div>
                  <span className="font-mono text-[11px] text-brand-accent-400">
                    PASS 100%
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
