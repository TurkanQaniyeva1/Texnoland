"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiArrowRight, FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import { companyProjects } from "@/lib/companyData";

const slides = [
  ["Günəş enerjisi", "Obyektiniz üçün səmərəli və dayanıqlı enerji sistemləri.", "/services/solar-panels"],
  ["Günəş suvarma sistemləri", "Kənd təsərrüfatı və suvarma ehtiyaclarına ağıllı həll.", "/services/solar-irrigation"],
  ["Smart sayğaclaşma", "Enerji sərfiyyatını dəqiq ölçün, idarə edin və optimallaşdırın.", "/services/meters"],
  ["Enerji auditi", "Enerji itkilərini müəyyənləşdirin və qənaət planınızı qurun.", "/services/energy-audit"],
  ["Elektrik şəbəkələri", "Alçaq, orta və yüksək gərginlikli sistemlər üçün etibarlı icra.", "/services/electrical-grids"],
  ["Mühəndis kommunikasiya", "Avtomatika və kommunikasiya sistemlərini vahid həllə çeviririk.", "/services/engineering-communications"],
  ["Texniki servis", "Sistemin istismar müddətini uzadan planlı texniki dəstək.", "/services/consulting"],
  ["İnşaat işləri", "Enerji səmərəliliyini müasir inşaatla birləşdiririk.", "/services/construction"],
];
const values = [
  ["01", "İnnovasiya", "Sektoru və gələcəyi formalaşdıran yenilikçi həlləri sürətlə həyata keçiririk."],
  ["02", "Dəstək", "Satış öncəsi və sonrası peşəkar komanda dəstəyi ilə yanınızdayıq."],
  ["03", "Zəmanət", "Seçilmiş avadanlıq və işlər üçün etibarlı zəmanət şərtləri təqdim edirik."],
  ["04", "İnsan və ətraf mühit", "İşlərimizi insanlara və gələcək nəsillərə məsuliyyətlə yanaşaraq görürük."],
];
const news = [
  ["Enerji səmərəliliyi", "06-10 Yanvar Enerji Verimliliyi Həftəsi", "Səmərəli enerji istifadəsi üçün gündəlik və texniki yanaşmalar."],
  ["Sərgi", "Solarex İstanbul Günəş Enerjisi Sərgisi", "Bərpa olunan enerji texnologiyalarında yeni imkanlar və tərəfdaşlıqlar."],
  ["Seminar", "Binalar üçün Milli Renovasiya Proqramı", "Enerji səmərəli binaların planlaşdırılması üzrə əsas məqamlar."],
  ["Tərəfdaşlıq", "Yeni tərəfdaşlıqlar və yaşıl gələcək", "Texnoland komandası daha dayanıqlı enerji ekosistemi qurur."],
  ["Görüş", "Astara sahibkarları ilə görüş", "Regionlarda enerji həllərinin tətbiqi üzrə müzakirələr."],
  ["İnnovasiya", "2024 Yaşıl dünya naminə həmrəylik ili", "Davamlı enerji gələcəyi üçün ortaq məsuliyyət."],
];
const imageSources = ["/images/min_mekteb.jpg", "/images/omega.png", "/images/f-logo1.png", "/images/logo.png"];

