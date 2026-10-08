import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Armchair, ArrowRight, CalendarCheck, Check, Clock, Cog, Crown,
  MapPin, MessageCircle, Phone, ScanLine, ShieldCheck, Smile, Stethoscope, Wrench,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import MapEmbed from "@/components/MapEmbed";
import JsonLd from "@/components/JsonLd";
import { dentalSite } from "@/data/site";
import { gallery } from "@/data/content";

export const metadata: Metadata = {
  title: "Dental Clinic in Latur",
  description: "Yashodhara Multispeciality Dental Clinic, Ambajogai Road, Latur – root canal, implants, crowns & bridges, orthodontics, scaling, RVG X-ray and more by Dr. Anushree Hedda, B.D.S.",
  alternates: { canonical: "/dental-clinic" },
  openGraph: { title: "Yashodhara Multispeciality Dental Clinic, Latur", url: "/dental-clinic", images: ["/images/dental-hero.avif"] },
};

/* ------------------------------------------------------------------ */
/* CONFIG — paths marked TODO are placeholders; point them at real      */
/* photos in /public. A missing photo shows a soft gradient, not a      */
/* broken-image icon.                                                   */
/* ------------------------------------------------------------------ */
const WHATSAPP = "https://wa.me/919021186939"; // TODO: confirm the clinic's WhatsApp number
const BOOK = "/contact#appointment";

const pic = (list: unknown[], i: number, fallback: string) => {
  const x = list[i] as { src?: string; image?: string } | undefined;
  return x?.src ?? x?.image ?? fallback;
};

const featured = [
  { icon: Stethoscope, title: "Root Canal Treatment", text: "Treatment to save a badly infected or damaged tooth, so you can keep your natural smile." },
  { icon: Wrench, title: "Dental Implants", text: "A screw is placed in the jawbone and topped with a ceramic cap to replace a missing tooth." },
  { icon: Smile, title: "Orthodontic Treatment", text: "Correction of crooked or irregular teeth for a healthier bite and a confident smile." },
  { icon: Crown, title: "Crowns & Bridges", text: "Permanent artificial teeth that restore appearance and function." },
];

const categories = [
  { title: "Restorative Dentistry", items: ["Root Canal", "Fillings", "Crowns", "Dentures"] },
  { title: "Cosmetic Dentistry", items: ["Bleaching", "Smile Enhancement"] },
  { title: "Preventive Care", items: ["Scaling", "Dental Checkups"] },
  { title: "Advanced Procedures", items: ["Dental Implants", "Oral Surgery", "Orthodontics"] },
];

const story = [
  { t: "Modern treatment", d: "Careful, up-to-date techniques supported by digital dental X-ray." },
  { t: "Patient comfort", d: "A calm, clean setting where you are never rushed." },
  { t: "Preventive care", d: "Checkups and scaling that keep small problems small." },
  { t: "Restorative care", d: "Fillings, root canals, crowns and dentures when teeth need repair." },
  { t: "Family dentistry", d: "One clinic for children, adults and grandparents." },
];

const reasons = [
  { t: "Qualified Dental Surgeon", d: `${dentalSite.doctor}, B.D.S. (Reg. No. ${dentalSite.regNo}).` },
  { t: "Modern Equipment", d: "Up-to-date instruments and dental chairs for precise, comfortable treatment." },
  { t: "Digital Dental X-Ray", d: "On-site RVG X-ray for clear diagnosis and treatment planning." },
  { t: "Patient-Friendly Care", d: "Preventive, restorative, cosmetic and surgical care at one clinic, for the whole family." },
];

const comfort = [
  { n: "01", t: "Clean Environment", d: "A hygienic, bright clinic you can feel good about." },
  { n: "02", t: "Friendly Team", d: "Warm, helpful people from reception to the treatment chair." },
  { n: "03", t: "Comfortable Treatment", d: "Careful procedures explained in plain language." },
  { n: "04", t: "Personal Attention", d: "Treatment planned around you and your family." },
];

/* ------------------------------------------------------------------ */

function Photo({ src, label, className = "", sizes, priority = false }: { src: string; label: string; className?: string; sizes: string; priority?: boolean }) {
  return (
    <div role="img" aria-label={label} className={`group relative overflow-hidden bg-gradient-to-br from-plum-600/15 to-accent/10 ${className}`}>
      <Image src={src} alt="" fill sizes={sizes} priority={priority} className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
    </div>
  );
}

