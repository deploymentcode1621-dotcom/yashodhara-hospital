'use client';

import { useLanguage } from '@/context/LanguageContext';
import { dentalServices, contactInfo } from '@/lib/content';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import MapEmbed from '@/components/MapEmbed';
import Icon from '@/components/Icon';

export default function DentalPage() {
  const { t, lang, pick } = useLanguage();

  return (
    <div>
      <PageHero kicker={t('dental.heroKicker')} title={t('dental.heroTitle')} body={t('dental.heroBody')} />

      <section className="section-pad">
        <div className="container-page">
          <SectionHeading kicker={t('dental.heroKicker')} title={t('dental.servicesTitle')} align="center" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {dentalServices.map((s) => (
              <div key={s.icon} className="card flex flex-col items-center gap-3 p-6 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-maroon-50 text-maroon-500">
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
                <p className="text-sm font-medium leading-snug text-navy-800">{lang === 'mr' ? s.mr : s.en}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-maroon-50">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div className="card p-7 sm:p-9">
            <span className="kicker">{t('about.doctor2Kicker')}</span>
            <h3 className="mt-4 font-display text-xl font-semibold text-navy-900">{pick(contactInfo.dental.doctor)}</h3>
            <p className="mt-2 text-sm text-navy-500">{pick(contactInfo.dental.name)}</p>
            <div className="mt-6 space-y-4 text-sm text-navy-700">
              <p className="flex items-start gap-3">
                <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-rust-500" />
                {pick(contactInfo.dental.address)}
              </p>
              <p className="flex items-center gap-3">
                <Icon name="phone" className="h-5 w-5 shrink-0 text-rust-500" />
                <a href={`tel:${contactInfo.dental.phone}`} className="hover:text-rust-600">
                  {contactInfo.dental.phone}
                </a>
              </p>
              <div className="flex items-start gap-3">
                <Icon name="clock" className="mt-0.5 h-5 w-5 shrink-0 text-rust-500" />
                <div>
                  <p>{t('dental.morning')}</p>
                  <p>{t('dental.evening')}</p>
                </div>
              </div>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={`tel:${contactInfo.dental.phone}`} className="btn-primary">
                <Icon name="phone" className="h-4 w-4" />
                {t('common.callNow')}
              </a>
              <a
                href={`https://wa.me/91${contactInfo.urology.mobile}?text=${encodeURIComponent(
                  lang === 'mr' ? 'नमस्ते, मला डेंटल क्लिनिकमध्ये अपॉइंटमेंट हवी आहे.' : 'Namaste, I would like a dental appointment.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Icon name="whatsapp" className="h-4 w-4" />
                {t('common.whatsapp')}
              </a>
            </div>
          </div>
          <MapEmbed query={contactInfo.dental.mapQuery} label="Yashodhara Dental Clinic map" className="min-h-[320px]" />
        </div>
      </section>
    </div>
  );
}
