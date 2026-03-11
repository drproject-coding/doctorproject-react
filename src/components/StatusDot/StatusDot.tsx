type DotColor = "purple" | "mint" | "pink" | "yellow";

export type StatusDotProps =
  | {
      color?: DotColor;
      pulse?: boolean;
      className?: string;
      "aria-label": string;
      "aria-hidden"?: never;
    }
  | {
      color?: DotColor;
      pulse?: boolean;
      className?: string;
      "aria-label"?: never;
      "aria-hidden": true;
    };

/**
 * Small colored dot for conveying status at a glance — use `pulse` for live/active states and always provide either `aria-label` (for standalone use) or `aria-hidden={true}` (when a text label is adjacent).
 * @example
 * // Online indicator next to a user's name
 * <StatusDot color="mint" pulse aria-label="Online" />
 * // Decorative dot beside a status badge (text already describes the state)
 * <StatusDot color="pink" aria-hidden={true} /> Offline
 */
export function StatusDot({
  color,
  pulse,
  className = "",
  ...ariaProps
}: StatusDotProps) {
  const classes = [
    "drp-dot",
    color && `drp-dot--${color}`,
    pulse && "drp-dot--pulse",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return <span className={classes} {...ariaProps} />;
}
