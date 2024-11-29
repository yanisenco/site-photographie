"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Breadcrumb() {
  const [breadcrumbs, setBreadcrumbs] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname; // Exemple : "/services/detail"
      const pathSegments = path.split("/").filter((segment) => segment); // ["services", "detail"]
      setBreadcrumbs(pathSegments);
    }
  }, []);

  return (
    <div className="pt-4 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
      {/* Accueil */}
      <Link href="/#accueil" className="hover:underline">
        Accueil
      </Link>
      <span>/</span>

      {/* Breadcrumb dynamique */}
      {breadcrumbs.map((segment, index) => {
        let href = "/" + breadcrumbs.slice(0, index + 1).join("/"); // Reconstruit l'URL jusqu'au segment actuel
        const isLast = index === breadcrumbs.length - 1; // Vérifie si c'est le dernier élément
        if (href === "/service") {
            href = "/#service";
          }
        return (
          <div key={index} className="flex items-center space-x-2">
            {!isLast ? (
              <Link href={href} className="hover:underline capitalize">
                {decodeURIComponent(segment)} {/* Décodage pour gérer les espaces, accents */}
              </Link>
            ) : (
              <span className="capitalize">{decodeURIComponent(segment)}</span>
            )}
            {!isLast && <span>/</span>}
          </div>
        );
      })}
    </div>
  );
}
