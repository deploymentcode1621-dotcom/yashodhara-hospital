# Yashodhara Institute of Urology — Hospital Website (Cw17)

A 7-page bilingual (English / Marathi) hospital website for **Yashodhara Urology Multispeciality Hospital, Latur** (Dr. Dheeraj Hedda) and its in-house **Yashodhara Multispeciality Dental Clinic** (Dr. Anushree Hedda).

Built with **Next.js 14 (App Router)** and **Tailwind CSS**. Color palette is taken from the hospital's own logo (navy blue, rust orange, maroon).

## Pages

1. **Home** (`/`) — hero, quick services, why-choose-us, dental teaser, CTA
2. **About Us** (`/about`) — hospital story, both doctors' profiles, mission, timeline
3. **Urology Services** (`/services`) — kidney stone treatments + 9 service sections
4. **Dental Clinic** (`/dental`) — 10 dental treatments, clinic timings, map
5. **Facilities & Equipment** (`/facilities`) — imported equipment gallery + facility list
6. **Gallery** (`/gallery`) — hospital building + equipment photos
7. **Contact & Appointment** (`/contact`) — appointment form (sends to WhatsApp) + Google Map + both branch addresses

## Features

- 🌐 **English ⇄ मराठी** language toggle button (top navigation, persists via localStorage)
- 💬 **WhatsApp integration** — floating button + appointment form that opens a pre-filled WhatsApp message
- 📞 **One-tap calling** — floating call button and `tel:` links throughout
- 🗺️ **Google Map embed** on the Contact page (placed beside the appointment form) and on the Dental page
- 📅 **Appointment form** — name, phone, age, department, preferred date, message
- 📱 Fully responsive, accessible (keyboard focus states, reduced-motion support)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm run start
```

> Note: `npm run build` needs internet access once (to fetch the Google Fonts used: Fraunces, Manrope, Noto Sans/Serif Devanagari). This is normal for `next/font/google` and only happens at build time.

## Editing content

- **All hospital text/data** (services, equipment, doctor qualifications, addresses) lives in `lib/content.js` — every item has an `en` and `mr` version.
- **UI strings** (menu, buttons, headings) live in `lib/translations.js`.
- **Phone numbers / WhatsApp number / email / map addresses** are all in `lib/content.js` under `contactInfo`. Update them there and the whole site updates.
- **Colours** are defined in `tailwind.config.js` under `theme.extend.colors` (`navy`, `rust`, `maroon`, `cream`, `gold`).
- **Images** are in `public/images/` — replace `logo.png`, `building.png`, and the equipment photos with higher-resolution originals whenever available.

## Deploying

This is a standard Next.js app — it deploys as-is to Vercel, Netlify, or any Node host:

```bash
vercel deploy
```

Or export a static build if your host needs static files (note: the WhatsApp/appointment form logic is client-side and will still work).

## Folder structure

```
Cw17/
├── app/                # Pages (App Router)
│   ├── about/
│   ├── contact/
│   ├── dental/
│   ├── facilities/
│   ├── gallery/
│   ├── services/
│   ├── layout.js
│   ├── page.js
│   └── globals.css
├── components/         # Navbar, Footer, forms, cards, icons, map
├── context/            # LanguageContext (EN/MR toggle)
├── lib/                # content.js + translations.js (all editable text)
├── public/images/      # Logo, building & equipment photos
├── tailwind.config.js
└── package.json
```
