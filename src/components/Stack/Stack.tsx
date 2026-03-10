import type { CSSProperties, ElementType, HTMLAttributes } from "react";

export interface StackProps extends HTMLAttributes<HTMLElement> {
  /** Stack direction. "column" (default) = vertical, "row" = horizontal */
  direction?: "column" | "row";
  /** Gap between children. Accepts CSS values (e.g. "8px", "var(--drp-space-4)") */
  gap?: string;
  /**
   * Responsive breakpoint at which a "row" stack switches to "column".
   * Only applies when direction="row". E.g. "768px".
   */
  wrap?: boolean;
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  /** HTML element to render. Defaults to "div". */
  as?: ElementType;
}

export function Stack({
  direction = "column",
  gap = "var(--drp-space-4)",
  wrap,
  align,
  justify,
  as: Tag = "div",
  style,
  children,
  ...rest
}: StackProps) {
  const stackStyle: CSSProperties = {
    display: "flex",
    flexDirection: direction,
    gap,
    alignItems: align,
    justifyContent: justify,
    flexWrap: wrap ? "wrap" : undefined,
    ...style,
  };

  return (
    <Tag style={stackStyle} {...rest}>
      {children}
    </Tag>
  );
}
