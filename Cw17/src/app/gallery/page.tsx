import type { Metadata } from "next";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CalendarCheck, ChevronDown, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import { gallery } from "@/data/content";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description: "Photo gallery of Yashodhara Urology & Multispeciality Hospital and Dental Clinic, Latur – hospital, facilities and procedures.",
  alternates: { canonical: "/gallery" },
  openGraph: { title: "Gallery – Yashodhara Hospital, Latur", url: "/gallery" },
};

/* ------------------------------------------------------------------ */
/* CONFIG                                                               */
/* Images come from your existing `gallery` data, picked by position    */
/* (the order shown on the current /gallery page, top-left = 0).        */
/* If you reorder or replace photos in the data, update the numbers.    */
/* ------------------------------------------------------------------ */
const PHONE_HREF = "tel:+912382227850";
const PHONE_LABEL = "02382-227850";
const BOOK = "/contact#appointment";

type Src = string | StaticImageData;
const img = (i: number): Src | undefined => {
  const x = gallery[i] as unknown as Record<string, unknown> | undefined;
  const v = x?.src ?? x?.image ?? x?.img ?? x?.url;
  return v ? (v as Src) : undefined;
};

const categories = [
  { title: "Hospital Campus", href: "#story", cover: 0, ids: [0, 1, 10] },
  { title: "Operation Theatres", href: "#operation-theatre", cover: 3, ids: [3, 9] },
  { title: "Advanced Technology", href: "#diagnostics", cover: 2, ids: [2, 5] },
  { title: "Dental Clinic", href: "#dental-clinic", cover: 6, ids: [6, 7] },
  { title: "Patient Care Areas", href: "#patient-rooms", cover: 4, ids: [4, 8, 11] },
];

const showcase = [
  {
    id: "operation-theatre", eyebrow: "Surgical care", title: "Operation Theatre",
    desc: "A clean, controlled theatre with surgical lights, monitors and anaesthesia equipment, set up for endoscopic and minimally invasive procedures.",
    points: ["Surgical lights and monitors", "Equipment ready for endoscopic procedures", "Clean, controlled environment"],
    main: 3, small: 9,
  },
  {
    id: "diagnostics", eyebrow: "Diagnostics and equipment", title: "Diagnostic Equipment",
    desc: "Procedure and imaging rooms equipped so your doctor can investigate clearly and plan treatment with confidence.",
    points: ["Procedure and monitoring equipment", "Imaging support", "Organised, ready-to-use rooms"],
    main: 2, small: 5,
  },
  {
    id: "patient-rooms", eyebrow: "In-patient care", title: "Patient Rooms",
    desc: "Quiet in-patient rooms with adjustable beds and nursing close by, so recovery happens in comfort.",
    points: ["Adjustable patient beds", "Nursing access close by", "Calm, comfortable rooms"],
    main: 4, small: 8,
  },
  {
    id: "dental-clinic", eyebrow: "Yashodhara Dental Care", title: "Dental Clinic",
    desc: "A bright dental clinic with modern chairs and clean treatment areas, with digital dental X-ray (RVG) on site.",
    points: ["Modern dental chairs", "Clean treatment areas", "Digital dental X-ray on site"],
    main: 6, small: 7, href: "/dental-clinic", cta: "Visit the dental clinic page",
  },
];

const story = [
  { n: "01", t: "Arrive", d: "Ambajogai Road, Latur. From the first step, our team is here to guide you.", src: 0 },
  { n: "02", t: "Welcome", d: "A bright reception and waiting area where you check in without fuss.", src: 1 },
  { n: "03", t: "Consult", d: "Time with your specialist to talk through symptoms, tests and options.", src: 8 },
  { n: "04", t: "Move through clean spaces", d: "Well-lit corridors connect consultation, diagnostics and wards.", src: 10 },
];

