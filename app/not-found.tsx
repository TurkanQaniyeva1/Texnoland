import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-16 text-slate-100">
      <div className="max-w-xl rounded-[2rem] border border-white/10 bg-slate-900/70 p-10 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">404</p>
        <h1 className="mt-3 text-4xl font-semibold">Səhifə tapılmadı</h1>
        <p className="mt-4 text-sm leading-8 text-slate-400">Axtardığınız səhifə mövcud deyil. Ana səhifəyə qayıdın.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-medium text-white">Ana səhifəyə dön</Link>
      </div>
    </main>
  );
}
