import type { ReactNode } from "react";

export interface CaseCardProps {
  image?: ReactNode;
  imageLabel?: string;
  imageColor?: string;
  stat: string;
  statLabel: string;
  title: string;
  description: string;
  className?: string;
}

export function CaseCard({
  image,
  imageLabel,
  imageColor = "var(--drp-purple)",
  stat,
  statLabel,
  title,
  description,
  className = "",
}: CaseCardProps) {
  return (
    <div
      className={className}
      style={{
        border: "1px solid var(--drp-black)",
        background: "var(--drp-surface)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "200px",
          background: imageColor,
          borderBottom: "1px solid var(--drp-black)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--drp-font-primary)",
          fontSize: "2rem",
          fontWeight: 800,
          color: "#FFFFFF",
        }}
      >
        {image || imageLabel}
      </div>
      <div style={{ padding: "var(--drp-space-6)" }}>
        <p
          style={{
            fontFamily: "var(--drp-font-primary)",
            fontSize: "2.5rem",
            fontWeight: 800,
            color: "var(--drp-orange)",
            marginBottom: "8px",
          }}
        >
          {stat}
        </p>
        <p style={{ fontSize: "14px", marginBottom: "16px" }}>{statLabel}</p>
        <h3
          style={{
            fontFamily: "var(--drp-font-primary)",
            fontSize: "18px",
            fontWeight: 700,
            marginBottom: "8px",
          }}
        >
          {title}
        </h3>
        <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.6 }}>
          {description}
        </p>
      </div>
    </div>
  );
}
