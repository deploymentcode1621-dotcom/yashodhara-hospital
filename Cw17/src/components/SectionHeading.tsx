export default function SectionHeading({ eyebrow, title, text, center = true, light = false }: { eyebrow?: string; title: string; text?: string; center?: boolean; light?: boolean }) {
  return (
    <div className={`mb-10 max-w-3xl md:mb-14 ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className={`mb-2 text-xs font-bold uppercase tracking-[0.2em] ${light ? "text-accent" : "text-brand-red"}`}>{eyebrow}</p>}
      <h2 className={`text-3xl font-extrabold leading-tight md:text-4xl ${light ? "text-white" : "text-plum-900"}`}>{title}</h2>
      <span className={`mt-4 block h-1 w-16 rounded-full bg-accent ${center ? "mx-auto" : ""}`} />
      {text && <p className={`mt-4 text-base leading-relaxed md:text-lg ${light ? "text-plum-100" : "text-slate-600"}`}>{text}</p>}
    </div>
  );
}
