# Namaste Journeys — India Travel Website

A production-ready Next.js 14 website for a small-group India travel business targeting international travelers. Built with the App Router, TypeScript, and Tailwind CSS.

**Tech stack**

- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS with a warm saffron / terracotta / teal palette
- Google Fonts (Fraunces + Inter)
- Formspree-ready contact form
- Auto-generated sitemap + robots.txt
- Optimized for Vercel deployment

---

## 1. Run it locally

```bash
cd namaste-journeys
npm install
npm run dev
```

Open <http://localhost:3000> in your browser. Hot reload is on — edit any file and the page updates.

> You need **Node.js 18.17 or newer**. Check with `node --version`. If needed, install from <https://nodejs.org> (LTS recommended).

---

## 2. What to customize first

Everything that identifies your business lives in a few files. Edit these, and the whole site updates.

### A. Brand, contact info, WhatsApp number

Open **`lib/site-config.ts`** and change:

```ts
name: "Namaste Journeys",               // ← your brand name
tagline: "...",
description: "...",
url: "https://your-domain.com",         // ← your live URL after deploying

email: "mangal.shikha1997@gmail.com",   // already set to your email ✅
phone: "+91 95897 39723",               // display format
phoneE164: "+919589739723",             // for tel: links
whatsappNumber: "919589739723",         // already set ✅  (no "+" — used in wa.me links)

address: "New Delhi, India",

social: {
  instagram: "https://instagram.com/yourhandle",
  facebook:  "https://facebook.com/yourpage",
  youtube:   "https://youtube.com/@yourchannel",
},
```

### B. Tours

Open **`lib/tours.ts`**. The file contains three sample tours (Spiti, Kashmir, Golden Triangle). To add/edit a tour:

1. Copy one of the existing objects in the `tours` array.
2. Update the fields: `slug`, `title`, `heroImage`, `itinerary`, `pricing`, etc.
3. Save. The site's listing page and detail page regenerate automatically.

Each tour has these key sections:

- `heroImage` / `galleryImages` — full URLs (Unsplash works out of the box; replace with your own).
- `itinerary` — an array of days; each day has `title`, `description`, `overnight`, `highlight`.
- `pricing` — array of pricing tiers in USD and INR.
- `departures` — list of upcoming dates ("June 14, 2026").
- `featured: true` — include this tour on the homepage.

### C. Home page content (testimonials, FAQs, trust points)

Open **`app/page.tsx`** and edit the arrays near the top: `testimonials`, `faqs`, `trustPoints`. Replace the placeholder testimonials with real ones as soon as you host your first group.

### D. About page

Open **`app/about/page.tsx`** and edit the founder quote, values list, and stats.

### E. Contact form (Formspree)

The contact form is wired to submit via Formspree, the simplest free email-forwarding service.

1. Go to <https://formspree.io> and sign up with `mangal.shikha1997@gmail.com`.
2. Create a new form — accept the default "basic" project.
3. Copy the endpoint URL (looks like `https://formspree.io/f/abcd1234`).
4. Open **`app/contact/page.tsx`** and replace the `FORMSPREE_ENDPOINT` constant:
   ```ts
   const FORMSPREE_ENDPOINT = "https://formspree.io/f/abcd1234";
   ```
5. Save. Every form submission will now forward to your email inbox.

(Free tier = 50 submissions/month, which is plenty to start.)

### F. Replace placeholder images

The homepage and tour pages use Unsplash images as placeholders. Once you have your own photos:

1. Create a folder `public/images/tours/` (it already exists).
2. Drop your JPEGs there: e.g., `public/images/tours/spiti-hero.jpg`.
3. In `lib/tours.ts`, change `heroImage` from the long Unsplash URL to `/images/tours/spiti-hero.jpg`.

For logo: drop `logo.svg` in `public/` and update the header to reference it, or keep the current "compass rose" SVG that's already colored to match your brand.

---

## 3. Deploy to Vercel (free, 5 minutes)

Vercel is the company that makes Next.js — this is the fastest, best-supported way to go live.

### Option A: Deploy directly from the command line

```bash
# One-time setup
npm install -g vercel

# From inside the project folder
cd namaste-journeys
vercel
```

