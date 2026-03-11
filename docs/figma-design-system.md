# Doctor Project Design System — AI Coding Rules

> These rules apply to every task that touches UI in any Doctor Project app.
> They are enforced for all AI agents (Claude Code, Cursor, Copilot, etc.).

---

## 0. Critical Prerequisites (Read First)

### Install

```bash
npm install @doctorproject/react
```

### MANDATORY styles import — do this exactly once at your app root

```tsx
// main.tsx, index.tsx, or app/layout.tsx
import "@doctorproject/react/styles";
```

**IMPORTANT:** Without this import, all components render unstyled. This is the #1 source of broken UI. The import is not automatic — you must add it.

### Next.js App Router

```tsx
// app/layout.tsx (server component — CSS import is safe here)
import "@doctorproject/react/styles";

// Any file using DS components:
("use client"); // REQUIRED — all DS components use hooks/event handlers
import { Button } from "@doctorproject/react";
```

---

## 1. Component Catalog

All components are exported from `@doctorproject/react`. Use the exact import paths below.

### Prop conventions (consistent across all components)

- `variant` — visual style (e.g. `"primary" | "outline" | "ghost"`)
- `size` — size modifier (`"sm" | "lg"`)
- `disabled` — boolean disabled state
- `className` — always accepted for composition
- `onClose` — dismiss/close handler where applicable

### Interactive Components

| Component  | Import                 | Key Props                                                   | When to use                                  |
| ---------- | ---------------------- | ----------------------------------------------------------- | -------------------------------------------- |
| `Button`   | `@doctorproject/react` | `variant`, `size`, `block`, `icon`, `iconLeft`, `iconRight` | ALL user actions. Never use raw `<button>`.  |
| `Input`    | `@doctorproject/react` | `error`, `success`, `disabled`                              | All text inputs. Never use raw `<input>`.    |
| `Textarea` | `@doctorproject/react` | `error`, `success`, `disabled`                              | Multi-line text. Never use raw `<textarea>`. |
| `Select`   | `@doctorproject/react` | `error`, `success`, `disabled`                              | Dropdowns. Never use raw `<select>`.         |
| `Checkbox` | `@doctorproject/react` | `checked`, `onChange`, `label`                              | Boolean options                              |
| `Radio`    | `@doctorproject/react` | `checked`, `onChange`, `name`                               | Single-select from group                     |
| `Switch`   | `@doctorproject/react` | `checked`, `onChange`                                       | Toggle on/off settings                       |
| `Counter`  | `@doctorproject/react` | `value`, `onChange`, `min`, `max`                           | Numeric quantity inputs                      |

### Button variants — when to use each

```tsx
<Button>Default</Button>                        // secondary actions, neutral
<Button variant="primary">Save</Button>         // primary CTA, one per screen
<Button variant="outline">Cancel</Button>       // secondary beside primary
<Button variant="ghost">View</Button>           // low-emphasis, table actions
<Button variant="ghost-bordered">Filter</Button>// ghost with visible border
<Button variant="danger">Delete</Button>        // destructive — ALWAYS pair with confirmation dialog
<Button variant="secondary">Export</Button>     // mid-emphasis alternative
<Button variant="dark">Admin</Button>           // dark background contexts
<Button size="sm">Compact</Button>              // tight spaces, table rows
<Button size="lg">Hero CTA</Button>             // landing pages, hero sections
<Button block>Full Width</Button>               // mobile, stacked form actions
<Button icon aria-label="Close">×</Button>      // icon-only: aria-label is REQUIRED
```

### Display Components

| Component    | Import                 | When to use                                                               |
| ------------ | ---------------------- | ------------------------------------------------------------------------- |
| `Alert`      | `@doctorproject/react` | Inline feedback. `variant`: `"info" \| "success" \| "warning" \| "error"` |
| `Badge`      | `@doctorproject/react` | Short status labels on items (e.g. "New", "Beta")                         |
| `Tag`        | `@doctorproject/react` | Filterable categories, removable labels                                   |
| `StatusDot`  | `@doctorproject/react` | Live presence/connection indicator                                        |
| `Avatar`     | `@doctorproject/react` | User profile images with fallback initials                                |
| `Heading`    | `@doctorproject/react` | Page/section headings. `level`: 1–6                                       |
| `Text`       | `@doctorproject/react` | Body text with size/weight/color variants                                 |
| `Divider`    | `@doctorproject/react` | Visual section separator                                                  |
| `Loader`     | `@doctorproject/react` | Loading spinner                                                           |
| `Skeleton`   | `@doctorproject/react` | Content loading placeholders (prefer over Loader for layouts)             |
| `EmptyState` | `@doctorproject/react` | Empty list/section with message + CTA                                     |
| `Tooltip`    | `@doctorproject/react` | Hover explanations on interactive elements                                |

