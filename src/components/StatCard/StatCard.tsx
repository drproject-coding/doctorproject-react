export interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

/**
 * Bold metric display card for KPI dashboards — renders a large tabular-numeric value in `var(--drp-purple)` above a small uppercase label, ideal for summary rows at the top of reports.
 * @example
 * <StatCard value="1,284" label="Patients this month" />
 * <StatCard value="94%" label="Appointment attendance" />
 */
export function StatCard({ value, label, className = "" }: StatCardProps) {
  return (
    <dl
      className={`drp-stat-card ${className}`}
      style={{
        textAlign: "center",
        padding: "var(--drp-space-8)",
        border: "var(--drp-border-chunk)",
        background: "var(--drp-surface)",
        margin: 0,
      }}
    >
      <dd
        style={{
          fontFamily: "var(--drp-font-primary)",
          fontSize: "3.5rem",
          fontWeight: 800,
          color: "var(--drp-purple)",
          lineHeight: 1,
          fontVariantNumeric: "tabular-nums",
          margin: 0,
        }}
      >
        {value}
      </dd>
      <dt
        style={{
          fontFamily: "var(--drp-font-primary)",
          fontSize: "var(--drp-text-sm)",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          marginTop: "var(--drp-space-2)",
        }}
      >
        {label}
      </dt>
    </dl>
  );
}
