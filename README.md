# Travel technology freelance portfolio

A Next.js portfolio for travel API integration, backend development, and end-to-end booking workflows.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Contact form

The form posts server-side to `CONTACT_FORM_ENDPOINT`, so no provider credential is exposed in browser code. The recommended free-tier setup is [Formspree](https://formspree.io/): create a form, confirm the receiving email, and copy its POST endpoint (for example `https://formspree.io/f/your-form-id`) into `.env.local`.

The route validates input with Zod, includes a honeypot field, prevents duplicate submissions in the UI, and reports loading, success, validation, and provider error states. Formspree's free tier has usage limits; review its current terms before launch.

Required environment variable:

```text
CONTACT_FORM_ENDPOINT=https://formspree.io/f/your-form-id
```

For Vercel, add the variable under **Project Settings -> Environment Variables** for Preview and Production, then redeploy. Do not commit `.env` or `.env.local`.

## Checks

```bash
npm run lint
npm run build
```
