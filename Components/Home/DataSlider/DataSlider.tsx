"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { dataSlider } from "@/Constants/dataSlider";

export default function DataSlider() {
  const [index, setIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % dataSlider.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full h-[70vh] bg-black text-white relative overflow-hidden">

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0 flex items-center justify-center px-4"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
        >

          {/* BACKGROUND GLOW */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-transparent"></div>

          {/* CONTENT */}
          <div className="max-w-[900px] text-center z-10">

            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text">
              {dataSlider[index].title}
            </h2>

            <p className="mt-6 text-gray-300 text-lg leading-7">
              {dataSlider[index].desc}
            </p>

            <button className="mt-8 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:scale-105 transition">
              Ətraflı
            </button>

          </div>

        </motion.div>
      </AnimatePresence>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {dataSlider.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              i === index ? "bg-cyan-500 scale-125" : "bg-gray-600"
            }`}
          />
        ))}
      </div>

    </section>
  );
}