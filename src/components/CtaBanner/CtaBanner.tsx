import type { ReactNode } from "react";

export interface CtaBannerProps {
  title: string;
  text?: string;
  children?: ReactNode;
  className?: string;
}

export function CtaBanner({
  title,
  text,
  children,
  className = "",
}: CtaBannerProps) {
  return (
    <div className={["drp-cta", className].filter(Boolean).join(" ")}>
      <div className="drp-cta__title">{title}</div>
      {text && <p className="drp-cta__text">{text}</p>}
      {children}
    </div>
  );
}
