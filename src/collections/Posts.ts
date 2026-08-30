// src/collections/Posts.ts
import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    group: 'Contenu',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Titre',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'excerpt',
      label: 'Extrait',
      type: 'textarea',
    },
    {
      name: 'content',
      label: 'Contenu',
      type: 'richText',
      required: true,
    },
    {
      name: 'cover',
      label: 'Image de couverture',
      type: 'upload',
      relationTo: 'media',
    }
  ],
}
