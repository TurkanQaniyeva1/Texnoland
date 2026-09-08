import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/lib/mockData";

function toSlug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((item) => toSlug(item.title) === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="page-shell min-h-screen bg-slate-950 px-4 py-16 text-slate-100 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-200/10 bg-slate-900/80 p-8 lg:p-12">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Xidmət</p>
        <h1 className="mt-4 text-4xl font-semibold">{service.title}</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-400">{service.description}</p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-[1.5rem] border border-slate-700 bg-slate-950/50 p-5"><p className="text-sm text-slate-400">Xüsusiyyətlər</p><p className="mt-2 text-lg font-semibold text-white">Texniki planlama</p></div>
          <div className="rounded-[1.5rem] border border-slate-700 bg-slate-950/50 p-5"><p className="text-sm text-slate-400">Proses</p><p className="mt-2 text-lg font-semibold text-white">İcra və monitoring</p></div>
          <div className="rounded-[1.5rem] border border-slate-700 bg-slate-950/50 p-5"><p className="text-sm text-slate-400">Nəticə</p><p className="mt-2 text-lg font-semibold text-white">Etibarlı dəstək</p></div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/quote" className="rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-5 py-3 text-sm font-semibold text-white">Təklif alın</Link>
          <Link href="/services" className="rounded-2xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200">Bütün xidmətlər</Link>
        </div>
      </div>
    </main>
  );
}
