import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import FacilityCard from "@/components/FacilityCard";
import GalleryGrid from "@/components/GalleryGrid";
import CTASection from "@/components/CTASection";
import MapEmbed from "@/components/MapEmbed";
import HomeHero from "@/components/HomeHero";
import { doctor, site, whatsappLink } from "@/data/site";
import { dentalServices, facilities, gallery, quickCategories, services, whyChoose } from "@/data/content";

export const metadata: Metadata = {
  title: { absolute: "Yashodhara Urology & Multispeciality Hospital, Latur | Urologist & Andrologist" },
  description: "Complete urology and andrology care in Latur – kidney stone (PCNL, URSL, ESWL), prostate, male infertility and uro-oncology. Dr. Dhiraj Hedda, M.Ch. (Urology). Call 02382-227850.",
  alternates: { canonical: "/" },
  openGraph: { title: "Yashodhara Urology & Multispeciality Hospital, Latur", description: "Expert urology, andrology and uro-oncology care in Latur.", url: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <HomeHero />

      {/* QUICK CATEGORIES */}
      <section aria-label="Treatment categories" className="relative z-10 -mt-12 pb-6">
        <div className="container-x">
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {quickCategories.map(({ label, icon: Icon }) => (
              <li key={label}>
                <Link href="/services" className="card flex h-full flex-col items-center gap-2 p-4 text-center shadow-xl shadow-plum-900/10 transition hover:-translate-y-1">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-plum-50 text-plum-700"><Icon size={22} aria-hidden /></span>
                  <span className="text-xs font-bold text-plum-900">{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[5/4] overflow-hidden rounded-3xl shadow-xl">
              <Image src="/images/about-hospital.jpg" alt="Inside Yashodhara Hospital, Latur" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading center={false} eyebrow="About Us" title="Yashodhara Urology & Multispeciality Hospital" />
            <p className="-mt-6 leading-relaxed text-slate-600">
              We are dedicated to providing advanced, ethical and compassionate care for urological, andrological and related disorders. With modern endoscopic technology and a patient-centred approach, we aim to deliver better outcomes and improved quality of life for every patient in Latur and the surrounding region.
            </p>
            <Link href="/about" className="btn-primary mt-6">Read More <ArrowRight size={18} aria-hidden /></Link>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="section bg-gradient-to-b from-cream to-white">
        <div className="container-x">
          <SectionHeading eyebrow="Why Choose Yashodhara" title="Advanced Urological Care with a Personal Touch" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 70}>
                <div className="card h-full p-6">
                  <span className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-plum-700 text-white"><Icon size={26} aria-hidden /></span>
                  <h3 className="text-lg font-bold text-plum-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Our Specialised Services" title="Comprehensive Care for Urological & Andrological Conditions" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s, i) => (<Reveal key={s.slug} delay={i * 60}><ServiceCard service={s} /></Reveal>))}
          </div>
          <div className="mt-10 text-center"><Link href="/services" className="btn-outline">View All Services <ArrowRight size={18} aria-hidden /></Link></div>
        </div>
      </section>

      {/* DOCTOR */}
      <section className="section bg-plum-50">
        <div className="container-x grid items-center gap-10 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl shadow-xl">
              <Image src="/images/Doctor.avif" alt={`${doctor.name}, consultant urologist`} fill sizes="(min-width:1024px) 30vw, 80vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-red">Our Specialist</p>
            <h2 className="text-3xl font-extrabold text-plum-900 md:text-4xl">{doctor.name}</h2>
            <p className="mt-1 font-semibold text-plum-600">{doctor.title}</p>
            <ul className="mt-5 space-y-2 text-slate-700">
              {doctor.qualifications.map((q) => (<li key={q} className="flex gap-2"><CheckCircle2 size={20} className="mt-0.5 shrink-0 text-accent-600" aria-hidden />{q}</li>))}
            </ul>
            <h3 className="mt-6 font-bold text-plum-900">Areas of Expertise</h3>
            <ul className="mt-2 grid gap-1.5 text-sm text-slate-700 sm:grid-cols-2">
              {doctor.expertise.map((e) => (<li key={e} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-plum-500" aria-hidden />{e}</li>))}
            </ul>
            <Link href="/about#doctor" className="btn-primary mt-6">View Doctor Profile <ArrowRight size={18} aria-hidden /></Link>
          </Reveal>
        </div>
      </section>

      {/* DENTAL */}
      <section className="section">
        <div className="container-x">
          <div className="grid overflow-hidden rounded-3xl bg-gradient-to-br from-plum-700 to-[#a45a9a] text-white shadow-2xl lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Dental Clinic</p>
              <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">Yashodhara Multispeciality Dental Clinic</h2>
              <p className="mt-4 text-plum-50">Complete dental care by Dr. Anushree Dhiraj Hedda (B.D.S.) – from fillings and root canals to implants and orthodontic treatment.</p>
              <ul className="mt-5 grid gap-2 text-sm sm:grid-cols-2">
                {dentalServices.slice(0, 6).map((d) => (<li key={d.title} className="flex gap-2"><CheckCircle2 size={18} className="shrink-0 text-accent" aria-hidden />{d.title}</li>))}
              </ul>
              <Link href="/dental-clinic" className="btn-accent mt-7">Explore Dental Clinic <ArrowRight size={18} aria-hidden /></Link>
            </div>
            <div className="relative min-h-64 lg:min-h-full">
              <Image src="/images/dental-clinic.jpg" alt="Yashodhara Multispeciality Dental Clinic, Latur" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="section bg-gradient-to-b from-white to-cream">
        <div className="container-x">
          <SectionHeading eyebrow="Our Hospital Facilities" title="Modern Infrastructure for Better Care and Outcomes" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.slice(0, 3).map((f, i) => (<Reveal key={f.title} delay={i * 80}><FacilityCard facility={f} /></Reveal>))}
          </div>
          <div className="mt-10 text-center"><Link href="/facilities" className="btn-outline">All Facilities <ArrowRight size={18} aria-hidden /></Link></div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Photo Gallery" title="A Look Inside Our Hospital" text="Our hospital, facilities and clinic." />
          <GalleryGrid items={gallery.slice(0, 8)} showFilters={false} />
          <div className="mt-10 text-center"><Link href="/gallery" className="btn-primary">View Full Gallery <ArrowRight size={18} aria-hidden /></Link></div>
        </div>
      </section>

      <CTASection />

      {/* CONTACT PREVIEW */}
      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading center={false} eyebrow="Visit Us" title="Find Us in Latur" />
            <ul className="-mt-4 space-y-4 text-slate-700">
              <li className="flex gap-3"><MapPin className="mt-1 shrink-0 text-brand-red" aria-hidden /><span>{site.addressLines.join(" ")}</span></li>
              <li className="flex gap-3"><Phone className="mt-1 shrink-0 text-brand-red" aria-hidden /><span><a href={site.phoneHref} className="font-semibold">{site.phone}</a> · <a href={site.mobileHref} className="font-semibold">{site.mobile}</a></span></li>
              <li className="flex gap-3"><MessageCircle className="mt-1 shrink-0 text-brand-red" aria-hidden /><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="font-semibold">WhatsApp: {site.mobile}</a></li>
              <li className="flex gap-3"><Mail className="mt-1 shrink-0 text-brand-red" aria-hidden /><a href={`mailto:${site.email}`} className="break-all font-semibold">{site.email}</a></li>
              <li className="flex gap-3"><Clock className="mt-1 shrink-0 text-brand-red" aria-hidden /><span>Mon – Sat: 9 AM – 8 PM · Sunday: By Appointment</span></li>
            </ul>
            <Link href="/contact" className="btn-primary mt-7">Contact Us <ArrowRight size={18} aria-hidden /></Link>
          </div>
          <MapEmbed src={site.mapsEmbed} title="Yashodhara Hospital location on Google Maps" />
        </div>
      </section>
    </>
  );
}