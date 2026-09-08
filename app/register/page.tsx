"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiEye, FiEyeOff, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { useApp } from "@/Components/providers/AppProvider";

export default function RegisterPage() {
  const { login, showToast } = useApp();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const getPasswordStrength = (pass: string) => {
    if (!pass) return 0;
    let strength = 0;
    if (pass.length >= 8) strength++;
    if (/[a-z]/.test(pass) && /[A-Z]/.test(pass)) strength++;
    if (/[0-9]/.test(pass)) strength++;
    if (/[^a-zA-Z0-9]/.test(pass)) strength++;
    return strength;
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Ad və soyad tələb olunur";
    }

    if (!formData.email) {
      newErrors.email = "E-poçt tələb olunur";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Düzgün e-poçt daxil edin";
    }

    if (!formData.phone) {
      newErrors.phone = "Telefon nömrəsi tələb olunur";
    }

    if (!formData.password) {
      newErrors.password = "Şifrə tələb olunur";
    } else if (formData.password.length < 6) {
      newErrors.password = "Şifrə ən az 6 simvol olmalıdır";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Şifrələr eyni deyil";
    }

    if (!agreeTerms) {
      newErrors.terms = "Şərtlərə razı olmaq tələb olunur";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));

    login(formData.fullName, formData.email);
    showToast("Hesabınız uğurla yaradıldı!");

    setLoading(false);
    window.location.href = "/profile";
  };

  const passwordStrength = getPasswordStrength(formData.password);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto w-full max-w-2xl px-4"
      >
        <div className="space-y-8 rounded-2xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl lg:p-12">
          <div>
            <h1 className="text-3xl font-semibold">Yeni hesab yaradın</h1>
            <p className="mt-2 text-slate-400">
              Artıq hesabınız var?{" "}
              <Link href="/login" className="font-semibold text-emerald-400 hover:text-emerald-300">
                Daxil ol
              </Link>
            </p>
          </div>

          <div className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Ad və Soyad</label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => {
                  setFormData({ ...formData, fullName: e.target.value });
                  if (errors.fullName) setErrors({ ...errors, fullName: "" });
                }}
                placeholder="Azər Həsənov"
                className={`w-full rounded-xl border px-4 py-3 bg-slate-900/50 text-white placeholder-slate-500 outline-none transition ${errors.fullName ? "border-red-500/50" : "border-white/10 focus:border-emerald-400"}`}
              />
              {errors.fullName && <p className="mt-1 text-sm text-red-400">{errors.fullName}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">E-poçt</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: "" });
                }}
                placeholder="siz@nümunə.com"
                className={`w-full rounded-xl border px-4 py-3 bg-slate-900/50 text-white placeholder-slate-500 outline-none transition ${errors.email ? "border-red-500/50" : "border-white/10 focus:border-emerald-400"}`}
              />
              {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Telefon</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value });
                  if (errors.phone) setErrors({ ...errors, phone: "" });
                }}
                placeholder="(050) 123-45-67"
                className={`w-full rounded-xl border px-4 py-3 bg-slate-900/50 text-white placeholder-slate-500 outline-none transition ${errors.phone ? "border-red-500/50" : "border-white/10 focus:border-emerald-400"}`}
              />
              {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Şifrə</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => {
                    setFormData({ ...formData, password: e.target.value });
                    if (errors.password) setErrors({ ...errors, password: "" });
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

              {/* Password strength indicator */}
              {formData.password && (
                <div className="mt-3 space-y-2">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className={`h-1.5 flex-1 rounded-full transition ${i <= passwordStrength ? "bg-emerald-500" : "bg-slate-700"}`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-slate-400">
                    {passwordStrength === 1 && "Zəif şifrə"}
                    {passwordStrength === 2 && "Orta şifrə"}
                    {passwordStrength === 3 && "Güclü şifrə"}
                    {passwordStrength === 4 && "Çox güclü şifrə"}
                  </p>
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Şifrəni təsdiqlə</label>
              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={(e) => {
                    setFormData({ ...formData, confirmPassword: e.target.value });
                    if (errors.confirmPassword) setErrors({ ...errors, confirmPassword: "" });
                  }}
                  placeholder="••••••••"
                  className={`w-full rounded-xl border px-4 py-3 bg-slate-900/50 text-white placeholder-slate-500 outline-none transition ${errors.confirmPassword ? "border-red-500/50" : "border-white/10 focus:border-emerald-400"}`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300"
                >
                  {showConfirm ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
              {errors.confirmPassword && <p className="mt-1 text-sm text-red-400">{errors.confirmPassword}</p>}
            </div>

            {/* Terms checkbox */}
            <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-slate-900/30 p-4">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => {
                  setAgreeTerms(e.target.checked);
                  if (errors.terms) setErrors({ ...errors, terms: "" });
                }}
                className="mt-1 h-4 w-4 cursor-pointer rounded border-white/10 bg-slate-900 text-emerald-500 accent-emerald-500"
              />
              <div className="flex-1">
                <label className="cursor-pointer text-sm text-slate-300">
                  <Link href="/terms" className="font-semibold text-emerald-400 hover:text-emerald-300">
                    Xidmət şərtləri
                  </Link>{" "}
                  və{" "}
                  <Link href="/privacy" className="font-semibold text-emerald-400 hover:text-emerald-300">
                    Gizlilik siyasəti
                  </Link>{" "}
                  ilə razıyam
                </label>
              </div>
            </div>
            {errors.terms && <p className="text-sm text-red-400">{errors.terms}</p>}
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading || !agreeTerms}
            className="w-full rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? "Yaradılır..." : "Hesab yarat"}
            {!loading && <FiArrowRight />}
          </button>

          <div className="rounded-xl bg-emerald-500/10 p-4 border border-emerald-500/20">
            <div className="flex gap-3">
              <FiCheckCircle className="text-emerald-400 flex-shrink-0 mt-1" />
              <div className="text-sm">
                <p className="font-semibold text-emerald-300">Dəyəri bilin</p>
                <p className="mt-1 text-emerald-200/70">Bu frontend demo formasıdır. Həqiqi server tərəfindən istifadə olunmur.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
