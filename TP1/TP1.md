# TP1 Docker

## Partie 1 : Prise en main Docker

### Q1 : Quelle commande affiche la version de docker installée sur votre machine ?

Réponse :

### Q2 : Quelle commande permet de lister les conteneurs ?

Réponse :

### Q3 : Quelle commande affiche les images disponibles sur la machine ?

Réponse :

### Q4 : Quelle commande lance un conteneur à partir d'une image redis en mode détaché ?

Réponse :

### Q5 : Quelle commande arrête le conteneur redis créé ?

Réponse :

### Q6 : Quelle commande affiche les conteneurs présents (en cours d'exécution et arrêtés) ?

Réponse :

### Q7 : Quelle commande permet d'arrêter tous les conteneurs ?

Réponse :

### Q8 : De la même manière, quelle commande permet de supprimer tous les conteneurs ?

Réponse :

### Q9 : Quelle commande permet de supprimer une image ubuntu sur la machine ?

Réponse :

### Q10 : Quelle commande permet de récupérer en local une image nginx 1.14-alpine ?

Réponse :

### Q11 : Quelle commande permet de lancer une image nginx 1.14-alpine et la nommer webapp ?

Réponse :

### Q12 : Quelle commande permet de supprimer toutes les images sur la machine ?

Réponse :

### Q13 : Quelle commande permet de lancer un conteneur nginx:1.14-alpine avec un mapping de port 80 dans le conteneur et 38282 dans la machine hôte ?

Réponse :

## Partie 2 : Docker images

### Q14 : Dans le fichier Dockerfile, quelle est la base image utilisée ?

Réponse :

### Q15 : Où dans le conteneur sera copié le code de l'application ?

Réponse :

### Q16 : Quand le conteneur est créer quelle commande est utilisée pour exécuter l'application ?

Réponse :

### Q17 : Quel port utilise l'application dans le conteneur ?

Réponse :

### Q18 : Quel commande créer l'image docker à partir du Dockerfile et l'appelle webapp-color ? (à partir du répertoire courant)

Réponse :

### Q19 : Quel commande execute une instance de l'image webapp-color en mappant le port 8080 au port 8282 de la machine hôte

Réponse :

### Q20 : Par quelle moyen pouvons nous connaitre la taille de l'image webapp-color ?

Réponse :

### Q21 : Que devons nous ajouter au dockerfile afin d'obtenir une image plus petite, puis quelle commande devons nous faire pour créer une nouvelle image webapp-color:lite ?

Réponse :

### Q22 : Quel commande execute une instance de l'image webapp-color:lite en mappant le port 8080 au port 8283 de la machine hôte ?

Réponse :

## Partie 3 : Variable d'environnements

### Q23 : Quel commande permet de lancer un conteneur qu'on nommera blue-app à partir de l'image précédente et en définissant la variable d'environnement APP_COLOR a bleu ?

Réponse :

### Q24 : Quel commande permet de déployer une instance de mysql nommé mysql-db en initialisant le mot de passe root à db_pass123 ?

Réponse :

## Partie 4 : Command vs Entrypoint

### Q25 : Quel commande permet de lancer une instance d'ubuntu qui execute la commande "sleep 1000" ?

Réponse :

### Q26 : Que ce passe t'il lorsque l'on combine les instructions ENTRYPOINT et CMD dans un dockerfile ?

Réponse :

## Partie 4 : Docker Storage

### Q27 : Quel commande permet de lancer une instance mysql qui partage le repertoire /opt/data sur la machine avec /var/lib/mysql dans le conteneur ?

Réponse :

### Q28 : Quel est l'intérêt d'utiliser des volumes pour nos instances de base de données ?

Réponse :

## Partie 5 : Docker Network

### Q29 : Quel commande permet de listé les réseau docker existant ?

Réponse :

### Q30 : A quoi correspondent les 3 réseaux docker par défaut (bridge, host et null) ?

Réponse :

### Q31 : Comment obtenir plus d'informations sur un réseau docker ?

Réponse :

### Q32 : Quel commande permet de lancer un conteneur se basant sur l'image alpine dans le réseau none ?

Réponse :

### Q33 : Quel commande permet de créer un réseau nommé mysql-network utilisant le driver "bridge" et allouant le sous-réseau 182.18.0.1/24 avec une gateway 182.18.0.1 ?

Réponse :

### Q34 : Quel commande permet de déployer un conteneur se basant sur l'image mysql dans le réseau mysql-network ?

Réponse :
