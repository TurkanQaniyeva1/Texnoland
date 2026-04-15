"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, limit, query, startAfter } from "firebase/firestore";
import { db } from "@/lib/firebase";
// import { db } from "@/lib/firebase";

type Project = {
  id: string;
  title: string;
  desc: string;
  image: string;
};

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [lastDoc, setLastDoc] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // INITIAL FETCH
  const fetchProjects = async () => {
    setLoading(true);

    const q = query(collection(db, "projects"), limit(4));
    const snapshot = await getDocs(q);

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as any),
    }));

    setProjects(data);
    setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
    setLoading(false);
  };

  // LOAD MORE
  const loadMore = async () => {
    if (!lastDoc) return;

    const q = query(
      collection(db, "projects"),
      startAfter(lastDoc),
      limit(4)
    );

    const snapshot = await getDocs(q);

    const newData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as any),
    }));

    setProjects((prev) => [...prev, ...newData]);
    setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section
      className="py-24 text-white relative bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1509395176047-4a66953fd231)",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative max-w-[1200px] mx-auto px-4">

        {/* TITLE */}
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text">
          Gördüyümüz İşlər
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {projects.map((item) => (
            <div
              key={item.id}
              className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-lg hover:border-cyan-500 transition"
            >

              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  className="w-full h-[180px] object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4">

                <h3 className="text-sm font-semibold mb-2 group-hover:text-cyan-400 transition">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-400 line-clamp-3">
                  {item.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

        {/* LOAD MORE */}
        <div className="text-center mt-12">
          <button
            onClick={loadMore}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:scale-105 transition"
          >
            Daha çox göstər
          </button>
        </div>

      </div>
    </section>
  );
}