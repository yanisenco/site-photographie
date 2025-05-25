// @ts-expect-error: GhostAdminAPI has no type definitions available
import GhostAdminAPI from '@tryghost/admin-api';

const api = new GhostAdminAPI({
  url: process.env.GHOST_API_URL!,
  key: process.env.GHOST_ADMIN_API_KEY!,
  version: 'v5.0',
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const tag = searchParams.get('tag');

  try {
    const posts = await api.posts.browse({
      limit: 'all',
      status: 'all',
      filter: tag ? `tag:${tag}` : undefined,
    });

    return new Response(JSON.stringify(posts), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: 'Erreur lors de la récupération des posts' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
