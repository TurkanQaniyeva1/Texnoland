export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-16 text-slate-100 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 lg:p-12">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Privacy Policy</p>
        <h1 className="mt-3 text-4xl font-semibold">Məxfilik siyasəti</h1>
        <p className="mt-6 text-sm leading-8 text-slate-400">Bu layihə backend olmadan işlədiyi üçün məlumatlar yerli state və localStorage ilə idarə olunur.</p>
      </div>
    </main>
  );
}
