"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/podtext/SectionHeader";
import ProjectCard from "@/components/podtext/ProjectCard";
import { projects } from "@/lib/data";

const filters = [
  "Vše",
  "Reportáž",
  "Medailonek",
  "Podcast",
  "Firemní video",
  "Sociální sítě",
];

export default function ProdukcePage() {
  const [activeFilter, setActiveFilter] = useState("Vše");

  const filtered =
    activeFilter === "Vše"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            title="Produkce"
            subtitle="Od reportáží a dokumentů po firemní videa a podcasty. Každý projekt má svůj příběh — a my ho umíme vyprávět."
          />
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? "bg-[#E8B84B] text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-[#E8B84B]/30"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 py-16">
            V této kategorii zatím nemáme žádné projekty.
          </p>
        )}
      </div>
    </div>
  );
}
