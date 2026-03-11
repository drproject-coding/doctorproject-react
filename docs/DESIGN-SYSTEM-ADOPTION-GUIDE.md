# Design System Adoption Guide

**Doctor Project Design System — `@doctorproject/react`**

> This document is the single reference for every developer working on any Doctor Project app.
> Read it fully before touching any UI code. No exceptions.

---

## Table of Contents

1. [The Rule](#1-the-rule)
2. [Setup](#2-setup)
3. [What Exists in the Design System](#3-what-exists-in-the-design-system)
4. [How to Build a Screen](#4-how-to-build-a-screen)
5. [Tokens — Never Use Raw Values](#5-tokens--never-use-raw-values)
6. [Dark Mode](#6-dark-mode)
7. [The Decision Tree — When Something Doesn't Exist](#7-the-decision-tree--when-something-doesnt-exist)
8. [Migrating Existing Apps](#8-migrating-existing-apps)
9. [What to Check Before Every PR](#9-what-to-check-before-every-pr)
10. [Hard Rules — Never Do This](#10-hard-rules--never-do-this)
11. [Versioning & Upgrades](#11-versioning--upgrades)

---

## 1. The Rule

> **If it exists in the design system, you must use it. You may not create an alternative.**

This is not a suggestion. Every time a developer creates a custom button, a custom card,
or hardcodes a color, the design system breaks down and we accumulate UI debt across every app.

**Reference always:**

- Components & props → https://storybook-static-two-delta.vercel.app
- Package → `npm install @doctorproject/react`

---

## 2. Setup

### Requirements

- **React 18 or 19** (React 17 and below are not supported)
- Node 18+

### Install

```bash
npm install @doctorproject/react
```

### Load the styles — required, do this once at your app root

```tsx
import "@doctorproject/react/styles";
```

This imports the complete DS CSS: tokens, typography, buttons, forms, layout, animations, and all component styles.

#### Framework-specific style loading

**Vite / CRA:**

```tsx
// main.tsx or index.tsx
import "@doctorproject/react/styles";
import App from "./App";
```

**Next.js App Router:**

```tsx
// app/layout.tsx
import "@doctorproject/react/styles";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
```

> All DS components use client-side interactivity. Add `'use client'` at the top of any page or component that uses DS components in Next.js App Router.

**Next.js Pages Router:**

```tsx
// pages/_app.tsx
import "@doctorproject/react/styles";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

**Next.js — if you get a module parse error for CSS:**
Add to `next.config.js`:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@doctorproject/react"],
};
module.exports = nextConfig;
```

**Remix:**

```tsx
// app/root.tsx
import styles from "@doctorproject/react/styles?url";

export const links = () => [{ rel: "stylesheet", href: styles }];
```

### Import components

```tsx
import {
  Button,
  Card,
  Input,
  Badge,
  AppSidebar,
  AppTopBar,
} from "@doctorproject/react";
```

### TypeScript — tsconfig requirement

The package uses the `exports` field. Ensure your `tsconfig.json` has:

```json
{
  "compilerOptions": {
    "moduleResolution": "bundler"
  }
}
```

If using an older setup, `"moduleResolution": "node16"` also works.

Import prop types when needed:

```tsx
import type { ButtonProps, TableProps, CardProps } from "@doctorproject/react";
```

### Bundle size note

The package bundles `chart.js`, `react-chartjs-2`, `topojson-client`, and `chartjs-chart-geo` as runtime dependencies. These are included in the bundle even if you never use the `Chart` component. Use named imports (never `import * as DS from '@doctorproject/react'`) so your bundler can tree-shake unused exports.

```tsx
// CORRECT — tree-shakeable
import { Button, Card } from "@doctorproject/react";

// WRONG — pulls in everything
import * as DS from "@doctorproject/react";
```

### Coexistence with CSS frameworks

If your app uses Tailwind or another CSS framework:

- Do **not** write Tailwind utility classes on DS components
- Do **not** override DS component styles with Tailwind
- You may use Tailwind **only** for layout glue between DS components (e.g. wrapping divs, page-level spacing)

---

## 3. What Exists in the Design System

### Components — never recreate these

| Category       | Components                                                                  |
| -------------- | --------------------------------------------------------------------------- |
| **Actions**    | `Button`, `Switch`, `Checkbox`, `Radio`                                     |
| **Forms**      | `Input`, `Textarea`, `Select`, `Dropzone`                                   |
| **Display**    | `Badge`, `Tag`, `StatusDot`, `Avatar`, `Spinner`, `Loader`, `Skeleton`      |
| **Feedback**   | `Alert`, `Toast`, `Modal`, `Tooltip`                                        |
| **Layout**     | `Card`, `Container`, `Stack`, `ResponsiveGrid`, `Divider`                   |
| **Navigation** | `Sidebar`, `TopBar`, `Navbar`, `Tabs`, `Breadcrumbs`, `Pagination`          |
| **Typography** | `Heading`, `Text`                                                           |
| **Data**       | `Table`, `StatCard`, `Chart`, `ProgressBar`                                 |
| **Marketing**  | `Hero`, `FeatureList`, `PricingCard`, `CtaBanner`, `Testimonial`, `Marquee` |
| **Media**      | `Icon`, `Pictogram`                                                         |
| **Misc**       | `EmptyState`, `Footer`, `CaseCard`, `Counter`                               |

### Pictograms — detailed usage

Pictograms are the DS's branded neo-brutalist illustrations. They are **not** generic icons —
they are larger, stylised, and carry brand identity. Use them for feature highlights,
empty states, onboarding, and section headers. Do not use external icon libraries as a substitute.

#### Basic usage

```tsx
import { Pictogram } from '@doctorproject/react';

// Decorative (screen reader ignores it)
<Pictogram name="Analytics" size={64} aria-hidden />

// Meaningful (screen reader announces it)
<Pictogram name="Analytics" size={64} aria-label="View analytics" />
```

#### Props

| Prop          | Type            | Default  | Description                                                  |
| ------------- | --------------- | -------- | ------------------------------------------------------------ |
| `name`        | `PictogramName` | required | The pictogram to render — see full list below                |
| `size`        | `number`        | `24`     | Width and height in px                                       |
| `aria-hidden` | `boolean`       | —        | Set `true` when decorative (no semantic meaning)             |
| `aria-label`  | `string`        | —        | Set when the pictogram conveys meaning without adjacent text |
| `className`   | `string`        | —        | Optional CSS class                                           |
| `style`       | `CSSProperties` | —        | Optional inline styles                                       |

#### When to use `aria-hidden` vs `aria-label`

```tsx
// Decorative — there's a text label next to it, screen reader skips it
<div>
  <Pictogram name="Analytics" size={48} aria-hidden />
  <h3>Analytics</h3>
</div>

// Meaningful — standalone, no text label nearby
<button>
  <Pictogram name="Delete" size={24} aria-label="Delete item" />
</button>
```

#### Available pictograms (65 total)

```
Add          Analytics    Apps         Attention    Basket
Bookmark     Check        Close        Credit card  Delete
Down arrow   Download     Exit         Filters      Folder
Hashtag      Info         Layout       Left arrow   Mail
Menu         Message      Pause        Photo        Pie Chart
Play         Remove       Right        Time         Up arrow
Upload       Video

Letter A  Letter B  Letter C  Letter Coin  Letter D  Letter E
Letter F  Letter G  Letter H  Letter J     Letter K  Letter L
Letter M  Letter N  Letter O  Letter P     Letter Q  Letter R
Letter S  Letter T  Letter U  Letter V     Letter W  Letter X
Letter Y  Letter Z

Number 0  Number 1  Number 2  Number 3  Number 4
Number 5  Number 6  Number 7  Number 8  Number 9
```

> See all pictograms rendered in Storybook → **Media / Pictogram**

#### Rules

- Never use an `<img>` tag or raw SVG file for a DS pictogram — always use `<Pictogram name="..." />`
- Never import SVG files from `NeoBrutalist-Pictogram-SVG/` directly in app code — they are the source assets, not the API
- If the pictogram you need does not exist, open a GitHub issue: "DS candidate: Pictogram – [name]"
- Do not recolor pictograms via CSS — they have intentional brand colors baked in

---

### App shell — use on every authenticated screen

```tsx
import { AppSidebar, AppTopBar, AppFooter } from "@doctorproject/react";
```

These are the pre-configured wrappers for sidebar, topbar, and footer.
They must be identical across every app. Do not build alternatives.

### Screen templates — start here before building from scratch

Every screen below is a complete, ready-to-use composition exported from `@doctorproject/react`.
**Open Storybook first.** If your screen matches one of these, use it as your base.

| Category             | Exports                                                                                                                                                                                                                                                                |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Auth**             | `SignIn`, `SignUp`, `PasswordReset`, `SignInWithQR`                                                                                                                                                                                                                    |
| **Dashboard**        | `Dashboard`                                                                                                                                                                                                                                                            |
| **List template**    | `ListScreen` — reusable base for any list/table screen                                                                                                                                                                                                                 |
| **Products**         | `ProductsList`                                                                                                                                                                                                                                                         |
| **Customers**        | `CustomersList`                                                                                                                                                                                                                                                        |
| **Accounts**         | `AccountsList`                                                                                                                                                                                                                                                         |
| **Transactions**     | `TransactionsList`                                                                                                                                                                                                                                                     |
| **Contacts**         | `ContactsList`                                                                                                                                                                                                                                                         |
| **Sales**            | `SalesList`                                                                                                                                                                                                                                                            |
| **Inbox**            | `InboxList` (chat, mail list, compose, empty variants)                                                                                                                                                                                                                 |
| **Payments**         | `PaymentsList` (list, send money, pay utilities variants)                                                                                                                                                                                                              |
| **Education**        | `EducationCourses`                                                                                                                                                                                                                                                     |
| **Calendar**         | `CalendarEvent` (event, day, week views)                                                                                                                                                                                                                               |
| **Support**          | `SupportHome` (categories, home, article, search results)                                                                                                                                                                                                              |
| **Profile Settings** | `ProfileAccount`, `ProfileNotifications`, `ProfileSecurity`, `ProfileSocial`                                                                                                                                                                                           |
| **Reports**          | `ChartContainer`, `ChartBarVariant`, `ChartPolarVariant`, `ChartWaveVariant`, `ChartGeometricVariant`, `ChartHorizontalBarsVariant`, `ChartDoubleBarsVariant`, `ChartMiscVariant`                                                                                      |
| **ToolsTracker**     | `ToolsTrackerDashboard`, `ToolsTrackerAnalytics`, `ToolsTrackerReports`, `ToolsTrackerTransactions`, `ToolsTrackerProducts`, `ToolsTrackerCatalog`, `ToolsTrackerAdminPanel`, `ToolsTrackerImport`, `ToolsTrackerLogs`, `ToolsTrackerSyncJobs`, `ToolsTrackerSettings` |

---

## 4. How to Build a Screen

### Step 1 — Check Storybook

Go to https://storybook-static-two-delta.vercel.app

- **Exact match** → copy the screen structure, swap the data
- **Partial match** → use closest screen as base, extend with DS components
- **No match** → build using DS components + app shell (steps below)

### Step 2 — App shell (required on every authenticated screen)

```tsx
import { AppSidebar, AppTopBar, AppFooter } from "@doctorproject/react";

export function MyScreen() {
  return (
    <div className="app-layout">
      <AppSidebar activeId="my-section" />
      <div className="main-content">
        <AppTopBar title="My Screen" />
        <div style={{ flex: 1, overflowY: "auto", padding: 20 }}>
          {/* content here */}
        </div>
        <AppFooter /> {/* must be inside .main-content, not a sibling */}
      </div>
    </div>
  );
}
```

The `app-layout` and `main-content` CSS classes are provided by the DS styles you imported in setup. You do not need to define them.

### Step 3 — Build content with DS components only

```tsx
// CORRECT
import { Card, Button, Badge, Input, Table } from '@doctorproject/react';

// WRONG — do not do this
<div className="my-card"> ... </div>
<button className="btn-custom"> ... </button>
```

### Step 4 — Use ResponsiveGrid for multi-column layouts

```tsx
import { ResponsiveGrid, StatCard } from "@doctorproject/react";

<ResponsiveGrid cols={3} colsSm={1} gap="16px">
  <StatCard label="Revenue" value="$44,228" />
  <StatCard label="Refunds" value="$2,828" />
  <StatCard label="Net Spent" value="$34,177" />
</ResponsiveGrid>;
```

### Step 5 — Check props in Storybook, not by guessing

Open Storybook → find the component → read the Controls panel.
Every component's variants, sizes, and props are documented there.

---

## 5. Tokens — Never Use Raw Values

Never hardcode colors, spacing, font sizes, shadows, or borders.
Always use CSS custom properties from the token system.

### Colors

```css
/* WRONG */
color: #631ded;
background: #f2f2f2;

/* CORRECT */
color: var(--drp-purple);
background: var(--drp-surface);
```

| Token                  | Value                  | Use for                  |
| ---------------------- | ---------------------- | ------------------------ |
| `--drp-purple`         | `#631DED`              | Primary brand, CTAs      |
| `--drp-purple-hover`   | `#4A14B8`              | Hover state on primary   |
| `--drp-purple-active`  | `#8B4FF5`              | Active/pressed primary   |
| `--drp-purple-20`      | `rgba(99,29,237,0.20)` | Primary tint backgrounds |
| `--drp-orange`         | `#FF6C01`              | Secondary brand          |
| `--drp-black`          | `#121212`              | Text, borders            |
| `--drp-surface`        | `#F2F2F2`              | Page backgrounds         |
| `--drp-white`          | `#FFFFFF`              | Card backgrounds         |
| `--drp-text-primary`   | `#121212`              | Body text                |
| `--drp-text-secondary` | `#444444`              | Secondary text           |
| `--drp-text-muted`     | `#888888`              | Captions, metadata       |
| `--drp-success`        | `#00AA00`              | Success states           |
| `--drp-error`          | `#FF4444`              | Error states             |
| `--drp-warning`        | `#FFAA00`              | Warning states           |
| `--drp-info`           | `#0066FF`              | Info states              |
| `--drp-mint`           | `#98E9AB`              | Activated/active status  |
| `--drp-pink`           | `#E99898`              | Refunded/danger accent   |
| `--drp-yellow`         | `#FAE8A4`              | Highlighted/pending      |

### Spacing (4px grid — never use off-grid values)

```css
/* WRONG */
padding: 14px; /* not on grid */
margin: 22px; /* not on grid */

/* CORRECT */
padding: var(--drp-space-4); /* 16px */
margin: var(--drp-space-6); /* 24px */
```

| Token            | Value |
| ---------------- | ----- |
| `--drp-space-1`  | 4px   |
| `--drp-space-2`  | 8px   |
| `--drp-space-3`  | 12px  |
| `--drp-space-4`  | 16px  |
| `--drp-space-5`  | 20px  |
| `--drp-space-6`  | 24px  |
| `--drp-space-8`  | 32px  |
| `--drp-space-10` | 40px  |
| `--drp-space-12` | 48px  |
| `--drp-space-16` | 64px  |
| `--drp-space-20` | 80px  |
| `--drp-space-24` | 96px  |
| `--drp-space-32` | 128px |

### Shadows — brutalist offset style only

```css
/* WRONG — soft shadow, not DS style */
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

/* CORRECT */
box-shadow: var(--drp-shadow-md);
```

| Token                  | Value                      |
| ---------------------- | -------------------------- |
| `--drp-shadow-xs`      | 2px 2px 0 black            |
| `--drp-shadow-sm`      | 3px 3px 0 black            |
| `--drp-shadow-md`      | 4px 4px 0 black            |
| `--drp-shadow-lg`      | 6px 6px 0 black            |
| `--drp-shadow-xl`      | 8px 8px 0 black            |
| `--drp-shadow-hover`   | 6px 6px 0 purple           |
| `--drp-shadow-pressed` | 0 0 0 0 black              |
| `--drp-shadow-sm-soft` | 3px 3px 0 rgba(0,0,0,0.12) |
| `--drp-shadow-md-soft` | 4px 4px 0 rgba(0,0,0,0.12) |
| `--drp-shadow-lg-soft` | 6px 6px 0 rgba(0,0,0,0.12) |

### Borders

```css
/* WRONG */
border: 1px solid #ccc;
border-radius: 8px; /* DS uses no border-radius */

/* CORRECT */
border: var(--drp-border);
```

| Token                 | Value            |
| --------------------- | ---------------- |
| `--drp-border`        | 2px solid black  |
| `--drp-border-thin`   | 1px solid black  |
| `--drp-border-chunk`  | 3px solid black  |
| `--drp-border-thick`  | 4px solid black  |
| `--drp-border-dashed` | 2px dashed black |

### Typography tokens

```css
font-size: var(--drp-text-h2); /* 36px */
font-weight: var(--drp-weight-bold); /* 700 */
font-family: var(--drp-font-primary);
```

### Animation & z-index tokens

```css
transition: all var(--drp-duration-fast) var(--drp-ease);
z-index: var(--drp-z-modal);
```

> For the full token reference, see [`css/tokens.css`](../css/tokens.css) in the repo.

---

## 6. Dark Mode

The DS ships a full dark mode via a `body` class toggle.

### How to activate

```tsx
// Toggle dark mode
document.body.classList.toggle("dark-mode");

// Or in React
const [dark, setDark] = useState(false);
useEffect(() => {
  document.body.classList.toggle("dark-mode", dark);
}, [dark]);

<button onClick={() => setDark((d) => !d)}>Toggle Dark Mode</button>;
```

### What changes in dark mode

All border and shadow tokens shift from solid black to white/alpha variants.
Background tokens shift to dark surfaces. The full override is defined in
`css/tokens.css` under the `body.dark-mode` selector. Do not manually set
dark colors — use tokens and dark mode will handle it automatically.

### `prefers-color-scheme` support

The DS does not auto-apply dark mode from the system preference.
You must implement the OS preference detection yourself:

```tsx
useEffect(() => {
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  document.body.classList.toggle("dark-mode", mq.matches);
  mq.addEventListener("change", (e) => {
    document.body.classList.toggle("dark-mode", e.matches);
  });
}, []);
```

---

## 7. The Decision Tree — When Something Doesn't Exist

When you need UI not in the DS, follow this process in order. **Do not skip steps.**

```
Does the component exist in @doctorproject/react?
│
├── YES → Use it. Check Storybook for props and variants. Done.
│
└── NO → Does an existing DS component partially cover it?
         (e.g. you need a "read-only input" → use <Input disabled />)
         │
         ├── YES → Use the DS component with appropriate props.
         │         Do not wrap it in a custom component to change its look.
         │
         └── NO → Can you compose existing DS components to achieve it?
                  (e.g. Card + Stack + Button + Badge)
                  │
                  ├── YES → Compose DS components. Done.
                  │
                  └── NO → Is this one-off, specific to one screen?
                           │
                           ├── YES → Build it locally in the app using
                           │         DS tokens only (--drp-* variables).
                           │         Place in /components/local/
                           │         Open a GitHub issue: "DS candidate: X"
                           │
                           └── NO → Is it needed across 2+ apps?
                                    │
                                    └── YES → Do NOT build it locally.
                                              Open a GitHub issue: "New DS component: X"
                                              Wait for it to be added before shipping.
```

### Edge cases

| Situation                                                             | Decision                                                                                    |
| --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| DS `Table` exists but you need virtualised rows (10k+ items)          | Build local, use DS tokens, open DS issue                                                   |
| DS `Modal` exists but you need a drawer/slide-over                    | These are different patterns — build local as `Drawer`, use tokens                          |
| DS `Button` exists but you need a floating action button (FAB)        | Compose: `Button` with icon + custom positioning using tokens                               |
| Design calls for a component visually different from any DS component | Check with designer — it may need to be added to the DS first                               |
| Third-party library component (e.g. date picker)                      | Wrap it, style the wrapper with DS tokens. Do not restyle internals.                        |
| Need an accessible headless primitive (combobox, date picker)         | Headless-only libraries (no styles) are acceptable. Apply DS tokens to the rendered output. |

### GitHub issue format for DS candidates

```
Title: DS candidate: [ComponentName]

## Why is this needed?
[What problem it solves, what screen it appears on]

## Which apps need it?
[List]

## Proposed API
- variant: 'default' | 'compact'
- label: string

## Visual reference
[Screenshot or Figma link]
```

---

## 8. Migrating Existing Apps

### Phase 1 — Audit (do this before writing any code)

For every screen, categorize each UI element:

| Element                                | DS equivalent                          | Action                   |
| -------------------------------------- | -------------------------------------- | ------------------------ |
| Custom button                          | `Button` — has all variants            | Replace                  |
| Custom input / select                  | `Input`, `Select`, `Checkbox`, `Radio` | Replace                  |
| Custom card / panel                    | `Card`                                 | Replace                  |
| Custom sidebar                         | `AppSidebar`                           | Replace                  |
| Custom topbar / navbar                 | `AppTopBar`                            | Replace                  |
| Custom footer                          | `AppFooter`                            | Replace                  |
| Custom modal / dialog                  | `Modal`                                | Replace                  |
| Custom badge / pill / chip             | `Badge` or `Tag`                       | Replace                  |
| Custom spinner / loader                | `Spinner`, `Loader`, `Skeleton`        | Replace                  |
| Custom alert / notification            | `Alert`, `Toast`                       | Replace                  |
| Custom table                           | `Table`                                | Replace                  |
| Hardcoded hex colors                   | `--drp-*` tokens                       | Replace                  |
| Soft `box-shadow`                      | `--drp-shadow-*` tokens                | Replace                  |
| Arbitrary `border-radius`              | Remove — DS is flat by design          | Delete                   |
| App-specific widget (no DS equivalent) | —                                      | Keep locally, add tokens |

### Phase 2 — Check for global CSS conflicts

Before importing `@doctorproject/react/styles`, audit your existing global CSS:

1. Does your app have a CSS reset? DS includes its own — check for conflicts on `*, body, h1-h6, a, button, input`.
2. Does your app set a `font-family` globally? DS sets `--drp-font-primary` (Visby/Roboto Flex) — yours will be overridden.
3. Does your app use CSS Modules, styled-components, or Emotion? These scope component styles and won't conflict. Global resets might still conflict.

**Scoping DS styles during transition (optional):**
If you need to migrate screen-by-screen rather than all at once, wrap DS screens in a scoping class during transition:

```css
/* Limit DS global styles to migrated screens only */
.ds-scoped {
  /* add DS import here via a separate CSS file */
}
```

### Phase 3 — Migrate in this order

1. **App shell first** — `AppSidebar`, `AppTopBar`, `AppFooter`. Instant visual consistency across all screens.
2. **Repeated atomic elements** — `Button`, `Input`, `Badge`. They appear on every screen.
3. **Feedback components** — `Alert`, `Toast`, `Modal`. Centralize behavior.
4. **Cards and layout** — `Card`, `Stack`, `ResponsiveGrid`.
5. **Full screens** — Replace custom screen structures with DS screen templates.
6. **Remaining one-offs** — Apply tokens even if the component stays local.

### Phase 4 — Replace, don't layer

When replacing a component, delete the old one entirely.

```tsx
// WRONG — old styles layered on top of DS
<Button className="legacy-btn">Save</Button>

// CORRECT — DS component used via its own props
<Button variant="primary" size="md">Save</Button>
```

### Phase 5 — Rollback plan

If a shell replacement (Phase 3, step 1) breaks layout:

- Revert the shell components to the legacy versions temporarily
- Check that `AppFooter` is inside `.main-content`, not a sibling of it
- Check that `app-layout` is present on the outermost div
- Do not mix DS layout classes with legacy layout classes on the same element

---

## 9. What to Check Before Every PR

### Component check

- [ ] Every button uses `<Button>` — no raw `<button>` elements
- [ ] Every input uses `<Input>`, `<Select>`, `<Checkbox>`, or `<Radio>` — no raw `<input>` or `<select>`
- [ ] Status indicators use `<Badge>`, `<Tag>`, or `<StatusDot>`
- [ ] Data tables use `<Table>`
- [ ] Loading states use `<Spinner>`, `<Loader>`, or `<Skeleton>`
- [ ] Dialogs use `<Modal>`
- [ ] Alerts and notifications use `<Alert>` or `<Toast>`

### Layout check

- [ ] Screen uses `app-layout` + `AppSidebar` + `AppTopBar` + `AppFooter`
- [ ] `AppFooter` is inside `.main-content`, not a sibling of it (common bug)
- [ ] Multi-column layouts use `ResponsiveGrid`, not custom flex with magic pixel widths

### Token check

- [ ] No hardcoded hex colors in JSX `style={}` or CSS files
- [ ] No pixel values outside the 4px grid (not in the `--drp-space-*` table)
- [ ] No soft `box-shadow` with blur — use `--drp-shadow-*`
- [ ] No `border-radius` — DS is intentionally flat

### Typography check

- [ ] Headings use `<Heading>` or `--drp-text-h*` tokens
- [ ] No custom `font-family` declarations
- [ ] No raw font sizes not in the DS token scale

### Accessibility check

- [ ] Icon-only buttons have `aria-label`
- [ ] Custom local components are keyboard navigable
- [ ] Color is not the only way to convey status (use icon or label alongside color)
- [ ] DS tokens pass WCAG AA contrast by design — do not override colors in ways that reduce contrast

### Dark mode check (if app supports it)

- [ ] No hardcoded colors that bypass the `body.dark-mode` override
- [ ] Toggle tested in both light and dark mode

### New local component check

- [ ] Placed in `/components/local/`
- [ ] Uses only `--drp-*` CSS variables — no hardcoded values
- [ ] GitHub issue opened if candidate for the DS

---

## 10. Hard Rules — Never Do This

A PR with any of these will be rejected.

| Rule                                                                       | Why                                                                                 |
| -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Never create a custom button                                               | `Button` has primary, outline, ghost, destructive, icon variants and sm/md/lg sizes |
| Never create a custom sidebar or topbar                                    | Must be identical across all apps — use `AppSidebar` + `AppTopBar`                  |
| Never use `<button>`, `<input>`, `<select>` raw HTML                       | Unstyled HTML breaks visual consistency and accessibility                           |
| Never hardcode a color from the DS palette                                 | Use `var(--drp-purple)` — if it changes, it updates everywhere at once              |
| Never add `className` overrides to DS components                           | Use the component's own props only                                                  |
| Never add `border-radius`                                                  | DS is intentionally sharp/flat. No rounded corners.                                 |
| Never use a soft drop shadow                                               | Use `--drp-shadow-*` — brutalist offset shadows only                                |
| Never copy-paste a component from one app to another                       | Install `@doctorproject/react` — one source, always in sync                         |
| Never build a locally shared component if 2+ apps need it                  | Add it to the DS                                                                    |
| Never install a full UI library (MUI, Ant Design, Shadcn) alongside the DS | One design language per app. Headless-only a11y primitives are acceptable.          |
| Never import `* as DS from '@doctorproject/react'`                         | Named imports only — required for tree-shaking                                      |

---

## 11. Versioning & Upgrades

The DS follows **semver**:

- **Patch** (0.1.x) — bug fixes, style tweaks. Safe to upgrade anytime.
- **Minor** (0.x.0) — new components, new props. Backwards-compatible.
- **Major** (x.0.0) — breaking changes: removed props, renamed components, token renames.

### Staying up to date

```bash
# Check for updates
npm outdated @doctorproject/react

# Upgrade (patch + minor only — safe)
npm update @doctorproject/react

# Upgrade to a specific major
npm install @doctorproject/react@1.0.0
```

### On major version upgrades

1. Read the release notes / CHANGELOG on the GitHub repo
2. Search your codebase for renamed or removed exports: `grep -r "from '@doctorproject/react'" src/`
3. Update props that changed
4. Run the PR checklist (Section 9) on all affected screens
5. Test in both light and dark mode

### How teams are notified

Breaking changes are announced via GitHub releases on the DS repo.
Watch the repo → Releases to get notified.

---

## Quick Reference Card

```
STORYBOOK   → https://storybook-static-two-delta.vercel.app
INSTALL     → npm install @doctorproject/react
STYLES      → import '@doctorproject/react/styles'   ← at app root, once
COMPONENTS  → import { Button, Card, ... } from '@doctorproject/react'
APP SHELL   → import { AppSidebar, AppTopBar, AppFooter } from '@doctorproject/react'
TOKENS      → see css/tokens.css or Section 5 of this guide
DARK MODE   → document.body.classList.toggle('dark-mode')

NEED SOMETHING? → Storybook → props → compose → local+tokens → DS issue
MIGRATING?      → shell first → buttons/inputs → cards → screens → one-offs
BEFORE PR?      → run the checklist in Section 9
```
