import type { InputHTMLAttributes } from "react";

export interface RadioProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label: string;
  color?: "pink" | "purple";
  dark?: boolean;
  error?: boolean;
}

export function Radio({
  label,
  color,
  dark,
  error,
  className = "",
  ...props
}: RadioProps) {
  const classes = [
    "drp-radio",
    color && `drp-radio--${color}`,
    dark && "drp-radio--dark",
    error && "drp-radio--error",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <label className={classes}>
      <input type="radio" {...props} />
      {label}
    </label>
  );
}
