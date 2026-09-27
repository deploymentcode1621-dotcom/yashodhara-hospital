export default function PageHero({ kicker, title, body, children }) {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      <div className="absolute inset-0 bg-vessel-lines opacity-70" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-rust-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-maroon-500/20 blur-3xl" />
      <div className="container-page relative py-16 sm:py-20 lg:py-24">
        <span className="kicker border-white/30 bg-white/10 text-rust-200">{kicker}</span>
        <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">{title}</h1>
        {body && <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy-100 sm:text-lg">{body}</p>}
        {children}
      </div>
    </section>
  );
}
