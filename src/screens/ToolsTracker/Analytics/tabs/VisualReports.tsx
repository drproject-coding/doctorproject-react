import React, { useEffect, useRef } from "react";
import { ChartCard } from "../../../../components/Chart/ChartCard";

/* -------------------------------------------------------------------------- */
/* Shared chart util                                                           */
/* -------------------------------------------------------------------------- */

type ChartConfig = { type: string; data: object; options?: object };

function useChart(config: ChartConfig | null) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!config) return;
    let chart: unknown;
    const init = async () => {
      try {
        const { Chart, registerables } = await import("chart.js");
        Chart.register(...registerables);
        const ctx = canvasRef.current?.getContext("2d");
        if (!ctx) return;
        chart = new Chart(ctx as any, config as any);
      } catch {
        /* SSR */
      }
    };
    init();
    return () => {
      (chart as any)?.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return canvasRef;
}

/* -------------------------------------------------------------------------- */
/* World Map                                                                   */
/* -------------------------------------------------------------------------- */

const COUNTRY_DATA: Record<string, number> = {
  "United States of America": 10,
  "United Kingdom": 6,
  France: 3,
  Finland: 2,
  Austria: 1,
  Netherlands: 1,
  Jordan: 1,
  Italy: 1,
};

const COUNTRY_LEGEND = [
  { label: "United States (10)", color: "#4f46e5" },
  { label: "United Kingdom (6)", color: "#6d28d9" },
  { label: "France (3)", color: "#7c3aed" },
  { label: "Finland (2)", color: "#8b5cf6" },
  { label: "Austria (1)", color: "#a78bfa" },
  { label: "Netherlands (1)", color: "#c4b5fd" },
  { label: "Jordan (1)", color: "#ddd6fe" },
  { label: "Italy (1)", color: "#ede9fe" },
];

const WorldMap: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let chart: unknown;
    const init = async () => {
      try {
        const [{ Chart, registerables }, geoMod, topoMod, topology] =
          await Promise.all([
            import("chart.js"),
            import("chartjs-chart-geo"),
            import("topojson-client"),
            fetch(
              "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json",
            ).then((r) => r.json()),
          ]);

        Chart.register(...registerables);
        const {
          ChoroplethController,
          GeoFeature,
          ColorScale,
          ProjectionScale,
        } = geoMod;
        Chart.register(
          ChoroplethController,
          GeoFeature,
          ColorScale,
          ProjectionScale,
        );

        const countries = (topoMod.feature as any)(
          topology,
          topology.objects.countries,
        );

        // Map numeric ISO codes to country data values
        // world-atlas numeric IDs → country name lookup (subset)
        const isoToName: Record<string, string> = {
          "840": "United States of America",
          "826": "United Kingdom",
          "250": "France",
          "246": "Finland",
          "040": "Austria",
          "528": "Netherlands",
          "400": "Jordan",
          "380": "Italy",
        };

        const ctx = canvasRef.current?.getContext("2d");
        if (!ctx) return;

        chart = new Chart(
          ctx as any,
          {
            type: "choropleth",
            data: {
              labels: countries.features.map(
                (d: any) => isoToName[String(d.id)] ?? "",
              ),
              datasets: [
                {
                  label: "Products",
                  data: countries.features.map((d: any) => ({
                    feature: d,
                    value: COUNTRY_DATA[isoToName[String(d.id)] ?? ""] ?? 0,
                  })),
                },
              ],
            },
            options: {
              showOutline: true,
              showGraticule: false,
              plugins: {
                legend: { display: false },
                tooltip: {
                  callbacks: {
                    label: (ctx: any) => {
                      const label = ctx.chart.data.labels[
                        ctx.dataIndex
                      ] as string;
                      return label ? `${label}: ${ctx.raw.value} products` : "";
                    },
                  },
                },
              },
              scales: {
                projection: { axis: "x", projection: "equalEarth" },
                color: {
                  axis: "x",
                  quantize: 5,
                  legend: {
                    position: "bottom-right" as any,
                    align: "bottom" as any,
                  },
                  interpolate: (v: number) =>
                    v === 0
                      ? "#e5e7eb"
                      : `rgba(79, 70, 229, ${0.15 + v * 0.85})`,
                } as any,
              },
            } as any,
          } as any,
        );
      } catch (e) {
        console.warn("World map error", e);
      }
    };
    init();
    return () => {
      (chart as any)?.destroy();
    };
  }, []);

  return (
    <div>
      <div style={{ height: 320 }}>
        <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "var(--drp-space-3)",
          marginTop: "var(--drp-space-3)",
          justifyContent: "center",
        }}
      >
        {COUNTRY_LEGEND.map((l) => (
          <span
            key={l.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              fontSize: "0.7rem",
              color: "#6b7280",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: l.color,
                display: "inline-block",
              }}
            />
            {l.label}
          </span>
        ))}
      </div>
      <p
        style={{
          textAlign: "center",
          fontSize: "0.65rem",
          color: "#9ca3af",
          marginTop: "var(--drp-space-2)",
        }}
      >
        Location data: 29 of 266 products (11%)
      </p>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* Doughnut charts                                                             */
