export interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

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
