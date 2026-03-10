import React, { useEffect, useRef } from "react";
import { MONTHLY_LABELS } from "./_data";

const VENDORS = [
  {
    name: "APPSUMO",
    totalSpent: "$28,451.97",
    products: 247,
    invoices: 123,
    color: "#7c3aed",
  },
  {
    name: "MANUAL",
    totalSpent: "$2,977.45",
    products: 12,
    invoices: 12,
    color: "#f59e0b",
  },
  {
    name: "PADDLE",
    totalSpent: "$1,794.99",
    products: 5,
    invoices: 5,
    color: "#10b981",
  },
  {
    name: "DEALMIRROR",
    totalSpent: "$594.15",
    products: 1,
    invoices: 1,
    color: "#14b8a6",
  },
  {
    name: "FOXYAPPS",
    totalSpent: "$359.10",
    products: 1,
    invoices: 1,
    color: "#e11d48",
  },
];

const VENDOR_TOTALS = [31280, 2977, 1795, 594, 359];
const VENDOR_REFUNDS = [2828, 0, 0, 0, 0];

const SPARSE_LABELS = MONTHLY_LABELS.filter((_, i) => i % 2 === 0);
const VENDOR_TRENDS: number[][] = [
  [
    400, 200, 300, 200, 300, 400, 300, 400, 200, 600, 800, 1200, 900, 1100,
    2000, 14000, 2000, 500,
  ],
  [0, 100, 0, 200, 0, 100, 300, 0, 200, 100, 0, 200, 100, 0, 0, 200, 0, 0],
  [0, 0, 100, 0, 200, 0, 0, 300, 0, 200, 0, 0, 100, 200, 0, 400, 0, 0],
  [0, 0, 0, 100, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 100, 0, 0],
  [0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 100, 0, 0, 0, 100, 0, 0, 0],
];

const VENDOR_COLORS = ["#7c3aed", "#f59e0b", "#10b981", "#14b8a6", "#e11d48"];
const VENDOR_NAMES = ["AppSumo", "manual", "Paddle", "DealMirror", "FoxyApps"];

