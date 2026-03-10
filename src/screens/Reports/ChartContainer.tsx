import React, { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea, Radar } from "react-chartjs-2";
import { Pictogram } from "../../components/Pictogram/Pictogram";
import { AppSidebar } from "../shared/AppSidebar";
import { AppTopBar } from "../shared/AppTopBar";
import { AppFooter } from "../shared/AppFooter";

ChartJS.register(
  RadialLinearScale,
  ArcElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
);

const CalendarIcon: React.FC = () => (
  <svg
    style={{ width: 20, height: 20, color: "var(--drp-grey)" }}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <rect x="3" y="4" width="18" height="18" rx="0" strokeWidth={2} />
    <path strokeLinecap="round" strokeWidth={2} d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

// ─── Chart Card Wrapper ───────────────────────────────────────────────────────

interface ChartCardWrapperProps {
  title: string;
  children: React.ReactNode;
  legend?: Array<{ color: string; label: string }>;
  className?: string;
}

const ChartCardWrapper: React.FC<ChartCardWrapperProps> = ({
  title,
  children,
  legend,
  className = "",
}) => (
  <div className={`drp-chart-card ${className}`}>
    <div className="drp-chart-header">
      <h2 className="drp-chart-title">{title}</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--drp-space-4)",
        }}
      >
        {legend && (
          <div className="drp-chart-legend">
            {legend.map((l) => (
              <div key={l.label} className="drp-chart-legend__item">
                <span
                  className="drp-chart-legend__dot"
                  style={{ backgroundColor: l.color }}
                ></span>
                <span>{l.label}</span>
              </div>
            ))}
          </div>
        )}
        <CalendarIcon />
      </div>
    </div>
    <div className="drp-chart-container" style={{ height: "auto" }}>
      {children}
    </div>
  </div>
);

// ─── SVG Bar Chart ────────────────────────────────────────────────────────────

interface BarChartSVGProps {
  data: number[];
  labels: string[];
  maxValue?: number;
  height?: number;
}

