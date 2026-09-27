'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { contactInfo, departments } from '@/lib/content';
import Icon from './Icon';

export default function AppointmentForm() {
  const { t, pick, lang } = useLanguage();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    age: '',
    department: departments[0][lang] || departments[0].en,
    date: '',
    message: '',
  });

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      lang === 'mr' ? 'नमस्ते, मला अपॉइंटमेंट हवी आहे.' : 'Namaste, I would like to book an appointment.',
      '',
      `${t('contact.nameLabel')}: ${form.name}`,
      `${t('contact.phoneLabel')}: ${form.phone}`,
      form.age ? `${t('contact.ageLabel')}: ${form.age}` : null,
      `${t('contact.departmentLabel')}: ${form.department}`,
      form.date ? `${t('contact.dateLabel')}: ${form.date}` : null,
      form.message ? `${t('contact.messageLabel')}: ${form.message}` : null,
    ].filter(Boolean);

    const url = `https://wa.me/91${contactInfo.urology.mobile}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <form onSubmit={handleSubmit} className="card space-y-5 p-6 sm:p-8">
      <div>
        <h3 className="font-display text-xl font-semibold text-navy-900">{t('contact.formTitle')}</h3>
        <p className="mt-1 text-sm text-navy-500">{t('contact.formSubtitle')}</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy-700">
            {t('contact.nameLabel')} <span className="text-rust-500">*</span>
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={update('name')}
            placeholder={t('contact.namePlaceholder')}
            className="w-full rounded-xl border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-900 outline-none transition-colors focus:border-rust-500"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy-700">
            {t('contact.phoneLabel')} <span className="text-rust-500">*</span>
          </label>
          <input
            id="phone"
            required
            type="tel"
            pattern="[0-9]{10}"
            value={form.phone}
            onChange={update('phone')}
            placeholder={t('contact.phonePlaceholder')}
            className="w-full rounded-xl border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-900 outline-none transition-colors focus:border-rust-500"
          />
        </div>
        <div>
          <label htmlFor="age" className="mb-1.5 block text-sm font-medium text-navy-700">
            {t('contact.ageLabel')}
          </label>
          <input
            id="age"
            type="number"
            min="0"
            max="120"
            value={form.age}
            onChange={update('age')}
            placeholder={t('contact.agePlaceholder')}
            className="w-full rounded-xl border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-900 outline-none transition-colors focus:border-rust-500"
          />
        </div>
        <div>
          <label htmlFor="date" className="mb-1.5 block text-sm font-medium text-navy-700">
            {t('contact.dateLabel')}
          </label>
          <input
            id="date"
            type="date"
            value={form.date}
            onChange={update('date')}
            className="w-full rounded-xl border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-900 outline-none transition-colors focus:border-rust-500"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="department" className="mb-1.5 block text-sm font-medium text-navy-700">
            {t('contact.departmentLabel')}
          </label>
          <select
            id="department"
            value={form.department}
            onChange={update('department')}
            className="w-full rounded-xl border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-900 outline-none transition-colors focus:border-rust-500"
          >
            {departments.map((d) => (
              <option key={d.en} value={pick(d)}>
                {pick(d)}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy-700">
            {t('contact.messageLabel')}
          </label>
          <textarea
            id="message"
            rows={3}
            value={form.message}
            onChange={update('message')}
            placeholder={t('contact.messagePlaceholder')}
            className="w-full rounded-xl border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-900 outline-none transition-colors focus:border-rust-500"
          />
        </div>
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        <Icon name="whatsapp" className="h-5 w-5" />
        {t('contact.submitButton')}
      </button>
      <p className="flex items-center gap-2 text-xs text-navy-400">
        <Icon name="check" className="h-4 w-4 text-rust-500" />
        {t('contact.successNote')}
      </p>
    </form>
  );
}
