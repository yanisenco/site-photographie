# 🐳 Dockerisation - Site Photographie

Guide complet pour conteneuriser et déployer l'application Next.js.

## 📋 Prérequis

- Docker Desktop installé ([https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop))
- Docker Compose (inclus avec Docker Desktop)
- Au minimum 4 GB de RAM disponible

## 🚀 Démarrage rapide

### 1. Configuration des variables d'environnement

```bash
# Copier le fichier exemple
cp .env.example .env.local

# Éditer avec vos valeurs (important en production !)
```

### 2. Lancer l'application

```bash
# Démarrer les services
docker-compose up -d

# Voir les logs
docker-compose logs -f app

# Arrêter
docker-compose down
```

L'application sera accessible à : **http://localhost:3000**

## 📦 Structure Docker

### Dockerfile (Multi-stage build)

- **Stage 1 (Builder)** : Construit l'application Next.js
- **Stage 2 (Production)** : Image minimale avec seulement les fichiers nécessaires

**Avantages** :
- Image finale réduite (~300 MB au lieu de 1+ GB)
- Pas de code source ou dépendances de build en production
- Sécurité renforcée

### Services Docker Compose

#### App (Next.js)
- **Port** : 3000
- **User** : Non-root (nextjs)
- **Health check** : Intégré

## 🔧 Commandes utiles

```bash
# Voir les logs en temps réel
docker-compose logs -f app

# Accéder au shell du conteneur
docker-compose exec app sh

# Reconstruire l'image
docker-compose build --no-cache

# Afficher l'utilisation des ressources
docker stats

# Nettoyer les volumes (ATTENTION : supprime les données !)
docker-compose down -v

# Redémarrer un service
docker-compose restart app
```

## 🔐 Configuration de Production

### Variables critiques à changer

```env
NEXT_PUBLIC_SERVER_URL=https://votre-domaine.com
```

### Recommandations

1. **HTTPS** : Utilisez un reverse proxy (Nginx, Caddy)
2. **Secrets** : Utilisez des gestionnaires de secrets (Docker Secrets, Vault)

## 🌐 Déploiement

### Option 1 : VPS/Serveur dédié

```bash
# 1. SSH sur votre serveur
ssh user@your-server

# 2. Cloner le repo
git clone your-repo
cd site-photographie

# 3. Configurer les variables
nano .env.local

# 4. Lancer
docker-compose up -d

# 5. (Optionnel) Ajouter Nginx comme reverse proxy
```

### Option 2 : Services gérés

- **Render** : Support Docker natif
- **Railway** : Déploiement simple
- **DigitalOcean App Platform** : Facile à configurer
- **Fly.io** : Déploiement global

## 📊 Monitoring et Logs

```bash
# Logs du conteneur app
docker-compose logs app

# Logs en temps réel avec filtrage
docker-compose logs -f app | grep ERROR

# Vérifier l'état
docker-compose ps
```

## 🛠️ Troubleshooting

### "Port 3000 already in use"

```bash
# Changer le port dans docker-compose.yml
ports:
  - "8080:3000"  # Accès via http://localhost:8080
```

### Images de grande taille

```bash
# Nettoyer les images non utilisées
docker image prune -a

# Afficher l'utilisation disque
docker system df
```

## 📚 Ressources

- [Documentation Docker](https://docs.docker.com/)
- [Documentation Next.js Deployment](https://nextjs.org/docs/deployment)

## ✅ Checklist avant production

- [ ] Variables d'environnement configurées
- [ ] Reverse proxy (HTTPS) en place
- [ ] Health checks testés
- [ ] Logs configurés et archivés
- [ ] Limites de ressources définies
- [ ] Politique de redémarrage vérifiée