const BarChartSVG: React.FC<BarChartSVGProps> = ({
  data,
  labels,
  maxValue = 500,
  height = 200,
}) => {
  const svgWidth = 800;
  const svgHeight = height;
  const padLeft = 40;
  const padRight = 10;
  const padTop = 10;
  const padBottom = 30;
  const chartW = svgWidth - padLeft - padRight;
  const chartH = svgHeight - padTop - padBottom;
  const barW = Math.floor(chartW / data.length) * 0.45;
  const gap = chartW / data.length;
  const yLines = [0, 100, 200, 300, 400, 500];

  return (
    <svg
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      style={{ width: "100%", height }}
    >
      {/* Y-axis grid lines */}
      {yLines.map((v) => {
        const y = padTop + chartH - (v / maxValue) * chartH;
        return (
          <g key={v}>
            <line
              x1={padLeft}
              y1={y}
              x2={svgWidth - padRight}
              y2={y}
              stroke="var(--drp-grey)"
              strokeWidth={0.5}
              strokeDasharray="4,3"
              opacity={0.3}
            />
            <text
              x={padLeft - 5}
              y={y + 4}
              textAnchor="end"
              fontSize={10}
              fill="var(--drp-grey)"
            >
              {v}
            </text>
          </g>
        );
      })}
      {/* Bars */}
      {data.map((val, i) => {
        const barH = (val / maxValue) * chartH;
        const x = padLeft + i * gap + gap / 2 - barW / 2;
        const y = padTop + chartH - barH;
        const bgH = chartH;
        const bgY = padTop;
        return (
          <g key={i}>
            {/* Background bar (light purple) */}
            <rect
              x={x}
              y={bgY}
              width={barW}
              height={bgH}
              rx={0}
              fill="var(--drp-purple)"
              opacity={0.12}
            />
            {/* Foreground bar (purple) */}
            <rect
              x={x}
              y={y}
              width={barW}
              height={barH}
              rx={0}
              fill="var(--drp-purple)"
            />
            {/* X-axis label */}
            <text
              x={padLeft + i * gap + gap / 2}
              y={svgHeight - 5}
              textAnchor="middle"
              fontSize={10}
              fill="var(--drp-grey)"
            >
              {labels[i]}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

// ─── SVG Horizontal Bar Chart ─────────────────────────────────────────────────

interface HBarChartSVGProps {
  data: Array<{ label: string; value: number; maxValue: number }>;
  height?: number;
}

const HBarChartSVG: React.FC<HBarChartSVGProps> = ({ data, height = 260 }) => {
  const svgWidth = 800;
  const svgHeight = height;
  const padLeft = 45;
  const padRight = 20;
  const padTop = 10;
  const padBottom = 25;
  const chartW = svgWidth - padLeft - padRight;
  const chartH = svgHeight - padTop - padBottom;
  const rowH = chartH / data.length;
  const barH = rowH * 0.35;
  const absMax = Math.max(...data.map((d) => d.maxValue));
  const xTicks = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

  return (
    <svg
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      style={{ width: "100%", height }}
    >
      {/* X grid lines */}
      {xTicks.map((v) => {
        const x = padLeft + (v / absMax) * chartW;
        return (
          <g key={v}>
            <line
              x1={x}
              y1={padTop}
              x2={x}
              y2={svgHeight - padBottom}
              stroke="var(--drp-grey)"
              strokeWidth={0.5}
              strokeDasharray="3,3"
              opacity={0.3}
            />
            <text
              x={x}
              y={svgHeight - padBottom + 14}
              textAnchor="middle"
              fontSize={10}
              fill="var(--drp-grey)"
            >
              {v}
            </text>
          </g>
        );
      })}
      {/* Bars */}
      {data.map((item, i) => {
        const y = padTop + i * rowH + rowH / 2 - barH / 2;
        const bgW = (item.maxValue / absMax) * chartW;
        const fgW = (item.value / absMax) * chartW;
        return (
          <g key={i}>
            <text
              x={padLeft - 5}
              y={y + barH / 2 + 4}
              textAnchor="end"
              fontSize={10}
              fill="var(--drp-grey)"
            >
              {item.label}
            </text>
            {/* Separator line */}
            <line
              x1={padLeft}
              y1={padTop + i * rowH + rowH - 2}
              x2={svgWidth - padRight}
              y2={padTop + i * rowH + rowH - 2}
              stroke="var(--drp-grey)"
              strokeWidth={0.5}
              strokeDasharray="3,3"
              opacity={0.2}
            />
            {/* Background track */}
            <rect
              x={padLeft}
              y={y}
              width={bgW}
              height={barH}
              rx={0}
              fill="var(--drp-purple)"
              opacity={0.12}
            />
            {/* Foreground bar */}
            <rect
              x={padLeft}
              y={y}
              width={fgW}
              height={barH}
              rx={0}
              fill="var(--drp-purple)"
            />
          </g>
        );
      })}
    </svg>
  );
};

// ─── SVG Wave Chart ───────────────────────────────────────────────────────────

interface WaveChartSVGProps {
  dataBlue: number[];
  dataGreen: number[];
  labels: string[];
  maxValue?: number;
  height?: number;
  smooth?: boolean;
  showTooltip?: boolean;
}

function smoothPath(points: Array<{ x: number; y: number }>): string {
  if (points.length < 2) return "";
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const cpX = (prev.x + curr.x) / 2;
    d += ` C ${cpX} ${prev.y}, ${cpX} ${curr.y}, ${curr.x} ${curr.y}`;
  }
  return d;
}

function linePath(points: Array<{ x: number; y: number }>): string {
  return points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
}

const WaveChartSVG: React.FC<WaveChartSVGProps> = ({
  dataBlue,
  dataGreen,
  labels,
  maxValue = 500,
  height = 220,
  smooth = true,
  showTooltip = false,
}) => {
  const svgWidth = 800;
  const svgHeight = height;
  const padLeft = 40;
  const padRight = 10;
  const padTop = 20;
  const padBottom = 30;
  const chartW = svgWidth - padLeft - padRight;
  const chartH = svgHeight - padTop - padBottom;
  const yLines = [0, 100, 200, 300, 400, 500];
  const n = dataBlue.length;

  const toPoint = (val: number, i: number) => ({
    x: n > 1 ? padLeft + (i / (n - 1)) * chartW : padLeft,
    y: padTop + chartH - (val / maxValue) * chartH,
  });

  const bluePoints = dataBlue.map(toPoint);
  const greenPoints = dataGreen.map(toPoint);

  const bluePath =
    bluePoints.length > 1
      ? smooth
        ? smoothPath(bluePoints)
        : linePath(bluePoints)
      : "";
  const greenPath =
    greenPoints.length > 1
      ? smooth
        ? smoothPath(greenPoints)
        : linePath(greenPoints)
      : "";

  // Area fill
  const blueAreaClose =
    bluePoints.length > 1
      ? `L ${bluePoints[bluePoints.length - 1].x} ${padTop + chartH} L ${bluePoints[0].x} ${padTop + chartH} Z`
      : "";
  const greenAreaClose =
    greenPoints.length > 1
      ? `L ${greenPoints[greenPoints.length - 1].x} ${padTop + chartH} L ${greenPoints[0].x} ${padTop + chartH} Z`
      : "";

  // Tooltip at middle point
  const tooltipIdx = Math.floor(n / 2);
  const tooltipPt = bluePoints[tooltipIdx];

  return (
    <svg
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      style={{ width: "100%", height }}
    >
      <defs>
        <linearGradient id="waveBlueGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--drp-purple)" stopOpacity="0.15" />
          <stop
            offset="100%"
            stopColor="var(--drp-purple)"
            stopOpacity="0.02"
          />
        </linearGradient>
        <linearGradient id="waveGreenGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--drp-mint)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="var(--drp-mint)" stopOpacity="0.02" />
        </linearGradient>
      </defs>

      {/* Y-grid */}
      {yLines.map((v) => {
        const y = padTop + chartH - (v / maxValue) * chartH;
        return (
          <g key={v}>
            <line
              x1={padLeft}
              y1={y}
              x2={svgWidth - padRight}
              y2={y}
              stroke="var(--drp-grey)"
              strokeWidth={0.5}
              strokeDasharray="4,3"
              opacity={0.3}
            />
            <text
              x={padLeft - 5}
              y={y + 4}
              textAnchor="end"
              fontSize={10}
              fill="var(--drp-grey)"
            >
              {v}
            </text>
          </g>
        );
      })}

      {/* Areas */}
      <path d={bluePath + blueAreaClose} fill="url(#waveBlueGrad)" />
      <path d={greenPath + greenAreaClose} fill="url(#waveGreenGrad)" />

      {/* Lines */}
      <path
        d={greenPath}
        fill="none"
        stroke="var(--drp-mint)"
        strokeWidth={2}
      />
      <path
        d={bluePath}
        fill="none"
        stroke="var(--drp-purple)"
        strokeWidth={2}
      />

      {/* X labels */}
      {labels.map((lbl, i) => (
        <text
          key={i}
          x={padLeft + (i / (n - 1)) * chartW}
          y={svgHeight - 5}
          textAnchor="middle"
          fontSize={10}
          fill="var(--drp-grey)"
        >
          {lbl}
        </text>
      ))}

      {/* Tooltip */}
      {showTooltip && (
        <g>
          <circle
            cx={tooltipPt.x}
            cy={tooltipPt.y}
            r={6}
            fill="var(--drp-purple)"
            stroke="white"
            strokeWidth={2}
          />
          <rect
            x={tooltipPt.x + 10}
            y={tooltipPt.y - 30}
            width={90}
            height={44}
            rx={0}
            fill="var(--drp-surface)"
            stroke="var(--drp-black)"
            strokeWidth={1}
          />
          <text
            x={tooltipPt.x + 55}
            y={tooltipPt.y - 14}
            textAnchor="middle"
            fontSize={9}
            fill="var(--drp-grey)"
          >
            June 16
          </text>
          <text
            x={tooltipPt.x + 55}
            y={tooltipPt.y + 4}
            textAnchor="middle"
            fontSize={13}
            fontWeight="bold"
            fill="var(--drp-black)"
          >
            $14.800
          </text>
        </g>
      )}
    </svg>
  );
};

// ─── SVG Double Bar Chart ─────────────────────────────────────────────────────

interface DoubleBarChartSVGProps {
  dataGreen: number[];
  dataPurple: number[];
  labels: string[];
  maxValue?: number;
  height?: number;
}

const DoubleBarChartSVG: React.FC<DoubleBarChartSVGProps> = ({
  dataGreen,
  dataPurple,
  labels,
  maxValue = 500,
  height = 200,
}) => {
  const svgWidth = 800;
  const svgHeight = height;
  const padLeft = 40;
  const padRight = 10;
  const padTop = 10;
  const padBottom = 30;
  const chartW = svgWidth - padLeft - padRight;
  const chartH = svgHeight - padTop - padBottom;
  const n = dataGreen.length;
  const slotW = chartW / n;
  const barW = slotW * 0.28;
  const yLines = [0, 100, 200, 300, 400, 500];

  return (
    <svg
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      style={{ width: "100%", height }}
    >
      {yLines.map((v) => {
        const y = padTop + chartH - (v / maxValue) * chartH;
        return (
          <g key={v}>
            <line
              x1={padLeft}
              y1={y}
              x2={svgWidth - padRight}
              y2={y}
              stroke="var(--drp-grey)"
              strokeWidth={0.5}
              strokeDasharray="4,3"
              opacity={0.3}
            />
            <text
              x={padLeft - 5}
              y={y + 4}
              textAnchor="end"
              fontSize={10}
              fill="var(--drp-grey)"
            >
              {v}
            </text>
          </g>
        );
      })}
      {dataGreen.map((gVal, i) => {
        const pVal = dataPurple[i];
        const gH = (gVal / maxValue) * chartH;
        const pH = (pVal / maxValue) * chartH;
        const centerX = padLeft + i * slotW + slotW / 2;
        const gX = centerX - barW - 2;
        const pX = centerX + 2;
        return (
          <g key={i}>
            <rect
              x={gX}
              y={padTop + chartH - gH}
              width={barW}
              height={gH}
              rx={0}
              fill="var(--drp-mint)"
            />
            <rect
              x={pX}
              y={padTop + chartH - pH}
              width={barW}
              height={pH}
              rx={0}
              fill="var(--drp-purple)"
              opacity={0.5}
            />
            <text
              x={centerX}
              y={svgHeight - 5}
              textAnchor="middle"
              fontSize={10}
              fill="var(--drp-grey)"
            >
              {labels[i]}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

// ─── Chart.js Polar Area Chart ────────────────────────────────────────────────

interface PolarChartProps {
  variant?: "radar" | "segments";
  height?: number;
}

const PolarChartComponent: React.FC<PolarChartProps> = ({
  variant = "radar",
  height = 320,
}) => {
  if (variant === "segments") {
    const data = {
      labels: [
        "Category A",
        "Category B",
        "Category C",
        "Category D",
        "Category E",
        "Category F",
      ],
      datasets: [
        {
          data: [60, 45, 70, 50, 55, 65],
          backgroundColor: [
            "rgba(255, 193, 7, 0.75)", // yellow
            "rgba(255, 105, 135, 0.75)", // pink
            "rgba(147, 197, 253, 0.75)", // light blue
            "rgba(0, 200, 150, 0.75)", // mint
            "rgba(249, 168, 212, 0.75)", // rose
            "rgba(99, 29, 237, 0.75)", // purple
          ],
          borderColor: [
            "#FFC107",
            "#FF6987",
            "#93c5fd",
            "#00C896",
            "#f9a8d4",
            "#631DED",
          ],
          borderWidth: 2,
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
      },
      scales: {
        r: {
          grid: { color: "rgba(102, 102, 102, 0.2)" },
          ticks: { display: false },
        },
      },
    };

    return (
      <div style={{ height, width: "100%" }}>
        <PolarArea data={data} options={options} />
      </div>
    );
  }

  // Radar variant
  const radarData = {
    labels: ["North", "NE", "East", "SE", "South", "SW", "West", "NW"],
    datasets: [
      {
        label: "Series A",
        data: [95, 70, 55, 80, 45, 60, 90, 75],
        backgroundColor: "rgba(99, 29, 237, 0.2)",
        borderColor: "#631DED",
        borderWidth: 2,
        pointBackgroundColor: "#631DED",
        pointRadius: 3,
      },
      {
        label: "Series B",
        data: [50, 85, 40, 60, 90, 35, 70, 50],
        backgroundColor: "rgba(0, 200, 150, 0.2)",
        borderColor: "#00C896",
        borderWidth: 2,
        pointBackgroundColor: "#00C896",
        pointRadius: 3,
      },
    ],
  };

  const radarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        grid: { color: "rgba(102, 102, 102, 0.2)" },
        angleLines: { color: "rgba(102, 102, 102, 0.2)" },
        ticks: { display: false },
        pointLabels: {
          font: { size: 11 },
          color: "#666666",
        },
      },
    },
  };

  return (
    <div style={{ height, width: "100%" }}>
      <Radar data={radarData} options={radarOptions} />
    </div>
  );
};

// ─── Mini Sparkline ───────────────────────────────────────────────────────────

interface SparklineProps {
  color: string;
  values?: number[];
}

const Sparkline: React.FC<SparklineProps> = ({
  color,
  values = [40, 55, 35, 60, 45, 70, 55, 80],
}) => {
  const w = 100;
  const h = 40;
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;
  const points = values.map((v, i) => ({
    x: (i / (values.length - 1)) * w,
    y: h - ((v - min) / range) * h * 0.8 - h * 0.1,
  }));
  const d = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");
  const areaClose = `L ${points[points.length - 1].x} ${h} L 0 ${h} Z`;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      style={{ width: 80, height: 40 }}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient
          id={`sparkGrad${color.replace("#", "")}`}
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <path
        d={d + areaClose}
        fill={`url(#sparkGrad${color.replace("#", "")})`}
      />
      <path d={d} fill="none" stroke={color} strokeWidth="2" />
    </svg>
  );
};

// ─── Mini Bar Sparkline ───────────────────────────────────────────────────────

interface BarSparklineProps {
  color: string;
  values?: number[];
}

const BarSparkline: React.FC<BarSparklineProps> = ({
  color,
  values = [30, 50, 70, 40, 60, 80, 50],
}) => {
  const w = 80;
  const h = 50;
  const max = Math.max(...values);
  const n = values.length;
  const bw = (w / n) * 0.55;
  const gap = w / n;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      style={{ width: 80, height: 48 }}
      preserveAspectRatio="none"
    >
      {values.map((v, i) => {
        const barH = (v / max) * h * 0.9;
        const x = i * gap + gap / 2 - bw / 2;
        return (
          <rect
            key={i}
            x={x}
            y={h - barH}
            width={bw}
            height={barH}
            rx={0}
            fill={color}
            opacity={0.8}
          />
        );
      })}
    </svg>
  );
};

// ─── Donut Chart ──────────────────────────────────────────────────────────────

interface DonutChartProps {
  segments: Array<{ color: string; pct: number; label?: string }>;
  label?: string;
  sublabel?: string;
  height?: number;
  showSegmentLabels?: boolean;
  emptyRings?: boolean;
}

const DonutChart: React.FC<DonutChartProps> = ({
  segments,
  label,
  sublabel,
  height = 200,
  showSegmentLabels = false,
  emptyRings = false,
}) => {
  const cx = 120;
  const cy = 120;
  const R = 90;
  const r = 55;

  if (emptyRings) {
    // Three concentric empty circles
    const colors = [
      "var(--drp-purple)",
      "var(--drp-yellow)",
      "var(--drp-mint)",
    ];
    const radii = [R, R - 20, R - 40];
    return (
      <svg viewBox="0 0 240 240" style={{ width: "100%", height }}>
        {radii.map((rad, i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={rad}
            fill="none"
            stroke={colors[i]}
            strokeWidth={8}
          />
        ))}
        {label && (
          <>
            <text
              x={cx}
              y={cy - 8}
              textAnchor="middle"
              fontSize={18}
              fontWeight="bold"
              fill="var(--drp-black)"
            >
              {label}
            </text>
            {sublabel && (
              <text
                x={cx}
                y={cy + 12}
                textAnchor="middle"
                fontSize={11}
                fill="var(--drp-grey)"
              >
                {sublabel}
              </text>
            )}
          </>
        )}
      </svg>
    );
  }

  // Real donut
  let total = segments.reduce((s, seg) => s + seg.pct, 0);
  let currentAngle = -Math.PI / 2;

  const paths = segments.map((seg) => {
    const angle = (seg.pct / total) * 2 * Math.PI;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    currentAngle = endAngle;

    const x1 = cx + R * Math.cos(startAngle);
    const y1 = cy + R * Math.sin(startAngle);
    const x2 = cx + R * Math.cos(endAngle);
    const y2 = cy + R * Math.sin(endAngle);
    const ix1 = cx + r * Math.cos(endAngle);
    const iy1 = cy + r * Math.sin(endAngle);
    const ix2 = cx + r * Math.cos(startAngle);
    const iy2 = cy + r * Math.sin(startAngle);
    const large = angle > Math.PI ? 1 : 0;

    const midAngle = startAngle + angle / 2;
    const midR = (R + r) / 2;
    const lx = cx + midR * Math.cos(midAngle);
    const ly = cy + midR * Math.sin(midAngle);
    const pct = Math.round((seg.pct / total) * 100);

    return {
      d: `M ${x1} ${y1} A ${R} ${R} 0 ${large} 1 ${x2} ${y2} L ${ix1} ${iy1} A ${r} ${r} 0 ${large} 0 ${ix2} ${iy2} Z`,
      color: seg.color,
      lx,
      ly,
      pct,
      showLabel: showSegmentLabels && pct > 5,
    };
  });

  return (
    <svg viewBox="0 0 240 240" style={{ width: "100%", height }}>
      {paths.map((p, i) => (
        <path key={i} d={p.d} fill={p.color} />
      ))}
      {paths.map(
        (p, i) =>
          p.showLabel && (
            <text
              key={i}
              x={p.lx}
              y={p.ly}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={9}
              fill="white"
              fontWeight="bold"
            >
              {p.pct}%
            </text>
          ),
      )}
      {label && (
        <>
          <text
            x={cx}
            y={cy - 8}
            textAnchor="middle"
            fontSize={18}
            fontWeight="bold"
            fill="var(--drp-black)"
          >
            {label}
          </text>
          {sublabel && (
            <text
              x={cx}
              y={cy + 12}
              textAnchor="middle"
              fontSize={11}
              fill="var(--drp-grey)"
            >
              {sublabel}
            </text>
          )}
        </>
      )}
    </svg>
  );
};

// ─── Chart.js World Map (Choropleth) ──────────────────────────────────────────

const WORLD_ATLAS_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const WorldMapChart: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<ChartJS | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const init = async () => {
      try {
        // Dynamically import chartjs-chart-geo (it registers itself on Chart.js)
        const geoModule = await import("chartjs-chart-geo");
        const topoModule = await import("topojson-client");

        // Register geo controllers
        ChartJS.register(
          geoModule.ChoroplethController,
          geoModule.GeoFeature,
          geoModule.ColorScale,
          geoModule.ProjectionScale,
        );

        // Fetch world topojson
        const res = await fetch(WORLD_ATLAS_URL);
        const topology = await res.json();

        if (cancelled) return;

        const countries = (topoModule as any).feature(
          topology,
          topology.objects.countries,
        ).features;

        // Sample data — assign values for highlighted countries
        const sampleValues: Record<string, number> = {
          "840": 10,
          "826": 6,
          "250": 3,
          "246": 2,
          "040": 1,
          "528": 1,
          "400": 1,
          "380": 1,
        };

        if (!canvasRef.current) return;

        // Destroy previous chart
        if (chartRef.current) {
          chartRef.current.destroy();
        }

        chartRef.current = new ChartJS(canvasRef.current, {
          type: "choropleth" as any,
          data: {
            labels: countries.map((c: any) => c.properties?.name || c.id),
            datasets: [
              {
                label: "Products",
                data: countries.map((c: any) => ({
                  feature: c,
                  value: sampleValues[c.id] || 0,
                })),
              },
            ],
          },
          options: {
            showOutline: true,
            showGraticule: false,
            plugins: {
              legend: { display: false },
            },
            scales: {
              projection: {
                axis: "x",
                projection: "equalEarth",
              } as any,
              color: {
                axis: "x",
                quantize: 5,
                legend: { position: "bottom-right" },
                interpolate: (v: number) => {
                  // Purple scale from light to dark
                  const r = Math.round(99 + (1 - v) * 156);
                  const g = Math.round(29 + (1 - v) * 226);
                  const b = Math.round(237 + (1 - v) * 18);
                  return `rgba(${r}, ${g}, ${b}, ${v < 0.05 ? 0.1 : 0.8})`;
                },
              } as any,
            },
          } as any,
        });

        setLoading(false);
      } catch (err) {
        if (!cancelled) {
          setError("Failed to load map data");
          setLoading(false);
        }
      }
    };

    init();

    return () => {
      cancelled = true;
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, []);

  if (error) {
    return (
      <div
        style={{
          height: 350,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#666",
        }}
      >
        {error}
      </div>
    );
  }

  return (
    <div style={{ position: "relative", height: 350, width: "100%" }}>
      {loading && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#666",
          }}
        >
          Loading map...
        </div>
      )}
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />

      {/* Legend */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 16,
          marginTop: 8,
          flexWrap: "wrap",
        }}
      >
        {[
          { color: "#631DED", label: "United States (10)" },
          { color: "#7B3DEF", label: "United Kingdom (6)" },
          { color: "#9460F2", label: "France (3)" },
          { color: "#AD83F5", label: "Finland (2)" },
          { color: "#C6A6F8", label: "Austria (1)" },
          { color: "#C6A6F8", label: "Netherlands (1)" },
          { color: "#C6A6F8", label: "Jordan (1)" },
          { color: "#C6A6F8", label: "Italy (1)" },
        ].map((item) => (
          <div
            key={item.label}
            style={{ display: "flex", alignItems: "center", gap: 4 }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: item.color,
                display: "inline-block",
              }}
            />
            <span style={{ fontSize: 11, color: "#666" }}>{item.label}</span>
          </div>
        ))}
      </div>

      <p
        style={{
          textAlign: "center",
          fontSize: 11,
          color: "#999",
          marginTop: 4,
        }}
      >
        Location data: 29 of 266 products (11%)
      </p>
    </div>
  );
};

// ─── Stat Cards ───────────────────────────────────────────────────────────────

interface StatCard1Props {
  label: string;
  value: string;
  badge?: string;
  badgeColor?: string;
  description: string;
  trend?: "up" | "down";
}

const StatCard1: React.FC<StatCard1Props> = ({
  label,
  value,
  badge,
  badgeColor,
  description,
  trend = "up",
}) => (
  <div className="drp-stat-card" style={{ flex: 1 }}>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "var(--drp-space-1)",
      }}
    >
      <span className="drp-stat-card__label">{label}</span>
      <svg
        style={{ width: 16, height: 16, color: "var(--drp-grey)" }}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={
            trend === "up"
              ? "M7 17L17 7M17 7H7M17 7v10"
              : "M7 7l10 10M17 17H7M17 17V7"
          }
        />
      </svg>
    </div>
    <div className="drp-stat-card__value">{value}</div>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--drp-space-2)",
        marginTop: "var(--drp-space-1)",
      }}
    >
      <span className="drp-caption">{description}</span>
      {badge && (
        <span
          className={`drp-stat-card__badge ${trend === "up" ? "drp-stat-card__badge--up" : "drp-stat-card__badge--down"}`}
        >
          {badge}
        </span>
      )}
    </div>
  </div>
);

