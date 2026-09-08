"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiEye, FiEyeOff, FiArrowRight } from "react-icons/fi";
import { useApp } from "@/Components/providers/AppProvider";

export default function LoginPage() {
  const { login, showToast } = useApp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validateForm = () => {
    const newErrors: typeof errors = {};
    
    if (!email) {
      newErrors.email = "E-poçt tələb olunur";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Düzgün e-poçt daxil edin";
    }
    
    if (!password) {
      newErrors.password = "Şifrə tələb olunur";
    } else if (password.length < 6) {
      newErrors.password = "Şifrə ən az 6 simvol olmalıdır";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    login(email.split("@")[0], email);
    showToast("Hesabınıza uğurla daxil oldunuz.");
    
    setLoading(false);
    setEmail("");
    setPassword("");
    window.location.href = "/profile";
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        {/* Left side - Branding */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden flex-col justify-center bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 p-12 lg:flex"
        >
          <div className="max-w-md space-y-8">
            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-2xl font-semibold text-white">T</div>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">Texnoland</p>
              <p className="text-xs text-slate-400">Texnoloji Həllər!</p>
            </div>
            
            <div>
              <h2 className="text-3xl font-semibold text-white">Hesabınıza daxil olun</h2>
              <p className="mt-3 text-slate-400">Texnoland platformasına giriş edin və enerji həllərinin dünyasını kəşf edin.</p>
            </div>

            <div className="space-y-4 pt-8 border-t border-white/10">
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-emerald-500/20 p-2 text-emerald-400">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white">Təhlükəsiz giriş</p>
                  <p className="text-sm text-slate-400">Sizin məlumatlarınız şifrələnmiş şəkildə saxlanılır.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-emerald-500/20 p-2 text-emerald-400">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white">Anında giriş</p>
                  <p className="text-sm text-slate-400">Saniyələr içində işinizə başlayın.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right side - Login form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center p-4 lg:p-12"
        >
          <div className="w-full max-w-md space-y-8">
            <div>
              <h1 className="text-3xl font-semibold">Daxil ol</h1>
              <p className="mt-2 text-slate-400">Hesab yaratmadınız? <Link href="/register" className="font-semibold text-emerald-400 hover:text-emerald-300">Qeydiyyat keçin</Link></p>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">E-poçt</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  placeholder="siz@nümunə.com"
                  className={`w-full rounded-xl border px-4 py-3 bg-slate-900/50 text-white placeholder-slate-500 outline-none transition ${ errors.email ? "border-red-500/50" : "border-white/10 focus:border-emerald-400"}`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Şifrə</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errors.password) setErrors({ ...errors, password: undefined });
                    }}
                    placeholder="••••••••"
                    className={`w-full rounded-xl border px-4 py-3 bg-slate-900/50 text-white placeholder-slate-500 outline-none transition ${errors.password ? "border-red-500/50" : "border-white/10 focus:border-emerald-400"}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300"
                  >
                    {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                  </button>
                </div>
                {errors.password && <p className="mt-1 text-sm text-red-400">{errors.password}</p>}
              </div>

              <Link href="/forgot-password" className="inline-block text-sm font-semibold text-emerald-400 hover:text-emerald-300">
                Şifrəni unutdum
              </Link>
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? "Yüklənir..." : "Daxil ol"}
              {!loading && <FiArrowRight />}
            </button>

            <div className="pt-6 border-t border-white/10 text-center">
              <p className="text-sm text-slate-400">
                Hesab yoxdur?{" "}
                <Link href="/register" className="font-semibold text-emerald-400 hover:text-emerald-300">
                  Yeni hesab yaradın
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
