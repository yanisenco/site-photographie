/* eslint-disable @typescript-eslint/no-explicit-any */
import 'server-only'
import { getPayload } from './getPayload'

export type PostPreview = {
  title: string
  content: any
  cover: {
    url: string
    alt?: string
  } | null
}

export async function getPosts() {
  const payload = await getPayload()

  const { docs } = await payload.find({
    collection: 'posts' as any,
    depth: 1, 
    sort: '-publishedAt',
  })


  const posts: PostPreview[] = docs.map((doc) => ({
    title: doc.title,
    content: doc.content,
    cover: doc.cover
      ? {
          url: doc.cover.url,
          alt: doc.cover.alt,
        }
      : null,
  }))

  return posts
}
