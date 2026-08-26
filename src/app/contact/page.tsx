import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${company.shortName} at Plot No 112-113, Sector-5, IMT Manesar, Gurugram, Haryana.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Talk to Icon Power Solutions" description="We typically respond within one business day." />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-semibold tracking-wide text-brand-accent-600 uppercase">Registered Office</h3>
                <p className="text-base leading-7 text-brand-navy-900">
                  {company.name}
                  <br />
                  {company.address.line1}
                  <br />
                  {company.address.line2}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-semibold tracking-wide text-brand-accent-600 uppercase">Email</h3>
                <a href={`mailto:${company.email}`} className="text-base text-brand-navy-900 hover:text-brand-accent-600">
                  {company.email}
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-semibold tracking-wide text-brand-accent-600 uppercase">Phone</h3>
                <div className="flex flex-col gap-1">
                  {company.phones.map((phone) => (
                    <a key={phone} href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="text-base text-brand-navy-900 hover:text-brand-accent-600">
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
              <div className="overflow-hidden border border-brand-line">
                <iframe
                  title="Icon Power Solutions, IMT Manesar"
                  src="https://maps.google.com/maps?q=IMT%20Manesar%20Sector%205%20Gurugram%20Haryana&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="h-64 w-full"
                  loading="lazy"
                />
              </div>
            </div>

            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
