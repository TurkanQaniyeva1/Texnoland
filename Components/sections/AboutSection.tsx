"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/mockData";

export function AboutSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <div className="grid gap-8 rounded-[2rem] border border-slate-200/70 bg-white/80 p-8 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.16)] backdrop-blur-xl lg:grid-cols-[1fr_0.9fr] lg:p-12 dark:border-white/10 dark:bg-slate-900/80">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-600 dark:text-emerald-400">Haqqımızda</p>
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Texnoland ilə enerji və mühəndislikdə güvənli irəliləyiş.</h2>
          <p className="max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400">Biz enerji, elektrik şəbəkələri və inşaat sahələrində uzunmüddətli, dayanıqlı və səmərəli həllər təqdim edirik. Hər layihə üçün texniki dəqiqlik, təhlükəsizlik və müştəri məmnuniyyəti əsas prioritetdir.</p>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-2">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[1.25rem] border border-slate-200/70 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-slate-950/40">
              <p className="text-3xl font-semibold text-slate-900 dark:text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
