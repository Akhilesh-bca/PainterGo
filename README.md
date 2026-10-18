# PainterGo — Next.js + React

A responsive painting contractor landing page built with the Next.js App Router, React, TypeScript, and plain CSS. It includes a mobile menu, service cards, project gallery, click-to-call, WhatsApp links, and a validated enquiry form.

## Requirements
- Node.js 20.9 or newer
- npm

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Configure before publishing

1. Update `NEXT_PUBLIC_WHATSAPP_NUMBER`, `NEXT_PUBLIC_BUSINESS_PHONE`, and `NEXT_PUBLIC_BUSINESS_EMAIL` in `.env.local` with the real business details.
2. For email form submissions, create a form with Formspree and set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` to its endpoint. If this variable is not set, the form prepares an enquiry in WhatsApp instead; the visitor still needs to press Send in WhatsApp.
3. Replace the illustrative remote Unsplash images with licensed, real PainterGo project photos. The gallery currently uses illustrative images, not actual before/after evidence.
4. Verify all claims (team size, service areas, guarantees, reviews) before publishing.
5. Replace metadata and add the production domain to metadata/canonical configuration when known.

## Build for production

```bash
npm run build
npm start
```

## Deploy

Push this folder to a Git repository and import it into Vercel, or deploy to another platform supporting Next.js.


## Free site visit page
The “Get Free Site Visit” and “Book Free Site Visit” buttons open `/site-visit`, a dedicated responsive form page. It collects customer contact details, service, property type, site address, city/PIN, approximate painting area and unit, rooms/floors, property status, timeline, optional budget, preferred date/time and project notes. On submit, it validates required fields and opens WhatsApp with a prefilled request; the customer must press Send. For automatic inbox delivery, integrate a form provider or server-side API.
