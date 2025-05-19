---

# 🚀 Pulse CLI — Planificateur de tâches cron simple en Node.js

Pulse est un module Node.js qui te permet de planifier l’exécution automatique de commandes ou scripts avec une syntaxe intuitive, basée sur node-cron.

---

## ✨ Pourquoi Pulse ?

* Simple à installer et à utiliser
* Permet de planifier facilement tes tâches avec une syntaxe flexible
* Parfait pour apprendre à manipuler cron en Node.js
* Fonctionne via la commande `pls` en CLI, pour un usage rapide

---

## 🔧 Installation & utilisation

1. Clone ce dépôt et installe les dépendances :

```bash
git clone <repo-url>
cd pulse
npm install
```

2. Crée un lien global pour utiliser la commande `pls` :

```bash
npm link
```

3. Teste la commande `pls` directement dans ton terminal :

```bash
pls add '<commande>' --every "<fréquence>" --at "<heure>"
```

---

## ⚡ Ajouter une tâche facilement

```bash
pls add '<commande>' --every "<fréquence>" --at "<heure>"
```

### Exemples

* Exécuter une commande tous les lundis à 16h25 :

```bash
pls add 'echo $PATH >> ~/pls_test.txt' --every monday --at 16:25
```

* Lancer un script le 15 janvier à 22h05 :

```bash
pls add './backup.sh' --every "15 January" --at 22:05
```

---

## 🧩 Options disponibles

| Option    | Alias | Description                            | Exemple                |
| --------- | ----- | -------------------------------------- | ---------------------- |
| `--every` | `-e`  | Fréquence d’exécution (jour ou date)   | `monday`, `15 January` |
| `--at`    | `-a`  | Heure d’exécution (format 24h)         | `16:25`                |
| `--date`  | `-d`  | Date précise (alternative à `--every`) | `15 January`           |

---

## 📅 Support complet des fréquences

* Jours de la semaine (`monday`, `tuesday`, …)
* Dates précises (`15 January`, `22 February`, …)
* Heure au format 24h (`HH:mm`)

---

## ⚙️ Fonctionnement

* La commande et sa fréquence sont converties en expression cron valide
* node-cron exécute la tâche automatiquement au bon moment
* Les sorties et erreurs sont affichées dans la console

---

## 🚧 Limitations & sécurité

* Projet pour apprendre, usage personnel recommandé
* Pas de gestion avancée des erreurs ni permissions
* Attention aux commandes pouvant être risquées

---

## 📜 Licence

MIT — libre à toi de contribuer et personnaliser !

---

## Author
Dange-Marie 🧑🏾‍💻
