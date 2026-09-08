"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type Item = {
id: string;
image: string;
title: string;
};

const dummyData: Item[] = [
{ id: "1", image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231", title: "Günəş Enerjisi Layihəsi" },
{ id: "2", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085", title: "Texnologiya Mərkəzi" },
{ id: "3", image: "https://images.unsplash.com/photo-1518770660439-4636190af475", title: "Smart Sistemlər" },
{ id: "4", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b", title: "Elektrik Layihəsi" },
];

export default function Portfolio() {
const [data, setData] = useState<Item[]>(dummyData);
const sliderRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const fetchData = async () => {
    try {
      const snapshot = await getDocs(collection(db, "portfolio"));
      const items = snapshot.docs.map((doc) => {
        const documentData = doc.data() as Partial<Item>;
        return {
          id: doc.id,
          image: documentData.image ?? "",
          title: documentData.title ?? "Texnoland layihəsi",
        } satisfies Item;
      });

      if (items.length > 0) {
        setData(items);
      }
    } catch {
      // Firebase is optional in this frontend-only build.
    }
  };

  void fetchData();
}, []);

const scroll = (dir: "left" | "right") => {
  if (!sliderRef.current) return;

  const width = sliderRef.current.clientWidth;

  sliderRef.current.scrollBy({
    left: dir === "left" ? -width : width,
    behavior: "smooth",
  });
};

return (
  <section className="overflow-hidden bg-black py-20 text-white">
    <div className="mx-auto max-w-[1200px] px-4">
      <h2 className="mb-12 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-center text-3xl font-bold text-transparent md:text-5xl">
        Portfolio
      </h2>

      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white/10 p-3 backdrop-blur-md transition hover:bg-white/20 md:flex"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white/10 p-3 backdrop-blur-md transition hover:bg-white/20 md:flex"
        >
          <FaChevronRight />
        </button>

        <div ref={sliderRef} className="flex cursor-grab gap-5 overflow-x-auto scroll-smooth active:cursor-grabbing">
          {data.map((item) => (
            <div key={item.id} className="group relative min-w-[80%] overflow-hidden rounded-xl border border-white/10 sm:min-w-[45%] lg:min-w-[23%]">
              <Image src={item.image} alt={item.title} width={600} height={350} className="h-[250px] w-full object-cover transition duration-500 group-hover:scale-110" />

              <div className="absolute inset-0 flex items-center justify-center bg-black/60 px-3 text-center opacity-0 transition group-hover:opacity-100">
                <p className="text-sm font-medium text-white">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
}