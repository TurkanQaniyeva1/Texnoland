"use client";

import { useApp } from "@/Components/providers/AppProvider";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiEdit2, FiSave, FiX } from "react-icons/fi";

export default function ProfilePage() {
  const { profile, updateProfile, logout } = useApp();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: profile.name,
    email: profile.email,
    phone: profile.phone,
    bio: profile.bio,
    location: profile.location,
  });

  const handleSave = () => {
    updateProfile(formData);
    setIsEditing(false);
  };

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold lg:text-4xl">Profil ayarları</h1>
          <p className="mt-2 text-slate-400">Hesab məlumatlarınızı idarə edin</p>
        </div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border border-white/10 bg-slate-900/80 p-8 lg:p-12 mb-8"
        >
          {/* Avatar and Basic Info */}
          <div className="flex flex-col gap-8 mb-8 pb-8 border-b border-white/10 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex items-center gap-6">
              <Image
                src={profile.avatar}
                alt={profile.name}
                width={100}
                height={100}
                className="h-24 w-24 rounded-2xl object-cover border-2 border-emerald-500/30"
              />
              <div>
                <h2 className="text-2xl font-semibold text-white">{formData.name}</h2>
                <p className="mt-1 text-emerald-400">{formData.email}</p>
                <p className="mt-2 text-sm text-slate-400">{formData.phone}</p>
                <p className="mt-2 text-sm text-slate-400">{formData.location}</p>
              </div>
            </div>
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-6 py-4">
              <p className="text-sm font-medium text-emerald-300">Abonə Plani</p>
              <p className="mt-1 text-2xl font-semibold text-white">{profile.plan}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid gap-4 mb-8 sm:grid-cols-3">
            <div className="rounded-xl bg-slate-950/50 p-4 border border-white/5">
              <p className="text-sm text-slate-400">Profil Tamamlama</p>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-800">
                <div className="h-full w-3/4 bg-emerald-500" />
              </div>
              <p className="mt-2 text-sm font-semibold text-slate-300">75%</p>
            </div>
            <div className="rounded-xl bg-slate-950/50 p-4 border border-white/5">
              <p className="text-sm text-slate-400">Aktivlik</p>
              <p className="mt-2 text-2xl font-semibold text-emerald-400">Aktiv</p>
            </div>
            <div className="rounded-xl bg-slate-950/50 p-4 border border-white/5">
              <p className="text-sm text-slate-400">Üzv Olduğu</p>
              <p className="mt-2 text-sm text-slate-300">2026 il</p>
            </div>
          </div>

          {/* Edit Form */}
          {isEditing ? (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <FiEdit2 size={20} />
                Profili redaktə edin
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Ad</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-slate-950/50 px-4 py-2.5 text-white outline-none transition focus:border-emerald-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Məkan</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-slate-950/50 px-4 py-2.5 text-white outline-none transition focus:border-emerald-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Telefon</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-slate-950/50 px-4 py-2.5 text-white outline-none transition focus:border-emerald-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Bio</label>
                <textarea
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  className="w-full min-h-24 rounded-lg border border-white/10 bg-slate-950/50 px-4 py-2.5 text-white outline-none transition focus:border-emerald-400 resize-none"
                  placeholder="Haqqınızda qısaca bilgi yazın..."
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-2.5 font-semibold text-slate-950 transition hover:bg-emerald-500"
                >
                  <FiSave size={18} />
                  Yadda saxla
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="flex items-center gap-2 rounded-lg border border-white/10 px-6 py-2.5 font-semibold text-slate-300 transition hover:bg-white/5"
                >
                  <FiX size={18} />
                  Ləğv et
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-slate-400 mb-2">Bio</p>
                <p className="text-slate-300">{formData.bio || "Bio əlavə olmayıb"}</p>
              </div>
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-2 rounded-lg bg-slate-800 px-6 py-2.5 font-semibold text-slate-300 transition hover:bg-slate-700"
              >
                <FiEdit2 size={18} />
                Redaktə et
              </button>
            </div>
          )}
        </motion.div>

        {/* Account Settings */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="rounded-2xl border border-white/10 bg-slate-900/80 p-8 lg:p-12"
        >
          <h3 className="text-lg font-semibold mb-6">Hesab ayarları</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-slate-950/50 border border-white/5">
              <div>
                <p className="font-medium text-white">E-poçt</p>
                <p className="text-sm text-slate-400">{formData.email}</p>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300">Təsdiqlənmiş</span>
            </div>

            <div className="flex items-center justify-between p-4 rounded-lg bg-slate-950/50 border border-white/5">
              <div>
                <p className="font-medium text-white">Telefon</p>
                <p className="text-sm text-slate-400">{formData.phone}</p>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300">Əlavə olunub</span>
            </div>

            <div className="flex items-center justify-between p-4 rounded-lg bg-slate-950/50 border border-white/5">
              <div>
                <p className="font-medium text-white">Şifrə</p>
                <p className="text-sm text-slate-400">Son dəfə dəyişdirildi 2026</p>
              </div>
              <button className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition">
                Dəyiş
              </button>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6">
              <button
                onClick={logout}
                className="w-full rounded-lg border border-red-500/50 bg-red-500/10 px-6 py-3 font-semibold text-red-400 transition hover:bg-red-500/20"
              >
                Hesabdan çıx
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
