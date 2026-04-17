"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import CategoryBadge from "./CategoryBadge";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  videoUrl?: string;
}

export default function ProjectCard({
  title,
  category,
  description,
  image,
  videoUrl,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(0,0,0,0.3)" }}
      transition={{ duration: 0.2 }}
      className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#E8B84B]/30 transition-colors cursor-pointer"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
        {/* Play button */}
        {videoUrl && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-[#E8B84B] rounded-full flex items-center justify-center shadow-lg shadow-[#E8B84B]/30 group-hover:scale-110 transition-transform">
              <Play className="w-7 h-7 text-gray-900 ml-1" fill="currentColor" />
            </div>
          </div>
        )}
      </div>
      <div className="p-6">
        <CategoryBadge category={category} />
        <h3
          className="mt-3 text-lg font-bold group-hover:text-[#E8B84B] transition-colors"
          style={{ fontFamily: "var(--font-heading), serif" }}
        >
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{description}</p>
      </div>
    </motion.div>
  );
}
