# Janet Lohse Web

Website for Janet Lohse: author, designer, speaker, and consultant. The site presents her talks, services, book, media presence, background, and contact flow.

## Project Context

This is a static-export Next.js app intended for deployment from GitHub and Firebase Hosting.

- Framework: Next.js 16 App Router
- Language: TypeScript
- UI: React components with local design-system tokens
- Hosting target: Firebase Hosting
- Static output: `out/`
- Production domain: `janetlohse.com`

## Main Sections

- `/` - Home page with hero, services, talks, book, and contact CTA
- `/sobre-mi` - Biography and professional background
- `/charlas` - Talks, workshops, formats, and target audiences
- `/servicios` - Service design and experience consulting
- `/libro` - "Una mesa para uno" book page
- `/medios` - Media, interviews, press, and collaborations
- `/contacto` - Contact form for talks, consulting, media, and collaborations

## Requirements

- Node.js 20+
- npm
- Firebase CLI for deployment

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build the static site:

```bash
npm run build
```

The build generates the static export in `out/`.

## Deployment

Firebase Hosting is configured in `firebase.json` to publish the `out/` directory.

Deploy manually:

```bash
npm run deploy
```

Or run the steps separately:

```bash
npm run build
firebase deploy --only hosting
```

The Firebase project alias is configured in `.firebaserc`:

```json
{
  "projects": {
    "default": "janetlohse-com"
  }
}
```

## GitHub Setup

Recommended repository contents are this `janetlohse-web` directory, including:

- `src/` for app pages, components, and styles
- `public/images/` for site imagery
- `public/fonts/` for brand fonts
- `firebase.json` and `.firebaserc` for hosting deployment
- `next.config.ts` with static export settings

Generated folders such as `.next/`, `out/`, and `node_modules/` are ignored and should not be committed.

## Contact Form

The contact form currently posts to a placeholder Formspree endpoint:

```ts
https://formspree.io/f/YOUR_FORM_ID
```

Before production use, replace `YOUR_FORM_ID` in `src/components/ContactForm.tsx` with the real Formspree form ID or swap in the preferred backend endpoint.

## Assets And Styling

The visual system uses local CSS tokens under `src/styles/tokens/` and brand assets under `public/`.

Important asset paths:

- `public/images/` - Janet portraits and book cover
- `public/fonts/` - local font files used by the theme
- `src/styles/globals.css` - global layout, font loading, and responsive helpers

## Verification

Current deployment verification command:

```bash
npm run build
```

This should complete successfully and generate all static routes before deployment.
