"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { movies } from "@/lib/mockData";

const ITEMS_PER_PAGE = 6;

export default function Projects() {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(movies.length / ITEMS_PER_PAGE);

  const current = useMemo(() => movies.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE), [page]);

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-16 text-slate-100 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Projects</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Premium layihələr və təkliflər</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400">Bütün bloklar tam responsive, animasiyalı və premium görünüşdə qurulub.</p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={page} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {current.map((project, index) => (
              <motion.article key={project.id} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/70 shadow-2xl shadow-slate-950/30">
                <img src={project.image} alt={project.title} className="h-56 w-full object-cover" />
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <span>{project.year}</span>
                    <span>{(project.rating ?? 4.8).toFixed(1)} ★</span>
                  </div>
                  <h2 className="mt-3 text-xl font-semibold text-white">{project.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.genre.map((genre) => (<span key={genre} className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">{genre}</span>))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <button onClick={() => setPage((p) => Math.max(p - 1, 1))} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/20">←</button>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button key={i} onClick={() => setPage(i + 1)} className={`h-10 w-10 rounded-full text-sm font-medium transition ${page === i + 1 ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white" : "border border-white/10 bg-white/10 text-slate-300"}`}>
              {i + 1}
            </button>
          ))}
          <button onClick={() => setPage((p) => Math.min(p + 1, totalPages))} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/20">→</button>
        </div>
      </section>
    </main>
  );
}