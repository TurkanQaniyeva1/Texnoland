"use client";

import { createContext, startTransition, useContext, useEffect, useMemo, useState } from "react";

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
  login: (name: string, email: string) => void;
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
  phone: "+994 51 250 65 65",
  bio: "Premium məzmun seyr edən və dizaynı sevən istifadəçi.",
  avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  plan: "Premium",
  location: "Bakı, Azərbaycan",
};

const AppContext = createContext<AppContextValue | null>(null);

function readStored<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const value = window.localStorage.getItem(key);
    return value === null ? fallback : JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [watchlist, setWatchlist] = useState<string[]>([]);
  const [history, setHistory] = useState<string[]>([]);
  const [profile, setProfile] = useState<Profile>(defaultProfile);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [hydrated, setHydrated] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    startTransition(() => {
      setIsAuthenticated(readStored("auth", false));
      setFavorites(readStored("favorites", []));
      setWatchlist(readStored("watchlist", []));
      setHistory(readStored("history", []));
      setProfile(readStored("profile", defaultProfile));
      setNotificationsEnabled(readStored("notifications", true));
      setHydrated(true);
    });
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem("auth", String(isAuthenticated));
  }, [hydrated, isAuthenticated]);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [hydrated, watchlist]);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem("history", JSON.stringify(history));
  }, [history, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem("profile", JSON.stringify(profile));
  }, [hydrated, profile]);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem("notifications", String(notificationsEnabled));
  }, [hydrated, notificationsEnabled]);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(null), 2400);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const value = useMemo<AppContextValue>(
    () => ({
      isAuthenticated,
      login: (name, email) => {
        setIsAuthenticated(true);
        setProfile((current) => ({ ...current, name, email }));
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