interface StatCard2Props {
  label: string;
  value: string;
  spent: string;
  left: string;
  barColor: string;
  pct: number;
}

const StatCard2: React.FC<StatCard2Props> = ({
  label,
  value,
  spent,
  left,
  barColor,
  pct,
}) => (
  <div className="drp-stat-card" style={{ flex: 1 }}>
    <div className="drp-stat-card__label">{label}</div>
    <div className="drp-stat-card__value">{value}</div>
    <div
      style={{
        height: 6,
        background: "var(--drp-grey)",
        opacity: 0.15,
        marginTop: "var(--drp-space-2)",
        marginBottom: "var(--drp-space-2)",
      }}
    >
      <div
        style={{ height: "100%", width: `${pct}%`, backgroundColor: barColor }}
      ></div>
    </div>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span className="drp-caption">
        <strong>{spent}</strong> Spent
      </span>
      <span className="drp-caption">
        <strong>{left}</strong> Left
      </span>
    </div>
  </div>
);

interface StatCard3Props {
  label: string;
  value: string;
  sub: string;
  change: string;
  changeColor: string;
  chartColor: string;
  chartValues?: number[];
}

const StatCard3: React.FC<StatCard3Props> = ({
  label,
  value,
  sub,
  change,
  changeColor,
  chartColor,
  chartValues,
}) => (
  <div
    className="drp-stat-card"
    style={{
      flex: 1,
      display: "flex",
      alignItems: "center",
      gap: "var(--drp-space-4)",
    }}
  >
    <div style={{ flex: 1 }}>
      <div className="drp-stat-card__label">{label}</div>
      <div className="drp-stat-card__value">{value}</div>
      {sub && <span className="drp-caption">{sub}</span>}
      <span
        style={{
          fontSize: "var(--drp-text-xs)",
          fontWeight: "var(--drp-weight-medium)",
          color: changeColor,
        }}
      >
        {change}
      </span>
    </div>
    <BarSparkline color={chartColor} values={chartValues} />
  </div>
);

