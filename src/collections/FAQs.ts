// src/collections/FAQs.ts
import type { CollectionConfig } from 'payload'

export const FAQs: CollectionConfig = {
  slug: 'faqs',
  admin: {
    useAsTitle: 'question',
    group: 'Contenu',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'question',
      label: 'Question',
      type: 'text',
      required: true,
    },
    {
      name: 'answer',
      label: 'Réponse',
      type: 'richText',
      required: true,
    },
    {
      name: 'order',
      label: 'Ordre',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Plus petit = affiché en premier',
      },
    },
  ],
}
