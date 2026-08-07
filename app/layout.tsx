import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/Components/providers/AppProvider";
import { SiteHeader } from "@/Components/Layout/SiteHeader";
import { SiteFooter } from "@/Components/Layout/SiteFooter";

export const metadata: Metadata = {
  title: "Texnoland",
  description: "Premium frontend media experience built with Next.js and mock data",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="az" suppressHydrationWarning>
      <body className="min-h-full bg-slate-950 text-slate-100">
        <AppProvider>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex-1">{children}</div>
            <SiteFooter />
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
