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
declare const colorTokens: {
    readonly purple: "var(--drp-purple)";
    readonly purpleHover: "var(--drp-purple-hover)";
    readonly purpleActive: "var(--drp-purple-active)";
    readonly purple20: "var(--drp-purple-20)";
    readonly orange: "var(--drp-orange)";
    readonly orangeDark: "var(--drp-orange-dark)";
    readonly orangeLight: "var(--drp-orange-light)";
    readonly black: "var(--drp-black)";
    readonly black75: "var(--drp-black-75)";
    readonly mint: "var(--drp-mint)";
    readonly mint80: "var(--drp-mint-80)";
    readonly pink: "var(--drp-pink)";
    readonly pink80: "var(--drp-pink-80)";
    readonly yellow: "var(--drp-yellow)";
    readonly yellow80: "var(--drp-yellow-80)";
    readonly grey: "var(--drp-grey)";
    readonly grey85: "var(--drp-grey-85)";
    readonly greyLight: "var(--drp-grey-light)";
    readonly charcoal: "var(--drp-charcoal)";
    readonly white: "var(--drp-white)";
    readonly cream: "var(--drp-cream)";
    readonly surface: "var(--drp-surface)";
    /** ⚠️ Use for borders/backgrounds only. For text, use successDark. */
    readonly success: "var(--drp-success)";
    /** ✅ Use for success text on light backgrounds (WCAG AA compliant) */
    readonly successDark: "var(--drp-success-dark)";
    /** ⚠️ Use for borders/backgrounds only. For text, use errorDark. */
    readonly error: "var(--drp-error)";
    /** ✅ Use for error text on light backgrounds (WCAG AA compliant) */
    readonly errorDark: "var(--drp-error-dark)";
    /** ⚠️ Use for borders/backgrounds only. For text, use warningDark. */
    readonly warning: "var(--drp-warning)";
    /** ✅ Use for warning text on light backgrounds (WCAG AA compliant) */
    readonly warningDark: "var(--drp-warning-dark)";
    /** ⚠️ Use for borders/backgrounds only. For text, use infoDark. */
    readonly info: "var(--drp-info)";
    /** ✅ Use for info text on light backgrounds (WCAG AA compliant) */
    readonly infoDark: "var(--drp-info-dark)";
    /** Primary text — headings, body copy (#121212) */
    readonly textPrimary: "var(--drp-text-primary)";
    /** Secondary text — labels, metadata (#444444) */
    readonly textSecondary: "var(--drp-text-secondary)";
    /** Muted text — captions, timestamps (#6B6B6B, WCAG AA) */
    readonly textMuted: "var(--drp-text-muted)";
    /** Text on dark backgrounds (#FFFFFF) */
    readonly textInverse: "var(--drp-text-inverse)";
};
/** 4px base grid. Always use these — never hardcode px values. */
declare const spaceTokens: {
    readonly 1: "var(--drp-space-1)";
    readonly 2: "var(--drp-space-2)";
    readonly 3: "var(--drp-space-3)";
    readonly 4: "var(--drp-space-4)";
    readonly 5: "var(--drp-space-5)";
    readonly 6: "var(--drp-space-6)";
    readonly 8: "var(--drp-space-8)";
    readonly 10: "var(--drp-space-10)";
    readonly 12: "var(--drp-space-12)";
    readonly 16: "var(--drp-space-16)";
    readonly 20: "var(--drp-space-20)";
    readonly 24: "var(--drp-space-24)";
    readonly 32: "var(--drp-space-32)";
};
declare const fontTokens: {
    readonly primary: "var(--drp-font-primary)";
    readonly mono: "var(--drp-font-mono)";
};
declare const textSizeTokens: {
    readonly h1: "var(--drp-text-h1)";
    readonly h2: "var(--drp-text-h2)";
    readonly h3: "var(--drp-text-h3)";
    readonly h4: "var(--drp-text-h4)";
    readonly h5: "var(--drp-text-h5)";
    readonly h6: "var(--drp-text-h6)";
    readonly lg: "var(--drp-text-lg)";
    readonly md: "var(--drp-text-md)";
    readonly sm: "var(--drp-text-sm)";
    readonly xs: "var(--drp-text-xs)";
};
declare const fontWeightTokens: {
    readonly regular: "var(--drp-weight-regular)";
    readonly medium: "var(--drp-weight-medium)";
    readonly semibold: "var(--drp-weight-semibold)";
    readonly bold: "var(--drp-weight-bold)";
    readonly heavy: "var(--drp-weight-heavy)";
};
declare const lineHeightTokens: {
    readonly tight: "var(--drp-leading-tight)";
    readonly snug: "var(--drp-leading-snug)";
    readonly body: "var(--drp-leading-body)";
    readonly normal: "var(--drp-leading-normal)";
    readonly loose: "var(--drp-leading-loose)";
};
/**
 * Offset-black shadows — the Doctor Project brutalist signature.
 * All shadows are hard-edged (0 blur) offset to bottom-right.
 */
