import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { site, whatsappLink } from "@/data/site";

export default function ContactInfo() {
  const rows = [
    { icon: MapPin, label: "Address", body: <>{site.addressLines.map((l) => <span key={l} className="block">{l}</span>)}<span className="mt-1 block text-xs text-slate-500">{site.addressMarathi}</span></> },
    { icon: Phone, label: "Phone", body: <><a href={site.phoneHref} className="font-semibold hover:text-plum-600">{site.phone}</a> · <a href={site.mobileHref} className="font-semibold hover:text-plum-600">{site.mobile}</a></> },
    { icon: MessageCircle, label: "WhatsApp", body: <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-plum-600">Chat on {site.mobile}</a> },
    { icon: Mail, label: "Email", body: <a href={`mailto:${site.email}`} className="break-all font-semibold hover:text-plum-600">{site.email}</a> },
    { icon: Clock, label: "Consultation Timing", body: <>{site.hours.map((h) => <span key={h.day} className="block">{h.day}: {h.time}</span>)}</> },
  ];
  return (
    <ul className="space-y-5">
      {rows.map(({ icon: Icon, label, body }) => (
        <li key={label} className="flex gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-plum-50 text-plum-700"><Icon size={22} aria-hidden /></span>
          <div className="text-sm text-slate-700"><p className="font-bold text-plum-900">{label}</p>{body}</div>
        </li>
      ))}
    </ul>
  );
}
