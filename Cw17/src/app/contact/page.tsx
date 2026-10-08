import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  CalendarCheck,
  ArrowRight,
  Siren,
  ShieldCheck,
  Stethoscope,
  HeartHandshake,
} from "lucide-react";

import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import MapEmbed from "@/components/MapEmbed";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us & Book Appointment",
  description:
    "Contact Yashodhara Urology Hospital, Ambajogai Road, Latur.",
};

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      {/* HERO */}
<section className="relative overflow-hidden bg-gradient-to-br from-plum-900 via-plum-800 to-plum-700">
  {/* subtle background elements */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute -right-32 top-0 h-96 w-96 rounded-full border border-white" />
    <div className="absolute left-10 bottom-10 h-64 w-64 rounded-full border border-white" />
  </div>

  <div className="container-x relative py-20 lg:py-24">
    <Reveal>
      <nav className="mb-6 text-sm text-white/70">
        <Link href="/" className="hover:text-white">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-white">Contact Us</span>
      </nav>

      <div className="max-w-4xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
          Get In Touch
        </p>

        <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl">
          Contact Our Team
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
          Schedule an appointment, ask a question, or speak with our
          healthcare team. We're here to support you and your family.
        </p>
      </div>

      {/* Contact Strip */}
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <Phone size={18} className="text-accent" />
            <span className="font-semibold text-white">
              Call Us
            </span>
          </div>

          <p className="mt-3 text-white/80">
            02382-227850
          </p>

          <p className="text-white/80">
            9021186939
          </p>
        </div>

        <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <MapPin size={18} className="text-accent" />
            <span className="font-semibold text-white">
              Visit Us
            </span>
          </div>

          <p className="mt-3 text-white/80">
            Ambajogai Road
          </p>

          <p className="text-white/80">
            Latur, Maharashtra
          </p>
        </div>

        <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <Clock size={18} className="text-accent" />
            <span className="font-semibold text-white">
              Consultation Hours
            </span>
          </div>

          <p className="mt-3 text-white/80">
            Monday – Saturday
          </p>

          <p className="text-white/80">
            9:00 AM – 8:00 PM
          </p>
        </div>
      </div>
    </Reveal>
  </div>
</section>

      {/* QUICK CONTACT */}
      <section className="relative -mt-14 z-10">
        <div className="container-x">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: MapPin,
                title: "Visit Us",
                text: "Ambajogai Road, Latur",
              },
              {
                icon: Phone,
                title: "Call Us",
                text: site.mobile,
              },
              {
                icon: MessageCircle,
                title: "WhatsApp",
                text: "Quick Support",
              },
              {
                icon: Clock,
                title: "Timings",
                text: "9 AM - 8 PM",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-6 shadow-xl"
              >
                <item.icon className="mb-4 text-accent" />
                <h3 className="font-bold text-plum-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div id="appointment">
              <h2 className="mb-6 text-4xl font-extrabold text-plum-900">
                Book an Appointment
              </h2>
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-3xl bg-plum-50 p-8">
              <h2 className="text-3xl font-extrabold text-plum-900">
                Why Choose Us?
              </h2>

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <ShieldCheck className="text-accent" />
                  <div>
                    <h3 className="font-bold">
                      Experienced Specialists
                    </h3>
                    <p>Dedicated urology experts.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Stethoscope className="text-accent" />
                  <div>
                    <h3 className="font-bold">
                      Advanced Technology
                    </h3>
                    <p>Modern diagnostics and procedures.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <HeartHandshake className="text-accent" />
                  <div>
                    <h3 className="font-bold">
                      Compassionate Care
                    </h3>
                    <p>Patient-first treatment approach.</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EMERGENCY CTA */}
      <section className="px-4 pb-10">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-gradient-to-r from-brand-red via-plum-700 to-plum-900 p-10 text-white">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-extrabold">
                Need Urgent Medical Help?
              </h2>

              <p className="mt-2 text-white/80">
                Contact our team immediately.
              </p>
            </div>

            <a href={site.mobileHref} className="btn-light">
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="section bg-plum-50">
        <div className="container-x">
          <h2 className="mb-8 text-4xl font-extrabold text-plum-900">
            Visit Our Hospital
          </h2>

          <div className="grid gap-8 lg:grid-cols-[1.5fr_.8fr]">
            <MapEmbed
              src={site.mapsEmbed}
              title="Yashodhara Hospital"
            />

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}