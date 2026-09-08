"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { Button } from "@/Components/ui/Button";
import { useApp } from "@/Components/providers/AppProvider";
import { navItems } from "@/lib/mockData";

type NavMenuItem = {
  label: string;
  href: string;
  children?: string[];
};

const serviceMenu: NavMenuItem[] = [
  {
    label: "Bərpa olunan enerji sistemlərinin quraşdırılması",
    href: "/services",
    children: [
      "Günəş panellərinin quraşdırılması",
      "Külək turbinlərinin quraşdırılması",
      "Günəş enerjili işıqlandırma dirəkləri",
      "Günəş enerjili suvarma sistemləri",
      "Günəş elektrik stansiyalarına servis",
    ],
  },
  {
    label: "Elektrik şəbəkə və yarımstansiyaların qurulması",
    href: "/services",
    children: [
      "Yüksək gərginlikli şəbəkələr",
      "Alçaq gərginlikli şəbəkələr",
      "Elektrik şəbəkələrinin qurulması",
    ],
  },
  {
    label: "Mühəndis kommunikasiya işləri",
    href: "/services",
    children: [
      "Binalarda mühəndis kommunikasiya işləri",
      "Ağıllı şəbəkə və avtomatlaşdırma",
    ],
  },
  {
    label: "Servis və məsləhət xidmətləri",
    href: "/services",
    children: [
      "1000 V-a qədər ölçü və sınaq",
      "Layihələndirmə və qiymətləndirmə",
      "Mühəndis axtarışları və texniki məsləhət",
    ],
  },
  { label: "İnşaat işləri", href: "/services", children: ["Fərdi mənzil inşaatı", "Yaşayış və qeyri-yaşayış sahələrinin təmiri"] },
  { label: "Enerji auditi", href: "/services" },
  { label: "Elektrik və istilik sayğaclarının quraşdırılması", href: "/services" },
];

const companyMenu: NavMenuItem[] = [
  { label: "Haqqımızda", href: "/about" },
  { label: "Sertifikatlar", href: "/certificates" },
  { label: "Təkliflər", href: "/projects" },
  { label: "Xidmət qaydalarımız", href: "/services" },
  { label: "Zəmanət", href: "/about" },
];

const infoMenu: NavMenuItem[] = [
  { label: "Texnoloji yeniliklər", href: "/#texnoloji-yenilikler" },
  { label: "Günəş kalkulyatoru", href: "/calculator" },
  { label: "FAQ", href: "/faq" },
  { label: "Təklif alın", href: "/quote" },
  { label: "Əlaqə", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const { isAuthenticated, logout } = useApp();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-lg font-semibold text-white">T</div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">Texnoland</p>
            <p className="text-xs text-slate-400">Premium enerji həlləri</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            const menu = item.label === "Xidmətlər" ? serviceMenu : item.label === "Şirkətimiz" ? companyMenu : item.label === "Məlumatlar" ? infoMenu : null;

            if (menu) {
              const isOpen = openMenu === item.label;

              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseOver={() => setOpenMenu(item.label)}
                  onMouseOut={(event) => {
                    const nextTarget = event.relatedTarget as Node | null;
                    if (!event.currentTarget.contains(nextTarget)) {
                      setOpenMenu((current) => (current === item.label ? null : current));
                    }
                  }}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    className={`inline-flex items-center gap-1 text-sm transition ${active ? "text-cyan-400" : "text-slate-300 hover:text-white"}`}
                    onFocus={() => setOpenMenu(item.label)}
                    onBlur={(event) => {
                      const nextTarget = event.relatedTarget as Node | null;
                      if (!event.currentTarget.parentElement?.contains(nextTarget)) {
                        setOpenMenu((current) => (current === item.label ? null : current));
                      }
                    }}
                  >
                    {item.label} <FiChevronDown className="text-xs" />
                  </button>

                  <div
                    className={`absolute left-0 top-full z-50 min-w-[290px] rounded-2xl border border-slate-200/10 bg-slate-900/95 p-2 shadow-2xl transition-all duration-150 ${
                      isOpen ? "visible opacity-100" : "invisible opacity-0"
                    }`}
                    onMouseOver={() => setOpenMenu(item.label)}
                    onMouseOut={(event) => {
                      const nextTarget = event.relatedTarget as Node | null;
                      if (!event.currentTarget.parentElement?.contains(nextTarget)) {
                        setOpenMenu((current) => (current === item.label ? null : current));
                      }
                    }}
                  >
                    {menu.map((subItem) => (
                      <div key={subItem.label} className="group/sub relative">
                        <Link
                          href={subItem.href}
                          className="flex items-center justify-between rounded-xl px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white"
                          onClick={() => setOpenMenu(null)}
                        >
                          <span>{subItem.label}</span>
                          {subItem.children ? <FiChevronDown className="text-[10px]" /> : null}
                        </Link>
                        {subItem.children ? (
                          <div className="absolute left-full top-0 z-50 ml-2 min-w-[220px] rounded-2xl border border-slate-200/10 bg-slate-900/95 p-2 shadow-2xl transition-all duration-150 invisible opacity-0 group-hover/sub:visible group-hover/sub:opacity-100">
                            {subItem.children.map((child) => (
                              <Link key={child} href={subItem.href} className="block rounded-xl px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white" onClick={() => setOpenMenu(null)}>
                                {child}
                              </Link>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link key={item.href} href={item.href} className={`text-sm transition ${active ? "text-cyan-400" : "text-slate-300 hover:text-white"}`}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          {isAuthenticated ? (
            <>
              <Button href="/profile" variant="secondary">Profil</Button>
              <button onClick={logout} className="rounded-full border border-slate-200/10 px-3 py-2 text-sm text-slate-200" type="button">Çıxış</button>
            </>
          ) : (
            <Button href="/login" variant="primary">Daxil ol</Button>
          )}
          <button onClick={() => setMobileOpen(true)} className="rounded-full border border-slate-200/10 bg-white/5 p-2 text-slate-200 lg:hidden" type="button" aria-label="Open menu">
            <FiMenu />
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-slate-200/10 bg-slate-950/95 px-4 py-4 lg:hidden">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-400">Menyu</p>
            <button onClick={() => setMobileOpen(false)} className="rounded-full border border-slate-200/10 p-2 text-slate-200" type="button" aria-label="Close menu">
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
