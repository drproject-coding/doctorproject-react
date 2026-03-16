import React, { useEffect, useRef, useState } from "react";
import { Icon } from "../../../components/Icon/Icon";
import { Tag } from "../../../components/Tag/Tag";
import { ProgressBar } from "../../../components/ProgressBar/ProgressBar";
import { Pagination } from "../../../components/Pagination/Pagination";
import { Input } from "../../../components/Input/Input";
import { ToolsTrackerSidebar, TTNavId } from "../shared/ToolsTrackerSidebar";
import { ToolsTrackerTopBar } from "../shared/ToolsTrackerTopBar";
import { ToolsTrackerFooter } from "../shared/ToolsTrackerFooter";

/* -------------------------------------------------------------------------- */
/* Types                                                                       */
/* -------------------------------------------------------------------------- */

type ProductStatus =
  | "activated"
  | "redeemed"
  | "not-redeemed"
  | "outdated"
  | "refunded";

export interface TTProduct {
  id: string;
  date: string;
  status: ProductStatus;
  thumbnail: string;
  name: string;
  subtitle: string;
  price: number;
  progressValue: number;
  isExpired?: boolean;
}

export interface TTSyncStatus {
  lastSynced: string;
  invoices: string;
  products: string;
}

export interface TTFinancialOverview {
  totalPurchases: number;
  totalSavings: number;
  totalRefunds: number;
  netSpent: number;
}

export interface ToolsTrackerDashboardProps {
  syncStatus?: TTSyncStatus;
  financialOverview?: TTFinancialOverview;
  products?: TTProduct[];
  currentPage?: number;
  totalPages?: number;
  activeNav?: TTNavId;
  onNavClick?: (id: TTNavId) => void;
  onSync?: () => void;
  onRunSync?: () => void;
  onClearCache?: () => void;
  onPageChange?: (page: number) => void;
}

/* -------------------------------------------------------------------------- */
/* Helpers                                                                     */
/* -------------------------------------------------------------------------- */

const STATUS_LABEL: Record<ProductStatus, string> = {
  activated: "Activated",
  redeemed: "Redeemed",
  "not-redeemed": "Not Redeemed",
  outdated: "Outdated",
  refunded: "Refunded",
};

const STATUS_COLOR: Record<
  ProductStatus,
  "mint" | "purple" | "grey" | "orange" | "pink"
> = {
  activated: "mint",
  redeemed: "purple",
  "not-redeemed": "grey",
  outdated: "orange",
  refunded: "pink",
};

const FILTER_TABS: { id: ProductStatus | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "activated", label: "Active" },
  { id: "not-redeemed", label: "Not Redeemed" },
  { id: "outdated", label: "Outdated" },
  { id: "refunded", label: "Refunded" },
];

/* -------------------------------------------------------------------------- */
/* Sample data                                                                 */
/* -------------------------------------------------------------------------- */

const SAMPLE_SYNC: TTSyncStatus = {
  lastSynced: "3d ago",
  invoices: "73",
  products: "334",
};

const SAMPLE_FINANCIAL: TTFinancialOverview = {
  totalPurchases: 12480,
  totalSavings: 3200,
  totalRefunds: 860,
  netSpent: 8420,
};

