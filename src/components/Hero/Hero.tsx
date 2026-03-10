import type { ReactNode } from "react";

export interface HeroProps {
  badge?: ReactNode;
  title: ReactNode;
  subtitle?: string;
  actions?: ReactNode;
  visual?: ReactNode;
  className?: string;
}

export function Hero({
  badge,
  title,
  subtitle,
  actions,
  visual,
  className = "",
}: HeroProps) {
  return (
    <section className={`drp-hero ${className}`}>
      <div className="drp-hero__content">
        {badge && <div className="drp-hero__badge">{badge}</div>}
        <h1 className="drp-hero__title">{title}</h1>
        {subtitle && <p className="drp-hero__subtitle">{subtitle}</p>}
        {actions && <div className="drp-hero__actions">{actions}</div>}
      </div>
      {visual && <div className="drp-hero__visual">{visual}</div>}
    </section>
  );
}
