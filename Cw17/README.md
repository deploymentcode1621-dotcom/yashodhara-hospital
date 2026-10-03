# Yashodhara Urology Center & Multispeciality Hospital – Website (Latur)

Professional hospital website built with **Next.js (App Router) + TypeScript + Tailwind CSS v4**.

Pages: `/` Home · `/about` · `/services` · `/dental-clinic` · `/gallery` · `/facilities` · `/contact`

## Technologies
Next.js 16, React 19, TypeScript, Tailwind CSS 4, lucide-react icons. Fully static, no backend required.

## Install & run
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # run the production build
```

## Replace images
All images are in `public/images/` and referenced as `/images/<file>`. The current files are **branded placeholders** (except `logo.png`). Replace them with real photos using the **same filename** (JPG, ideally ≤ 300 KB each):

`hospital-hero.jpg`, `about-hospital.jpg`, `doctor.jpg`, `dental-clinic.jpg`, `dental-hero.jpg`, `og-image.jpg` (1200×630, social sharing), `facility-1…6.jpg`, `gallery-1…12.jpg`.

To add/remove gallery photos edit the `gallery` list in `src/data/content.ts`.

## Update hospital information
- Contact details, address, timings, doctor info, email, social links: `src/data/site.ts`
- Services, facilities, dental treatments, gallery list: `src/data/content.ts`
- Text on individual pages: `src/app/**/page.tsx`

## Update phone / WhatsApp number
In `src/data/site.ts` change `phone`, `phoneHref` (`tel:+91…`), `mobile`, `mobileHref` and `whatsappNumber` (country code + number, no `+`). Navbar, footer, floating buttons, CTAs and the contact form update automatically. Also update the `telephone` in the JSON-LD in `src/app/layout.tsx`.

## Update Google Maps location
Open Google Maps → find the hospital → Share → *Embed a map* → copy the `src` URL into `mapsEmbed`, and the share link into `mapsLink` (`src/data/site.ts`). Same for the dental clinic (`dentalSite`).

## Contact form
The form validates input in the browser and, on submit, opens WhatsApp with the message pre-filled (no server needed). To receive emails instead, add an API route (e.g. with Resend / Nodemailer) and call it in `src/components/ContactForm.tsx`.

## SEO
Set your real domain in an environment variable before deploying: `NEXT_PUBLIC_SITE_URL=https://yourdomain.com` (used for canonical URLs, sitemap, robots, Open Graph).

## Deploy
- **Vercel (easiest):** push to GitHub → import on vercel.com → add `NEXT_PUBLIC_SITE_URL` → Deploy.
- **Any Node host / VPS:** `npm install && npm run build && npm start`.

## Content to verify before launch
Taken from the reference design (not the printed brochure), so please confirm: email address, Mon–Sat 9–8 / Sunday by appointment timings, and the facility list. The brochure shows PM-JAY and MJPJAY logos – confirm the wording about scheme support. No testimonials, statistics or social accounts were invented; add them when available.
