import { Fraunces, Manrope, Noto_Sans_Devanagari, Noto_Serif_Devanagari } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-fraunces',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

const notoSansDev = Noto_Sans_Devanagari({
  subsets: ['devanagari'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-sans-dev',
  display: 'swap',
});

const notoSerifDev = Noto_Serif_Devanagari({
  subsets: ['devanagari'],
  weight: ['500', '600', '700'],
  variable: '--font-noto-serif-dev',
  display: 'swap',
});

export const metadata = {
  title: 'Yashodhara Institute of Urology, Latur | Superspeciality Genitourinary Care',
  description:
    'Yashodhara Urology Center & Multispeciality Hospital, Latur — Dr. Dheeraj Hedda offers kidney stone treatment (PCNL/URSL/ESWL), prostate care, uro-oncology, andrology and paediatric urology. Also home to Yashodhara Multispeciality Dental Clinic.',
  keywords: [
    'Yashodhara Hospital Latur',
    'Urologist in Latur',
    'Dr Dheeraj Hedda',
    'Kidney stone treatment Latur',
    'PCNL Latur',
    'Dental clinic Latur',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable} ${notoSansDev.variable} ${notoSerifDev.variable}`}>
      <body className="flex min-h-screen flex-col">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingActions />
        </LanguageProvider>
      </body>
    </html>
  );
}
