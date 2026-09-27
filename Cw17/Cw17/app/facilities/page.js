'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { equipment, facilityList } from '@/lib/content';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import Icon from '@/components/Icon';

export default function FacilitiesPage() {
  const { t, lang } = useLanguage();

  return (
    <div>
      <PageHero kicker={t('facilities.heroKicker')} title={t('facilities.heroTitle')} body={t('facilities.heroBody')} />

      <section className="section-pad">
        <div className="container-page">
          <SectionHeading kicker={t('facilities.heroKicker')} title={t('facilities.equipmentTitle')} align="center" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {equipment.map((eq) => (
              <div key={eq.en} className="card overflow-hidden">
                <div className="relative h-28 w-full bg-navy-100">
                  <Image src={eq.image} alt={eq.en} fill sizes="200px" className="object-cover" />
                </div>
                <p className="p-3 text-center text-xs font-medium leading-snug text-navy-800 sm:text-sm">{lang === 'mr' ? eq.mr : eq.en}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-navy-950 text-white">
        <div className="container-page">
          <SectionHeading kicker={t('facilities.heroKicker')} title={t('facilities.facilityListTitle')} align="center" />
          <div className="mx-auto mt-12 grid max-w-4xl gap-x-10 gap-y-4 sm:grid-cols-2">
            {facilityList.map((f, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-rust-400" />
                <p className="text-sm leading-relaxed text-navy-100">{lang === 'mr' ? f.mr : f.en}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
