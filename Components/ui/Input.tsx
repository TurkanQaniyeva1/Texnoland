"use client";

type InputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
};

export function Input({ label, value, onChange, type = "text", placeholder }: InputProps) {
  return (
    <label className="flex flex-col gap-2 text-sm text-slate-300">
      <span>{label}</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        type={type}
        placeholder={placeholder}
        className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-slate-100 outline-none ring-0 focus:border-cyan-400"
      />
    </label>
  );
}
