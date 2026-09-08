import Link from "next/link";
import Image from "next/image";
import { companyServices } from "@/lib/companyData";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

export function generateStaticParams() { return companyServices.map((service) => ({ slug: service.slug })); }

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = companyServices.find((item) => item.slug === slug) ?? {
    slug,
    title: decodeURIComponent(slug).replaceAll("-", " "),
    summary: "Texnoland tərəfindən təqdim olunan peşəkar texniki xidmət.",
    details: "Bu xidmət istiqaməti üzrə ehtiyacınızı qiymətləndirir, obyektinizə uyğun texniki həll və icra planı hazırlayırıq.",
    icon: "08",
  };

  const features = [
    "Peşəkar konsultasiya və plan hazırlanması",
    "Yüksək keyfiyyətli materiallar və avadanlıqlar",
    "Təcrübəli mühəndis və texniki komanda",
    "Zəmanətli xidmət və dəstək",
  ];

  const benefits = [
    { title: "Enerji Səmərəliliyi", description: "Operasional xərclər azalır və məhsuldarlıq artır." },
    { title: "Uzunmüddətli Dəstək", description: "Quraşdırma sonrası düzenli maintenance və servis xidməti." },
    { title: "Təhlükəsizlik", description: "Beynəlxalq standartlara uyğun quraşdırma və iş təhlükəsizliyi." },
    { title: "Rentabellilk", description: "Sürətli geri qazanma dövrü və maksimum kəsb dərəcəsi." },
  ];

  const images = ["/images/min_mekteb.jpg", "/images/omega.png"];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 px-4 py-20 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300">
            ← Bütün xidmətlər
          </Link>
          
          <div className="mt-12">
            <p className="text-sm uppercase tracking-[0.35em] text-emerald-400">Xidmət detalı</p>
            <h1 className="mt-4 text-4xl font-semibold sm:text-5xl lg:text-6xl leading-tight">{service.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{service.summary}</p>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/quote" className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-500">
                Təklif alın <FiArrowRight />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-slate-100 transition hover:border-white/40 hover:bg-white/5">
                Məsləhətləşin
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="px-4 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <h2 className="text-3xl font-semibold">Xidmətin Dəqiq Təsviri</h2>
              <div className="mt-6 space-y-4 text-slate-400">
                <p>{service.details}</p>
                <p>Biz hər bir layihəni fərdi yanaşma ilə həl edirik. Sizin ehtiyaclarınızı diqqətlə dinləyib, texniki məsləhətçilərimiz ən yaxşı həlli təklif edirik.</p>
                <p>Texnoland-ın profesional komandası quraşdırmadan sonra da uzunmüddətli dəstək və arta baxışı təmin edir.</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <Image
                src={images[0]}
                alt={service.title}
                width={500}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-y border-white/10 bg-slate-900/50 px-4 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold">Xüsusiyyətlər</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="flex gap-4">
                <FiCheckCircle className="h-6 w-6 text-emerald-400 flex-shrink-0 mt-1" />
                <p className="text-slate-300">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold mb-12">Faydalanma</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-xl border border-white/10 bg-slate-900/50 p-6 transition hover:border-emerald-400/50 hover:bg-slate-900/80">
                <h3 className="font-semibold text-white">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="border-y border-white/10 bg-slate-900/50 px-4 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold mb-12">Proses</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Məsləhətləşmə", desc: "Ehtiyaclarınızı qiymətləndirilir" },
              { step: "02", title: "Layihə", desc: "Texniki həll hazırlanır" },
              { step: "03", title: "İcra", desc: "Professional quraşdırma əməliyyatı" },
              { step: "04", title: "Dəstək", desc: "Uzunmüddətli servis xidməti" },
            ].map((item) => (
              <div key={item.step} className="space-y-3">
                <div className="text-3xl font-bold text-emerald-400">{item.step}</div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-8 text-center lg:p-12">
          <h2 className="text-3xl font-semibold">Bu xidmətlə maraqlandınız?</h2>
          <p className="mt-4 text-slate-300">Texnoloji çözüm üçün Texnoland-a müraciət edin. Peşəkar komandamız sizə kömək etməyə hazırdır.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/quote" className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-500">
              Təklif alın <FiArrowRight />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:border-white/40 hover:bg-white/5">
              Əlaqə saxla
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
