import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Phone, MessageCircle, CalendarCheck, Stethoscope, ShieldCheck,
  Microscope, Activity, Waves, ScanLine, HeartPulse, BedDouble,
  SprayCan, Droplets, ClipboardCheck, BadgeCheck,
} from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Hospital Facilities",
  description:
    "Operation theatre, endoscopy unit, ESWL lithotripsy, diagnostic services and in-patient care at Yashodhara Urology Hospital, Latur.",
  alternates: { canonical: "/facilities" },
  openGraph: { title: "Facilities – Yashodhara Hospital, Latur", url: "/facilities" },
};

/* ------------------------------------------------------------------ */
/* CONFIG — swap these for your real image paths / contact details.     */
/* Use the same files your Home page already uses.                      */
/* ------------------------------------------------------------------ */
const IMG = {
  hero: "/images/facilities/operation-theatre.jpg",
  ot: "/images/facilities/operation-theatre.jpg",
  endoscopy: "/images/facilities/endoscopy-unit.jpg",
  diagnostics: "/images/facilities/diagnostics.jpg",
  ipd: "/images/facilities/patient-room.jpg",
  eswl: "/images/facilities/eswl.jpg",
  clean: "/images/facilities/hospital-interior.jpg",
  reception: "/images/facilities/reception.jpg",
  exterior: "/images/facilities/hospital-building.jpg",
};
const PHONE = "tel:+912382227500"; // TODO: use your real hospital number
const WHATSAPP = "https://wa.me/919921130025"; // TODO: use your real WhatsApp number
const BOOK = "/contact"; // TODO: your appointment route

/* ------------------------------------------------------------------ */

const coreFacilities = [
  {
    eyebrow: "Surgical care",
    title: "Operation Theatre",
    desc: "A dedicated theatre set up for minimally invasive and endoscopic urological procedures, with controlled conditions from preparation to recovery.",
    features: ["Advanced surgical equipment", "Sterile, controlled environment", "Specialist surgical team"],
    image: IMG.ot,
  },
  {
    eyebrow: "Minimally invasive",
    title: "Endoscopy Unit",
    desc: "Equipped for cystoscopy, ureteroscopy and other endoscopic procedures that diagnose and treat with smaller incisions and faster recovery.",
    features: ["Cystoscopy & ureteroscopy", "High-definition visualisation", "Day-care friendly procedures"],
    image: IMG.endoscopy,
  },
  {
    eyebrow: "Accurate diagnosis",
    title: "Diagnostic Services",
    desc: "Diagnostic support that helps your urologist reach a clear diagnosis early, so treatment can start with confidence.",
    features: ["Imaging & lab support", "Urological evaluation", "Prompt reporting"],
    image: IMG.diagnostics,
  },
  {
    eyebrow: "In-patient care",
    title: "IPD & Patient Care",
    desc: "Comfortable in-patient rooms with attentive nursing, so you and your family can focus on getting better.",
    features: ["Clean, comfortable rooms", "Round-the-clock nursing care", "Family-friendly setting"],
    image: IMG.ipd,
  },
  {
    eyebrow: "Kidney stone treatment",
    title: "ESWL Lithotripsy",
    desc: "Non-invasive shock wave treatment that breaks kidney stones into small fragments that pass naturally.",
    features: ["No incision required", "Quick return to routine", "Specialist-supervised sessions"],
    image: IMG.eswl,
  },
  {
    eyebrow: "Hygiene first",
    title: "Clean Environment",
    desc: "Strict housekeeping and infection-control routines keep every ward, corridor and procedure area hygienic.",
    features: ["Regular sanitisation", "Infection-control practices", "Well-maintained interiors"],
    image: IMG.clean,
  },
];

const technology = [
  { icon: ScanLine, title: "Endoscopy Systems", desc: "Clear internal visualisation for precise diagnosis and gentle, targeted treatment.", image: IMG.endoscopy },
  { icon: Waves, title: "ESWL Lithotripsy", desc: "Focused shock waves treat kidney stones without surgery.", image: IMG.eswl },
  { icon: Microscope, title: "Diagnostic Support", desc: "Tests and imaging that give your doctor the full picture before treatment begins.", image: IMG.diagnostics },
];

