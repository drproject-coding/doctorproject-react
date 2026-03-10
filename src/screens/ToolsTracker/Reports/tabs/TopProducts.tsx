import React, { useEffect, useRef } from "react";

const TOP_10 = [
  { name: "Escape Artist Course + Co...", value: 999, color: "#7c3aed" },
  { name: "Bind AI", value: 900, color: "#f97316" },
  { name: "Alter", value: 720, color: "#10b981" },
  { name: "Minvo", value: 611, color: "#e11d48" },
  { name: "MultiLipi", value: 607, color: "#f59e0b" },
  { name: "Visitor Tracking - Unlimi...", value: 604, color: "#14b8a6" },
  { name: "Bind AI - Plus Exclusive", value: 602, color: "#ec4899" },
  { name: "1forAll : Your All-in-One...", value: 598, color: "#06b6d4" },
  { name: "Boring Products, Fun Ads", value: 540, color: "#6366f1" },
  { name: "CONSULTATION SPECIALISEE ...", value: 510, color: "#9ca3af" },
];

const REFUND_WINDOW = [
  { name: "Tabby", pct: 100, days: null, color: "#d1d5db" },
  { name: "Pretty Prompt", pct: 100, days: null, color: "#d1d5db" },
  { name: "SheetXAI", pct: 100, days: null, color: "#d1d5db" },
  { name: "VisualSitemaps", pct: 18, days: 9, color: "#f97316" },
  { name: "WriterZen", pct: 18, days: 9, color: "#f97316" },
  { name: "Meeting Brunch", pct: 36, days: 18, color: "#f59e0b" },
  { name: "TubeOnAI", pct: 66, days: 33, color: "#10b981" },
  { name: "BrowserAct", pct: 66, days: 33, color: "#10b981" },
  { name: "Pyrsonalize", pct: 74, days: 37, color: "#10b981" },
  { name: "Pyrsonalize (2)", pct: 74, days: 37, color: "#10b981" },
];

const HorizBar: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    let chart: unknown;
    const init = async () => {
      try {
        const { Chart, registerables } = await import("chart.js");
        Chart.register(...registerables);
        const ctx = canvasRef.current?.getContext("2d");
        if (!ctx) return;
        chart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: TOP_10.map((p) => p.name),
            datasets: [
              {
                data: TOP_10.map((p) => p.value),
                backgroundColor: TOP_10.map((p) => p.color),
                borderRadius: 2,
              },
            ],
          },
          options: {
            indexAxis: "y",
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
              x: {
                grid: { color: "rgba(0,0,0,0.05)" },
                ticks: {
                  font: { size: 9 },
                  callback: (v: unknown) => `$${Number(v)}`,
                },
              },
              y: { grid: { display: false }, ticks: { font: { size: 9 } } },
            },
          },
        } as any);
      } catch {
        /* SSR */
      }
    };
    init();
    return () => {
      (chart as any)?.destroy();
    };
  }, []);
  return (
    <div style={{ height: 300 }}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export const TopProducts: React.FC = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--drp-space-5)",
    }}
  >
    {/* Stat cards */}
    <div style={{ display: "flex", gap: "var(--drp-space-4)" }}>
      {[
        { label: "Net Spent", value: "$34,177.66", accent: "#7c3aed" },
        { label: "Total Charged", value: "$37,006.09" },
        { label: "Refunded", value: "$2,828.43" },
      ].map((s) => (
        <div
          key={s.label}
          className="drp-card"
          style={{ padding: "var(--drp-space-5)", flex: 1 }}
        >
          <p
            className="drp-text drp-text--xs drp-text--muted"
            style={{
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "var(--drp-space-2)",
            }}
          >
            {s.label}
          </p>
          <p
            style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              color: s.accent ?? "inherit",
            }}
          >
            {s.value}
          </p>
        </div>
      ))}
    </div>

    {/* Top 10 horizontal bar */}
    <div className="drp-card" style={{ padding: "var(--drp-space-5)" }}>
      <h3
        className="drp-card__title"
        style={{ marginBottom: "var(--drp-space-4)" }}
      >
        Top 10 Products by Estimated Price
      </h3>
      <HorizBar />
    </div>

    {/* Refund Window Remaining */}
    <div className="drp-card" style={{ padding: "var(--drp-space-5)" }}>
      <h3
        className="drp-card__title"
        style={{ marginBottom: "var(--drp-space-4)" }}
      >
        Refund Window Remaining
      </h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--drp-space-3)",
        }}
      >
        {REFUND_WINDOW.map((item) => (
          <div
            key={item.name}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--drp-space-3)",
            }}
          >
            <span
              style={{
                minWidth: 130,
                fontSize: "var(--drp-text-sm)",
                color: "#374151",
              }}
            >
              {item.name}
            </span>
            <div
              style={{
                flex: 1,
                height: 6,
                background: "#e5e7eb",
                borderRadius: 3,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${item.pct}%`,
                  height: "100%",
                  background: item.color,
                  borderRadius: 3,
                }}
              />
            </div>
            <span
              style={{
                minWidth: 60,
                fontSize: "var(--drp-text-xs)",
                fontWeight: 600,
                textAlign: "right",
                color: item.days === null ? "#9ca3af" : item.color,
              }}
            >
              {item.days === null ? "Expired" : `${item.days}d left`}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);
