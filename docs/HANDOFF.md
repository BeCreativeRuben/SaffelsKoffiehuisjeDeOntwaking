# Handoff — Saffels koffiehuisje – De Ontwaking

Concept branch: **Blauwe luiken** (`concept-v2`). Draft only. Do not treat this as the live design until it is merged.

## Live URLs

- Production (previous site, until this concept is accepted): https://saffels-koffiehuisje.vercel.app
- GitHub: https://github.com/BeCreativeRuben/SaffelsKoffiehuisjeDeOntwaking

## How bookings work

1. A guest fills in **Aanvragen** (date, time, people, occasion, name, e-mail, phone, message).
2. The owner gets an e-mail with the details and two links: goedkeuren / afwijzen.
3. The guest immediately gets “aanvraag ontvangen”.
4. When a link is opened, the guest gets approved or declined by e-mail, and the owner gets a copy.

Each link works once. The website does not take payment. After approval, contact the guest yourself for the practical details.

## Pages

Home, De zaal, Aanbod, Aanvragen, Contact, plus bedankt and the owner bevestiging screen.

## Environment

Copy `.env.example` to `.env.local` and set the same variables in Vercel.

| Variable | Purpose |
|---|---|
| `DATABASE_URL` | Neon Postgres connection string |
| `RESEND_API_KEY` | Resend API key |
| `FROM_EMAIL` | Sender (verify the domain in Resend for production) |
| `OWNER_EMAIL` | Where new requests and decision copies go. Not shown on the site. |
| `NEXT_PUBLIC_SITE_URL` | Public URL, no trailing slash. Used in e-mail links. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Optional. Shown on Contact only when set. |
| `NEXT_PUBLIC_ADDRESS` | Optional. Shown only when set. Do not guess a street. |
| `NEXT_PUBLIC_OPENING_HOURS` | Optional. Shown only when set. |

The phone **0493 64 35 15** is on the roadside sign and is always shown.

Optional: run `db/schema.sql` in Neon. The app also creates the booking table on the first request.

## Still unknown

Street address, opening hours, public e-mail, prices, and which spelling Katleen wants as the official name. The site uses the sign: “Saffels koffiehuisje – De Ontwaking”.
