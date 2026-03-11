import type { ReactNode } from "react";

type BadgeVariant =
  | "filled"
  | "primary"
  | "secondary"
  | "outline"
  | "mint"
  | "pink";

export interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

/**
 * Small label used to highlight status, counts, or categorical metadata inline with other content.
 * @example
 * // Status badge next to a plan name
 * <Badge variant="mint">Active</Badge>
 * // Count indicator
 * <Badge variant="pink">3 overdue</Badge>
 */
export function Badge({ children, variant, className = "" }: BadgeProps) {
  const classes = ["drp-badge", variant && `drp-badge--${variant}`, className]
    .filter(Boolean)
    .join(" ");
  return <span className={classes}>{children}</span>;
}
