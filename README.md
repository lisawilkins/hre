# Home Run Electric — Website

Marketing and lead-generation site for Home Run Electric, a licensed electrical contractor in Western Washington.

## Tech Stack

- **Framework:** React 19 + Vite 8
- **Routing:** React Router v7 (SPA, client-side)
- **Spam protection:** Cloudflare Turnstile (`@marsidev/react-turnstile`)
- **Styling:** Inline styles with a theme system (`src/data/themes.js`)
- **Linting:** ESLint 9
- **Deployment:** Netlify (auto-deploy from `master` on GitHub)
- **Repo:** github.com/lisawilkins/hre

## Local Development

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env` and set your Cloudflare Turnstile site key:

```
VITE_TURNSTILE_SITE_KEY=your_key_here
```

Use `1x00000000000000000000AA` as the key in development — Cloudflare's test key that always passes.

## Build & Preview

```bash
npm run build      # outputs to /dist
npm run preview    # serves the built output locally
```

## Deploy

Netlify auto-deploys on push to `master`. Build config is in `netlify.toml`:
- Build command: `npm run build`
- Publish directory: `dist`

SPA routing is handled by `public/_redirects`.

## Project Structure

```
src/
  components/
    forms/      # BookForm (with Turnstile)
    home/       # Homepage sections
    layout/     # Nav, Footer, EmergencyBar
    seo/        # Page meta helpers
    ui/         # Shared primitives (Button, Badge, Section, etc.)
  data/         # Content and theme definitions
  hooks/        # useBreakpoint
  pages/        # One file per route
```
