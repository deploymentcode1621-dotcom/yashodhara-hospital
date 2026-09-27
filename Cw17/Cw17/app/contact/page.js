'use client';

import { useLanguage } from '@/context/LanguageContext';
import { contactInfo } from '@/lib/content';
import PageHero from '@/components/PageHero';
import AppointmentForm from '@/components/AppointmentForm';
import MapEmbed from '@/components/MapEmbed';
import Icon from '@/components/Icon';

function BranchCard({ branch, whatsappNote }) {
  const { t, pick } = useLanguage();
  return (
    <div className="card p-6 sm:p-7">
      <h3 className="font-display text-lg font-semibold text-navy-900">{pick(branch.name)}</h3>
      <p className="mt-1 text-sm font-medium text-rust-600">{pick(branch.doctor)}</p>
      <div className="mt-5 space-y-3 text-sm text-navy-700">
        <p className="flex items-start gap-3">
          <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-rust-500" />
          {pick(branch.address)}
        </p>
        <p className="flex items-center gap-3">
          <Icon name="phone" className="h-5 w-5 shrink-0 text-rust-500" />
          <a href={`tel:${branch.phone}`} className="hover:text-rust-600">
            {branch.phone}
            {branch.mobile ? ` / ${branch.mobile}` : ''}
          </a>
        </p>
        {branch.email && (
          <p className="flex items-center gap-3">
            <Icon name="mail" className="h-5 w-5 shrink-0 text-rust-500" />
            <a href={`mailto:${branch.email}`} className="hover:text-rust-600">
              {branch.email}
            </a>
          </p>
        )}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href={`tel:${branch.mobile || branch.phone}`} className="btn-primary">
          <Icon name="phone" className="h-4 w-4" />
          {t('common.callNow')}
        </a>
        <a
          href={`https://wa.me/91${contactInfo.urology.mobile}?text=${encodeURIComponent(whatsappNote)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          <Icon name="whatsapp" className="h-4 w-4" />
          {t('common.whatsapp')}
        </a>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const { t, lang } = useLanguage();

  return (
    <div>
      <PageHero kicker={t('contact.heroKicker')} title={t('contact.heroTitle')} body={t('contact.heroBody')} />

      {/* FORM + MAP */}
      <section className="section-pad">
        <div className="container-page grid gap-8 lg:grid-cols-2 lg:items-start">
          <AppointmentForm />
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-lg font-semibold text-navy-900">{t('contact.mapTitle')}</h3>
            <MapEmbed query={contactInfo.urology.mapQuery} label="Yashodhara Hospital map" className="min-h-[420px] flex-1" />
          </div>
        </div>
      </section>

      {/* BRANCH CARDS */}
      <section className="section-pad bg-cream-soft">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          <BranchCard
            branch={contactInfo.urology}
            whatsappNote={lang === 'mr' ? 'नमस्ते, मला अपॉइंटमेंट हवी आहे.' : 'Namaste, I would like to book an appointment.'}
          />
          <BranchCard
            branch={contactInfo.dental}
            whatsappNote={lang === 'mr' ? 'नमस्ते, मला डेंटल क्लिनिकमध्ये अपॉइंटमेंट हवी आहे.' : 'Namaste, I would like a dental appointment.'}
          />
        </div>
      </section>
    </div>
  );
}
