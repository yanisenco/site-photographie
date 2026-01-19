# 🐳 Dockerisation - Site Photographie

Guide complet pour conteneuriser et déployer votre application Next.js + Payload CMS.

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
L'admin Payload CMS : **http://localhost:3000/admin**

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

#### MongoDB
- **Port** : 27017 (local seulement)
- **Username** : admin
- **Password** : À changer en production !
- **Volumes** : Données persistantes

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
PAYLOAD_SECRET=<générez-une-clé-aléatoire-forte>
MONGO_PASSWORD=<générez-un-mot-de-passe-fort>
NEXT_PUBLIC_SERVER_URL=https://votre-domaine.com
```

### Recommandations

1. **Authentification MongoDB** : Activée par défaut
2. **HTTPS** : Utilisez un reverse proxy (Nginx, Caddy)
3. **Backups** : Planifiez des sauvegardes MongoDB
4. **Secrets** : Utilisez des gestionnaires de secrets (Docker Secrets, Vault)

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

# Logs de MongoDB
docker-compose logs mongo

# Logs en temps réel avec filtrage
docker-compose logs -f app | grep ERROR

# Vérifier l'état
docker-compose ps
```

## 🛠️ Troubleshooting

### "Cannot connect to MongoDB"

```bash
# Vérifier que mongo est actif
docker-compose ps mongo

# Voir les logs de mongo
docker-compose logs mongo

# Redémarrer
docker-compose restart mongo
```

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
- [MongoDB in Docker](https://hub.docker.com/_/mongo)
- [Payload CMS Deployment](https://payloadcms.com/docs/production/deployment)

## ✅ Checklist avant production

- [ ] Variables d'environnement configurées
- [ ] PAYLOAD_SECRET généré et sécurisé
- [ ] MongoDB backup configuré
- [ ] Reverse proxy (HTTPS) en place
- [ ] Health checks testés
- [ ] Logs configurés et archivés
- [ ] Limites de ressources définies
- [ ] Politique de redémarrage vérifiée
