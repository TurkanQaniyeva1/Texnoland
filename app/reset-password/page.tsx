"use client";

import { Button } from "@/Components/ui/Button";
import { Input } from "@/Components/ui/Input";

export default function ResetPasswordPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-16 text-slate-100 lg:px-8">
      <div className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-slate-950/30 lg:p-12">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Reset Password</p>
        <h1 className="mt-3 text-4xl font-semibold">Yeni şifrə təyin edin</h1>
        <div className="mt-8 grid gap-4">
          <Input label="Yeni şifrə" value="" onChange={() => undefined} placeholder="Yeni şifrə" type="password" />
          <Input label="Şifrə təkrarı" value="" onChange={() => undefined} placeholder="Şifrə təkrarı" type="password" />
          <Button variant="primary">Yadda saxla</Button>
        </div>
      </div>
    </main>
  );
}
