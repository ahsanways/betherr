# BeTherr Landing Page

Single-page React + Vite + TypeScript + Tailwind landing website for **BeTherr**, an in-development AI-powered logistics intelligence platform.

## Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## GitHub Pages deployment

```bash
npm run deploy
```

The deploy flow uses:

- `predeploy`: `npm run build`
- `deploy`: `gh-pages -d dist`

## Vite base path

`vite.config.ts` currently uses:

```ts
base: '/'
```

For GitHub Pages project-site deployment, update it to:

```ts
base: '/REPOSITORY_NAME/'
```

Use `/` when deploying to a custom domain or root domain hosting.

## Project notes

- The site is a static single-page application with anchor navigation for easy GitHub Pages hosting.
- The pilot waitlist form is frontend-only and intentionally stores submission state locally in the browser UI for this prototype.
- Replace `contact@betherr.ai` with the real contact email before launch.
