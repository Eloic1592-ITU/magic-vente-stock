# 📖 Guide de Conventions - Projet React "Magic Vente Stock"

## 🔍 Objectif

Ce guide donne les **conventions de code** pour garder un code propre, lisible et maintenable dans le projet.

---

## 📂 Structure des Dossiers

```
/src
  /assets          # Images, icônes, fonts
  /components      # Composants réutilisables (Button, Navbar, Card, etc.)
  /pages           # Pages principales (Login, Home, Dashboard, etc.)
  /hooks           # Hooks personnalisés (useAuth, useUser)
  /services        # Appels API (api.js, authService.js)
  /context         # Gestion des états globaux (AuthContext, ThemeContext)
  App.jsx          # Racine de l'application
  main.jsx         # Point d'entrée (ReactDOM)
  index.css        # TailwindCSS + DaisyUI
```

---

## 🔢 Nommage

### 📚 Dossiers et Fichiers

* Utiliser **kebab-case** pour les noms de dossiers.

  * Exemple : `components/`, `pages/`, `user-profile/`

* Utiliser **PascalCase** pour les composants React et leurs fichiers.

  * Exemple : `LoginPage.jsx`, `Navbar.jsx`

### 📜 Fonctions et Variables

* Utiliser **camelCase** pour les noms de fonctions et de variables.

  * Exemple : `handleLogin()`, `userProfile`, `fetchUserData()`

* Utiliser **UPPER\_SNAKE\_CASE** pour les constantes globales.

  * Exemple : `API_BASE_URL`

### 🌐 Routes

* Nommer les routes en **kebab-case**.

  * Exemple : `/login`, `/user-profile`, `/dashboard`

---

## 📊 Composants

* Un composant = un fichier.
* Nommage en **PascalCase**.
* Toujours exporter par défaut.

```jsx
// Correct :
export default function LoginForm() { ... }
```

* Composants simples (UI seulement) dans `/components`.
* Pages (liées à une route) dans `/pages`.

---

## 🤝 Context API

* 1 contexte = 1 fichier dans `/context/`.

* Nommer le contexte avec le suffixe `Context`.

  * Exemple : `AuthContext.jsx`

* Créer un hook personnalisé pour consommer le contexte.

```jsx
export const useAuth = () => useContext(AuthContext);
```

---

## 🔧 Hooks personnalisés

* Dossier `/hooks`.
* Nommer les hooks avec le préfixe `use`.

  * Exemple : `useUser.js`, `useLoginForm.js`

---

## 🌐 Services API

* Dossier `/services`.
* Fichier API : `api.js` pour configurer Axios.
* Services spécifiques : `authService.js`, `userService.js`.

Fonction par action :

```js
export const loginUser = (data) => api.post('/login', data);
export const fetchProfile = () => api.get('/profile');
```

---

## 🎨 Style (CSS)

* Utiliser **TailwindCSS** et **DaisyUI** pour le style.
* Ne pas utiliser de fichiers CSS personnalisés sauf énorme besoin.
* Les classes doivent être lisibles et pas trop longues.

```jsx
// Correct
<button className="btn btn-primary w-full">Se connecter</button>
```

---

## 🔢 Bonnes pratiques

* Préférer les **fonctions fléchées**.
* Toujours typé les props (si TypeScript est ajouté plus tard).
* Créer des composants petits et réutilisables.
* Toujours écrire des messages de commit clairs :

  * `feat: Ajout de la page de login`
  * `fix: Correction du bug sur la connexion`

---

## 📚 Nomenclature des Branches Git

* `main` : Branche principale pour la production.
* `develop` : Branche de développement pour merger les fonctionnalités en cours.
* `front-[nom]` : Branche pour le développement frontend.
* `feature-[nom]` : Branche pour les dev integrateur.

  * Exemple : `feature-authentication`, `feature-stock-management`

**Règles :**

* Toujours créer une branche à partir de `develop`.
* Une fois terminée, faire une Pull Request vers `develop`.

---

## 🎉 En résumé

Gardons le code **simple**, **clair** et **cohérent**. Ce guide peut évoluer en fonction des besoins du projet !

---

**Bonne contribution ✨**
