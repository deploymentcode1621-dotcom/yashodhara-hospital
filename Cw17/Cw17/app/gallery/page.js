'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { equipment } from '@/lib/content';
import PageHero from '@/components/PageHero';

const galleryImages = [
  { src: '/images/building.png', en: 'Yashodhara Hospital building, Ambajogai Road, Latur', mr: 'यशोधरा हॉस्पिटल इमारत, अंबाजोगाई रोड, लातूर' },
  ...equipment.map((e) => ({ src: e.image, en: e.en, mr: e.mr })),
];

export default function GalleryPage() {
  const { t, lang } = useLanguage();

  return (
    <div>
      <PageHero kicker={t('gallery.heroKicker')} title={t('gallery.heroTitle')} body={t('gallery.heroBody')} />

      <section className="section-pad">
        <div className="container-page columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
          {galleryImages.map((img, idx) => (
            <figure key={idx} className="break-inside-avoid overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card">
              <div className="relative aspect-[4/3] w-full bg-navy-100">
                <Image src={img.src} alt={img.en} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw" className="object-cover" />
              </div>
              <figcaption className="p-3 text-xs font-medium leading-snug text-navy-700 sm:text-sm">{lang === 'mr' ? img.mr : img.en}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
