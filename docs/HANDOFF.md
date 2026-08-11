# Handoff — ’t Zaffels Koffiehuisje

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

## Environment setup

Copy `.env.example` → `.env.local` (local) and set the same vars in the Vercel project:

| Variable | Purpose |
|---|---|
| `DATABASE_URL` | Neon Postgres connection string |
| `RESEND_API_KEY` | Resend API key |
| `FROM_EMAIL` | Sender (verify domain in Resend for production) |
| `OWNER_EMAIL` | Where approve/decline mails go |
| `NEXT_PUBLIC_SITE_URL` | Public site URL, no trailing slash |
| `NEXT_PUBLIC_PHONE` | Optional phone on contact page |
| `NEXT_PUBLIC_ADDRESS` | Optional address on contact page |

Optional: run `db/schema.sql` in the Neon SQL editor (the app also creates the table on first request).

## Soft-launch checklist

- [ ] Neon DB connected in Vercel
- [ ] Resend key set; send a test booking to yourself
- [ ] Approve link works → guest “bevestiging” mail
- [ ] Decline link works → guest “niet bevestigd” mail
- [ ] Replace placeholder copy/address/phone with real client details
- [ ] Add real photos of the zaal on Home / De zaal
- [ ] Point custom domain when ready

## Content still needed from the client

- Photos of the zaal
- Exact address, phone, public e-mail
- Opening / availability notes if she wants them public
