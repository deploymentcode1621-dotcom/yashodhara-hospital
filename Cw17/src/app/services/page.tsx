import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { services } from "@/data/content";

export const metadata: Metadata = {
  title: "Urology Services in Latur",
  description: "Kidney stone treatment (PCNL, URSL, ESWL), prostate care, uro-oncology, urethral stricture, male infertility, female and paediatric urology at Yashodhara Hospital, Latur.",
  alternates: { canonical: "/services" },
  openGraph: { title: "Urology & Andrology Services – Yashodhara Hospital, Latur", url: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "ItemList", itemListElement: services.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.title })) }} />
      <PageHero title="Our Services" text="Comprehensive care for all urological and andrological conditions – for men, women and children." />
      <section className="section">
        <div className="container-x">
          <p className="mx-auto mb-12 max-w-3xl text-center text-slate-600">For more information or to clarify any doubts, please contact the doctors at the hospital. Treatment decisions are always made after proper consultation and examination.</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (<Reveal key={s.slug} delay={(i % 3) * 80}><ServiceCard service={s} detailed /></Reveal>))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
