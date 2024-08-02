# SportSee - Tableau de bord d'analytics sportives

## Sommaire

- [Description](#description)
- [Technologies utilisées](#technologies-utilisées)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Configuration du backend](#configuration-du-backend)
- [Lancement de l'application](#lancement-de-lapplication)
- [Utilisation](#utilisation)
- [Fonctionnalités](#fonctionnalités)

## Description

SportSee est une application de tableau de bord pour le suivi des performances sportives. Elle offre une visualisation claire et interactive des données d'activité physique de l'utilisateur.

## Technologies utilisées

- React 18.3.1
- TypeScript 5.5.3
- Vite 5.3.4
- Bun 1.1.19
- Tailwind CSS 3.4.6
- Recharts 2.13.0-alpha.4
- React Router 6.25.1
- Axios 1.7.2

## Prérequis

- Node.js (version recommandée : 14.x ou supérieure)
- Yarn ou npm ou Bun

## Installation

1. Clonez ce dépôt :

   ```
   git clone https://github.com/D-Sriver/SportSee-Front
   ```

2. Naviguez dans le dossier du projet :

   ```
   cd sportsee-front
   ```

3. Installez les dépendances :
   ```
   npm install ou bun i
   ```

## Configuration du backend

Le backend de cette application se trouve dans un dépôt séparé. Suivez ces étapes pour le configurer :

1. Clonez le dépôt du backend :

   ```
   git clone https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard.git
   ```

2. Suivez les instructions d'installation dans le README du backend.

3. Assurez-vous que le backend fonctionne sur le port 3000.

## Lancement de l'application

1. Démarrez le serveur de développement :

   ```
   yarn dev
   ```

   ou

   ```
   npm run dev
   ```

2. Ouvrez votre navigateur et accédez à `http://localhost:5173`

## Utilisation

- Sur la page d'accueil, choisissez un utilisateur (Karl ou Cecilia).
- Explorez les différentes visualisations de données sur le tableau de bord.
- Explorez les interactions avec les graphiques et les données.

## Fonctionnalités

- Affichage des données d'activité quotidienne
- Visualisation du temps moyen des sessions
- Graphique radar des performances
- Score global de l'utilisateur
- Résumé des valeurs nutritionnelles clés
- Responsive pour petit écran
