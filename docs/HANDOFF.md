# Handoff — ’t Zaffels Koffiehuisje

## Live URLs

- Production: https://saffels-koffiehuisje.vercel.app
- GitHub: https://github.com/BeCreativeRuben/SaffelsKoffiehuisjeDeOntwaking
- Vercel project: `studiothielman-projects/saffels-koffiehuisje` (GitHub repo connected)

## How bookings work (for the owner)

1. A guest fills in **Zaal aanvragen** on the website.
2. You get an e-mail with the details and two links: **Goedkeuren** / **Afwijzen**.
3. The guest immediately gets “aanvraag ontvangen”.
4. When you click a link, the guest gets approved or declined by e-mail, and you get a copy.

No admin login in v1 — use the e-mail links. Each link works once.

After approval, contact the guest yourself (mail/phone) to settle practical details. The website does not handle payments.

## How to request website changes (for Ruben ↔ client)

- No monthly fee.
- Changes (text, photos, new section, contact details): send what should change; you get an invoice for that work only.
- Hosting stays on free tiers as long as traffic stays modest; say so before any paid upgrade.

## Environment setup (required before bookings work)

Copy `.env.example` → `.env.local` (local) and set the same vars in the Vercel project (**Settings → Environment Variables**), then redeploy:

| Variable | Purpose |
|---|---|
| `DATABASE_URL` | Neon Postgres connection string |
| `RESEND_API_KEY` | Resend API key |
| `FROM_EMAIL` | Sender (verify domain in Resend for production) |
| `OWNER_EMAIL` | Where approve/decline mails go |
| `NEXT_PUBLIC_SITE_URL` | `https://saffels-koffiehuisje.vercel.app` (or custom domain later) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Optional public contact e-mail (preferred over OWNER_EMAIL for display) |
| `NEXT_PUBLIC_PHONE` | Optional phone on contact page — only shown when set |
| `NEXT_PUBLIC_ADDRESS` | Optional address — only shown when set (do not invent; Persijzerstraat only after confirmed in env) |
| `ADMIN_PASSWORD` | Password for the `/admin` content editor — lets the owner change text, hours, and occasions |

Optional: run `db/schema.sql` in the Neon SQL editor (the app also creates the table on first request).

## Soft-launch checklist

- [x] Site deployed on Vercel, linked to GitHub
- [x] Marketing pages online (Home, De zaal, Aanvragen, Contact, Bedankt)
- [ ] Neon DB connected in Vercel env
- [ ] Resend key set; send a test booking to yourself
- [ ] Approve link works → guest “bevestiging” mail
- [ ] Decline link works → guest “niet bevestigd” mail
- [ ] Set NEXT_PUBLIC_* contact env when client confirms details
- [x] Temporary zaal photos (Lochristinaar hero + sfeercrops) — swap Higgsfield stills in `src/lib/media.ts` when ready
- [ ] Point custom domain when ready
- [ ] Walk through one real request with the client

## Content still needed from the client

- Photos of the zaal
- Exact address, phone, public e-mail
- Opening / availability notes if she wants them public
