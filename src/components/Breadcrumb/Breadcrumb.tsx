"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Breadcrumb() {
  const [breadcrumbs, setBreadcrumbs] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname; // Exemple : "/service/animaux"
      const pathSegments = path.split("/").filter((segment) => segment); // ["service", "animaux"]
      setBreadcrumbs(pathSegments);
    }
  }, []);

  return (
    <div className="pt-8 pb-2 flex items-center flex-wrap gap-2 text-[11px] tracking-[0.15em] uppercase text-foreground/40">
      <Link href="/" className="hover:text-foreground transition-colors">
        Accueil
      </Link>

      {breadcrumbs.map((segment, index) => {
        let href = "/" + breadcrumbs.slice(0, index + 1).join("/"); // Reconstruit l'URL jusqu'au segment actuel
        const isLast = index === breadcrumbs.length - 1;
        if (href === "/service") {
          href = "/services";
        }
        return (
          <div key={index} className="flex items-center gap-2">
            <span className="text-foreground/20">/</span>
            {!isLast ? (
              <Link href={href} className="hover:text-foreground transition-colors capitalize">
                {decodeURIComponent(segment)}
              </Link>
            ) : (
              <span className="capitalize text-foreground/70">{decodeURIComponent(segment)}</span>
            )}
          </div>
        );
      })}
    </div>
  );
}
