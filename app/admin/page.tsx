import { adminCategories, adminMetrics, adminReviews, adminUsers } from "@/lib/mockData";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-16 text-slate-100 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Admin Dashboard</p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Admin panel</h1>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {adminMetrics.map((metric) => (
            <div key={metric.label} className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6">
              <p className="text-sm text-slate-400">{metric.label}</p>
              <p className="mt-3 text-3xl font-semibold text-white">{metric.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6">
            <h2 className="text-xl font-semibold text-white">İstifadəçilər</h2>
            <div className="mt-4 space-y-3">
              {adminUsers.map((user) => (
                <div key={user.id} className="flex items-center justify-between rounded-[1rem] bg-slate-950/60 p-3 text-sm text-slate-300">
                  <span>{user.name}</span>
                  <span>{user.status}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6">
            <h2 className="text-xl font-semibold text-white">Kateqoriyalar</h2>
            <div className="mt-4 space-y-3">
              {adminCategories.map((category) => (
                <div key={category.id} className="flex items-center justify-between rounded-[1rem] bg-slate-950/60 p-3 text-sm text-slate-300">
                  <span>{category.name}</span>
                  <span>{category.count}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6 lg:col-span-2">
            <h2 className="text-xl font-semibold text-white">Reviews</h2>
            <div className="mt-4 space-y-3">
              {adminReviews.map((review) => (
                <div key={review.id} className="flex items-center justify-between rounded-[1rem] bg-slate-950/60 p-3 text-sm text-slate-300">
                  <span>{review.title}</span>
                  <span>{review.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
