import { useState } from "react";

export interface CounterProps {
  value?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
}

/**
 * Stepper control for selecting a small integer quantity — use when a numeric input alone is error-prone and the valid range is bounded (e.g. number of doses, session slots).
 * @example
 * // Appointment slot selector (1–10)
 * <Counter
 *   value={slots}
 *   min={1}
 *   max={10}
 *   onChange={(n) => setSlots(n)}
 * />
 */
export function Counter({
  value: controlledValue,
  min = 0,
  max = 99,
  onChange,
}: CounterProps) {
  const [internalValue, setInternalValue] = useState(controlledValue ?? min);
  const value = controlledValue ?? internalValue;

  const update = (next: number) => {
    const clamped = Math.min(max, Math.max(min, next));
    setInternalValue(clamped);
    onChange?.(clamped);
  };

  return (
    <div className="drp-counter">
      <button
        className="drp-counter__btn"
        onClick={() => update(value - 1)}
        disabled={value <= min}
      >
        −
      </button>
      <input
        className="drp-counter__value"
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={(e) => update(Number(e.target.value))}
        readOnly
      />
      <button
        className="drp-counter__btn"
        onClick={() => update(value + 1)}
        disabled={value >= max}
      >
        +
      </button>
    </div>
  );
}
