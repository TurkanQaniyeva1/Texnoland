import Link from "next/link";
import { projects } from "@/lib/mockData";

export default function ProjectsPage() {
  return (
    <main className="page-shell min-h-screen bg-slate-950 px-4 py-16 text-slate-100 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Layihələr</p>
          <h1 className="mt-4 text-4xl font-semibold">Davamlı, etibarlı və nəticəverən layihələr</h1>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article key={project.title} className="overflow-hidden rounded-[1.75rem] border border-slate-200/10 bg-slate-900/80">
              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-cyan-500/20 via-emerald-500/20 to-slate-800 text-3xl font-semibold text-cyan-300">
                {index + 1}
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.25em] text-emerald-400">{project.year}</p>
                <h2 className="mt-3 text-xl font-semibold text-white">{project.title}</h2>
                <p className="mt-2 text-sm text-slate-400">{project.location}</p>
                <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
                <Link href={`/projects/${project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="mt-5 inline-flex text-sm font-medium text-cyan-400">Layihəni aç</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
