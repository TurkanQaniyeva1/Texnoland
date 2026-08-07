import { MediaGrid } from "@/Components/sections/MediaGrid";
import { trendingItems } from "@/lib/mockData";

export default function TrendingPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-16 text-slate-100 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Trending</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Trenddə olanlar</h1>
        </div>
        <MediaGrid title="Trending" items={trendingItems} linkHref="/discover" />
      </div>
    </main>
  );
}
