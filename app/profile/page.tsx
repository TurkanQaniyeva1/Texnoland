"use client";

import { useApp } from "@/Components/providers/AppProvider";
import { Button } from "@/Components/ui/Button";
import { Input } from "@/Components/ui/Input";
import { useState } from "react";

export default function ProfilePage() {
  const { profile, updateProfile } = useApp();
  const [name, setName] = useState(profile.name);
  const [bio, setBio] = useState(profile.bio);

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-16 text-slate-100 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 lg:p-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex items-center gap-4">
            <img src={profile.avatar} alt={profile.name} className="h-20 w-20 rounded-full object-cover" />
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Profile</p>
              <h1 className="mt-2 text-3xl font-semibold">{profile.name}</h1>
              <p className="mt-2 text-sm text-slate-400">{profile.email}</p>
            </div>
          </div>
          <div className="rounded-[1.25rem] border border-white/10 bg-slate-950/60 p-4">
            <p className="text-sm text-slate-400">Plan</p>
            <p className="mt-2 text-xl font-semibold text-white">{profile.plan}</p>
          </div>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <Input label="Adınız" value={name} onChange={setName} placeholder="Adınızı yazın" />
          <Input label="Məkan" value={profile.location} onChange={(value) => updateProfile({ location: value })} placeholder="Məkan" />
          <div className="lg:col-span-2">
            <label className="flex flex-col gap-2 text-sm text-slate-300">
              <span>Bio</span>
              <textarea value={bio} onChange={(event) => setBio(event.target.value)} className="min-h-28 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" />
            </label>
          </div>
          <div className="lg:col-span-2">
            <Button onClick={() => updateProfile({ name, bio })} variant="primary">Yadda saxla</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
