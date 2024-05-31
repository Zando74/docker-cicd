# TP Docker Compose : Déploiement d'une application Node.js avec PostgreSQL et Kubernetes

## Objectif

L'objectif de ce TP est de déployer une application Node.js conteneurisée qui se connecte à une instance PostgreSQL, en utilisant Kubernetes. L'application doit implémenter une route qui affiche une information prouvant la connexion réussie à la base de données.

### Étape 1 : Création du Dockerfile

1. Partir d'une image node:20.
2. Copier les fichiers index.js et package.json dans le conteneur.
3. Éxecuter "npm install" pour installer les dépendances nécéssaires.
4. Exposer le port 3000.
5. Éxécuter la commande "npm start" au démarrage du conteneur.

### Étape 2 : Créez un fichier docker-compose.yml

1. Utilise l'image de l'application depuis le dockerfile.
2. Mappez le port 3000 du conteneur avec le port 3000 de la machine hôte.
3. Créez un conteneur à partir de postgres:13.
4. Les variables d'environnements POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB doivent être définies.

### Étape 3 : Démarrez les services avec Docker Compose

### Étape 4 : Accédez à l'URL http://localhost:3000 et assurez-vous d'avoir la bonne information.

## Bonus

### Étape 5 : Installation de Kubernetes avec Minikube

1. Installez Minikube en suivant les instructions spécifiques à votre système d'exploitation. Vous pouvez trouver les instructions d'installation sur le site officiel de Minikube.
2. Une fois Minikube installé, exécutez la commande `minikube start` pour démarrer votre cluster Kubernetes local.
3. Vérifiez que votre cluster est en cours d'exécution en exécutant la commande `kubectl cluster-info`.

### Étape 6 : Déploiement de l'application sur Kubernetes

1. Créez les fichiers de configuration Kubernetes nécessaires pour déployer votre application. Vous pouvez utiliser des fichiers YAML pour définir les déploiements, les services, etc.
2. Utilisez la commande `kubectl apply -f <fichier>` pour déployer vos ressources Kubernetes.
3. Vérifiez que vos déploiements sont en cours d'exécution en exécutant la commande `kubectl get deployments`.
4. Accédez à l'URL correspondante pour votre application déployée sur Kubernetes.

