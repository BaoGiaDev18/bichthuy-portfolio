# Trần Bích Thủy · Portfolio

Personal portfolio site built with Next.js (static export) and hosted on Vercel.

Live site: https://bichthuyportfolio.vercel.app

## Pages

| English | Vietnamese |
|---|---|
| `/` Home | `/vi/` |
| `/tram-chuyen-loi-nha/` Trạm Chuyển Lời Nhà case study | `/vi/tram-chuyen-loi-nha/` |
| `/dirtycoins/` DirtyCoins Lookbook case study | `/vi/dirtycoins/` |
| `/htv/` HTV internship | `/vi/htv/` |

## Where things live

- `content/site.ts`: every piece of text on the site, in English (`en`) and Vietnamese (`vi`), plus links, YouTube video IDs and the contact email.
- `public/media/`: photos, short videos and decorations, one folder per page.
- `public/cv/Tran-Bich-Thuy-CV.pdf`: the file behind every "Download CV" button. Replace it with a file of the same name to update the CV.
- `components/pages/`: the layout of each page.
- `app/globals.css`: colors, fonts, spacing and motion.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # writes the static site to /out
```

## Deploy

Vercel builds the site automatically on every push to `main`. Framework preset: Next.js. No environment variables are needed.
