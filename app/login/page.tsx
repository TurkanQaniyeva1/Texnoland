"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiEye, FiEyeOff, FiLock, FiMail } from "react-icons/fi";
import { useApp } from "@/Components/providers/AppProvider";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useApp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const trimmedEmail = email.trim();
    if (!trimmedEmail || !trimmedEmail.includes("@") || password.length < 6) {
      setStatus("error");
      setMessage("E-poçt və şifrə düzgün doldurulmalıdır.");
      return;
    }

    setIsLoading(true);
    setStatus("idle");
    setMessage("");

    await new Promise((resolve) => setTimeout(resolve, 900));

    setIsLoading(false);
    setStatus("success");
    setMessage("Giriş uğurla tamamlandı.");
    login(trimmedEmail.split("@")[0] || "İstifadəçi", trimmedEmail);
    router.push("/profile");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-16 text-slate-100 lg:px-8">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200/10 bg-slate-900/80 shadow-2xl shadow-slate-950/30 lg:grid-cols-2">
        <div className="relative hidden overflow-hidden bg-gradient-to-br from-cyan-600 via-emerald-600 to-blue-700 p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.28),transparent_30%)]" />
          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-100/90">Texnoland</p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight">Yenilikçi enerji həlləri ilə güclü gələcək.</h1>
          </div>
          <div className="relative rounded-[1.5rem] border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
            <p className="text-sm text-cyan-50/80">Premium texniki dəstək</p>
            <p className="mt-2 text-2xl font-semibold">24/7 layihə dəstəyi</p>
          </div>
        </div>

        <div className="p-8 lg:p-12">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Daxil ol</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Hesabınıza daxil olun</h2>
          <p className="mt-3 text-sm text-slate-400">Texnoland hesabınıza qoşulun və şəxsi məlumatlarınızı idarə edin.</p>

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

            <label className="block text-sm text-slate-300">
              <span className="mb-2 flex items-center gap-2"><FiLock /> Şifrə</span>
              <div className="relative">
                <input
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 pr-12 text-slate-100 outline-none transition focus:border-cyan-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((current) => !current)}
                  className="absolute inset-y-0 right-3 flex items-center text-slate-400"
                  aria-label={showPassword ? "Şifrəni gizlət" : "Şifrəni göstər"}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </label>

            {status !== "idle" ? (
              <div className={`rounded-2xl border px-4 py-3 text-sm ${status === "success" ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300" : "border-red-500/30 bg-red-500/10 text-red-300"}`}>
                {message}
              </div>
            ) : null}

            <button type="submit" disabled={isLoading} className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70">
              {isLoading ? "Yüklənir..." : "Daxil ol"}
            </button>
          </form>

          <div className="mt-6 flex items-center justify-between text-sm text-slate-400">
            <Link href="/forgot-password" className="text-cyan-400 hover:text-cyan-300">Şifrəni unutdum</Link>
            <Link href="/register" className="text-cyan-400 hover:text-cyan-300">Hesab yarat</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