const frames = [
  { i: 3, l: "Operation theatre", a: "aspect-[4/5]" }, { i: 1, l: "Reception", a: "aspect-square" },
  { i: 6, l: "Dental chair", a: "aspect-[3/4]" }, { i: 2, l: "Equipment room", a: "aspect-[4/3]" },
  { i: 4, l: "Patient room", a: "aspect-square" }, { i: 9, l: "Imaging procedure", a: "aspect-[4/5]" },
  { i: 0, l: "Hospital building", a: "aspect-[4/3]" }, { i: 7, l: "Dental treatment room", a: "aspect-[3/4]" },
  { i: 5, l: "Imaging room", a: "aspect-square" }, { i: 10, l: "Corridor", a: "aspect-[4/3]" },
  { i: 8, l: "Consultation room", a: "aspect-[4/5]" }, { i: 11, l: "Care team", a: "aspect-square" },
];

const facilityCards = [
  { t: "Operation Theatre", href: "#operation-theatre", i: 9 },
  { t: "Dental Clinic", href: "#dental-clinic", i: 7 },
  { t: "Diagnostics", href: "#diagnostics", i: 5 },
  { t: "Patient Care", href: "#patient-rooms", i: 8 },
];

/* ------------------------------------------------------------------ */

function Photo({ src, label, className = "", sizes, priority = false }: { src?: Src; label: string; className?: string; sizes: string; priority?: boolean }) {
  return (
    <div role="img" aria-label={label} className={`group relative overflow-hidden bg-gradient-to-br from-plum-600/25 to-accent/15 ${className}`}>
      {src ? <Image src={src} alt="" fill sizes={sizes} priority={priority} className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" /> : null}
    </div>
  );
}

export default function GalleryPage() {
  const total = gallery.length;
  const count = (ids: number[]) => ids.filter((i) => i < total).length;

  return (
    <>
      {/* 1. CINEMATIC HERO */}
     {/* 1. PREMIUM GALLERY HERO */}
<section className="relative overflow-hidden bg-gradient-to-br from-plum-950 via-plum-900 to-plum-800 py-24 lg:py-32">
  <div className="absolute inset-0 opacity-20">
    <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-accent blur-3xl" />
    <div className="absolute right-20 bottom-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
  </div>

  <div className="container-x relative">
    <nav
      aria-label="Breadcrumb"
      className="mb-8 text-sm text-white/70"
    >
      <Link href="/" className="hover:text-white">
        Home
      </Link>
      <span className="mx-2">/</span>
      <span className="text-white">Gallery</span>
    </nav>

    <div className="grid items-center gap-14 lg:grid-cols-2">
      {/* LEFT CONTENT */}
      <Reveal>
        <div>
          <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-accent">
            <span className="h-px w-10 bg-accent" />
            Photo Gallery
          </p>

          <h1 className="max-w-2xl text-5xl font-extrabold leading-tight text-white lg:text-7xl">
            Experience
            <span className="block text-accent">
              Yashodhara
            </span>
            Through Pictures
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Explore our operation theatres, advanced technology,
            patient care facilities and modern dental clinic through
            a curated visual journey.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#explore" className="btn-accent">
              Explore Gallery
              <ChevronDown size={18} />
            </a>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
              <div className="text-2xl font-bold text-white">
                {total}
              </div>
              <div className="text-xs uppercase tracking-wider text-white/60">
                Photos
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
              <div className="text-2xl font-bold text-white">
                {categories.length}
              </div>
              <div className="text-xs uppercase tracking-wider text-white/60">
                Areas
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* RIGHT COLLAGE */}
      <Reveal delay={150}>
        <div className="relative mx-auto h-[500px] w-full max-w-[600px]">
          <div className="absolute left-0 top-8 w-[42%] overflow-hidden rounded-3xl shadow-2xl">
            <Photo
              src={img(0)}
              label="Hospital"
              sizes="300px"
              className="aspect-[3/4]"
            />
          </div>

          <div className="absolute right-0 top-0 w-[52%] overflow-hidden rounded-3xl shadow-2xl">
            <Photo
              src={img(3)}
              label="Operation Theatre"
              sizes="400px"
              className="aspect-[4/3]"
            />
          </div>

          <div className="absolute bottom-0 left-[15%] w-[45%] overflow-hidden rounded-3xl shadow-2xl">
            <Photo
              src={img(6)}
              label="Dental Clinic"
              sizes="350px"
              className="aspect-square"
            />
          </div>

          <div className="absolute bottom-10 right-0 w-[35%] overflow-hidden rounded-3xl shadow-2xl">
            <Photo
              src={img(4)}
              label="Patient Care"
              sizes="250px"
              className="aspect-[3/4]"
            />
          </div>

          <div className="absolute left-[42%] top-[42%] z-20 -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/10 bg-white/10 px-6 py-5 backdrop-blur-xl">
            <div className="text-center">
              <div className="text-3xl font-extrabold text-white">
                {total}+
              </div>
              <div className="text-sm text-white/70">
                Hospital Images
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </div>
</section>

      {/* 2. VISUAL CATEGORY NAVIGATION */}
      <section id="explore" className="section scroll-mt-24">
        <div className="container-x">
          <Reveal>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-red">Explore</p>
            <h2 className="max-w-2xl text-3xl font-extrabold text-plum-900 md:text-4xl">Choose where to begin</h2>
          </Reveal>
          <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 lg:mt-12 lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0">
            {categories.map((c, i) => {
              const n = count(c.ids);
              return (
                <Reveal key={c.title} delay={i * 60} className="min-w-[70%] snap-start sm:min-w-[40%] lg:min-w-0">
                  <Link href={c.href} className="group relative block aspect-[3/4] overflow-hidden rounded-3xl shadow-lg transition duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-plum-900/25">
                    <Photo src={img(c.cover)} label={c.title} sizes="(min-width:1024px) 20vw, 70vw" className="absolute inset-0" />
                    <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-plum-900/90 via-plum-900/20 to-transparent" />
                    <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-plum-900 opacity-0 transition duration-300 group-hover:opacity-100"><ArrowUpRight size={18} aria-hidden /></span>
                    <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                      <h3 className="text-lg font-bold leading-tight">{c.title}</h3>
                      <p className="mt-1 text-sm text-white/75">{n} photo{n === 1 ? "" : "s"}</p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. INFRASTRUCTURE SHOWCASE */}
      <section className="section bg-cream">
        <div className="container-x">
          <Reveal>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-red">Infrastructure</p>
            <h2 className="max-w-2xl text-3xl font-extrabold text-plum-900 md:text-4xl">The spaces behind the care</h2>
          </Reveal>
          <div className="mt-12 space-y-16 sm:space-y-24 lg:mt-16 lg:space-y-32">
            {showcase.map((s, i) => {
              const flip = i % 2 === 1;
              return (
                <div key={s.id} id={s.id} className="grid scroll-mt-28 items-center gap-8 lg:grid-cols-12 lg:gap-14">
                  <Reveal className={`relative min-w-0 pb-8 lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
                    <Photo src={img(s.main)} label={s.title} sizes="(min-width:1024px) 58vw, 100vw" className="aspect-[4/3] rounded-3xl shadow-xl" />
                    <Photo src={img(s.small)} label={`${s.title}, another view`} sizes="260px" className={`absolute bottom-0 aspect-[4/3] w-2/5 rounded-2xl border-4 border-white shadow-xl ${flip ? "left-3 sm:-left-5" : "right-3 sm:-right-5"}`} />
                  </Reveal>
                  <Reveal delay={100} className={`min-w-0 lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">{s.eyebrow}</p>
                    <h3 className="mt-2 text-2xl font-extrabold text-plum-900 sm:text-3xl">{s.title}</h3>
                    <p className="mt-3 leading-relaxed text-slate-600">{s.desc}</p>
                    <ul className="mt-5 divide-y divide-plum-600/10 border-y border-plum-600/10">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-center gap-3 py-3 text-slate-700"><span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{p}</li>
                      ))}
                    </ul>
                    {s.href ? <Link href={s.href} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-plum-700">{s.cta} <ArrowRight size={16} aria-hidden /></Link> : null}
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. THE HOSPITAL STORY */}
      <section id="story" className="section scroll-mt-24">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="min-w-0 lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-red">The story in pictures</p>
            <h2 className="text-3xl font-extrabold leading-tight text-plum-900 md:text-4xl">A visit, step by step</h2>
            <p className="mt-4 leading-relaxed text-slate-600">From the front door to the treatment room, this is what a visit to Yashodhara Hospital looks like.</p>
          </Reveal>
          <div className="min-w-0 space-y-12 lg:col-span-8 lg:space-y-16">
            {story.map((c, i) => (
              <Reveal key={c.n}>
                <figure className={`lg:w-[88%] ${i % 2 === 1 ? "lg:ml-auto" : ""}`}>
                  <Photo src={img(c.src)} label={c.t} sizes="(min-width:1024px) 55vw, 100vw" className="aspect-[16/10] rounded-3xl shadow-xl" />
                  <figcaption className="mt-5 flex gap-5">
                    <span className="text-3xl font-extrabold text-accent sm:text-4xl">{c.n}</span>
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold text-plum-900 sm:text-xl">{c.t}</h3>
                      <p className="mt-1 text-slate-600">{c.d}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MASONRY */}
      <section className="section bg-plum-50">
        <div className="container-x">
          <Reveal>
            <p className="mb-2 text-center text-xs font-bold uppercase tracking-[0.2em] text-brand-red">Gallery</p>
            <h2 className="text-center text-3xl font-extrabold text-plum-900 md:text-4xl">The hospital in frames</h2>
          </Reveal>
          <div className="mt-10 columns-2 gap-3 sm:gap-4 lg:mt-14 lg:columns-3">
            {frames.map((f, i) => (
              <Reveal key={f.i} delay={(i % 3) * 60} className="mb-3 break-inside-avoid sm:mb-4">
                <figure className="relative overflow-hidden rounded-2xl shadow-lg sm:rounded-3xl">
                  <Photo src={img(f.i)} label={f.l} sizes="(min-width:1024px) 33vw, 50vw" className={f.a} />
                  <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-plum-900/75 to-transparent p-3 text-xs font-medium text-white sm:p-4 sm:text-sm">{f.l}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FACILITY CARDS */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-center text-3xl font-extrabold text-plum-900 md:text-4xl">Explore by facility</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-14">
            {facilityCards.map((f, i) => (
              <Reveal key={f.t} delay={(i % 2) * 90}>
                <Link href={f.href} className="group relative block aspect-[4/3] overflow-hidden rounded-3xl shadow-lg transition duration-500 hover:shadow-2xl hover:shadow-plum-900/25">
                  <Photo src={img(f.i)} label={f.t} sizes="(min-width:640px) 48vw, 100vw" className="absolute inset-0" />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-plum-900/90 via-plum-900/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white sm:p-8">
                    <h3 className="text-2xl font-extrabold">{f.t}</h3>
                    <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-plum-900 transition group-hover:bg-accent group-hover:text-white">
                      View Gallery <ArrowRight size={16} aria-hidden />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-plum-900 via-plum-900 to-plum-700 py-16 text-white sm:py-24">
        <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="container-x relative text-center">
          <Reveal>
            <h2 className="text-3xl font-extrabold sm:text-5xl">Visit Our Hospital</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/80">See our facilities in person and meet the team who will look after you.</p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link href={BOOK} className="btn-accent"><CalendarCheck size={20} aria-hidden />Book Appointment</Link>
              <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"><Phone size={20} aria-hidden />Call Us {PHONE_LABEL}</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}