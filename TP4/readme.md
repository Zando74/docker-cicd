# TP4 - Docker CD (Continuous Deployment) avec GitHub Actions

Ce TP vise à vous familiariser avec Docker et les concepts de CD (Continuous Deployment) en utilisant GitHub Actions. Étant donné que nous n'avons pas accès à une infrastructure de déploiement, nous allons simuler le processus de déploiement en créant une image Docker et en la poussant vers Docker Hub.

## Étape 1 : Dockeriser l'application

Dans cette étape, vous devrez dockeriser l'application du TP3. Complétez le Dockerfile et configurez-le pour construire une image Docker de l'application.

## Étape 2 : Créer un compte et un dépôt Docker Hub

Si vous n'avez pas déjà de compte Docker Hub, créez-en un. Ensuite, créez un nouveau dépôt où vous pousserez les images Docker de votre application.

## Étape 3 : Configurer les secrets GitHub

Dans cette étape, vous devrez configurer les secrets GitHub pour stocker votre nom d'utilisateur et votre mot de passe Docker Hub. Cela permettra à GitHub Actions de pousser les images vers votre dépôt Docker Hub.

## Étape 4 : Configurer l'action GitHub pour le CD

Dans cette étape, vous devrez configurer une action GitHub pour automatiser le processus de CD. Le flux de travail devrait faire ce qui suit :

- Déclencher à chaque push sur la branche principale.
- Construire une image Docker de l'application.
- Pousser l'image Docker vers votre dépôt Docker Hub.

## Étape 5 : Tester le processus de CD

Apportez une modification à votre application et poussez-la vers la branche principale. Vérifiez que l'action GitHub construit et pousse correctement une nouvelle image Docker vers votre dépôt Docker Hub.

## Étape 6 : Réflexion

Réfléchissez à la façon dont ce processus simule un processus de CD réel. Quelles seraient les prochaines étapes si vous aviez accès à une infrastructure de déploiement ? Comment pourriez-vous modifier l'action GitHub pour déployer l'application sur un serveur en direct ?