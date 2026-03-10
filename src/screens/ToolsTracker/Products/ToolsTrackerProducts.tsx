import React, { useState, useMemo } from "react";
import { ToolsTrackerSidebar } from "../shared/ToolsTrackerSidebar";
import { ToolsTrackerFooter } from "../shared/ToolsTrackerFooter";
import { TopBar } from "../../../components/TopBar/TopBar";
import { Pagination } from "../../../components/Pagination";

/* -------------------------------------------------------------------------- */
/* Types & Data                                                                */
/* -------------------------------------------------------------------------- */

type ProductStatus =
  | "active"
  | "urgent"
  | "soon"
  | "safe"
  | "expired"
  | "refunded";
type ProductFilter =
  | "all"
  | "favorites"
  | "urgent"
  | "soon"
  | "safe"
  | "expired"
  | "refunded";
type ProductType =
  | "Code-based"
  | "License Tier 1"
  | "License Tier 2"
  | "License Tier 3"
  | "Digital Download"
  | "Lifetime Deal";

interface TProduct {
  id: string;
  name: string;
  initials: string;
  color: string;
  purchaseDate: string;
  type: ProductType;
  status: ProductStatus;
  daysLeft?: number;
  favorite?: boolean;
  vendor: string;
}

const PRODUCTS: TProduct[] = [
  {
    id: "1",
    name: "Resoume",
    initials: "RS",
    color: "#7c3aed",
    purchaseDate: "Nov 23, 2022",
    type: "Code-based",
    status: "expired",
    vendor: "appsumo",
  },
  {
    id: "2",
    name: "AppSumo's Google Sheets Template Pack",
    initials: "GS",
    color: "#10b981",
    purchaseDate: "Nov 23, 2022",
    type: "Code-based",
    status: "expired",
    vendor: "appsumo",
  },
  {
    id: "3",
    name: "Graphue Presentation Templates",
    initials: "GP",
    color: "#f59e0b",
    purchaseDate: "Nov 23, 2022",
    type: "Code-based",
    status: "expired",
    vendor: "appsumo",
  },
  {
    id: "4",
    name: "nichesss",
    initials: "NC",
    color: "#3b82f6",
    purchaseDate: "Nov 23, 2022",
    type: "Code-based",
    status: "expired",
    vendor: "appsumo",
  },
  {
    id: "5",
    name: "TidyCal",
    initials: "TC",
    color: "#6366f1",
    purchaseDate: "Nov 23, 2022",
    type: "License Tier 1",
    status: "expired",
    vendor: "appsumo",
    favorite: true,
  },
  {
    id: "6",
    name: "Design Flywheel — Zero to One in UI/UX design",
    initials: "DF",
    color: "#ec4899",
    purchaseDate: "Nov 23, 2022",
    type: "Digital Download",
    status: "expired",
    vendor: "appsumo",
  },
  {
    id: "7",
    name: "100+ E-Commerce Packing Mockup Templates",
    initials: "EC",
    color: "#14b8a6",
    purchaseDate: "Nov 23, 2022",
    type: "Digital Download",
    status: "expired",
    vendor: "appsumo",
  },
  {
    id: "8",
    name: "100+ E-commerce 3D illustration",
    initials: "3D",
    color: "#f97316",
    purchaseDate: "Nov 23, 2022",
    type: "Digital Download",
    status: "expired",
    vendor: "appsumo",
  },
  {
    id: "9",
    name: "Taskade",
    initials: "TK",
    color: "#2c3e50",
    purchaseDate: "Dec 5, 2022",
    type: "License Tier 2",
    status: "active",
    vendor: "appsumo",
    favorite: true,
  },
  {
    id: "10",
    name: "VectorGrove",
    initials: "VG",
    color: "#2ecc71",
    purchaseDate: "Dec 8, 2022",
    type: "Code-based",
    status: "active",
    vendor: "appsumo",
    favorite: true,
  },
  {
    id: "11",
    name: "Loomly",
    initials: "LO",
    color: "#f39c12",
    purchaseDate: "Dec 12, 2022",
    type: "License Tier 1",
    status: "active",
    vendor: "appsumo",
  },
  {
    id: "12",
    name: "Pabbly Connect",
    initials: "PC",
    color: "#7c3aed",
    purchaseDate: "Jan 3, 2023",
    type: "License Tier 3",
    status: "active",
    vendor: "appsumo",
  },
  {
    id: "13",
    name: "RocketReach",
    initials: "RR",
    color: "#e74c3c",
    purchaseDate: "Jan 15, 2023",
    type: "License Tier 2",
    status: "active",
    vendor: "appsumo",
  },
  {
    id: "14",
    name: "Creaitor.ai",
    initials: "CA",
    color: "#1a1a2e",
    purchaseDate: "Feb 2, 2023",
    type: "License Tier 1",
    status: "active",
    vendor: "appsumo",
  },
  {
    id: "15",
    name: "Eurekaa.io",
    initials: "EU",
    color: "#3498db",
    purchaseDate: "Feb 14, 2023",
    type: "Lifetime Deal",
    status: "soon",
    daysLeft: 18,
    vendor: "appsumo",
  },
  {
    id: "16",
    name: "Writecream",
    initials: "WC",
    color: "#8e44ad",
    purchaseDate: "Feb 20, 2023",
    type: "License Tier 2",
    status: "active",
    vendor: "appsumo",
  },
  {
    id: "17",
    name: "Durable",
    initials: "DU",
    color: "#2980b9",
    purchaseDate: "Mar 3, 2023",
    type: "Lifetime Deal",
    status: "safe",
    daysLeft: 45,
    vendor: "appsumo",
  },
  {
    id: "18",
    name: "Hexomatic",
    initials: "HX",
    color: "#27ae60",
    purchaseDate: "Mar 10, 2023",
    type: "License Tier 2",
    status: "active",
    vendor: "appsumo",
    favorite: true,
  },
  {
    id: "19",
    name: "SendFox",
    initials: "SF",
    color: "#c0392b",
    purchaseDate: "Mar 22, 2023",
    type: "License Tier 1",
    status: "active",
    vendor: "appsumo",
  },
  {
    id: "20",
    name: "Appflowy",
    initials: "AF",
    color: "#2c3e50",
    purchaseDate: "Apr 1, 2023",
    type: "Code-based",
    status: "active",
    vendor: "manual",
  },
  {
    id: "21",
    name: "SocialBee",
    initials: "SB",
    color: "#f1c40f",
    purchaseDate: "Apr 8, 2023",
    type: "License Tier 3",
    status: "soon",
    daysLeft: 12,
    vendor: "appsumo",
  },
  {
    id: "22",
    name: "Landbot",
    initials: "LB",
    color: "#1abc9c",
    purchaseDate: "Apr 15, 2023",
    type: "Lifetime Deal",
    status: "active",
    vendor: "appsumo",
  },
  {
    id: "23",
    name: "Hoppy Copy",
    initials: "HC",
    color: "#e91e63",
    purchaseDate: "Apr 22, 2023",
    type: "License Tier 1",
    status: "refunded",
    vendor: "appsumo",
  },
  {
    id: "24",
    name: "Scalenut",
    initials: "SN",
    color: "#ff5722",
    purchaseDate: "May 5, 2023",
    type: "License Tier 2",
    status: "active",
    vendor: "appsumo",
  },
  {
    id: "25",
    name: "Zendo",
    initials: "ZE",
    color: "#673ab7",
    purchaseDate: "May 12, 2023",
    type: "Lifetime Deal",
    status: "safe",
    daysLeft: 62,
    vendor: "appsumo",
  },
  {
    id: "26",
    name: "Taplio",
    initials: "TP",
    color: "#ff9800",
    purchaseDate: "May 19, 2023",
    type: "License Tier 1",
    status: "soon",
    daysLeft: 9,
    vendor: "appsumo",
  },
  {
    id: "27",
    name: "InVideo",
    initials: "IV",
    color: "#00bcd4",
    purchaseDate: "Jun 2, 2023",
    type: "License Tier 2",
    status: "active",
    vendor: "appsumo",
  },
  {
    id: "28",
    name: "Reoon Email Verifier",
    initials: "RE",
    color: "#4caf50",
    purchaseDate: "Jun 14, 2023",
    type: "Lifetime Deal",
    status: "safe",
    daysLeft: 38,
    vendor: "appsumo",
  },
  {
    id: "29",
    name: "Animaker",
    initials: "AN",
    color: "#ff4081",
    purchaseDate: "Jun 20, 2023",
    type: "License Tier 3",
    status: "refunded",
    vendor: "appsumo",
  },
  {
    id: "30",
    name: "Publer",
    initials: "PB",
    color: "#795548",
    purchaseDate: "Jul 3, 2023",
    type: "License Tier 1",
    status: "active",
    vendor: "appsumo",
  },
  {
    id: "31",
    name: "Tidio",
    initials: "TI",
    color: "#009688",
    purchaseDate: "Jul 10, 2023",
    type: "License Tier 2",
    status: "active",
    vendor: "appsumo",
    favorite: true,
  },
  {
    id: "32",
    name: "Pallyy",
    initials: "PA",
    color: "#e040fb",
    purchaseDate: "Jul 18, 2023",
    type: "Lifetime Deal",
    status: "active",
    vendor: "appsumo",
  },
  {
    id: "33",
    name: "Audiogram",
    initials: "AU",
    color: "#3f51b5",
    purchaseDate: "Aug 1, 2023",
    type: "License Tier 1",
    status: "soon",
    daysLeft: 22,
    vendor: "appsumo",
  },
  {
    id: "34",
    name: "Flodesk",
    initials: "FL",
    color: "#e53935",
    purchaseDate: "Aug 9, 2023",
    type: "License Tier 3",
    status: "active",
    vendor: "appsumo",
  },
  {
    id: "35",
    name: "Crisp",
    initials: "CR",
    color: "#1565c0",
    purchaseDate: "Aug 20, 2023",
    type: "License Tier 2",
    status: "active",
    vendor: "appsumo",
  },
  {
    id: "36",
    name: "Involve.me",
    initials: "IM",
    color: "#00897b",
    purchaseDate: "Sep 4, 2023",
    type: "Lifetime Deal",
    status: "urgent",
    daysLeft: 4,
    vendor: "appsumo",
  },
  {
    id: "37",
    name: "Frizbit",
    initials: "FR",
    color: "#e74c3c",
    purchaseDate: "Sep 11, 2023",
    type: "License Tier 1",
    status: "active",
    vendor: "appsumo",
  },
  {
    id: "38",
    name: "Hexact",
    initials: "HE",
    color: "#ff6f00",
    purchaseDate: "Sep 22, 2023",
    type: "License Tier 2",
    status: "active",
    vendor: "appsumo",
  },
  {
    id: "39",
    name: "Mango DSP",
    initials: "MD",
    color: "#f39c12",
    purchaseDate: "Oct 3, 2023",
    type: "License Tier 1",
    status: "refunded",
    vendor: "appsumo",
  },
  {
    id: "40",
    name: "AgencyHandy",
    initials: "AH",
    color: "#7c3aed",
    purchaseDate: "Oct 15, 2023",
    type: "Lifetime Deal",
    status: "safe",
    daysLeft: 55,
    vendor: "appsumo",
  },
];

