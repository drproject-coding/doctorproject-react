/**
 * Design token constants for @doctorproject/react.
 *
 * These are the CSS custom property names as TypeScript constants.
 * Use them when writing inline styles or CSS-in-JS to get autocomplete
 * and avoid typos in token names.
 *
 * @example
 * import { colorTokens, spaceTokens } from '@doctorproject/react/tokens';
 * <div style={{ color: colorTokens.textPrimary, padding: spaceTokens[4] }} />
 */

// ─── Colors ───────────────────────────────────────────────────────────────────

export const colorTokens = {
  // Brand
  purple: "var(--drp-purple)",
  purpleHover: "var(--drp-purple-hover)",
  purpleActive: "var(--drp-purple-active)",
  purple20: "var(--drp-purple-20)",
  orange: "var(--drp-orange)",
  orangeDark: "var(--drp-orange-dark)",
  orangeLight: "var(--drp-orange-light)",
  black: "var(--drp-black)",
  black75: "var(--drp-black-75)",

  // Accents
  mint: "var(--drp-mint)",
  mint80: "var(--drp-mint-80)",
  pink: "var(--drp-pink)",
  pink80: "var(--drp-pink-80)",
  yellow: "var(--drp-yellow)",
  yellow80: "var(--drp-yellow-80)",

  // Neutrals
  grey: "var(--drp-grey)",
  grey85: "var(--drp-grey-85)",
  greyLight: "var(--drp-grey-light)",
  charcoal: "var(--drp-charcoal)",

  // Backgrounds
  white: "var(--drp-white)",
  cream: "var(--drp-cream)",
  surface: "var(--drp-surface)",

  // Semantic — use `-dark` variants for text on light backgrounds
  /** ⚠️ Use for borders/backgrounds only. For text, use successDark. */
  success: "var(--drp-success)",
  /** ✅ Use for success text on light backgrounds (WCAG AA compliant) */
  successDark: "var(--drp-success-dark)",
  /** ⚠️ Use for borders/backgrounds only. For text, use errorDark. */
  error: "var(--drp-error)",
  /** ✅ Use for error text on light backgrounds (WCAG AA compliant) */
  errorDark: "var(--drp-error-dark)",
  /** ⚠️ Use for borders/backgrounds only. For text, use warningDark. */
  warning: "var(--drp-warning)",
  /** ✅ Use for warning text on light backgrounds (WCAG AA compliant) */
  warningDark: "var(--drp-warning-dark)",
  /** ⚠️ Use for borders/backgrounds only. For text, use infoDark. */
  info: "var(--drp-info)",
  /** ✅ Use for info text on light backgrounds (WCAG AA compliant) */
  infoDark: "var(--drp-info-dark)",

  // Text hierarchy
  /** Primary text — headings, body copy (#121212) */
  textPrimary: "var(--drp-text-primary)",
  /** Secondary text — labels, metadata (#444444) */
  textSecondary: "var(--drp-text-secondary)",
  /** Muted text — captions, timestamps (#6B6B6B, WCAG AA) */
  textMuted: "var(--drp-text-muted)",
  /** Text on dark backgrounds (#FFFFFF) */
  textInverse: "var(--drp-text-inverse)",
} as const;

// ─── Spacing ──────────────────────────────────────────────────────────────────

/** 4px base grid. Always use these — never hardcode px values. */
export const spaceTokens = {
  1: "var(--drp-space-1)", // 4px
  2: "var(--drp-space-2)", // 8px
  3: "var(--drp-space-3)", // 12px
  4: "var(--drp-space-4)", // 16px
  5: "var(--drp-space-5)", // 20px
  6: "var(--drp-space-6)", // 24px
  8: "var(--drp-space-8)", // 32px
  10: "var(--drp-space-10)", // 40px
  12: "var(--drp-space-12)", // 48px
  16: "var(--drp-space-16)", // 64px
  20: "var(--drp-space-20)", // 80px
  24: "var(--drp-space-24)", // 96px
  32: "var(--drp-space-32)", // 128px
} as const;

// ─── Typography ───────────────────────────────────────────────────────────────

export const fontTokens = {
  primary: "var(--drp-font-primary)", // Visby, system-ui, sans-serif
  mono: "var(--drp-font-mono)", // Space Mono, monospace
} as const;

