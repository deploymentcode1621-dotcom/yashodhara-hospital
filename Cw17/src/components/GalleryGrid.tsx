"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import type { GalleryItem } from "@/data/content";

export default function GalleryGrid({ items, showFilters = true }: { items: GalleryItem[]; showFilters?: boolean }) {
  const categories = ["All", ...Array.from(new Set(items.map((i) => i.category)))];
  const [cat, setCat] = useState("All");
  const [active, setActive] = useState<number | null>(null);
  const shown = cat === "All" ? items : items.filter((i) => i.category === cat);

  const close = useCallback(() => setActive(null), []);
  const move = useCallback((d: number) => setActive((a) => (a === null ? a : (a + d + shown.length) % shown.length)), [shown.length]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [active, close, move]);

  return (
    <div>
      {showFilters && (
        <div className="mb-8 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter gallery">
          {categories.map((c) => (
            <button key={c} type="button" onClick={() => setCat(c)} aria-pressed={cat === c}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${cat === c ? "bg-plum-700 text-white shadow-md" : "bg-plum-50 text-plum-700 hover:bg-plum-100"}`}>{c}</button>
          ))}
        </div>
      )}
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
        {shown.map((item, i) => (
          <li key={item.src}>
            <button type="button" onClick={() => setActive(i)} aria-label={`View larger: ${item.alt}`}
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-sm">
              <Image src={item.src} alt={item.alt} fill loading="lazy" sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw" className="object-cover transition duration-500 group-hover:scale-110" />
              <span className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-plum-900/80 via-transparent to-transparent p-3 opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                <span className="text-left text-xs font-semibold text-white sm:text-sm">{item.alt}</span>
                <ZoomIn size={18} className="shrink-0 text-white" aria-hidden />
              </span>
            </button>
          </li>
        ))}
      </ul>

      {active !== null && shown[active] && (
        <div role="dialog" aria-modal="true" aria-label="Image preview" className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4" onClick={close}>
          <button type="button" onClick={close} aria-label="Close preview" className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white hover:bg-white/30"><X /></button>
          <button type="button" onClick={(e) => { e.stopPropagation(); move(-1); }} aria-label="Previous image" className="absolute left-2 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white hover:bg-white/30 sm:left-6"><ChevronLeft /></button>
          <figure className="relative h-[75vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image src={shown[active].src} alt={shown[active].alt} fill sizes="100vw" className="object-contain" />
            <figcaption className="absolute -bottom-9 left-0 right-0 text-center text-sm text-white">{shown[active].alt}</figcaption>
          </figure>
          <button type="button" onClick={(e) => { e.stopPropagation(); move(1); }} aria-label="Next image" className="absolute right-2 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white hover:bg-white/30 sm:right-6"><ChevronRight /></button>
        </div>
      )}
    </div>
  );
}
