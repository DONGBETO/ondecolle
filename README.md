# Ensemble, on décolle — site web

Site du mouvement citoyen **« Ensemble, on décolle »** (Fondation Habib), construit avec Next.js 16 (App Router), React 19, Tailwind CSS 4 et Framer Motion.

## Démarrage en local

```bash
npm install
cp .env.example .env.local   # puis renseigner les valeurs
npm run dev
```

Ouvrir http://localhost:3000.

## Scripts

| Commande        | Rôle                                   |
| --------------- | -------------------------------------- |
| `npm run dev`   | Serveur de développement (Turbopack)   |
| `npm run build` | Build de production                    |
| `npm run start` | Lance le build de production           |
| `npm run lint`  | Vérifie le code avec ESLint            |

## Variables d'environnement

Voir `.env.example`.

| Variable               | Obligatoire | Description |
| ---------------------- | ----------- | ----------- |
| `EMAIL_USER`           | oui         | Compte Gmail qui envoie les messages du formulaire de contact |
| `EMAIL_PASS`           | oui         | **Mot de passe d'application** Gmail (pas le mot de passe du compte) |
| `EMAIL_RECEIVER`       | non         | Adresse qui reçoit les messages (défaut : `EMAIL_USER`) |
| `NEXT_PUBLIC_SITE_URL` | recommandé  | URL publique du site, pour le SEO et les aperçus de partage |
| `NEXT_PUBLIC_GA_ID`    | non         | ID Google Analytics 4 (défaut : `G-QNVS3YYHHR`) |

## Déploiement (Vercel)

1. Pousser le code sur GitHub (`main`).
2. Sur https://vercel.com/new, importer le dépôt `DONGBETO/ondecolle` (framework détecté automatiquement : Next.js).
3. Dans **Settings → Environment Variables**, ajouter les variables ci-dessus.
4. Déployer. Chaque push sur `main` redéploie automatiquement.
5. (Optionnel) **Settings → Domains** : ajouter le nom de domaine, puis mettre à jour `NEXT_PUBLIC_SITE_URL`.

## Organisation

```
src/
  app/          Pages (App Router) et route API /api/contact
  components/   Composants d'interface
  config/       site.ts — nom, URL, contacts, réseaux sociaux, liens du menu
  data/         Contenu : articles, évènements, projets, bibliothèque, équipe
  lib/          Google Analytics
public/assets/  Images, logos et PDF
design/         Fichiers sources de design (non publiés)
```

Pour ajouter un article, un évènement ou un projet, il suffit de modifier le fichier correspondant dans `src/data/`.

> ⚠️ L'hébergement est sous Linux : les noms de fichiers sont **sensibles à la casse**. Un chemin `/assets/images/photo.jpg` ne trouvera pas `photo.JPG`.
