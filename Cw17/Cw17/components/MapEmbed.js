export default function MapEmbed({ query, label, className = '' }) {
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className={`overflow-hidden rounded-2xl border border-navy-100 shadow-card ${className}`}>
      <iframe
        title={label || 'Map'}
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: 320 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