const STATS = [
  {
    key: "total",
    label: "Total Bought",
    value: 334,
    color: "var(--drp-black)",
  },
  { key: "active", label: "Active", value: 285, color: "#10b981" },
  { key: "urgent", label: "Urgent < 7d", value: 1, color: "#ef4444" },
  { key: "soon", label: "Soon 7–30d", value: 6, color: "#f59e0b" },
  { key: "safe", label: "Safe > 30d", value: 9, color: "#10b981" },
  { key: "expired", label: "Expired", value: 269, color: "var(--drp-grey)" },
  { key: "refunded", label: "Refunded", value: 49, color: "var(--drp-black)" },
];

const FILTERS: { key: ProductFilter; label: string }[] = [
  { key: "favorites", label: "★ Favorites" },
  { key: "all", label: "All Products" },
  { key: "urgent", label: "Urgent" },
  { key: "soon", label: "Soon" },
  { key: "safe", label: "Safe" },
  { key: "expired", label: "Expired" },
  { key: "refunded", label: "Refunded" },
];

const ITEMS_PER_PAGE = 10;

const STATUS_CONFIG: Record<
  ProductStatus,
  { label: string; bg: string; color: string }
> = {
  active: { label: "ACTIVE", bg: "#dcfce7", color: "#15803d" },
  urgent: { label: "URGENT", bg: "#fee2e2", color: "#dc2626" },
  soon: { label: "SOON", bg: "#fef9c3", color: "#b45309" },
  safe: { label: "SAFE", bg: "#d1fae5", color: "#059669" },
  expired: { label: "EXPIRED", bg: "#f3f4f6", color: "#6b7280" },
  refunded: { label: "REFUNDED", bg: "#ede9fe", color: "#7c3aed" },
};

