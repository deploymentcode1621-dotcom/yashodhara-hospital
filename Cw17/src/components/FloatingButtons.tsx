import { MapPin, MessageCircle, Phone } from "lucide-react";
import { site, whatsappLink } from "@/data/site";

const base = "grid h-12 w-12 place-items-center rounded-full text-white shadow-xl transition duration-300 hover:scale-110 sm:h-14 sm:w-14";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3 sm:bottom-6 sm:right-6" aria-label="Quick contact">
      <a href={site.mapsLink} target="_blank" rel="noopener noreferrer" aria-label="Open hospital location in Google Maps" className={`${base} bg-plum-600`}><MapPin /></a>
      <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className={`${base} bg-[#25D366]`}><MessageCircle /></a>
      <a href={site.mobileHref} aria-label={`Call ${site.mobile}`} className={`${base} bg-accent-600`}><Phone /></a>
    </div>
  );
}
