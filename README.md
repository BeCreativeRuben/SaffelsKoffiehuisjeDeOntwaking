# 't Zaffels Koffiehuisje

Marketing + booking-request site for the zaaltje. Guests request a date; the owner approves or declines by e-mail.

## Stack

- Next.js (App Router) + TypeScript + Tailwind
- Neon Postgres
- Resend e-mail

## Local development

```bash
npm install
cp .env.example .env.local
# fill DATABASE_URL, RESEND_API_KEY, OWNER_EMAIL, NEXT_PUBLIC_SITE_URL, ADMIN_PASSWORD
npm run dev
```

## Content editor (CMS)

Katleen (or any authorised owner) can change copy, opening hours, and occasion tags at `/admin`.

### Setup

Set the `ADMIN_PASSWORD` environment variable — this is the single password used to log in:

| Where | How |
|---|---|
| **Local** | Add `ADMIN_PASSWORD=your-secret` to `.env.local` |
| **Vercel** | Settings → Environment Variables → add `ADMIN_PASSWORD` for Production (+ Preview if desired) → redeploy |

### What can be edited

- Hero title and subtitle
- "Waar we voor staan" values (titles + text, add/remove)
- Quote text and attribution
- "Zo werkt het" steps (titles + text, add/remove)
- Occasion tags (shown on home + de-zaal pages)
- Opening hours (shown on contact page when filled in)
- "De zaal" page intro and features
- Contact page intro text

Changes are stored in the Neon database (`site_content` table) and take effect immediately.

### Features

- **Custom cursor** — warm olive dot with caramel ring, grows on interactive elements. Hidden on touch/mobile devices.
- **Smooth scroll** — CSS `scroll-behavior: smooth` for the whole page, plus JS-enhanced anchor link scrolling. Respects `prefers-reduced-motion`.

See [docs/HANDOFF.md](docs/HANDOFF.md) for owner workflow and env setup.
