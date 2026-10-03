import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, CheckCircle2, Clock, MapPin, Phone, ShieldCheck, UserRound } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import MapEmbed from "@/components/MapEmbed";
import GalleryGrid from "@/components/GalleryGrid";
import JsonLd from "@/components/JsonLd";
import { dentalSite } from "@/data/site";
import { dentalServices, gallery } from "@/data/content";

export const metadata: Metadata = {
  title: "Dental Clinic in Latur",
  description: "Yashodhara Multispeciality Dental Clinic, Ambajogai Road, Latur – root canal, implants, crowns & bridges, orthodontics, scaling, RVG X-ray and more by Dr. Anushree Hedda, B.D.S.",
  alternates: { canonical: "/dental-clinic" },
  openGraph: { title: "Yashodhara Multispeciality Dental Clinic, Latur", url: "/dental-clinic", images: ["/images/dental-hero.avif"] },
};

const features = [
  { icon: UserRound, title: "Qualified Dental Surgeon", text: `${dentalSite.doctor}, B.D.S. (Reg. No. ${dentalSite.regNo}).` },
  { icon: ShieldCheck, title: "Complete Dental Care", text: "Preventive, restorative, cosmetic and surgical dental treatment at one clinic." },
  { icon: CheckCircle2, title: "Digital Dental X-ray (RVG)", text: "On-site dental X-ray for clear diagnosis and treatment planning." },
];

export default function DentalPage() {
  const dentalGallery = gallery.filter((g) => g.category === "Dental");
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Dentist", name: dentalSite.name, telephone: "+912382227850",
        address: { "@type": "PostalAddress", streetAddress: "Opposite Kayamkhani Function Hall, Sham Nagar, Ambajogai Road", addressLocality: "Latur", addressRegion: "Maharashtra", addressCountry: "IN" } }} />
      <PageHero dental title="Dental Clinic" text={`${dentalSite.name} – complete dental care in Latur.`} image="/images/dental-hero.avif" />

      <section className="section">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-red">Welcome</p>
            <h2 className="text-3xl font-extrabold text-plum-900 md:text-4xl">{dentalSite.name}</h2>
            <span className="mt-4 block h-1 w-16 rounded-full bg-accent" />
            <p className="mt-5 leading-relaxed text-slate-600">Our dental clinic offers a wide range of dental treatments under the care of {dentalSite.doctor} ({dentalSite.qualification}). From routine fillings and cleaning to root canal treatment, implants and orthodontics, we focus on comfortable, careful treatment for the whole family.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact#appointment" className="btn-primary"><CalendarCheck size={20} aria-hidden />Book Dental Appointment</Link>
              <a href={dentalSite.phoneHref} className="btn-outline"><Phone size={20} aria-hidden />{dentalSite.phone}</a>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="relative aspect-[5/4] overflow-hidden rounded-3xl shadow-xl">
              <Image src="/images/dental-clinic.jpg" alt="Yashodhara Dental Clinic, Latur" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-plum-50">
        <div className="container-x">
          <SectionHeading eyebrow="Dental Services" title="Treatments Available at Our Dental Clinic" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {dentalServices.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={(i % 3) * 70}>
                <article className="card h-full p-6">
                  <span className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-plum-600 to-[#a45a9a] text-white"><Icon size={26} aria-hidden /></span>
                  <h3 className="text-lg font-bold text-plum-900">{title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Patient Care" title="Care You Can Trust" />
          <div className="grid gap-5 md:grid-cols-3">
            {features.map(({ icon: Icon, title, text }) => (
              <div key={title} className="card p-6 text-center">
                <span className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-plum-50 text-plum-700"><Icon aria-hidden /></span>
                <h3 className="font-bold text-plum-900">{title}</h3><p className="mt-2 text-sm text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {dentalGallery.length > 0 && (
        <section className="section bg-cream">
          <div className="container-x"><SectionHeading eyebrow="Gallery" title="Our Dental Clinic" /><GalleryGrid items={dentalGallery} showFilters={false} /></div>
        </section>
      )}

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading center={false} eyebrow="Visit the Clinic" title="Dental Clinic Contact" />
            <ul className="-mt-4 space-y-4 text-slate-700">
              <li className="flex gap-3"><MapPin className="mt-1 shrink-0 text-brand-red" aria-hidden /><span>{dentalSite.addressLines.join(" ")}<br /><span className="text-sm text-slate-500">{dentalSite.addressMarathi}</span></span></li>
              <li className="flex gap-3"><Phone className="mt-1 shrink-0 text-brand-red" aria-hidden /><a href={dentalSite.phoneHref} className="font-semibold">{dentalSite.phone}</a></li>
              <li className="flex gap-3"><Clock className="mt-1 shrink-0 text-brand-red" aria-hidden /><span>{dentalSite.hours[0].time}</span></li>
            </ul>
            <Link href="/contact#appointment" className="btn-accent mt-7"><CalendarCheck size={20} aria-hidden />Book an Appointment</Link>
          </div>
          <MapEmbed src={dentalSite.mapsEmbed} title="Yashodhara Dental Clinic on Google Maps" />
        </div>
      </section>
    </>
  );
}