### Badge vs Tag — when to use which, and prop differences

- **Badge**: read-only status label attached to another element. Uses `variant` prop.
- **Tag**: interactive, filterable, or removable category label. Uses `color` prop (not `variant`).

```tsx
// Badge — use variant
<Badge variant="mint">Active</Badge>
<Badge variant="pink">Error</Badge>

// Tag — use color (NOT variant — Tag uses color, Badge uses variant)
<Tag color="mint">Active</Tag>
<Tag color="pink">Error</Tag>
<Tag color="purple" filled>Category</Tag>
<Tag closeable>Removable</Tag>
```

### Layout & Navigation

| Component     | Import                 | When to use                                               |
| ------------- | ---------------------- | --------------------------------------------------------- |
| `Card`        | `@doctorproject/react` | Generic content container with border + shadow            |
| `StatCard`    | `@doctorproject/react` | KPI metrics with label + value + trend                    |
| `CaseCard`    | `@doctorproject/react` | Medical/support case summary card                         |
| `PricingCard` | `@doctorproject/react` | Plan comparison                                           |
| `CtaBanner`   | `@doctorproject/react` | Full-width promotional strip                              |
| `Hero`        | `@doctorproject/react` | Landing page hero section                                 |
| `Navbar`      | `@doctorproject/react` | Top navigation bar (marketing pages)                      |
| `Tabs`        | `@doctorproject/react` | In-page content switching (NOT top-level navigation)      |
| `Breadcrumbs` | `@doctorproject/react` | Hierarchical location for pages 2+ levels deep            |
| `Pagination`  | `@doctorproject/react` | Multi-page list navigation                                |
| `Table`       | `@doctorproject/react` | Data tables. Use for all tabular data.                    |
| `Modal`       | `@doctorproject/react` | Dialogs, confirmations, forms in overlay                  |
| `Sidebar`     | `@doctorproject/react` | Navigation sidebar (use AppSidebar for app shell)         |
| `Marquee`     | `@doctorproject/react` | Horizontal scrolling ticker                               |
| `ProgressBar` | `@doctorproject/react` | Progress/completion indicator                             |
| `Dropzone`    | `@doctorproject/react` | File upload drag-and-drop                                 |
| `Icon`        | `@doctorproject/react` | DS icon component. Do NOT install external icon packages. |
| `Footer`      | `@doctorproject/react` | Marketing footer with columns                             |

### Data Visualization

| Component   | Import                 | When to use                                      |
| ----------- | ---------------------- | ------------------------------------------------ |
| `ChartCard` | `@doctorproject/react` | Charts wrapped in a DS card. Backed by Chart.js. |

---

## 2. App Shell Pattern (Required for All App Screens)

Every authenticated app screen uses this layout. Do not deviate.

```tsx
import "@doctorproject/react/styles";
import { AppSidebar, AppTopBar, AppFooter } from "@doctorproject/react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-layout">
      {" "}
      {/* flex row: sidebar + main */}
      <AppSidebar />
      <div className="main-content">
        {" "}
        {/* flex column: topbar + content + footer */}
        <AppTopBar />
        <main className="page-content">{children}</main>
        <AppFooter /> {/* MUST be inside main-content, not app-layout */}
      </div>
    </div>
  );
}
```

**IMPORTANT:** `AppFooter` must be a child of `.main-content`, not a sibling of `AppSidebar`. Placing it outside `.main-content` causes it to render on the right of the screen.

### Layout tokens

```css
--drp-sidebar-width: 280px;
--drp-sidebar-collapsed-width: 68px;
--drp-topbar-height: 68px;
--drp-footer-height: 52px;
```

### Authentication screens (no app shell)

Auth screens (SignIn, SignUp, PasswordReset) use `AuthLayout` — no sidebar/topbar.

```tsx
import { SignIn, SignUp, PasswordReset } from "@doctorproject/react";
```

---

## 3. Token System — Never Hardcode Values

All values come from CSS custom properties. Reference them with `var(--drp-*)`.

### Colors

