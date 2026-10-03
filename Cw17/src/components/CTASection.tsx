import Link from "next/link";
import { CalendarCheck, MessageCircle, Phone } from "lucide-react";
import { site, whatsappLink } from "@/data/site";

export default function CTASection({ title = "Need Medical Care? We're Here for You.", text = "Book a consultation for your urological or andrological health concerns. Our team will guide you at every step." }: { title?: string; text?: string }) {
  return (
    <section className="px-4 py-12 sm:px-6">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-plum-900 via-plum-700 to-plum-600 p-8 text-white shadow-2xl shadow-plum-900/20 md:p-14">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/20 blur-2xl" aria-hidden />
        <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-3xl font-extrabold md:text-4xl">{title}</h2>
            <p className="mt-3 max-w-xl text-plum-100">{text}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link href="/contact#appointment" className="btn-accent"><CalendarCheck size={20} aria-hidden />Book an Appointment</Link>
            <a href={site.phoneHref} className="btn-light"><Phone size={20} aria-hidden />Call {site.phone}</a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn border-2 border-white/40 text-white hover:bg-white/10"><MessageCircle size={20} aria-hidden />WhatsApp Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}
