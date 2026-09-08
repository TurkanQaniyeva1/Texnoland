"use client";

import Image from "next/image";

const partners = [
  "/images/f-logo1.png",
  "/images/omega.png",
  "/images/min_mekteb.jpg",
];

export default function Partners() {
  return (
    <section className="bg-black py-16">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-10">Tərəfdaşlar</h2>

        <div className="flex flex-wrap justify-center items-center gap-10">
          {partners.map((logo, i) => (
            <div
              key={i}
              className="flex h-[60px] w-[120px] items-center justify-center opacity-60 transition duration-300 hover:scale-110 hover:opacity-100"
            >
              <Image src={logo} alt="Partner logo" width={120} height={60} className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}