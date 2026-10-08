"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { Activity, ArrowRight, BadgeCheck, CalendarCheck, ChevronRight, Droplets, Gem, Mars, Phone, ShieldCheck, Stethoscope } from "lucide-react";
import { doctor, site } from "@/data/site";

const CYCLE_MS = 4500;

const specialities = [
  { name: "Kidney Stone", tag: "PCNL · URSL · ESWL", text: "Gentle, minimally invasive stone removal using modern endoscopic technology.", icon: Gem },
  { name: "Prostate", tag: "Diagnosis & treatment", text: "Careful evaluation and advanced treatment for prostate conditions.", icon: Activity },
  { name: "Urinary Infection", tag: "Bladder & urinary tract", text: "Accurate diagnosis and lasting relief from urinary tract problems.", icon: Droplets },
  { name: "Male Infertility", tag: "Andrology", text: "Private, respectful evaluation and treatment for male reproductive health.", icon: Mars },
  { name: "Uro-Oncology", tag: "Kidney · Bladder · Prostate", text: "Specialised, compassionate care for urological cancers.", icon: ShieldCheck },
];

function useCount(to: number, ms = 1500) {
  const [v, setV] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const step = (t: number) => {
      const p = Math.min((t - start) / ms, 1);
      setV(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to, ms]);
  return v;
}

function useClock() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return now;
}

function istParts(d: Date) {
  const parts = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Kolkata", weekday: "long", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }).formatToParts(d);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  return { weekday: get("weekday"), h: Number(get("hour")) % 24, m: get("minute"), s: Number(get("second")) };
}

