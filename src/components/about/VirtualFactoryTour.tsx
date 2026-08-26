"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Factory,
  Wrench,
  Gauge,
  CheckCircle2,
  Building,
  Cpu,
  Layers,
  FlaskConical,
} from "lucide-react";
import { factoryStations, type FactoryStation } from "@/lib/data/timelineAndTour";

const stationIcons: Record<string, React.ElementType> = {
  "station-cnc-laser": Layers,
  "station-harness": Cpu,
  "station-powder-coating": Factory,
  "station-power-electronics": Wrench,
  "station-testing-lab": FlaskConical,
  "station-integration": Gauge,
};

export function VirtualFactoryTour() {
  const [activeStationId, setActiveStationId] = useState(factoryStations[0].id);
  const [filterFacility, setFilterFacility] = useState<string>("All");

  const filteredStations =
    filterFacility === "All"
      ? factoryStations
      : factoryStations.filter((st) => st.facility.includes(filterFacility));

  const currentStation =
    factoryStations.find((st) => st.id === activeStationId) || factoryStations[0];

  return (
    <div className="rounded-2xl border border-brand-line bg-white p-4 shadow-sm sm:p-8">
      {/* Top Header & Facility Filter */}
      <div className="flex flex-col gap-4 border-b border-brand-line pb-5 sm:flex-row sm:items-center sm:justify-between sm:pb-6">
        <div>
          <div className="flex items-center gap-2">
            <Building className="h-4 w-4 text-brand-accent-600" />
            <span className="font-mono text-xs font-semibold text-brand-steel-600 uppercase">
              State-of-the-Art Manufacturing Footprint
            </span>
          </div>
          <h3 className="mt-1 text-lg font-bold text-brand-navy-950 sm:text-2xl">
            Interactive Facility Tour
          </h3>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {["All", "Manesar", "Gurugram"].map((fac) => (
            <button
              key={fac}
              type="button"
              onClick={() => setFilterFacility(fac)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
                filterFacility === fac
                  ? "bg-brand-navy-950 text-white shadow-xs"
                  : "bg-brand-paper text-brand-steel-600 hover:bg-brand-line/50 hover:text-brand-navy-900 border border-brand-line"
              }`}
            >
              {fac === "All" ? "All Facilities" : fac === "Manesar" ? "IMT Manesar HQ" : "Gurugram Plant"}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Station Selector Sidebar + Detail View */}
      <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_1.9fr]">
        {/* Left Column: Station Selector */}
        <div className="flex flex-col gap-2.5">
          <p className="text-xs font-semibold text-brand-steel-600 uppercase">
            Select Manufacturing Bay ({filteredStations.length} Stations)
          </p>
          <div className="space-y-2">
            {filteredStations.map((station, index) => {
              const Icon = stationIcons[station.id] || Factory;
              const isActive = station.id === currentStation.id;
              return (
                <button
                  key={station.id}
                  type="button"
                  onClick={() => setActiveStationId(station.id)}
                  className={`flex w-full items-start gap-3.5 rounded-xl border p-4 text-left transition-all ${
                    isActive
                      ? "border-brand-navy-950 bg-brand-navy-950 text-white shadow-sm"
                      : "border-brand-line bg-brand-paper/60 text-brand-navy-900 hover:border-brand-steel-400 hover:bg-brand-paper"
                  }`}
                >
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                      isActive ? "bg-white/10 text-brand-accent-400" : "bg-white text-brand-accent-600 border border-brand-line"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-mono text-[10px] uppercase ${
                          isActive ? "text-brand-accent-400" : "text-brand-steel-600"
                        }`}
                      >
                        {station.area}
                      </span>
                      <span
                        className={`text-[10px] font-medium ${
                          isActive ? "text-white/60" : "text-brand-steel-600/70"
                        }`}
                      >
                        {station.facility}
                      </span>
                    </div>
                    <h4 className="mt-1 truncate text-xs font-bold sm:text-sm">{station.name}</h4>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Station Detail Card */}
        <div className="flex flex-col justify-between rounded-xl border border-brand-line bg-brand-paper p-4 sm:p-7">
          <div>
            {/* Station Image & Badge */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-brand-line bg-white shadow-2xs">
              <Image
                src={currentStation.image}
                alt={currentStation.name}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5 sm:top-3 sm:left-3 sm:gap-2">
                <span className="rounded-full bg-brand-navy-950/90 px-2.5 py-0.5 font-mono text-[9px] font-semibold text-brand-accent-400 backdrop-blur-xs sm:px-3 sm:py-1 sm:text-[10px]">
                  {currentStation.facility}
                </span>
                <span className="rounded-full bg-white/90 px-2.5 py-0.5 font-mono text-[9px] font-semibold text-brand-navy-950 backdrop-blur-xs sm:px-3 sm:py-1 sm:text-[10px]">
                  {currentStation.area}
                </span>
              </div>
            </div>

            {/* Title & Description */}
            <div className="mt-5 sm:mt-6">
              <h4 className="text-lg font-bold text-brand-navy-950 sm:text-xl">{currentStation.name}</h4>
              <p className="mt-1 text-xs font-semibold text-brand-accent-600 uppercase">
                {currentStation.tagline}
              </p>
              <p className="mt-2.5 text-xs leading-relaxed text-brand-steel-600 sm:text-sm">
                {currentStation.description}
              </p>
            </div>

            {/* Capabilities List */}
            <div className="mt-4 border-t border-brand-line pt-3.5 sm:mt-5 sm:pt-4">
              <h5 className="text-xs font-bold text-brand-navy-950 uppercase">
                Core Bay Capabilities
              </h5>
              <ul className="mt-2 space-y-1.5">
                {currentStation.capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-2 text-xs text-brand-steel-600">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-accent-600" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Installed Machinery & Equipment */}
            <div className="mt-4 border-t border-brand-line pt-3.5 sm:mt-5 sm:pt-4">
              <h5 className="text-xs font-bold text-brand-navy-950 uppercase">
                Installed Machinery & Test Jigs
              </h5>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {currentStation.equipment.map((eq) => (
                  <span
                    key={eq}
                    className="rounded-md border border-brand-line bg-white px-2 py-1 text-[11px] font-medium text-brand-navy-900 sm:text-xs"
                  >
                    {eq}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Metrics Footer */}
          <div className="mt-5 grid grid-cols-3 gap-2 border-t border-brand-line pt-4 text-center sm:mt-6">
            {currentStation.metrics.map((metric) => (
              <div key={metric.label} className="rounded-lg border border-brand-line/50 bg-white p-2 shadow-2xs sm:p-2.5">
                <p className="font-mono text-xs font-bold text-brand-navy-950 sm:text-base">
                  {metric.value}
                </p>
                <p className="mt-0.5 text-[9px] text-brand-steel-600 sm:text-[10px]">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
