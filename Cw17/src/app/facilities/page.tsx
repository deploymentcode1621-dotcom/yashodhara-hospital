import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FacilityCard from "@/components/FacilityCard";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { facilities } from "@/data/content";

export const metadata: Metadata = {
  title: "Hospital Facilities",
  description: "Operation theatre, endoscopy unit, ESWL lithotripsy, diagnostic services and in-patient care at Yashodhara Urology Hospital, Latur.",
  alternates: { canonical: "/facilities" },
  openGraph: { title: "Facilities – Yashodhara Hospital, Latur", url: "/facilities" },
};

export default function FacilitiesPage() {
  return (
    <>
      <PageHero title="Our Facilities" text="Modern infrastructure for better care and outcomes." />
      <section className="section">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f, i) => (<Reveal key={f.title} delay={(i % 3) * 80}><FacilityCard facility={f} /></Reveal>))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
