import Link from "next/link";

const articles = [
  { slug: "energy-efficiency", title: "Enerji səmərəliliyinin əsasları" },
  { slug: "solar-energy", title: "Günəş enerjisi ilə tanışlıq" },
  { slug: "smart-grids", title: "Ağıllı elektrik şəbəkələri" },
  { slug: "renewable-future", title: "Bərpa olunan enerjinin gələcəyi" },
];

export default function DiscoverPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-16 text-slate-100 lg:px-8"><div className="mx-auto max-w-7xl"><p className="text-sm uppercase tracking-[0.35em] text-emerald-400">Məlumatlar</p><h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Enerji dünyasından yeniliklər</h1><p className="mt-5 max-w-2xl text-slate-400">Bərpa olunan enerji, səmərəlilik və mühəndislik texnologiyaları haqqında praktik məlumatlar.</p><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{articles.map((article, index) => <Link href={`/discover/${article.slug}`} key={article.slug} className="group border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-emerald-400/60"><p className="text-sm text-emerald-300">{String(index + 1).padStart(2, "0")} / Texnologiya</p><h2 className="mt-10 text-2xl font-semibold">{article.title}</h2><p className="mt-4 text-sm leading-7 text-slate-400">Daha səmərəli, təhlükəsiz və dayanıqlı enerji gələcəyi üçün əsas yanaşmalar.</p><span className="mt-6 inline-block text-sm font-semibold text-emerald-300">Ətraflı oxu →</span></Link>)}</div></div></main>
  );
}
