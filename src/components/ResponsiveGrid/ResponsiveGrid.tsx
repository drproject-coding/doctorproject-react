import type { CSSProperties, ElementType, HTMLAttributes } from "react";

export interface ResponsiveGridProps extends HTMLAttributes<HTMLElement> {
  /**
   * Number of columns at each breakpoint.
   * Uses CSS custom properties for media query injection via inline class.
   * Falls back gracefully: mobile (1) → tablet (cols/2) → desktop (cols).
   */
  cols?: number;
  /** Desktop columns (≥1024px). Defaults to `cols`. */
  colsLg?: number;
  /** Tablet columns (≤768px). Defaults to Math.ceil(cols/2). */
  colsMd?: number;
  /** Mobile columns (≤390px). Defaults to 1. */
  colsSm?: number;
  gap?: string;
  as?: ElementType;
}

let _styleInjected = false;

function injectGridStyles() {
  if (typeof document === "undefined" || _styleInjected) return;
  _styleInjected = true;
  const style = document.createElement("style");
  style.textContent = `
    .drp-responsive-grid { display: grid; }
    @media (max-width: 768px)  { .drp-responsive-grid { grid-template-columns: repeat(var(--drp-cols-md, var(--drp-cols, 1)), 1fr) !important; } }
    @media (max-width: 390px)  { .drp-responsive-grid { grid-template-columns: repeat(var(--drp-cols-sm, 1), 1fr) !important; } }
  `;
  document.head.appendChild(style);
}

export function ResponsiveGrid({
  cols = 2,
  colsLg,
  colsMd,
  colsSm = 1,
  gap = "var(--drp-space-4)",
  as: Tag = "div",
  style,
  className = "",
  children,
  ...rest
}: ResponsiveGridProps) {
  if (typeof document !== "undefined") injectGridStyles();

  const desktopCols = colsLg ?? cols;
  const tabletCols = colsMd ?? Math.max(1, Math.ceil(desktopCols / 2));

  const gridStyle: CSSProperties = {
    gridTemplateColumns: `repeat(${desktopCols}, 1fr)`,
    gap,
    ["--drp-cols" as string]: desktopCols,
    ["--drp-cols-md" as string]: tabletCols,
    ["--drp-cols-sm" as string]: colsSm,
    ...style,
  };

  return (
    <Tag
      className={`drp-responsive-grid ${className}`.trim()}
      style={gridStyle}
      {...rest}
    >
      {children}
    </Tag>
  );
}
