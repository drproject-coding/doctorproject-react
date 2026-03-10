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
