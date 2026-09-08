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
    secondary: "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100",
    ghost: "bg-transparent text-slate-700 hover:bg-slate-100",
  };

  const content = <span className={`${base} ${variants[variant]} ${className}`}>{children}</span>;

  if (href) return <Link href={href}>{content}</Link>;

  return <button onClick={onClick} className={`${base} ${variants[variant]} ${className}`} type="button">{children}</button>;
}
