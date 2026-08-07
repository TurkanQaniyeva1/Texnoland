"use client";

import { Button } from "@/Components/ui/Button";
import { Input } from "@/Components/ui/Input";

export default function ForgotPasswordPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-16 text-slate-100 lg:px-8">
      <div className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-slate-950/30 lg:p-12">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Forgot Password</p>
        <h1 className="mt-3 text-4xl font-semibold">Şifrəni bərpa edin</h1>
        <p className="mt-4 text-sm text-slate-400">Bu sadə frontend sahəsi gələcəkdə real email xidmətini əvəz edə bilər.</p>
        <div className="mt-8">
          <Input label="E-poçt" value="" onChange={() => undefined} placeholder="nümunə@email.com" type="email" />
          <div className="mt-4"><Button variant="primary">Göndər</Button></div>
        </div>
      </div>
    </main>
  );
}
