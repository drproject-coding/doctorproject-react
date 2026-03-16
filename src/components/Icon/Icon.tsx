type IconName =
  | "dashboard"
  | "analytics"
  | "users"
  | "orders"
  | "products"
  | "settings"
  | "search"
  | "bell"
  | "mail"
  | "calendar"
  | "check"
  | "close"
  | "plus"
  | "minus"
  | "arrow-left"
  | "arrow-right"
  | "arrow-up"
  | "arrow-down"
  | "edit"
  | "trash"
  | "eye"
  | "eye-off"
  | "filter"
  | "download"
  | "more";

type IconSize = "sm" | "md" | "lg";

export interface IconProps {
  name: IconName;
  size?: IconSize;
  /** Box background color. Defaults to var(--drp-mint). */
  bg?: string;
  className?: string;
}

/** Outer box size (includes border, excludes shadow footprint) */
const outerSizeMap: Record<IconSize, number> = { sm: 24, md: 32, lg: 48 };
/** SVG icon size inside the box */
const innerSizeMap: Record<IconSize, number> = { sm: 12, md: 16, lg: 24 };
/** Offset black shadow */
const shadowMap: Record<IconSize, number> = { sm: 2, md: 3, lg: 4 };
/** Border width */
const borderMap: Record<IconSize, number> = { sm: 1, md: 2, lg: 2 };

/**
 * Brutalist filled icon paths — solid, geometric, no rounded caps or joins.
 * Each entry is a valid SVG path `d` attribute (multiple subpaths via M are supported).
 */
const iconPaths: Record<IconName, string> = {
  dashboard: "M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z",
  analytics: "M4 14h4v6H4v-6zm6-6h4v12h-4V8zm6-4h4v16h-4V4z",
  users:
    "M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5C23 14.17 18.33 13 16 13z",
  orders:
    "M3 5v14h18V5H3zm16 12H5V9h14v8zm0-10H5V7h14v2zM8 13H7v-2h1v2zm0 4H7v-2h1v2zm9-4h-7v-2h7v2zm0 4h-7v-2h7v2z",
  products:
    "M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-1.5 1.5L20.46 12H17V9.5h1.5zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm12 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z",
  settings:
    "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32a.49.49 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54A.484.484 0 0014 3h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 00-.59.22L2.81 9.47c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.57 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.21.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z",
  search:
    "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
  bell: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z",
  mail: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
  calendar:
    "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z",
  check: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
  close:
    "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
  plus: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",
  minus: "M19 13H5v-2h14v2z",
  "arrow-left": "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z",
  "arrow-right": "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z",
  "arrow-up": "M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z",
  "arrow-down": "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z",
  edit: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 000-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",
  trash:
    "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",
  eye: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z",
  "eye-off":
    "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75C21.27 7.61 17 4.5 12 4.5c-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z",
  filter: "M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z",
  download: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z",
  more: "M3 10.5h3v3H3v-3zm7.5 0h3v3h-3v-3zm7.5 0h3v3h-3v-3z",
};

/**
 * Brutalist functional icon — black filled icon inside a colored square with black border and offset shadow.
 * Matches the Pictogram design language: flat colored box, 1px black border, hard offset shadow, black icon.
 *
 * Use `size="sm"` (24px box) in tight UI, `size="md"` (32px box) as default,
 * and `size="lg"` (48px box) in navigation or feature contexts.
 * Use `bg` to set the box background color (defaults to var(--drp-mint)).
 *
 * @example
 * <Icon name="search" />
 * <Icon name="trash" bg="var(--drp-pink)" />
 * <Icon name="check" size="lg" bg="var(--drp-purple)" />
 */
export function Icon({
  name,
  size = "md",
  bg = "var(--drp-mint)",
  className = "",
}: IconProps) {
  const outer = outerSizeMap[size];
  const inner = innerSizeMap[size];
  const shadow = shadowMap[size];
  const border = borderMap[size];

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: outer,
        height: outer,
        background: bg,
        border: `${border}px solid #000000`,
        boxShadow: `${shadow}px ${shadow}px 0 0 #000000`,
        flexShrink: 0,
        borderRadius: 0,
      }}
      className={className || undefined}
      aria-hidden="true"
    >
      <svg
        width={inner}
        height={inner}
        viewBox="0 0 24 24"
        fill="#000000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={iconPaths[name]} />
      </svg>
    </span>
  );
}
