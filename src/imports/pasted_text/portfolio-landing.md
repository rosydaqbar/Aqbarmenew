# Personal Portfolio Landing Page — AI Agent Implementation Brief

Figma file to implement: 
Aqbar.me : https://www.figma.com/design/87WOjw1lnLPkO8L13YVwHr/Aqbar.me?node-id=361-44&m=dev
aqbar.me (gallery hidden) : https://www.figma.com/design/87WOjw1lnLPkO8L13YVwHr/Aqbar.me?node-id=361-181&m=dev

## Goal

Build a one-page personal portfolio landing page based on the provided Figma file and reference screenshots.

The page should feel minimal, technical, dark, and motion-heavy without adding unnecessary interactions. It should use **Space Mono** from Google Fonts and follow the Figma layout closely.

Primary reference states:

- `aqbar.png` — default state with gallery open.
- `aqbar_gallery_hidden(1).png` — gallery hidden state.

Use the Figma file as the source of truth for exact spacing, colors, typography, image placement, border radius, and shadows. The screenshots are behavioral references.

---

## Recommended Tech Stack

Use this stack unless the existing project already uses something different:

```txt
Framework: Next.js App Router
Language: TypeScript
Styling: Tailwind CSS
UI library: Spell UI
Animation: Motion / Framer Motion
Font: Space Mono from Google Fonts
Deployment target: Static portfolio site, Vercel-friendly
```

Use Spell UI mainly for reusable primitives such as buttons, cards, badges, and small UI details. Keep the layout custom because the page is highly specific.

Use Motion for:

- Initial load animation
- Gallery card entrance animation
- Gallery hide/open animation
- Rotating service text
- Hover states
- Reduced-motion fallbacks

---

## Core Layout

The page has two main sections:

```txt
Viewport
├── Left Section: fixed width, 492px
└── Right Section: remaining viewport width
```

### Layout Rules

```txt
body:
  margin: 0
  background: dark
  overflow: hidden

main:
  display: grid
  grid-template-columns: 492px minmax(0, 1fr)
  height: 100dvh
  overflow: hidden
```

The vertical divider between the left and right sections must stay fixed at the 492px boundary.

---

## Scroll Behavior

Both sections should scroll together using one synchronized scroll value.

Expected behavior:

1. User scrolls anywhere on the page.
2. Left and right sections move at the same scroll speed.
3. When the left section reaches its bottom, it stops.
4. The gallery/right section keeps scrolling because it has more content.
5. If the gallery is hidden, the right side should not create unnecessary scroll length.

Recommended implementation:

```ts
const maxLeft = leftEl.scrollHeight - viewportHeight;
const maxRight = rightEl.scrollHeight - viewportHeight;
const maxScroll = Math.max(maxLeft, maxRight);

let virtualScroll = 0;

onWheel(event) {
  event.preventDefault();

  virtualScroll = clamp(
    virtualScroll + event.deltaY,
    0,
    maxScroll
  );

  leftEl.scrollTop = Math.min(virtualScroll, maxLeft);
  rightEl.scrollTop = Math.min(virtualScroll, maxRight);
}
```

Also support:

- Trackpad scrolling
- Mouse wheel
- Keyboard scrolling: ArrowDown, ArrowUp, PageDown, PageUp, Home, End
- Touch scrolling if mobile support is included
- `prefers-reduced-motion`

Avoid using two independent native scroll containers without synchronization, because that will not satisfy the “both sections scroll at the same speed” requirement.

---

## Left Section

### Width

```txt
492px fixed
height: 100dvh
overflow: hidden
```

The visible movement should be controlled by the synchronized scroll system.

### Content Order

Use this content structure.

```txt
Header
├── Logo / wordmark: Aqbar
└── CTA button: Get in Touch

Hero
├── Name: Raden Rosyd Aqbar Setiyanto.
├── Intro sentence with rotating service text
├── Current role sentence
└── Availability pill

Experience Section
├── Heading: Experience.
├── Intro description
├── Quipper
├── Antikode
└── Syntac

Contact Card
├── Say Hello.
├── Ready to work together? Let's make an impact.
└── Get in Touch button

Footer
└── © 2025 Rosyd Aqbar
```

### Recommended Copy

