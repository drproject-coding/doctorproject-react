type AvatarSize = "sm" | "lg";

const SIZE_PX: Record<string, number> = { sm: 32, lg: 64 };

export interface AvatarProps {
  src?: string;
  alt?: string;
  size?: AvatarSize;
  initials?: string;
  /** Required when no visible label is present (initials-only avatar) */
  "aria-label"?: string;
  className?: string;
}

export function Avatar({
  src,
  alt = "",
  size,
  initials,
  "aria-label": ariaLabel,
  className = "",
}: AvatarProps) {
  const classes = ["drp-avatar", size && `drp-avatar--${size}`, className]
    .filter(Boolean)
    .join(" ");

  const px = size ? SIZE_PX[size] : 48;

  if (src) {
    return (
      <img className={classes} src={src} alt={alt} width={px} height={px} />
    );
  }

  return (
    <div
      className={classes}
      aria-label={ariaLabel}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--drp-font-primary)",
        fontWeight: 700,
        fontSize: size === "sm" ? "14px" : size === "lg" ? "32px" : "20px",
        background: "var(--drp-purple-20)",
        color: "var(--drp-purple)",
      }}
    >
      {initials || "?"}
    </div>
  );
}
