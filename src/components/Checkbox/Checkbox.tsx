import type { InputHTMLAttributes } from "react";

export interface CheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label: string;
  dark?: boolean;
}

export function Checkbox({
  label,
  dark,
  className = "",
  ...props
}: CheckboxProps) {
  const classes = ["drp-checkbox", dark && "drp-checkbox--dark", className]
    .filter(Boolean)
    .join(" ");
  return (
    <label className={classes}>
      <input type="checkbox" {...props} />
      {label}
    </label>
  );
}
