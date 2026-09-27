export default function SectionHeading({ kicker, title, body, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start';
  return (
    <div className={`flex flex-col ${alignment} max-w-2xl`}>
      <span className="kicker">{kicker}</span>
      <h2 className="mt-4 text-2xl font-semibold leading-tight text-navy-900 sm:text-3xl lg:text-4xl">{title}</h2>
      {body && <p className="mt-4 text-base leading-relaxed text-navy-600">{body}</p>}
      <span className="divider-gold mt-5" />
    </div>
  );
}
