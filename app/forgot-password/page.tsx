"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft, FiCheckCircle, FiMail } from "react-icons/fi";
import { useApp } from "@/Components/providers/AppProvider";

export default function ForgotPasswordPage() {
  const { showToast } = useApp();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = () => {
    if (!email) {
      setError("E-poçt tələb olunur");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Düzgün e-poçt daxil edin");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateEmail()) return;

    setLoading(true);
    setError("");

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1200));

    setSubmitted(true);
    showToast("Şifrə yeniləmə təlimatları göndərildi!");
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto w-full max-w-md px-4"
      >
        <div className="space-y-8 rounded-2xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl lg:p-12">
          {!submitted ? (
            <>
              <div>
                <h1 className="text-3xl font-semibold">Şifrəni bərpa edin</h1>
                <p className="mt-2 text-slate-400">E-poçtunuzu daxil edin, biz sizə şifrəni yeniləmə təlimatlarını göndərəcəyik.</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">E-poçt</label>
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                      }}
                      placeholder="siz@nümunə.com"
                      className={`w-full rounded-xl border px-4 py-3 bg-slate-900/50 text-white placeholder-slate-500 outline-none transition ${error ? "border-red-500/50" : "border-white/10 focus:border-emerald-400"}`}
                    />
                    <FiMail className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  </div>
                  {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
                </div>

                <p className="text-xs text-slate-400">
                  Əgər bu e-poçt sistemdə qeydiyyatlıdırsa, şifrə yeniləmə təlimatları göndəriləcəkdir. Spam qovluğunuzu da yoxlayın.
                </p>
              </div>

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Göndərilir..." : "Reset link göndər"}
              </button>

              <Link
                href="/login"
                className="flex items-center justify-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition"
              >
                <FiArrowLeft size={16} />
                Daxil olma səhifəsinə qayıt
              </Link>
            </>
          ) : (
            <>
              <div className="flex justify-center">
                <div className="rounded-full bg-emerald-500/20 p-4">
                  <FiCheckCircle className="h-12 w-12 text-emerald-400" />
                </div>
              </div>

              <div className="space-y-4 text-center">
                <h2 className="text-2xl font-semibold">Yoxlayın!</h2>
                <p className="text-slate-400">
                  Şifrəni yeniləmə təlimatlarının əlaqəsi sizin e-poçt (<span className="font-semibold text-white">{email}</span>) ünvanına göndərilib.
                </p>

                <div className="rounded-xl bg-emerald-500/10 p-4 border border-emerald-500/20 text-sm text-emerald-200">
                  <p className="font-semibold mb-2">Təlimatları almadınız?</p>
                  <ul className="space-y-1 text-left text-xs text-emerald-200/70">
                    <li>• E-poçtunuzun spam qovluğunu yoxlayın</li>
                    <li>• E-poçt ünvanının düzgün olduğunu təsdiqləyin</li>
                    <li>• Bir neçə dəqiqə sonra yenidən cəhd edin</li>
                  </ul>
                </div>

                <p className="text-sm text-slate-400">
                  Bunun əvəzində{" "}
                  <Link href="/login" className="font-semibold text-emerald-400 hover:text-emerald-300">
                    daxil olmağa
                  </Link>{" "}
                  qayıtmaq istəyirsinizsə?
                </p>
              </div>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setEmail("");
                }}
                className="w-full rounded-xl border border-white/10 px-6 py-3 font-semibold text-slate-300 transition hover:bg-white/5"
              >
                Başqaən e-poçt daxil edin
              </button>
            </>
          )}
        </div>
      </motion.div>
    </main>
  );
}
