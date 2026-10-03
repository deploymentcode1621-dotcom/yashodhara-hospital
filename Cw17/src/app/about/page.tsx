import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Eye, HeartHandshake, Target } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { doctor, site } from "@/data/site";
import { whyChoose } from "@/data/content";

export const metadata: Metadata = {
  title: "About Us",
  description: "About Yashodhara Urology Center & Multispeciality Hospital, Latur – serving patients since 2015 with advanced, ethical and compassionate urology care by Dr. Dhiraj Hedda.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About Yashodhara Hospital, Latur", url: "/about" },
};

const pillars = [
  { icon: Target, title: "Our Mission", text: "To provide advanced, ethical and compassionate care for urological, andrological and related disorders using modern technology." },
  { icon: Eye, title: "Our Vision", text: "Better urological health for a brighter tomorrow – accessible, quality genitourinary care for the people of Latur and the region." },
  { icon: HeartHandshake, title: "Patient-Care Philosophy", text: "Personalised treatment planned around each patient's needs, with clear explanation, comfort and dignity at every step." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Us" text="Advanced technology for better care – serving Latur since 2015." />
      <section className="section">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-plum-900 md:text-4xl">{site.name}</h2>
            <span className="mt-4 block h-1 w-16 rounded-full bg-accent" />
            <div className="mt-5 space-y-4 leading-relaxed text-slate-600">
              <p>Yashodhara Institute of Urology, Latur is a superspeciality genitourinary centre on Ambajogai Road. We treat conditions of the kidney, ureter, bladder, prostate and male reproductive system, along with women&apos;s and children&apos;s urological problems.</p>
              <p>Our focus is on endoscopic and minimally invasive procedures – such as PCNL, URSL, ESWL and TURP – so that patients can recover quickly and return to normal life sooner.</p>
              <p>The hospital is associated with the government health schemes PM-JAY and MJPJAY. Please contact the hospital to confirm eligibility.</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="relative aspect-[5/4] overflow-hidden rounded-3xl shadow-xl">
              <Image src="/images/about-hospital.jpg" alt="Yashodhara Hospital, Latur" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-plum-50">
        <div className="container-x grid gap-5 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="card h-full p-7">
                <span className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-plum-700 text-white"><Icon aria-hidden /></span>
                <h2 className="text-xl font-bold text-plum-900">{title}</h2>
                <p className="mt-2 text-slate-600">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="doctor" className="section">
        <div className="container-x grid items-center gap-10 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl shadow-xl">
              <Image src="/images/Doctor.avif" alt={doctor.name} fill sizes="(min-width:1024px) 30vw, 80vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-red">Our Medical Team</p>
            <h2 className="text-3xl font-extrabold text-plum-900">{doctor.name} <span className="text-lg font-semibold text-plum-500">({doctor.marathi})</span></h2>
            <p className="mt-1 font-semibold text-plum-600">{doctor.title}</p>
            <ul className="mt-5 space-y-2 text-slate-700">
              {doctor.qualifications.map((q) => (<li key={q} className="flex gap-2"><CheckCircle2 size={20} className="mt-0.5 shrink-0 text-accent-600" aria-hidden />{q}</li>))}
            </ul>
            <p className="mt-3 text-sm text-slate-500">Registration No.: {doctor.regNo}</p>
            <h3 className="mt-6 font-bold text-plum-900">Areas of Expertise</h3>
            <ul className="mt-2 grid gap-1.5 text-sm text-slate-700 sm:grid-cols-2">
              {doctor.expertise.map((e) => (<li key={e} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-plum-500" aria-hidden />{e}</li>))}
            </ul>
            <p className="mt-6 rounded-xl bg-cream p-4 text-sm text-slate-600">
              <strong className="text-plum-900">Dental Clinic:</strong> Dr. Anushree Dhiraj Hedda, B.D.S. (Reg. No. A-16758) leads our Multispeciality Dental Clinic.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-gradient-to-b from-cream to-white">
        <div className="container-x">
          <SectionHeading eyebrow="Trust & Quality" title="Why Patients Choose Us" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map(({ icon: Icon, title, text }) => (
              <div key={title} className="card flex gap-4 p-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-plum-50 text-plum-700"><Icon size={24} aria-hidden /></span>
                <div><h3 className="font-bold text-plum-900">{title}</h3><p className="mt-1 text-sm text-slate-600">{text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
