import React, { useEffect, useRef } from "react";
import { ChartCard } from "../../../../components/Chart/ChartCard";

/* -------------------------------------------------------------------------- */
/* Bar chart (horizontal + vertical)                                           */
/* -------------------------------------------------------------------------- */

interface BarChartProps {
  labels: string[];
  values: number[];
  color: string | string[];
  horizontal?: boolean;
  height?: number;
  stacked?: boolean;
  datasets?: { label: string; data: number[]; color: string }[];
}

const BarChart: React.FC<BarChartProps> = ({
  labels,
  values,
  color,
  horizontal = false,
  height = 220,
  stacked = false,
  datasets,
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

        const chartDatasets = datasets
          ? datasets.map((d) => ({
              label: d.label,
              data: d.data,
              backgroundColor: d.color,
              borderRadius: 3,
            }))
          : [
              {
                data: values,
                backgroundColor: color,
                borderRadius: horizontal ? 0 : 3,
              },
            ];

        chart = new Chart(ctx, {
          type: "bar",
          data: { labels, datasets: chartDatasets as any },
          options: {
            indexAxis: horizontal ? "y" : "x",
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: !!datasets, position: "bottom" as const },
            },
            scales: {
              x: {
                stacked,
                grid: { display: !horizontal },
                ticks: {
                  font: { size: 9 },
                  callback: horizontal
                    ? (v: unknown) => `${Number(v)}`
                    : (v: unknown) => `$${(Number(v) / 1000).toFixed(0)}k`,
                },
              },
              y: {
                stacked,
                grid: { display: horizontal },
                ticks: { font: { size: 9 } },
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
    <div style={{ height }}>
      <canvas ref={canvasRef} />
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* Doughnut                                                                    */
/* -------------------------------------------------------------------------- */

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
            plugins: { legend: { display: false } },
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

/* -------------------------------------------------------------------------- */
/* Legend                                                                      */
/* -------------------------------------------------------------------------- */

const Legend: React.FC<{
  items: { label: string; value?: string | number; color: string }[];
}> = ({ items }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--drp-space-1)",
      marginTop: "var(--drp-space-3)",
    }}
  >
    {items.map((item) => (
      <div
        key={item.label}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "var(--drp-space-2)",
        }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontSize: "0.7rem",
            color: "#6b7280",
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: item.color,
              flexShrink: 0,
              display: "inline-block",
            }}
          />
          {item.label}
        </span>
        {item.value !== undefined && (
          <span
            style={{ fontSize: "0.7rem", fontWeight: 600, color: "#374151" }}
          >
            {item.value}
          </span>
        )}
      </div>
    ))}
  </div>
);

/* -------------------------------------------------------------------------- */
/* Category Analysis Tab                                                       */
/* -------------------------------------------------------------------------- */

export const CategoryAnalysis: React.FC = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--drp-space-5)",
    }}
  >
    {/* Row 1 */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "var(--drp-space-4)",
      }}
    >
      {/* Products by Type */}
      <ChartCard title="Products by Type">
        <DoughnutChart
          labels={[
            "Software",
            "Unknown",
            "Templates",
            "Creative resources",
            "Courses",
          ]}
          values={[215, 28, 12, 7, 4]}
          colors={["#4f46e5", "#d1d5db", "#f59e0b", "#10b981", "#f97316"]}
        />
        <Legend
          items={[
            { label: "Software", value: 215, color: "#4f46e5" },
            { label: "Unknown", value: 28, color: "#d1d5db" },
            { label: "Templates", value: 12, color: "#f59e0b" },
            { label: "Creative resources", value: 7, color: "#10b981" },
            { label: "Courses", value: 4, color: "#f97316" },
          ]}
        />
      </ChartCard>

      {/* Products by Category */}
      <ChartCard title="Products by Category">
        <BarChart
          labels={[
            "Marketing & sales",
            "Operations",
            "Uncategorized",
            "Development & IT",
            "Media tools",
            "Build it yourself",
            "Customer experience",
            "Finance",
          ]}
          values={[72, 65, 48, 38, 22, 14, 10, 6]}
          color="#7c3aed"
          horizontal
          height={240}
        />
      </ChartCard>
    </div>

    {/* Row 2 */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "var(--drp-space-4)",
      }}
    >
      {/* Spending by Type */}
      <ChartCard title="Spending by Type">
        <BarChart
          labels={["Software", "Unknown", "Templates", "Creative", "Courses"]}
          values={[28000, 4500, 1800, 900, 600]}
          color="#f97316"
          height={220}
        />
      </ChartCard>

      {/* Status by Type */}
      <ChartCard title="Status by Type">
        <BarChart
          labels={["Software", "Unknown", "Templates", "Creative", "Courses"]}
          values={[]}
          color=""
          stacked
          height={220}
          datasets={[
            {
              label: "Active",
              data: [140, 18, 8, 5, 3],
              color: "#10b981",
            },
            {
              label: "Refunded",
              data: [22, 4, 2, 1, 0],
              color: "#e11d48",
            },
            {
              label: "Unredeemed",
              data: [38, 4, 2, 1, 1],
              color: "#14b8a6",
            },
            {
              label: "Other",
              data: [15, 2, 0, 0, 0],
              color: "#4f46e5",
            },
          ]}
        />
      </ChartCard>
    </div>
  </div>
);
