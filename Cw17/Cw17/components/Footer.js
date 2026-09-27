'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { contactInfo } from '@/lib/content';
import Icon from './Icon';

const navItems = [
  { href: '/', key: 'home' },
  { href: '/about', key: 'about' },
  { href: '/services', key: 'services' },
  { href: '/dental', key: 'dental' },
  { href: '/facilities', key: 'facilities' },
  { href: '/gallery', key: 'gallery' },
  { href: '/contact', key: 'contact' },
];

export default function Footer() {
  const { t, pick } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-navy-100">
      <div className="container-page grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative block h-12 w-12 overflow-hidden rounded-full ring-2 ring-white/20">
              <Image src="/images/logo.png" alt="Yashodhara logo" fill sizes="48px" className="object-cover" />
            </span>
            <span className="font-display text-lg font-semibold text-white">Yashodhara</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-navy-200">{t('footer.tagline')}</p>
          <p className="mt-3 text-sm text-navy-300">{t('common.empanelled')}</p>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-white">{t('common.quickLinks')}</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-navy-200 transition-colors hover:text-rust-300">
                  {t(`nav.${item.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-white">{t('common.ourBranches')}</h4>
          <div className="mt-4 space-y-4 text-sm text-navy-200">
            <div>
              <p className="font-semibold text-white">{pick(contactInfo.urology.name)}</p>
              <p className="mt-1 leading-relaxed">{pick(contactInfo.urology.address)}</p>
            </div>
            <div>
              <p className="font-semibold text-white">{pick(contactInfo.dental.name)}</p>
              <p className="mt-1 leading-relaxed">{pick(contactInfo.dental.address)}</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-white">{t('common.followUs')}</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={`tel:${contactInfo.urology.mobile}`} className="flex items-center gap-2.5 text-navy-200 hover:text-rust-300">
                <Icon name="phone" className="h-4 w-4 shrink-0" />
                {contactInfo.urology.phone} / {contactInfo.urology.mobile}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/91${contactInfo.urology.mobile}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-navy-200 hover:text-rust-300"
              >
                <Icon name="whatsapp" className="h-4 w-4 shrink-0" />
                {t('common.whatsapp')}
              </a>
            </li>
            <li>
              <a href={`mailto:${contactInfo.urology.email}`} className="flex items-center gap-2.5 text-navy-200 hover:text-rust-300">
                <Icon name="mail" className="h-4 w-4 shrink-0" />
                {contactInfo.urology.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-xs text-navy-300 sm:flex-row">
          <p>© {year} Yashodhara Institute of Urology, Latur. {t('common.footerRights')}</p>
          <p>{t('footer.verify')}</p>
        </div>
      </div>
    </footer>
  );
}
