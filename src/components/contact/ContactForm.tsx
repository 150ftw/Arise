"use client";

import { useState, type FormEvent } from "react";
import { company } from "@/lib/data/company";

export function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", company: "", message: "" });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${values.name || "website visitor"}`);
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\nCompany: ${values.company}\n\n${values.message}`
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 border border-brand-line bg-white p-5 sm:gap-5 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
        <label className="flex flex-col gap-1.5 text-xs font-semibold text-brand-navy-900 uppercase sm:text-sm">
          Your Name *
          <input
            required
            type="text"
            placeholder="e.g. Rajesh Kumar"
            value={values.name}
            onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
            className="h-11 border border-brand-line px-3.5 text-sm text-brand-navy-900 outline-none transition-colors focus:border-brand-accent-500"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-xs font-semibold text-brand-navy-900 uppercase sm:text-sm">
          Email Address *
          <input
            required
            type="email"
            placeholder="e.g. r.kumar@organisation.com"
            value={values.email}
            onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
            className="h-11 border border-brand-line px-3.5 text-sm text-brand-navy-900 outline-none transition-colors focus:border-brand-accent-500"
          />
        </label>
      </div>
      <label className="flex flex-col gap-1.5 text-xs font-semibold text-brand-navy-900 uppercase sm:text-sm">
        Organisation / Company
        <input
          type="text"
          placeholder="e.g. Defence Lab / Telecom Infra"
          value={values.company}
          onChange={(e) => setValues((v) => ({ ...v, company: e.target.value }))}
          className="h-11 border border-brand-line px-3.5 text-sm text-brand-navy-900 outline-none transition-colors focus:border-brand-accent-500"
        />
      </label>
      <label className="flex flex-col gap-1.5 text-xs font-semibold text-brand-navy-900 uppercase sm:text-sm">
        Project Requirement / Specifications *
        <textarea
          required
          rows={5}
          placeholder="Please describe your kVA capacity, rack dimensions, IP rating, or custom engineering requirement..."
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          className="border border-brand-line p-3.5 text-sm text-brand-navy-900 outline-none transition-colors focus:border-brand-accent-500"
        />
      </label>
      <button
        type="submit"
        className="inline-flex h-12 w-full items-center justify-center bg-brand-navy-900 px-6 text-xs font-semibold tracking-wide text-white uppercase shadow-md transition-colors active:bg-brand-navy-800"
      >
        Send Enquiry / Request RFQ
      </button>
      <p className="text-center text-[11px] text-brand-steel-600 sm:text-left sm:text-xs">
        Opens your default email client addressed to {company.email}.
      </p>
    </form>
  );
}