```css
/* Brand */
--drp-purple: #631ded /* primary brand, focus rings, links */ --drp-purple-20
  /* purple at 20% opacity, switch track */ --drp-orange: #ff6c01
  /* secondary brand, section headers */ --drp-black: #121212
  /* text, borders */ /* Semantic — always use dark variants for text */
  --drp-success-dark: #166534 /* ✅ success text on light bg */
  --drp-error-dark: #991b1b /* ✅ error text on light bg */
  --drp-warning-dark: #92400e /* ✅ warning text on light bg */
  --drp-info-dark: #5b21b6 /* ✅ info text on light bg */
  /* Never use these for text (contrast fails WCAG AA): */
  /* --drp-success, --drp-error, --drp-warning, --drp-info */ /* Accents */
  --drp-mint: #98e9ab /* checkbox checked, success borders */
  --drp-pink: #e99898 /* error borders */ --drp-yellow: #fae8a4
  /* warning highlights */ /* Text hierarchy */ --drp-text-primary: #121212
  /* headings, primary body text */ --drp-text-secondary: #444444
  /* secondary labels */ --drp-text-muted: #6b6b6b
  /* captions, meta info (WCAG AA compliant) */ --drp-text-inverse: #ffffff
  /* text on dark backgrounds */ /* Backgrounds */ --drp-white: #ffffff
  --drp-cream: #f2f2f2 /* page background, disabled inputs */
  --drp-surface: #f2f2f2;
```

### Spacing (4px grid — always use these, never raw px)

```css
--drp-space-1: 4px --drp-space-2: 8px --drp-space-3: 12px --drp-space-4: 16px
  --drp-space-5: 20px --drp-space-6: 24px --drp-space-8: 32px
  --drp-space-10: 40px --drp-space-12: 48px --drp-space-16: 64px
  --drp-space-20: 80px --drp-space-24: 96px;
```

### Typography

```css
--drp-font-primary:
  "Visby", system-ui, sans-serif --drp-font-mono: "Space Mono",
  monospace /* Heading sizes */ --drp-text-h1: 48px --drp-text-h2: 36px
    --drp-text-h3: 28px --drp-text-h4: 24px --drp-text-h5: 20px
    --drp-text-h6: 18px /* Body sizes */ --drp-text-lg: 16px --drp-text-md: 14px
    --drp-text-sm: 12px /* Weights */ --drp-weight-regular: 400
    --drp-weight-semibold: 600 --drp-weight-bold: 700 --drp-weight-heavy: 800
    /* Line heights */ --drp-leading-tight: 1.2 --drp-leading-body: 1.4
    --drp-leading-normal: 1.5;
```

### Borders (brutalist — always 0 border-radius)

```css
--drp-border: 2px solid var(--drp-black) /* standard */ --drp-border-thin: 1px
  solid var(--drp-black) /* subtle */ --drp-border-chunk: 3px solid
  var(--drp-black) /* emphasis */ --drp-border-thick: 4px solid var(--drp-black)
  /* heavy */ --drp-border-dashed: 2px dashed var(--drp-black)
  /* dropzone, placeholder */
  /* IMPORTANT: border-radius is ALWAYS 0. Never add border-radius. */;
```

### Shadows (signature offset-black style)

```css
--drp-shadow-xs: 2px 2px 0 0 rgba(0, 0, 0, 1) /* tight, small components */
  --drp-shadow-sm: 3px 3px 0 0 rgba(0, 0, 0, 1) /* inputs, buttons */
  --drp-shadow-md: 4px 4px 0 0 rgba(0, 0, 0, 1) /* cards */ --drp-shadow-lg: 6px
  6px 0 0 rgba(0, 0, 0, 1) /* modals, popovers */ --drp-shadow-xl: 8px 8px 0 0
  rgba(0, 0, 0, 1) /* top-level overlays */ --drp-shadow-hover: 6px 6px 0 0
  var(--drp-purple) /* hover state on interactive cards */;
```

### Z-index scale

```css
--drp-z-dropdown: 100 --drp-z-sticky: 200 --drp-z-overlay: 300
  --drp-z-modal: 400 --drp-z-toast: 500;
```

### Motion

```css
--drp-duration-fast: 100ms --drp-duration-normal: 200ms
  --drp-duration-slow: 350ms --drp-ease: cubic-bezier(0.4, 0, 0.2, 1);
```

---

## 4. CSS Class Conventions

When writing HTML/JSX without a DS component, use these CSS classes.

### Forms

```html
<div class="drp-field">
  <label class="drp-field__label">Email</label>
  <input class="drp-input" />
  <input class="drp-input drp-input--error" />
  <input class="drp-input drp-input--success" />
</div>
<select class="drp-select drp-select--error"></select>
<label class="drp-checkbox"><input type="checkbox" /> Label</label>
<label class="drp-radio"><input type="radio" /> Label</label>
```

### Buttons

```html
<button class="drp-btn drp-btn--primary">Primary</button>
<button class="drp-btn drp-btn--outline">Outline</button>
<button class="drp-btn drp-btn--danger">Delete</button>
<button class="drp-btn drp-btn--sm">Small</button>
```

### Tags

```html
<span class="drp-tag">Label</span>
<span class="drp-tag drp-tag--mint">Success</span>
<span class="drp-tag drp-tag--pink">Error</span>
<span class="drp-tag drp-tag--yellow">Warning</span>
<span class="drp-tag drp-tag--purple">Info</span>
```

