export async function getGhostMeta(slug: string) {
    const url = `${process.env.GHOST_API_URL}/ghost/api/content/pages/slug/${slug}/?key=${process.env.GHOST_CONTENT_API_KEY}`;
    const res = await fetch(url);
  
    if (!res.ok) {
      throw new Error(`Erreur HTTP : ${res.status} – ${url}`);
    }
  
    const data = await res.json();
    console.log('Réponse Ghost CMS:', data);
  
    if (!data.pages || data.pages.length === 0) {
      throw new Error(`Aucune page trouvée pour "${slug}". Réponse : ${JSON.stringify(data)}`);
    }
  
    const page = data.pages[0];
    return {
      title: page.meta_title || page.title,
      description: page.meta_description,
      canonical_url: page.canonical_url,
    };
  }