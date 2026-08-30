"use client";
import { useState } from "react";
import Gallery from "./Gallery";

export interface PortfolioImage {
  src: string;
  alt: string;
  category: string;
}

interface PortfolioGalleryProps {
  images: PortfolioImage[];
  categories: { label: string; value: string }[];
}

export default function PortfolioGallery({ images, categories }: PortfolioGalleryProps) {
  const [filter, setFilter] = useState("all");

  const visible = filter === "all" ? images : images.filter((img) => img.category === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10">
        {[{ label: "Tous", value: "all" }, ...categories].map((tab) => (
          <button
            key={tab.value}
            onClick={() => setFilter(tab.value)}
            className={`px-5 py-2 text-xs tracking-[0.18em] uppercase transition-colors ${
              filter === tab.value
                ? "bg-orange text-custom-white"
                : "border border-foreground/[0.18] text-foreground/55 hover:border-yellow hover:text-yellow"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {visible.length > 0 ? (
        <Gallery key={filter} images={visible} id={`portfolio-${filter}`} />
      ) : (
        <p className="text-foreground/40 text-sm py-16 text-center">
          Aucune photo disponible dans cette catégorie pour le moment.
        </p>
      )}
    </div>
  );
}
