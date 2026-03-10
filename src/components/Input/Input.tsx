import { useId, type InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string | boolean;
  success?: boolean;
}

export function Input({
  label,
  error,
  success,
  className = "",
  id,
  spellCheck,
  type,
  ...props
}: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  const resolvedSpellCheck =
    spellCheck ?? (type === "email" || type === "password" ? false : undefined);

  const inputClasses = [
    "drp-input",
    error && "drp-input--error",
    success && "drp-input--success",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const errorMessage =
    typeof error === "string" ? (
      <span className="drp-field__error" role="alert">
        {error}
      </span>
    ) : null;

  if (label) {
    return (
      <div className="drp-field">
        <label className="drp-field__label" htmlFor={inputId}>
          {label}
        </label>
        <input
          id={inputId}
          type={type}
          className={inputClasses}
          spellCheck={resolvedSpellCheck}
          {...props}
        />
        {errorMessage}
      </div>
    );
  }
  return (
    <>
      <input
        id={inputId}
        type={type}
        className={inputClasses}
        spellCheck={resolvedSpellCheck}
        {...props}
      />
      {errorMessage}
    </>
  );
}
