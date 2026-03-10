import React, { useEffect, useRef, useState } from "react";
import { ChartCard } from "../../../../components/Chart/ChartCard";
import { StatCard } from "../../../../components/StatCard/StatCard";

/* -------------------------------------------------------------------------- */
/* Data                                                                        */
/* -------------------------------------------------------------------------- */

const MONTHLY_LABELS = [
  "Dec '21",
  "Mar '22",
  "Jul '22",
  "Sep '22",
  "Nov '22",
  "Feb '23",
  "Apr '23",
  "Jul '23",
  "Sep '23",
  "Dec '23",
  "Apr '24",
  "Sep '24",
  "Dec '24",
  "Feb '25",
  "Apr '25",
  "Sep '25",
  "Dec '25",
  "Feb '26",
];
const MONTHLY_VALUES = [
  200, 300, 100, 150, 80, 400, 200, 350, 600, 200, 500, 800, 1200, 900, 1100,
  2000, 14000, 16500,
];

const YEARLY_LABELS = ["2022", "2023", "2024", "2025", "2026"];
const YEARLY_VALUES = [800, 1500, 6000, 11000, 16000];

const TOP_10 = [
  { rank: 1, name: "MultiLipi (License Tier 5)", price: 1743 },
  { rank: 2, name: "Bind AI – Plus Exclusive (License Tier 5)", price: 1743 },
  { rank: 3, name: "Minvo (License Tier 5)", price: 1494 },
  { rank: 4, name: "DFIRST (License Tier 5)", price: 1494 },
  { rank: 5, name: "BrowserAct (License Tier 5)", price: 1245 },
  { rank: 6, name: "AgenticFlow (License Tier 5)", price: 1245 },
  { rank: 7, name: "Triplo AI (License Tier 5)", price: 1245 },
  { rank: 8, name: "InsertChat (License Tier 5)", price: 1245 },
  { rank: 9, name: "Answerly (License Tier 5)", price: 1245 },
  { rank: 10, name: "Grigora (License Tier 4)", price: 995 },
];

/* -------------------------------------------------------------------------- */
/* Helpers                                                                     */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/* Bar chart (reusable)                                                        */
/* -------------------------------------------------------------------------- */

interface BarChartProps {
  labels: string[];
  values: number[];
  color: string;
  height?: number;
}

