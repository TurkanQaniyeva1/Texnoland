import { faqItems } from "@/lib/mockData";

export function FAQSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <div className="rounded-[2rem] border border-slate-200/70 bg-white/80 p-8 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.16)] backdrop-blur-xl lg:p-12 dark:border-white/10 dark:bg-slate-900/80">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-600 dark:text-emerald-400">FAQ</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">Tez-tez verilən suallar</h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {faqItems.map((item) => (
            <div key={item.question} className="rounded-[1.25rem] border border-slate-200/70 bg-slate-50/80 p-5 dark:border-white/10 dark:bg-slate-950/40">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
