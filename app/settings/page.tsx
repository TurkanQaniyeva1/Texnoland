"use client";

import { useApp } from "@/Components/providers/AppProvider";
import { Button } from "@/Components/ui/Button";

export default function SettingsPage() {
  const { notificationsEnabled, toggleNotifications, theme, setTheme } = useApp();

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-16 text-slate-100 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 lg:p-12">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Settings</p>
        <h1 className="mt-3 text-4xl font-semibold">Ayarlar</h1>
        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-between rounded-[1.25rem] border border-white/10 bg-slate-950/60 p-4">
            <div>
              <p className="font-medium text-white">Bildirişlər</p>
              <p className="text-sm text-slate-400">Bildirişləri aktiv/deaktiv edin.</p>
            </div>
            <Button onClick={toggleNotifications} variant="secondary">{notificationsEnabled ? "Aktiv" : "Deaktiv"}</Button>
          </div>
          <div className="flex items-center justify-between rounded-[1.25rem] border border-white/10 bg-slate-950/60 p-4">
            <div>
              <p className="font-medium text-white">Tema</p>
              <p className="text-sm text-slate-400">Dark/light mode dəyişdirin.</p>
            </div>
            <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} variant="secondary">{theme === "dark" ? "Dark" : "Light"}</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
