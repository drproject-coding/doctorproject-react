import React, { useEffect, useRef } from "react";

const LOCATIONS = [
  { name: "United Kingdom", products: 6, amount: "$1,678.00" },
  { name: "United States", products: 4, amount: "$853.96" },
  { name: "France", products: 3, amount: "$967.19" },
  { name: "Los Angeles, CA", products: 2, amount: "$160.20" },
  { name: "Vienna", products: 1, amount: "$320.40" },
  { name: "the Netherlands", products: 1, amount: "$89.40" },
  { name: "terface", products: 1, amount: "$294.35" },
  { name: "Jordan", products: 1, amount: "$155.34" },
  { name: "Austin, TX", products: 1, amount: "$242.19" },
  {
    name: "Silicon Valley, founded by product managers, designers, and developers with backgrounds at Meta, Tik",
    products: 1,
    amount: "$78.30",
  },
  {
    name: "the French Alps, near Italy and Switzerland",
    products: 1,
    amount: "$141.30",
  },
  { name: "Helsinki, Finland", products: 1, amount: "$359.10" },
  { name: "West Coast, USA", products: 1, amount: "$125.10" },
  { name: "North Macedonia", products: 1, amount: "$476.10" },
  { name: "your dashboard", products: 1, amount: "$8.55" },
  { name: "the EU", products: 1, amount: "$89.00" },
  {
    name: "Germany, I must fully comply with the European GDPR",
    products: 1,
    amount: "$21.74",
  },
  { name: "Poland, Zamosc", products: 1, amount: "$49.69" },
  { name: "Helsinki, the capital of Finland", products: 1, amount: "$26.10" },
  { name: "Czech Republic", products: 1, amount: "$359.10" },
  { name: "Germany", products: 1, amount: "$14.50" },
  { name: "Hong Kong", products: 1, amount: "$285.60" },
];

const DoughnutChart: React.FC<{
  labels: string[];
  values: number[];
  colors: string[];
  height?: number;
}> = ({ labels, values, colors, height = 200 }) => {
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
          type: "doughnut",
          data: {
            labels,
            datasets: [
              {
                data: values,
                backgroundColor: colors,
                borderWidth: 2,
                borderColor: "#fff",
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: "60%",
            plugins: {
              legend: {
                display: true,
                position: "bottom" as const,
                labels: { boxWidth: 8, font: { size: 8 }, usePointStyle: true },
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
    <div style={{ height }}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export const PortfolioBreakdown: React.FC = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--drp-space-5)",
    }}
  >
    {/* 3 doughnut charts */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "var(--drp-space-4)",
      }}
    >
      <div className="drp-card" style={{ padding: "var(--drp-space-5)" }}>
        <h3
          className="drp-card__title"
          style={{ marginBottom: "var(--drp-space-4)" }}
        >
          Status Distribution
        </h3>
        <DoughnutChart
          labels={["Active", "Refunded", "Unredeemed", "Outdated"]}
          values={[140, 30, 60, 36]}
          colors={["#10b981", "#e11d48", "#f59e0b", "#d1d5db"]}
          height={220}
        />
      </div>
      <div className="drp-card" style={{ padding: "var(--drp-space-5)" }}>
        <h3
          className="drp-card__title"
          style={{ marginBottom: "var(--drp-space-4)" }}
        >
          Payment Methods
        </h3>
        <DoughnutChart
          labels={[
            "Visa *9078",
            "Visa *9625",
            "Visa *7697",
            "credit_card *9078",
            "Unknown",
            "manual",
            "credit_card",
            "Visa *3492",
            "paypal",
          ]}
          values={[75, 24, 15, 8, 6, 5, 4, 3, 2]}
          colors={[
            "#7c3aed",
            "#f97316",
            "#10b981",
            "#14b8a6",
            "#9ca3af",
            "#f59e0b",
            "#6366f1",
            "#ec4899",
            "#06b6d4",
          ]}
          height={220}
        />
      </div>
      <div className="drp-card" style={{ padding: "var(--drp-space-5)" }}>
        <h3
          className="drp-card__title"
          style={{ marginBottom: "var(--drp-space-4)" }}
        >
          Tier Distribution
        </h3>
        <DoughnutChart
          labels={[
            "Tier 1",
            "Tier 2",
            "Tier 3",
            "Tier 4",
            "Tier 5",
            "Tier 7",
            "Unknown",
          ]}
          values={[45, 30, 25, 20, 80, 15, 51]}
          colors={[
            "#7c3aed",
            "#f97316",
            "#10b981",
            "#06b6d4",
            "#f59e0b",
            "#d1d5db",
            "#9ca3af",
          ]}
          height={220}
        />
      </div>
    </div>

    {/* Company Locations grid */}
    <div className="drp-card" style={{ padding: "var(--drp-space-5)" }}>
      <h3
        className="drp-card__title"
        style={{ marginBottom: "var(--drp-space-4)" }}
      >
        Company Locations
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "var(--drp-space-3)",
        }}
      >
        {LOCATIONS.map((loc) => (
          <div
            key={loc.name}
            className="drp-card"
            style={{ padding: "var(--drp-space-3)" }}
          >
            <p
              className="drp-text drp-text--xs drp-text--bold"
              style={{ marginBottom: "var(--drp-space-1)", lineHeight: 1.3 }}
            >
              {loc.name}
            </p>
            <p
              className="drp-text drp-text--xs drp-text--muted"
              style={{ marginBottom: "var(--drp-space-1)" }}
            >
              {loc.products} product{loc.products !== 1 ? "s" : ""}
            </p>
            <p
              style={{
                fontSize: "var(--drp-text-sm)",
                fontWeight: 700,
                color: "#7c3aed",
              }}
            >
              {loc.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
