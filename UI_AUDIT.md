## UI Audit (Top 10)

1) Focus states inconsistent / missing
   - Symptom → Some links/buttons show no clear keyboard focus ring; only a few controls define `focus-visible` styling.
   - Fix → Add a shared `ui-focus` style and apply it to all interactive elements (links, buttons, menu items).
   - Files → `src/index.css`, `src/components/*`

2) Button system not unified (sizes, tracking, padding)
   - Symptom → Primary/secondary CTAs use slightly different font sizes, letter-spacing, padding, and hover treatments across sections.
   - Fix → Introduce `.ui-btn` base + variants (`primary`, `secondary`, `soft`) and reuse everywhere; ensure ≥44px tap targets.
   - Files → `src/index.css`, `src/components/HeroSection.tsx`, `src/components/Navigation.tsx`, `src/components/BookingSection.tsx`, `src/components/MerchandiseSection.tsx`

3) Card/surface styling repeated with minor variations
   - Symptom → Many “card” blocks re-implement similar border/background/shadow/radius with small inconsistencies.
   - Fix → Centralize surface tokens + shared card classes (`ui-card`, `ui-panel`) to keep radii/shadows cohesive.
   - Files → `src/index.css`, `src/components/*Section.tsx`

4) Spacing rhythm varies by section (especially on mobile)
   - Symptom → Some sections use large fixed paddings/gaps that can feel oversized on 360–390px widths.
   - Fix → Normalize section vertical spacing with responsive scales (smaller `py`/`space-y` on small screens).
   - Files → `src/App.tsx`, `src/components/*Section.tsx`

5) Safe-area ergonomics not handled for fixed UI
   - Symptom → Fixed “back to top” button and top header padding may clash with iOS safe areas (notch/home indicator).
   - Fix → Add safe-area utilities and use them where needed.
   - Files → `src/index.css`, `src/components/Navigation.tsx`, `src/components/Container.tsx`

6) Scroll-to-anchor can land content under header
   - Symptom → Jumping to `#services`, `#booking`, etc. can position headings too close to the top.
   - Fix → Set `scroll-margin-top` for anchored sections.
   - Files → `src/index.css`

7) Reduced-motion support incomplete
   - Symptom → Multiple hover transitions and scaling effects remain active even when users prefer reduced motion.
   - Fix → Add a global `prefers-reduced-motion` rule to reduce animations/transitions.
   - Files → `src/index.css`

8) Typography scale relies on many one-off values
   - Symptom → Frequent arbitrary `text-[...]` and tracking values make the system harder to maintain and keep consistent.
   - Fix → Introduce type/letter-spacing tokens and reuse via shared classes (without changing copy).
   - Files → `src/index.css`, `src/components/*`

9) Border/overlay opacities vary, reducing cohesion
   - Symptom → Similar elements use different `border-white/..` and `bg-white/..` levels, making the UI feel less systematic.
   - Fix → Define subtle/strong border + surface opacities as tokens and reuse across cards/badges.
   - Files → `src/index.css`, `src/components/*`

10) Layout max-width + padding can be more consistent across breakpoints
   - Symptom → Some containers feel tight/loose depending on breakpoint; safe-area padding isn’t guaranteed.
   - Fix → Make `Container` padding responsive and safe-area aware; keep readable line-lengths.
   - Files → `src/components/Container.tsx`, `src/index.css`