export const textSizeTokens = {
  h1: "var(--drp-text-h1)", // 48px
  h2: "var(--drp-text-h2)", // 36px
  h3: "var(--drp-text-h3)", // 28px
  h4: "var(--drp-text-h4)", // 24px
  h5: "var(--drp-text-h5)", // 20px
  h6: "var(--drp-text-h6)", // 18px
  lg: "var(--drp-text-lg)", // 16px
  md: "var(--drp-text-md)", // 14px
  sm: "var(--drp-text-sm)", // 12px
  xs: "var(--drp-text-xs)", // 12px
} as const;

export const fontWeightTokens = {
  regular: "var(--drp-weight-regular)", // 400
  medium: "var(--drp-weight-medium)", // 500
  semibold: "var(--drp-weight-semibold)", // 600
  bold: "var(--drp-weight-bold)", // 700
  heavy: "var(--drp-weight-heavy)", // 800
} as const;

export const lineHeightTokens = {
  tight: "var(--drp-leading-tight)", // 1.2
  snug: "var(--drp-leading-snug)", // 1.25
  body: "var(--drp-leading-body)", // 1.4
  normal: "var(--drp-leading-normal)", // 1.5
  loose: "var(--drp-leading-loose)", // 1.75
} as const;

// ─── Shadows ──────────────────────────────────────────────────────────────────

/**
 * Offset-black shadows — the Doctor Project brutalist signature.
 * All shadows are hard-edged (0 blur) offset to bottom-right.
 */
export const shadowTokens = {
  xs: "var(--drp-shadow-xs)", // 2px 2px — small interactive elements
  sm: "var(--drp-shadow-sm)", // 3px 3px — inputs, buttons
  md: "var(--drp-shadow-md)", // 4px 4px — cards
  lg: "var(--drp-shadow-lg)", // 6px 6px — modals, popovers
  xl: "var(--drp-shadow-xl)", // 8px 8px — top-level overlays
  hover: "var(--drp-shadow-hover)", // 6px 6px purple — card hover state
  pressed: "var(--drp-shadow-pressed)", // 0 0 — pressed/active state
  // Soft variants (semi-transparent, less aggressive)
  xsSoft: "var(--drp-shadow-xs-soft)",
  smSoft: "var(--drp-shadow-sm-soft)",
  mdSoft: "var(--drp-shadow-md-soft)",
  lgSoft: "var(--drp-shadow-lg-soft)",
} as const;

// ─── Borders ──────────────────────────────────────────────────────────────────

/**
 * Border tokens. border-radius is always 0 in this design system.
 * Never add border-radius to any element.
 */
export const borderTokens = {
  default: "var(--drp-border)", // 2px solid black
  thin: "var(--drp-border-thin)", // 1px solid black
  chunk: "var(--drp-border-chunk)", // 3px solid black
  thick: "var(--drp-border-thick)", // 4px solid black
  dashed: "var(--drp-border-dashed)", // 2px dashed black
  dotted: "var(--drp-border-dotted)", // 2px dotted rgba
} as const;

// ─── Motion ───────────────────────────────────────────────────────────────────

export const motionTokens = {
  durationFast: "var(--drp-duration-fast)", // 100ms
  durationNormal: "var(--drp-duration-normal)", // 200ms
  durationSlow: "var(--drp-duration-slow)", // 350ms
  ease: "var(--drp-ease)",
  easeIn: "var(--drp-ease-in)",
  easeOut: "var(--drp-ease-out)",
} as const;

// ─── Z-index ──────────────────────────────────────────────────────────────────

export const zIndexTokens = {
  base: "var(--drp-z-base)", // 1
  dropdown: "var(--drp-z-dropdown)", // 100
  sticky: "var(--drp-z-sticky)", // 200
  overlay: "var(--drp-z-overlay)", // 300
  modal: "var(--drp-z-modal)", // 400
  toast: "var(--drp-z-toast)", // 500
} as const;

// ─── Layout ───────────────────────────────────────────────────────────────────

export const layoutTokens = {
  sidebarWidth: "var(--drp-sidebar-width)", // 280px
  sidebarCollapsedWidth: "var(--drp-sidebar-collapsed-width)", // 68px
  topbarHeight: "var(--drp-topbar-height)", // 68px
  footerHeight: "var(--drp-footer-height)", // 52px
} as const;

// ─── Aggregate export ─────────────────────────────────────────────────────────

export const tokens = {
  color: colorTokens,
  space: spaceTokens,
  font: fontTokens,
  textSize: textSizeTokens,
  fontWeight: fontWeightTokens,
  lineHeight: lineHeightTokens,
  shadow: shadowTokens,
  border: borderTokens,
  motion: motionTokens,
  zIndex: zIndexTokens,
  layout: layoutTokens,
} as const;
