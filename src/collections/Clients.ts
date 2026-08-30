// src/collections/Clients.ts
import type { CollectionConfig } from 'payload'

export const Clients: CollectionConfig = {
  slug: 'clients',
  auth: true, // ✅ login client
  admin: {
    useAsTitle: 'fullName',
    group: 'Clients',
  },
  access: {
    read: ({ req }) => !!req.user, // client connecté uniquement
    create: () => true,
    update: ({ req }) => !!req.user,
    delete: () => false,
  },
  fields: [
    {
      name: 'fullName',
      label: 'Nom complet',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
    },
    {
      name: 'phone',
      label: 'Téléphone',
      type: 'text',
    },
    {
      name: 'notes',
      label: 'Notes internes',
      type: 'textarea',
      admin: {
        description: 'Visible uniquement par l’admin',
      },
    },
  ],
}
