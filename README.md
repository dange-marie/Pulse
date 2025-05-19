Pulse CLI
Pulse est un petit outil en ligne de commande Node.js qui te permet de planifier facilement l’exécution de scripts ou commandes via une syntaxe simple, en utilisant node-cron en arrière-plan.

Fonctionnalités
Planifie l’exécution de commandes à une fréquence donnée (--every)

Choisis l’heure précise d’exécution (--at)

Supporte des expressions simples pour les jours, mois, dates, etc.

Validation automatique de la syntaxe cron

Exécution des commandes planifiées en tâche de fond via node-cron

Installation
Clone ce dépôt puis installe les dépendances :

bash
Copy
Edit
git clone <repo-url>
cd pulse
npm install
Tu peux ensuite lancer la CLI avec :

bash
Copy
Edit
node index.js <command>
Usage
Ajouter une tâche planifiée
bash
Copy
Edit
node index.js add '<commande>' --every "<fréquence>" --at "<heure>"
Exemples :

Exécuter echo $PATH tous les lundis à 16:25 :

bash
Copy
Edit
node index.js add 'echo $PATH >> ~/pls_test.txt' --every monday --at 16:25
Exécuter ./backup.sh le 15 janvier à 22:05 :

bash
Copy
Edit
node index.js add './backup.sh' --every "15 January" --at 22:05
Options
Option	Alias	Description	Format attendu
--every	-e	Fréquence d'exécution (jour de la semaine ou date)	monday, 15 January
--at	-a	Heure d'exécution	HH:mm (ex : 16:25)
--date	-d	Date spécifique (alternative à --every)	15 January

Syntaxe supportée
Jours de la semaine : monday, tuesday, wednesday, ...

Dates précises : 15 January, 22 February, etc.

Heures au format 24h : HH:mm ou HH:mm:ss (seuls les minutes et heures sont utilisées)

Fonctionnement interne
La commande transforme les options en expression cron valide

La commande est programmée avec node-cron

À l’heure prévue, la commande s’exécute via child_process.exec

Les sorties sont affichées dans la console

Limitations & Sécurité
Ce projet est un prototype pour prise en main de Node.js et node-cron

Aucune gestion avancée des erreurs ou permissions

Exécute uniquement des commandes en local

Ne protège pas contre les commandes potentiellement dangereuses (à usage personnel uniquement)

Exemple complet
bash
Copy
Edit
node index.js add 'echo "Hello World"' --every friday --at 09:30
Exécute la commande tous les vendredis à 9h30.

*Author*
Dange-Marie
