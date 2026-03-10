import React, { useEffect, useRef, useState } from "react";
import { MONTHLY_LABELS, PURCHASES_COUNT, REFUNDS_COUNT } from "./_data";

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

export const PurchasesVsRefunds: React.FC = () => {
  const [year, setYear] = useState("All Years");
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
            labels: MONTHLY_LABELS,
            datasets: [
              {
                label: "Purchased",
                data: PURCHASES_COUNT,
                backgroundColor: "#7c3aed",
                borderRadius: 2,
              },
              {
                label: "Refunded",
                data: REFUNDS_COUNT,
                backgroundColor: "#10b981",
                borderRadius: 2,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: true,
                position: "top" as const,
                align: "start" as const,
                labels: { boxWidth: 12, font: { size: 11 } },
              },
            },
            scales: {
              y: {
                grid: { color: "rgba(0,0,0,0.05)" },
                ticks: { font: { size: 10 } },
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
  }, []);

  return (
    <div className="drp-card" style={{ padding: "var(--drp-space-5)" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "var(--drp-space-4)",
        }}
      >
        <h3 className="drp-card__title">Purchases vs Refunds</h3>
        <YearSelect value={year} onChange={setYear} />
      </div>
      <div style={{ height: 360 }}>
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
};