export default function DentalPage() {
  const dg = gallery.filter((g) => g.category === "Dental");
  const IMG = {
    clinic: "/images/dental-clinic.jpg",
    chair: pic(dg, 0, "/images/dental/dental-chair.jpg"),
    treatment: pic(dg, 1, "/images/dental/treatment-area.jpg"),
    xray: "/images/dental/dental-xray.jpg", // TODO
    equipment: "/images/dental/equipment.jpg", // TODO
    reception: "/images/dental/reception.jpg", // TODO
    doctor: "/images/dr-anushree-hedda.jpg", // TODO
  };

  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Dentist", name: dentalSite.name, telephone: "+912382227850",
        address: { "@type": "PostalAddress", streetAddress: "Opposite Kayamkhani Function Hall, Sham Nagar, Ambajogai Road", addressLocality: "Latur", addressRegion: "Maharashtra", addressCountry: "IN" } }} />

      {/* 1. HERO — one framed scene: clinic photo fades into ivory, text sits inside the picture */}
      <section className="bg-gradient-to-b from-[#fbf8f3] to-white py-6 sm:py-10">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-[1.75rem] bg-white shadow-2xl shadow-plum-900/10 ring-1 ring-plum-600/10 sm:rounded-[2.25rem]">
              <Photo
                src={IMG.clinic}
                label="Inside Yashodhara Dental Clinic, Latur"
                sizes="(min-width:1280px) 1200px, 100vw"
                priority
                className="aspect-[4/3] lg:absolute lg:inset-0 lg:aspect-auto"
              />
              {/* soft ivory veil so the text reads without a dark overlay (desktop) */}
              <div aria-hidden className="absolute inset-0 hidden bg-gradient-to-r from-[#fbf8f3] from-30% via-[#fbf8f3]/85 via-52% to-[#fbf8f3]/0 lg:block" />

              <div className="relative z-10 px-6 py-8 sm:px-10 sm:py-10 lg:flex lg:min-h-[34rem] lg:max-w-[56%] lg:flex-col lg:justify-center lg:px-14 lg:py-16">
                <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
                  <span aria-hidden className="h-px w-8 bg-brand-red" /> Yashodhara Dental Care
                </p>
                <h1 className="text-[2.1rem] font-extrabold leading-[1.12] text-plum-900 sm:text-5xl lg:text-[3.25rem]">
                  Healthy <span className="text-accent">Smiles.</span>
                  <br />
                  Comfortable Care.
                </h1>
                <p className="mt-5 max-w-md text-base leading-relaxed text-slate-600 sm:text-lg">
                  Comprehensive dental care for children, adults and families, delivered with modern techniques and patient-focused treatment.
                </p>
                <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2.5">
                  {["Experienced Dental Surgeon", "Digital Dental X-Ray", "Complete Dental Care"].map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm font-medium text-plum-900">
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-plum-600/10 text-plum-700"><Check size={12} aria-hidden /></span>
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href={BOOK} className="btn-primary"><CalendarCheck size={20} aria-hidden />Book Dental Appointment</Link>
                  <a href={dentalSite.phoneHref} className="btn-outline"><Phone size={20} aria-hidden />Call Clinic</a>
                </div>
              </div>

              {/* clinic hours card — real data, converts visitors */}
              <div className="relative z-10 mx-6 mb-6 rounded-2xl bg-white/85 p-5 shadow-lg shadow-plum-900/10 ring-1 ring-plum-600/10 backdrop-blur-md sm:mx-10 sm:mb-10 lg:absolute lg:bottom-8 lg:right-8 lg:m-0 lg:w-72">
                <p className="flex items-center gap-2 text-sm font-bold text-plum-900"><Clock size={16} className="text-brand-red" aria-hidden />Clinic hours</p>
                <p className="mt-2 text-sm text-slate-600">{dentalSite.hours.map((h, i) => <span key={i} className="block">{h.time}</span>)}</p>
                <a href={dentalSite.phoneHref} className="mt-4 flex items-center gap-2 border-t border-plum-600/10 pt-4 text-sm font-semibold text-plum-700">
                  <Phone size={16} aria-hidden />{dentalSite.phone}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. WELCOME / STORY */}
      <section className="section">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative min-w-0 pb-8">
            <Photo src={IMG.clinic} label="Reception at Yashodhara Dental Clinic" sizes="(min-width:1024px) 50vw, 100vw" className="aspect-[5/4] rounded-3xl shadow-xl" />
            <Photo src={IMG.chair} label="Dental chair" sizes="220px" className="absolute -bottom-0 right-2 aspect-square w-2/5 rounded-2xl border-4 border-white shadow-xl sm:-right-4" />
          </Reveal>
          <Reveal delay={100} className="min-w-0">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-red">Welcome</p>
            <h2 className="text-3xl font-extrabold text-plum-900 md:text-4xl">Dental Care Designed Around Comfort</h2>
            <p className="mt-5 leading-relaxed text-slate-600">
              {dentalSite.name} brings a wide range of dental treatments together under the care of {dentalSite.doctor} ({dentalSite.qualification}). From routine fillings and cleaning to root canal treatment, implants and orthodontics, we focus on comfortable, careful treatment for the whole family.
            </p>
            <ul className="mt-7 divide-y divide-plum-600/10 border-y border-plum-600/10">
              {story.map((s) => (
                <li key={s.t} className="flex flex-col gap-0.5 py-3.5 sm:flex-row sm:items-baseline sm:gap-6">
                  <span className="shrink-0 font-bold text-plum-900 sm:w-44">{s.t}</span>
                  <span className="text-sm text-slate-600">{s.d}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 3. FEATURED TREATMENTS */}
      <section className="section bg-plum-50">
        <div className="container-x">
          <Reveal>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-red">Featured treatments</p>
            <h2 className="max-w-2xl text-3xl font-extrabold text-plum-900 md:text-4xl">The care patients ask for most</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-14">
            {featured.map(({ icon: Icon, title, text }, i) => {
              const dark = i === 0;
              return (
                <Reveal key={title} delay={(i % 2) * 90}>
                  <article className={`group flex h-full flex-col rounded-3xl p-7 transition duration-500 hover:-translate-y-1.5 hover:shadow-2xl sm:p-9 ${dark ? "bg-gradient-to-br from-plum-900 to-plum-600 text-white hover:shadow-plum-900/30" : "bg-white shadow-sm ring-1 ring-plum-600/10 hover:shadow-plum-600/15"}`}>
                    <span className={`mb-6 grid h-14 w-14 place-items-center rounded-2xl ${dark ? "bg-white/15 text-white" : "bg-gradient-to-br from-plum-600 to-[#a45a9a] text-white"}`}><Icon size={26} aria-hidden /></span>
                    <h3 className={`text-xl font-bold sm:text-2xl ${dark ? "text-white" : "text-plum-900"}`}>{title}</h3>
                    <p className={`mt-3 flex-1 leading-relaxed ${dark ? "text-white/80" : "text-slate-600"}`}>{text}</p>
                    <Link href={BOOK} className={`mt-6 inline-flex items-center gap-2 text-sm font-bold ${dark ? "text-accent" : "text-plum-700"}`}>
                      Learn more <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden />
                    </Link>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. COMPLETE SERVICES */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-red">Complete dental services</p>
            <h2 className="max-w-2xl text-3xl font-extrabold text-plum-900 md:text-4xl">Everything your family&apos;s teeth may need</h2>
          </Reveal>
          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-0">
            {categories.map((c, i) => (
              <Reveal key={c.title} delay={i * 70}>
                <div className="h-full border-t-2 border-plum-600/15 pt-6 lg:border-l lg:border-t-0 lg:px-8 lg:pt-0 lg:first:border-l-0 lg:first:pl-0">
                  <h3 className="mb-1 text-lg font-bold text-plum-900">{c.title}</h3>
                  <span className="mb-3 block h-0.5 w-8 rounded-full bg-accent" />
                  <ul className="divide-y divide-plum-600/10">
                    {c.items.map((x) => (
                      <li key={x} className="flex items-center gap-3 py-3 text-slate-700">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-plum-600" aria-hidden />{x}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY PATIENTS CHOOSE US */}
      <section className="section bg-cream">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-20">
          <Reveal className="min-w-0 lg:sticky lg:top-28 lg:self-start">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-red">Why patients choose us</p>
            <h2 className="text-3xl font-extrabold leading-tight text-plum-900 sm:text-4xl lg:text-5xl">A great dental experience is about more than treatment.</h2>
            <p className="mt-5 text-2xl font-bold leading-snug text-plum-600 sm:text-3xl">It is about comfort, trust and confidence.</p>
          </Reveal>
          <ol className="min-w-0 divide-y divide-plum-600/15 border-y border-plum-600/15">
            {reasons.map((r, i) => (
              <Reveal key={r.t} delay={i * 70}>
                <li className="flex gap-5 py-6 sm:gap-8 sm:py-7">
                  <span className="w-10 shrink-0 text-2xl font-extrabold text-accent sm:w-14 sm:text-4xl">{String(i + 1).padStart(2, "0")}</span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-plum-900 sm:text-xl">{r.t}</h3>
                    <p className="mt-1 text-slate-600">{r.d}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 6. MEET THE EXPERT */}
      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="relative mx-auto w-full max-w-sm min-w-0 lg:col-span-5 lg:max-w-none">
            <div aria-hidden className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl bg-plum-600/10" />
            <div role="img" aria-label={dentalSite.doctor} className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-plum-600/20 to-accent/15 shadow-xl">
              <span aria-hidden className="absolute inset-0 grid place-items-center text-7xl font-extrabold text-plum-600/30">AH</span>
              <Image src={IMG.doctor} alt="" fill sizes="(min-width:1024px) 40vw, 90vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={100} className="min-w-0 lg:col-span-7">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-red">Meet the dental expert</p>
            <h2 className="text-3xl font-extrabold text-plum-900 md:text-4xl">{dentalSite.doctor}</h2>
            <p className="mt-2 font-semibold text-plum-700">{dentalSite.qualification}</p>
            <p className="text-sm text-slate-500">Reg. No. {dentalSite.regNo}</p>
            <span className="mt-5 block h-1 w-16 rounded-full bg-accent" />
            <p className="mt-5 max-w-2xl leading-relaxed text-slate-600">
              Treatment here is planned around comfort and clarity: a proper diagnosis supported by digital X-ray, a plain-language explanation of your options, and careful, gentle care for every member of the family.
            </p>
            <h3 className="mt-7 text-sm font-bold uppercase tracking-wider text-plum-900">Areas of treatment</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {["Root canal treatment", "Dental implants", "Orthodontics", "Crowns & bridges", "Scaling", "Oral surgery"].map((t) => (
                <li key={t} className="rounded-full border border-plum-600/20 bg-plum-50 px-4 py-1.5 text-sm font-medium text-plum-900">{t}</li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={BOOK} className="btn-primary"><CalendarCheck size={20} aria-hidden />Book Appointment</Link>
              <a href={dentalSite.phoneHref} className="btn-outline"><Phone size={20} aria-hidden />{dentalSite.phone}</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. MODERN FACILITIES */}
      <section className="section bg-plum-50">
        <div className="container-x">
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-center text-3xl font-extrabold text-plum-900 md:text-4xl">Advanced Technology For Better Dental Care</h2>
          </Reveal>
          <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-14">
            {[
              { icon: ScanLine, t: "Digital Dental X-Ray", d: "On-site RVG X-ray for clear diagnosis and treatment planning.", src: IMG.xray },
              { icon: Armchair, t: "Modern Dental Chair", d: "Comfortable chairs for relaxed, careful treatment.", src: IMG.chair },
              { icon: ShieldCheck, t: "Sterile Treatment Environment", d: "A clean, sterile treatment area for every patient.", src: IMG.treatment },
              { icon: Cog, t: "Advanced Equipment", d: "Modern instruments for precise, efficient treatment.", src: IMG.equipment },
            ].map(({ icon: Icon, t, d, src }, i) => (
              <Reveal key={t} delay={(i % 2) * 90} className={i % 2 === 1 ? "sm:mt-12" : ""}>
                <article>
                  <Photo src={src} label={t} sizes="(min-width:640px) 45vw, 100vw" className="aspect-[4/3] rounded-3xl shadow-xl" />
                  <div className="mt-5 flex gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-plum-700 shadow-sm"><Icon size={22} aria-hidden /></span>
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold text-plum-900 sm:text-xl">{t}</h3>
                      <p className="mt-1 text-slate-600">{d}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. GALLERY */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <p className="mb-2 text-center text-xs font-bold uppercase tracking-[0.2em] text-brand-red">Gallery</p>
            <h2 className="text-center text-3xl font-extrabold text-plum-900 md:text-4xl">Our Dental Clinic</h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-14 lg:grid-cols-4 lg:grid-rows-2">
            {[
              { src: IMG.clinic, label: "Clinic Interior", cls: "col-span-2 row-span-2 aspect-square lg:aspect-auto lg:min-h-[28rem]" },
              { src: IMG.chair, label: "Dental Chair", cls: "aspect-square" },
              { src: IMG.treatment, label: "Treatment Area", cls: "aspect-square" },
              { src: IMG.equipment, label: "Equipment", cls: "aspect-square" },
              { src: IMG.reception, label: "Reception", cls: "aspect-square" },
            ].map((g, i) => (
              <Reveal key={g.label} delay={i * 60} className={g.cls}>
                <figure className="group relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-plum-600/15 to-accent/10 shadow-lg sm:rounded-3xl">
                  <Image src={g.src} alt={g.label} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-plum-900/75 to-transparent p-3 text-xs font-medium text-white sm:p-4 sm:text-sm">{g.label}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. PATIENT COMFORT */}
      <section className="section bg-cream">
        <div className="container-x">
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-center text-3xl font-extrabold text-plum-900 md:text-4xl">Designed To Make Every Visit Comfortable</h2>
          </Reveal>
          <ol className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
            <div aria-hidden className="absolute left-0 right-0 top-5 hidden h-px bg-plum-600/20 lg:block" />
            {comfort.map((c, i) => (
              <Reveal key={c.n} delay={i * 80}>
                <li className="relative flex gap-4 lg:block">
                  <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-sm font-extrabold text-plum-900 ring-2 ring-accent">{c.n}</span>
                  <div className="min-w-0 lg:mt-5">
                    <h3 className="text-lg font-bold text-plum-900">{c.t}</h3>
                    <p className="mt-1 text-slate-600">{c.d}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 10. CONTACT */}
      <section className="section">
        <div className="container-x grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="min-w-0">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-red">Visit the clinic</p>
            <h2 className="text-3xl font-extrabold text-plum-900 md:text-4xl">Dental Clinic Contact</h2>
            <span className="mt-4 block h-1 w-16 rounded-full bg-accent" />
            <ul className="mt-8 divide-y divide-plum-600/10 border-y border-plum-600/10 text-slate-700">
              <li className="flex gap-4 py-5"><MapPin className="mt-1 shrink-0 text-brand-red" aria-hidden /><span>{dentalSite.addressLines.join(" ")}<br /><span className="text-sm text-slate-500">{dentalSite.addressMarathi}</span></span></li>
              <li className="flex gap-4 py-5"><Clock className="mt-1 shrink-0 text-brand-red" aria-hidden /><span>{dentalSite.hours.map((h, i) => <span key={i} className="block">{h.time}</span>)}</span></li>
              <li className="flex gap-4 py-5"><Phone className="mt-1 shrink-0 text-brand-red" aria-hidden /><a href={dentalSite.phoneHref} className="font-semibold text-plum-900">{dentalSite.phone}</a></li>
              <li className="flex gap-4 py-5"><MessageCircle className="mt-1 shrink-0 text-brand-red" aria-hidden /><a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="font-semibold text-plum-900">Chat on WhatsApp</a></li>
            </ul>
            <Link href={BOOK} className="btn-accent mt-8"><CalendarCheck size={20} aria-hidden />Book an Appointment</Link>
          </Reveal>
          <Reveal delay={100} className="min-h-[20rem] min-w-0">
            <div className="h-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
              <MapEmbed src={dentalSite.mapsEmbed} title="Yashodhara Dental Clinic on Google Maps" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-plum-900 via-plum-900 to-plum-700 py-16 text-white sm:py-24">
        <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="container-x relative text-center">
          <Reveal>
            <h2 className="text-3xl font-extrabold sm:text-5xl">Ready For A Healthier Smile?</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/80">Schedule a consultation with our dental team today.</p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link href={BOOK} className="btn-accent"><CalendarCheck size={20} aria-hidden />Book Dental Appointment</Link>
              <a href={dentalSite.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"><Phone size={20} aria-hidden />Call Clinic</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}