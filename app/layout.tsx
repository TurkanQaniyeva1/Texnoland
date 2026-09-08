import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/Components/providers/AppProvider";
import { SiteHeader } from "@/Components/Layout/SiteHeader";
import { SiteFooter } from "@/Components/Layout/SiteFooter";
import { PageTransition } from "@/Components/common/PageTransition";

export const metadata: Metadata = {
  title: { default: "Texnoland | Texnoloji Həllər", template: "%s | Texnoland" },
  description: "Texnoland elektroenergetika, bərpa olunan enerji, mühəndislik və inşaat həlləri təqdim edir.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="az" suppressHydrationWarning>
      <body className="min-h-full bg-slate-950 text-slate-100">
        <AppProvider>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex-1">
              <PageTransition>{children}</PageTransition>
            </div>
            <SiteFooter />
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
