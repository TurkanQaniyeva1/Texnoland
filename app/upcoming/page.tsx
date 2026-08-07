import { MediaGrid } from "@/Components/sections/MediaGrid";
import { upcomingItems } from "@/lib/mockData";

export default function UpcomingPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-16 text-slate-100 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Upcoming</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Gələn yayımlar</h1>
        </div>
        <MediaGrid title="Upcoming" items={upcomingItems} linkHref="/discover" />
      </div>
    </main>
  );
}