const TYPE_COLORS: Record<ProductType, string> = {
  "Code-based": "#6366f1",
  "License Tier 1": "#7c3aed",
  "License Tier 2": "#8b5cf6",
  "License Tier 3": "#a78bfa",
  "Digital Download": "#0ea5e9",
  "Lifetime Deal": "#10b981",
};

/* -------------------------------------------------------------------------- */
/* Sub-components                                                              */
/* -------------------------------------------------------------------------- */

const ProductAvatar: React.FC<{ initials: string; color: string }> = ({
  initials,
  color,
}) => (
  <div
    style={{
      width: 38,
      height: 38,
      borderRadius: "50%",
      background: color,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontWeight: 700,
      fontSize: "0.7rem",
      flexShrink: 0,
      fontFamily: "var(--drp-font-primary)",
      letterSpacing: "0.02em",
    }}
  >
    {initials}
  </div>
);

const StatusBadge: React.FC<{ status: ProductStatus; daysLeft?: number }> = ({
  status,
  daysLeft,
}) => {
  const cfg = STATUS_CONFIG[status];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        padding: "3px 8px",
        background: cfg.bg,
        color: cfg.color,
        fontSize: "0.6rem",
        fontWeight: 700,
        fontFamily: "var(--drp-font-primary)",
        letterSpacing: "0.08em",
        flexShrink: 0,
        border: `1px solid ${cfg.color}22`,
      }}
    >
      {cfg.label}
      {daysLeft !== undefined && (
        <span style={{ opacity: 0.8 }}>· {daysLeft}d</span>
      )}
    </span>
  );
};