const experience = [
  { n: "01", title: "Comfort", desc: "Clean, comfortable patient rooms designed for rest and privacy." },
  { n: "02", title: "Safety", desc: "Clear safety protocols followed at every step of your visit." },
  { n: "03", title: "Care", desc: "Attentive nursing and specialist supervision throughout your stay." },
  { n: "04", title: "Recovery", desc: "Structured post-operative care and follow-up to help you heal well." },
];

const benefits = [
  { title: "More Accurate Diagnosis", desc: "Better tools show the problem clearly, so treatment is targeted." },
  { title: "Safer Procedures", desc: "Controlled environments and modern equipment reduce risk." },
  { title: "Better Treatment Outcomes", desc: "Minimally invasive options support faster, smoother recovery." },
  { title: "Improved Patient Experience", desc: "Comfortable, well-organised spaces make every visit easier." },
];

const quality = [
  { icon: SprayCan, title: "Clean Environment", desc: "Daily housekeeping across all patient areas." },
  { icon: Droplets, title: "Sterilization Protocols", desc: "Instruments and theatres prepared to strict standards." },
  { icon: ShieldCheck, title: "Patient Safety", desc: "Safety checks built into every procedure." },
  { icon: ClipboardCheck, title: "Modern Clinical Standards", desc: "Evidence-based practice led by specialists." },
];

const proof = [
  { big: "Since 2015", small: "Serving Latur" },
  { big: "Advanced", small: "Urology care" },
  { big: "Specialist-led", small: "Treatment" },
  { big: "Patient-focused", small: "Environment" },
];

/* ------------------------------------------------------------------ */

function Photo({ src, alt, className = "", sizes, priority = false }: { src: string; alt: string; className?: string; sizes: string; priority?: boolean }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
    </div>
  );
}