const SAMPLE_PRODUCTS: TTProduct[] = [
  {
    id: "1",
    date: "Mar 01, 2025",
    status: "activated",
    thumbnail: "https://placehold.co/56x56/e8f5e9/388e3c?text=TL",
    name: "TaskLinker Pro",
    subtitle: "Project management & automation",
    price: 79,
    progressValue: 80,
    isExpired: false,
  },
  {
    id: "2",
    date: "Feb 15, 2025",
    status: "redeemed",
    thumbnail: "https://placehold.co/56x56/ede7f6/6d28d9?text=SB",
    name: "SendBox Email",
    subtitle: "Cold outreach & drip campaigns",
    price: 49,
    progressValue: 60,
    isExpired: false,
  },
  {
    id: "3",
    date: "Jan 10, 2025",
    status: "not-redeemed",
    thumbnail: "https://placehold.co/56x56/f3f4f6/6b7280?text=VX",
    name: "VideoXpert",
    subtitle: "AI video editing suite",
    price: 129,
    progressValue: 0,
    isExpired: false,
  },
  {
    id: "4",
    date: "Dec 20, 2024",
    status: "outdated",
    thumbnail: "https://placehold.co/56x56/fff3e0/e65100?text=CF",
    name: "ContentForge",
    subtitle: "Blog & content automation",
    price: 59,
    progressValue: 40,
    isExpired: true,
  },
  {
    id: "5",
    date: "Nov 05, 2024",
    status: "refunded",
    thumbnail: "https://placehold.co/56x56/fce4ec/c2185b?text=PX",
    name: "PixelCraft",
    subtitle: "Design & asset generator",
    price: 99,
    progressValue: 0,
    isExpired: false,
  },
  {
    id: "6",
    date: "Oct 18, 2024",
    status: "activated",
    thumbnail: "https://placehold.co/56x56/e3f2fd/1565c0?text=AS",
    name: "AutoScribe",
    subtitle: "Transcription & note-taking",
    price: 69,
    progressValue: 90,
    isExpired: false,
  },
];

/* -------------------------------------------------------------------------- */
/* Sync Status Bar                                                             */
/* -------------------------------------------------------------------------- */

const SyncStatusBar: React.FC<{
  status: TTSyncStatus;
}> = ({ status }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "var(--drp-space-4)",
      padding: "var(--drp-space-2) var(--drp-space-6)",
      background: "var(--drp-bg-secondary, #f9fafb)",
      borderBottom: "var(--drp-border-thin)",
      fontSize: "var(--drp-text-xs)",
      color: "var(--drp-text-muted)",
      flexShrink: 0,
    }}
  >
    <span>
      Last synced:{" "}
      <strong style={{ color: "#f59e0b" }}>{status.lastSynced}</strong>
    </span>
    <span style={{ color: "var(--drp-border)" }}>|</span>
    <span>
      Invoices: <strong style={{ color: "#7c3aed" }}>{status.invoices}</strong>
    </span>
    <span style={{ color: "var(--drp-border)" }}>|</span>
    <span>
      Products: <strong style={{ color: "#16a34a" }}>{status.products}</strong>
    </span>
  </div>
);

/* -------------------------------------------------------------------------- */
/* Purchase Overview Chart (Chart.js)                                         */
/* -------------------------------------------------------------------------- */

const CHART_MONTHS = [
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
const CHART_BARS = [3, 7, 5, 9, 4, 11, 8, 6, 10, 5, 7, 9];
const CHART_LINE = [2, 4, 3, 6, 3, 8, 6, 5, 7, 4, 5, 7];

const PurchaseOverviewChart: React.FC = () => {
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
            labels: CHART_MONTHS,
            datasets: [
              {
                type: "bar" as const,
                label: "Purchases",
                data: CHART_BARS,
                backgroundColor: "#7c3aed",
                borderRadius: 4,
                yAxisID: "y",
              },
              {
                type: "line" as const,
                label: "Savings",
                data: CHART_LINE,
                borderColor: "#f59e0b",
                backgroundColor: "transparent",
                pointBackgroundColor: "#f59e0b",
                pointRadius: 4,
                tension: 0.3,
                yAxisID: "y1",
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
              y: {
                position: "left",
                grid: { color: "rgba(0,0,0,0.05)" },
                ticks: { font: { size: 11 } },
              },
              y1: {
                position: "right",
                grid: { drawOnChartArea: false },
                ticks: { font: { size: 11 } },
              },
              x: {
                grid: { display: false },
                ticks: { font: { size: 11 } },
              },
            },
          },
        });
      } catch {
        /* chart.js not available in SSR or test environments */
      }
    };

    init();

    return () => {
      if (
        chart &&
        typeof (chart as { destroy?: () => void }).destroy === "function"
      ) {
        (chart as { destroy: () => void }).destroy();
      }
    };
  }, []);

  return (
    <div
      className="drp-card"
      style={{ padding: "var(--drp-space-5)", flex: 1, minWidth: 0 }}
    >
      <div
        className="drp-flex drp-items-center"
        style={{
          marginBottom: "var(--drp-space-4)",
          justifyContent: "space-between",
        }}
      >
        <h3 className="drp-text drp-text--sm drp-text--bold">
          Purchase Overview
        </h3>
        <div className="drp-flex drp-items-center drp-gap-4">
          <span className="drp-flex drp-items-center drp-gap-1">
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: 2,
                background: "var(--drp-purple, #7c3aed)",
                display: "inline-block",
              }}
            />
            <span className="drp-text drp-text--xs drp-text--muted">
              Purchases
            </span>
          </span>
          <span className="drp-flex drp-items-center drp-gap-1">
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "var(--drp-warning, #f59e0b)",
                display: "inline-block",
              }}
            />
            <span className="drp-text drp-text--xs drp-text--muted">
              Savings
            </span>
          </span>
        </div>
      </div>
      <div style={{ height: 200 }}>
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* Financial Overview                                                          */
/* -------------------------------------------------------------------------- */