/* -------------------------------------------------------------------------- */

interface DoughnutProps {
  labels: string[];
  values: number[];
  colors: string[];
  centerLabel?: string;
  centerValue?: string;
  height?: number;
}

const DoughnutChart: React.FC<DoughnutProps> = ({
  labels,
  values,
  colors,
  centerLabel,
  centerValue,
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

        // Center text plugin
        const centerPlugin = centerValue
          ? {
              id: "centerText",
              beforeDraw(ch: any) {
                const { width, height, ctx: c } = ch;
                c.save();
                c.font = `700 1.1rem sans-serif`;
                c.fillStyle = "#111";
                c.textAlign = "center";
                c.textBaseline = "middle";
                c.fillText(centerValue!, width / 2, height / 2 - 8);
                c.font = `400 0.65rem sans-serif`;
                c.fillStyle = "#6b7280";
                c.fillText(centerLabel ?? "", width / 2, height / 2 + 12);
                c.restore();
              },
            }
          : null;

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
            cutout: centerValue ? "70%" : "55%",
            plugins: { legend: { display: false } },
          },
          plugins: centerPlugin ? [centerPlugin] : [],
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
/* Polar area chart                                                            */
/* -------------------------------------------------------------------------- */

const PolarChart: React.FC<{
  labels: string[];
  values: number[];
  colors: string[];
}> = ({ labels, values, colors }) => {
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
          type: "polarArea",
          data: {
            labels,
            datasets: [
              {
                data: values,
                backgroundColor: colors.map((c) => c + "cc"),
                borderColor: colors,
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
              r: {
                ticks: { display: false },
                grid: { color: "rgba(0,0,0,0.05)" },
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
    <div style={{ height: 220 }}>
      <canvas ref={canvasRef} />
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* Legend row                                                                  */
/* -------------------------------------------------------------------------- */

const LegendRow: React.FC<{ items: { label: string; color: string }[] }> = ({
  items,
}) => (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--drp-space-3)",
      justifyContent: "center",
      marginTop: "var(--drp-space-3)",
    }}
  >
    {items.map((i) => (
      <span
        key={i.label}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          fontSize: "0.7rem",
          color: "#6b7280",
        }}
      >
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: i.color,
            display: "inline-block",
          }}
        />
        {i.label}
      </span>
    ))}
  </div>
);

/* -------------------------------------------------------------------------- */
/* Visual Reports Tab                                                          */
/* -------------------------------------------------------------------------- */

