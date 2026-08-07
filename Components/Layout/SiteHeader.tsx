"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { Button } from "@/Components/ui/Button";
import { useApp } from "@/Components/providers/AppProvider";
import { navItems } from "@/lib/mockData";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme, isAuthenticated, logout } = useApp();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-lg font-semibold text-white">T</div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">Texnoland</p>
            <p className="text-xs text-slate-400">Premium Frontend Studio</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className={`text-sm transition ${active ? "text-cyan-400" : "text-slate-300 hover:text-white"}`}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="rounded-full border border-white/10 bg-white/10 p-2 text-slate-200" type="button" aria-label="Toggle theme">
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          {isAuthenticated ? (
            <Button href="/profile" variant="secondary">Profil</Button>
          ) : (
            <Button href="/login" variant="primary">Daxil ol</Button>
          )}
          {isAuthenticated ? <button onClick={logout} className="rounded-full border border-white/10 px-3 py-2 text-sm text-slate-200" type="button">Çıxış</button> : null}
          <button onClick={() => setMobileOpen(true)} className="rounded-full border border-white/10 bg-white/10 p-2 text-slate-200 lg:hidden" type="button" aria-label="Open menu">
            <FiMenu />
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 lg:hidden">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-400">Menyu</p>
            <button onClick={() => setMobileOpen(false)} className="rounded-full border border-white/10 p-2 text-slate-200" type="button" aria-label="Close menu">
              <FiX />
            </button>
          </div>
          <div className="mt-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className={`text-sm ${pathname === item.href ? "text-cyan-400" : "text-slate-300"}`}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
