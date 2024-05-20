# TP Docker Compose : Déploiement d'une application Node.js avec PostgreSQL

## Objectif

L'objectif de ce TP est de déployer une application Node.js conteneurisée qui se connecte à une instance PostgreSQL. L'application doit implémenter une route qui affiche une information prouvant la connexion réussie à la base de données.

### Étape 1 : Création du Dockerfile

1. Partir d'une image node:20.
2. Copier les fichiers index.js et package.json dans le conteneur.
3. Éxecuter "npm install" pour installer les dépendances nécéssaires.
4. Exposer le port 3000.
5. Éxécuter la commande "npm start" au démarrage du conteneur.

### Étape 2 : Créez un fichier docker-compose.yml

1. Utilise l'image de l'application depuis le dockerfile.
2. mappe le port 3000 du conteneur avec le port 3000 de la machine hôte.
3. Créer un conteneur à partir de postgres:13.
4. Les variables d'environnements POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB doivent être définis.

### Étape 3 : Démarrez les services avec Docker Compose

### Étape 4 : Accédez à l'URL http://localhost:3000 et assurer vous d'avoir la bonne information.
