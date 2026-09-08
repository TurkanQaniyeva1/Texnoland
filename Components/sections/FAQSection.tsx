"use client";
import { useState } from "react";
import { faqItems } from "@/lib/mockData";

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.16)] backdrop-blur-xl lg:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">FAQ</p>
        <h2 className="mt-3 text-3xl font-semibold text-white">Tez-tez verilən suallar</h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {faqItems.map((item, index) => (
            <div key={item.question} className="rounded-[1.25rem] border border-white/10 bg-slate-950/40">
              <button type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? null : index)} className="flex w-full items-center justify-between gap-4 p-5 text-left text-lg font-semibold text-white"><span>{item.question}</span><span className="text-emerald-500">{open === index ? "−" : "+"}</span></button>
              {open === index ? <p className="px-5 pb-5 text-sm leading-7 text-slate-400">{item.answer}</p> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
