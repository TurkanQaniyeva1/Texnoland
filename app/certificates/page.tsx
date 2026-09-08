import { certificates } from "@/lib/mockData";
import { FiAward, FiCheckCircle, FiShield } from "react-icons/fi";

export default function CertificatesPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16 text-slate-900 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-600">Sertifikatlar</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Keyfiyyət, təhlükəsizlik və etibarlılıq</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            Texnoland olaraq fəaliyyətimizin hər addımında beynəlxalq standartlara uyğunluq, təhlükəsizlik və davamlılıq prinsiplərini prioritetləşdiririk.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {certificates.map((certificate, index) => (
            <div key={certificate.title} className="rounded-[1.75rem] border border-slate-200/70 bg-white/80 p-6 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.18)] backdrop-blur-xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                {index === 0 ? <FiShield /> : index === 1 ? <FiAward /> : <FiCheckCircle />}
              </div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Sertifikat</p>
              <h2 className="mt-3 text-xl font-semibold text-slate-900">{certificate.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{certificate.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