export default function FacilitiesPage() {
  return (
    <>
      {/* 1. HERO — centered headline + cinematic panorama with glass highlights */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#fbf7ef] via-[#fdfaf5] to-white pb-14 sm:pb-20">
        <div aria-hidden className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -right-24 top-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

        <div className="container-x relative pt-8 sm:pt-12">
          <nav aria-label="Breadcrumb" className="text-center text-sm text-slate-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-800">Facilities</span>
          </nav>

          <Reveal>
            <div className="mx-auto mt-6 max-w-4xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Advanced infrastructure
              </span>
              <h1 className="mt-5 text-[2rem] font-bold leading-[1.1] text-slate-900 sm:text-5xl lg:text-6xl">
                Built For Better Care.
                <br />
                Designed For <span className="text-accent">Better Outcomes.</span>
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Our infrastructure combines modern technology, specialised equipment and patient-focused environments to support accurate diagnosis, advanced treatment and comfortable recovery.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="group relative mt-10 aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-primary to-primary/60 shadow-2xl shadow-primary/25 sm:mt-14 sm:aspect-[16/9] sm:rounded-[2.25rem] lg:aspect-[21/9]">
              <Image
                src={IMG.hero}
                alt="Operation theatre at Yashodhara Hospital, Latur"
                fill
                priority
                sizes="(min-width:1280px) 1200px, 100vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-slate-950/20" />

              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-900 shadow backdrop-blur sm:left-8 sm:top-8 sm:text-sm">
                Modern Medical Infrastructure
              </span>

              <ul className="absolute inset-x-3 bottom-3 grid gap-2.5 sm:inset-x-8 sm:bottom-8 sm:grid-cols-3 sm:gap-4">
                {[
                  { icon: Stethoscope, t: "Advanced Urology Equipment" },
                  { icon: ScanLine, t: "Modern Endoscopic Facilities" },
                  { icon: ShieldCheck, t: "Safe Surgical Environment" },
                ].map(({ icon: Icon, t }) => (
                  <li key={t} className="flex items-center gap-3 rounded-2xl border border-white/25 bg-white/15 p-3 text-white backdrop-blur-md sm:p-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent text-white shadow-lg shadow-accent/30"><Icon className="h-5 w-5" /></span>
                    <span className="text-sm font-semibold leading-snug sm:text-base">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. FACILITY HIGHLIGHT */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-center text-2xl font-bold text-slate-900 sm:text-4xl">
              Advanced Infrastructure That Supports Better Care
            </h2>
          </Reveal>
          <div className="mt-10 grid items-center gap-8 lg:mt-14 lg:grid-cols-2 lg:gap-16">
            <Reveal className="group relative min-w-0">
              <Photo src={IMG.ot} alt="Modern operation theatre" sizes="(min-width:1024px) 50vw, 100vw" className="aspect-[4/3] rounded-3xl shadow-xl" />
              <div className="pointer-events-none absolute -right-3 -top-3 hidden h-full w-full rounded-3xl border-2 border-accent/30 lg:block" aria-hidden />
            </Reveal>
            <Reveal delay={100} className="min-w-0">
              <h3 className="text-2xl font-bold text-primary sm:text-3xl">Modern Operation Theatre</h3>
              <p className="mt-3 text-slate-600">
                An advanced setup for minimally invasive and endoscopic urological procedures, built around precision and patient safety.
              </p>
              <ul className="mt-8 divide-y divide-slate-200">
                {[
                  { icon: Stethoscope, t: "Advanced Surgical Equipment", d: "Modern instruments for precise, controlled procedures." },
                  { icon: Activity, t: "Endoscopic Procedures", d: "Smaller incisions, less discomfort, quicker recovery." },
                  { icon: ShieldCheck, t: "Patient Safety Standards", d: "Strict protocols before, during and after surgery." },
                ].map(({ icon: Icon, t, d }) => (
                  <li key={t} className="flex gap-4 py-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></span>
                    <div className="min-w-0">
                      <p className="font-semibold text-slate-900">{t}</p>
                      <p className="text-sm text-slate-600">{d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. CORE FACILITIES — alternating */}
      <section className="section bg-[#faf7f2]">
        <div className="container-x">
          <Reveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">What we offer</p>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-4xl">Our Core Facilities</h2>
          </Reveal>
          <div className="mt-10 space-y-14 sm:space-y-20 lg:mt-14 lg:space-y-28">
            {coreFacilities.map((f, i) => {
              const flip = i % 2 === 1;
              return (
                <div key={f.title} className="grid items-center gap-6 lg:grid-cols-12 lg:gap-14">
                  <Reveal className={`group min-w-0 lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
                    <Photo src={f.image} alt={f.title} sizes="(min-width:1024px) 58vw, 100vw" className="aspect-[16/11] rounded-3xl shadow-xl" />
                  </Reveal>
                  <Reveal delay={100} className={`min-w-0 lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{f.eyebrow}</p>
                    <h3 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">{f.title}</h3>
                    <p className="mt-3 text-slate-600">{f.desc}</p>
                    <ul className="mt-5 space-y-2.5">
                      {f.features.map((x) => (
                        <li key={x} className="flex items-start gap-3 text-sm text-slate-800">
                          <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{x}</span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. TECHNOLOGY */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-center text-2xl font-bold text-slate-900 sm:text-4xl">Technology That Enhances Precision</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3 lg:mt-14">
            {technology.map((t, i) => (
              <Reveal key={t.title} delay={i * 90}>
                <article className="group relative h-full overflow-hidden rounded-3xl bg-slate-900 shadow-lg transition-shadow duration-500 hover:shadow-2xl hover:shadow-primary/25">
                  <Photo src={t.image} alt={t.title} sizes="(min-width:768px) 33vw, 100vw" className="aspect-[4/5]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <span className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-white/15 backdrop-blur"><t.icon className="h-5 w-5" /></span>
                    <h3 className="text-xl font-semibold">{t.title}</h3>
                    <p className="mt-1.5 text-sm text-white/80">{t.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PATIENT EXPERIENCE */}
      <section className="section bg-[#faf7f2]">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="min-w-0 lg:col-span-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Patient experience</p>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-4xl">Designed Around Patient Comfort</h2>
            <p className="mt-4 text-slate-600">From the moment you arrive to the day you go home, every space is planned to keep you comfortable and safe.</p>
            <div className="group mt-8 hidden lg:block">
              <Photo src={IMG.ipd} alt="Patient room" sizes="40vw" className="aspect-[4/3] rounded-3xl shadow-lg" />
            </div>
          </Reveal>
          <ol className="min-w-0 divide-y divide-slate-200 border-y border-slate-200 lg:col-span-7">
            {experience.map((e, i) => (
              <Reveal key={e.n} delay={i * 70}>
                <li className="flex gap-5 py-6 sm:gap-8 sm:py-8">
                  <span className="w-12 shrink-0 text-3xl font-bold text-primary/30 sm:w-16 sm:text-5xl">{e.n}</span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">{e.title}</h3>
                    <p className="mt-1 text-slate-600">{e.desc}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 6. GALLERY */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-4xl">Inside Our Hospital</h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-14 lg:grid-cols-4 lg:grid-rows-2">
            {[
              { src: IMG.ot, label: "Operation Theatre", cls: "col-span-2 row-span-2 aspect-square lg:aspect-auto lg:min-h-[28rem]" },
              { src: IMG.endoscopy, label: "Endoscopy Unit", cls: "aspect-square" },
              { src: IMG.reception, label: "Reception", cls: "aspect-square" },
              { src: IMG.ipd, label: "Patient Room", cls: "aspect-square" },
              { src: IMG.diagnostics, label: "Diagnostics", cls: "aspect-square" },
            ].map((g, i) => (
              <Reveal key={g.label} delay={i * 60} className={g.cls}>
                <figure className="group relative h-full w-full overflow-hidden rounded-2xl shadow-lg sm:rounded-3xl">
                  <Image src={g.src} alt={g.label} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-xs font-medium text-white sm:p-4 sm:text-sm">
                    {g.label}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY INFRASTRUCTURE MATTERS */}
      <section className="section bg-[#faf7f2]">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-20">
          <Reveal className="min-w-0 lg:sticky lg:top-28 lg:self-start">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Why it matters</p>
            <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Better infrastructure doesn&apos;t replace expertise.
            </h2>
            <p className="mt-4 text-3xl font-bold leading-tight text-primary sm:text-5xl">It enhances it.</p>
          </Reveal>
          <ul className="min-w-0 divide-y divide-slate-200 border-y border-slate-200">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 70}>
                <li className="flex gap-5 py-6">
                  <span className="text-sm font-semibold text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">{b.title}</h3>
                    <p className="mt-1 text-slate-600">{b.desc}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 8. QUALITY & SAFETY */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-center text-2xl font-bold text-slate-900 sm:text-4xl">Committed To Safety And Quality</h2>
          </Reveal>
          <div className="mt-10 grid gap-x-10 gap-y-8 rounded-3xl bg-primary/5 p-6 sm:grid-cols-2 sm:p-10 lg:mt-14 lg:grid-cols-4">
            {quality.map((q, i) => (
              <Reveal key={q.title} delay={i * 70}>
                <div className="flex gap-4 lg:flex-col">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-primary shadow-sm"><q.icon className="h-6 w-6" /></span>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-slate-900">{q.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{q.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TRUST BAND — typography only, no invented numbers */}
      <section className="bg-primary py-12 text-white sm:py-16">
        <div className="container-x grid grid-cols-2 gap-y-8 lg:grid-cols-4">
          {proof.map((p, i) => (
            <Reveal key={p.big} delay={i * 70}>
              <div className="px-2 text-center lg:border-l lg:border-white/15 lg:first:border-l-0">
                <p className="text-xl font-bold sm:text-3xl">{p.big}</p>
                <p className="mt-1 text-sm text-white/70">{p.small}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 10. CTA */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#fbf7ef] to-white p-8 text-center shadow-xl ring-1 ring-black/5 sm:p-14">
              <HeartPulse className="mx-auto mb-4 h-9 w-9 text-accent" />
              <h2 className="text-2xl font-bold text-slate-900 sm:text-4xl">Experience Modern Urological Care.</h2>
              <p className="mx-auto mt-3 max-w-xl text-slate-600">Visit our facility and consult with our specialist team.</p>
              <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <Link href={BOOK} className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-white shadow-lg shadow-accent/30 transition hover:brightness-110">
                  <CalendarCheck className="h-5 w-5" /> Book Appointment
                </Link>
                <a href={PHONE} className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 px-6 py-3.5 text-sm font-semibold text-primary transition hover:bg-primary/5">
                  <Phone className="h-4 w-4" /> Call Hospital
                </a>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}