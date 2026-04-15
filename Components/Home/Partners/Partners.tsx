"use client";

const partners = [
  "/images/f-logo1.png",
  "/images/omega.png",
  "/images/min_mekteb.jpg",
];
export default function Partners() {
  return (
    <section className="bg-black py-16">
      <div className="max-w-[1200px] mx-auto px-4 text-center">

        <h2 className="text-3xl font-bold text-white mb-10">
          Tərəfdaşlar
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-10">

          {partners.map((logo, i) => (
            <div
              key={i}
              className="w-[120px] h-[60px] flex items-center justify-center opacity-60 hover:opacity-100 hover:scale-110 transition duration-300"
            >
              <img src={logo} className="object-contain" />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}