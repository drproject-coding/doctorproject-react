import type { ReactNode } from "react";

export interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  features: string[];
  featured?: boolean;
  badge?: string;
  action?: ReactNode;
  className?: string;
}

export function PricingCard({
  title,
  price,
  period,
  features,
  featured,
  badge,
  action,
  className = "",
}: PricingCardProps) {
  const classes = [
    "drp-pricing",
    featured && "drp-pricing--featured",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <div
      className={classes}
      style={{
        padding: "var(--drp-space-8)",
        border: "3px solid var(--drp-black)",
        background: featured ? "var(--drp-purple)" : "var(--drp-surface)",
        color: featured ? "#FFFFFF" : "inherit",
        textAlign: "center",
        position: "relative",
      }}
    >
      {badge && (
        <div
          style={{
            position: "absolute",
            top: "-12px",
            left: "50%",
            transform: "translateX(-50%)",
            padding: "2px 16px",
            background: "var(--drp-orange)",
            color: "#FFFFFF",
            fontFamily: "var(--drp-font-primary)",
            fontSize: "11px",
            fontWeight: 700,
            textTransform: "uppercase",
            border: "2px solid var(--drp-black)",
          }}
        >
          {badge}
        </div>
      )}
      <p
        style={{
          fontFamily: "var(--drp-font-primary)",
          fontSize: "12px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          marginBottom: "16px",
        }}
      >
        {title}
      </p>
      <p
        style={{
          fontFamily: "var(--drp-font-primary)",
          fontSize: "2.5rem",
          fontWeight: 800,
          marginBottom: "8px",
        }}
      >
        {price}
      </p>
      {period && (
        <p
          style={{
            fontFamily: "var(--drp-font-mono)",
            fontSize: "11px",
            opacity: 0.7,
            marginBottom: "24px",
          }}
        >
          {period}
        </p>
      )}
      <ul
        style={{
          listStyle: "none",
          textAlign: "left",
          marginBottom: "24px",
          padding: 0,
        }}
      >
        {features.map((f, i) => (
          <li
            key={i}
            style={{
              fontFamily: "var(--drp-font-mono)",
              fontSize: "13px",
              padding: "8px 0",
              borderBottom: "1px solid rgba(128,128,128,0.3)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span
              style={{
                fontWeight: 700,
                color: featured ? "#FFFFFF" : "var(--drp-success)",
              }}
            >
              ✓
            </span>
            {f}
          </li>
        ))}
      </ul>
      {action}
    </div>
  );
}
