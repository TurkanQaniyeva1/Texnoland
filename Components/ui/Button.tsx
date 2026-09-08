import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function Button({ children, href, onClick, variant = "primary", className = "" }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition";
  const variants = {
    primary: "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-500",
    secondary: "border border-white/10 bg-slate-800 text-slate-100 hover:bg-slate-700",
    ghost: "bg-transparent text-slate-200 hover:bg-white/10",
  };

  const content = <span className={`${base} ${variants[variant]} ${className}`}>{children}</span>;

  if (href) return <Link href={href} className={className}>{content}</Link>;

  return <button onClick={onClick} className={`${base} ${variants[variant]} ${className}`} type="button">{children}</button>;
}