### Layout

```html
<div class="drp-container">
  <!-- max-width centered wrapper -->
  <div class="drp-form-row">
    <!-- 2-column form grid -->
    <div class="drp-form-stack">
      <!-- vertical form stack -->
      <div class="drp-form-actions"><!-- button group row --></div>
    </div>
  </div>
</div>
```

---

## 5. Dark Mode

```css
/* Automatic — respects OS preference */
@media (prefers-color-scheme: dark) { ... }

/* Manual — class on body */
body.dark-mode { ... }
```

Never hardcode dark mode colors — all tokens adapt automatically.

```tsx
// Toggle dark mode
document.body.classList.toggle("dark-mode");
```

---

## 6. Screen Templates — Reference Before Building

| Screen           | File path                                                       | Pattern shown                          |
| ---------------- | --------------------------------------------------------------- | -------------------------------------- |
| Dashboard        | `packages/react/src/screens/Dashboard/Dashboard.tsx`            | StatCards, ChartCard, Table, app shell |
| List screen      | `packages/react/src/screens/Common/ListScreen.tsx`              | Reusable list pattern                  |
| Auth / Sign In   | `packages/react/src/screens/Auth/SignIn.tsx`                    | AuthLayout, Input, Button, forms       |
| Profile Settings | `packages/react/src/screens/ProfileSettings/ProfileAccount.tsx` | Tabs, Input, Switch                    |
| Customers        | `packages/react/src/screens/Customers/CustomersList.tsx`        | Table, Badge, Avatar, filters          |

---

## 7. Figma MCP Integration Flow

When implementing a Figma design in this project:

1. **`get_design_context`** — structured layer data for the node
2. **`get_screenshot`** — visual reference for the same node
3. Translate MCP output (React + Tailwind) into DS conventions:
   - Tailwind color classes → `var(--drp-*)` tokens
   - `rounded-*` → `border-radius: 0` (brutalist: no rounding ever)
   - `<button>` → `<Button variant="...">`
   - `<input>` → `<Input error={...} />`
   - Arbitrary shadows → `var(--drp-shadow-*)` tokens
   - Spacing px → `var(--drp-space-*)` tokens
4. Check Section 1 component catalog before creating anything new
5. Validate visually against the Figma screenshot

**Asset handling:**

- Use `localhost` asset URLs from Figma MCP directly
- Do NOT install external icon packages — use the `Icon` component
- Do NOT create placeholder images if Figma provides a source

---

## 8. Hard Rules — Never Do These

```tsx
// ❌ NEVER hardcode colors
style={{ color: '#631DED' }}
// ✅
style={{ color: 'var(--drp-purple)' }}

// ❌ NEVER use raw form elements
<button />, <input />, <select />, <textarea />
// ✅
<Button />, <Input />, <Select />, <Textarea />

// ❌ NEVER add border-radius
style={{ borderRadius: '8px' }}
// ✅ Omit entirely (default is 0)

// ❌ NEVER use base semantic colors for text (fails WCAG AA contrast)
style={{ color: 'var(--drp-error)' }}
// ✅ Use -dark variant
style={{ color: 'var(--drp-error-dark)' }}

// ❌ NEVER omit aria-label on icon-only buttons
<Button icon><Icon /></Button>
// ✅
<Button icon aria-label="Close dialog"><Icon /></Button>

// ❌ NEVER place AppFooter outside .main-content
<div className="app-layout">
  <AppSidebar />
  <div className="main-content">...</div>
  <AppFooter />   {/* renders to the RIGHT — wrong */}
</div>
// ✅
<div className="app-layout">
  <AppSidebar />
  <div className="main-content">
    <AppTopBar />
    <main>...</main>
    <AppFooter />   {/* correct */}
  </div>
</div>

// ❌ NEVER use infinite CSS animations
animation: spin 1s linear infinite;
// ✅
animation: spin 1s linear 3;

// ❌ NEVER install external component libraries to fill missing DS components
// ✅ Add to @doctorproject/react instead (see Section 9)
```

---

## 9. Adding New Components to the DS

When a required component doesn't exist:

1. Create in `packages/react/src/components/ComponentName/ComponentName.tsx`
2. Add story: `ComponentName.stories.tsx`
3. Export from `packages/react/src/components/index.ts`
4. Rules: only `--drp-*` tokens, zero border-radius, offset-black shadows, `className` prop, `disabled` state
5. Build: `cd packages/react && npm run build`

---

## 10. Storybook Reference

**Live docs:** https://storybook-static-two-delta.vercel.app

All components have interactive stories showing every variant and state.
Check Storybook before writing component usage — story `args` are the canonical usage examples.
