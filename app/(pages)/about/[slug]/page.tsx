import Link from "next/link";

const companySections: Record<string, { title: string; text: string }> = {
  mission: { title: "Məqsədimiz", text: "Müasir texnologiyalarla təhlükəsiz, səmərəli və dayanıqlı enerji həllərini əlçatan etməkdir." },
  warranty: { title: "Zəmanət", text: "Layihələrimiz seçilmiş avadanlıq və icra standartlarına uyğun zəmanət şərtləri ilə təqdim olunur." },
  "social-responsibility": { title: "Sosial məsuliyyət", text: "İnsanlara, əməkdaşlarımıza və fəaliyyət göstərdiyimiz icmalara dəyər qatan məsuliyyətli layihələri dəstəkləyirik." },
  environment: { title: "Ətraf mühit", text: "Enerji səmərəliliyi və bərpa olunan mənbələr vasitəsilə daha yaşana bilən gələcəyə töhfə veririk." },
};

export default async function CompanyDetailPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const section = companySections[slug] ?? { title: decodeURIComponent(slug).replaceAll("-", " "), text: "Texnoland şirkətinin fəaliyyət prinsipləri, komanda yanaşması və keyfiyyət standartları haqqında məlumat." }; return <main className="min-h-screen bg-slate-950 px-4 py-16 text-slate-100 lg:px-8"><article className="mx-auto max-w-4xl"><Link href="/about" className="text-sm text-emerald-400">← Şirkətimiz</Link><p className="mt-12 text-sm uppercase tracking-[0.35em] text-emerald-400">Texnoland</p><h1 className="mt-4 text-4xl font-semibold capitalize sm:text-6xl">{section.title}</h1><p className="mt-8 max-w-2xl text-xl leading-9 text-slate-300">{section.text}</p></article></main>; }