# ’t Zaffels Koffiehuisje

Marketing + booking-request site for the zaaltje. Guests request a date; the owner approves or declines by e-mail.

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

See [docs/HANDOFF.md](docs/HANDOFF.md) for owner workflow and env setup.
