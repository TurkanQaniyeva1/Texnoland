"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { collection, getDocs, limit, query, startAfter, type DocumentData, type QueryDocumentSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";

type Project = {
  id: string;
  title: string;
  desc: string;
  image: string;
};

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [lastDoc, setLastDoc] = useState<QueryDocumentSnapshot<DocumentData> | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchProjects = async () => {
    setLoading(true);

    const q = query(collection(db, "projects"), limit(4));
    const snapshot = await getDocs(q);

    const data = snapshot.docs.map((doc) => {
      const documentData = doc.data() as Partial<Project>;
      return {
        id: doc.id,
        title: documentData.title ?? "Texnoland layihəsi",
        desc: documentData.desc ?? "Mühəndislik və enerji həlli.",
        image: documentData.image ?? "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
      } satisfies Project;
    });

    setProjects(data);
    setLastDoc(snapshot.docs[snapshot.docs.length - 1] ?? null);
    setLoading(false);
  };

  const loadMore = async () => {
    if (!lastDoc) return;

    const q = query(collection(db, "projects"), startAfter(lastDoc), limit(4));
    const snapshot = await getDocs(q);

    const newData = snapshot.docs.map((doc) => {
      const documentData = doc.data() as Partial<Project>;
      return {
        id: doc.id,
        title: documentData.title ?? "Texnoland layihəsi",
        desc: documentData.desc ?? "Mühəndislik və enerji həlli.",
        image: documentData.image ?? "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
      } satisfies Project;
    });

    setProjects((prev) => [...prev, ...newData]);
    setLastDoc(snapshot.docs[snapshot.docs.length - 1] ?? null);
  };

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void fetchProjects();
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-fixed bg-center bg-cover py-24 text-white" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1509395176047-4a66953fd231)" }}>
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative mx-auto max-w-[1200px] px-4">
        <h2 className="mb-16 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-center text-3xl font-bold text-transparent md:text-5xl">
          Gördüyümüz İşlər
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((item) => (
            <div key={item.id} className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg transition hover:border-cyan-500">
              <div className="overflow-hidden">
                <Image src={item.image} alt={item.title} width={600} height={400} className="h-[180px] w-full object-cover transition duration-500 group-hover:scale-110" />
              </div>

              <div className="p-4">
                <h3 className="mb-2 text-sm font-semibold transition group-hover:text-cyan-400">{item.title}</h3>
                <p className="text-xs text-gray-400 line-clamp-3">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button onClick={() => void loadMore()} disabled={loading} className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 transition hover:scale-105 disabled:opacity-60">
            {loading ? "Yüklənir..." : "Daha çox göstər"}
          </button>
        </div>
      </div>
    </section>
  );
}