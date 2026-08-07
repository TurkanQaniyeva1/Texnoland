"use client";

import { useMemo, useState } from "react";
import { movies, series } from "@/lib/mockData";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const combined = [...movies, ...series];
    return combined.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()) || item.genre.some((genre) => genre.toLowerCase().includes(query.toLowerCase())));
  }, [query]);

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-16 text-slate-100 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Search</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Axtar</h1>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Film ya serial axtar..." className="mt-6 w-full max-w-2xl rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" />
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.length > 0 ? filtered.map((item) => (
            <div key={item.id} className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-5">
              <h2 className="text-lg font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
            </div>
          )) : <div className="rounded-[1.5rem] border border-dashed border-white/15 bg-slate-900/40 p-8 text-slate-400">Heç nə tapılmadı.</div>}
        </div>
      </div>
    </main>
  );
}
