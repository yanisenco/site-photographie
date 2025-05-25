// @ts-expect-error: GhostAdminAPI has no type definitions available
import GhostAdminAPI from '@tryghost/admin-api';
import { NextRequest } from 'next/server';

const api = new GhostAdminAPI({
  url: process.env.GHOST_API_URL!,
  key: process.env.GHOST_ADMIN_API_KEY!,
  version: 'v5.0',
});

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get('slug');

  if (!slug) {
    return new Response(JSON.stringify({ error: 'Slug manquant' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300, stale-while-revalidate=60',
       },
    });
  }

  try {
    const page = await api.pages.read(
      { slug },
      { formats: ['html'] }
    );

    return new Response(JSON.stringify(page), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: 'Erreur lors de la récupération de la page' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
