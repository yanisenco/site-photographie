# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Prisma a besoin d'OpenSSL pour générer/exécuter son moteur sur Alpine
RUN apk add --no-cache openssl

# Copier les fichiers de dépendances + le schéma Prisma (requis par postinstall -> prisma generate)
COPY package*.json ./
COPY prisma ./prisma

# Installer les dépendances
RUN npm ci --legacy-peer-deps

# Copier le code source
COPY . .

# Construire l'application
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# dumb-init pour la gestion des signaux, openssl pour le moteur Prisma
RUN apk add --no-cache dumb-init openssl

# Copier node_modules du builder (inclut le client Prisma généré et la CLI prisma)
COPY --from=builder /app/node_modules ./node_modules

# Copier les fichiers de dépendances et le schéma/migrations Prisma
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/prisma ./prisma

# Copier les fichiers construits
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Créer un utilisateur non-root
RUN addgroup -g 1001 -S nodejs && \
  adduser -S nextjs -u 1001

# Changer vers l'utilisateur non-root
USER nextjs

# Variables d'environnement
ENV NODE_ENV=production
ENV PORT=3000

# Exposer le port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/api/health', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

# Utiliser dumb-init pour lancer l'application
ENTRYPOINT ["dumb-init", "--"]

# Applique les migrations Prisma sur la base au démarrage, puis lance le serveur
CMD ["sh", "-c", "npx prisma migrate deploy && npm start"]
