import React from "react";
import { PICTOGRAMS, PictogramName } from "./pictograms";

export interface PictogramProps {
  name: PictogramName;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
  "aria-hidden"?: boolean;
  "aria-label"?: string;
}

export const Pictogram: React.FC<PictogramProps> = ({
  name,
  size = 24,
  className,
  style,
  "aria-hidden": ariaHidden,
  "aria-label": ariaLabel,
}) => {
  const svg = PICTOGRAMS[name];
  if (!svg) return null;

  return (
    <span
      className={className}
      style={{ display: "inline-flex", width: size, height: size, flexShrink: 0, ...style }}
      aria-hidden={ariaHidden}
      aria-label={ariaLabel}
      role={ariaLabel ? "img" : undefined}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};
