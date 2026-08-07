"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MediaItem } from "@/lib/mockData";
import { Button } from "@/Components/ui/Button";

type MediaGridProps = {
  title: string;
  items: MediaItem[];
  linkHref: string;
};

export function MediaGrid({ title, items, linkHref }: MediaGridProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">{title}</p>
          <h2 className="text-2xl font-semibold text-white">Premium seçimlər</h2>
        </div>
        <Button href={linkHref} variant="ghost">Bütününü gör</Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => (
          <motion.article key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.05 }} className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/70 shadow-lg shadow-slate-950/30">
            <div className="relative">
              <img src={item.image} alt={item.title} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className={`absolute inset-0 bg-gradient-to-t ${item.accent} opacity-40`} />
              <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-slate-950/70 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-100">{item.category}</div>
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between text-sm text-slate-400">
                <span>{item.year}</span>
                <span>{item.duration}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.genre.map((genre) => <span key={genre} className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 text-xs text-cyan-300">{genre}</span>)}
              </div>
              <Link href={`/movie/${item.id}`} className="mt-6 inline-flex text-sm font-medium text-cyan-400">Detallar →</Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
