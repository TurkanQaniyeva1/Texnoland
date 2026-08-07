import { notFound } from "next/navigation";
import { movies, series } from "@/lib/mockData";

type MovieDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function MovieDetailPage({ params }: MovieDetailPageProps) {
  const { slug } = await params;
  const item = [...movies, ...series].find((entry) => entry.id === slug);

  if (!item) notFound();

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-16 text-slate-100 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70">
        <img src={item.image} alt={item.title} className="h-[420px] w-full object-cover" />
        <div className="p-8 lg:p-12">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Movie Details</p>
          <h1 className="mt-3 text-4xl font-semibold">{item.title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-400">{item.description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">{item.year}</span>
            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">{item.duration}</span>
            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">{(item.rating ?? 4.8).toFixed(1)} ★</span>
          </div>
        </div>
      </div>
    </main>
  );
}
