"use client";

import CurrencyRates from "@/Components/Home/CurrencyRates/CurrencyRates";
import DataSlider from "@/Components/Home/DataSlider/DataSlider";
import Partners from "@/Components/Home/Partners/Partners";
import Portfolio from "@/Components/Home/Portfolio/Portdolio";
import ProjectsSection from "@/Components/Home/ProjectSection/ProjectSection";
import SolarCalculator from "@/Components/Home/SolarCalculator/SolarCalculator";
import Footer from "@/Components/Layout/Footer/Footer";
import Header from "@/Components/Layout/Header/Header";

const data = [
  {
    title: "İnnovasiya / Yenilikçilik",
    desc: "Bazarı və onun ehtiyaclarını ön görərək, peşəkar bacarığımızla sektoru və gələcəyi formalaşdıracaq innovativ həll yolları hazırlayır və yenilikçi ideyalarımızı sürətlə həyata keçiririk.",
  },
  {
    title: "Dəstək",
    desc: "Bizim üçün eyni dəyərləri paylaşan, sağlam düşüncə ilə məqsədlərinə yönələn, əməkdaşlığın başlanğıcı və birliyin gücü olduğuna inanan bir komanda ilə, dəyərli müştərilərinə satış öncəsi və sonrası innovativ həll yolları ilə dəstək olacaqdır.",
  },
  {
    title: "Zəmanət",
    desc: "Dünya brendlərinin istehsalı olan enerji qurğularının, istehsalçı tərəfindən ən yüksək dərəcəli zəmanəti ilə təmin olunmasını təklif edirik. Eyni zamanda sisteminiz istismara verildikdən sonra, təmirdən baxıma qədər, Texnoland zəmanətindən də yararlana bilərsiniz.",
  },
  {
    title: "İnsan və Ətraf Mühit",
    desc: "Biz bütün işlərimizi insanlara və ətraf mühitə diqqətlə, zərər vermədən icra edirik. İşçilərimizin, müştərilərimizin, təchizatçılarımızın və cəmiyyətin gözləntilərini nəzərə alaraq ətraf mühitə olan məsuliyyətimizlə gələcək nəsillərə daha yaşana bilən bir dünya buraxmağı hədəfləyirik",
  },
];


export default function Home() {
  return (
    <div >
      <Header />
      <DataSlider />
      <section className="bg-black text-white py-20">
        <div className="max-w-[1200px] mx-auto px-4">

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {data.map((item, i) => (
              <div
                key={i}
                className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:border-cyan-500 transition overflow-hidden"
              >

                {/* GLOW */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition"></div>

                {/* CONTENT */}
                <div className="relative z-10">

                  {/* ICON PLACEHOLDER */}
                  <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600"></div>

                  <h3 className="text-lg font-semibold mb-3 group-hover:text-cyan-400 transition">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-6">
                    {item.desc}
                  </p>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>
      <ProjectsSection />
      <ProjectsSection />
      <SolarCalculator/>
      <CurrencyRates/>
      <Partners/>
      <Portfolio/>
      <Footer />
    </div>
  );
}