interface StatCard4Props {
  icon: React.ReactNode;
  value: string;
  label: string;
  chartColor: string;
  chartValues?: number[];
}

const StatCard4: React.FC<StatCard4Props> = ({
  icon,
  value,
  label,
  chartColor,
  chartValues,
}) => (
  <div
    className="drp-stat-card"
    style={{
      flex: 1,
      display: "flex",
      alignItems: "center",
      gap: "var(--drp-space-3)",
    }}
  >
    <div
      style={{
        width: 40,
        height: 40,
        border: "var(--drp-border-thin)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--drp-grey)",
        flexShrink: 0,
      }}
    >
      {icon}
    </div>
    <div style={{ flex: 1 }}>
      <div
        className="drp-stat-card__value"
        style={{ fontSize: "var(--drp-text-h5)" }}
      >
        {value}
      </div>
      <div className="drp-caption">{label}</div>
    </div>
    <Sparkline color={chartColor} values={chartValues} />
  </div>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const MONTHS_12 = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const MONTHS_8 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];
const MONTHS_4 = ["Jan", "Feb", "Mar", "Apr"];
const MONTHS_6 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

const BAR_DATA_12 = [330, 210, 440, 490, 190, 260, 340, 300, 380, 220, 130, 90];
const BAR_DATA_8 = [330, 210, 440, 490, 190, 260, 340, 300];
const BAR_DATA_4 = [330, 210, 440, 490];

