import React, { useEffect, useRef } from "react";
import { MONTHLY_LABELS, CUMULATIVE_SPEND } from "./_data";

const PRODUCT_CARDS = [
  {
    initials: "AR",
    bg: "#7c3aed",
    name: "Escape Artist Cour...",
    tier: "Standard",
    price: "$999.00",
    status: "PAID",
    statusColor: "#f59e0b",
  },
  {
    img: true,
    bg: "#111",
    name: "Bind AI",
    tier: "License Tier 7",
    price: "$900.00",
    status: "ACTIVATED",
    statusColor: "#10b981",
  },
  {
    initials: "AR",
    bg: "#7c3aed",
    name: "Alter",
    tier: "Life time",
    price: "$720.00",
    status: "PAID",
    statusColor: "#f59e0b",
  },
  {
    img: true,
    bg: "#222",
    name: "Minvo",
    tier: "License Tier 5",
    price: "$611.10",
    status: "ACTIVATED",
    statusColor: "#10b981",
  },
  {
    img: true,
    bg: "#333",
    name: "MultiLipi",
    tier: "License Tier 5",
    price: "$606.90",
    status: "ACTIVATED",
    statusColor: "#10b981",
  },
];

export const SpendingTrend: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let chart: unknown;
    const init = async () => {
      try {
        const { Chart, registerables } = await import("chart.js");
        Chart.register(...registerables);
        const ctx = canvasRef.current?.getContext("2d");
        if (!ctx) return;

        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, "rgba(124,58,237,0.3)");
        gradient.addColorStop(1, "rgba(124,58,237,0.0)");

        chart = new Chart(ctx, {
          type: "line",
          data: {
            labels: MONTHLY_LABELS,
            datasets: [
              {
                label: "Cumulative Spending",
                data: CUMULATIVE_SPEND,
                borderColor: "#7c3aed",
                borderWidth: 2,
                backgroundColor: gradient,
                fill: true,
                pointBackgroundColor: "#7c3aed",
                pointRadius: 3,
                tension: 0.3,
              },
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
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--drp-space-5)",
      }}
    >
      <div className="drp-card" style={{ padding: "var(--drp-space-5)" }}>
        <h3
          className="drp-card__title"
          style={{ marginBottom: "var(--drp-space-4)" }}
        >
          Cumulative Spending Over Time
        </h3>
        <div style={{ height: 360 }}>
          <canvas ref={canvasRef} />
        </div>
      </div>

      {/* Top product cards */}
      <div
        style={{
          display: "flex",
          gap: "var(--drp-space-3)",
          overflowX: "auto",
        }}
      >
        {PRODUCT_CARDS.map((p) => (
          <div
            key={p.name}
            className="drp-card"
            style={{
              padding: "var(--drp-space-4)",
              minWidth: 180,
              flex: "0 0 auto",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--drp-space-2)",
                marginBottom: "var(--drp-space-3)",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 4,
                  background: p.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {p.initials && (
                  <span
                    style={{ color: "#fff", fontSize: 11, fontWeight: 700 }}
                  >
                    {p.initials}
                  </span>
                )}
              </div>
              <div style={{ minWidth: 0 }}>
                <p
                  className="drp-text drp-text--xs drp-text--bold"
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {p.name}
                </p>
                <p className="drp-text drp-text--xs drp-text--muted">
                  {p.tier}
                </p>
              </div>
            </div>
            <p
              style={{
                fontSize: "1.1rem",
                fontWeight: 800,
                color: "#7c3aed",
                marginBottom: "var(--drp-space-1)",
              }}
            >
              {p.price}
            </p>
            <span
              style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: p.statusColor,
                background: `${p.statusColor}15`,
                padding: "2px 6px",
                borderRadius: 3,
              }}
            >
              {p.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
