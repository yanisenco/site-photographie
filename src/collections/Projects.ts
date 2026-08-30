// src/collections/Projects.ts
import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },

    // ✅ RELATION AVEC CATEGORIES
    {
      name: 'categories',
      label: 'Catégories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true, // ✅ plusieurs catégories possibles
    },

    {
      name: 'cover',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
