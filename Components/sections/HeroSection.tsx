"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiCheckCircle, FiPhone } from "react-icons/fi";
import { Button } from "@/Components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/70 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.18),transparent_28%),linear-gradient(135deg,#f8fafc_0%,#eefbf6_35%,#ffffff_100%)] dark:border-white/10 dark:bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.18),transparent_28%),linear-gradient(135deg,#020617_0%,#07111f_35%,#0f172a_100%)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="flex flex-col justify-center">
          <p className="mb-5 inline-flex w-fit items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-700 dark:text-emerald-300">Texnoloji Həllər!</p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">Premium enerji və mühəndislik həlləri ilə gələcəyin infrastrukturu.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">Texnoland olaraq bərpa olunan enerji, elektrik şəbəkələri, mühəndis kommunikasiya və inşaat sahələrində davamlı, təhlükəsiz və uzunömürlü həllər təqdim edirik.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact" variant="primary">Bizimlə əlaqə</Button>
            <Button href="/about" variant="secondary">Haqqımızda</Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
            <span className="flex items-center gap-2"><FiCheckCircle className="text-emerald-500" /> Dövlət lisenziyası</span>
            <span className="flex items-center gap-2"><FiCheckCircle className="text-emerald-500" /> Beynəlxalq standartlara uyğun</span>
            <span className="flex items-center gap-2"><FiCheckCircle className="text-emerald-500" /> Zəmanətli xidmət</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="relative">
          <div className="absolute inset-0 rounded-[2rem] bg-emerald-500/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_30px_70px_-25px_rgba(15,23,42,0.25)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/80">
            <div className="rounded-[1.5rem] border border-emerald-500/20 bg-emerald-500/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400">Texnoland</p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">Mühəndislik və enerji üçün güvənli partner</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">İnnovativ texnologiyalar, səmərəli layihələr və davamlı keyfiyyətin birləşməsi.</p>
              <div className="mt-6 flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/70 p-4 dark:border-white/10 dark:bg-slate-950/40">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"><FiPhone /></div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">24/7 əlaqə</p>
                  <p className="text-lg font-semibold text-slate-900 dark:text-white">(051) 250-65-65</p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between rounded-[1.25rem] border border-slate-200/80 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-slate-950/40">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Sertifikatlı xidmətlər</p>
                <p className="text-lg font-semibold text-slate-900 dark:text-white">Zəmanətli və təhlükəsiz</p>
              </div>
              <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400">Ətraflı <FiArrowRight /></Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
