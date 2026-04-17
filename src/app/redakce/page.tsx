"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/podtext/SectionHeader";
import ArticleCard from "@/components/podtext/ArticleCard";
import { articles } from "@/lib/data";

const categories = [
  "Vše",
  "Rozhovor",
  "Reportáž",
  "Profil",
  "Komerční sdělení",
  "Za kamerou",
  "Podcast",
  "Redakce",
];

export default function RedakcePage() {
  const [activeCategory, setActiveCategory] = useState("Vše");

  const filtered =
    activeCategory === "Vše"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            title="Redakce"
            subtitle="Články, rozhovory, reportáže a postřehy z naší tvorby."
          />
        </motion.div>

        {/* Horizontal scrollable category nav */}
        <div className="flex gap-3 mb-12 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-[#E8B84B] text-[#0F0F0F]"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-[#E8B84B]/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured article */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <ArticleCard
              variant="featured"
              {...featured}
              href={`/clanky/${featured.slug}`}
            />
          </motion.div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <ArticleCard
                variant="standard"
                {...article}
                href={`/clanky/${article.slug}`}
              />
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 py-16">
            V této kategorii zatím nemáme žádné články.
          </p>
        )}
      </div>
    </div>
  );
}
