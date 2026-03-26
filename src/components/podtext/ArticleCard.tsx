"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import CategoryBadge from "./CategoryBadge";
import { formatDate } from "@/lib/data";

interface ArticleCardProps {
  variant?: "featured" | "standard" | "compact";
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
  href: string;
}

export default function ArticleCard({
  variant = "standard",
  title,
  excerpt,
  category,
  author,
  date,
  image,
  href,
}: ArticleCardProps) {
  if (variant === "featured") {
    return (
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        <Link href={href} className="group block">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#1A1A1A] rounded-xl overflow-hidden border border-[#2A2A2A] hover:border-[#E8B84B]/30 transition-colors">
            <div className="relative h-64 md:h-full overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <CategoryBadge category={category} />
              <h3
                className="mt-4 text-2xl md:text-3xl font-bold group-hover:text-[#E8B84B] transition-colors"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                {title}
              </h3>
              <p className="mt-4 text-gray-400 leading-relaxed">{excerpt}</p>
              <div className="mt-6 flex items-center gap-3 text-sm text-gray-500">
                <span>{author}</span>
                <span>&middot;</span>
                <span>{formatDate(date)}</span>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  if (variant === "compact") {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <Link href={href} className="group flex gap-4 items-start">
          <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex-1 min-w-0">
            <CategoryBadge category={category} />
            <h4
              className="mt-2 text-sm font-bold leading-tight group-hover:text-[#E8B84B] transition-colors line-clamp-2"
              style={{ fontFamily: "var(--font-heading), serif" }}
            >
              {title}
            </h4>
            <p className="mt-1 text-xs text-gray-500">{formatDate(date)}</p>
          </div>
        </Link>
      </motion.div>
    );
  }

  // Standard variant
  return (
    <motion.div
      whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(0,0,0,0.3)" }}
      transition={{ duration: 0.2 }}
      className="bg-[#1A1A1A] rounded-xl overflow-hidden border border-[#2A2A2A] hover:border-[#E8B84B]/30 transition-colors"
    >
      <Link href={href} className="group block">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <CategoryBadge category={category} />
          <h3
            className="mt-3 text-lg font-bold group-hover:text-[#E8B84B] transition-colors line-clamp-2"
            style={{ fontFamily: "var(--font-heading), serif" }}
          >
            {title}
          </h3>
          <p className="mt-2 text-sm text-gray-400 line-clamp-2">{excerpt}</p>
          <div className="mt-4 flex items-center gap-3 text-xs text-gray-500">
            <span>{author}</span>
            <span>&middot;</span>
            <span>{formatDate(date)}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
