# Saffels koffiehuisje – De Ontwaking

Concept **Blauwe luiken**: a new site for the koffiehuisje in Zaffelare. Guests send a date request; the owner approves or declines by e-mail. No online payment.

## Stack

- Next.js (App Router) + TypeScript + Tailwind
- Neon Postgres
- Resend e-mail

## Local development

```bash
npm install
cp .env.example .env.local
# fill DATABASE_URL, RESEND_API_KEY, OWNER_EMAIL, NEXT_PUBLIC_SITE_URL
npm run dev
```

The public phone number is the one on the roadside sign. Address, opening hours and e-mail stay marked as placeholders until `NEXT_PUBLIC_ADDRESS`, `NEXT_PUBLIC_OPENING_HOURS` or `NEXT_PUBLIC_CONTACT_EMAIL` is set.

Photos in `public/photos` are resized real photos from the public asset repo. Do not add the AI `hf-*` images.

The site sends `noindex` until it is ready to be found.

See [docs/HANDOFF.md](docs/HANDOFF.md) for the booking workflow.
