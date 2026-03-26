"use client";

import { Share2, ExternalLink, Link2 } from "lucide-react";

export default function ShareButtons({ title }: { title: string }) {
  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="mt-12 pt-8 border-t border-[#2A2A2A]">
      <div className="flex items-center gap-4">
        <Share2 className="w-4 h-4 text-gray-500" />
        <span className="text-sm text-gray-500">Sdílet:</span>
        <div className="flex gap-3">
          <button
            onClick={() => {
              if (typeof window !== "undefined") {
                window.open(
                  `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(window.location.href)}`,
                  "_blank"
                );
              }
            }}
            className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center text-gray-400 hover:text-[#E8B84B] hover:border-[#E8B84B]/30 transition-colors"
            aria-label="Sdílet na Twitter"
          >
            <span className="text-xs font-bold">X</span>
          </button>
          <button
            onClick={() => {
              if (typeof window !== "undefined") {
                window.open(
                  `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
                  "_blank"
                );
              }
            }}
            className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center text-gray-400 hover:text-[#E8B84B] hover:border-[#E8B84B]/30 transition-colors"
            aria-label="Sdílet na LinkedIn"
          >
            <span className="text-xs font-bold">in</span>
          </button>
          <button
            onClick={handleCopy}
            className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center text-gray-400 hover:text-[#E8B84B] hover:border-[#E8B84B]/30 transition-colors"
            aria-label="Kopírovat odkaz"
          >
            <Link2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
