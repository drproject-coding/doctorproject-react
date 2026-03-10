import type { ReactNode, CSSProperties } from "react";

type TextSize = "xs" | "sm" | "md" | "lg";
type TextWeight = "regular" | "medium" | "semibold" | "bold";

export interface TextProps {
  size?: TextSize;
  weight?: TextWeight;
  muted?: boolean;
  secondary?: boolean;
  as?: "p" | "span" | "div" | "label";
  children: ReactNode;
  className?: string;
}

export function Text({
  size,
  weight,
  muted,
  secondary,
  as: Tag = "p",
  children,
  className = "",
}: TextProps) {
  const classes = [
    "drp-text",
    size && size !== "md" && `drp-text--${size}`,
    weight && weight !== "regular" && `drp-text--${weight}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const style: CSSProperties = {};
  if (muted) {
    style.color = "var(--drp-text-muted)";
  } else if (secondary) {
    style.color = "var(--drp-text-secondary)";
  }

  return (
    <Tag
      className={classes}
      style={Object.keys(style).length ? style : undefined}
    >
      {children}
    </Tag>
  );
}
