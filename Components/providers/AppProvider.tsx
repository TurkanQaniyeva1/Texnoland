"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type ThemeMode = "dark" | "light";

type Profile = {
  name: string;
  email: string;
  bio: string;
  avatar: string;
  plan: string;
  location: string;
};

type AppContextValue = {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
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
  bio: "Premium məzmun seyr edən və dizaynı sevən istifadəçi.",
  avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  plan: "Premium",
  location: "Bakı, Azərbaycan",
};

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>("dark");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [watchlist, setWatchlist] = useState<string[]>([]);
  const [history, setHistory] = useState<string[]>([]);
  const [profile, setProfile] = useState<Profile>(defaultProfile);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme") as ThemeMode | null;
    const storedAuth = window.localStorage.getItem("auth") === "true";
    const storedFavorites = JSON.parse(window.localStorage.getItem("favorites") || "[]") as string[];
    const storedWatchlist = JSON.parse(window.localStorage.getItem("watchlist") || "[]") as string[];
    const storedHistory = JSON.parse(window.localStorage.getItem("history") || "[]") as string[];
    const storedProfile = JSON.parse(window.localStorage.getItem("profile") || "null") as Profile | null;
    const storedNotifications = window.localStorage.getItem("notifications") === "true";

    if (storedTheme) setThemeState(storedTheme);
    if (storedAuth) setIsAuthenticated(true);
    if (storedFavorites.length) setFavorites(storedFavorites);
    if (storedWatchlist.length) setWatchlist(storedWatchlist);
    if (storedHistory.length) setHistory(storedHistory);
    if (storedProfile) setProfile(storedProfile);
    setNotificationsEnabled(storedNotifications);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

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
      theme,
      setTheme: (nextTheme) => setThemeState(nextTheme),
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
    [favorites, history, isAuthenticated, notificationsEnabled, profile, theme, toast, watchlist],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used inside AppProvider");
  return context;
}
