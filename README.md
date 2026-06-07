# Arena Barbershop

![Arena Barbershop](src/assets/hero-banner.webp)

Showcase website for **Arena Barbershop** (Olten, Switzerland): a multilingual
single-page landing presenting services, experience, gallery, merchandising and
contact, with booking CTAs via WhatsApp and email.

🔗 **Live:** https://arena-barbershop.vercel.app

## Features

- **Single-page** sections: hero, services (with duration and price), philosophy,
  gallery, merch, testimonials, contact/hours, footer.
- **4 languages** (IT / EN / DE / FR), Italian default — all content is typed
  data in `src/i18n/translations.ts`, with an in-app language switch.
- **Mobile navigation** with a slide-in menu (scroll lock, close on ESC /
  click-outside) and a back-to-top button.
- **No extra runtime dependencies**: React/ReactDOM only. Animations are pure
  Tailwind/CSS, icons are inline SVGs.

## Stack

| Area | Technology |
| --- | --- |
| UI | React 18 + TypeScript (strict) |
| Build | Vite 5 |
| Styling | Tailwind CSS 3 + custom design tokens |
| Hosting | Vercel |

## Development

```bash
npm install
npm run dev        # http://localhost:5173
```

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Vite dev server |
| `npm run build` | Type-check + production build |
| `npm run lint` | ESLint |
| `npm run preview` | Preview the production build |

## Structure

```
src/
├── components/           # sections (Hero, Services, Gallery, Booking, ...)
├── i18n/translations.ts  # all content, 4 languages, typed
└── lib/cn.ts             # classname helper
```

## Notes

The "Booking" section is a contact card (WhatsApp + email + hours), not an online
booking system.
