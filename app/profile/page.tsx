"use client";

import Image from "next/image";
import { useApp } from "@/Components/providers/AppProvider";
import { useState } from "react";

export default function ProfilePage() {
  const { profile, updateProfile } = useApp();
  const [form, setForm] = useState({
    name: profile.name,
    email: profile.email,
    phone: profile.phone,
    location: profile.location,
    bio: profile.bio,
  });

  const handleSave = () => {
    updateProfile({
      name: form.name,
      email: form.email,
      phone: form.phone,
      location: form.location,
      bio: form.bio,
    });
  };

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-16 text-slate-100 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="rounded-[2rem] border border-slate-200/10 bg-slate-900/80 p-8 lg:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-5">
              <div className="relative h-24 w-24 overflow-hidden rounded-full border border-cyan-400/40">
                <Image src={profile.avatar} alt={profile.name} fill className="object-cover" sizes="96px" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Profile</p>
                <h1 className="mt-2 text-3xl font-semibold text-white">{profile.name}</h1>
                <p className="mt-2 text-sm text-slate-400">{profile.email}</p>
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200/10 bg-slate-950/60 px-5 py-4">
              <p className="text-sm text-slate-400">Plan</p>
              <p className="mt-2 text-xl font-semibold text-white">{profile.plan}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-slate-200/10 bg-slate-900/80 p-8">
            <h2 className="text-2xl font-semibold text-white">Şəxsi məlumatlar</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <label className="text-sm text-slate-300">
                <span className="mb-2 block">Ad Soyad</span>
                <input value={form.name} onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" />
              </label>
              <label className="text-sm text-slate-300">
                <span className="mb-2 block">E-poçt</span>
                <input value={form.email} onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))} type="email" className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" />
              </label>
              <label className="text-sm text-slate-300">
                <span className="mb-2 block">Telefon</span>
                <input value={form.phone} onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))} className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" />
              </label>
              <label className="text-sm text-slate-300">
                <span className="mb-2 block">Məkan</span>
                <input value={form.location} onChange={(event) => setForm((current) => ({ ...current, location: event.target.value }))} className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" />
              </label>
              <label className="text-sm text-slate-300 md:col-span-2">
                <span className="mb-2 block">Bio</span>
                <textarea value={form.bio} onChange={(event) => setForm((current) => ({ ...current, bio: event.target.value }))} className="min-h-28 w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" />
              </label>
            </div>
            <button onClick={handleSave} type="button" className="mt-6 rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95">
              Yadda saxla
            </button>
          </div>

          <div className="space-y-8">
            <div className="rounded-[2rem] border border-slate-200/10 bg-slate-900/80 p-8">
              <h3 className="text-xl font-semibold text-white">Hesab məlumatı</h3>
              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                <li className="flex items-center justify-between border-b border-slate-800 pb-2"><span>Status</span><span className="text-emerald-400">Aktiv</span></li>
                <li className="flex items-center justify-between border-b border-slate-800 pb-2"><span>Hesab növü</span><span>{profile.plan}</span></li>
                <li className="flex items-center justify-between border-b border-slate-800 pb-2"><span>Telefon</span><span>{profile.phone}</span></li>
                <li className="flex items-center justify-between"><span>Yerləşmə</span><span>{profile.location}</span></li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-slate-200/10 bg-slate-900/80 p-8">
              <h3 className="text-xl font-semibold text-white">Müraciətlər</h3>
              <div className="mt-5 space-y-3">
                <div className="rounded-2xl border border-slate-700 bg-slate-950/40 p-4">
                  <p className="text-sm text-slate-400">05.09.2026</p>
                  <p className="mt-2 font-medium text-white">Bakı solar park təklifi</p>
                  <p className="mt-1 text-sm text-slate-300">Status: Təhlil mərhələsində</p>
                </div>
                <div className="rounded-2xl border border-slate-700 bg-slate-950/40 p-4">
                  <p className="text-sm text-slate-400">23.08.2026</p>
                  <p className="mt-2 font-medium text-white">Şəbəkə və enerji audit</p>
                  <p className="mt-1 text-sm text-slate-300">Status: Tamamlandı</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