```txt
Raden Rosyd Aqbar Setiyanto.

I built [rotating service] that people can actually use and AI can interact with.
Currently working at Quipper and previously at Antikode.
```

Rotating service words:

```txt
B2B service
telco service
SaaS service
edutech service
```

Availability pill:

```txt
Available for new opportunities
```

Experience intro:

```txt
Journey through different companies, roles, and the impact I've made along the way.
```

Quipper:

```txt
Quipper
Product Designer • Remote • 2022 - Now

- Led design system implementation across 3 platforms.
- Improved assignment creation and delivery efficiency for teachers by 52.6%, reducing the flow from 19 steps to 9.
- Designed a cheating-activity detection and bulk follow-up action for teachers, reducing task completion time by over 85% and making the task 6.7× faster to complete.
```

Antikode:

```txt
Antikode
UI/UX Designer • Jakarta, Indonesia • 2018 - 2021

- Led design system work for AXISNet, improving design delivery and efficiency.
```

Syntac:

```txt
Syntac
UI/UX Designer • Remote • 2018 - 2021

- Led the UI/UX team for new initiatives and guided the design direction.
```

Contact card:

```txt
Say Hello.

Ready to work together? Let's make an impact.
Get in Touch
```

Footer:

```txt
© 2025 Rosyd Aqbar
```

### Left Section Animation

On first load, every visible text line should animate in.

Use line-level staggered animation:

```txt
Initial:
  opacity: 0
  y: 8px
  filter: blur(6px)

Animate:
  opacity: 1
  y: 0
  filter: blur(0px)

Transition:
  duration: 0.45s
  ease: cubic-bezier(0.22, 1, 0.36, 1)
  stagger: 0.045s
```

Do not animate the entire left section as one block. Animate each text line or meaningful text row.

### Rotating Service Text Animation

The phrase inside the hero sentence should rotate every 3 seconds.

Target sentence:

```txt
I built [B2B service] that people can actually use and AI can interact with.
```

Animation behavior:

```txt
Interval: 3000ms
Outgoing word:
  y: -100%
  opacity: 0
  filter: blur(4px)

Incoming word:
  y: 100% -> 0
  opacity: 0 -> 1
  filter: blur(4px) -> blur(0px)
```

Keep the text width stable to avoid layout shift. Use a fixed-width inline wrapper based on the longest phrase.

### Availability Dot

The green dot on the left side of the availability pill should pulse.

Implementation:

```txt
Dot:
  size: 6px to 8px based on Figma
  color: green
  border-radius: 999px

Pulse ring:
  position: absolute
  inset: -4px
  opacity: 0
  scale: 1 -> 1.8
  opacity: 0.45 -> 0
  duration: 1.6s
  repeat: infinite
```

---

## Right Section

### Width

```txt
calc(100vw - 492px)
height: 100dvh
overflow: hidden
```

The internal scroll movement should be controlled by the synchronized scroll system.

### Default State

The gallery is visible by default.

```txt
Gallery [Hide]
```

The default state should match `aqbar.png`.

### Hidden State

When the user presses `Hide`, the gallery disappears and the right side shows only the centered gallery control.

```txt
Gallery [Open]
```

The hidden state should match `aqbar_gallery_hidden(1).png`.

### Gallery Content

Use the Figma file to export the actual gallery images. Use these content labels:

```txt
1. Bitwyre
   Description: Landing Page, Market Monitor, and Leaderboard.

2. Dominus
   Description: High conversion and interactive landing page

3. InnovateTech
   Description: Pitch landing page design for an all-in-one task management SaaS concept.

4. Axis NET
   Description: Build your own package feature
```

### Gallery Card Structure

Each card should be a simple visual showcase block.

```txt
GalleryCard
├── image area
├── title
└── short description
```

Card interaction:

```txt
No click behavior for now.
Hover only.
```

Hover behavior:

```txt
image scale: 1 -> 1.015
card y: 0 -> -2px
card brightness: slightly higher
transition: 180ms to 240ms
cursor: default or pointer only if future clickable behavior is planned
```

---

## Right Section Initial Animation

When the page first loads, each gallery card should animate in from blur and upward motion.

Use staggered entrance:

