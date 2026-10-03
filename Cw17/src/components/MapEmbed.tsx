export default function MapEmbed({ src, title }: { src: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-plum-100 shadow-lg">
      <iframe title={title} src={src} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen className="h-80 w-full md:h-[26rem]" />
    </div>
  );
}
