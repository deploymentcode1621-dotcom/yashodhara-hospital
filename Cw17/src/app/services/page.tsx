import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  Gem,
  MessageCircle,
  Phone,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { services } from "@/data/content";
import { doctor } from "@/data/site";

export const metadata: Metadata = {
  title: "Urology Services in Latur",
  description:
    "Kidney stone treatment (PCNL, URSL, ESWL), prostate care, uro-oncology, urethral stricture, male infertility, female and paediatric urology at Yashodhara Hospital, Latur.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Urology & Andrology Services – Yashodhara Hospital, Latur",
    url: "/services",
  },
};

/* ------------------------------------------------------------------
   IMAGES
   Real files: about-hospital.jpg, Doctor.avif.
   Everything else is a generated placeholder. Replace later with
   real paths, e.g. "/images/endoscopy.jpg".
------------------------------------------------------------------- */
const placeholder = (label: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='900' viewBox='0 0 1200 900'>
      <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0' stop-color='#3b1048'/><stop offset='1' stop-color='#8a4fa0'/>
      </linearGradient></defs>
      <rect width='1200' height='900' fill='url(#g)'/>
      <circle cx='1000' cy='150' r='220' fill='#f5a63a' fill-opacity='0.12'/>
      <text x='600' y='440' text-anchor='middle' font-family='sans-serif' font-size='48' font-weight='700' fill='#ffffff' fill-opacity='0.9'>${label}</text>
      <text x='600' y='500' text-anchor='middle' font-family='sans-serif' font-size='26' fill='#ffffff' fill-opacity='0.6'>Placeholder image</text>
    </svg>`
  )}`;

const IMG = {
  hero: "/images/about-hospital.jpg", // REAL
  doctor: "/images/Doctor.avif", // REAL
  endoscopy: placeholder("Endoscopic Procedures"), // TODO
  surgery: placeholder("Minimally Invasive Surgery"), // TODO
  diagnostics: placeholder("Diagnostic Equipment"), // TODO
} as const;

const PHONE_DISPLAY = "02382-227850";
const PHONE_HREF = "tel:02382227850";
const WHATSAPP_HREF = "https://wa.me/919021186939";

const eyebrow = "text-xs font-bold uppercase tracking-[0.2em] text-brand-red";
const h2 =
  "mt-3 text-3xl font-extrabold leading-tight text-plum-900 md:text-4xl";
const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold transition duration-200 hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

/* ---------------- DATA ---------------- */
const featured = [
  {
    icon: Gem,
    title: "Kidney Stone Treatment",
    text: "Advanced endoscopic management of kidney and ureteric stones – PCNL, URSL and ESWL – for faster, more comfortable recovery.",
  },
  {
    icon: Activity,
    title: "Prostate Care",
    text: "Diagnosis and treatment of prostate problems, from medical management to endoscopic surgery such as TURP.",
  },
  {
    icon: ShieldCheck,
    title: "Uro-Oncology",
    text: "Careful diagnosis and treatment of cancers of the urinary tract and male reproductive system, including preventive screening.",
  },
  {
    icon: Stethoscope,
    title: "Male Infertility",
    text: "Comprehensive evaluation and treatment of male infertility and sexual health concerns, in a private and respectful setting.",
  },
];

const directory = [
  {
    title: "Men's Urology",
    items: ["Prostate Care", "Male Infertility", "Andrology", "General Urology"],
  },
  {
    title: "Women's Urology",
    items: ["Female Urology", "Incontinence", "Recurrent UTI"],
  },
  {
    title: "Paediatric Urology",
    items: [
      "Undescended Testis",
      "Hypospadias",
      "PUJO",
      "Posterior Urethral Valve",
    ],
  },
  {
    title: "Advanced Procedures",
    items: ["PCNL", "URSL", "ESWL", "TURP", "TURBT", "Cystoscopy"],
  },
];

const principles = [
  { n: "01", title: "Accurate Diagnosis", text: "The right treatment starts with the right diagnosis." },
  { n: "02", title: "Advanced Endoscopic Care", text: "Minimally invasive procedures for faster recovery." },
  { n: "03", title: "Patient-Centred Treatment", text: "Plans built around your needs, explained clearly." },
  { n: "04", title: "Long-Term Follow-Up", text: "Care continues well after the procedure." },
];

const steps = [
  { n: "01", title: "Consultation", text: "Meet the specialist and discuss your concerns." },
  { n: "02", title: "Diagnosis & Investigations", text: "Tests and examination to confirm the condition." },
  { n: "03", title: "Personalised Treatment Plan", text: "Options explained so you can decide with confidence." },
  { n: "04", title: "Procedure / Surgery", text: "Treatment, using minimally invasive methods where suitable." },
  { n: "05", title: "Recovery & Follow-Up", text: "Guidance and review to support lasting recovery." },
];

const tech = [
  {
    src: IMG.endoscopy,
    title: "Endoscopic Procedures",
    text: "Treating stones, strictures and prostate conditions through natural passages.",
  },
  {
    src: IMG.surgery,
    title: "Minimally Invasive Surgery",
    text: "Smaller incisions, less discomfort and quicker return to routine.",
  },
  {
    src: IMG.diagnostics,
    title: "Modern Diagnostic Equipment",
    text: "Accurate evaluation to guide the right treatment decision.",
  },
];

const conditions = [
  "Kidney Stones",
  "Prostate Enlargement",
  "Kidney Cancer",
  "Bladder Cancer",
  "Male Infertility",
  "Urinary Infection",
  "Urinary Incontinence",
  "Urethral Stricture",
  "Hydrocele",
  "Varicocele",
  "Frequent Urination",
  "Urinary Obstruction",
];

const expertise = [
  "Kidney Stones",
  "PCNL",
  "URSL",
  "Prostate Surgery",
  "Male Infertility",
  "Uro-Oncology",
  "Female Urology",
  "Paediatric Urology",
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.title,
          })),
        }}
      />

      {/* Keeps old "/services#slug" links (from Home / footer) working */}
      <div aria-hidden>
        {services.map((s) => (
          <span key={s.slug} id={s.slug} className="block h-0 scroll-mt-28" />
        ))}
      </div>

      {/* ============ 1. HERO ============ */}
           {/* ============ 1. HERO (soft) ============ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream to-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-plum-100/40 blur-3xl"
        />
        <div className="container-x relative grid items-center gap-10 py-12 md:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-20">
          <div>
            <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
              <Link href="/" className="hover:text-plum-700">Home</Link>{" "}
              <span aria-hidden>/</span>{" "}
              <span className="text-plum-700">Services</span>
            </nav>

            <p className={`${eyebrow} mt-6`}>Specialised Urology Care</p>
            <h1 className="mt-3 max-w-2xl text-3xl font-extrabold leading-[1.15] text-plum-900 md:text-4xl lg:text-[2.6rem]">
              Advanced care for every stage of{" "}
              <span className="text-accent-600">urological health.</span>
            </h1>
            <p className="mt-5 max-w-[540px] leading-relaxed text-slate-600">
              Comprehensive diagnosis, treatment and advanced surgical care for
              urological and andrological conditions in men, women and children.
            </p>

            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-700">
              {[
                "Specialist-led care",
                "Advanced endoscopic procedures",
                "Serving Latur since 2015",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="shrink-0 text-accent-600" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact#appointment"
                className={`${btnBase} bg-accent text-plum-900 shadow-md hover:shadow-lg`}
              >
                <CalendarCheck size={18} aria-hidden /> Book Appointment
              </Link>
              <a
                href="#core"
                className={`${btnBase} border border-plum-200 bg-white/70 text-plum-800 hover:shadow-md`}
              >
                Explore Treatments <ArrowRight size={16} aria-hidden />
              </a>
            </div>
          </div>

          {/* Soft "find your treatment" list */}
          <Reveal delay={100}>
            <aside
              aria-label="Find your treatment"
              className="rounded-3xl border border-plum-100/80 bg-white/60 p-6 backdrop-blur-sm md:p-8"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-plum-500">
                Find your treatment
              </p>
              <ul className="mt-3 divide-y divide-plum-100">
                {[
                  { label: "Kidney stones", href: "#core" },
                  { label: "Prostate problems", href: "#core" },
                  { label: "Cancer care (uro-oncology)", href: "#core" },
                  { label: "Male infertility & sexual health", href: "#core" },
                  { label: "Women's & children's urology", href: "#treatments" },
                ].map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="group flex items-center justify-between gap-4 py-3.5 text-slate-700 transition duration-200 hover:text-plum-800"
                    >
                      <span className="transition duration-200 group-hover:translate-x-1">
                        {l.label}
                      </span>
                      <ArrowRight
                        size={16}
                        className="shrink-0 text-plum-300 transition group-hover:text-accent-600"
                        aria-hidden
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>
        </div>
      </section>

      {/* ============ 2. FEATURED SPECIALITIES ============ */}
      <section id="core" className="scroll-mt-24 bg-white py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <p className={eyebrow}>Core Specialities</p>
            <h2 className={`${h2} max-w-xl`}>Our Core Areas Of Expertise</h2>
            <p className="mt-4 max-w-xl text-slate-600">
              Focused care delivered by a specialist team.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {featured.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={(i % 2) * 100}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-plum-100 bg-white p-8 shadow-md transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl md:p-10">
                  <span
                    aria-hidden
                    className="absolute right-6 top-2 select-none text-8xl font-extrabold text-plum-50 transition-colors group-hover:text-accent/20"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="relative mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-plum-700 text-white">
                    <Icon size={30} aria-hidden />
                  </span>
                  <h3 className="relative text-2xl font-bold text-plum-900">
                    {title}
                  </h3>
                  <span aria-hidden className="relative mt-3 block h-0.5 w-10 bg-accent" />
                  <p className="relative mt-4 max-w-md leading-relaxed text-slate-600">
                    {text}
                  </p>
                  <a
                    href="#treatments"
                    className="relative mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-bold text-plum-700 transition-all group-hover:gap-3"
                  >
                    Learn More <ArrowRight size={16} aria-hidden />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 3. TREATMENT DIRECTORY ============ */}
      <section id="treatments" className="scroll-mt-24 bg-cream py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <p className={eyebrow}>Treatment Directory</p>
            <h2 className={`${h2} max-w-xl`}>Comprehensive Urology Services</h2>
            <p className="mt-4 max-w-xl text-slate-600">
              For more information or to clarify any doubts, please contact the
              doctors at the hospital. Treatment decisions are always made after
              proper consultation and examination.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {directory.map((cat, i) => (
              <Reveal key={cat.title} delay={i * 100}>
                <section
                  className={`lg:px-7 ${
                    i === 0 ? "lg:pl-0" : "lg:border-l lg:border-plum-100"
                  } ${i === directory.length - 1 ? "lg:pr-0" : ""}`}
                >
                  <h3 className="text-xl font-bold text-plum-900">{cat.title}</h3>
                  <span aria-hidden className="mt-3 block h-0.5 w-10 bg-accent" />
                  <ol className="mt-5 divide-y divide-plum-100">
                    {cat.items.map((item, j) => (
                      <li
                        key={item}
                        className="group flex items-baseline gap-3 py-3 text-slate-700 transition duration-200 hover:translate-x-1 hover:text-plum-800"
                      >
                        <span className="w-6 text-xs font-bold text-plum-300 transition-colors group-hover:text-accent-600">
                          {String(j + 1).padStart(2, "0")}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ol>
                </section>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 4. APPROACH ============ */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className={eyebrow}>Our Approach</p>
            <h2 className={h2}>Why our approach is different.</h2>
            <p className="mt-6 max-w-[520px] text-xl font-semibold leading-snug text-plum-700 md:text-2xl">
              Technology helps. Expertise matters. But successful treatment
              begins with understanding the patient.
            </p>
            <span aria-hidden className="mt-6 block h-1 w-16 rounded-full bg-accent" />
          </Reveal>

          <ol className="divide-y divide-plum-100 border-y border-plum-100">
            {principles.map((p, i) => (
              <li
                key={p.n}
                className="group transition duration-300 md:hover:translate-x-1.5"
              >
                <Reveal delay={i * 80}>
                  <div className="flex gap-5 py-6">
                    <span className="w-10 shrink-0 text-2xl font-extrabold text-plum-200 transition-colors group-hover:text-accent-600">
                      {p.n}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-plum-900">{p.title}</h3>
                      <p className="mt-1 text-slate-600">{p.text}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ 5. TREATMENT JOURNEY ============ */}
      <section className="bg-plum-50 py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <p className={eyebrow}>Treatment Process</p>
            <h2 className={`${h2} max-w-xl`}>Your Treatment Journey</h2>
          </Reveal>

          <ol className="relative ml-2 mt-14 space-y-10 border-l border-plum-200 pl-8 lg:ml-0 lg:grid lg:grid-cols-5 lg:gap-8 lg:space-y-0 lg:border-l-0 lg:border-t lg:pl-0 lg:pt-10">
            {steps.map((s, i) => (
              <li key={s.n} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[39px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-accent ring-4 ring-accent/20 lg:-top-[47px] lg:left-0"
                />
                <Reveal delay={i * 100}>
                  <p className="text-sm font-bold tracking-wider text-accent-600">
                    {s.n}
                  </p>
                  <h3 className="mt-2 text-lg font-bold leading-snug text-plum-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-slate-600">{s.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ 6. DOCTOR ============ */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[0.8fr_1.1fr] lg:gap-20">
          <Reveal>
            <div className="group relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl shadow-2xl lg:max-w-none">
              <Image
                src={IMG.doctor}
                alt={`${doctor.name}, ${doctor.title}`}
                fill
                sizes="(min-width:1024px) 40vw, 90vw"
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className={eyebrow}>Your Specialist</p>
            <h2 className={h2}>Specialist Care Led By Experience</h2>
            <p className="mt-5 text-xl font-bold text-plum-800">{doctor.name}</p>
            <p className="font-semibold text-plum-600">{doctor.title}</p>
            <p className="mt-4 max-w-[560px] leading-relaxed text-slate-600">
              Every treatment plan is guided by a specialist with advanced
              training in urology, from kidney stones and prostate surgery to
              uro-oncology and male infertility.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {expertise.map((e) => (
                <li
                  key={e}
                  className="rounded-full border border-plum-200 bg-plum-50/60 px-3.5 py-1.5 text-sm text-plum-800"
                >
                  {e}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/about#doctor"
                className={`${btnBase} bg-plum-800 text-white shadow-md hover:shadow-lg`}
              >
                Meet Our Specialist <ArrowRight size={16} aria-hidden />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 7. TECHNOLOGY ============ */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <p className={eyebrow}>Infrastructure</p>
            <h2 className={`${h2} max-w-2xl`}>
              Advanced Technology For Better Outcomes
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {tech.map((t, i) => (
              <Reveal key={t.title} delay={i * 100}>
                <figure className="group">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl">
                    <Image
                      src={t.src}
                      alt={t.title}
                      fill
                      sizes="(min-width:768px) 33vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption className="mt-5">
                    <h3 className="text-xl font-bold text-plum-900">{t.title}</h3>
                    <span aria-hidden className="mt-2 block h-0.5 w-8 bg-accent" />
                    <p className="mt-3 text-slate-600">{t.text}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 8. CONDITIONS ============ */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <p className={eyebrow}>Conditions</p>
            <h2 className={`${h2} max-w-xl`}>Conditions We Commonly Treat</h2>
          </Reveal>
          <Reveal delay={100}>
            <ul className="mt-10 flex flex-wrap gap-3">
              {conditions.map((c) => (
                <li
                  key={c}
                  className="cursor-default rounded-full border border-plum-200 bg-white px-5 py-2.5 text-sm font-semibold text-plum-800 transition duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-cream hover:shadow-md"
                >
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ============ 9. REASSURANCE BAND ============ */}
      <section className="bg-plum-50 py-10">
        <div className="container-x flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-plum-700 shadow-sm">
              <ShieldCheck size={24} aria-hidden />
            </span>
            <div>
              <h2 className="text-xl font-bold text-plum-900">
                Quality Care With Government Scheme Support
              </h2>
              <p className="mt-1 max-w-2xl text-sm text-slate-600">
                Associated with PM-JAY and MJPJAY. Eligibility is subject to
                hospital verification.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className={`${btnBase} shrink-0 border border-plum-300 bg-white text-plum-800 hover:shadow-md`}
          >
            <BadgeCheck size={16} aria-hidden /> Check Eligibility
          </Link>
        </div>
      </section>

      {/* ============ 10. CTA ============ */}
      <section className="px-4 py-16 md:py-24">
        <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-3xl bg-gradient-to-br from-plum-900 via-plum-800 to-plum-700 px-6 py-12 shadow-2xl md:px-14 md:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
          />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-3xl font-extrabold leading-tight text-white md:text-4xl">
                Take The First Step Toward Better Urological Health.
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-plum-100">
                Book a consultation with our specialist team.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/contact#appointment"
                className={`${btnBase} bg-accent py-4 text-base text-plum-900 shadow-lg hover:shadow-xl`}
              >
                <CalendarCheck size={18} aria-hidden /> Book Appointment
              </Link>
              <a
                href={PHONE_HREF}
                className={`${btnBase} border border-white/40 text-white hover:bg-white/10`}
              >
                <Phone size={18} aria-hidden /> Call Hospital · {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-2 text-sm font-semibold text-plum-100 underline-offset-4 hover:text-white hover:underline"
              >
                <MessageCircle size={16} aria-hidden /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}