export const VisualReports: React.FC = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--drp-space-5)",
    }}
  >
    {/* World map */}
    <ChartCard title="Product Origins – World Map">
      <WorldMap />
    </ChartCard>

    {/* Financial + Status doughnuts */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "var(--drp-space-4)",
      }}
    >
      <ChartCard title="Financial Overview">
        <DoughnutChart
          labels={["Net Spent", "Savings", "Refunds"]}
          values={[28000, 5500, 2800]}
          colors={["#f59e0b", "#4f46e5", "#10b981"]}
        />
        <LegendRow
          items={[
            { label: "Net Spent", color: "#f59e0b" },
            { label: "Savings", color: "#4f46e5" },
            { label: "Refunds", color: "#10b981" },
          ]}
        />
      </ChartCard>
      <ChartCard title="Spending by Status">
        <DoughnutChart
          labels={["Active", "Refunded", "Unredeemed", "Other"]}
          values={[18000, 2800, 9000, 7200]}
          colors={["#10b981", "#e11d48", "#14b8a6", "#4f46e5"]}
          centerValue="$37,006.09"
          centerLabel="from all accounts"
        />
        <LegendRow
          items={[
            { label: "Active", color: "#10b981" },
            { label: "Refunded", color: "#e11d48" },
            { label: "Unredeemed", color: "#14b8a6" },
            { label: "Other", color: "#4f46e5" },
          ]}
        />
      </ChartCard>
    </div>

    {/* Spending Distribution polar */}
    <ChartCard title="Spending Distribution">
      <PolarChart
        labels={[
          "Operations",
          "Marketing & sales",
          "Uncategorized",
          "Media tools",
          "Development & IT",
          "Build it yourself",
          "Customer experience",
          "Finance",
        ]}
        values={[8000, 12000, 6000, 3000, 2500, 2000, 1500, 800]}
        colors={[
          "#f59e0b",
          "#7c3aed",
          "#d1d5db",
          "#f97316",
          "#4f46e5",
          "#14b8a6",
          "#ec4899",
          "#e11d48",
        ]}
      />
      <LegendRow
        items={[
          { label: "Operations", color: "#f59e0b" },
          { label: "Marketing & sales", color: "#7c3aed" },
          { label: "Uncategorized", color: "#d1d5db" },
          { label: "Media tools", color: "#f97316" },
          { label: "Development & IT", color: "#4f46e5" },
          { label: "Build it yourself", color: "#14b8a6" },
          { label: "Customer experience", color: "#ec4899" },
          { label: "Finance", color: "#e11d48" },
        ]}
      />
    </ChartCard>

    {/* Yearly rings + Product status */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "var(--drp-space-4)",
      }}
    >
      <ChartCard title="Yearly Spending Rings">
        <DoughnutChart
          labels={["2022", "2023", "2024", "2025", "2026"]}
          values={[800, 1500, 6000, 11000, 16000]}
          colors={["#f59e0b", "#4f46e5", "#10b981", "#f97316", "#e11d48"]}
          centerValue="$37,006.09"
          centerLabel="all years"
        />
        <LegendRow
          items={[
            { label: "2022", color: "#f59e0b" },
            { label: "2023", color: "#4f46e5" },
            { label: "2024", color: "#10b981" },
            { label: "2025", color: "#f97316" },
            { label: "2026", color: "#e11d48" },
          ]}
        />
      </ChartCard>
      <ChartCard title="Product Status">
        <DoughnutChart
          labels={["Active", "Refunded", "Unredeemed", "Other"]}
          values={[140, 30, 60, 36]}
          colors={["#10b981", "#e11d48", "#14b8a6", "#4f46e5"]}
          centerValue="266"
          centerLabel="total products"
        />
        <LegendRow
          items={[
            { label: "Active", color: "#10b981" },
            { label: "Refunded", color: "#e11d48" },
            { label: "Unredeemed", color: "#14b8a6" },
            { label: "Other", color: "#4f46e5" },
          ]}
        />
      </ChartCard>
    </div>
  </div>
);
