import React, { useEffect, useRef } from "react";
import { MONTHLY_LABELS } from "./_data";

const CATEGORIES = [
  { name: "Marketing & sales", count: 81, color: "#7c3aed" },
  { name: "Operations", count: 56, color: "#f97316" },
  { name: "Unknown", count: 49, color: "#10b981" },
  { name: "Media tools", count: 21, color: "#e11d48" },
  { name: "Build it yourself", count: 18, color: "#f59e0b" },
  { name: "Development & IT", count: 13, color: "#14b8a6" },
  { name: "Business strategy & skills", count: 7, color: "#6366f1" },
  { name: "Customer experience", count: 6, color: "#ec4899" },
];

// Sparse monthly data per category (every 4th month for performance)
const SPARSE_LABELS = MONTHLY_LABELS.filter((_, i) => i % 2 === 0);
const CATEGORY_TRENDS: Record<string, number[]> = {
  "Marketing & sales": [
    500, 300, 600, 800, 400, 700, 1200, 500, 400, 600, 1000, 800, 300, 400,
    2500, 1200, 400, 300,
  ],
  Operations: [
    200, 100, 400, 300, 500, 600, 800, 400, 300, 200, 700, 500, 300, 200, 1200,
    800, 200, 100,
  ],
  Unknown: [
    0, 200, 0, 0, 200, 0, 1800, 2000, 0, 0, 0, 200, 0, 0, 200, 600, 0, 0,
  ],
  "Media tools": [
    0, 100, 200, 0, 100, 200, 300, 0, 200, 100, 400, 100, 0, 200, 300, 200, 100,
    0,
  ],
  "Build it yourself": [
    100, 0, 100, 200, 0, 100, 200, 100, 0, 200, 100, 0, 100, 0, 200, 400, 100,
    0,
  ],
};

const RadarChart: React.FC = () => {
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
          type: "radar",
          data: {
            labels: CATEGORIES.map((c) => c.name),
            datasets: [
              {
                data: CATEGORIES.map((c) => c.count),
                backgroundColor: "rgba(124,58,237,0.2)",
                borderColor: "#7c3aed",
                pointBackgroundColor: "#7c3aed",
                pointRadius: 4,
                borderWidth: 2,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
              r: {
                ticks: { font: { size: 8 }, backdropColor: "transparent" },
                grid: { color: "rgba(0,0,0,0.08)" },
                pointLabels: { font: { size: 9 } },
              },
            },
          },
        });
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
    <div style={{ height: 280 }}>
      <canvas ref={canvasRef} />
    </div>
  );
};

const CategoryTrendsChart: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    let chart: unknown;
    const init = async () => {
      try {
        const { Chart, registerables } = await import("chart.js");
        Chart.register(...registerables);
        const ctx = canvasRef.current?.getContext("2d");
        if (!ctx) return;
        const top5 = CATEGORIES.slice(0, 5);
        chart = new Chart(ctx, {
          type: "line",
          data: {
            labels: SPARSE_LABELS,
            datasets: top5.map((cat) => ({
              label: cat.name,
              data: CATEGORY_TRENDS[cat.name] ?? [],
              borderColor: cat.color,
              backgroundColor: "transparent",
              pointBackgroundColor: cat.color,
              pointRadius: 2,
              borderWidth: 1.5,
              tension: 0.3,
            })),
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: true,
                position: "top" as const,
                labels: {
                  boxWidth: 10,
                  font: { size: 9 },
                  usePointStyle: true,
                },
              },
            },
            scales: {
              y: {
                grid: { color: "rgba(0,0,0,0.05)" },
                ticks: {
                  font: { size: 9 },
                  callback: (v: unknown) => `$${Number(v)}`,
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
  }, []);
  return (
    <div style={{ height: 280 }}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export const PortfolioAnalysis: React.FC = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--drp-space-5)",
    }}
  >
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "var(--drp-space-4)",
      }}
    >
      <div className="drp-card" style={{ padding: "var(--drp-space-5)" }}>
        <h3
          className="drp-card__title"
          style={{ marginBottom: "var(--drp-space-4)" }}
        >
          Category Distribution
        </h3>
        <RadarChart />
      </div>
      <div className="drp-card" style={{ padding: "var(--drp-space-5)" }}>
        <h3
          className="drp-card__title"
          style={{ marginBottom: "var(--drp-space-4)" }}
        >
          Category Spending Trends
        </h3>
        <CategoryTrendsChart />
      </div>
    </div>

    {/* Category count cards */}
    <div
      style={{ display: "flex", flexWrap: "wrap", gap: "var(--drp-space-3)" }}
    >
      {CATEGORIES.map((cat) => (
        <div
          key={cat.name}
          className="drp-card"
          style={{
            padding: "var(--drp-space-4)",
            flex: "1 1 140px",
            textAlign: "center",
          }}
        >
          <p
            className="drp-text drp-text--xs drp-text--muted"
            style={{ marginBottom: "var(--drp-space-2)" }}
          >
            {cat.name}
          </p>
          <p style={{ fontSize: "1.6rem", fontWeight: 800, color: "#7c3aed" }}>
            {cat.count}
          </p>
        </div>
      ))}
    </div>
  </div>
);
