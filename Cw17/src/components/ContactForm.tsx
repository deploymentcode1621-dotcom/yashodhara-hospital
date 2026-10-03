"use client";
import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { site, whatsappLink } from "@/data/site";

type Values = { name: string; mobile: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;
const empty: Values = { name: "", mobile: "", email: "", subject: "", message: "" };

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 3) e.name = "Please enter your full name (at least 3 characters).";
  if (!/^[6-9]\d{9}$/.test(v.mobile.replace(/[\s-]/g, ""))) e.mobile = "Enter a valid 10-digit Indian mobile number.";
  if (v.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "Enter a valid email address.";
  if (v.subject.trim().length < 3) e.subject = "Please enter a subject.";
  if (v.message.trim().length < 10) e.message = "Please write a message (at least 10 characters).";
  return e;
}

export default function ContactForm() {
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof Values) => (e: { target: { value: string } }) => setValues((p) => ({ ...p, [k]: e.target.value }));

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    // No backend: the request is sent to the hospital over WhatsApp. Replace with an API route / email service if desired.
    const text = `*Appointment / Enquiry*\nName: ${values.name}\nMobile: ${values.mobile}\nEmail: ${values.email || "-"}\nSubject: ${values.subject}\nMessage: ${values.message}`;
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    setSent(true);
    setValues(empty);
  }

  const field = (k: keyof Values, label: string, props: React.InputHTMLAttributes<HTMLInputElement> = {}, required = true) => (
    <div>
      <label htmlFor={k} className="mb-1.5 block text-sm font-semibold text-plum-900">{label}{required && <span className="text-brand-red"> *</span>}</label>
      <input id={k} name={k} value={values[k]} onChange={set(k)} className="input" aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `${k}-err` : undefined} {...props} />
      {errors[k] && <p id={`${k}-err`} role="alert" className="mt-1 text-sm text-red-700">{errors[k]}</p>}
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-3xl border border-plum-100 bg-white p-6 shadow-xl shadow-plum-700/5 md:p-8">
      {sent && (
        <p role="status" className="flex items-start gap-2 rounded-xl bg-green-50 p-4 text-sm text-green-800">
          <CheckCircle2 size={20} className="shrink-0" aria-hidden />WhatsApp has been opened with your details. Please press Send there. You can also call us on {site.phone}.
        </p>
      )}
      <div className="grid gap-5 sm:grid-cols-2">
        {field("name", "Full Name", { autoComplete: "name" })}
        {field("mobile", "Mobile Number", { type: "tel", inputMode: "numeric", autoComplete: "tel-national", maxLength: 13 })}
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {field("email", "Email", { type: "email", autoComplete: "email" }, false)}
        {field("subject", "Subject")}
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-plum-900">Message <span className="text-brand-red">*</span></label>
        <textarea id="message" name="message" rows={5} value={values.message} onChange={set("message")} className="input" aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined} />
        {errors.message && <p id="message-err" role="alert" className="mt-1 text-sm text-red-700">{errors.message}</p>}
      </div>
      <button type="submit" className="btn-primary w-full sm:w-auto"><Send size={18} aria-hidden />Send Request</button>
      <p className="text-xs text-slate-500">For emergencies please call directly instead of using this form.</p>
    </form>
  );
}
