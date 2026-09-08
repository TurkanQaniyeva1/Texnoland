"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { FiEye, FiEyeOff, FiMail, FiPhone, FiUser } from "react-icons/fi";
import { useApp } from "@/Components/providers/AppProvider";

export default function RegisterPage() {
  const router = useRouter();
  const { login } = useApp();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    acceptedTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const passwordStrength = useMemo(() => {
    if (form.password.length === 0) return { label: "", score: 0 };
    if (form.password.length < 6) return { label: "Zaif", score: 1 };
    if (form.password.length < 10) return { label: "Orta", score: 2 };
    return { label: "Güclü", score: 3 };
  }, [form.password]);

  const handleChange = (field: keyof typeof form, value: string | boolean) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const requiredFields = [form.fullName, form.email, form.phone, form.password, form.confirmPassword];
    if (requiredFields.some((value) => !value.trim())) {
      setStatus("error");
      setMessage("Bütün sahələr doldurulmalıdır.");
      return;
    }

    if (!form.email.includes("@")) {
      setStatus("error");
      setMessage("E-poçt ünvanı düzgün deyil.");
      return;
    }

    if (form.password.length < 6) {
      setStatus("error");
      setMessage("Şifrə ən azı 6 simvol olmalıdır.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setStatus("error");
      setMessage("Şifrələr uyğun gəlmir.");
      return;
    }

    if (!form.acceptedTerms) {
      setStatus("error");
      setMessage("Şərtləri qəbul etməlisiniz.");
      return;
    }

    setStatus("success");
    setMessage("Hesab uğurla yaradıldı.");
    login(form.fullName, form.email, form.phone);
    setTimeout(() => router.push("/profile"), 600);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-16 text-slate-100 lg:px-8">
      <div className="w-full max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200/10 bg-slate-900/80 shadow-2xl shadow-slate-950/30">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="hidden bg-gradient-to-br from-emerald-600 via-cyan-600 to-blue-700 p-10 text-white lg:flex lg:flex-col lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-100/90">Texnoland</p>
              <h1 className="mt-6 text-4xl font-semibold leading-tight">Güclü layihələr üçün doğru addım.</h1>
            </div>
            <div className="rounded-[1.5rem] border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-sm text-cyan-50/80">Kəmiyyətli enerji sistemləri</p>
              <p className="mt-2 text-2xl font-semibold">Etibarlı, peşəkar və davamlı</p>
            </div>
          </div>

          <div className="p-8 lg:p-12">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Hesab yarat</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Yeni hesab</h2>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
              <div className="grid gap-5 md:grid-cols-2">
                <label className="block text-sm text-slate-300 md:col-span-2">
                  <span className="mb-2 flex items-center gap-2"><FiUser /> Ad və Soyad</span>
                  <input value={form.fullName} onChange={(event) => handleChange("fullName", event.target.value)} className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400" placeholder="Ad və soyad" />
                </label>

                <label className="block text-sm text-slate-300">
                  <span className="mb-2 flex items-center gap-2"><FiMail /> E-poçt</span>
                  <input value={form.email} onChange={(event) => handleChange("email", event.target.value)} type="email" className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400" placeholder="nümunə@email.com" />
                </label>

                <label className="block text-sm text-slate-300">
                  <span className="mb-2 flex items-center gap-2"><FiPhone /> Telefon</span>
                  <input value={form.phone} onChange={(event) => handleChange("phone", event.target.value)} className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400" placeholder="+994 xx xxx xx xx" />
                </label>

                <label className="block text-sm text-slate-300 relative">
                  <span className="mb-2 block">Şifrə</span>
                  <div className="relative">
                    <input value={form.password} onChange={(event) => handleChange("password", event.target.value)} type={showPassword ? "text" : "password"} className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 pr-12 text-slate-100 outline-none transition focus:border-cyan-400" placeholder="Şifrə" />
                    <button type="button" onClick={() => setShowPassword((current) => !current)} className="absolute inset-y-0 right-3 flex items-center text-slate-400">{showPassword ? <FiEyeOff /> : <FiEye />}</button>
                  </div>
                </label>

                <label className="block text-sm text-slate-300 relative">
                  <span className="mb-2 block">Şifrəni təsdiqlə</span>
                  <div className="relative">
                    <input value={form.confirmPassword} onChange={(event) => handleChange("confirmPassword", event.target.value)} type={showConfirmPassword ? "text" : "password"} className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 pr-12 text-slate-100 outline-none transition focus:border-cyan-400" placeholder="Şifrəni təkrar edin" />
                    <button type="button" onClick={() => setShowConfirmPassword((current) => !current)} className="absolute inset-y-0 right-3 flex items-center text-slate-400">{showConfirmPassword ? <FiEyeOff /> : <FiEye />}</button>
                  </div>
                </label>
              </div>

              {form.password ? (
                <div className="rounded-2xl border border-slate-700 bg-slate-950/40 p-3 text-sm text-slate-300">
                  <div className="mb-2 flex items-center justify-between">
                    <span>Şifrə gücü</span>
                    <span className="text-cyan-400">{passwordStrength.label}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                    <div className="h-full rounded-full bg-gradient-to-r from-amber-400 via-cyan-500 to-emerald-500 transition-all" style={{ width: `${(passwordStrength.score / 3) * 100}%` }} />
                  </div>
                </div>
              ) : null}

              <label className="flex items-start gap-3 rounded-2xl border border-slate-700 bg-slate-950/40 p-3 text-sm text-slate-300">
                <input type="checkbox" checked={form.acceptedTerms} onChange={(event) => handleChange("acceptedTerms", event.target.checked)} className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-900" />
                <span>Şərtləri və gizlilik siyasətini qəbul edirəm.</span>
              </label>

              {status !== "idle" ? (
                <div className={`rounded-2xl border px-4 py-3 text-sm ${status === "success" ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300" : "border-red-500/30 bg-red-500/10 text-red-300"}`}>
                  {message}
                </div>
              ) : null}

              <button type="submit" className="w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95">
                Hesab yarat
              </button>
            </form>

            <div className="mt-6 text-sm text-slate-400">
              Artıq hesabınız var? <Link href="/login" className="font-medium text-cyan-400 hover:text-cyan-300">Daxil ol</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
