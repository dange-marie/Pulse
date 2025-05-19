# 🚀 Pulse CLI — Ton planificateur de tâches simple et efficace

Pulse est un outil **Node.js** léger et puissant qui te permet de programmer l’exécution automatique de commandes et scripts, sans prise de tête. Inspiré de `cron` mais 100% en JavaScript, Pulse te libère du temps en lançant tes tâches **en arrière-plan**, quand tu le souhaites.

---

## ✨ Pourquoi Pulse ?

* **Simple à utiliser** — ajoute ta tâche avec une ligne de commande
* **Flexible** — définis la fréquence, le jour, le mois et l’heure précisemment
* **Basé sur node-cron** — fiable et bien supporté
* **Idéal pour apprendre Node.js & cron**

---

## 🔧 Installation rapide

```bash
git clone <repo-url>
cd pulse
npm install
```

Lance Pulse depuis la racine du projet avec :

```bash
node index.js <commande>
```

---

## ⚡ Ajouter une tâche en 2 minutes chrono

```bash
node index.js add '<commande>' --every "<fréquence>" --at "<heure>"
```

### Exemples concrets :

* 💻 **Tous les lundis à 16h25**, ajoute ton PATH dans un fichier :

  ```bash
  node index.js add 'echo $PATH >> ~/pls_test.txt' --every monday --at 16:25
  ```

* 📦 **Le 15 janvier à 22h05**, lance un script de sauvegarde :

  ```bash
  node index.js add './backup.sh' --every "15 January" --at 22:05
  ```

---

## 🧩 Options disponibles

| Option    | Alias | Description                            | Exemple                |
| --------- | ----- | -------------------------------------- | ---------------------- |
| `--every` | `-e`  | Fréquence d’exécution (jour/date)      | `monday`, `15 January` |
| `--at`    | `-a`  | Heure d’exécution (format 24h)         | `16:25`                |
| `--date`  | `-d`  | Date précise (alternative à `--every`) | `15 January`           |

---

## 📅 Support complet des fréquences

* Jours de la semaine (`monday`, `tuesday`, ...)
* Dates précises (`15 January`, `22 February`, ...)
* Heures au format `HH:mm` (24h)

---

## ⚙️ Comment ça marche ?

* Ta commande + fréquence → transformé en expression cron valide
* Node-cron se charge d’exécuter la commande à l’heure prévue
* Résultats affichés dans la console, simples et clairs

---

## 🚧 Limitations & sécurité

* Prototype d’apprentissage, usage personnel recommandé
* Pas de gestion avancée des erreurs ni des permissions
* Attention aux commandes potentiellement risquées

---

## 📝 Exemple complet

```bash
node index.js add 'echo "Hello World"' --every friday --at 09:30
```

**Exécute la commande tous les vendredis à 9h30.**

---

## 🔜 Prochaines idées ?

* Interface graphique pour visualiser les tâches
* Stockage persistant des jobs (fichiers, DB)
* Gestion des logs d’exécution
* Amélioration sécurité & validation

---

## Author
Dange-Marie 🧑🏾‍💻
