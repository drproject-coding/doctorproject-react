import { useState } from "react";

export interface TabItem {
  label: string;
  key: string;
}

export interface TabsProps {
  items: TabItem[];
  activeKey?: string;
  onChange?: (key: string) => void;
  variant?: "underline";
  className?: string;
}

/**
 * Keyboard-accessible tab bar for switching between content panels — manage active state externally via `activeKey`/`onChange` for controlled use, or let it self-manage for simple cases.
 * @example
 * <Tabs
 *   items={[
 *     { key: "overview", label: "Overview" },
 *     { key: "history", label: "Medical History" },
 *     { key: "billing", label: "Billing" },
 *   ]}
 *   activeKey={activeTab}
 *   onChange={setActiveTab}
 * />
 */
export function Tabs({
  items,
  activeKey,
  onChange,
  variant,
  className = "",
}: TabsProps) {
  const [internalKey, setInternalKey] = useState(items[0]?.key);
  const current = activeKey ?? internalKey;

  const containerClasses = [
    "drp-tabs",
    variant && `drp-tabs--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex: number | null = null;
    if (e.key === "ArrowRight") {
      nextIndex = (index + 1) % items.length;
    } else if (e.key === "ArrowLeft") {
      nextIndex = (index - 1 + items.length) % items.length;
    }
    if (nextIndex !== null) {
      e.preventDefault();
      const nextKey = items[nextIndex].key;
      setInternalKey(nextKey);
      onChange?.(nextKey);
    }
  };

  return (
    <div className={containerClasses} role="tablist">
      {items.map((item, index) => (
        <button
          key={item.key}
          role="tab"
          aria-selected={current === item.key}
          className={`drp-tab ${current === item.key ? "drp-tab--active" : ""}`}
          onClick={() => {
            setInternalKey(item.key);
            onChange?.(item.key);
          }}
          onKeyDown={(e) => handleKeyDown(e, index)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