const HBAR_DATA_12 = [
  { label: "Jul", value: 870, maxValue: 980 },
  { label: "Jun", value: 720, maxValue: 950 },
  { label: "Apr", value: 640, maxValue: 900 },
  { label: "Mar", value: 310, maxValue: 820 },
  { label: "Feb", value: 700, maxValue: 870 },
  { label: "Jan", value: 810, maxValue: 940 },
];
const HBAR_DATA_8 = [
  { label: "Jul", value: 620, maxValue: 700 },
  { label: "Jun", value: 560, maxValue: 650 },
  { label: "Apr", value: 510, maxValue: 590 },
  { label: "Mar", value: 190, maxValue: 580 },
  { label: "Feb", value: 500, maxValue: 560 },
  { label: "Jan", value: 580, maxValue: 640 },
];
const HBAR_DATA_4 = [
  { label: "Jul", value: 280, maxValue: 320 },
  { label: "Jun", value: 230, maxValue: 290 },
  { label: "Apr", value: 200, maxValue: 250 },
  { label: "Mar", value: 75, maxValue: 210 },
  { label: "Feb", value: 110, maxValue: 200 },
  { label: "Jan", value: 220, maxValue: 270 },
];

const WAVE_BLUE_12 = [
  280, 330, 390, 420, 360, 290, 250, 270, 230, 320, 420, 460,
];
const WAVE_GREEN_12 = [
  100, 140, 200, 240, 270, 300, 350, 290, 330, 360, 340, 310,
];
const WAVE_BLUE_8 = [280, 330, 390, 420, 360, 290, 250, 270];
const WAVE_GREEN_8 = [100, 140, 200, 240, 270, 300, 350, 290];
const WAVE_BLUE_4 = [150, 200, 240, 210];
const WAVE_GREEN_4 = [80, 130, 180, 370];

// Geometric (jagged wave)
const GEO_BLUE_12 = [
  420, 350, 430, 380, 310, 330, 310, 290, 280, 240, 100, 120,
];
const GEO_GREEN_12 = [
  100, 140, 200, 200, 230, 330, 290, 310, 290, 340, 420, 380,
];
const GEO_BLUE_8 = [420, 350, 430, 380, 310, 330, 310, 400];
const GEO_GREEN_8 = [100, 150, 200, 220, 240, 320, 310, 100];
const GEO_BLUE_4 = [250, 200, 240, 210];
const GEO_GREEN_4 = [120, 180, 260, 380];

