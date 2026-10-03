import type { Metadata } from "next";
import { Siren } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import MapEmbed from "@/components/MapEmbed";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us & Book Appointment",
  description: "Contact Yashodhara Urology Hospital, Ambajogai Road, Latur. Call 02382-227850 / 9021186939 or book an appointment online.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact Yashodhara Hospital, Latur", url: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" text="Book an appointment or ask us a question – we're happy to help." />
      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <h2 className="mb-6 text-2xl font-extrabold text-plum-900">Contact Information</h2>
            <ContactInfo />
          </div>
          <div id="appointment">
            <h2 className="mb-6 text-2xl font-extrabold text-plum-900">Request an Appointment</h2>
            <ContactForm />
          </div>
        </div>
      </section>
      <section className="px-4 pb-6 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 rounded-3xl bg-gradient-to-r from-brand-red to-plum-700 p-6 text-white md:flex-row md:items-center md:justify-between md:p-8">
          <div className="flex items-center gap-4">
            <Siren size={36} className="shrink-0 text-accent" aria-hidden />
            <div><h2 className="text-xl font-bold">Urgent urological problem?</h2><p className="text-sm text-white/90">Please call the hospital directly for urgent help.</p></div>
          </div>
          <a href={site.mobileHref} className="btn-light">Call {site.mobile}</a>
        </div>
      </section>
      <section className="section">
        <div className="container-x"><h2 className="mb-6 text-2xl font-extrabold text-plum-900">Our Location</h2><MapEmbed src={site.mapsEmbed} title="Yashodhara Hospital on Google Maps" /></div>
      </section>
    </>
  );
}
