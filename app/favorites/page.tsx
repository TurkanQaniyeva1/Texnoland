import { series } from "@/lib/mockData";

export default function FavoritesPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-16 text-slate-100 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Favorites</p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Sevimlilər</h1>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {series.slice(0, 2).map((item) => (
            <div key={item.id} className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-5">
              <h2 className="text-lg font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-sm text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
