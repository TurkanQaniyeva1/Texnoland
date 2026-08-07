"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/Components/ui/Button";
import { Input } from "@/Components/ui/Input";
import { useApp } from "@/Components/providers/AppProvider";

export default function LoginPage() {
  const { login } = useApp();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-16 text-slate-100 lg:px-8">
      <div className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-slate-950/30 lg:p-12">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Login</p>
        <h1 className="mt-3 text-4xl font-semibold">Daxil ol</h1>
        <p className="mt-4 text-sm text-slate-400">Frontend mock giriş sistemi. Daxil olduqdan sonra profilə keçid mümkündür.</p>
        <div className="mt-8 grid gap-4">
          <Input label="Adınız" value={name} onChange={setName} placeholder="Adınızı yazın" />
          <Input label="E-poçt" value={email} onChange={setEmail} placeholder="nümunə@email.com" type="email" />
          <Button onClick={() => login(name || "İstifadəçi", email || "guest@example.com")} variant="primary">Daxil ol</Button>
        </div>
        <div className="mt-6 flex items-center justify-between text-sm text-slate-400">
          <Link href="/register" className="text-cyan-400">Hesab yarat</Link>
          <Link href="/forgot-password" className="text-cyan-400">Şifrəni unutdum</Link>
        </div>
      </div>
    </main>
  );
}
