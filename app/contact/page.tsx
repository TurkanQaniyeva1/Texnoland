"use client";

import { Button } from "@/Components/ui/Button";
import { Input } from "@/Components/ui/Input";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-16 text-slate-100 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
        <div className="space-y-6">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Contact</p>
            <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Bizimlə əlaqə</h1>
          </div>

          <div className="space-y-4 text-sm text-slate-300">
            <p><span className="font-semibold text-white">Email:</span> info@texnoland.az</p>
            <p><span className="font-semibold text-white">Telefon:</span> +994 12 511 78 95</p>
            <p><span className="font-semibold text-white">Mobil:</span> +994 51 250 65 65</p>
            <p><span className="font-semibold text-white">Ünvan:</span> Bakı şəhəri, Xətai rayonu, Sarayevo 12k</p>
            <p><span className="font-semibold text-white">İş saatları:</span> Bazar ertəsi–Cümə: 09:00–18:00, Şənbə: 10:00–14:00, Bazar: Bağlı</p>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/60">
            <iframe
              title="Texnoland location"
              src="https://www.google.com/maps?q=Sarayevo%2012k%20Baku%20Azerbaijan&output=embed"
              className="h-64 w-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
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
