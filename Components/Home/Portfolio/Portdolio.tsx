"use client";

import { useEffect, useRef, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type Item = {
  id: string;
  image: string;
  title: string;
};
const dummyData = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
    title: "Günəş Enerjisi Layihəsi",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    title: "Texnologiya Mərkəzi",
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    title: "Smart Sistemlər",
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    title: "Elektrik Layihəsi",
  },
];

export default function Portfolio() {
const [data, setData] = useState<Item[]>(dummyData);
  const sliderRef = useRef<HTMLDivElement>(null);

  // 🔥 FETCH FROM FIREBASE
useEffect(() => {
  const fetchData = async () => {
    try {
      const snapshot = await getDocs(collection(db, "portfolio"));
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as any),
      }));

      if (items.length > 0) {
        setData(items);
      }
    } catch (error) {
      console.log("Firebase yoxdur, dummy işləyir");
    }
  };

  fetchData();
}, []);
  // 👉 scroll buttons
  const scroll = (dir: "left" | "right") => {
    if (!sliderRef.current) return;

    const width = sliderRef.current.clientWidth;

    sliderRef.current.scrollBy({
      left: dir === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-black text-white py-20 overflow-hidden">

      <div className="max-w-[1200px] mx-auto px-4">

        {/* TITLE */}
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text">
          Portfolio
        </h2>

        {/* WRAPPER */}
        <div className="relative">

          {/* LEFT BUTTON */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-white/20 transition"
          >
            <FaChevronLeft />
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-white/20 transition"
          >
            <FaChevronRight />
          </button>

          {/* SLIDER */}
          <div
            ref={sliderRef}
            className="flex gap-5 overflow-x-auto scroll-smooth no-scrollbar cursor-grab active:cursor-grabbing"
          >

            {data.map((item) => (
              <div
                key={item.id}
                className="min-w-[80%] sm:min-w-[45%] lg:min-w-[23%] group relative rounded-xl overflow-hidden border border-white/10"
              >

                {/* IMAGE */}
                <img
                  src={item.image}
                  className="w-full h-[250px] object-cover group-hover:scale-110 transition duration-500"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-center px-3">
                  <p className="text-sm text-white font-medium">
                    {item.title}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}