import React from "react";
import { Pictogram } from "../../components/Pictogram/Pictogram";
import { AppSidebar } from "../shared/AppSidebar";
import { AppTopBar } from "../shared/AppTopBar";
import { AppFooter } from "../shared/AppFooter";
import { Pagination } from "../../components/Pagination";

const SortIcon: React.FC = () => (
  <svg
    style={{
      width: 12,
      height: 12,
      display: "inline-block",
      marginLeft: 4,
      color: "var(--drp-grey)",
    }}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
    />
  </svg>
);

const TablePagination: React.FC = () => (
  <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />
);

// ─── Stock progress bar ───────────────────────────────────────────────────────

const StockBar: React.FC<{ value: number; max: number; color: string }> = ({
  value,
  max,
  color,
}) => {
  const pct = Math.min(100, Math.round((value / max) * 100));
  return (
    <div className="drp-progress drp-progress--sm" style={{ width: 80 }}>
      <div
        className="drp-progress__bar"
        style={{ width: `${pct}%`, background: color }}
      />
    </div>
  );
};

// ─── Product thumbnail placeholder ───────────────────────────────────────────

const ProductThumb: React.FC<{ bg?: string }> = ({
  bg = "var(--drp-cream)",
}) => (
  <div
    style={{
      width: 40,
      height: 40,
      background: bg,
      border: "var(--drp-border-thin)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}
  >
    <svg
      width="20"
      height="20"
      style={{ color: "var(--drp-grey)" }}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  </div>
);

// ─── V1 – Image + description + sold/stock/price ─────────────────────────────

const v1Products = [
  {
    id: "1",
    name: "MacBook Pro 16, 2021",
    description:
      "We become what we think about. Winning isn't everything, but wanting to win is.",
    sold: 1313,
    stock: 2168,
    stockMax: 3000,
    stockColor: "var(--drp-mint)",
    price: "$4,140",
    thumb: "var(--drp-cream)",
  },
  {
    id: "2",
    name: "MacBook Pro 13, 2021",
    description:
      "Either you run the day, or the day runs you. It does not matter how slowly you go.",
    sold: 4531,
    stock: 5506,
    stockMax: 6000,
    stockColor: "var(--drp-yellow)",
    price: "$2,148",
    thumb: "#dbeafe",
  },
  {
    id: "3",
    name: "Dell XPS, 2021",
    description:
      "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
    sold: 3632,
    stock: 8522,
    stockMax: 10000,
    stockColor: "var(--drp-mint)",
    price: "$3,680",
    thumb: "#f1f5f9",
  },
  {
    id: "4",
    name: "MacBook Pro 17, 2020",
    description:
      "I didn't fail the test. I just found 100 ways to do it wrong. When one door of happiness closes.",
    sold: 6818,
    stock: 6656,
    stockMax: 8000,
    stockColor: "var(--drp-mint)",
    price: "$3,250",
    thumb: "var(--drp-cream)",
  },
  {
    id: "5",
    name: "IBM Workstation 2020",
    description:
      "Fall seven times and stand up eight. There is only one way to avoid criticism: do nothing.",
    sold: 6183,
    stock: 3678,
    stockMax: 8000,
    stockColor: "var(--drp-pink)",
    price: "$1,800",
    thumb: "#fef3c7",
  },
  {
    id: "6",
    name: "MacBook Air, 2021",
    description:
      "Winning isn't everything, but wanting to win is. Either write something worth reading.",
    sold: 1728,
    stock: 6619,
    stockMax: 8000,
    stockColor: "var(--drp-yellow)",
    price: "$2,900",
    thumb: "#e0e7ff",
  },
];

const V1Content: React.FC = () => (
  <div className="content">
    <div className="drp-card" style={{ padding: 0, overflow: "hidden" }}>
      {/* Table */}
      <table className="drp-table">
        <thead>
          <tr>
            <th>
              Name <SortIcon />
            </th>
            <th>
              Details <SortIcon />
            </th>
            <th>
              Sold <SortIcon />
            </th>
            <th>
              Stock <SortIcon />
            </th>
            <th>
              Price <SortIcon />
            </th>
            <th style={{ width: 40 }}></th>
          </tr>
        </thead>
        <tbody>
          {v1Products.map((p) => (
            <tr key={p.id}>
              <td>
                <div className="drp-flex drp-items-center drp-gap-3">
                  <ProductThumb bg={p.thumb} />
                  <span className="drp-text drp-text--bold">{p.name}</span>
                </div>
              </td>
              <td>
                <span className="drp-text drp-text--sm drp-text--muted">
                  {p.description}
                </span>
              </td>
              <td>
                <span className="drp-text drp-text--sm">{p.sold}</span>
              </td>
              <td>
                <div className="drp-flex-col drp-gap-1">
                  <StockBar
                    value={p.stock}
                    max={p.stockMax}
                    color={p.stockColor}
                  />
                  <span className="drp-caption">
                    {p.stock.toLocaleString()}
                  </span>
                </div>
              </td>
              <td>
                <span className="drp-text drp-text--bold">{p.price}</span>
              </td>
              <td>
                <button className="drp-btn drp-btn--ghost drp-btn--icon drp-btn--sm">
                  ...
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <TablePagination />
    </div>
  </div>
);

// ─── V2 – Filter bar + category pill + availability tag ──────────────────────

const v2Products = [
  {
    id: "1",
    name: "Camera",
    category: "Technology",
    sku: "8XXP",
    avl: "Tag",
    avlVariant: "drp-tag--grey",
    color: "Black",
    sales: 140,
    price: "$25,00",
  },
  {
    id: "2",
    name: "Package",
    category: "Marketing",
    sku: "KSXU",
    avl: "Here",
    avlVariant: "drp-tag--mint",
    color: "Neutral",
    sales: 96,
    price: "$137,50",
  },
  {
    id: "3",
    name: "Architecture",
    category: "Marketing",
    sku: "BA2S",
    avl: "Low",
    avlVariant: "drp-tag--pink",
    color: "White",
    sales: 14,
    price: "$245,80",
  },
  {
    id: "4",
    name: "Sneakers",
    category: "Clothing",
    sku: "XG42",
    avl: "Tag",
    avlVariant: "drp-tag--grey",
    color: "Multicolor",
    sales: 239,
    price: "$105,50",
  },
  {
    id: "5",
    name: "Watches",
    category: "Smart Wear",
    sku: "5WHL",
    avl: "Here",
    avlVariant: "drp-tag--mint",
    color: "White",
    sales: 38,
    price: "$295,00",
  },
  {
    id: "6",
    name: "Headphones",
    category: "Technology",
    sku: "VVD3",
    avl: "Tag",
    avlVariant: "drp-tag--grey",
    color: "Black",
    sales: 155,
    price: "$95,00",
  },
  {
    id: "7",
    name: "Playstation",
    category: "Gifts & Toys",
    sku: "3L85",
    avl: "Low",
    avlVariant: "drp-tag--pink",
    color: "White",
    sales: 198,
    price: "$164,40",
  },
  {
    id: "8",
    name: "Gaming",
    category: "Gifts & Toys",
    sku: "QQ44",
    avl: "Tag",
    avlVariant: "drp-tag--grey",
    color: "Multicolor",
    sales: 36,
    price: "$350,00",
  },
  {
    id: "9",
    name: "Clothing",
    category: "Clothing",
    sku: "XG42",
    avl: "Tag",
    avlVariant: "drp-tag--grey",
    color: "Multicolor",
    sales: 239,
    price: "$105,50",
  },
];

const FilterBar: React.FC = () => (
  <div className="drp-flex drp-items-center drp-justify-between drp-mb-4">
    <div className="drp-flex drp-items-center drp-gap-2">
      <button className="drp-btn drp-btn--sm drp-btn--primary">
        All Filters
      </button>
      <button className="drp-btn drp-btn--sm drp-btn--outline">
        All Customers
      </button>
      <button className="drp-btn drp-btn--sm drp-btn--outline">A-Z</button>
    </div>
    <button className="drp-btn drp-btn--sm drp-btn--outline">
      <svg
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      Search
    </button>
  </div>
);

const V2Content: React.FC = () => (
  <div className="content">
    <FilterBar />
    <div className="drp-card" style={{ padding: 0, overflow: "hidden" }}>
      <table className="drp-table">
        <thead>
          <tr>
            <th style={{ width: 40 }}>
              <label className="drp-checkbox">
                <input type="checkbox" />
              </label>
            </th>
            <th>
              Product <SortIcon />
            </th>
            <th>
              Category <SortIcon />
            </th>
            <th>
              Id <SortIcon />
            </th>
            <th>
              Avl <SortIcon />
            </th>
            <th>
              Color <SortIcon />
            </th>
            <th>
              Sales <SortIcon />
            </th>
            <th>
              Price <SortIcon />
            </th>
            <th style={{ width: 40 }}></th>
          </tr>
        </thead>
        <tbody>
          {v2Products.map((p) => (
            <tr key={p.id}>
              <td>
                <label className="drp-checkbox">
                  <input type="checkbox" />
                </label>
              </td>
              <td>
                <div className="drp-flex drp-items-center drp-gap-3">
                  <ProductThumb />
                  <span className="drp-text drp-text--bold">{p.name}</span>
                </div>
              </td>
              <td>
                <span className="drp-tag">{p.category}</span>
              </td>
              <td>
                <span className="drp-text drp-text--sm drp-text--muted">
                  {p.sku}
                </span>
              </td>
              <td>
                <span className={`drp-tag ${p.avlVariant}`}>{p.avl}</span>
              </td>
              <td>
                <span className="drp-text drp-text--sm">{p.color}</span>
              </td>
              <td>
                <span className="drp-text drp-text--sm">{p.sales}</span>
              </td>
              <td>
                <span className="drp-text drp-text--bold">{p.price}</span>
              </td>
              <td>
                <button className="drp-btn drp-btn--ghost drp-btn--icon drp-btn--sm">
                  ...
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <TablePagination />
    </div>
  </div>
);

// ─── V3 – Payment-style list ──────────────────────────────────────────────────

const v3Products = [
  {
    id: "1",
    name: "Darius Cummings",
    amount: "$2,344",
    status: "Paid",
    rate: "$25,00",
    service: "Tag",
    date: "08 / 10 / 2022",
    source: "upwork.com",
  },
  {
    id: "2",
    name: "Sampson Totton",
    amount: "$5,220",
    status: "Pending",
    rate: "$35,00",
    service: "Design",
    date: "14 / 10 / 2022",
    source: "freelance.com",
  },
  {
    id: "3",
    name: "Jaroslav Brabec",
    amount: "$3,891",
    status: "Pending",
    rate: "$20,00",
    service: "Marketing",
    date: "15 / 10 / 2022",
    source: "fiverr.com",
  },
  {
    id: "4",
    name: "Olivia Eklund",
    amount: "$3,151",
    status: "Paid",
    rate: "$15,00",
    service: "Tag",
    date: "16 / 10 / 2022",
    source: "toptal.com",
  },
  {
    id: "5",
    name: "Leo Knight",
    amount: "$7,574",
    status: "Paid",
    rate: "$45,00",
    service: "Management",
    date: "16 / 10 / 2022",
    source: "jooble.com",
  },
  {
    id: "6",
    name: "Siri Jakobsson",
    amount: "$3,053",
    status: "Pending",
    rate: "$30,00",
    service: "Promotion",
    date: "18 / 10 / 2022",
    source: "upwork.com",
  },
  {
    id: "7",
    name: "Mariano Rasgado",
    amount: "$5,312",
    status: "Paid",
    rate: "$35,00",
    service: "Marketing",
    date: "19 / 10 / 2022",
    source: "flexjobs.com",
  },
  {
    id: "8",
    name: "Hugo Assuncao",
    amount: "$6,366",
    status: "Paid",
    rate: "$25,00",
    service: "Tag",
    date: "23 / 10 / 2022",
    source: "toptal.com",
  },
  {
    id: "9",
    name: "Olivia Arribas",
    amount: "$1,432",
    status: "Paid",
    rate: "$15,00",
    service: "Marketing",
    date: "24 / 10 / 2022",
    source: "fiverr.com",
  },
];

const V3Content: React.FC = () => (
  <div className="content">
    <div className="drp-flex drp-items-center drp-justify-between drp-mb-4">
      <div className="drp-flex drp-items-center drp-gap-2">
        <button className="drp-btn drp-btn--sm drp-btn--primary">
          All Filters
        </button>
        <button className="drp-btn drp-btn--sm drp-btn--outline">Group</button>
        <button className="drp-btn drp-btn--sm drp-btn--outline">Sort</button>
        <button className="drp-btn drp-btn--outline drp-btn--icon drp-btn--sm">
          ...
        </button>
      </div>
      <button className="drp-btn drp-btn--outline drp-btn--icon drp-btn--sm">
        <svg
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
    <div className="drp-card" style={{ padding: 0, overflow: "hidden" }}>
      <table className="drp-table">
        <thead>
          <tr>
            <th style={{ width: 40 }}>
              <label className="drp-checkbox">
                <input type="checkbox" />
              </label>
            </th>
            <th>
              Name <SortIcon />
            </th>
            <th>
              Amount <SortIcon />
            </th>
            <th>
              Status <SortIcon />
            </th>
            <th>
              Rate <SortIcon />
            </th>
            <th>
              Service <SortIcon />
            </th>
            <th>
              Date <SortIcon />
            </th>
            <th>
              Source <SortIcon />
            </th>
            <th style={{ width: 40 }}></th>
          </tr>
        </thead>
        <tbody>
          {v3Products.map((p) => (
            <tr key={p.id}>
              <td>
                <label className="drp-checkbox">
                  <input type="checkbox" />
                </label>
              </td>
              <td>
                <span className="drp-text drp-text--bold">{p.name}</span>
              </td>
              <td>
                <span className="drp-text drp-text--bold">{p.amount}</span>
              </td>
              <td>
                <span className="drp-tag drp-tag--filled">{p.status}</span>
              </td>
              <td>
                <span className="drp-text drp-text--bold">{p.rate}</span>
              </td>
              <td>
                <span className="drp-tag">{p.service}</span>
              </td>
              <td>
                <span className="drp-text drp-text--sm drp-text--muted">
                  {p.date}
                </span>
              </td>
              <td>
                <span className="drp-text drp-text--sm drp-text--muted">
                  {p.source}
                </span>
              </td>
              <td>
                <button className="drp-btn drp-btn--ghost drp-btn--icon drp-btn--sm">
                  ...
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <TablePagination />
    </div>
  </div>
);

// ─── Details screen ───────────────────────────────────────────────────────────

const DetailsContent: React.FC = () => (
  <div className="content">
    <div className="drp-flex drp-gap-6">
      {/* Left panel */}
      <div style={{ width: 220, flexShrink: 0 }}>
        <div
          style={{
            width: "100%",
            aspectRatio: "1/1",
            background:
              "linear-gradient(135deg, var(--drp-pink), var(--drp-purple))",
            marginBottom: "var(--drp-space-4)",
            border: "var(--drp-border)",
          }}
        />
        <h2 className="drp-h5" style={{ marginBottom: "var(--drp-space-1)" }}>
          Neoft UI Kit for NFT Marketplaces
        </h2>
        <p
          className="drp-text drp-text--sm drp-text--muted"
          style={{ marginBottom: "var(--drp-space-3)" }}
        >
          250 Pages and 320 symbols for NFT Marketplace UI design
        </p>
        <span className="drp-tag">Template</span>

        <div style={{ marginTop: "var(--drp-space-5)" }}>
          <div
            style={{
              borderBottom: "var(--drp-border-dashed)",
              paddingBottom: "var(--drp-space-4)",
              marginBottom: "var(--drp-space-4)",
            }}
          >
            <div
              className="drp-flex drp-items-center drp-gap-2"
              style={{ marginBottom: 2 }}
            >
              <span className="drp-h4">296</span>
              <span className="drp-badge drp-badge--pink">8+</span>
            </div>
            <span className="drp-caption">New sales</span>
          </div>

          <div
            style={{
              borderBottom: "var(--drp-border-dashed)",
              paddingBottom: "var(--drp-space-4)",
              marginBottom: "var(--drp-space-4)",
            }}
          >
            <div
              className="drp-flex drp-items-center drp-gap-2"
              style={{ marginBottom: 2 }}
            >
              <span className="drp-h4">18</span>
              <span className="drp-badge drp-badge--mint">5</span>
            </div>
            <span className="drp-caption">Followers</span>
          </div>

          <div>
            <span className="drp-h5">$36</span>
            <div className="drp-caption">Regular price</div>
          </div>
        </div>

        <button className="drp-btn drp-btn--outline drp-btn--sm drp-btn--block drp-mt-4">
          <svg
            width="16"
            height="16"
            style={{ color: "var(--drp-purple)" }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          Edit product page
        </button>
      </div>

      {/* Right panel */}
      <div style={{ flex: 1 }}>
        <div className="drp-card" style={{ padding: 0, overflow: "hidden" }}>
          <div
            className="drp-flex drp-items-center drp-gap-2"
            style={{
              padding: "var(--drp-space-4)",
              borderBottom: "var(--drp-border-thin)",
            }}
          >
            <button className="drp-tab drp-tab--active">Overview</button>
            <button className="drp-tab">Currency</button>
            <button className="drp-tab">Statement</button>
          </div>
          <div style={{ padding: "var(--drp-space-5)" }}>
            <div
              style={{
                width: "100%",
                height: 200,
                background: "var(--drp-cream)",
                border: "var(--drp-border-thin)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span className="drp-text drp-text--muted">
                Chart placeholder
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ─── Main export ──────────────────────────────────────────────────────────────

export interface ProductsListProps {
  theme?: "light" | "dark";
  variant?: "v1" | "v2" | "v3" | "details";
}

export const ProductsList: React.FC<ProductsListProps> = ({
  theme = "light",
  variant = "v1",
}) => {
  const renderContent = () => {
    switch (variant) {
      case "v2":
        return <V2Content />;
      case "v3":
        return <V3Content />;
      case "details":
        return <DetailsContent />;
      default:
        return <V1Content />;
    }
  };

  return (
    <div className="app-layout">
      <AppSidebar activeId="products" />
      <div className="main-content">
        <AppTopBar title={variant === "details" ? "Product Details" : "Products"} />
        {renderContent()}
        <AppFooter />
      </div>
    </div>
  );
};
