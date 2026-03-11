import type { HTMLAttributes, ReactNode } from "react";

type CardVariant = "raised" | "flat" | "interactive" | "sm";
type CardAccent = "purple" | "mint" | "pink" | "yellow";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  accent?: CardAccent;
  children: ReactNode;
}

export interface CardHeaderProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}

/**
 * General-purpose content container with brutalist offset-black shadow — use `variant="raised"` for prominent panels, `variant="interactive"` for clickable cards, and `accent` to add a branded left-border stripe.
 * @example
 * // Patient summary card
 * <Card variant="raised" accent="purple">
 *   <CardHeader title="Maria Gonzalez" subtitle="DOB: 12 Mar 1985" />
 *   <p>Last visit: 3 days ago</p>
 * </Card>
 */
export function Card({
  variant,
  accent,
  className = "",
  children,
  ...props
}: CardProps) {
  const classes = [
    "drp-card",
    variant && `drp-card--${variant}`,
    accent && `drp-card--${accent}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

/**
 * Standardized header section for a `Card` — renders a bold title, optional subtitle, and an optional action node (e.g. a Button or Badge) pinned to the right.
 * @example
 * <CardHeader
 *   title="Recent Appointments"
 *   subtitle="Last 30 days"
 *   action={<Button variant="ghost" size="sm">View all</Button>}
 * />
 */
export function CardHeader({ title, subtitle, action }: CardHeaderProps) {
  return (
    <div className="drp-card__header">
      <div>
        <h3 className="drp-card__title">{title}</h3>
        {subtitle && <p className="drp-card__subtitle">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}
