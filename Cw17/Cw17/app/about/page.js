'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { doctorQualifications, timeline } from '@/lib/content';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import Icon from '@/components/Icon';

const missionItems = [
  { icon: 'message', titleKey: 'mission1Title', bodyKey: 'mission1Body' },
  { icon: 'stone', titleKey: 'mission2Title', bodyKey: 'mission2Body' },
  { icon: 'shield', titleKey: 'mission3Title', bodyKey: 'mission3Body' },
];

export default function AboutPage() {
  const { t, lang } = useLanguage();

  return (
    <div>
      <PageHero kicker={t('about.heroKicker')} title={t('about.heroTitle')} body={t('about.heroBody')} />

      {/* DOCTOR 1 */}
      <section className="section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="mx-auto w-full max-w-sm">
            <div className="card overflow-hidden">
              <div className="flex flex-col items-center gap-4 bg-navy-900 p-8 text-center text-white">
                <span className="relative block h-24 w-24 overflow-hidden rounded-full bg-white ring-4 ring-white/20">
                  <Image src="/images/logo.png" alt="Yashodhara logo" fill sizes="96px" className="object-cover" />
                </span>
                <div>
                  <p className="font-display text-xl font-semibold">{t('about.doctorName')}</p>
                  <p className="mt-1 text-sm text-rust-300">{t('about.doctorRole')}</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-navy-400">{t('about.qualifications')}</h4>
                <ul className="mt-3 space-y-3">
                  {doctorQualifications.map((q) => (
                    <li key={q.en} className="flex gap-2.5 text-sm leading-relaxed text-navy-700">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-rust-500" />
                      <span>{lang === 'mr' ? q.mr : q.en}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <span className="kicker">{t('about.doctorKicker')}</span>
            <h2 className="mt-4 text-2xl font-semibold text-navy-900 sm:text-3xl">{t('about.doctorName')}</h2>
            <p className="mt-4 text-base leading-relaxed text-navy-600">{t('about.doctorBody')}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-navy-100 px-4 py-2 text-sm font-medium text-navy-700">Consultant Urologist</span>
              <span className="rounded-full bg-navy-100 px-4 py-2 text-sm font-medium text-navy-700">Andrologist</span>
              <span className="rounded-full bg-navy-100 px-4 py-2 text-sm font-medium text-navy-700">Uro-Oncologist</span>
            </div>
          </div>
        </div>
      </section>

      {/* DOCTOR 2 - DENTAL */}
      <section className="section-pad bg-maroon-50">
        <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="order-2 lg:order-1">
            <span className="kicker">{t('about.doctor2Kicker')}</span>
            <h2 className="mt-4 text-2xl font-semibold text-navy-900 sm:text-3xl">{t('about.doctor2Name')}</h2>
            <p className="mt-2 text-sm font-semibold text-maroon-600">{t('about.doctor2Role')}</p>
            <p className="mt-4 text-base leading-relaxed text-navy-600">{t('about.doctor2Body')}</p>
          </div>
          <div className="order-1 mx-auto w-full max-w-sm lg:order-2">
            <div className="card flex flex-col items-center gap-4 p-8 text-center">
              <span className="flex h-24 w-24 items-center justify-center rounded-full bg-maroon-500 text-white">
                <Icon name="tooth" className="h-12 w-12" strokeWidth={1.2} />
              </span>
              <div>
                <p className="font-display text-lg font-semibold text-navy-900">{t('about.doctor2Name')}</p>
                <p className="mt-1 text-sm text-navy-500">{t('about.doctor2Role')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="section-pad">
        <div className="container-page">
          <SectionHeading kicker={t('about.missionKicker')} title={t('about.missionTitle')} align="center" />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {missionItems.map((item) => (
              <div key={item.titleKey} className="card p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-rust-50 text-rust-500">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-navy-900">{t(`about.${item.titleKey}`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">{t(`about.${item.bodyKey}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section-pad bg-navy-950 text-white">
        <div className="container-page">
          <SectionHeading kicker={t('about.timelineTitle')} title={t('common.since')} align="center" />
          <div className="mx-auto mt-12 max-w-2xl space-y-6">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rust-500 text-sm font-semibold text-white">
                    {item.year === '—' ? '•' : item.year.slice(2)}
                  </span>
                  {idx !== timeline.length - 1 && <span className="mt-1 h-full w-px flex-1 bg-white/15" />}
                </div>
                <div className="pb-6">
                  <p className="text-sm font-semibold text-rust-300">{item.year}</p>
                  <p className="mt-1 text-sm leading-relaxed text-navy-100">{lang === 'mr' ? item.mr : item.en}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
