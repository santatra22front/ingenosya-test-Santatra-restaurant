## Front End
J'ai utiliser [Angular CLI](https://github.com/angular/angular-cli) version 12.2.10.

Étant donné que ce soit mon premier projet avec Angular, je n'ai pas pu terminer le projet car il m'a fallu d'abord apprendre plusieurs points sur Angular. Je suis occupé trop long temps dans la coté front end car j'ai rencontré des problemes sur l'utilisation du Angular Material que vous avez indiquer.

## Mon Modules
J'ai utilisé 4 modules 
-  Repas qui comporte 3 components ajoute-repas ,modifier-repas (j'ai fait juste afficher le contenu au repas) 

- Ingrédient qui comporte 3 components ajoute-ingredient, list-ingredient (j'ai fait juste afficher le contenu au ingredient).

- Client qui comporte 1 component Index juste pour l'affichage des Menus disponible pour les clients, c'est d'ailleurs la première interface afficher 

- Commande qui comporte 2 components


4 liens :
- admin pour l'interface admin

- Repas page pour les repas et aussi la possibilité d'en créer une autre pour les admins.

- Commandes.

- Ventes pous les clients

- Ingredients pour voir les liste d'ingredients

Pour faciliter la navigation des admins, j'ai mis des liens de navigation.


## Back End
J'ai utilisé <p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
</p>

3 Models:
- Repas : pour la table repas (Create et Read)

- Ingredients : pour la table Ingrédients (Create et Read)

- Commandes : pour la table commandes (Create et Read)

3 API/Controller pour créer ces fonctions pour chaque Models
et les routes API pour la liaison Angular/laravel pour que Angular utilise les API/Controller de mon code PHP(Laravel)

## conception.sql

4 tables
- repas
- ingredients
- clients
- commandes
