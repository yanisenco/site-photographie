interface Page {
  url: string;
  lastModified: string;
}

export async function GET(): Promise<Response> {
  // Exemple de données dynamiques (remplacez par votre propre logique)
  const dynamicPages: Page[] = [
    {
      url: "https://focusetlumiere.fr/service/portrait-studio",
      lastModified: "2024-11-20",
    },
    {
      url: "https://focusetlumiere.fr/service/portrait-exterieur",
      lastModified: "2024-11-19",
    },
    {
      url: "https://focusetlumiere.fr/service/photo-sportive",
      lastModified: "2024-11-19",
    },
  ];

  // Pages statiques
  const staticPages: Page[] = [
    { url: "https://focusetlumiere.fr/", lastModified: "2024-11-25" },
    {
      url: "https://focusetlumiere.fr/_not-found ",
      lastModified: "2024-11-15",
    },
    { url: "https://focusetlumiere.fr/pricing", lastModified: "2024-11-15" },
    {
      url: "https://focusetlumiere.fr/private-policy",
      lastModified: "2024-11-15",
    },
  ];

  const allPages: Page[] = [...staticPages, ...dynamicPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPages
        .map(
          (page: Page) => `
        <url>
          <loc>${page.url}</loc>
          <lastmod>${page.lastModified}</lastmod>
          <priority>${
            page.url === "https://focusetlumiere.fr/" ? 1.0 : 0.8
          }</priority>
        </url>
      `
        )
        .join("")}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