const FinancialOverview: React.FC<{ data: TTFinancialOverview }> = ({
  data,
}) => {
  const stats = [
    {
      label: "Total Purchases",
      value: `$${data.totalPurchases.toLocaleString()}`,
      color: "var(--drp-text)",
    },
    {
      label: "Total Savings",
      value: `$${data.totalSavings.toLocaleString()}`,
      color: "var(--drp-success, #16a34a)",
    },
    {
      label: "Total Refunds",
      value: `$${data.totalRefunds.toLocaleString()}`,
      color: "var(--drp-purple, #7c3aed)",
    },
    {
      label: "Net Spent",
      value: `$${data.netSpent.toLocaleString()}`,
      color: "var(--drp-warning, #f59e0b)",
    },
  ];

  return (
    <div
      className="drp-card"
      style={{
        padding: "var(--drp-space-5)",
        minWidth: 220,
        display: "flex",
        flexDirection: "column",
        gap: "var(--drp-space-4)",
      }}
    >
      <h3 className="drp-text drp-text--sm drp-text--bold">
        Financial Overview
      </h3>
      {stats.map((s) => (
        <div key={s.label}>
          <p
            className="drp-text drp-text--xs drp-text--muted"
            style={{ marginBottom: 2 }}
          >
            {s.label}
          </p>
          <p
            className="drp-text drp-text--lg drp-text--bold"
            style={{ color: s.color }}
          >
            {s.value}
          </p>
        </div>
      ))}
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* Product Card                                                                */
/* -------------------------------------------------------------------------- */

const ProductCard: React.FC<{ product: TTProduct }> = ({ product }) => (
  <div
    className="drp-card"
    style={{
      padding: "var(--drp-space-4)",
      display: "flex",
      gap: "var(--drp-space-3)",
      alignItems: "flex-start",
    }}
  >
    {/* Thumbnail */}
    <img
      src={product.thumbnail}
      alt={product.name}
      width={56}
      height={56}
      style={{
        borderRadius: "var(--drp-radius)",
        flexShrink: 0,
        objectFit: "cover",
      }}
    />

    {/* Body */}
    <div style={{ flex: 1, minWidth: 0 }}>
      <div
        className="drp-flex drp-items-center drp-gap-2"
        style={{ marginBottom: "var(--drp-space-1)", flexWrap: "wrap" }}
      >
        <span className="drp-text drp-text--xs drp-text--muted">
          {product.date}
        </span>
        <Tag color={STATUS_COLOR[product.status]}>
          {STATUS_LABEL[product.status]}
        </Tag>
        {product.isExpired && <Tag color="grey">Expired</Tag>}
      </div>

      <p
        className="drp-text drp-text--sm drp-text--bold"
        style={{ marginBottom: 2 }}
      >
        {product.name}
      </p>
      <p
        className="drp-text drp-text--xs drp-text--muted"
        style={{ marginBottom: "var(--drp-space-2)" }}
      >
        {product.subtitle}
      </p>

      <ProgressBar
        value={product.progressValue}
        color={
          product.status === "activated"
            ? "mint"
            : product.status === "refunded"
              ? "pink"
              : "grey"
        }
      />
    </div>

    {/* Price + actions */}
    <div
      style={{
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "var(--drp-space-2)",
      }}
    >
      <span className="drp-text drp-text--sm drp-text--bold">
        ${product.price}
      </span>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <button
          aria-label="View product"
          style={{
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
        >
          <Icon name="eye" size="sm" bg="var(--drp-purple-20)" />
        </button>
        <button
          aria-label="Edit product"
          style={{
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
        >
          <Icon name="edit" size="sm" bg="var(--drp-yellow)" />
        </button>
      </div>
    </div>
  </div>
);

/* -------------------------------------------------------------------------- */
/* Main Dashboard                                                              */
/* -------------------------------------------------------------------------- */

export const ToolsTrackerDashboard: React.FC<ToolsTrackerDashboardProps> = ({
  syncStatus = SAMPLE_SYNC,
  financialOverview = SAMPLE_FINANCIAL,
  products = SAMPLE_PRODUCTS,
  currentPage = 1,
  totalPages = 4,
  activeNav = "dashboard",
  onNavClick,
  onSync,
  onClearCache,
  onPageChange,
}) => {
  const [activeFilter, setActiveFilter] = useState<ProductStatus | "all">(
    "all",
  );
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const filtered = products.filter((p) => {
    const matchesFilter = activeFilter === "all" || p.status === activeFilter;
    const matchesSearch =
      !search ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="app-layout" data-theme={theme}>
      <ToolsTrackerSidebar
        activeId={activeNav}
        onNavClick={onNavClick}
        onClearCache={onClearCache}
      />

      <div
        className="main-content"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <ToolsTrackerTopBar
          onSyncClick={onSync}
          theme={theme}
          onThemeToggle={() =>
            setTheme((t) => (t === "light" ? "dark" : "light"))
          }
        />

        <SyncStatusBar status={syncStatus} />

        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "var(--drp-space-6)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--drp-space-6)",
          }}
        >
          {/* Charts row */}
          <div className="drp-flex drp-gap-5" style={{ alignItems: "stretch" }}>
            <PurchaseOverviewChart />
            <FinancialOverview data={financialOverview} />
          </div>

          {/* Product list */}
          <div>
            {/* Toolbar */}
            <div
              className="drp-flex drp-gap-3"
              style={{
                marginBottom: "var(--drp-space-4)",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <div style={{ flex: 1, minWidth: 200 }}>
                <Input
                  placeholder="Search products…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className="drp-flex drp-gap-1">
                {FILTER_TABS.map((tab) => (
                  <button
                    key={tab.id}
                    className={`drp-btn drp-btn--sm ${
                      activeFilter === tab.id
                        ? "drp-btn--primary"
                        : "drp-btn--ghost"
                    }`}
                    onClick={() =>
                      setActiveFilter(tab.id as ProductStatus | "all")
                    }
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Cards */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--drp-space-3)",
              }}
            >
              {filtered.length === 0 ? (
                <p
                  className="drp-text drp-text--sm drp-text--muted"
                  style={{ textAlign: "center", padding: "var(--drp-space-8)" }}
                >
                  No products found.
                </p>
              ) : (
                filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              )}
            </div>

            {/* Pagination */}
            <div
              style={{
                marginTop: "var(--drp-space-5)",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange ?? (() => {})}
              />
            </div>
          </div>
        </div>

        <ToolsTrackerFooter />
      </div>
    </div>
  );
};
