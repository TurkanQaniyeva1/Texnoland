"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/Components/ui/Button";
import { Input } from "@/Components/ui/Input";
import { useApp } from "@/Components/providers/AppProvider";

export default function RegisterPage() {
  const { login } = useApp();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-16 text-slate-100 lg:px-8">
      <div className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-slate-950/30 lg:p-12">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Register</p>
        <h1 className="mt-3 text-4xl font-semibold">Hesab yaradın</h1>
        <p className="mt-4 text-sm text-slate-400">Bu form yalnız frontend mock işə salır. İstifadəçi məlumatları yerli state-də saxlanılır.</p>
        <div className="mt-8 grid gap-4">
          <Input label="Adınız" value={name} onChange={setName} placeholder="Adınızı yazın" />
          <Input label="E-poçt" value={email} onChange={setEmail} placeholder="nümunə@email.com" type="email" />
          <Button onClick={() => login(name || "Yeni istifadəçi", email || "new@example.com")} variant="primary">Qeydiyyat</Button>
        </div>
        <div className="mt-6 text-sm text-slate-400">
          <Link href="/login" className="text-cyan-400">Artıq hesabınız var?</Link>
        </div>
      </div>
    </main>
  );
}
