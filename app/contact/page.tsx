"use client";

import { Button } from "@/Components/ui/Button";
import { Input } from "@/Components/ui/Input";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-16 text-slate-100 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Contact</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Bizimlə əlaqə</h1>
          <p className="mt-4 text-base leading-8 text-slate-400">İstənilən sual, təklif və əməkdaşlıq üçün formu doldurun.</p>
        </div>
        <div className="space-y-4 rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-6">
          <Input label="Adınız" value="" onChange={() => undefined} placeholder="Adınızı yazın" />
          <Input label="E-poçt" value="" onChange={() => undefined} placeholder="nümunə@email.com" type="email" />
          <label className="flex flex-col gap-2 text-sm text-slate-300">
            <span>Mesaj</span>
            <textarea className="min-h-32 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" placeholder="Mesajınızı buraya yazın" />
          </label>
          <Button href="/" variant="primary">Göndər</Button>
        </div>
      </div>
    </main>
  );
}
