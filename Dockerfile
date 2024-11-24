# Utiliser une image de base Node.js
FROM node:14

# Créer un répertoire pour l'application
WORKDIR /app

# Copier les fichiers dans le conteneur
COPY . .

# Installer http-server pour servir les fichiers statiques
RUN npm install -g http-server

# Exposer le port sur lequel l'application écoutera
EXPOSE 8080

# Commande pour démarrer le serveur
CMD ["http-server", ".", "-p", "8080"]