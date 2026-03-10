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