```txt
Initial:
  opacity: 0
  y: 28px
  filter: blur(14px)

Animate:
  opacity: 1
  y: 0
  filter: blur(0px)

Transition:
  duration: 0.65s
  ease: cubic-bezier(0.22, 1, 0.36, 1)
  stagger: 0.12s
```

---

## Gallery Hide / Open Animation

### Hide Button Behavior

The gallery should not simply disappear. It should animate like a deck of cards before fading to 0% opacity.

Recommended two-phase animation:

#### Phase 1 — Stack Into Deck

Each gallery card moves toward the same stack position near the gallery header area.

```txt
Card transform:
  y: decreases toward header
  x: moves slightly toward center/header
  scale: 1 -> 0.88
  rotate: alternating small rotations, e.g. -4deg, 3deg, -2deg, 2deg
  z-index: based on card order
  opacity: 1
```

Timing:

```txt
duration: 0.45s
stagger: 0.05s
ease: cubic-bezier(0.22, 1, 0.36, 1)
```

#### Phase 2 — Fade Out

After cards visually stack:

```txt
Deck opacity: 1 -> 0
Deck scale: 0.88 -> 0.82
filter: blur(0px) -> blur(8px)
duration: 0.28s
```

After the fade completes:

```txt
galleryOpen = false
render hidden state
```

### Open Button Behavior

When pressing `Open`:

1. Hidden state control fades out.
2. Gallery header returns to top.
3. Gallery cards animate in using the same blur-up stagger as initial load.

Use `AnimatePresence` with `mode="wait"` so hidden and visible states do not overlap incorrectly.

---

## Component Plan

Recommended component structure:

```txt
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── portfolio/
│   │   ├── PortfolioLanding.tsx
│   │   ├── LeftPanel.tsx
│   │   ├── RightGallery.tsx
│   │   ├── GalleryCard.tsx
│   │   ├── RotatingServiceText.tsx
│   │   ├── AvailabilityPill.tsx
│   │   ├── StaggeredLine.tsx
│   │   └── ScrollSyncLayout.tsx
│   └── ui/
│       └── spell-ui copied components
├── data/
│   ├── experience.ts
│   └── gallery.ts
├── hooks/
│   ├── useSyncedScroll.ts
│   ├── usePrefersReducedMotion.ts
│   └── useInterval.ts
└── lib/
    ├── cn.ts
    └── clamp.ts
```

---

## Data Model

### Experience Data

```ts
export const experiences = [
  {
    company: "Quipper",
    role: "Product Designer",
    location: "Remote",
    period: "2022 - Now",
    bullets: [
      "Led design system implementation across 3 platforms.",
      "Improved assignment creation and delivery efficiency for teachers by 52.6%, reducing the flow from 19 steps to 9.",
      "Designed a cheating-activity detection and bulk follow-up action for teachers, reducing task completion time by over 85% and making the task 6.7× faster to complete.",
    ],
  },
  {
    company: "Antikode",
    role: "UI/UX Designer",
    location: "Jakarta, Indonesia",
    period: "2018 - 2021",
    bullets: [
      "Led design system work for AXISNet, improving design delivery and efficiency.",
    ],
  },
  {
    company: "Syntac",
    role: "UI/UX Designer",
    location: "Remote",
    period: "2018 - 2021",
    bullets: [
      "Led the UI/UX team for new initiatives and guided the design direction.",
    ],
  },
];
```

### Gallery Data

```ts
export const galleryItems = [
  {
    title: "Bitwyre",
    description: "Landing Page, Market Monitor, and Leaderboard.",
    image: "/images/gallery/bitwyre.webp",
  },
  {
    title: "Dominus",
    description: "High conversion and interactive landing page",
    image: "/images/gallery/dominus.webp",
  },
  {
    title: "InnovateTech",
    description: "Pitch landing page design for an all-in-one task management SaaS concept.",
    image: "/images/gallery/innovate-tech.webp",
  },
  {
    title: "Axis NET",
    description: "Build your own package feature",
    image: "/images/gallery/axis-net.webp",
  },
];
```

---

## Figma / MCP Agent Instructions

Before coding, inspect the Figma file directly.

Use Figma MCP to extract:

