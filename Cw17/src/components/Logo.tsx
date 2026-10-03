import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} – Home`}>
      <Image src="/images/logo.jpeg" alt="Yashodhara Institute of Urology logo" width={64} height={64} priority className="h-12 w-auto sm:h-14" />
      <span className="leading-tight">
        <span className={`block text-2xl font-extrabold sm:text-3xl ${light ? "text-white" : "text-brand-red"}`}>{site.marathiName}</span>
        <span className={`block text-[11px] font-semibold sm:text-xs ${light ? "text-plum-100" : "text-plum-700"}`}>{site.marathiSub}</span>
        <span className={`hidden text-[10px] sm:block ${light ? "text-plum-200" : "text-plum-500"}`}>{site.tagline}</span>
      </span>
    </Link>
  );
}