const DOUBLE_GREEN_12 = [
  220, 370, 340, 410, 100, 160, 10, 110, 200, 390, 200, 310,
];
const DOUBLE_PURPLE_12 = [
  210, 60, 400, 60, 60, 100, 30, 100, 190, 380, 370, 70,
];
const DOUBLE_GREEN_8 = [220, 370, 340, 410, 100, 160, 10, 110];
const DOUBLE_PURPLE_8 = [210, 60, 400, 60, 60, 100, 30, 100];
const DOUBLE_GREEN_4 = [220, 370, 340, 410];
const DOUBLE_PURPLE_4 = [210, 60, 400, 60];

// ─── Screen Layout Wrapper ────────────────────────────────────────────────────

interface ReportScreenProps {
  children: React.ReactNode;
  active?: string;
}

const ReportScreen: React.FC<ReportScreenProps> = ({
  children,
  active = "Analytics",
}) => (
  <div className="app-layout">
    <AppSidebar activeId="reports" />
    <div className="main-content">
      <AppTopBar title="Reports" />
      <div className="content">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--drp-space-4)",
          }}
        >
          {children}
        </div>
      </div>
      <AppFooter />
    </div>
  </div>
);

// ─── 1. Bars Screen ───────────────────────────────────────────────────────────

export const BarsScreen: React.FC = () => (
  <ReportScreen>
    {/* Stat Cards */}
    <div className="drp-stat-grid drp-stat-grid--3">
      <StatCard1
        label="Balance"
        value="$80,470.50"
        badge="+10%"
        description="Total remaining balance"
        trend="up"
      />
      <StatCard1
        label="Money in"
        value="$60,930.50"
        badge="-14%"
        description="Total amount you gained"
        trend="down"
      />
      <StatCard1
        label="Money out"
        value="$42,890.30"
        badge="+16%"
        description="Total amount you spent"
        trend="up"
      />
    </div>

    {/* Bars 12 cols */}
    <ChartCardWrapper title="Bars 12 columns">
      <BarChartSVG
        data={BAR_DATA_12}
        labels={MONTHS_12}
        maxValue={500}
        height={220}
      />
    </ChartCardWrapper>

    {/* Bars 12 cols (second) */}
    <ChartCardWrapper title="Bars 12 columns">
      <BarChartSVG
        data={BAR_DATA_12}
        labels={MONTHS_12}
        maxValue={500}
        height={220}
      />
    </ChartCardWrapper>

    {/* Bars 8 + 4 cols */}
    <div className="drp-chart-grid drp-chart-grid--2">
      <ChartCardWrapper title="Bars 8 columns">
        <BarChartSVG
          data={BAR_DATA_8}
          labels={MONTHS_8}
          maxValue={500}
          height={200}
        />
      </ChartCardWrapper>
      <ChartCardWrapper title="Bars 4 columns">
        <BarChartSVG
          data={BAR_DATA_4}
          labels={MONTHS_4}
          maxValue={500}
          height={200}
        />
      </ChartCardWrapper>
    </div>
  </ReportScreen>
);

// ─── 2. Bars Horizontal Screen ────────────────────────────────────────────────

export const BarsHorizontalScreen: React.FC = () => (
  <ReportScreen>
    {/* Stat Cards */}
    <div className="drp-stat-grid drp-stat-grid--3">
      <StatCard2
        label="Balance"
        value="$80,470.50"
        spent="1.345"
        left="1.345"
        barColor="var(--drp-mint)"
        pct={50}
      />
      <StatCard2
        label="Money in"
        value="$60,930.50"
        spent="1.345"
        left="1.345"
        barColor="var(--drp-yellow)"
        pct={50}
      />
      <StatCard2
        label="Money out"
        value="$42,890.30"
        spent="1.345"
        left="1.345"
        barColor="var(--drp-pink)"
        pct={50}
      />
    </div>

    {/* Bars 12 cols */}
    <ChartCardWrapper title="Bars 12 columns">
      <HBarChartSVG data={HBAR_DATA_12} height={260} />
    </ChartCardWrapper>

    {/* Bars 8 + 4 cols */}
    <div className="drp-chart-grid drp-chart-grid--2">
      <ChartCardWrapper title="Bars 8 columns">
        <HBarChartSVG data={HBAR_DATA_8} height={240} />
      </ChartCardWrapper>
      <ChartCardWrapper title="Bars 4 columns">
        <HBarChartSVG data={HBAR_DATA_4} height={240} />
      </ChartCardWrapper>
    </div>
  </ReportScreen>
);

// ─── 3. Chart Geometric Screen ────────────────────────────────────────────────

export const ChartGeometricScreen: React.FC = () => (
  <ReportScreen>
    {/* Stat Cards with bar icons */}
    <div className="drp-stat-grid drp-stat-grid--3">
      {[
        { label: "Balance", value: "$80,470.50", color: "var(--drp-mint)" },
        { label: "Money in", value: "$60,930.50", color: "var(--drp-yellow)" },
        { label: "Money out", value: "$42,890.30", color: "var(--drp-pink)" },
      ].map((s) => (
        <div key={s.label} className="drp-stat-card">
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div className="drp-stat-card__label">{s.label}</div>
              <div className="drp-stat-card__value">{s.value}</div>
            </div>
            <div style={{ width: 24, height: 24, color: "var(--drp-grey)" }}>
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
          </div>
          <div
            style={{
              height: 4,
              marginTop: "var(--drp-space-3)",
              backgroundColor: s.color,
            }}
          ></div>
        </div>
      ))}
    </div>

    {/* Wave 12 cols (Geometric / jagged) */}
    <ChartCardWrapper
      title="Wave 12 columns"
      legend={[
        { color: "var(--drp-purple)", label: "Blue Tag" },
        { color: "var(--drp-mint)", label: "Green Tag" },
      ]}
    >
      <WaveChartSVG
        dataBlue={GEO_BLUE_12}
        dataGreen={GEO_GREEN_12}
        labels={MONTHS_12}
        maxValue={500}
        height={260}
        smooth={false}
        showTooltip
      />
    </ChartCardWrapper>

    {/* Wave 8 + 4 cols */}
    <div className="drp-chart-grid drp-chart-grid--2">
      <ChartCardWrapper
        title="Wave 8 columns"
        legend={[
          { color: "var(--drp-purple)", label: "Blue Tag" },
          { color: "var(--drp-mint)", label: "Green Tag" },
        ]}
      >
        <WaveChartSVG
          dataBlue={GEO_BLUE_8}
          dataGreen={GEO_GREEN_8}
          labels={MONTHS_8}
          maxValue={500}
          height={220}
          smooth={false}
          showTooltip
        />
      </ChartCardWrapper>
      <ChartCardWrapper title="Wave 4 columns">
        <WaveChartSVG
          dataBlue={GEO_BLUE_4}
          dataGreen={GEO_GREEN_4}
          labels={MONTHS_4}
          maxValue={500}
          height={220}
          smooth={false}
          showTooltip
        />
      </ChartCardWrapper>
    </div>
  </ReportScreen>
);

