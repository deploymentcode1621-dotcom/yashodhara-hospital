'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import Icon from './Icon';
import { contactInfo } from '@/lib/content';

const navItems = [
  { href: '/', key: 'home' },
  { href: '/about', key: 'about' },
  { href: '/services', key: 'services' },
  { href: '/dental', key: 'dental' },
  { href: '/facilities', key: 'facilities' },
  { href: '/gallery', key: 'gallery' },
  { href: '/contact', key: 'contact' },
];

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled ? 'border-navy-100 bg-cream/95 backdrop-blur shadow-sm' : 'border-transparent bg-cream'
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <span className="relative block h-14 w-14 overflow-hidden rounded-full ring-2 ring-navy-800/10">
            <Image src="/images/logo.png" alt="Yashodhara Institute of Urology logo" fill sizes="56px" className="object-cover" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold text-navy-900 sm:text-xl">Yashodhara</span>
            <span className="block text-[11px] font-medium uppercase tracking-wide text-rust-600 sm:text-xs">
              {lang === 'mr' ? 'युरॉलॉजी व मल्टीस्पेशालिटी हॉस्पिटल' : 'Urology & Multispeciality Hospital'}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  active ? 'bg-navy-800 text-white' : 'text-navy-700 hover:bg-navy-100'
                }`}
              >
                {t(`nav.${item.key}`)}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            type="button"
            onClick={toggleLang}
            className="rounded-full border border-navy-200 px-3.5 py-2 text-sm font-semibold text-navy-800 transition-colors hover:border-navy-800"
            aria-label="Toggle language"
          >
            {lang === 'en' ? 'मराठी' : 'English'}
          </button>
          <a
            href={`tel:${contactInfo.urology.mobile}`}
            className="rounded-full border border-navy-200 p-2.5 text-navy-800 transition-colors hover:border-navy-800"
            aria-label={t('common.callNow')}
          >
            <Icon name="phone" className="h-5 w-5" />
          </a>
          <Link href="/contact" className="btn-primary">
            {t('common.bookAppointment')}
          </Link>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-200 text-navy-800 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={t('common.menu')}
          aria-expanded={open}
        >
          <Icon name={open ? 'close' : 'menu'} className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="border-t border-navy-100 bg-cream lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-xl px-4 py-3 text-base font-medium ${
                    active ? 'bg-navy-800 text-white' : 'text-navy-800 hover:bg-navy-100'
                  }`}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              );
            })}
            <div className="mt-2 flex items-center gap-2 px-4">
              <button
                type="button"
                onClick={toggleLang}
                className="flex-1 rounded-full border border-navy-200 px-4 py-2.5 text-sm font-semibold text-navy-800"
              >
                {lang === 'en' ? 'मराठी' : 'English'}
              </button>
              <a href={`tel:${contactInfo.urology.mobile}`} className="rounded-full border border-navy-200 p-2.5 text-navy-800">
                <Icon name="phone" className="h-5 w-5" />
              </a>
            </div>
            <Link href="/contact" className="btn-primary mx-4 mt-3">
              {t('common.bookAppointment')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
