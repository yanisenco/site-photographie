# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm ci --legacy-peer-deps

# Copier le code source
COPY . .

# Construire l'application
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Installer dumb-init pour une gestion correcte des signaux
RUN apk add --no-cache dumb-init

# Copier node_modules du builder
COPY --from=builder /app/node_modules ./node_modules

# Copier les fichiers de dépendances
COPY --from=builder /app/package*.json ./

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
CMD ["npm", "start"]
