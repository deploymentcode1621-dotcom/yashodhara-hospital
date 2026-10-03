import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x py-24 text-center">
      <h1 className="text-4xl font-extrabold text-plum-900">Page not found</h1>
      <p className="mt-3 text-slate-600">The page you are looking for does not exist.</p>
      <Link href="/" className="btn-primary mt-6">Back to Home</Link>
    </section>
  );
}
