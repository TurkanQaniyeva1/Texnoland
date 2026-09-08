"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/Components/ui/Button";
import { Input } from "@/Components/ui/Input";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  }
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-16 text-slate-100 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Contact</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Bizimlə əlaqə</h1>
          <p className="mt-4 text-base leading-8 text-slate-400">İstənilən sual, təklif və əməkdaşlıq üçün formu doldurun.</p>
          <div className="mt-10 space-y-5 border-l border-emerald-400/40 pl-5 text-sm text-slate-300"><p><span className="block text-slate-500">Email</span><a href="mailto:info@texnoland.az" className="text-emerald-300 hover:text-emerald-200">info@texnoland.az</a></p><p><span className="block text-slate-500">Telefon</span><a href="tel:+994125117895" className="block hover:text-emerald-300">+994 12 511 78 95</a><a href="tel:+994512506565" className="block hover:text-emerald-300">+994 51 250 65 65</a></p><p><span className="block text-slate-500">Ünvan</span>Bakı şəhəri, Xətai rayonu, Sarayevo 12k</p><p><span className="block text-slate-500">İş saatları</span>Bazar ertəsi - Cümə 09:00 - 18:00<br />Şənbə 10:00 - 14:00<br />Bazar: bağlıdır</p><a href="https://www.google.com/maps/search/?api=1&query=Sarayevo+12k+Baku" target="_blank" rel="noreferrer" className="inline-block rounded-full border border-emerald-400/40 px-4 py-2 text-emerald-300 hover:bg-emerald-400/10">Xəritədə aç →</a></div>
        </div>
        <form onSubmit={submit} className="space-y-4 rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-6">
          <Input label="Adınız" value={form.name} onChange={(name) => setForm((current) => ({ ...current, name }))} placeholder="Adınızı yazın" />
          <Input label="E-poçt" value={form.email} onChange={(email) => setForm((current) => ({ ...current, email }))} placeholder="nümunə@email.com" type="email" />
          <label className="flex flex-col gap-2 text-sm text-slate-300">
            <span>Mesaj</span>
            <textarea required value={form.message} onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))} className="min-h-32 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" placeholder="Mesajınızı buraya yazın" />
          </label>
          {sent ? <p className="text-sm text-emerald-400" role="status">Mesajınız qəbul edildi. Tezliklə sizinlə əlaqə saxlayacağıq.</p> : null}
          <Button variant="primary">Göndər</Button>
        </form>
      </div>
    </main>
  );
}
