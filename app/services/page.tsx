import Link from "next/link";
import { services } from "@/lib/mockData";

export default function ServicesPage() {
  return (
    <main className="page-shell min-h-screen bg-slate-950 px-4 py-16 text-slate-100 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Xidmətlər</p>
          <h1 className="mt-4 text-4xl font-semibold">Texnolandun tam texniki dəstəyi</h1>
          <p className="mt-4 text-base leading-8 text-slate-400">Enerji, elektrik şəbəkələri, inşaat və mühəndis komunikasiyalarında dayanıklı, təhlükəsiz və iqtisadi həllər təklif edirik.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <div key={service.title} className="rounded-[1.75rem] border border-slate-200/10 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/20">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl text-cyan-300">{index + 1}</div>
              <h2 className="mt-5 text-xl font-semibold text-white">{service.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">{service.description}</p>
              <Link href={`/services/${service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="mt-5 inline-flex text-sm font-medium text-cyan-400">Ətraflı bax</Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