const BarChart: React.FC<BarChartProps> = ({
  labels,
  values,
  color,
  height = 220,
}) => {
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
              { data: values, backgroundColor: color, borderRadius: 3 },
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
                ticks: { font: { size: 9 }, maxRotation: 45 },
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
  }, [labels, values, color]);

  return (
    <div style={{ height }}>
      <canvas ref={canvasRef} />
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* Spending Overview Tab                                                       */
/* -------------------------------------------------------------------------- */

export const SpendingOverview: React.FC = () => {
  const [monthlyYear, setMonthlyYear] = useState("All Years");
  const [yearlyYear, setYearlyYear] = useState("All Years");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--drp-space-5)",
      }}
    >
      {/* Hero banner */}
      <div
        style={{
          background: "linear-gradient(135deg, #4f46e5 0%, #6d28d9 100%)",
          borderRadius: "var(--drp-radius)",
          padding: "var(--drp-space-8)",
          textAlign: "center",
          color: "white",
        }}
      >
        <p
          style={{
            fontSize: "var(--drp-text-xs)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            opacity: 0.8,
            marginBottom: "var(--drp-space-2)",
          }}
        >
          Net Lifetime Spending
        </p>
        <p
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            lineHeight: 1,
            marginBottom: "var(--drp-space-2)",
          }}
        >
          $34,177.66
        </p>
        <p style={{ fontSize: "var(--drp-text-sm)", opacity: 0.7 }}>
          266 products purchased
        </p>
      </div>

      {/* 4 stat cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "var(--drp-space-4)",
        }}
      >
        <div className="drp-card" style={{ padding: "var(--drp-space-4)" }}>
          <p
            className="drp-text drp-text--xs drp-text--muted"
            style={{
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "var(--drp-space-1)",
            }}
          >
            Before Discounts
          </p>
          <p style={{ fontSize: "1.5rem", fontWeight: 800 }}>$44,228.85</p>
        </div>
        <div className="drp-card" style={{ padding: "var(--drp-space-4)" }}>
          <p
            className="drp-text drp-text--xs drp-text--muted"
            style={{
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "var(--drp-space-1)",
            }}
          >
            Plan Savings
          </p>
          <p style={{ fontSize: "1.5rem", fontWeight: 800, color: "#f59e0b" }}>
            $3,605.91
          </p>
        </div>
        <div className="drp-card" style={{ padding: "var(--drp-space-4)" }}>
          <p
            className="drp-text drp-text--xs drp-text--muted"
            style={{
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "var(--drp-space-1)",
            }}
          >
            Coupon Savings
          </p>
          <p style={{ fontSize: "1.5rem", fontWeight: 800, color: "#f59e0b" }}>
            $1,926.20
          </p>
        </div>
        <div className="drp-card" style={{ padding: "var(--drp-space-4)" }}>
          <p
            className="drp-text drp-text--xs drp-text--muted"
            style={{
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "var(--drp-space-1)",
            }}
          >
            Refunded
          </p>
          <p style={{ fontSize: "1.5rem", fontWeight: 800, color: "#7c3aed" }}>
            $2,828.43
          </p>
        </div>
      </div>

      {/* Top Vendor */}
      <div
        className="drp-card"
        style={{
          padding: "var(--drp-space-4)",
          display: "inline-block",
          alignSelf: "flex-start",
        }}
      >
        <p
          className="drp-text drp-text--xs drp-text--muted"
          style={{
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "var(--drp-space-1)",
          }}
        >
          Top Vendor
        </p>
        <p style={{ fontSize: "1.25rem", fontWeight: 700 }}>Appsumo</p>
        <p style={{ fontSize: "1.25rem", fontWeight: 700 }}>($31,280.40)</p>
      </div>

      {/* Charts */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "var(--drp-space-4)",
        }}
      >
        <ChartCard
          title="Monthly Spending"
          action={<YearSelect value={monthlyYear} onChange={setMonthlyYear} />}
        >
          <BarChart
            labels={MONTHLY_LABELS}
            values={MONTHLY_VALUES}
            color="#7c3aed"
          />
        </ChartCard>
        <ChartCard
          title="Yearly Spending"
          action={<YearSelect value={yearlyYear} onChange={setYearlyYear} />}
        >
          <BarChart
            labels={YEARLY_LABELS}
            values={YEARLY_VALUES}
            color="#f97316"
          />
        </ChartCard>
      </div>

      {/* Top 10 table */}
      <div className="drp-card" style={{ padding: "var(--drp-space-5)" }}>
        <h3
          className="drp-text drp-text--sm drp-text--bold"
          style={{ marginBottom: "var(--drp-space-4)" }}
        >
          Top 10 Most Expensive Products
        </h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--drp-space-1)",
          }}
        >
          {TOP_10.map((item) => (
            <div
              key={item.rank}
              className="drp-flex drp-items-center"
              style={{
                padding: "var(--drp-space-3) var(--drp-space-4)",
                border: "var(--drp-border-thin)",
                borderRadius: "var(--drp-radius)",
                justifyContent: "space-between",
              }}
            >
              <span className="drp-text drp-text--sm">
                <span
                  className="drp-text--muted"
                  style={{ marginRight: "var(--drp-space-2)" }}
                >
                  #{item.rank}
                </span>
                {item.name}
              </span>
              <span
                className="drp-text drp-text--sm drp-text--bold"
                style={{ color: "#7c3aed" }}
              >
                $
                {item.price.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                })}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
