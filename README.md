# Arena Barbershop

Sito vetrina per **Arena Barbershop** (Olten, Svizzera): landing single-page
multilingue che presenta servizi, esperienza, galleria, merchandising e contatti,
con CTA di prenotazione via WhatsApp ed email.

🔗 **Live:** https://arena-barbershop.vercel.app

## Caratteristiche

- **Single-page** a sezioni: hero, servizi (con durata e prezzo), filosofia,
  galleria, merch, testimonianze, contatti/orari, footer.
- **4 lingue** (IT / EN / DE / FR) con default italiano — tutti i contenuti sono
  dati tipizzati in `src/i18n/translations.ts`, switch lingua in-app.
- **Navigazione mobile** con menu slide-in (scroll-lock, chiusura con ESC /
  click-outside) e pulsante "torna su".
- **Zero dipendenze runtime extra**: solo React/ReactDOM. Animazioni in puro
  Tailwind/CSS, icone come SVG inline.

## Stack

| Ambito | Tecnologia |
| --- | --- |
| UI | React 18 + TypeScript (strict) |
| Build | Vite 5 |
| Styling | Tailwind CSS 3 + design token custom |
| Hosting | Vercel |

## Sviluppo

```bash
npm install
npm run dev        # http://localhost:5173
```

### Script

| Comando | Descrizione |
| --- | --- |
| `npm run dev` | Dev server Vite |
| `npm run build` | Type-check + build di produzione |
| `npm run lint` | ESLint |
| `npm run preview` | Anteprima della build |

## Struttura

```
src/
├── components/         # sezioni (Hero, Services, Gallery, Booking, ...)
├── i18n/translations.ts  # tutti i contenuti, 4 lingue, tipizzati
└── lib/cn.ts           # helper per classi
```

## Note

La sezione "Booking" è una scheda contatti (WhatsApp + email + orari), non un
sistema di prenotazione online.
