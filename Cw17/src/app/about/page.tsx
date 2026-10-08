import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  Eye,
  HeartHandshake,
  MessageCircle,
  Phone,
  ShieldCheck,
  Target,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { doctor, site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About Yashodhara Urology Center & Multispeciality Hospital, Latur – serving patients since 2015 with advanced, ethical and compassionate urology care by Dr. Dhiraj Hedda.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About Yashodhara Hospital, Latur", url: "/about" },
};

/* ------------------------------------------------------------------
   PLACEHOLDER IMAGES
   Generates an inline SVG (plum gradient + label). No files needed.
   Later, replace any placeholder("...") with a real path such as
   "/images/hospital-exterior.jpg".
------------------------------------------------------------------- */
const placeholder = (label: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='900' viewBox='0 0 1200 900'>
      <defs>
        <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0' stop-color='#3b1048'/>
          <stop offset='1' stop-color='#8a4fa0'/>
        </linearGradient>
      </defs>
      <rect width='1200' height='900' fill='url(#g)'/>
      <circle cx='1000' cy='150' r='220' fill='#f5a63a' fill-opacity='0.12'/>
      <text x='600' y='440' text-anchor='middle' font-family='sans-serif' font-size='48' font-weight='700' fill='#ffffff' fill-opacity='0.9'>${label}</text>
      <text x='600' y='500' text-anchor='middle' font-family='sans-serif' font-size='26' fill='#ffffff' fill-opacity='0.6'>Placeholder image</text>
    </svg>`
  )}`;

const IMG = {
  hero: "/images/about-hospital.jpg", // REAL – operation theatre
  doctor: "/images/Doctor.avif", // REAL – Dr. Dhiraj Hedda
  story: placeholder("Hospital Exterior"), // TODO: replace
  showcaseLarge: placeholder("Modern Operation Theatre"), // TODO: replace
  showcaseA: placeholder("Advanced Endoscopy"), // TODO: replace
  showcaseB: placeholder("Patient-Friendly Spaces"), // TODO: replace
} as const;

const PHONE_DISPLAY = "02382-227850";
const PHONE_HREF = "tel:02382227850";
const WHATSAPP_HREF = "https://wa.me/919021186939";

const eyebrow = "text-xs font-bold uppercase tracking-[0.2em] text-brand-red";
const h2 =
  "mt-3 text-3xl font-extrabold leading-tight text-plum-900 md:text-4xl";

const purposes = [
  {
    n: "01",
    icon: Target,
    title: "Our Mission",
    text: "To provide advanced, ethical and compassionate care for urological, andrological and related disorders using modern medical technology.",
  },
  {
    n: "02",
    icon: Eye,
    title: "Our Vision",
    text: "To make specialised urological care accessible, reliable and trusted for the people of Latur and the surrounding region.",
  },
  {
    n: "03",
    icon: HeartHandshake,
    title: "Patient-Care Philosophy",
    text: "Every patient deserves clarity, dignity and a treatment plan designed around their individual needs.",
  },
];

const principles = [
  {
    n: "01",
    title: "Specialist Expertise",
    text: "Urology, andrology and uro-oncology care led by a dedicated specialist.",
  },
  {
    n: "02",
    title: "Advanced & Minimally Invasive Care",
    text: "Endoscopic procedures such as PCNL, URSL, ESWL and TURP for faster recovery.",
  },
  {
    n: "03",
    title: "Clear, Ethical Communication",
    text: "Honest explanations of your diagnosis and options, so you can decide with confidence.",
  },
  {
    n: "04",
    title: "Safe & Patient-Friendly Environment",
    text: "A hygienic, comfortable hospital focused on patient safety and dignity.",
  },
];

const journey = [
  {
    label: "2015",
    title: "Yashodhara begins serving Latur",
    text: "The hospital opens its doors to patients in Latur and nearby districts.",
  },
  {
    label: "Specialised Urology",
    title: "Endoscopic & minimally invasive focus",
    text: "Focused expertise in endoscopic and minimally invasive urological care.",
  },
  {
    label: "Today",
    title: "Comprehensive care under one roof",
    text: "Urology, andrology, uro-oncology, female and paediatric urology together.",
  },
];

const stats = [
  { big: "11+", label: "Years of Care" },
  { big: "Advanced", label: "Endoscopic Procedures" },
  { big: "Latur", label: "Maharashtra" },
];

const showcaseSmall = [
  { src: IMG.showcaseA, alt: "Endoscopy unit", cap: "Advanced Endoscopy" },
  {
    src: IMG.showcaseB,
    alt: "Patient-friendly hospital spaces",
    cap: "Patient-Friendly Spaces",
  },
];

const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold transition duration-200 hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const captionClass =
  "absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-1.5 text-sm font-semibold text-plum-900 backdrop-blur";

export default function AboutPage() {
  return (
    <>
      {/* ============ 1. HERO ============ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cream via-white to-plum-50">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-plum-100/60 blur-3xl"
        />
        <div className="container-x relative grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-24">
          <div>
            <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
              <Link href="/" className="hover:text-plum-700">
                Home
              </Link>{" "}
              <span aria-hidden>/</span>{" "}
              <span className="text-plum-700">About Us</span>
            </nav>
            <p className={`${eyebrow} mt-8`}>About Yashodhara</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] text-plum-900 md:text-5xl">
              Advanced Urological Care.
              <br />
              Built Around <span className="text-accent-600">People.</span>
            </h1>
            <p className="mt-6 max-w-[560px] text-base leading-relaxed text-slate-600 md:text-lg">
              Yashodhara has provided specialised urological and multispeciality
              care to Latur and surrounding communities since 2015, combining
              advanced technology with compassionate patient care.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="leading-none">
                <span className="block text-[11px] font-bold uppercase tracking-[0.3em] text-slate-500">
                  Since
                </span>
                <span className="mt-1 block text-4xl font-extrabold text-plum-800">
                  2015
                </span>
              </div>
              <span aria-hidden className="h-px w-24 bg-accent" />
            </div>
          </div>

          <Reveal delay={100}>
            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div
                aria-hidden
                className="absolute -bottom-5 -left-5 hidden h-full w-full rounded-[2rem] border border-accent/40 sm:block"
              />
              <div className="group relative aspect-[5/4] overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src={IMG.hero}
                  alt="Modern operation theatre at Yashodhara Hospital, Latur"
                  fill
                  priority
                  sizes="(min-width:1024px) 45vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="absolute -bottom-6 left-4 rounded-2xl bg-white px-5 py-4 shadow-xl sm:left-auto sm:-right-4">
                <p className="text-2xl font-extrabold leading-none text-plum-800">
                  11+ Years
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Serving Latur
                </p>
                <span aria-hidden className="mt-2 block h-0.5 w-8 bg-accent" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 2. OUR STORY ============ */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <p className={eyebrow}>Our Story</p>
            <h2 className={`${h2} max-w-xl`}>
              Specialised care, rooted in Latur.
            </h2>
          </Reveal>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <Reveal>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src={IMG.story}
                  alt="Yashodhara Urology Center & Multispeciality Hospital, Latur"
                  fill
                  sizes="(min-width:1024px) 55vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                />
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="max-w-[560px] space-y-5 text-base leading-relaxed text-slate-600">
                <p>
                  <strong className="text-plum-900">Established in 2015</strong>,
                  Yashodhara is a superspeciality genitourinary centre on
                  Ambajogai Road, treating conditions of the kidney, ureter,
                  bladder, prostate and male reproductive system.
                </p>
                <p>
                  We also care for women&apos;s and children&apos;s urological
                  problems, with a strong focus on accurate diagnosis before any
                  treatment begins.
                </p>
                <p>
                  Our approach centres on endoscopic and minimally invasive
                  procedures, so patients recover quickly and return to normal
                  life sooner – close to home, in Latur and neighbouring
                  regions.
                </p>
              </div>
            </Reveal>
          </div>

          <dl className="mt-14 grid grid-cols-1 divide-y divide-plum-100 border-y border-plum-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col-reverse px-0 py-6 sm:px-8 sm:first:pl-0"
              >
                <dt className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {s.label}
                </dt>
                <dd className="text-3xl font-extrabold text-plum-800 md:text-4xl">
                  {s.big}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ============ 3. PURPOSE ============ */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <p className={eyebrow}>Our Purpose</p>
            <h2 className={`${h2} max-w-xl`}>What guides everything we do.</h2>
          </Reveal>

          <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-0">
            {purposes.map(({ n, icon: Icon, title, text }, i) => (
              <Reveal key={n} delay={i * 100}>
                <article
                  className={`md:px-8 ${
                    i === 0 ? "md:pl-0" : "md:border-l md:border-plum-100"
                  } ${i === purposes.length - 1 ? "md:pr-0" : ""}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-5xl font-extrabold text-plum-200">
                      {n}
                    </span>
                    <Icon
                      size={26}
                      className="text-plum-700"
                      strokeWidth={1.6}
                      aria-hidden
                    />
                  </div>
                  <span aria-hidden className="mt-5 block h-0.5 w-10 bg-accent" />
                  <h3 className="mt-5 text-xl font-bold text-plum-900">
                    {title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 4. LEADERSHIP ============ */}
      <section
        id="doctor"
        className="relative overflow-hidden bg-gradient-to-b from-plum-50 to-cream py-20 md:py-28"
      >
        <span
          aria-hidden
          className="pointer-events-none absolute -left-10 top-10 select-none text-[28rem] font-extrabold leading-none text-plum-900/[0.03]"
        >
          Y
        </span>
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-[0.75fr_1.05fr] lg:gap-20">
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
            <p className={eyebrow}>Medical Leadership</p>
            <h2 className={h2}>Expertise you can trust.</h2>

            <div className="mt-7">
              <p className="text-2xl font-extrabold text-plum-800">
                {doctor.name}{" "}
                <span className="text-lg font-semibold text-plum-500">
                  ({doctor.marathi})
                </span>
              </p>
              <p className="mt-1 font-semibold text-plum-600">{doctor.title}</p>
            </div>

            <ul className="mt-6 space-y-3 text-slate-700">
              {doctor.qualifications.map((q) => (
                <li key={q} className="flex gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-accent-600"
                    aria-hidden
                  />
                  <span>{q}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-sm font-bold uppercase tracking-wider text-plum-900">
              Areas of Expertise
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {doctor.expertise.map((e) => (
                <li
                  key={e}
                  className="rounded-full border border-plum-200 bg-white/70 px-3.5 py-1.5 text-sm text-plum-800"
                >
                  {e}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm text-slate-500">
              Registration No.: {doctor.regNo}
            </p>

            <div className="mt-7">
              <Link
                href="/contact"
                className={`${btnBase} bg-plum-800 text-white shadow-md hover:shadow-lg`}
              >
                Book an Appointment <ArrowRight size={16} aria-hidden />
              </Link>
            </div>

            <p className="mt-6 border-t border-plum-100 pt-4 text-xs text-slate-500">
              Dental Clinic: Dr. Anushree Dhiraj Hedda, B.D.S. (Reg. No.
              A-16758) leads our Multispeciality Dental Clinic.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ 5. THE YASHODHARA DIFFERENCE ============ */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className={eyebrow}>The Yashodhara Difference</p>
            <h2 className={h2}>Care designed around the patient.</h2>
            <p className="mt-6 max-w-[520px] text-xl font-semibold leading-snug text-plum-700 md:text-2xl">
              Technology matters. Expertise matters. But great healthcare begins
              with understanding the person behind the diagnosis.
            </p>
            <span
              aria-hidden
              className="mt-6 block h-1 w-16 rounded-full bg-accent"
            />
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
                      <h3 className="text-lg font-bold text-plum-900">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-slate-600">{p.text}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ 6. INFRASTRUCTURE ============ */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <p className={eyebrow}>Our Facilities</p>
            <h2 className={`${h2} max-w-xl`}>
              Built for modern urological care.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-3 lg:grid-rows-2">
            <div className="lg:col-span-2 lg:row-span-2">
              <Reveal>
                <figure className="group relative aspect-[4/3] min-h-[280px] overflow-hidden rounded-3xl shadow-xl lg:aspect-auto lg:h-[520px]">
                  <Image
                    src={IMG.showcaseLarge}
                    alt="Modern operation theatre"
                    fill
                    sizes="(min-width:1024px) 66vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                  <figcaption className={captionClass}>
                    Modern Operation Theatre
                  </figcaption>
                </figure>
              </Reveal>
            </div>
            {showcaseSmall.map((im, i) => (
              <div key={im.cap}>
                <Reveal delay={(i + 1) * 100}>
                  <figure className="group relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl lg:aspect-auto lg:h-[250px]">
                    <Image
                      src={im.src}
                      alt={im.alt}
                      fill
                      sizes="(min-width:1024px) 33vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.03]"
                    />
                    <figcaption className={captionClass}>{im.cap}</figcaption>
                  </figure>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 7. JOURNEY ============ */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <p className={eyebrow}>Our Journey</p>
            <h2 className={`${h2} max-w-xl`}>
              Growing with the community we serve.
            </h2>
          </Reveal>

          <ol className="relative ml-2 mt-14 space-y-10 border-l border-plum-200 pl-8 md:ml-0 md:grid md:grid-cols-3 md:gap-10 md:space-y-0 md:border-l-0 md:border-t md:pl-0 md:pt-10">
            {journey.map((j, i) => (
              <li key={j.label} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[39px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-accent ring-4 ring-accent/20 md:-top-[47px] md:left-0"
                />
                <Reveal delay={i * 120}>
                  <p className="text-sm font-bold uppercase tracking-wider text-accent-600">
                    {j.label}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-plum-900">
                    {j.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-slate-600">{j.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ 8. TRUST / SCHEMES BAND ============ */}
      <section className="bg-plum-50 py-10">
        <div className="container-x flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-plum-700 shadow-sm">
              <ShieldCheck size={24} aria-hidden />
            </span>
            <div>
              <h2 className="text-xl font-bold text-plum-900">
                Quality specialist care made more accessible.
              </h2>
              <p className="mt-1 max-w-2xl text-sm text-slate-600">
                {site.name} is associated with the government health schemes
                PM-JAY and MJPJAY. Please contact the hospital to confirm
                eligibility.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className={`${btnBase} shrink-0 border border-plum-300 bg-white text-plum-800 hover:shadow-md`}
          >
            <BadgeCheck size={16} aria-hidden /> Check Scheme Eligibility
          </Link>
        </div>
      </section>

      {/* ============ 9. FINAL CTA ============ */}
      <section className="px-4 py-16 md:py-24">
        <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-3xl bg-gradient-to-br from-plum-900 via-plum-800 to-plum-700 px-6 py-12 shadow-2xl md:px-14 md:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
          />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-3xl font-extrabold leading-tight text-white md:text-4xl">
                Your health deserves specialist attention.
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-plum-100">
                Book a consultation for urological or andrological concerns. Our
                team is here to guide you through the next step.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/contact"
                className={`${btnBase} bg-accent text-plum-900 shadow-lg hover:shadow-xl`}
              >
                <CalendarCheck size={18} aria-hidden /> Book an Appointment
              </Link>
              <a
                href={PHONE_HREF}
                className={`${btnBase} border border-white/40 text-white hover:bg-white/10`}
              >
                <Phone size={18} aria-hidden /> Call {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-2 text-sm font-semibold text-plum-100 underline-offset-4 hover:text-white hover:underline"
              >
                <MessageCircle size={16} aria-hidden /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}