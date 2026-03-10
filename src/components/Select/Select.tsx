import { useId, type SelectHTMLAttributes, type ReactNode } from "react";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string | boolean;
  success?: boolean;
  children: ReactNode;
}

export function Select({
  label,
  error,
  success,
  className = "",
  children,
  id,
  ...props
}: SelectProps) {
  const generatedId = useId();
  const selectId = id ?? generatedId;

  const selectEl = (
    <select
      id={selectId}
      className={[
        "drp-select",
        error && "drp-select--error",
        success && "drp-select--success",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </select>
  );

  const errorMessage =
    typeof error === "string" ? (
      <span className="drp-field__error" role="alert">
        {error}
      </span>
    ) : null;

  if (label) {
    return (
      <div className="drp-field">
        <label className="drp-field__label" htmlFor={selectId}>
          {label}
        </label>
        {selectEl}
        {errorMessage}
      </div>
    );
  }
  return (
    <>
      {selectEl}
      {errorMessage}
    </>
  );
}
