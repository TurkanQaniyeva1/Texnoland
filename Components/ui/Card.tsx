type CardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
};

export function Card({ title, description, icon, action }: CardProps) {
  return (
    <div className="rounded-[1.75rem] border border-slate-200/70 bg-white/80 p-6 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.2)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-25px_rgba(16,185,129,0.24)] dark:border-white/10 dark:bg-slate-900/80">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-2xl text-emerald-600 dark:text-emerald-400">{icon}</div>
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{description}</p>
      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  );
}
