import { people } from "@/lib/mockData";
import { notFound } from "next/navigation";

type PersonPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PersonPage({ params }: PersonPageProps) {
  const { slug } = await params;
  const person = people.find((item) => item.id === slug);

  if (!person) notFound();

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-16 text-slate-100 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 lg:p-12">
        <div className="flex flex-col gap-8 lg:flex-row">
          <img src={person.image} alt={person.name} className="h-72 w-full rounded-[1.5rem] object-cover lg:w-72" />
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Person Details</p>
            <h1 className="mt-3 text-4xl font-semibold">{person.name}</h1>
            <p className="mt-2 text-lg text-cyan-300">{person.role}</p>
            <p className="mt-6 text-base leading-8 text-slate-400">{person.bio}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
