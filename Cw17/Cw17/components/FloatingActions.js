'use client';

import { useLanguage } from '@/context/LanguageContext';
import { contactInfo } from '@/lib/content';
import Icon from './Icon';

export default function FloatingActions() {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <a
        href={`tel:${contactInfo.urology.mobile}`}
        aria-label={t('common.callNow')}
        title={t('common.callNow')}
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-navy-800 text-white shadow-soft transition-transform hover:-translate-y-0.5"
      >
        <Icon name="phone" className="h-6 w-6" />
      </a>
      <a
        href={`https://wa.me/91${contactInfo.urology.mobile}?text=${encodeURIComponent(
          'Namaste, I would like to book an appointment at Yashodhara Hospital.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t('common.whatsapp')}
        title={t('common.whatsapp')}
        className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition-transform hover:-translate-y-0.5"
      >
        <span className="absolute inset-0 animate-pulse-slow rounded-full bg-[#25D366] opacity-40" />
        <Icon name="whatsapp" className="relative h-7 w-7" />
      </a>
    </div>
  );
}