The CLI will:
- Ask you to log in (opens your browser)
- Ask a few questions — accept all defaults
- Upload the project and give you a `*.vercel.app` URL in ~2 minutes

Run `vercel --prod` to promote the latest version to the production URL.

### Option B: Deploy via GitHub (recommended for ongoing updates)

1. Create a free GitHub account at <https://github.com> if you don't have one.
2. Create a new empty repository called `namaste-journeys`.
3. In the terminal, from inside the `namaste-journeys` folder:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/namaste-journeys.git
   git push -u origin main
   ```

4. Go to <https://vercel.com/signup> and sign in with GitHub.
5. Click **"Add New Project"** → select the `namaste-journeys` repo → click **Deploy**.
6. In ~90 seconds your site is live at a URL like `https://namaste-journeys.vercel.app`.

From now on, **every `git push` auto-deploys**. Push a new commit → site updates within a minute.

### Use your own domain (e.g., namastejourneys.com)

1. Buy a domain from Namecheap, GoDaddy, Google Domains, or any registrar.
2. In Vercel, go to your project → **Settings** → **Domains** → **Add Domain**.
3. Vercel shows you two DNS records to add at your registrar. Copy them over.
4. Within a few minutes to a few hours your domain points to your site with free HTTPS automatically.

Once your custom domain is live, **go back to `lib/site-config.ts` and update `url`** to match — this keeps the sitemap and Open Graph links correct.

---

## 4. File map

```
namaste-journeys/
├─ app/
│  ├─ layout.tsx              ← root layout (fonts, metadata, header/footer/WhatsApp)
│  ├─ page.tsx                ← Home
│  ├─ globals.css             ← Tailwind + custom button styles
│  ├─ sitemap.ts              ← auto-generated sitemap.xml
│  ├─ robots.ts               ← auto-generated robots.txt
│  ├─ tours/
│  │  ├─ page.tsx             ← all tours listing
│  │  └─ [slug]/page.tsx      ← individual tour detail page
│  ├─ about/page.tsx
│  └─ contact/page.tsx
├─ components/
│  ├─ Header.tsx              ← top nav (responsive with mobile menu)
│  ├─ Footer.tsx              ← footer + social links
│  ├─ WhatsAppButton.tsx      ← floating chat button (bottom-right)
│  └─ TourCard.tsx            ← reusable tour card for listings
├─ lib/
│  ├─ site-config.ts          ← ⭐ edit here for brand/contact info
│  └─ tours.ts                ← ⭐ edit here for tour content
├─ public/
│  └─ images/                 ← drop your own photos here
├─ next.config.js
├─ tailwind.config.ts
├─ tsconfig.json
└─ package.json
```

---

## 5. Pre-launch checklist

Before you share your site with a paying customer:

- [ ] Updated brand name, emails, WhatsApp and address in `lib/site-config.ts`
- [ ] Edited the three sample tours in `lib/tours.ts` (or deleted and replaced with your own)
- [ ] Connected the Formspree endpoint in `app/contact/page.tsx`
- [ ] Replaced sample testimonials in `app/page.tsx` (or marked them as "sample")
- [ ] Added real Instagram/Facebook/YouTube URLs in `site-config.ts`
- [ ] Deployed to Vercel and verified `https://your-site.vercel.app` loads
- [ ] Bought a custom domain and pointed it at Vercel
- [ ] Updated `url` in `site-config.ts` to your custom domain
- [ ] Replaced placeholder Unsplash images with your own photos (strongly recommended for trust)
- [ ] Added Google Analytics or Plausible (optional; not yet wired in)
- [ ] Filed for an IATO membership or equivalent credential (major trust signal for foreign travelers) and added the badge to the footer

---

## 6. Want to extend this site later?

Features I'd add next, in order of impact:

1. **Blog section** — Next.js + MDX for SEO and authority.
2. **Payment integration** — Razorpay or Stripe checkout so travelers can pay the 30% deposit online.
3. **Real bookings database** — Supabase or Airtable backend to manage inquiries.
4. **Multi-currency pricing** — detect visitor country and show EUR/GBP/USD/AUD.
5. **Google reviews integration** — pull star ratings directly from your Google Business Profile.

---

## 7. Questions?

Shikha: **mangal.shikha1997@gmail.com** · WhatsApp **+91 95897 39723**

Happy travels, and happy launching. 🌿