export default function HomeHero() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [paused, setPaused] = useState(false);
  const now = useClock();

  const years = useCount(11);
  const procedures = useCount(3);
  const days = useCount(6);

  // auto-advance specialities
  useEffect(() => {
    if (paused) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => setActive((a) => (a + 1) % specialities.length), CYCLE_MS);
    return () => clearTimeout(id);
  }, [active, cycle, paused]);

  // soft pointer parallax
  const onMove = useCallback((e: React.PointerEvent) => {
    const el = root.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
    el.style.setProperty("--my", ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
  }, []);

  const t = now ? istParts(now) : null;
  const sunday = t?.weekday === "Sunday";
  const open = !!t && !sunday && t.h >= 9 && t.h < 20;
  const statusLabel = !t ? "Mon – Sat · 9 AM – 8 PM" : open ? "Open now · until 8 PM" : sunday ? "Sunday · by appointment" : "Closed now · opens 9 AM";
  const h12 = t ? t.h % 12 || 12 : 0;
  const ampm = t ? (t.h >= 12 ? "PM" : "AM") : "";

  const spec = specialities[active];
  const parallax = (k: number) => ({ transform: `translate3d(calc(var(--mx,0) * ${k}px), calc(var(--my,0) * ${k}px), 0)` });

  return (
    <section ref={root} onPointerMove={onMove} className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#fdfaf7_0%,#faf5fb_60%,#f4ebf6_100%)]">
      <style>{`
        @keyframes hh-drift { 0%,100% { transform: translate3d(0,0,0) scale(1); } 50% { transform: translate3d(40px,30px,0) scale(1.08); } }
        @keyframes hh-drift2 { 0%,100% { transform: translate3d(0,0,0) scale(1); } 50% { transform: translate3d(-50px,20px,0) scale(1.1); } }
        @keyframes hh-spin { to { transform: rotate(360deg); } }
        @keyframes hh-spin-rev { to { transform: rotate(-360deg); } }
        @keyframes hh-bob { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-9px); } }
        @keyframes hh-word { from { opacity: 0; transform: translateY(70%); filter: blur(6px); } to { opacity: 1; transform: translateY(0); filter: blur(0); } }
        @keyframes hh-fade { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes hh-fill { from { width: 0%; } to { width: 100%; } }
        @keyframes hh-ping { 0% { transform: scale(1); opacity: .6; } 80%,100% { transform: scale(2.6); opacity: 0; } }
        @keyframes hh-trace { from { stroke-dashoffset: 140; } to { stroke-dashoffset: -860; } }
        .hh-drift { animation: hh-drift 18s ease-in-out infinite; }
        .hh-drift2 { animation: hh-drift2 22s ease-in-out infinite; }
        .hh-spin { animation: hh-spin 70s linear infinite; }
        .hh-spin-rev { animation: hh-spin-rev 90s linear infinite; }
        .hh-bob { animation: hh-bob 6s ease-in-out infinite; }
        .hh-bob2 { animation: hh-bob 7.5s ease-in-out -2.5s infinite; }
        .hh-word { animation: hh-word .7s cubic-bezier(.2,.8,.2,1) both; }
        .hh-fade { animation: hh-fade .5s ease both; }
        .hh-fill { animation-name: hh-fill; animation-timing-function: linear; animation-fill-mode: forwards; }
        .hh-ping { animation: hh-ping 2s ease-out infinite; }
        .hh-trace { stroke-dasharray: 140 860; animation: hh-trace 5.5s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .hh-drift,.hh-drift2,.hh-spin,.hh-spin-rev,.hh-bob,.hh-bob2,.hh-ping,.hh-trace { animation: none; }
        }
      `}</style>

      {/* atmosphere */}
      <div className="hh-drift absolute -left-24 top-0 -z-10 h-[26rem] w-[26rem] rounded-full bg-plum-200/50 blur-3xl" aria-hidden />
      <div className="hh-drift2 absolute -right-24 top-24 -z-10 h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-3xl" aria-hidden />
      <div className="hh-drift absolute bottom-0 left-1/3 -z-10 h-80 w-80 rounded-full bg-[#9ad9c9]/30 blur-3xl" aria-hidden />
      <div className="absolute inset-0 -z-10 opacity-60 [background-image:radial-gradient(#d9c3dd_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" aria-hidden />

      <div className="container-x relative z-10 grid items-center gap-16 pb-28 pt-10 md:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* LEFT */}
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-plum-100 bg-white/80 py-1.5 pl-3 pr-4 text-xs font-semibold text-plum-800 shadow-sm backdrop-blur">
            <span className="relative flex h-2.5 w-2.5">
              <span className={`hh-ping absolute inset-0 rounded-full ${open || !t ? "bg-[#22c55e]" : "bg-accent"}`} aria-hidden />
              <span className={`relative h-2.5 w-2.5 rounded-full ${open || !t ? "bg-[#22c55e]" : "bg-accent"}`} />
            </span>
            {statusLabel}
          </div>

          <h1 className="mt-6 text-[2.5rem] font-extrabold leading-[1.1] tracking-tight text-plum-900 sm:text-5xl xl:text-[3.5rem]">
            Gentle, expert care for
            <span className="block h-[1.2em] overflow-hidden leading-[1.2]">
              <span key={active} className="hh-word block bg-gradient-to-r from-plum-600 via-[#a45a9a] to-brand-red bg-clip-text text-transparent">
                {spec.name}
              </span>
            </span>
            <span className="sr-only"> – Urology &amp; Andrology Care in Latur</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
            Advanced diagnosis and minimally invasive treatment for kidney, bladder, prostate and male reproductive health – led by <strong className="font-semibold text-plum-900">Dr. Dhiraj Hedda, M.Ch. (Urology)</strong>, right here in Latur.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/contact#appointment" className="group inline-flex items-center justify-center gap-2 rounded-full bg-plum-700 px-7 py-4 font-bold text-white shadow-lg shadow-plum-700/25 transition hover:-translate-y-0.5 hover:bg-plum-800">
              <CalendarCheck size={20} aria-hidden /> Book an Appointment
              <ArrowRight size={18} className="transition group-hover:translate-x-1" aria-hidden />
            </Link>
            <a href={site.phoneHref} className="group flex items-center gap-3 rounded-full border border-plum-200 bg-white/80 py-2 pl-2 pr-6 shadow-sm backdrop-blur transition hover:border-plum-300 hover:bg-white">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-accent/90 text-plum-900"><Phone size={19} aria-hidden /></span>
              <span className="leading-tight">
                <span className="block text-[11px] font-semibold uppercase tracking-widest text-slate-500">Call us</span>
                <span className="block font-bold text-plum-900">{site.phone}</span>
              </span>
            </a>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-3 divide-x divide-plum-100 rounded-2xl border border-plum-100 bg-white/70 py-4 shadow-sm backdrop-blur">
            {[
              { v: `${years}+`, l: "Years of urological care" },
              { v: `${procedures}`, l: "Advanced stone procedures" },
              { v: `${days}`, l: "Days open every week" },
            ].map((s) => (
              <div key={s.l} className="px-4 text-center">
                <dt className="sr-only">{s.l}</dt>
                <dd className="text-2xl font-extrabold text-plum-800 sm:text-3xl">{s.v}</dd>
                <p className="mt-0.5 text-[11px] leading-snug text-slate-500">{s.l}</p>
              </div>
            ))}
          </dl>
        </div>

        {/* RIGHT – live care panel */}
        <div className="animate-fade-up relative mx-auto w-full max-w-[30rem]">
          {/* orbit rings */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[118%] -translate-x-1/2 -translate-y-1/2" aria-hidden>
            <div className="hh-spin h-full w-full rounded-full border border-dashed border-plum-200">
              <span className="absolute -top-1.5 left-1/2 h-3 w-3 rounded-full bg-accent shadow shadow-accent/50" />
              <span className="absolute bottom-[14%] left-[6%] h-2 w-2 rounded-full bg-plum-300" />
            </div>
          </div>
          <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[92%] -translate-x-1/2 -translate-y-1/2" aria-hidden>
            <div className="hh-spin-rev h-full w-full rounded-full border border-plum-100">
              <span className="absolute -right-1 top-1/2 h-2.5 w-2.5 rounded-full bg-[#7fcdb9]" />
            </div>
          </div>

          {/* main card */}
          <div
            className="relative rounded-[2rem] border border-white bg-white/85 p-5 shadow-[0_30px_80px_-24px_rgba(88,28,95,0.28)] backdrop-blur-xl"
            onPointerEnter={(e) => e.pointerType === "mouse" && setPaused(true)}
            onPointerLeave={(e) => {
              if (e.pointerType === "mouse") {
                setPaused(false);
                setCycle((c) => c + 1);
              }
            }}
          >
            <div className="mb-3 flex items-center justify-between px-1">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-plum-600">Our specialities</p>
              <span className="flex items-center gap-1.5 rounded-full bg-[#e8f7f1] px-2.5 py-1 text-[11px] font-bold text-[#157a5e]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" aria-hidden /> Live
              </span>
            </div>

            <ul className="space-y-1.5">
              {specialities.map((s, i) => {
                const Icon = s.icon;
                const on = i === active;
                return (
                  <li key={s.name}>
                    <button
                      type="button"
                      aria-pressed={on}
                      onClick={() => {
                        setActive(i);
                        setCycle((c) => c + 1);
                      }}
                      className={`relative flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left transition ${on ? "bg-plum-50 ring-1 ring-plum-200" : "hover:bg-plum-50/60"}`}
                    >
                      <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition ${on ? "bg-plum-700 text-white shadow-md shadow-plum-700/30" : "bg-plum-50 text-plum-600"}`}>
                        <Icon size={20} aria-hidden />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-bold text-plum-900">{s.name}</span>
                        <span className="block truncate text-xs text-slate-500">{s.tag}</span>
                      </span>
                      <ChevronRight size={18} className={`shrink-0 transition ${on ? "translate-x-0.5 text-plum-600" : "text-plum-200"}`} aria-hidden />
                      {on && (
                        <span className="absolute inset-x-4 bottom-1 h-[3px] overflow-hidden rounded-full bg-plum-100" aria-hidden>
                          <span
                            key={`${active}-${cycle}`}
                            className="hh-fill block h-full rounded-full bg-gradient-to-r from-plum-500 to-accent"
                            style={{ animationDuration: `${CYCLE_MS}ms`, animationPlayState: paused ? "paused" : "running" }}
                          />
                        </span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>

            <div key={`d-${active}`} className="hh-fade mt-3 rounded-2xl bg-gradient-to-br from-plum-50 to-[#f1faf6] p-4">
              <p className="flex items-center gap-2 text-sm font-bold text-plum-900"><BadgeCheck size={17} className="text-[#157a5e]" aria-hidden />{spec.name}</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">{spec.text}</p>
              <Link href="/services" className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-plum-700 hover:text-brand-red">
                Learn more <ArrowRight size={15} aria-hidden />
              </Link>
            </div>
          </div>

          {/* floating: doctor */}
          <div className="absolute -right-2 -top-7 z-10 transition-transform duration-300 ease-out sm:-right-10" style={parallax(-22)}>
            <div className="hh-bob flex items-center gap-3 rounded-2xl border border-white bg-white/90 py-2.5 pl-2.5 pr-4 shadow-xl shadow-plum-900/10 backdrop-blur">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-plum-600 to-[#a45a9a] text-white"><Stethoscope size={20} aria-hidden /></span>
              <span className="leading-tight">
                <span className="block text-sm font-bold text-plum-900">{doctor.name}</span>
                <span className="block text-[11px] text-slate-500">Consultant Urologist</span>
              </span>
            </div>
          </div>

          {/* floating: live clock */}
          <div className="absolute -bottom-7 -left-2 z-10 transition-transform duration-300 ease-out sm:-left-10" style={parallax(24)}>
            <div className="hh-bob2 rounded-2xl border border-white bg-white/90 px-4 py-3 shadow-xl shadow-plum-900/10 backdrop-blur">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">{t ? t.weekday : "Latur"} · Latur</p>
              <p className="mt-0.5 flex items-baseline gap-1 text-2xl font-extrabold tabular-nums text-plum-800">
                {t ? (
                  <>
                    {h12}
                    <span className={t.s % 2 ? "opacity-30" : ""}>:</span>
                    {t.m}
                    <span className="ml-1 text-xs font-bold text-plum-500">{ampm}</span>
                  </>
                ) : (
                  "9 – 8"
                )}
              </p>
              <p className={`text-[11px] font-semibold ${open ? "text-[#157a5e]" : "text-plum-600"}`}>{statusLabel}</p>
            </div>
          </div>
        </div>
      </div>

      {/* heartbeat line */}
      <svg className="pointer-events-none absolute inset-x-0 bottom-0 h-24 w-full" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id="hh-line" x1="0" x2="1">
            <stop offset="0" stopColor="#c9a3cf" stopOpacity="0" />
            <stop offset=".5" stopColor="#8e3f86" />
            <stop offset="1" stopColor="#c9a3cf" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,86 C240,70 480,100 720,84 C960,68 1200,98 1440,82 L1440,120 L0,120 Z" fill="#ffffff" fillOpacity=".7" />
        <path
          d="M0,60 H300 L320,60 L335,40 L352,78 L372,14 L392,70 L406,60 H820 L840,60 L855,40 L872,78 L892,14 L912,70 L926,60 H1440"
          fill="none" stroke="#c9a3cf" strokeOpacity=".5" strokeWidth="1.5" vectorEffect="non-scaling-stroke"
        />
        <path
          className="hh-trace"
          pathLength={1000}
          d="M0,60 H300 L320,60 L335,40 L352,78 L372,14 L392,70 L406,60 H820 L840,60 L855,40 L872,78 L892,14 L912,70 L926,60 H1440"
          fill="none" stroke="url(#hh-line)" strokeWidth="2.5" strokeLinecap="round" vectorEffect="non-scaling-stroke"
        />
      </svg>
    </section>
  );
}