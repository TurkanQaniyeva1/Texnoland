import Link from "next/link";
import { footerLinks } from "@/lib/mockData";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/90">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Texnoland</p>
          <p className="mt-4 max-w-sm text-sm text-slate-400">Premium frontend təcrübəsi, modern dizayn və interaktiv məzmunla hazırlanmış dizayn sistemi.</p>
        </div>
        {footerLinks.map((section) => (
          <div key={section.title}>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-200">{section.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              {section.items.map((item) => (
                <li key={item.label}><Link href={item.href} className="transition hover:text-cyan-400">{item.label}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
