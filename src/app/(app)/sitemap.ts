import type { MetadataRoute } from "next";
import { SERVICES } from "@/data/services";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/a-propos`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/portfolio`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/vos-photos`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/mentions-legales`, changeFrequency: "yearly", priority: 0.1 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((svc) => ({
    url: `${SITE_URL}/service/${svc.id}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
