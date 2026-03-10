import React, { useEffect, useRef, useState } from "react";
import { MONTHLY_LABELS, MONTHLY_SPEND } from "./_data";

const StatCard: React.FC<{ label: string; value: string; accent?: string }> = ({
  label,
  value,
  accent,
}) => (
  <div className="drp-card" style={{ padding: "var(--drp-space-5)", flex: 1 }}>
    <p
      className="drp-text drp-text--xs drp-text--muted"
      style={{
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        marginBottom: "var(--drp-space-2)",
      }}
    >
      {label}
    </p>
    <p
      style={{
        fontSize: "1.6rem",
        fontWeight: 800,
        color: accent ?? "inherit",
      }}
    >
      {value}
    </p>
  </div>
);

const YearSelect: React.FC<{
  value: string;
  onChange: (v: string) => void;
}> = ({ value, onChange }) => (
  <select
    className="drp-select"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    style={{ fontSize: "var(--drp-text-xs)", padding: "2px 8px", height: 28 }}
  >
    {["All Years", "2022", "2023", "2024", "2025", "2026"].map((y) => (
      <option key={y}>{y}</option>
    ))}
  </select>
);

const BarChart: React.FC<{
  labels: string[];
  values: number[];
  height?: number;
}> = ({ labels, values, height = 320 }) => {
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
            labels,
            datasets: [
              { data: values, backgroundColor: "#7c3aed", borderRadius: 2 },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
              y: {
                grid: { color: "rgba(0,0,0,0.05)" },
                ticks: {
                  font: { size: 10 },
                  callback: (v: unknown) =>
                    `$${(Number(v) / 1000).toFixed(0)}k`,
                },
              },
              x: {
                grid: { display: false },
                ticks: { font: { size: 8 }, maxRotation: 45 },
              },
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
  }, [labels, values]);
  return (
    <div style={{ height }}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export const MonthlySpending: React.FC = () => {
  const [year, setYear] = useState("All Years");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--drp-space-5)",
      }}
    >
      <div style={{ display: "flex", gap: "var(--drp-space-4)" }}>
        <StatCard label="Net Spent" value="$34,177.66" accent="#7c3aed" />
        <StatCard label="Total Charged" value="$37,006.09" />
      </div>
      <div className="drp-card" style={{ padding: "var(--drp-space-5)" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "var(--drp-space-4)",
          }}
        >
          <h3 className="drp-card__title">Monthly Spending</h3>
          <YearSelect value={year} onChange={setYear} />
        </div>
        <BarChart labels={MONTHLY_LABELS} values={MONTHLY_SPEND} />
      </div>
    </div>
  );
};
