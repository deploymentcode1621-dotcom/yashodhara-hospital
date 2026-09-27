'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import translations from '@/lib/translations';

const LanguageContext = createContext({
  lang: 'en',
  toggleLang: () => {},
  setLang: () => {},
  t: (path) => path,
});

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem('yashodhara-lang');
      if (saved === 'en' || saved === 'mr') {
        setLang(saved);
      }
    } catch (e) {
      // ignore storage errors (private browsing etc.)
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem('yashodhara-lang', lang);
    } catch (e) {
      // ignore
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'mr' : 'en'));

  // t('nav.home') -> looks up translations.nav.home[lang]
  const t = (path) => {
    const parts = path.split('.');
    let node = translations;
    for (const part of parts) {
      if (node && typeof node === 'object' && part in node) {
        node = node[part];
      } else {
        return path;
      }
    }
    if (node && typeof node === 'object' && (node.en || node.mr)) {
      return node[lang] || node.en || path;
    }
    return path;
  };

  // pick({en:'..', mr:'..'}) -> current language string
  const pick = (obj) => {
    if (!obj) return '';
    return obj[lang] || obj.en || '';
  };

  const value = useMemo(() => ({ lang, toggleLang, setLang, t, pick }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
