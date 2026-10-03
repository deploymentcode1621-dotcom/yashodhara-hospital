"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CalendarCheck, Clock, MapPin, Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import { nav, site } from "@/data/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <div className="hidden bg-plum-800 text-xs text-plum-100 md:block">
        <div className="container-x flex items-center justify-between py-2">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5"><MapPin size={14} className="text-accent" aria-hidden />{site.addressShort}</span>
            <span className="flex items-center gap-1.5"><Clock size={14} className="text-accent" aria-hidden />Mon – Sat: 9:00 AM – 8:00 PM</span>
            <span>Sunday: By Appointment</span>
          </div>
          <a href={site.phoneHref} className="flex items-center gap-1.5 font-semibold hover:text-accent"><Phone size={14} aria-hidden />{site.phone} / {site.mobile}</a>
        </div>
      </div>
      <header className={`sticky top-0 z-50 border-b border-plum-100 bg-white/95 backdrop-blur transition-shadow duration-300 ${scrolled ? "shadow-lg shadow-plum-900/10" : ""}`}>
        <div className="container-x flex items-center justify-between gap-4 py-2.5">
          <Logo />
          <nav aria-label="Main navigation" className="hidden items-center gap-1 xl:flex">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} aria-current={isActive(n.href) ? "page" : undefined}
                className={`rounded-lg px-3.5 py-2 text-sm font-semibold transition ${isActive(n.href) ? "bg-plum-700 text-white" : "text-plum-900 hover:bg-plum-50 hover:text-plum-700"}`}>
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/contact#appointment" className="btn-accent hidden !min-h-11 !px-4 !py-2 text-sm sm:inline-flex">
              <CalendarCheck size={18} aria-hidden />Book an Appointment
            </Link>
            <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"} className="grid h-11 w-11 place-items-center rounded-xl border border-plum-200 text-plum-700 xl:hidden">
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        <div id="mobile-menu" className={`xl:hidden ${open ? "block" : "hidden"} max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-plum-100 bg-white`}>
          <nav aria-label="Mobile navigation" className="container-x flex flex-col gap-1 py-4">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} aria-current={isActive(n.href) ? "page" : undefined}
                className={`rounded-xl px-4 py-3 text-base font-semibold ${isActive(n.href) ? "bg-plum-700 text-white" : "text-plum-900 hover:bg-plum-50"}`}>
                {n.label}
              </Link>
            ))}
            <Link href="/contact#appointment" className="btn-accent mt-2"><CalendarCheck size={18} aria-hidden />Book an Appointment</Link>
            <a href={site.phoneHref} className="btn-outline"><Phone size={18} aria-hidden />Call {site.phone}</a>
          </nav>
        </div>
      </header>
    </>
  );
}
