"use client";

import { useState } from "react";

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    projectType: "On Grid",
    power: "",
    count: "",
    address: "",
    email: "",
    gridType: "0,4 kV 3 fazlı",
    placement: "Dam",
    area: "",
    consumption: "",
    file: "",
    message: "",
  });

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="page-shell min-h-screen bg-slate-950 px-4 py-16 text-slate-100 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-200/10 bg-slate-900/80 p-8 lg:p-12">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Təklif alın</p>
        <h1 className="mt-3 text-4xl font-semibold">Layihəniz üçün qiymət sorğusu</h1>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-5 md:grid-cols-2" noValidate>
          <label className="text-sm text-slate-300">
            <span className="mb-2 block">Ad Soyad</span>
            <input value={form.fullName} onChange={(event) => handleChange("fullName", event.target.value)} className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" placeholder="Ad soyad" required />
          </label>
          <label className="text-sm text-slate-300">
            <span className="mb-2 block">Telefon</span>
            <input value={form.phone} onChange={(event) => handleChange("phone", event.target.value)} className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" placeholder="+994 xx xxx xx xx" required />
          </label>
          <label className="text-sm text-slate-300 md:col-span-2">
            <span className="mb-2 block">Layihə növü</span>
            <select value={form.projectType} onChange={(event) => handleChange("projectType", event.target.value)} className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400">
              <option>On Grid</option>
              <option>Off Grid</option>
              <option>Suvarma</option>
              <option>Hibrid</option>
            </select>
          </label>
          <label className="text-sm text-slate-300">
            <span className="mb-2 block">Tələb olunan güc kVt</span>
            <input value={form.power} onChange={(event) => handleChange("power", event.target.value)} className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" placeholder="50" />
          </label>
          <label className="text-sm text-slate-300">
            <span className="mb-2 block">Sakin və ya işçi sayı</span>
            <input value={form.count} onChange={(event) => handleChange("count", event.target.value)} className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" placeholder="12" />
          </label>
          <label className="text-sm text-slate-300 md:col-span-2">
            <span className="mb-2 block">Layihənin ünvanı</span>
            <input value={form.address} onChange={(event) => handleChange("address", event.target.value)} className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" placeholder="Bakı, Xətai" />
          </label>
          <label className="text-sm text-slate-300">
            <span className="mb-2 block">Email</span>
            <input type="email" value={form.email} onChange={(event) => handleChange("email", event.target.value)} className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" placeholder="nümunə@email.com" />
          </label>
          <label className="text-sm text-slate-300">
            <span className="mb-2 block">Şəbəkə növü</span>
            <select value={form.gridType} onChange={(event) => handleChange("gridType", event.target.value)} className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400">
              <option>0,4 kV 3 fazlı</option>
              <option>0,22 kV 1 fazlı</option>
            </select>
          </label>
          <label className="text-sm text-slate-300">
            <span className="mb-2 block">PV modulların montaj yeri</span>
            <select value={form.placement} onChange={(event) => handleChange("placement", event.target.value)} className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400">
              <option>Dam</option>
              <option>Torpaq</option>
            </select>
          </label>
          <label className="text-sm text-slate-300">
            <span className="mb-2 block">Montaj sahəsi m²</span>
            <input value={form.area} onChange={(event) => handleChange("area", event.target.value)} className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" placeholder="150" />
          </label>
          <label className="text-sm text-slate-300">
            <span className="mb-2 block">Aylıq enerji sərfiyyatı</span>
            <input value={form.consumption} onChange={(event) => handleChange("consumption", event.target.value)} className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" placeholder="4500 kVt/saat" />
          </label>
          <label className="text-sm text-slate-300 md:col-span-2">
            <span className="mb-2 block">Faktura upload</span>
            <input type="file" value={form.file} onChange={(event) => handleChange("file", event.target.value)} className="w-full rounded-2xl border border-dashed border-slate-700 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" />
          </label>
          <label className="text-sm text-slate-300 md:col-span-2">
            <span className="mb-2 block">Mesaj</span>
            <textarea value={form.message} onChange={(event) => handleChange("message", event.target.value)} className="min-h-32 w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" placeholder="Layihə məlumatları" required />
          </label>
          <div className="md:col-span-2">
            <button type="submit" className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-5 py-3 text-sm font-semibold text-white">Göndər</button>
          </div>
        </form>

        {submitted ? (
          <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
            Sorğunuz uğurla göndərildi. Texnoland komandası sizinlə əlaqə saxlayacaq.
          </div>
        ) : null}
      </div>
    </main>
  );
}
