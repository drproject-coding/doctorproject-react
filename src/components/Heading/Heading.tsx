import type { ReactNode, CSSProperties } from "react";

export interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  uppercase?: boolean;
  className?: string;
}

/**
 * Semantic heading element (`h1`–`h6`) with DS typography tokens — use `uppercase` for section labels and dashboard module titles that need extra visual weight.
 * @example
 * // Page title
 * <Heading level={1}>Patient Overview</Heading>
 * // Section label with caps treatment
 * <Heading level={3} uppercase>Recent Activity</Heading>
 */
export function Heading({
  level = 1,
  children,
  uppercase,
  className = "",
}: HeadingProps) {
  const Tag = `h${level}` as const;

  const classes = [`drp-h${level}`, className].filter(Boolean).join(" ");

  const style: CSSProperties = {
    textWrap: "balance" as CSSProperties["textWrap"],
    ...(uppercase && {
      textTransform: "uppercase",
      letterSpacing: "var(--drp-tracking-caps)",
      fontWeight: "var(--drp-weight-heavy)",
    }),
  };

  return (
    <Tag className={classes} style={style}>
      {children}
    </Tag>
  );
}
