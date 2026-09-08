"use client";

import { useMemo, useState } from "react";

export default function CalculatorPage() {
  const [monthlyEnergy, setMonthlyEnergy] = useState(4500);
  const [sunHours, setSunHours] = useState(4);
  const [coverage, setCoverage] = useState(70);

  const result = useMemo(() => {
    if (!monthlyEnergy || !sunHours || !coverage) return 0;
    const dailyEnergy = monthlyEnergy / 30;
    const requiredEnergy = (dailyEnergy * coverage) / 100;
    return (requiredEnergy / sunHours).toFixed(1);
  }, [coverage, monthlyEnergy, sunHours]);

  return (
    <main className="page-shell min-h-screen bg-slate-950 px-4 py-16 text-slate-100 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200/10 bg-slate-900/80 p-8 lg:p-12">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Günəş kalkulyatoru</p>
        <h1 className="mt-4 text-4xl font-semibold">Layihə gücünü hesablayın</h1>

        <div className="mt-8 grid gap-5">
          <label className="text-sm text-slate-300">
            <span className="mb-2 block">Aylıq enerji sərfi (kVt·saat)</span>
            <input type="number" value={monthlyEnergy} onChange={(event) => setMonthlyEnergy(Number(event.target.value))} className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" />
          </label>
          <label className="text-sm text-slate-300">
            <span className="mb-2 block">Günəşin pik saatları</span>
            <input type="number" value={sunHours} onChange={(event) => setSunHours(Number(event.target.value))} className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" />
          </label>
          <label className="text-sm text-slate-300">
            <span className="mb-2 block">Ötürmə faizi (%)</span>
            <input type="number" value={coverage} onChange={(event) => setCoverage(Number(event.target.value))} className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" />
          </label>
        </div>

        <div className="mt-8 rounded-[1.5rem] border border-cyan-500/30 bg-cyan-500/10 p-6 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Təxmini güc</p>
          <p className="mt-3 text-4xl font-semibold text-white">{result} kVt</p>
        </div>
      </div>
    </main>
  );
}
