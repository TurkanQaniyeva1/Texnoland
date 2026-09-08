import Image from "next/image";
import Link from "next/link";
import { HeroSection } from "@/Components/sections/HeroSection";
import { AboutSection } from "@/Components/sections/AboutSection";
import { FAQSection } from "@/Components/sections/FAQSection";
import { Card } from "@/Components/ui/Card";
import { SectionHeading } from "@/Components/ui/SectionHeading";
import { certificates, newsArticles, partners, portfolioItems, projects, reviews, services } from "@/lib/mockData";
import { FiArrowRight, FiAward, FiBarChart2, FiBriefcase, FiCheckCircle, FiCpu, FiHome, FiShield, FiZap } from "react-icons/fi";

const serviceIcons: Record<string, React.ReactNode> = {
  energy: <FiZap />, 
  grid: <FiCpu />, 
  network: <FiShield />, 
  service: <FiCheckCircle />, 
  building: <FiHome />, 
  audit: <FiBarChart2 />, 
  meter: <FiBriefcase />,
};

export default function Home() {
  return (
    <main className="page-shell min-h-screen bg-slate-50 text-slate-900">
      <HeroSection />
      <AboutSection />

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <SectionHeading eyebrow="Xidmətlər" title="Müxtəlif sahələrdə tam texniki dəstək" description="Enerji, elektrik şəbəkələri, inşaat və mühəndis komunikasiyasında keyfiyyətli həllər təklif edirik." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} title={service.title} description={service.description} icon={serviceIcons[service.icon] ?? <FiAward />} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <SectionHeading eyebrow="Layihələr" title="Nəticə verən, uzunmüddətli və etibarlı layihələr" description="Hər bir layihə üçün planlaşdırma, həyata keçirilməsi və sonrakı dəstək prinsipləri tətbiq olunur." />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="rounded-[1.75rem] border border-slate-200/70 bg-white/80 p-6 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.18)] backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">{project.year}</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">{project.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{project.location}</p>
              <p className="mt-4 text-sm leading-7 text-slate-600">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-6 rounded-[2rem] border border-slate-200/70 bg-white/80 p-8 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.16)] backdrop-blur-xl lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
          <div>
            <SectionHeading eyebrow="Sertifikatlar" title="Beynəlxalq standartların və təhlükəsizliyin qorunması" description="Texnoland olaraq bütün fəaliyyətlərdə keyfiyyət, təhlükəsizlik və davamlılıq standartlarını prioritetləşdiririk." />
            <div className="mt-8 space-y-3">
              {certificates.map((certificate) => (
                <div key={certificate.title} className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-slate-50/80 p-4">
                  <FiAward className="text-emerald-600" />
                  <div>
                    <p className="font-semibold text-slate-900">{certificate.title}</p>
                    <p className="text-sm text-slate-500">{certificate.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Partnyorlar" title="Tərəfdaşlıq və etibarlı əməkdaşlıq" description="Böyük layihələrdə yerli və beynəlxalq tərəfdaşlarla birlikdə işləyirik." />
            <div className="mt-8 flex flex-wrap gap-3">
              {partners.map((partner) => (
                <span key={partner} className="rounded-full border border-slate-200/70 bg-slate-50/80 px-4 py-2 text-sm font-medium text-slate-700">{partner}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <SectionHeading eyebrow="Müştərilər" title="Müştərilərimizdən gələn rəy" description="Hər bir layihə üçün qapalı məcmuədən kənarda, açıq və həssas əməkdaşlıq nümayiş etdiririk." />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {reviews.map((review) => (
            <div key={review.name} className="rounded-[1.75rem] border border-slate-200/70 bg-white/80 p-6 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.16)]">
              <p className="text-sm leading-8 text-slate-600">“{review.quote}”</p>
              <div className="mt-6">
                <p className="font-semibold text-slate-900">{review.name}</p>
                <p className="text-sm text-slate-500">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="texnoloji-yenilikler" className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <SectionHeading eyebrow="Texnoloji yeniliklər" title="Texnolandun innovativ istiqamətləri" description="Enerji sistemləri və infrastrukturun inkişafında yeni texnologiyalar, davamlılıq və səmərəlilik bizim əsas prioritetlərimizdəndir." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {newsArticles.map((article) => (
            <article key={article.id} className="rounded-[1.75rem] border border-slate-200/70 bg-white/80 p-5 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.18)]">
              <p className="text-xs uppercase tracking-[0.25em] text-emerald-600">{article.category}</p>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{article.title}</h3>
              <p className="mt-2 text-xs text-slate-500">{article.date}</p>
              <p className="mt-4 text-sm leading-7 text-slate-600">{article.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <SectionHeading eyebrow="Portfolio" title="Gördüyümüz işlər" description="Layihələrimizdə keyfiyyət, təhlükəsizlik və davamlı inkişaf əsas həllərimizdən biridir." />
        <div className="mt-10 overflow-x-auto pb-2">
          <div className="flex min-w-max gap-5">
            {portfolioItems.map((item) => (
              <div key={item.id} className="w-[280px] overflow-hidden rounded-[1.5rem] border border-slate-200/70 bg-white/80 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.18)]">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 280px" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <Link href="/projects" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-emerald-700">Ətraflı bax <FiArrowRight /></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
    </main>
  );
}