// ─── 4. Chart Wave Screen ─────────────────────────────────────────────────────

export const ChartWaveScreen: React.FC = () => (
  <ReportScreen>
    {/* Stat Cards with bar sparklines */}
    <div className="drp-stat-grid drp-stat-grid--3">
      <StatCard3
        label="Dropbox"
        value="368.4 Gb"
        sub=""
        change="^ +0.73%"
        changeColor="var(--drp-mint)"
        chartColor="var(--drp-mint)"
        chartValues={[30, 45, 40, 55, 50, 65, 60]}
      />
      <StatCard3
        label="Amazon AWS"
        value="82.6 Tb"
        sub=""
        change="v -0.73%"
        changeColor="var(--drp-pink)"
        chartColor="var(--drp-yellow)"
        chartValues={[60, 55, 50, 45, 40, 35, 38]}
      />
      <StatCard3
        label="Google Cloud"
        value="16.8 Gb"
        sub=""
        change="^ +6.59%"
        changeColor="var(--drp-mint)"
        chartColor="var(--drp-pink)"
        chartValues={[25, 30, 35, 40, 38, 45, 50]}
      />
    </div>

    {/* Wave 12 cols */}
    <ChartCardWrapper
      title="Wave 12 columns"
      legend={[
        { color: "var(--drp-purple)", label: "Blue Tag" },
        { color: "var(--drp-mint)", label: "Green Tag" },
      ]}
    >
      <WaveChartSVG
        dataBlue={WAVE_BLUE_12}
        dataGreen={WAVE_GREEN_12}
        labels={MONTHS_12}
        maxValue={500}
        height={260}
        smooth
        showTooltip
      />
    </ChartCardWrapper>

    {/* Wave 8 + 4 cols */}
    <div className="drp-chart-grid drp-chart-grid--2">
      <ChartCardWrapper
        title="Wave 8 columns"
        legend={[
          { color: "var(--drp-purple)", label: "Blue Tag" },
          { color: "var(--drp-mint)", label: "Green Tag" },
        ]}
      >
        <WaveChartSVG
          dataBlue={WAVE_BLUE_8}
          dataGreen={WAVE_GREEN_8}
          labels={MONTHS_8}
          maxValue={500}
          height={220}
          smooth
          showTooltip
        />
      </ChartCardWrapper>
      <ChartCardWrapper title="Wave 4 columns">
        <WaveChartSVG
          dataBlue={WAVE_BLUE_4}
          dataGreen={WAVE_GREEN_4}
          labels={MONTHS_4}
          maxValue={500}
          height={220}
          smooth
          showTooltip
        />
      </ChartCardWrapper>
    </div>
  </ReportScreen>
);

// ─── 5. Double Bars Screen ────────────────────────────────────────────────────

export const DoubleBarsScreen: React.FC = () => (
  <ReportScreen>
    {/* Double Bars 12 cols with stat row inside */}
    <ChartCardWrapper
      title="Bars 12 columns"
      legend={[
        { color: "var(--drp-mint)", label: "Blue Tag" },
        { color: "var(--drp-purple)", label: "Green Tag" },
      ]}
    >
      {/* Mini stats inside */}
      <div
        className="drp-stat-grid drp-stat-grid--3"
        style={{
          borderBottom: "var(--drp-border-thin)",
          paddingBottom: "var(--drp-space-4)",
        }}
      >
        {[
          {
            label: "Balance",
            value: "$80,470.50",
            change: "+10%",
            pos: true,
          },
          {
            label: "Money in",
            value: "$60,930.50",
            change: "-2%",
            pos: false,
          },
          {
            label: "Money out",
            value: "$42,890.30",
            change: "+10%",
            pos: true,
          },
        ].map((s) => (
          <div key={s.label}>
            <div className="drp-caption">{s.label}</div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--drp-space-2)",
              }}
            >
              <span
                style={{
                  fontSize: "var(--drp-text-lg)",
                  fontWeight: "var(--drp-weight-bold)",
                  color: "var(--drp-black)",
                }}
              >
                {s.value}
              </span>
              <span
                style={{
                  fontSize: "var(--drp-text-xs)",
                  color: s.pos ? "var(--drp-mint)" : "var(--drp-pink)",
                }}
              >
                {s.change}
              </span>
              <svg
                style={{
                  width: 12,
                  height: 12,
                  color: s.pos ? "var(--drp-mint)" : "var(--drp-pink)",
                }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    s.pos
                      ? "M7 17L17 7M17 7H7M17 7v10"
                      : "M7 7l10 10M17 17H7M17 17V7"
                  }
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
      <DoubleBarChartSVG
        dataGreen={DOUBLE_GREEN_12}
        dataPurple={DOUBLE_PURPLE_12}
        labels={MONTHS_12}
        maxValue={500}
        height={220}
      />
    </ChartCardWrapper>

    {/* Bars 12 cols (plain) */}
    <ChartCardWrapper title="Bars 12 columns">
      <DoubleBarChartSVG
        dataGreen={DOUBLE_GREEN_12}
        dataPurple={DOUBLE_PURPLE_12}
        labels={MONTHS_12}
        maxValue={500}
        height={220}
      />
    </ChartCardWrapper>

    {/* Bars 8 + 4 cols */}
    <div className="drp-chart-grid drp-chart-grid--2">
      <ChartCardWrapper title="Bars 8 columns">
        <DoubleBarChartSVG
          dataGreen={DOUBLE_GREEN_8}
          dataPurple={DOUBLE_PURPLE_8}
          labels={MONTHS_8}
          maxValue={500}
          height={200}
        />
      </ChartCardWrapper>
      <ChartCardWrapper title="Bars 4 columns">
        <DoubleBarChartSVG
          dataGreen={DOUBLE_GREEN_4}
          dataPurple={DOUBLE_PURPLE_4}
          labels={MONTHS_4}
          maxValue={500}
          height={200}
        />
      </ChartCardWrapper>
    </div>
  </ReportScreen>
);

// ─── 6. Misc Screen ───────────────────────────────────────────────────────────

