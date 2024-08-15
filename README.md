# IT-support-App

## Contexte du Projet
En tant que développeur full stack Java/Angular chez ITSolutions, votre mission est de concevoir et développer un système de gestion des équipements informatiques. Ce système permet une gestion efficace des équipements, des pannes, et des tickets de support au sein de l'entreprise.

## User Stories

### Gestion des Équipements Informatiques
- **Ajouter des équipements** : En tant qu'administrateur IT, je veux pouvoir ajouter de nouveaux équipements informatiques au système pour suivre leur état et leur utilisation.
- **Modifier les équipements** : En tant qu'administrateur IT, je veux pouvoir modifier les informations des équipements existants pour maintenir des données à jour.
- **Supprimer des équipements** : En tant qu'administrateur IT, je veux pouvoir supprimer des équipements obsolètes ou hors service pour garder le système organisé.
- **Lister les équipements** : En tant qu'administrateur IT, je veux pouvoir voir une liste de tous les équipements avec leur état actuel pour une gestion efficace.

### Gestion et Suivi des Pannes
- **Gestion des pannes** : En tant qu'administrateur IT, je veux pouvoir gérer (ajouter, modifier, supprimer) les pannes.
- **Historique des pannes** : En tant qu'administrateur IT, je veux pouvoir consulter l'historique des pannes pour chaque équipement afin d'identifier les équipements problématiques.

### Gestion des Tickets de Support
- **Créer un ticket de support** : En tant qu'utilisateur, je veux pouvoir créer un ticket de support pour signaler une panne afin de recevoir de l'aide.
- **Attribuer des tickets** : En tant qu'administrateur IT, je veux pouvoir attribuer les tickets de support aux techniciens disponibles pour une résolution rapide.
- **Voir les tickets attribués** : En tant que technicien IT, je veux pouvoir voir les tickets qui me sont attribués pour les traiter efficacement.
- **Suivre un ticket** : En tant qu'utilisateur, je veux pouvoir suivre l'état de mon ticket de support pour savoir quand mon problème sera résolu.

### Bonus

#### Rapports et Statistiques
- **Notifications pour les tickets en attente** : En tant qu'administrateur IT, je veux recevoir des notifications pour les tickets en attente afin de ne pas manquer de demandes importantes.
- **Statistiques sur les pannes** : En tant qu'administrateur IT, je veux pouvoir voir des statistiques sur les pannes pour identifier les tendances et les problèmes récurrents.
- **Rapports sur l'état des équipements** : En tant qu'administrateur IT, je veux pouvoir générer des rapports sur l'état des équipements pour une meilleure gestion.
- **Rapports sur les performances du support** : En tant qu'administrateur IT, je veux pouvoir générer des rapports sur les performances du service de support pour améliorer l'efficacité.

## Fonctionnement

- **Historique des Pannes** : Conserve un enregistrement détaillé de toutes les pannes passées pour chaque équipement. Chaque entrée est liée à un Équipement, permettant de garder une trace des problèmes rencontrés et des réparations effectuées.
- **Tickets de Support** : Les utilisateurs créent des tickets lorsqu'ils rencontrent des problèmes avec les équipements. Chaque ticket est lié à un utilisateur spécifique, permettant de suivre qui a signalé le problème.
- **Attribution des Tickets** : Une fois créé, un ticket de support est attribué à un technicien pour résolution. Cette relation permet de suivre quel technicien est responsable et d'évaluer les performances des techniciens en fonction des tickets résolus.

## Technologies Utilisées
- **Backend** : Spring Boot, Spring Data JPA, Spring Security
- **Frontend** : Angular 16
- **Base de données** : PostgreSQL / MySQL
- **Test unitaire** : JUnit
- **Conteneurisation** : Docker

## Conception Diagrammes
- **Diagramme de Classe** :
  ![Diagramme de Classe](https://github.com/user-attachments/assets/3cedf0c3-8b1e-46b0-8f88-2e174779eb95)
  
- **Diagramme de Cas d'Utilisation** :
  ![Diagramme de Cas d'Utilisation](https://github.com/user-attachments/assets/4ae0add2-51b3-4e69-9613-731704b9a62e)
