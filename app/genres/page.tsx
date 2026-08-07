import { genres } from "@/lib/mockData";

export default function GenresPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-16 text-slate-100 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Genres</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Janrlar</h1>
          <p className="mt-4 max-w-2xl text-base text-slate-400">Hər janr üçün nəzərdə tutulmuş premium kateqoriyalar.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {genres.map((genre) => (
            <div key={genre.slug} className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6">
              <h2 className="text-xl font-semibold text-white">{genre.name}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">{genre.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
