import Image from "next/image";
import type { Facility } from "@/data/content";

export default function FacilityCard({ facility, withImage = true }: { facility: Facility; withImage?: boolean }) {
  const Icon = facility.icon;
  return (
    <article className="card group overflow-hidden">
      {withImage && (
        <div className="relative aspect-[3/2] overflow-hidden">
          <Image src={facility.image} alt={facility.title} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
        </div>
      )}
      <div className="flex gap-4 p-5">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-plum-50 text-plum-700"><Icon size={24} aria-hidden /></span>
        <div>
          <h3 className="text-lg font-bold text-plum-900">{facility.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-slate-600">{facility.text}</p>
        </div>
      </div>
    </article>
  );
}
