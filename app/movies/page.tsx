import { MediaGrid } from "@/Components/sections/MediaGrid";
import { movies, featuredItems } from "@/lib/mockData";

export default function MoviesPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-16 text-slate-100 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Movies</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Filmlər</h1>
          <p className="mt-4 max-w-2xl text-base text-slate-400">Premium film seçimi, gözəl illüstrasiya və interaktiv izləmə təcrübəsi.</p>
        </div>
        <MediaGrid title="Featured" items={[...featuredItems, ...movies.slice(0, 2)]} linkHref="/discover" />
      </div>
    </main>
  );
}
