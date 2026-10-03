import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import CTASection from "@/components/CTASection";
import { gallery } from "@/data/content";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description: "Photo gallery of Yashodhara Urology & Multispeciality Hospital and Dental Clinic, Latur – hospital, facilities and procedures.",
  alternates: { canonical: "/gallery" },
  openGraph: { title: "Gallery – Yashodhara Hospital, Latur", url: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero title="Photo Gallery" text="Our hospital, facilities and clinic." />
      <section className="section"><div className="container-x"><GalleryGrid items={gallery} /></div></section>
      <CTASection />
    </>
  );
}