const TypeTag: React.FC<{ type: ProductType }> = ({ type }) => (
  <span
    style={{
      display: "inline-block",
      padding: "1px 6px",
      background: TYPE_COLORS[type] + "18",
      color: TYPE_COLORS[type],
      fontSize: "0.6rem",
      fontWeight: 600,
      fontFamily: "var(--drp-font-primary)",
      letterSpacing: "0.04em",
      border: `1px solid ${TYPE_COLORS[type]}33`,
      flexShrink: 0,
    }}
  >
    {type}
  </span>
);

const ProductRow: React.FC<{ product: TProduct }> = ({ product: p }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      padding: "var(--drp-space-3) var(--drp-space-4)",
      borderBottom: "var(--drp-border)",
      gap: "var(--drp-space-3)",
    }}
  >
    <ProductAvatar initials={p.initials} color={p.color} />

    <div style={{ flex: 1, minWidth: 0 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--drp-space-2)",
          marginBottom: 3,
        }}
      >
        {p.favorite && (
          <span
            style={{ color: "#f59e0b", fontSize: "0.75rem", flexShrink: 0 }}
          >
            ★
          </span>
        )}
        <p
          className="drp-text drp-text--sm drp-text--bold"
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {p.name}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--drp-space-2)",
        }}
      >
        <span className="drp-text drp-text--xs drp-text--muted">
          Purchased {p.purchaseDate} · {p.vendor}
        </span>
        <TypeTag type={p.type} />
      </div>
    </div>

    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--drp-space-2)",
        flexShrink: 0,
      }}
    >
      <StatusBadge status={p.status} daysLeft={p.daysLeft} />
      <button
        className="drp-btn drp-btn--outline drp-btn--sm"
        style={{ fontSize: "0.7rem", padding: "3px 10px" }}
      >
        Invoice
      </button>
    </div>
  </div>
);

/* -------------------------------------------------------------------------- */
/* Main component                                                              */
/* -------------------------------------------------------------------------- */

export interface ToolsTrackerProductsProps {
  defaultFilter?: ProductFilter;
}

