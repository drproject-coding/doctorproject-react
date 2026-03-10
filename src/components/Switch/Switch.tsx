import type { InputHTMLAttributes } from "react";

type SwitchBaseProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

export type SwitchProps =
  | (SwitchBaseProps & { label: string; "aria-label"?: string })
  | (SwitchBaseProps & { label?: never; "aria-label": string });

export function Switch({ label, ...props }: SwitchProps) {
  return (
    <label className="drp-switch">
      <input type="checkbox" {...props} />
      <span className="drp-switch__track">
        <span className="drp-switch__knob" />
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
