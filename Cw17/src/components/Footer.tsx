import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { nav, site } from "@/data/site";
import { services } from "@/data/content";

export default function Footer() {
  const socials = Object.entries(site.social).filter(([, v]) => v);
  return (
    <footer className="bg-plum-900 text-plum-100">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 text-sm leading-relaxed text-plum-200">
            Advanced, ethical and compassionate urology, andrology and uro-oncology care in Latur. {site.slogan}.
          </p>
          {socials.length > 0 && (
            <ul className="mt-4 flex gap-3 text-sm">
              {socials.map(([k, v]) => (<li key={k}><a href={v} target="_blank" rel="noopener noreferrer" className="capitalize underline hover:text-accent">{k}</a></li>))}
            </ul>
          )}
        </div>
        <div>
          <h2 className="mb-4 text-lg font-bold text-white">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            {nav.map((n) => (<li key={n.href}><Link href={n.href} className="hover:text-accent">{n.label}</Link></li>))}
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-lg font-bold text-white">Our Services</h2>
          <ul className="space-y-2 text-sm">
            {services.slice(0, 7).map((s) => (<li key={s.slug}><Link href={`/services#${s.slug}`} className="hover:text-accent">{s.title}</Link></li>))}
            <li><Link href="/dental-clinic" className="hover:text-accent">Dental Clinic</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-lg font-bold text-white">Contact</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><MapPin size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden /><span>{site.addressLines.join(" ")}</span></li>
            <li className="flex gap-2"><Phone size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden /><span><a href={site.phoneHref} className="hover:text-accent">{site.phone}</a> / <a href={site.mobileHref} className="hover:text-accent">{site.mobile}</a></span></li>
            <li className="flex gap-2"><Mail size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden /><a href={`mailto:${site.email}`} className="break-all hover:text-accent">{site.email}</a></li>
            <li className="flex gap-2"><Clock size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden /><span>Mon – Sat 9 AM – 8 PM<br />Sunday: By Appointment</span></li>
          </ul>
          <a href={site.mapsLink} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm font-semibold text-accent underline">View on Google Maps</a>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-plum-200">
        © 2026 {site.shortName}, Latur. All Rights Reserved.
      </div>
    </footer>
  );
}
