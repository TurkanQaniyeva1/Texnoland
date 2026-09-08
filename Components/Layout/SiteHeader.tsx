"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiChevronDown, FiChevronRight, FiMenu, FiX } from "react-icons/fi";
import { Button } from "@/Components/ui/Button";
import { useApp } from "@/Components/providers/AppProvider";
import { navItems } from "@/lib/mockData";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileItems, setOpenMobileItems] = useState<string[]>([]);
  const { isAuthenticated, logout } = useApp();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-lg font-semibold text-white">T</div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">Texnoland</p>
            <p className="text-xs text-slate-400">Texnoloji Həllər!</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return item.children ? (
              <div key={item.href} className="group relative">
                <Link href={item.href} className={`inline-flex items-center gap-1 text-sm transition ${active ? "text-cyan-400" : "text-slate-300 hover:text-white"}`}>
                  {item.label}<FiChevronDown className="text-xs" />
                </Link>
                <div className="invisible absolute left-0 top-full z-50 mt-4 w-80 translate-y-2 border border-white/10 bg-slate-950/95 p-2 opacity-0 shadow-2xl backdrop-blur-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <div key={child.href} className="group/item relative">
                      <Link href={child.href} className="flex items-center justify-between px-3 py-2.5 text-sm text-slate-300 transition hover:bg-white/10 hover:text-cyan-300">
                        {child.label}{child.children ? <FiChevronRight /> : null}
                      </Link>
                      {child.children ? <div className="invisible absolute left-full top-0 w-72 border border-white/10 bg-slate-950/95 p-2 opacity-0 shadow-2xl transition-all group-hover/item:visible group-hover/item:opacity-100">{child.children.map((nested) => <Link key={nested.href} href={nested.href} className="block px-3 py-2.5 text-sm text-slate-300 hover:bg-white/10 hover:text-cyan-300">{nested.label}</Link>)}</div> : null}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href} className={`text-sm transition ${active ? "text-cyan-400" : "text-slate-300 hover:text-white"}`}>{item.label}</Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          {isAuthenticated ? (
            <Button href="/profile" variant="secondary">Profil</Button>
          ) : (
            <Button href="/login" variant="primary" className="hidden sm:inline-flex">Daxil ol</Button>
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
          <div className="mt-4 flex max-h-[70vh] flex-col gap-2 overflow-y-auto">
            {navItems.map((item) => {
              const expanded = openMobileItems.includes(item.href);
              return <div key={item.href}>
                <div className="flex items-center justify-between gap-2">
                  <Link href={item.href} onClick={() => setMobileOpen(false)} className={`py-2 text-sm ${pathname === item.href ? "text-cyan-400" : "text-slate-300"}`}>{item.label}</Link>
                  {item.children ? <button type="button" aria-label={`${item.label} alt menyusu`} onClick={() => setOpenMobileItems((current) => expanded ? current.filter((href) => href !== item.href) : [...current, item.href])} className="p-2 text-slate-300"><FiChevronDown className={expanded ? "rotate-180 transition" : "transition"} /></button> : null}
                </div>
                {expanded ? <div className="ml-3 border-l border-white/10 pl-3">{item.children?.map((child) => <Link key={child.href} href={child.href} onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-slate-400 hover:text-cyan-300">{child.label}</Link>)}</div> : null}
              </div>;
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}
