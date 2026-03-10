import type { CSSProperties } from "react";

export interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  variant?: "text" | "rectangular" | "circular";
  className?: string;
}

export function Skeleton({
  width,
  height,
  variant = "text",
  className = "",
}: SkeletonProps) {
  const baseStyle: CSSProperties = {
    background:
      "linear-gradient(90deg, rgba(0,0,0,0.06) 25%, rgba(0,0,0,0.12) 50%, rgba(0,0,0,0.06) 75%)",
    backgroundSize: "200% 100%",
    animation: "drp-shimmer 1.5s ease-in-out infinite",
    border: "1px solid rgba(0,0,0,0.08)",
  };

  if (variant === "text") {
    Object.assign(baseStyle, {
      width: width || "100%",
      height: height || "14px",
    });
  } else if (variant === "circular") {
    const size = width || height || 48;
    Object.assign(baseStyle, {
      width: size,
      height: size,
      borderRadius: "50%",
    });
  } else {
    Object.assign(baseStyle, {
      width: width || "100%",
      height: height || "120px",
    });
  }

  return (
    <>
      <div className={className} style={baseStyle} aria-hidden="true" />
      <style>{`
        @keyframes drp-shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
        @media (prefers-reduced-motion: reduce) { .drp-skeleton-shimmer { animation: none !important; } }
      `}</style>
    </>
  );
}
