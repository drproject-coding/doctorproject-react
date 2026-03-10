import React, { useEffect, useRef } from "react";
import { MONTHLY_LABELS, MONTHLY_SPEND, REFUNDS_COUNT } from "./_data";

// Monthly refund $ (approximated)
const REFUND_AMOUNTS = REFUNDS_COUNT.map((n) => n * 99);

export const FinancialHealth: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let chart: unknown;
    const init = async () => {
      try {
        const { Chart, registerables } = await import("chart.js");
        Chart.register(...registerables);
        const ctx = canvasRef.current?.getContext("2d");
        if (!ctx) return;

        const gradPurple = ctx.createLinearGradient(0, 0, 0, 360);
        gradPurple.addColorStop(0, "rgba(124,58,237,0.25)");
        gradPurple.addColorStop(1, "rgba(124,58,237,0)");

        const gradGreen = ctx.createLinearGradient(0, 0, 0, 360);
        gradGreen.addColorStop(0, "rgba(16,185,129,0.2)");
        gradGreen.addColorStop(1, "rgba(16,185,129,0)");

        chart = new Chart(ctx, {
          type: "line",
          data: {
            labels: MONTHLY_LABELS,
            datasets: [
              {
                label: "Spending",
                data: MONTHLY_SPEND,
                borderColor: "#7c3aed",
                backgroundColor: gradPurple,
                fill: true,
                pointBackgroundColor: "#7c3aed",
                pointRadius: 3,
                borderWidth: 2,
                tension: 0.3,
              },
              {
                label: "Refunds",
                data: REFUND_AMOUNTS,
                borderColor: "#10b981",
                backgroundColor: gradGreen,
                fill: true,
                pointBackgroundColor: "#10b981",
                pointRadius: 3,
                borderWidth: 2,
                tension: 0.3,
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
                align: "center" as const,
                labels: {
                  boxWidth: 10,
                  usePointStyle: true,
                  font: { size: 11 },
                },
              },
            },
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
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--drp-space-5)",
      }}
    >
      <div style={{ display: "flex", gap: "var(--drp-space-4)" }}>
        {[
          { label: "Net Spent", value: "$34,177.66", accent: "#7c3aed" },
          { label: "Total Charged", value: "$37,006.09" },
          { label: "Refunded", value: "$2,828.43" },
          { label: "Refund Rate", value: "7.6%" },
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

      <div className="drp-card" style={{ padding: "var(--drp-space-5)" }}>
        <h3
          className="drp-card__title"
          style={{ marginBottom: "var(--drp-space-4)" }}
        >
          Spending vs Refunds Trend
        </h3>
        <div style={{ height: 360 }}>
          <canvas ref={canvasRef} />
        </div>
      </div>
    </div>
  );
};