declare const shadowTokens: {
    readonly xs: "var(--drp-shadow-xs)";
    readonly sm: "var(--drp-shadow-sm)";
    readonly md: "var(--drp-shadow-md)";
    readonly lg: "var(--drp-shadow-lg)";
    readonly xl: "var(--drp-shadow-xl)";
    readonly hover: "var(--drp-shadow-hover)";
    readonly pressed: "var(--drp-shadow-pressed)";
    readonly xsSoft: "var(--drp-shadow-xs-soft)";
    readonly smSoft: "var(--drp-shadow-sm-soft)";
    readonly mdSoft: "var(--drp-shadow-md-soft)";
    readonly lgSoft: "var(--drp-shadow-lg-soft)";
};
/**
 * Border tokens. border-radius is always 0 in this design system.
 * Never add border-radius to any element.
 */
declare const borderTokens: {
    readonly default: "var(--drp-border)";
    readonly thin: "var(--drp-border-thin)";
    readonly chunk: "var(--drp-border-chunk)";
    readonly thick: "var(--drp-border-thick)";
    readonly dashed: "var(--drp-border-dashed)";
    readonly dotted: "var(--drp-border-dotted)";
};
declare const motionTokens: {
    readonly durationFast: "var(--drp-duration-fast)";
    readonly durationNormal: "var(--drp-duration-normal)";
    readonly durationSlow: "var(--drp-duration-slow)";
    readonly ease: "var(--drp-ease)";
    readonly easeIn: "var(--drp-ease-in)";
    readonly easeOut: "var(--drp-ease-out)";
};
declare const zIndexTokens: {
    readonly base: "var(--drp-z-base)";
    readonly dropdown: "var(--drp-z-dropdown)";
    readonly sticky: "var(--drp-z-sticky)";
    readonly overlay: "var(--drp-z-overlay)";
    readonly modal: "var(--drp-z-modal)";
    readonly toast: "var(--drp-z-toast)";
};
declare const layoutTokens: {
    readonly sidebarWidth: "var(--drp-sidebar-width)";
    readonly sidebarCollapsedWidth: "var(--drp-sidebar-collapsed-width)";
    readonly topbarHeight: "var(--drp-topbar-height)";
    readonly footerHeight: "var(--drp-footer-height)";
};
declare const tokens: {
    readonly color: {
        readonly purple: "var(--drp-purple)";
        readonly purpleHover: "var(--drp-purple-hover)";
        readonly purpleActive: "var(--drp-purple-active)";
        readonly purple20: "var(--drp-purple-20)";
        readonly orange: "var(--drp-orange)";
        readonly orangeDark: "var(--drp-orange-dark)";
        readonly orangeLight: "var(--drp-orange-light)";
        readonly black: "var(--drp-black)";
        readonly black75: "var(--drp-black-75)";
        readonly mint: "var(--drp-mint)";
        readonly mint80: "var(--drp-mint-80)";
        readonly pink: "var(--drp-pink)";
        readonly pink80: "var(--drp-pink-80)";
        readonly yellow: "var(--drp-yellow)";
        readonly yellow80: "var(--drp-yellow-80)";
        readonly grey: "var(--drp-grey)";
        readonly grey85: "var(--drp-grey-85)";
        readonly greyLight: "var(--drp-grey-light)";
        readonly charcoal: "var(--drp-charcoal)";
        readonly white: "var(--drp-white)";
        readonly cream: "var(--drp-cream)";
        readonly surface: "var(--drp-surface)";
        /** ⚠️ Use for borders/backgrounds only. For text, use successDark. */
        readonly success: "var(--drp-success)";
        /** ✅ Use for success text on light backgrounds (WCAG AA compliant) */
        readonly successDark: "var(--drp-success-dark)";
        /** ⚠️ Use for borders/backgrounds only. For text, use errorDark. */
        readonly error: "var(--drp-error)";
        /** ✅ Use for error text on light backgrounds (WCAG AA compliant) */
        readonly errorDark: "var(--drp-error-dark)";
        /** ⚠️ Use for borders/backgrounds only. For text, use warningDark. */
        readonly warning: "var(--drp-warning)";
        /** ✅ Use for warning text on light backgrounds (WCAG AA compliant) */
        readonly warningDark: "var(--drp-warning-dark)";
        /** ⚠️ Use for borders/backgrounds only. For text, use infoDark. */
        readonly info: "var(--drp-info)";
        /** ✅ Use for info text on light backgrounds (WCAG AA compliant) */
        readonly infoDark: "var(--drp-info-dark)";
        /** Primary text — headings, body copy (#121212) */
        readonly textPrimary: "var(--drp-text-primary)";
        /** Secondary text — labels, metadata (#444444) */
        readonly textSecondary: "var(--drp-text-secondary)";
        /** Muted text — captions, timestamps (#6B6B6B, WCAG AA) */
        readonly textMuted: "var(--drp-text-muted)";
        /** Text on dark backgrounds (#FFFFFF) */
        readonly textInverse: "var(--drp-text-inverse)";
    };
    readonly space: {
        readonly 1: "var(--drp-space-1)";
        readonly 2: "var(--drp-space-2)";
        readonly 3: "var(--drp-space-3)";
        readonly 4: "var(--drp-space-4)";
        readonly 5: "var(--drp-space-5)";
        readonly 6: "var(--drp-space-6)";
        readonly 8: "var(--drp-space-8)";
        readonly 10: "var(--drp-space-10)";
        readonly 12: "var(--drp-space-12)";
        readonly 16: "var(--drp-space-16)";
        readonly 20: "var(--drp-space-20)";
        readonly 24: "var(--drp-space-24)";
        readonly 32: "var(--drp-space-32)";
    };
    readonly font: {
        readonly primary: "var(--drp-font-primary)";
        readonly mono: "var(--drp-font-mono)";
    };
    readonly textSize: {
        readonly h1: "var(--drp-text-h1)";
        readonly h2: "var(--drp-text-h2)";
        readonly h3: "var(--drp-text-h3)";
        readonly h4: "var(--drp-text-h4)";
        readonly h5: "var(--drp-text-h5)";
        readonly h6: "var(--drp-text-h6)";
        readonly lg: "var(--drp-text-lg)";
        readonly md: "var(--drp-text-md)";
        readonly sm: "var(--drp-text-sm)";
        readonly xs: "var(--drp-text-xs)";
    };
    readonly fontWeight: {
        readonly regular: "var(--drp-weight-regular)";
        readonly medium: "var(--drp-weight-medium)";
        readonly semibold: "var(--drp-weight-semibold)";
        readonly bold: "var(--drp-weight-bold)";
        readonly heavy: "var(--drp-weight-heavy)";
    };
    readonly lineHeight: {
        readonly tight: "var(--drp-leading-tight)";
        readonly snug: "var(--drp-leading-snug)";
        readonly body: "var(--drp-leading-body)";
        readonly normal: "var(--drp-leading-normal)";
        readonly loose: "var(--drp-leading-loose)";
    };
    readonly shadow: {
        readonly xs: "var(--drp-shadow-xs)";
        readonly sm: "var(--drp-shadow-sm)";
        readonly md: "var(--drp-shadow-md)";
        readonly lg: "var(--drp-shadow-lg)";
        readonly xl: "var(--drp-shadow-xl)";
        readonly hover: "var(--drp-shadow-hover)";
        readonly pressed: "var(--drp-shadow-pressed)";
        readonly xsSoft: "var(--drp-shadow-xs-soft)";
        readonly smSoft: "var(--drp-shadow-sm-soft)";
        readonly mdSoft: "var(--drp-shadow-md-soft)";
        readonly lgSoft: "var(--drp-shadow-lg-soft)";
    };
    readonly border: {
        readonly default: "var(--drp-border)";
        readonly thin: "var(--drp-border-thin)";
        readonly chunk: "var(--drp-border-chunk)";
        readonly thick: "var(--drp-border-thick)";
        readonly dashed: "var(--drp-border-dashed)";
        readonly dotted: "var(--drp-border-dotted)";
    };
    readonly motion: {
        readonly durationFast: "var(--drp-duration-fast)";
        readonly durationNormal: "var(--drp-duration-normal)";
        readonly durationSlow: "var(--drp-duration-slow)";
        readonly ease: "var(--drp-ease)";
        readonly easeIn: "var(--drp-ease-in)";
        readonly easeOut: "var(--drp-ease-out)";
    };
    readonly zIndex: {
        readonly base: "var(--drp-z-base)";
        readonly dropdown: "var(--drp-z-dropdown)";
        readonly sticky: "var(--drp-z-sticky)";
        readonly overlay: "var(--drp-z-overlay)";
        readonly modal: "var(--drp-z-modal)";
        readonly toast: "var(--drp-z-toast)";
    };
    readonly layout: {
        readonly sidebarWidth: "var(--drp-sidebar-width)";
        readonly sidebarCollapsedWidth: "var(--drp-sidebar-collapsed-width)";
        readonly topbarHeight: "var(--drp-topbar-height)";
        readonly footerHeight: "var(--drp-footer-height)";
    };
};

export { borderTokens, colorTokens, fontTokens, fontWeightTokens, layoutTokens, lineHeightTokens, motionTokens, shadowTokens, spaceTokens, textSizeTokens, tokens, zIndexTokens };
