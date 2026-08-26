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
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 border border-brand-line bg-white p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-brand-navy-800">
          Name
          <input
            required
            type="text"
            value={values.name}
            onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
            className="border border-brand-line px-3.5 py-2.5 text-sm text-brand-navy-900 outline-none focus:border-brand-accent-500"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-brand-navy-800">
          Email
          <input
            required
            type="email"
            value={values.email}
            onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
            className="border border-brand-line px-3.5 py-2.5 text-sm text-brand-navy-900 outline-none focus:border-brand-accent-500"
          />
        </label>
      </div>
      <label className="flex flex-col gap-1.5 text-sm font-medium text-brand-navy-800">
        Company
        <input
          type="text"
          value={values.company}
          onChange={(e) => setValues((v) => ({ ...v, company: e.target.value }))}
          className="border border-brand-line px-3.5 py-2.5 text-sm text-brand-navy-900 outline-none focus:border-brand-accent-500"
        />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-medium text-brand-navy-800">
        Requirement
        <textarea
          required
          rows={5}
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          className="border border-brand-line px-3.5 py-2.5 text-sm text-brand-navy-900 outline-none focus:border-brand-accent-500"
        />
      </label>
      <button
        type="submit"
        className="inline-flex items-center justify-center bg-brand-navy-900 px-6 py-3.5 text-[13px] font-semibold tracking-wide text-white uppercase transition-colors hover:bg-brand-navy-800"
      >
        Send Enquiry
      </button>
      <p className="text-xs text-brand-steel-600">Opens your email client addressed to {company.email}.</p>
    </form>
  );
}
