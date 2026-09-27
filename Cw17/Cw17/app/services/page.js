'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { stoneTreatments, serviceSections, contactInfo } from '@/lib/content';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import Icon from '@/components/Icon';

export default function ServicesPage() {
  const { t, lang } = useLanguage();

  return (
    <div>
      <PageHero kicker={t('services.heroKicker')} title={t('services.heroTitle')} body={t('services.heroBody')}>
        <div className="mt-8 flex flex-wrap gap-2">
          {serviceSections.map((s) => (
            <a
              key={s.key}
              href={`#${s.key}`}
              className="rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium text-white transition-colors hover:bg-white/20"
            >
              {lang === 'mr' ? s.mr.title : s.en.title}
            </a>
          ))}
        </div>
      </PageHero>

      {/* KIDNEY STONE SPOTLIGHT */}
      <section id="stones" className="section-pad">
        <div className="container-page">
          <SectionHeading
            kicker={lang === 'mr' ? 'मुतखडा (किडनी स्टोन)' : 'Kidney Stone Treatment (Mutkhada)'}
            title={
              lang === 'mr'
                ? 'दुर्बिणीद्वारे सर्व प्रकारच्या मुतखड्यावर अत्याधुनिक उपचार व शस्त्रक्रिया'
                : 'Endoscopic management of renal stone disease, for every stone size'
            }
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stoneTreatments.map((item, idx) => (
              <div key={idx} className="card flex flex-col gap-3 p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-800 font-display text-sm font-semibold text-white">
                  {idx + 1}
                </span>
                <h3 className="font-display text-base font-semibold text-navy-900">{lang === 'mr' ? item.mr.title : item.en.title}</h3>
                <p className="text-sm leading-relaxed text-navy-500">{lang === 'mr' ? item.mr.body : item.en.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER SERVICE SECTIONS */}
      {serviceSections.map((section, i) => {
        const copy = lang === 'mr' ? section.mr : section.en;
        const bg = i % 2 === 0 ? 'bg-cream-soft' : 'bg-white';
        return (
          <section id={section.key} key={section.key} className={`section-pad scroll-mt-24 ${bg}`}>
            <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <span className="kicker">{lang === 'mr' ? 'सेवा' : 'Service'}</span>
                <h2 className="mt-4 text-2xl font-semibold leading-tight text-navy-900 sm:text-3xl">{copy.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-navy-600">{copy.subtitle}</p>
                <a href={`https://wa.me/91${contactInfo.urology.mobile}`} target="_blank" rel="noopener noreferrer" className="btn-secondary mt-6">
                  <Icon name="whatsapp" className="h-4 w-4" />
                  {t('common.whatsapp')}
                </a>
              </div>
              <div className="card p-6 sm:p-8">
                <ul className="space-y-4">
                  {section.items.map((it, idx) => (
                    <li key={idx} className="flex gap-3 text-sm leading-relaxed text-navy-700 sm:text-base">
                      <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-rust-500" />
                      <span>{lang === 'mr' ? it.mr : it.en}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-navy-900 py-12 text-center text-white">
        <div className="container-page">
          <p className="text-base leading-relaxed text-navy-100">{t('common.forMoreInfo')}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary">
              {t('common.bookAppointment')}
            </Link>
            <a href={`tel:${contactInfo.urology.mobile}`} className="btn-outline-light">
              <Icon name="phone" className="h-5 w-5" />
              {t('common.callNow')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