export const MiscScreen: React.FC = () => (
  <ReportScreen>
    {/* Map */}
    <ChartCardWrapper title="Map 12 columns">
      <WorldMapChart />
    </ChartCardWrapper>

    {/* Pie chart 6 cols x2 */}
    <div className="drp-chart-grid drp-chart-grid--2">
      <ChartCardWrapper title="Pie chart 6 columns">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <DonutChart
            emptyRings
            label="$80,720.50"
            sublabel="from all accounts"
            height={200}
            segments={[]}
          />
          <div
            className="drp-chart-legend drp-chart-legend--center"
            style={{ marginTop: "var(--drp-space-2)" }}
          >
            {[
              { color: "var(--drp-yellow)", label: "Yellow Tag" },
              { color: "var(--drp-purple)", label: "Blue Tag" },
              { color: "var(--drp-mint)", label: "Green Tag" },
            ].map((l) => (
              <div key={l.label} className="drp-chart-legend__item">
                <span
                  className="drp-chart-legend__dot"
                  style={{ backgroundColor: l.color }}
                ></span>
                <span>{l.label}</span>
              </div>
            ))}
          </div>
        </div>
      </ChartCardWrapper>
      <ChartCardWrapper title="Pie chart 6 columns">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <DonutChart
            label="$80,720.50"
            sublabel="from all accounts"
            height={200}
            showSegmentLabels
            segments={[
              { color: "var(--drp-yellow)", pct: 8 },
              { color: "var(--drp-purple)", pct: 35 },
              { color: "var(--drp-mint)", pct: 30 },
              { color: "var(--drp-pink)", pct: 20 },
              { color: "#6f42c1", pct: 7 },
            ]}
          />
          <div
            className="drp-chart-legend drp-chart-legend--center"
            style={{ marginTop: "var(--drp-space-2)" }}
          >
            {[
              { color: "var(--drp-yellow)", label: "Yellow" },
              { color: "var(--drp-purple)", label: "Blue" },
              { color: "var(--drp-mint)", label: "Green" },
              { color: "var(--drp-pink)", label: "Red" },
              { color: "#6f42c1", label: "Dark Blue" },
            ].map((l) => (
              <div key={l.label} className="drp-chart-legend__item">
                <span
                  className="drp-chart-legend__dot"
                  style={{ backgroundColor: l.color }}
                ></span>
                <span>{l.label}</span>
              </div>
            ))}
          </div>
        </div>
      </ChartCardWrapper>
    </div>
  </ReportScreen>
);

// ─── 7. Polar Chart Screen ────────────────────────────────────────────────────

export const PolarChartScreen: React.FC = () => (
  <ReportScreen>
    {/* Stat Cards with sparklines */}
    <div className="drp-stat-grid drp-stat-grid--3">
      {[
        {
          icon: (
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ width: 20, height: 20 }}
            >
              <rect x="3" y="3" width="7" height="7" rx="0" strokeWidth={2} />
              <rect x="14" y="3" width="7" height="7" rx="0" strokeWidth={2} />
              <rect x="3" y="14" width="7" height="7" rx="0" strokeWidth={2} />
              <rect x="14" y="14" width="7" height="7" rx="0" strokeWidth={2} />
            </svg>
          ),
          value: "368.4 Gb",
          label: "Dropbox",
          color: "var(--drp-purple)",
          values: [30, 50, 35, 55, 45, 60, 55, 70],
        },
        {
          icon: (
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ width: 20, height: 20 }}
            >
              <rect x="3" y="4" width="18" height="18" rx="0" strokeWidth={2} />
              <path
                strokeLinecap="round"
                strokeWidth={2}
                d="M16 2v4M8 2v4M3 10h18"
              />
            </svg>
          ),
          value: "82.6 Tb",
          label: "Amazon AWS",
          color: "var(--drp-purple)",
          values: [55, 45, 60, 50, 65, 55, 70, 60],
        },
        {
          icon: (
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ width: 20, height: 20 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
          ),
          value: "16.8 Gb",
          label: "Google Cloud",
          color: "var(--drp-purple)",
          values: [40, 55, 45, 60, 50, 65, 55, 70],
        },
      ].map((s) => (
        <StatCard4
          key={s.label}
          icon={s.icon}
          value={s.value}
          label={s.label}
          chartColor={s.color}
          chartValues={s.values}
        />
      ))}
    </div>

    {/* Polar charts */}
    <div className="drp-chart-grid drp-chart-grid--2">
      <ChartCardWrapper title="Polar chart 6 columns">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <PolarChartComponent variant="radar" height={320} />
        </div>
      </ChartCardWrapper>
      <ChartCardWrapper title="Polar chart 6 columns">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <PolarChartComponent variant="segments" height={320} />
        </div>
      </ChartCardWrapper>
    </div>

    {/* Wave 6 cols x2 */}
    <div className="drp-chart-grid drp-chart-grid--2">
      <ChartCardWrapper title="Wave 6 columns">
        <WaveChartSVG
          dataBlue={[280, 160, 130, 250, 290, 240]}
          dataGreen={[]}
          labels={MONTHS_6}
          maxValue={500}
          height={200}
          smooth
          showTooltip
        />
      </ChartCardWrapper>
      <ChartCardWrapper title="Wave 6 columns">
        <WaveChartSVG
          dataBlue={[
            340, 280, 400, 360, 430, 370, 210, 310, 280, 440, 200, 300,
          ].slice(0, 6)}
          dataGreen={[]}
          labels={MONTHS_6}
          maxValue={500}
          height={200}
          smooth
          showTooltip
        />
      </ChartCardWrapper>
    </div>
  </ReportScreen>
);

// ─── Legacy / Compat Exports ──────────────────────────────────────────────────

export interface ChartContainerProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export const ChartContainer: React.FC<ChartContainerProps> = ({
  title,
  subtitle,
  children,
}) => (
  <div
    style={{ maxWidth: 1200, margin: "0 auto", padding: "var(--drp-space-6)" }}
  >
    <div style={{ marginBottom: "var(--drp-space-8)" }}>
      <h1 className="drp-h2">{title}</h1>
      {subtitle && (
        <p className="drp-caption" style={{ marginTop: "var(--drp-space-2)" }}>
          {subtitle}
        </p>
      )}
    </div>
    <div className="drp-chart-grid drp-chart-grid--2">{children}</div>
  </div>
);

export const ChartBarVariant: React.FC = () => <BarsScreen />;
export const ChartPolarVariant: React.FC = () => <PolarChartScreen />;
export const ChartWaveVariant: React.FC = () => <ChartWaveScreen />;
export const ChartGeometricVariant: React.FC = () => <ChartGeometricScreen />;
export const ChartHorizontalBarsVariant: React.FC = () => (
  <BarsHorizontalScreen />
);
export const ChartDoubleBarsVariant: React.FC = () => <DoubleBarsScreen />;
export const ChartMiscVariant: React.FC = () => <MiscScreen />;
