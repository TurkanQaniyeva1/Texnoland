"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMail } from "react-icons/fi";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!email.trim() || !email.includes("@")) {
      setStatus("error");
      setMessage("Düzgün e-poçt daxil edin.");
      return;
    }

    setStatus("success");
    setMessage("Şifrə reset linki e-poçtunuza göndərildi.");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-16 text-slate-100 lg:px-8">
      <div className="w-full max-w-lg rounded-[2rem] border border-slate-200/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/30 lg:p-12">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Reset</p>
        <h1 className="mt-3 text-3xl font-semibold">Şifrəni bərpa edin</h1>
        <p className="mt-3 text-sm text-slate-400">Hesabınıza aid e-poçt ünvanını daxil edin. Biz sizə reset linki göndərəcəyik.</p>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
          <label className="block text-sm text-slate-300">
            <span className="mb-2 flex items-center gap-2"><FiMail /> E-poçt</span>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="nümunə@email.com"
              className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
            />
          </label>

          {status !== "idle" ? (
            <div className={`rounded-2xl border px-4 py-3 text-sm ${status === "success" ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300" : "border-red-500/30 bg-red-500/10 text-red-300"}`}>
              {message}
            </div>
          ) : null}

          <button type="submit" className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95">
            Reset linki göndər
          </button>
        </form>

        <div className="mt-6 text-sm text-slate-400">
          <Link href="/login" className="text-cyan-400 hover:text-cyan-300">Geri qayıt</Link>
        </div>
      </div>
    </main>
  );
}
