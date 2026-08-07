import { notifications } from "@/lib/mockData";

export default function NotificationsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-16 text-slate-100 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 lg:p-12">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Notifications</p>
        <h1 className="mt-3 text-4xl font-semibold">Bildirişlər</h1>
        <div className="mt-8 space-y-4">
          {notifications.map((item) => (
            <div key={item.id} className="rounded-[1.25rem] border border-white/10 bg-slate-950/60 p-4">
              <p className="font-medium text-white">{item.title}</p>
              <p className="mt-2 text-sm text-slate-400">{item.message}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
