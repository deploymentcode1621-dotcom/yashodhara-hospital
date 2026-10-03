import Link from "next/link";
import Image from "next/image";

export default function PageHero({ title, text, image, dental = false }: { title: string; text: string; image?: string; dental?: boolean }) {
  return (
    <section className={`relative overflow-hidden text-white ${dental ? "bg-gradient-to-br from-plum-700 via-plum-600 to-[#a45a9a]" : "bg-gradient-to-br from-plum-900 via-plum-800 to-plum-600"}`}>
      {image && <Image src={image} alt="" fill sizes="100vw" priority className="object-cover opacity-15" />}
      <div className="container-x relative py-14 md:py-20">
        <nav aria-label="Breadcrumb" className="mb-4 text-sm text-plum-200">
          <Link href="/" className="hover:text-accent">Home</Link> <span aria-hidden>/</span> <span>{title}</span>
        </nav>
        <h1 className="animate-fade-up text-4xl font-extrabold md:text-5xl">{title}</h1>
        <p className="animate-fade-up mt-4 max-w-2xl text-lg text-plum-100">{text}</p>
      </div>
    </section>
  );
}
