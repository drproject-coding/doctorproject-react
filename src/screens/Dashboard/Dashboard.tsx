import { useState } from "react";
import { Card, CardHeader } from "../../components/Card";
import { Button } from "../../components/Button";
import { Badge } from "../../components/Badge";
import { Tag } from "../../components/Tag";
import { Input } from "../../components/Input";
import { ProgressBar } from "../../components/ProgressBar";
import { Avatar } from "../../components/Avatar";
import { Alert } from "../../components/Alert";
import { ResponsiveGrid } from "../../components/ResponsiveGrid/ResponsiveGrid";
import { EmptyState } from "../../components/EmptyState";
import { AppSidebar } from "../shared/AppSidebar";
import { AppTopBar } from "../shared/AppTopBar";
import { AppFooter } from "../shared/AppFooter";

// ─── Types ────────────────────────────────────────────────────────────────────

type ProductStatus = "activated" | "redeemed" | "outdated" | "refunded";

interface Product {
  id: string;
  date: string;
  name: string;
  subtitle: string;
  price: string;
  status: ProductStatus;
  tags?: string[];
}

// ─── Mock Data ────────────────────────────────────────────────────────────────
const PRODUCTS: Product[] = [
  {
    id: "1",
    date: "NOV 23, 2022",
    name: "TidyCal",
    subtitle: "License Tier 1 (x2)",
    price: "$98.00",
    status: "activated",
    tags: ["AppSumo", "Review"],
  },
  {
    id: "2",
    date: "NOV 23, 2022",
    name: "Design Flywheel – Zero to One in UI/UX design",
    subtitle: "Digital Download",
    price: "$49.00",
    status: "redeemed",
  },
  {
    id: "3",
    date: "NOV 23, 2022",
    name: "100+ E-Commerce Packing Mockup Templates",
    subtitle: "Digital Download",
    price: "$49.00",
    status: "redeemed",
  },
  {
    id: "4",
    date: "NOV 23, 2022",
    name: "100+ E-Commerce 3D Illustration",
    subtitle: "Digital Download",
    price: "$49.00",
    status: "redeemed",
  },
  {
    id: "5",
    date: "NOV 23, 2022",
    name: "Uteach",
    subtitle: "License Tier 3 (x3)",
    price: "$147.00",
    status: "activated",
    tags: ["AppSumo", "Review"],
  },
  {
    id: "6",
    date: "NOV 23, 2022",
    name: "Noota",
    subtitle: "License Tier 3 (x3)",
    price: "$596.00",
    status: "activated",
    tags: ["AppSumo", "Review"],
  },
];

// ─── Mini bar-chart (inline SVG) ─────────────────────────────────────────────

const MONTHS = [
  "Nov",
  "Jan",
  "Mar",
  "Apr",
  "Jun",
  "Jul",
  "Sep",
  "Oct",
  "Dec",
  "Jan",
  "Feb",
];
const BARS = [8, 4, 6, 10, 5, 7, 14, 9, 12, 18, 28, 22];

function PurchaseChart() {
  const max = Math.max(...BARS);
  const w = 420;
  const h = 160;
  const pad = { top: 10, right: 10, bottom: 24, left: 28 };
  const barW = (w - pad.left - pad.right) / BARS.length - 4;

  return (
    <svg width="100%" viewBox={`0 0 ${w} ${h}`} style={{ overflow: "visible" }}>
      {/* Grid lines */}
      {[0, 0.25, 0.5, 0.75, 1].map((t, i) => {
        const y = pad.top + (1 - t) * (h - pad.top - pad.bottom);
        return (
          <g key={i}>
            <line
              x1={pad.left}
              y1={y}
              x2={w - pad.right}
              y2={y}
              stroke="#e5e7eb"
              strokeWidth={0.5}
            />
            <text
              x={pad.left - 4}
              y={y + 4}
              textAnchor="end"
              fontSize={8}
              fill="#9ca3af"
            >
              {Math.round(t * max * 4)}
            </text>
          </g>
        );
      })}
      {/* Bars */}
      {BARS.map((v, i) => {
        const x = pad.left + i * ((w - pad.left - pad.right) / BARS.length);
        const bh = (v / max) * (h - pad.top - pad.bottom);
        const y = pad.top + (h - pad.top - pad.bottom) - bh;
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={barW}
            height={bh}
            fill="var(--drp-purple)"
            rx={2}
            opacity={0.85}
          />
        );
      })}
      {/* Line overlay */}
      <polyline
        points={BARS.map((v, i) => {
          const x =
            pad.left +
            i * ((w - pad.left - pad.right) / BARS.length) +
            barW / 2;
          const y = pad.top + (1 - v / max) * (h - pad.top - pad.bottom);
          return `${x},${y}`;
        }).join(" ")}
        fill="none"
        stroke="#f59e0b"
        strokeWidth={1.5}
      />
      {/* Month labels */}
      {MONTHS.map((m, i) => {
        const x =
          pad.left + i * ((w - pad.left - pad.right) / BARS.length) + barW / 2;
        return (
          <text
            key={i}
            x={x}
            y={h - 4}
            textAnchor="middle"
            fontSize={7}
            fill="#9ca3af"
          >
            {m}
          </text>
        );
      })}
    </svg>
  );
}