export const ToolsTrackerProducts: React.FC<ToolsTrackerProductsProps> = ({
  defaultFilter = "all",
}) => {
  const [filter, setFilter] = useState<ProductFilter>(defaultFilter);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (filter === "favorites" && !p.favorite) return false;
      if (filter !== "all" && filter !== "favorites" && p.status !== filter)
        return false;
      if (
        search &&
        !p.name.toLowerCase().includes(search.toLowerCase()) &&
        !p.type.toLowerCase().includes(search.toLowerCase())
      )
        return false;
      return true;
    });
  }, [filter, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const paged = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handleFilter = (f: ProductFilter) => {
    setFilter(f);
    setPage(1);
  };
  const handleSearch = (v: string) => {
    setSearch(v);
    setPage(1);
  };

  return (
    <div
      className={`drp-app-shell${theme === "dark" ? " drp-theme--dark" : ""}`}
      style={{ display: "flex", height: "100vh", overflow: "hidden" }}
    >
      <ToolsTrackerSidebar activeId="products" />

      <div
        className="main-content"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <TopBar
          title="Products"
          actions={
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--drp-space-2)",
              }}
            >
              <button
                className="drp-btn drp-btn--ghost drp-btn--sm"
                onClick={() =>
                  setTheme((t) => (t === "light" ? "dark" : "light"))
                }
                aria-label="Toggle theme"
                style={{ fontSize: 16, lineHeight: 1 }}
              >
                {theme === "light" ? "🌙" : "☀️"}
              </button>
              <button
                className="drp-btn drp-btn--ghost drp-btn--sm"
                aria-label="Refresh"
                style={{ fontSize: 18 }}
              >
                ↻
              </button>
              <button
                className="drp-btn drp-btn--ghost drp-btn--sm"
                aria-label="Add product"
                style={{ fontSize: 18 }}
              >
                +
              </button>
              <button className="drp-btn drp-btn--primary drp-btn--sm">
                ↻ Refresh
              </button>
            </div>
          }
        />

        <div
          style={{ flex: 1, overflowY: "auto", padding: "var(--drp-space-6)" }}
        >
          {/* ── Stats grid ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr repeat(6, 1fr)",
              gap: "var(--drp-space-3)",
              marginBottom: "var(--drp-space-5)",
            }}
          >
            {STATS.map((s) => (
              <div
                key={s.key}
                className="drp-card"
                style={{
                  padding: "var(--drp-space-4)",
                  cursor: s.key !== "total" ? "pointer" : "default",
                  transition: "box-shadow 0.15s ease",
                }}
                onClick={() =>
                  s.key !== "total" && handleFilter(s.key as ProductFilter)
                }
              >
                <p
                  className="drp-text drp-text--xs drp-text--muted"
                  style={{
                    textTransform: "uppercase",
                    letterSpacing: "0.07em",
                    marginBottom: "var(--drp-space-2)",
                  }}
                >
                  {s.label}
                </p>
                <p
                  style={{
                    fontSize: s.key === "total" ? "2rem" : "1.5rem",
                    fontWeight: 800,
                    fontFamily: "var(--drp-font-primary)",
                    color: s.color,
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </p>
              </div>
            ))}
          </div>

          {/* ── Search + filter row ── */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--drp-space-3)",
              marginBottom: "var(--drp-space-4)",
              flexWrap: "wrap",
            }}
          >
            <input
              type="text"
              className="drp-input"
              placeholder="Search products..."
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              style={{
                width: 220,
                fontSize: "var(--drp-text-sm)",
                flexShrink: 0,
              }}
            />

            <div
              style={{
                display: "flex",
                border: "var(--drp-border)",
                overflow: "hidden",
                flex: 1,
                minWidth: 0,
              }}
            >
              {FILTERS.map((f) => (
                <button
                  key={f.key}
                  onClick={() => handleFilter(f.key)}
                  style={{
                    flex: 1,
                    padding: "8px 12px",
                    fontFamily: "var(--drp-font-primary)",
                    fontSize: "var(--drp-text-sm)",
                    fontWeight: 600,
                    background:
                      filter === f.key ? "var(--drp-purple)" : "transparent",
                    color: filter === f.key ? "#fff" : "var(--drp-grey)",
                    border: "none",
                    borderRight: "var(--drp-border)",
                    cursor: "pointer",
                    transition: "background 0.15s ease, color 0.15s ease",
                    whiteSpace: "nowrap",
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* ── Product list ── */}
          <div className="drp-card" style={{ padding: 0, overflow: "hidden" }}>
            {/* List header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "var(--drp-space-3) var(--drp-space-4)",
                borderBottom: "var(--drp-border)",
                background: "var(--drp-grey-97)",
              }}
            >
              <span className="drp-text drp-text--sm drp-text--bold">
                Your Products
              </span>
              <span className="drp-text drp-text--xs drp-text--muted">
                {filtered.length} product{filtered.length !== 1 ? "s" : ""}
              </span>
            </div>

            {paged.length === 0 ? (
              <div
                style={{ padding: "var(--drp-space-8)", textAlign: "center" }}
              >
                <p className="drp-text drp-text--sm drp-text--muted">
                  No products found.
                </p>
              </div>
            ) : (
              paged.map((p) => <ProductRow key={p.id} product={p} />)
            )}
          </div>

          {/* ── Pagination ── */}
          <div
            style={{
              marginTop: "var(--drp-space-4)",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </div>
        </div>

        <ToolsTrackerFooter />
      </div>
    </div>
  );
};
