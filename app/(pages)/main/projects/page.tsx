"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/Components/Layout/Footer/Footer";
import TopBar from "@/Components/Layout/TopBar/TopBar";
import Header from "@/Components/Layout/Header/Header";

type Project = {
  id: number;
  title: string;
  location: string;
  image: string;
};

const allProjects: Project[] = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  title: `Premium Layihə ${i + 1}`,
  location: "Bakı, Azərbaycan",
  image: `https://picsum.photos/600/400?random=${i}`,
}));

const ITEMS_PER_PAGE = 6;

export default function Projects() {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(allProjects.length / ITEMS_PER_PAGE);

  const current = allProjects.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
<>
<TopBar/>
<Header/>
<main>
        <section className="relative py-20 px-4 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
      
      {/* Glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-500/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Layihələrimiz
          </h2>
          <p className="text-gray-500 mt-3 text-sm md:text-base">
            Ən son və innovativ layihələrimizə baxın
          </p>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {current.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl overflow-hidden bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    className="w-full h-[240px] object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80" />

                  {/* Hover overlay content */}
                  <div className="absolute bottom-0 p-5 text-white">
                    <h3 className="text-lg font-semibold">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-200">
                      {project.location}
                    </p>
                  </div>
                </div>

                {/* Bottom */}
                <div className="p-4 flex justify-between items-center">
                  <span className="text-xs text-gray-500">
                    {project.location}
                  </span>

                  <button className="text-red-500 text-sm font-medium relative group">
                    Ətraflı
                    <span className="block h-[2px] w-0 bg-red-500 transition-all group-hover:w-full"></span>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-16 flex-wrap">

          {/* Prev */}
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            className="w-10 h-10 flex items-center justify-center rounded-full border bg-white shadow hover:shadow-md transition"
          >
            ←
          </button>

          {/* Numbers */}
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`w-10 h-10 rounded-full text-sm font-medium transition ${
                page === i + 1
                  ? "bg-red-500 text-white shadow-lg scale-110"
                  : "bg-white border hover:bg-gray-100"
              }`}
            >
              {i + 1}
            </button>
          ))}

          {/* Next */}
          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            className="w-10 h-10 flex items-center justify-center rounded-full border bg-white shadow hover:shadow-md transition"
          >
            →
          </button>
        </div>

      </div>
    </section>
</main>
<Footer/>
</>
  );
}