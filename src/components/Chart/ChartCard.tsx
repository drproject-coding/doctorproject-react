import type { ReactNode } from "react";

type ChartSize = "sm" | "md" | "lg" | "xl";

export interface ChartCardProps {
  title: string;
  subtitle?: string;
  size?: ChartSize;
  children: ReactNode;
  legend?: ReactNode;
  action?: ReactNode;
  className?: string;
}

export function ChartCard({
  title,
  subtitle,
  size,
  children,
  legend,
  action,
  className = "",
}: ChartCardProps) {
  const containerClasses = ["drp-chart-card", className]
    .filter(Boolean)
    .join(" ");

  const bodyClasses = [
    "drp-chart-container",
    size && `drp-chart-container--${size}`,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={containerClasses}>
      <div className="drp-chart-header">
        <div>
          <h3 className="drp-card__title">{title}</h3>
          {subtitle && <p className="drp-card__subtitle">{subtitle}</p>}
        </div>
        {action}
      </div>
      <div className={bodyClasses}>{children}</div>
      {legend && <div className="drp-chart-legend">{legend}</div>}
    </div>
  );
}