```txt
- Main frame dimensions
- Exact left panel width
- Exact section padding
- Text styles
- Font sizes
- Font weights
- Line heights
- Letter spacing
- Colors
- Border colors
- Card radius
- Button radius
- Shadows
- Gallery image sizes
- Gallery card spacing
- Hidden-state center position
```

Do not estimate these values from the screenshot when the Figma file provides them.

### Asset Export

Export gallery visuals from Figma:

```txt
Format: WebP preferred
Scale: 2x
Fallback: PNG if WebP export is unavailable
Naming:
  bitwyre.webp
  dominus.webp
  innovate-tech.webp
  axis-net.webp
```

Export logo/icon assets if they are not pure text/CSS.

### Design Token Extraction

Create tokens after Figma inspection:

```ts
export const tokens = {
  colors: {
    background: "",
    panel: "",
    text: "",
    textMuted: "",
    divider: "",
    card: "",
    pill: "",
    green: "",
  },
  spacing: {
    leftPaddingX: "",
    leftPaddingY: "",
    rightPaddingX: "",
    rightPaddingY: "",
    cardGap: "",
  },
  radius: {
    button: "",
    pill: "",
    card: "",
  },
};
```

Use Tailwind config or CSS variables for these tokens.

---

## Accessibility Requirements

Minimum accessibility behavior:

```txt
- Buttons must use real <button> elements.
- Gallery toggle must expose aria-expanded.
- Gallery region should use aria-hidden when closed.
- Keep focus visible.
- Respect prefers-reduced-motion.
- Do not trap focus.
- Do not remove keyboard scrolling.
```

For reduced motion:

```txt
- Disable blur-heavy movement.
- Replace deck animation with simple fade.
- Keep rotating service text optional or use instant text swap.
```

---

## Performance Requirements

```txt
- Use optimized image exports.
- Use next/image if using Next.js.
- Avoid animating layout-heavy properties where possible.
- Prefer transform and opacity.
- Avoid animating width, height, top, and left unless necessary.
- Keep gallery cards unmounted after hide animation completes.
- Recalculate scroll bounds after gallery open/close.
```

---

## Implementation Milestones

### Milestone 1 — Static Layout

```txt
- Build two-column layout.
- Apply Space Mono.
- Add left panel content.
- Add gallery content.
- Match Figma spacing and color tokens.
```

### Milestone 2 — Scroll Sync

```txt
- Implement synchronized scroll behavior.
- Clamp left section when it reaches the bottom.
- Let gallery continue scrolling.
- Recalculate bounds on resize and gallery toggle.
```

### Milestone 3 — Entrance Animations

```txt
- Add left text line animation.
- Add gallery card blur-up animation.
- Add rotating service text.
- Add availability dot pulse.
```

### Milestone 4 — Gallery Toggle

```txt
- Add Hide/Open state.
- Add deck-of-card hide animation.
- Add hidden-state center control.
- Add open animation.
```

### Milestone 5 — Polish

```txt
- Match Figma precisely.
- Tune easing and stagger.
- Add hover states.
- Add reduced-motion support.
- Check keyboard and trackpad behavior.
```

---

## Acceptance Criteria

The implementation is complete when:

```txt
- The default visible state visually matches aqbar.png.
- The hidden state visually matches aqbar_gallery_hidden(1).png.
- Left section remains exactly 492px wide on desktop.
- Right section fills the remaining viewport width.
- Gallery is visible by default.
- Hide button animates gallery into a stacked card deck, then fades to 0% opacity.
- Open button restores gallery with staggered blur-up animation.
- Left and right sections scroll together at the same speed.
- Left section stops when it reaches its content end.
- Gallery continues scrolling after the left section has stopped.
- Hero service text rotates every 3 seconds.
- Availability green dot pulses.
- Gallery cards have hover states only, with no click behavior.
- The page uses Space Mono.
- The site respects reduced-motion preferences.
```

---

## Notes for the AI Agent

Do not overbuild the page.

Do not add:

```txt
- Project detail pages
- Modals
- Card click routing
- Extra filters
- Extra sections
- Theme switcher
- Sound effects
- Cursor effects
- Parallax beyond the requested scroll behavior
```

Focus on matching the Figma design and implementing the exact motion behavior.
[@figma](plugin://figma@openai-curated)