const GroupedBarChart: React.FC = () => {
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
            labels: VENDOR_NAMES,
            datasets: [
              {
                label: "Total Spent",
                data: VENDOR_TOTALS,
                backgroundColor: "#7c3aed",
                borderRadius: 2,
              },
              {
                label: "Refunded",
                data: VENDOR_REFUNDS,
                backgroundColor: "#c4b5fd",
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
                labels: { boxWidth: 12, font: { size: 11 } },
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
              x: { grid: { display: false }, ticks: { font: { size: 10 } } },
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

const VendorTrendsChart: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    let chart: unknown;
    const init = async () => {
      try {
        const { Chart, registerables } = await import("chart.js");
        Chart.register(...registerables);
        const ctx = canvasRef.current?.getContext("2d");
        if (!ctx) return;

        const canvas = canvasRef.current!;
        const makeGrad = (color: string) => {
          const g = canvas.getContext("2d")!.createLinearGradient(0, 0, 0, 280);
          g.addColorStop(0, color + "40");
          g.addColorStop(1, color + "00");
          return g;
        };

        chart = new Chart(ctx, {
          type: "line",
          data: {
            labels: SPARSE_LABELS,
            datasets: VENDOR_NAMES.map((name, i) => ({
              label: name,
              data: VENDOR_TRENDS[i],
              borderColor: VENDOR_COLORS[i],
              backgroundColor: makeGrad(VENDOR_COLORS[i]),
              fill: true,
              pointBackgroundColor: VENDOR_COLORS[i],
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
                  font: { size: 10 },
                  usePointStyle: true,
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
    <div style={{ height: 300 }}>
      <canvas ref={canvasRef} />
    </div>
  );
};

const TABLE_DATA = [
  {
    vendor: "AppSumo",
    totalSpent: "$31,280.40",
    refunded: "$2,828.43",
    net: "$28,451.97",
    products: 247,
    invoices: 123,
  },
  {
    vendor: "manual",
    totalSpent: "$2,977.45",
    refunded: "$0.00",
    net: "$2,977.45",
    products: 12,
    invoices: 12,
  },
  {
    vendor: "Paddle",
    totalSpent: "$1,794.99",
    refunded: "$0.00",
    net: "$1,794.99",
    products: 5,
    invoices: 5,
  },
  {
    vendor: "DealMirror",
    totalSpent: "$594.15",
    refunded: "$0.00",
    net: "$594.15",
    products: 1,
    invoices: 1,
  },
  {
    vendor: "FoxyApps",
    totalSpent: "$359.10",
    refunded: "$0.00",
    net: "$359.10",
    products: 1,
    invoices: 1,
  },
];

export const SpendingByVendor: React.FC = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--drp-space-5)",
    }}
  >
    {/* Vendor header cards */}
    <div style={{ display: "flex", gap: "var(--drp-space-3)" }}>
      {VENDORS.map((v) => (
        <div
          key={v.name}
          className="drp-card"
          style={{ padding: "var(--drp-space-4)", flex: 1 }}
        >
          <p
            className="drp-text drp-text--xs drp-text--muted"
            style={{
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "var(--drp-space-1)",
            }}
          >
            {v.name}
          </p>
          <p
            style={{
              fontSize: "1.15rem",
              fontWeight: 800,
              color: v.color,
              marginBottom: "var(--drp-space-1)",
            }}
          >
            {v.totalSpent}
          </p>
          <p className="drp-text drp-text--xs drp-text--muted">
            {v.products} products · {v.invoices} invoices
          </p>
        </div>
      ))}
    </div>

    {/* Grouped bar */}
    <div className="drp-card" style={{ padding: "var(--drp-space-5)" }}>
      <h3
        className="drp-card__title"
        style={{ marginBottom: "var(--drp-space-4)" }}
      >
        Spending by Vendor
      </h3>
      <GroupedBarChart />
    </div>

    {/* Multi-line over time */}
    <div className="drp-card" style={{ padding: "var(--drp-space-5)" }}>
      <h3
        className="drp-card__title"
        style={{ marginBottom: "var(--drp-space-4)" }}
      >
        Vendor Spending Over Time
      </h3>
      <VendorTrendsChart />
    </div>

    {/* Table */}
    <div className="drp-card" style={{ padding: "var(--drp-space-5)" }}>
      <h3
        className="drp-card__title"
        style={{ marginBottom: "var(--drp-space-4)" }}
      >
        Vendor Breakdown
      </h3>
      <table className="drp-table" style={{ width: "100%" }}>
        <thead>
          <tr>
            {[
              "VENDOR",
              "TOTAL SPENT",
              "REFUNDED",
              "NET",
              "PRODUCTS",
              "INVOICES",
            ].map((h) => (
              <th
                key={h}
                className="drp-table__th"
                style={{
                  textAlign: "left",
                  padding: "var(--drp-space-3) var(--drp-space-4)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.08em",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_DATA.map((row) => (
            <tr key={row.vendor} className="drp-table__row">
              <td
                className="drp-table__td"
                style={{
                  padding: "var(--drp-space-3) var(--drp-space-4)",
                  fontWeight: 600,
                }}
              >
                {row.vendor}
              </td>
              <td
                className="drp-table__td"
                style={{ padding: "var(--drp-space-3) var(--drp-space-4)" }}
              >
                {row.totalSpent}
              </td>
              <td
                className="drp-table__td"
                style={{ padding: "var(--drp-space-3) var(--drp-space-4)" }}
              >
                {row.refunded}
              </td>
              <td
                className="drp-table__td"
                style={{
                  padding: "var(--drp-space-3) var(--drp-space-4)",
                  fontWeight: 700,
                }}
              >
                {row.net}
              </td>
              <td
                className="drp-table__td"
                style={{ padding: "var(--drp-space-3) var(--drp-space-4)" }}
              >
                {row.products}
              </td>
              <td
                className="drp-table__td"
                style={{ padding: "var(--drp-space-3) var(--drp-space-4)" }}
              >
                {row.invoices}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