// ─── Status badge ─────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: ProductStatus }) {
  const map: Record<
    ProductStatus,
    { label: string; variant: "mint" | "primary" | "secondary" | "pink" }
  > = {
    activated: { label: "ACTIVATED", variant: "mint" },
    redeemed: { label: "REDEEMED", variant: "primary" },
    outdated: { label: "OUTDATED", variant: "secondary" },
    refunded: { label: "REFUNDED", variant: "pink" },
  };
  const { label, variant } = map[status];
  return <Badge variant={variant}>{label}</Badge>;
}

// ─── Dashboard ────────────────────────────────────────────────────────────────

const FILTERS = [
  "All",
  "Active",
  "Not Redeemed",
  "Outdated",
  "Refunded",
] as const;
type Filter = (typeof FILTERS)[number];

export function Dashboard() {
  const [filter, setFilter] = useState<Filter>("All");
  const [search, setSearch] = useState("");

  const filtered = PRODUCTS.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchFilter =
      filter === "All" ||
      (filter === "Active" && p.status === "activated") ||
      (filter === "Not Redeemed" && p.status === "redeemed") ||
      (filter === "Outdated" && p.status === "outdated") ||
      (filter === "Refunded" && p.status === "refunded");
    return matchSearch && matchFilter;
  });

  return (
    <div className="app-layout" style={{ height: "100vh", overflow: "hidden" }}>
      <AppSidebar activeId="dashboard" />

      <div className="main-content" style={{ overflow: "hidden" }}>
        <AppTopBar title="Dashboard" />

        {/* Content */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: 20,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {/* Sync status bar */}
          <Card style={{ padding: "10px 16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <span style={{ fontSize: 13, color: "#6b7280" }}>
                Last synced <strong style={{ color: "#ef4444" }}>2d ago</strong>
              </span>
              <span style={{ color: "#d1d5db" }}>|</span>
              <span style={{ fontSize: 13, color: "#6b7280" }}>Invoices ↓</span>
              <span style={{ color: "#d1d5db" }}>|</span>
              <span style={{ fontSize: 13, color: "#6b7280" }}>Products ↓</span>
              <div style={{ flex: 1 }} />
              <Button size="sm" variant="outline">
                Sync Now
              </Button>
            </div>
          </Card>

          {/* Charts row */}
          <ResponsiveGrid cols={2} colsSm={1} gap="16px">
            {/* Purchase Overview */}
            <Card>
              <CardHeader
                title="Purchase Overview"
                subtitle="Monthly purchases vs refunds"
              />
              <div style={{ padding: "0 16px 4px", display: "flex", gap: 12 }}>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    fontSize: 11,
                    color: "#6b7280",
                  }}
                >
                  <span
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 2,
                      background: "var(--drp-purple)",
                      display: "inline-block",
                    }}
                  />
                  Purchases
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    fontSize: 11,
                    color: "#6b7280",
                  }}
                >
                  <span
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 2,
                      background: "#f59e0b",
                      display: "inline-block",
                    }}
                  />
                  Refunds
                </span>
              </div>
              <div style={{ padding: "0 16px 12px" }}>
                <PurchaseChart />
              </div>
            </Card>

            {/* Financial Overview */}
            <Card>
              <CardHeader title="Financial Overview" subtitle="Full Report →" />
              <div
                style={{
                  padding: "8px 20px 20px",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "#9ca3af",
                      fontWeight: 600,
                      letterSpacing: 0.5,
                      textTransform: "uppercase",
                    }}
                  >
                    Total Purchases
                  </div>
                  <div
                    style={{
                      fontSize: 22,
                      fontWeight: 800,
                      color: "#111",
                      marginTop: 4,
                    }}
                  >
                    $44,228.85
                  </div>
                  <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 2 }}>
                    Original price before discounts
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "#10b981",
                      fontWeight: 700,
                      letterSpacing: 0.5,
                      textTransform: "uppercase",
                    }}
                  >
                    Savings
                  </div>
                  <div
                    style={{
                      fontSize: 22,
                      fontWeight: 800,
                      color: "#10b981",
                      marginTop: 4,
                    }}
                  >
                    $5,532.11
                  </div>
                  <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 2 }}>
                    Coupons & plan discounts
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "var(--drp-purple)",
                      fontWeight: 700,
                      letterSpacing: 0.5,
                      textTransform: "uppercase",
                    }}
                  >
                    Refunds
                  </div>
                  <div
                    style={{
                      fontSize: 22,
                      fontWeight: 800,
                      color: "var(--drp-purple)",
                      marginTop: 4,
                    }}
                  >
                    $2,828.43
                  </div>
                  <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 2 }}>
                    Money returned
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "#06b6d4",
                      fontWeight: 700,
                      letterSpacing: 0.5,
                      textTransform: "uppercase",
                    }}
                  >
                    Net Spent
                  </div>
                  <div
                    style={{
                      fontSize: 22,
                      fontWeight: 800,
                      color: "#06b6d4",
                      marginTop: 4,
                    }}
                  >
                    $34,177.66
                  </div>
                  <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 2 }}>
                    Charged minus refunds
                  </div>
                </div>
              </div>
            </Card>
          </ResponsiveGrid>

          {/* Search + Filter */}
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <Input
              name="search"
              autoComplete="off"
              placeholder="Search products by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ flex: 1, maxWidth: 480 }}
            />
            <div style={{ display: "flex", gap: 4 }}>
              {FILTERS.map((f) => (
                <Button
                  key={f}
                  size="sm"
                  variant={filter === f ? "primary" : "outline"}
                  onClick={() => setFilter(f)}
                >
                  {f}
                </Button>
              ))}
            </div>
          </div>

          {/* Product list */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {filtered.length === 0 && (
              <EmptyState
                title="No products found"
                description={
                  search
                    ? `No results for "${search}"`
                    : "No products match the selected filter."
                }
              />
            )}
            {filtered.map((product) => (
              <Card key={product.id} style={{ padding: "14px 18px" }}>
                <div
                  style={{ display: "flex", alignItems: "flex-start", gap: 12 }}
                >
                  {/* Product icon placeholder */}
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      background: "#f3f4f6",
                      borderRadius: 8,
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 20,
                    }}
                  >
                    📦
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    {/* Top row: date + badge */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 4,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 11,
                          color: "#9ca3af",
                          fontWeight: 500,
                        }}
                      >
                        {product.date}
                      </span>
                      <StatusBadge status={product.status} />
                    </div>

                    {/* Name + price */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 8,
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontSize: 14,
                            fontWeight: 600,
                            color: "#111",
                          }}
                        >
                          {product.name}
                        </div>
                        <div style={{ fontSize: 12, color: "#9ca3af" }}>
                          {product.subtitle}
                        </div>
                      </div>
                      <div
                        style={{
                          fontSize: 14,
                          fontWeight: 700,
                          color: "#111",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {product.price}
                      </div>
                    </div>

                    {/* Progress bar (expired) */}
                    <div style={{ margin: "8px 0 2px" }}>
                      <ProgressBar value={0} />
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "#9ca3af",
                        textAlign: "right",
                      }}
                    >
                      Expired
                    </div>

                    {/* Tags */}
                    {product.tags && product.tags.length > 0 && (
                      <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
                        {product.tags.map((tag) => (
                          <Tag key={tag}>{tag}</Tag>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <AppFooter />
      </div>
    </div>
  );
}
