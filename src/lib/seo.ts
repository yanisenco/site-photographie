import type { Metadata } from "next";

export const SITE_URL = "https://focusetlumiere.fr";
export const SITE_NAME = "Focus & Lumière";

interface BuildMetadataOptions {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}

/**
 * Builds page metadata (title, description, canonical, Open Graph, Twitter).
 * The preview image is intentionally omitted here: Next.js's file-based
 * `opengraph-image` convention (src/app/(app)/opengraph-image.jpg) injects
 * the correctly hashed image URL automatically, as long as no page overrides
 * `openGraph.images`/`twitter.images` itself.
 */
export function buildMetadata({
  title,
  description,
  path,
  noIndex = false,
}: BuildMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      url,
      title,
      description,
      siteName: SITE_NAME,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
