import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/content";

export default function ServiceCard({ service, detailed = false }: { service: Service; detailed?: boolean }) {
  const Icon = service.icon;
  return (
    <article id={service.slug} className="card flex h-full flex-col p-6">
      <span className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-plum-50 text-plum-700"><Icon size={28} aria-hidden /></span>
      <h3 className="text-xl font-bold text-plum-900">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.short}</p>
      {detailed && (
        <ul className="mt-4 space-y-1.5 text-sm text-slate-700">
          {service.points.map((p) => (<li key={p} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />{p}</li>))}
        </ul>
      )}
      <Link href={detailed ? "/contact#appointment" : `/services#${service.slug}`} className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-bold text-plum-700 hover:gap-3 transition-all">
        {detailed ? "Book Consultation" : "Learn More"} <ArrowRight size={16} aria-hidden />
      </Link>
    </article>
  );
}
