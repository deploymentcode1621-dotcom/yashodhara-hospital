import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import JsonLd from "@/components/JsonLd";
import { site } from "@/data/site";

export const viewport: Viewport = { themeColor: "#4f1f63", width: "device-width", initialScale: 1 };

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Yashodhara Urology & Multispeciality Hospital, Latur | Urologist in Latur", template: "%s | Yashodhara Hospital, Latur" },
  description: "Yashodhara Urology Center & Multispeciality Hospital, Ambajogai Road, Latur – kidney stone, prostate, male infertility, uro-oncology and paediatric urology care by Dr. Dhiraj Hedda.",
  keywords: ["urologist in Latur", "kidney stone treatment Latur", "andrology Latur", "Yashodhara Hospital Latur", "dental clinic Latur"],
  icons: { icon: "/icons/icon-192.png", apple: "/icons/icon-192.png" },
  openGraph: { type: "website", locale: "en_IN", siteName: site.shortName, images: [{ url: "/images/og-image.webp", width: 1200, height: 630, alt: site.name }] },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">Skip to content</a>
        <JsonLd data={{
          "@context": "https://schema.org", "@type": "Hospital", name: site.name, url: site.url, image: `${site.url}/images/og-image.webp`,
          telephone: ["+912382227850", "+919021186939"], email: site.email,
          address: { "@type": "PostalAddress", streetAddress: "Bus Stand No. 2 Samor, Behind Yashoda Theatre, Juna Renapur Naka, Ambajogai Road", addressLocality: "Latur", addressRegion: "Maharashtra", addressCountry: "IN" },
          medicalSpecialty: ["Urology"],
          openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "09:00", closes: "20:00" }],
        }} />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
