'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { homeQuickServices, doctorQualifications, contactInfo } from '@/lib/content';
import Icon from '@/components/Icon';
import SectionHeading from '@/components/SectionHeading';

const stats = [
  { icon: 'award', key: 'statYears', value: '11+' },
  { icon: 'shield', key: 'statSchemes', value: '2' },
  { icon: 'stone', key: 'statEquip', value: '10+' },
  { icon: 'building', key: 'statBranches', value: '8+' },
];

const whyItems = [
  { icon: 'award', titleKey: 'why1Title', bodyKey: 'why1Body' },
  { icon: 'stone', titleKey: 'why2Title', bodyKey: 'why2Body' },
  { icon: 'shield', titleKey: 'why3Title', bodyKey: 'why3Body' },
  { icon: 'building', titleKey: 'why4Title', bodyKey: 'why4Body' },
];

export default function HomePage() {
  const { t, pick, lang } = useLanguage();

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div className="absolute inset-0 bg-vessel-lines" />
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-rust-500/25 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-maroon-500/20 blur-3xl" />

        <div className="container-page relative grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-28">
          <div>
            <span className="kicker border-white/30 bg-white/10 text-rust-200">{t('common.heroKicker')}</span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-[3.4rem]">
              {t('home.heroTitle1')}
              <br />
              <span className="text-rust-300">{t('home.heroTitle2')}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-100 sm:text-lg">{t('home.heroSubtitle')}</p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary">
                <Icon name="calendar" className="h-5 w-5" />
                {t('common.bookAppointment')}
              </Link>
              <a href={`tel:${contactInfo.urology.mobile}`} className="btn-outline-light">
                <Icon name="phone" className="h-5 w-5" />
                {t('common.callNow')}
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-navy-200">
              <span className="flex items-center gap-2">
                <Icon name="shield" className="h-4 w-4 text-rust-300" />
                {t('common.empanelled')}
              </span>
              <span className="flex items-center gap-2">
                <Icon name="award" className="h-4 w-4 text-rust-300" />
                {t('common.since')}
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-rust-500/30 via-transparent to-maroon-500/30 blur-2xl" />
            <div className="relative rounded-[2rem] border border-white/15 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center gap-4">
                <span className="relative block h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-white ring-1 ring-white/30">
                  <Image src="/images/logo.png" alt="Yashodhara logo" fill sizes="80px" className="object-cover" />
                </span>
                <div>
                  <p className="font-display text-lg font-semibold text-white">{t('about.doctorName')}</p>
                  <p className="mt-1 text-xs leading-snug text-navy-200">{t('common.consultUrologist')}</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3 border-t border-white/10 pt-5">
                {doctorQualifications.map((q) => (
                  <li key={q.en} className="flex gap-2.5 text-sm text-navy-100">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-rust-300" />
                    <span>{pick(q)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-navy-100 bg-white">
        <div className="container-page grid grid-cols-2 gap-6 py-10 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.key} className="flex flex-col items-center gap-2 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-rust-50 text-rust-500">
                <Icon name={s.icon} className="h-6 w-6" />
              </span>
              <span className="font-display text-2xl font-semibold text-navy-900 sm:text-3xl">{s.value}</span>
              <span className="text-xs font-medium leading-snug text-navy-500 sm:text-sm">{t(`home.${s.key}`)}</span>
            </div>
          ))}
        </div>
      </section>

      {/* QUICK SERVICES */}
      <section className="section-pad">
        <div className="container-page">
          <SectionHeading kicker={t('home.servicesKicker')} title={t('home.servicesTitle')} align="center" />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {homeQuickServices.map((s) => {
              const copy = lang === 'mr' ? s.mr : s.en;
              return (
                <Link
                  key={s.key}
                  href={s.href || '/services'}
                  className="card group flex flex-col gap-4 p-6 transition-transform duration-200 hover:-translate-y-1"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 text-white transition-colors group-hover:bg-rust-500">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-navy-900">{copy.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-500">{copy.body}</p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-10 flex justify-center">
            <Link href="/services" className="btn-secondary">
              {t('common.viewAllServices')}
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-pad bg-navy-950 text-white">
        <div className="container-page">
          <SectionHeading kicker={t('home.whyKicker')} title={t('home.whyTitle')} align="center" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyItems.map((item) => (
              <div key={item.titleKey} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-rust-500/20 text-rust-300">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-white">{t(`home.${item.titleKey}`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-200">{t(`home.${item.bodyKey}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DENTAL TEASER */}
      <section className="section-pad">
        <div className="container-page grid gap-10 rounded-3xl bg-maroon-50 p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="kicker">{t('home.dentalTeaserKicker')}</span>
            <h2 className="mt-4 text-2xl font-semibold leading-tight text-navy-900 sm:text-3xl">{t('home.dentalTeaserTitle')}</h2>
            <p className="mt-4 text-base leading-relaxed text-navy-600">{t('home.dentalTeaserBody')}</p>
            <Link href="/dental" className="btn-secondary mt-6">
              {t('common.learnMore')}
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <span className="flex h-40 w-40 items-center justify-center rounded-full bg-white text-maroon-500 shadow-card sm:h-48 sm:w-48">
              <Icon name="tooth" className="h-20 w-20" strokeWidth={1.2} />
            </span>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-rust-500">
        <div className="container-page flex flex-col items-start gap-6 py-14 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">{t('home.ctaTitle')}</h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-rust-50 sm:text-base">{t('home.ctaBody')}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">
              {t('common.bookAppointment')}
            </Link>
            <a
              href={`https://wa.me/91${contactInfo.urology.mobile}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light border-white text-white"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
              {t('common.whatsapp')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
