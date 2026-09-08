"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Profile = {
  name: string;
  email: string;
  phone: string;
  bio: string;
  avatar: string;
  plan: string;
  location: string;
};

type AppContextValue = {
  isAuthenticated: boolean;
  login: (name: string, email: string, phone?: string) => void;
  logout: () => void;
  favorites: string[];
  toggleFavorite: (id: string) => void;
  watchlist: string[];
  toggleWatchlist: (id: string) => void;
  history: string[];
  addToHistory: (id: string) => void;
  profile: Profile;
  updateProfile: (profile: Partial<Profile>) => void;
  notificationsEnabled: boolean;
  toggleNotifications: () => void;
  toast: string | null;
  showToast: (message: string) => void;
};

const defaultProfile: Profile = {
  name: "Azər Həsənov",
  email: "azer@example.com",
  phone: "+994 50 123 45 67",
  bio: "Premium məzmun seyr edən və dizaynı sevən istifadəçi.",
  avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  plan: "Premium",
  location: "Bakı, Azərbaycan",
};

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem("auth") === "true";
  });
  const [favorites, setFavorites] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    return JSON.parse(window.localStorage.getItem("favorites") || "[]") as string[];
  });
  const [watchlist, setWatchlist] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    return JSON.parse(window.localStorage.getItem("watchlist") || "[]") as string[];
  });
  const [history, setHistory] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    return JSON.parse(window.localStorage.getItem("history") || "[]") as string[];
  });
  const [profile, setProfile] = useState<Profile>(() => {
    if (typeof window === "undefined") return defaultProfile;
    const storedProfile = JSON.parse(window.localStorage.getItem("profile") || "null") as Profile | null;
    return storedProfile ?? defaultProfile;
  });
  const [notificationsEnabled, setNotificationsEnabled] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    return window.localStorage.getItem("notifications") === "true";
  });
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    window.localStorage.setItem("auth", String(isAuthenticated));
  }, [isAuthenticated]);

  useEffect(() => {
    window.localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    window.localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  useEffect(() => {
    window.localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    window.localStorage.setItem("profile", JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    window.localStorage.setItem("notifications", String(notificationsEnabled));
  }, [notificationsEnabled]);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(null), 2400);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const value = useMemo<AppContextValue>(
    () => ({
      isAuthenticated,
      login: (name, email, phone) => {
        setIsAuthenticated(true);
        setProfile((current) => ({ ...current, name, email, phone: phone ?? current.phone }));
        setToast("Hesabınıza daxil olundu.");
      },
      logout: () => {
        setIsAuthenticated(false);
        setToast("Hesabdan çıxdınız.");
      },
      favorites,
      toggleFavorite: (id) => {
        setFavorites((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
        setToast("Seçilmiş siyahı yeniləndi.");
      },
      watchlist,
      toggleWatchlist: (id) => {
        setWatchlist((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
        setToast("İzləmə siyahısı yeniləndi.");
      },
      history,
      addToHistory: (id) => setHistory((current) => (current.includes(id) ? current : [id, ...current].slice(0, 8))),
      profile,
      updateProfile: (nextProfile) => setProfile((current) => ({ ...current, ...nextProfile })),
      notificationsEnabled,
      toggleNotifications: () => setNotificationsEnabled((current) => !current),
      toast,
      showToast: (message) => setToast(message),
    }),
    [favorites, history, isAuthenticated, notificationsEnabled, profile, toast, watchlist],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used inside AppProvider");
  return context;
}
