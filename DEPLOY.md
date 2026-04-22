# Deploying Namaste Journeys to Vercel

You have three ways to push the latest code live. Pick whichever fits your workflow — the first one (GitHub → Vercel) is what you want once everything is set up, because every future change deploys automatically.

## Before you deploy — one-time checklist

1. Make sure the site builds locally:
   ```
   npm install
   npm run build
   ```
   If `npm run build` succeeds, Vercel will succeed too.
2. Commit everything you want shipped. Vercel deploys from git, so anything uncommitted will not go live.
3. Confirm `next.config.js` still lists every external image host you use. Right now it allows `images.unsplash.com` and `source.unsplash.com`. If you add photos from a new domain (e.g. `images.pexels.com`), append it to `remotePatterns` or `<Image>` will 404 in production.
4. No secret env vars are required for the current feature set (Leaflet uses free Carto tiles, WhatsApp is a simple link). You can skip the "Environment Variables" step on Vercel.

---

## Option A — GitHub push (recommended, auto-deploys forever)

This is the cleanest setup. Once it's wired up, `git push` on the main branch = new production deploy. PRs get preview URLs automatically.

### First time only

1. Create a GitHub repo (public or private, both work).
2. From inside the `namaste-journeys/` folder:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-user>/namaste-journeys.git
   git push -u origin main
   ```
3. Go to https://vercel.com/new and sign in with the same GitHub account.
4. Click **Import Git Repository**, pick `namaste-journeys`, and click **Deploy**. Vercel auto-detects Next.js — no configuration needed.
5. Wait ~60–90 seconds for the first build. Vercel gives you a URL like `namaste-journeys-abc123.vercel.app`.

### Every time after that

```
git add .
git commit -m "describe what changed"
git push
```

That's it. Vercel picks up the push, builds, and swaps production over when the build is green. You'll see progress at https://vercel.com/dashboard.

---

## Option B — Vercel CLI (fastest for solo-dev workflow)

Use this if you prefer to deploy from your terminal without touching GitHub.

### First time only

```
npm install -g vercel
cd namaste-journeys
vercel login
vercel
```

The CLI walks you through four questions — accept the defaults (link to new project, scope to your account, framework auto-detected as Next.js, output dir default). It produces a *preview* URL.

### Ship to production

```
vercel --prod
```

Every subsequent `vercel --prod` overwrites production with your current local code.

---

## Option C — Dashboard drag-and-drop (no git, no CLI)

Only use this for a one-off demo. It does **not** auto-deploy future changes.

1. Run `npm run build` locally to make sure it compiles.
2. Zip the `namaste-journeys/` folder (or the whole project).
3. Go to https://vercel.com/new → **Import Project** → **Upload**.
4. Drop the zip, wait for the build, done.

---

## Attaching your real domain

When you have `namaste-journeys.com` (or whatever domain you buy):

1. Vercel dashboard → your project → **Settings** → **Domains**.
2. Type the domain, click **Add**. Vercel tells you which `A` / `CNAME` records to add at your registrar (GoDaddy, Namecheap, Cloudflare, etc.).
3. Add those records with your registrar, wait 5–30 minutes for DNS to propagate. Vercel issues the SSL cert automatically.

After the domain is attached, update `siteConfig.url` in `lib/site-config.ts` from the temporary `*.vercel.app` URL to the real one so Open Graph / SEO metadata points to the right place.

---

## If a deploy fails

The Vercel build log is the first place to look (dashboard → Deployments → click the failed one → **Build Logs**). Nine times out of ten it's one of:

- **Missing image domain** — production `<Image>` errors out with "hostname not configured". Fix: add the host to `next.config.js → images.remotePatterns`, commit, push.
- **Typescript error** — local `next build` must pass. Run `npx tsc --noEmit` first.
- **Missing file in git** — something under `public/` that's on your laptop but never got committed. Check `git status` and commit anything new.
- **Font fetch timeout** — next/font occasionally flakes on first build. Hit **Redeploy** on the same commit; it almost always passes the second time.

---

## Current status

The latest changes sitting in this folder (price in EUR, dedicated `/about/team/[slug]` founder pages, Google-Earth-style intro map, melissa.jpg placeholder) all compile clean with `npx tsc --noEmit`. They are ready to ship — pick an option above and push.
