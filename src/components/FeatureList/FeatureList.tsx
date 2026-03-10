import type { ReactNode } from "react";

export interface FeatureItem {
  icon: ReactNode;
  title: string;
  text: string;
}

export interface FeatureListProps {
  features: FeatureItem[];
  className?: string;
}

export function FeatureList({ features, className = "" }: FeatureListProps) {
  return (
    <div className={["drp-features", className].filter(Boolean).join(" ")}>
      {features.map((f, i) => (
        <div key={i} className="drp-feature">
          <div className="drp-feature__icon">{f.icon}</div>
          <div className="drp-feature__title">{f.title}</div>
          <div className="drp-feature__text">{f.text}</div>
        </div>
      ))}
    </div>
  );
}
