import type { InputHTMLAttributes } from "react";

export interface CheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label: string;
  dark?: boolean;
}

/**
 * Accessible checkbox input with an associated visible label — use `dark` on dark-background surfaces such as panels with `var(--drp-purple)` fill.
 * @example
 * // Consent checkbox in a form
 * <Checkbox
 *   label="I agree to the terms and conditions"
 *   checked={agreed}
 *   onChange={(e) => setAgreed(e.target.checked)}
 * />
 * // Pre-checked option on a dark panel
 * <Checkbox label="Send appointment reminders via SMS" dark defaultChecked />
 */
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