export function HomeExperience() {
  const [slide, setSlide] = useState(0);
  const [projectCount, setProjectCount] = useState(4);
  const [newsCount, setNewsCount] = useState(4);
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  useEffect(() => {
    const timer = window.setInterval(() => setSlide((current) => (current + 1) % slides.length), 5000);
    return () => window.clearInterval(timer);
  }, []);

  return <>
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(16,185,129,.28),transparent_32%),linear-gradient(120deg,#020617,#062a2b_55%,#0f172a)]" />
      <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-center gap-10 px-4 py-20 lg:grid-cols-[1fr_.85fr] lg:px-8">
        <div key={slide} className="animate-[fadeUp_.6s_ease-out]"><p className="text-sm uppercase tracking-[.35em] text-emerald-300">Texnoloji Həllər!</p><h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">{slides[slide][0]}</h1><p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">{slides[slide][1]}</p><Link href={slides[slide][2]} className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">Ətraflı <FiArrowRight /></Link></div>
        <div className="relative aspect-[4/3] overflow-hidden border border-white/15 bg-white/5 p-3 shadow-2xl"><Image src={imageSources[slide % imageSources.length]} alt={slides[slide][0]} fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover opacity-70 transition duration-700" priority={slide === 0} /><div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-emerald-400/10" /><div className="absolute bottom-6 left-6 right-6"><p className="text-xs uppercase tracking-[.3em] text-emerald-300">Texnoland / 0{slide + 1}</p><p className="mt-2 text-2xl font-semibold">Enerjinin gələcəyini qururuq</p></div></div>
        <div className="absolute bottom-8 left-4 right-4 flex items-center justify-between lg:left-8 lg:right-8"><button type="button" aria-label="Əvvəlki slayd" onClick={() => setSlide((slide - 1 + slides.length) % slides.length)} className="rounded-full border border-white/20 p-3 hover:bg-white/10"><FiChevronLeft /></button><div className="flex gap-2" role="tablist">{slides.map((item, index) => <button key={item[0]} type="button" aria-label={`${index + 1}-ci slayd`} onClick={() => setSlide(index)} className={`h-2 transition-all ${index === slide ? "w-10 bg-emerald-400" : "w-2 bg-white/40"}`} />)}</div><button type="button" aria-label="Növbəti slayd" onClick={() => setSlide((slide + 1) % slides.length)} className="rounded-full border border-white/20 p-3 hover:bg-white/10"><FiChevronRight /></button></div>
      </div>
    </section>
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8"><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{values.map((value) => <article key={value[0]} className="group border border-white/10 bg-slate-900 p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-emerald-400 hover:shadow-xl"><span className="text-sm font-semibold text-emerald-500">{value[0]}</span><h2 className="mt-10 text-xl font-semibold text-white">{value[1]}</h2><p className="mt-3 text-sm leading-7 text-slate-400">{value[2]}</p><div className="mt-6 h-1 w-8 bg-emerald-400 transition-all group-hover:w-full" /></article>)}</div></section>
    <section className="bg-slate-900 bg-[linear-gradient(rgba(2,6,23,.78),rgba(2,6,23,.9)),url('/images/min_mekteb.jpg')] bg-cover bg-fixed bg-center py-16 text-white"><div className="mx-auto max-w-7xl px-4 lg:px-8"><div className="flex flex-wrap items-end justify-between gap-5"><div><p className="text-sm uppercase tracking-[.35em] text-emerald-300">Portfolio</p><h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Gördüyümüz işlər</h2></div><Link href="/projects" className="text-sm font-semibold text-emerald-300">Bütün layihələr →</Link></div><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{companyProjects.slice(0, projectCount).map((project) => <Link key={project.slug} href={`/projects/${project.slug}`} className="group flex min-h-64 flex-col justify-between border border-white/15 bg-slate-950/60 p-5 backdrop-blur transition hover:-translate-y-1 hover:border-emerald-300"><div><p className="text-xs uppercase tracking-[.18em] text-emerald-300">{project.type}</p><h3 className="mt-6 text-xl font-semibold">{project.title}</h3></div><div className="text-sm text-slate-400"><p>{project.location}</p><p className="mt-1 text-emerald-300">{project.capacity ?? "Texniki layihə"}</p></div></Link>)}</div>{projectCount < companyProjects.length ? <button type="button" onClick={() => setProjectCount((count) => Math.min(count + 4, companyProjects.length))} className="mx-auto mt-10 block rounded-full border border-emerald-300/50 px-5 py-3 text-sm font-semibold text-emerald-200 hover:bg-emerald-400/10">Daha çox göstər</button> : null}</div></section>
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8"><div className="flex flex-wrap items-end justify-between gap-5"><div><p className="text-sm uppercase tracking-[.35em] text-emerald-500">Məlumatlar</p><h2 className="mt-3 text-3xl font-semibold text-white">Texnoloji yeniliklər</h2></div><Link href="/discover" className="text-sm font-semibold text-emerald-300">Bütün məlumatlar →</Link></div><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{news.slice(0, newsCount).map((item, index) => <Link href={`/discover/${index + 1}-${item[0].toLowerCase().replaceAll(" ", "-")}`} key={item[1]} className="group overflow-hidden border border-white/10 bg-slate-900"><div className="relative h-40 bg-emerald-950"><Image src={imageSources[index % imageSources.length]} alt={item[1]} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover opacity-70 transition duration-500 group-hover:scale-105" /></div><div className="p-5"><p className="text-xs uppercase tracking-[.16em] text-emerald-400">{item[0]} / 2026</p><h3 className="mt-4 font-semibold text-white">{item[1]}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{item[2]}</p><span className="mt-5 inline-block text-sm font-semibold text-emerald-400">Ətraflı oxu →</span></div></Link>)}</div>{newsCount < news.length ? <button type="button" onClick={() => setNewsCount(news.length)} className="mx-auto mt-10 block rounded-full border border-emerald-400/50 px-5 py-3 text-sm font-semibold text-emerald-300 hover:bg-emerald-400/10">Daha çox göstər</button> : null}</section>
    <PartnersStrip />
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8"><div className="flex items-end justify-between"><div><p className="text-sm uppercase tracking-[.35em] text-emerald-500">Portfolio</p><h2 className="mt-3 text-3xl font-semibold text-white">Layihələrdən kadrlar</h2></div></div><div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">{imageSources.map((source, index) => <button type="button" key={source} onClick={() => setGalleryIndex(index)} className="group relative aspect-[4/3] overflow-hidden"><Image src={source} alt={`Texnoland portfolio ${index + 1}`} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition duration-500 group-hover:scale-110" /><span className="absolute inset-0 bg-emerald-950/0 transition group-hover:bg-emerald-950/30" /></button>)}</div></section>
    {galleryIndex !== null ? <div role="dialog" aria-modal="true" aria-label="Portfolio görüntüsü" className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/95 p-5" onClick={() => setGalleryIndex(null)}><button type="button" aria-label="Bağla" className="absolute right-5 top-5 rounded-full border border-white/20 p-3 text-white" onClick={() => setGalleryIndex(null)}><FiX /></button><div className="relative h-[75vh] w-full max-w-5xl" onClick={(event) => event.stopPropagation()}><Image src={imageSources[galleryIndex]} alt={`Portfolio ${galleryIndex + 1}`} fill sizes="90vw" className="object-contain" /></div></div> : null}
  </>;
}

function PartnersStrip() { return <section className="border-y border-white/10 bg-slate-900 py-12"><div className="mx-auto max-w-7xl px-4 lg:px-8"><p className="text-center text-sm uppercase tracking-[.35em] text-emerald-500">Tərəfdaşlar</p><div className="mt-8 grid grid-cols-3 items-center gap-6 opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0"><Image src="/images/f-logo1.png" alt="Tərəfdaş 1" width={160} height={70} loading="eager" className="mx-auto h-12 w-auto object-contain" /><Image src="/images/omega.png" alt="Tərəfdaş 2" width={160} height={70} className="mx-auto h-12 w-auto object-contain" /><Image src="/images/logo.png" alt="Tərəfdaş 3" width={160} height={70} className="mx-auto h-12 w-auto object-contain" /></div></div></section>; }
