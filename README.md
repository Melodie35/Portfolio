<div align="center">

# OpenClassrooms - P12-testeur-logiciel-portfolio
</div>

<p align="center">
    <img src="https://img.shields.io/badge/Cypress-v14.5.4-blue">
    <img src="https://img.shields.io/badge/NodeJs-v23.7.0-green">
    <img src="https://img.shields.io/badge/npm-v11.6.0-green">
  <br><br><br>
</p>

# Prérequis
Pour les tests automatisés, vous devez avoir l'applicatif suivant :
- NodeJs
- Cypress

# Installation et démarrage
Clonez le projet pour le récupérer
``` 
git clone https://github.com/OpenClassrooms-Student-Center/Eco-Bliss-Bath-V2.git
cd Eco-Bliss-Bath-V2
```

# Pour lancer les tests automatisés avec Cypress
### Installer Cypress
```
npm install cypress --save-dev
```
Configurer Cypress
```
npx cypress open
```  
Ouverture du **launchpad** de Cypress :   
* Cliquer sur "E2E Testing"
* Cliquer sur "Continue"  
* Sélectionner votre browser préféré

### Exécuter les tests
Via le launchpad
```
npx cypress open
```
* Cliquer sur "Start E2E Testing"
* Sélectionner le script à tester

Générer le rapport de test
```
npx cypress run
```
