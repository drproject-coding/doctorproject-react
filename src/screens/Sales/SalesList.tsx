import React from "react";
import { Pictogram } from "../../components/Pictogram/Pictogram";
import { AppSidebar } from "../shared/AppSidebar";
import { AppTopBar } from "../shared/AppTopBar";
import { AppFooter } from "../shared/AppFooter";
import { Pagination } from "../../components/Pagination";

const SortIcon: React.FC = () => (
  <svg
    width="12"
    height="12"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    style={{
      display: "inline",
      marginLeft: 4,
      verticalAlign: "middle",
      color: "var(--drp-grey)",
    }}
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

const FilterBar: React.FC = () => (
  <div
    className="drp-flex drp-items-center drp-justify-between"
    style={{ marginBottom: "var(--drp-space-4)" }}
  >
    <div className="drp-flex drp-items-center drp-gap-2">
      <button className="drp-btn drp-btn--primary drp-btn--sm">
        <svg
          width="14"
          height="14"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-6.414 6.414A1 1 0 0014 14v4a1 1 0 01-.553.894l-4 2A1 1 0 018 20v-6a1 1 0 01.293-.707L2.293 13.12A1 1 0 002 13.828V19a1 1 0 001 1h0"
          />
        </svg>
        All Filters
      </button>
      <button className="drp-btn drp-btn--outline drp-btn--sm">
        All Customers
        <svg
          width="12"
          height="12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <button className="drp-btn drp-btn--outline drp-btn--sm">
        A-Z
        <svg
          width="12"
          height="12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    <button className="drp-btn drp-btn--outline drp-btn--sm">
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

const ProductThumb: React.FC<{ color?: string }> = ({
  color = "var(--drp-cream)",
}) => (
  <div
    style={{
      width: 40,
      height: 40,
      background: color,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}
  >
    <svg
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 24 24"
      stroke="var(--drp-grey)"
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

// ─── V1 – Date, Product (image), Type, Qty, Amount, Status ───────────────────

const v1Sales = [
  {
    id: "1",
    date: "10 Jan 2023",
    product: "Camera",
    type: "Black",
    qty: 3,
    amount: "$25,00",
    status: "Tag",
    thumb: "var(--drp-cream)",
  },
  {
    id: "2",
    date: "10 Jan 2023",
    product: "Package",
    type: "Neutral",
    qty: 96,
    amount: "$137,50",
    status: "Pending",
    thumb: "#fef3c7",
  },
  {
    id: "3",
    date: "12 Jan 2023",
    product: "Architecture",
    type: "White",
    qty: 14,
    amount: "$245,80",
    status: "Tag",
    thumb: "var(--drp-cream)",
  },
  {
    id: "4",
    date: "13 Jan 2023",
    product: "Sneakers",
    type: "Multicolor",
    qty: 239,
    amount: "$105,50",
    status: "Pending",
    thumb: "#fce7f3",
  },
  {
    id: "5",
    date: "16 Jan 2023",
    product: "Watches",
    type: "White",
    qty: 38,
    amount: "$295,00",
    status: "Pending",
    thumb: "#dbeafe",
  },
  {
    id: "6",
    date: "16 Jan 2023",
    product: "Headphones",
    type: "Black",
    qty: 155,
    amount: "$95,00",
    status: "Tag",
    thumb: "#fef3c7",
  },
  {
    id: "7",
    date: "17 Jan 2023",
    product: "Playstation",
    type: "White",
    qty: 198,
    amount: "$164,40",
    status: "Tag",
    thumb: "#e0e7ff",
  },
  {
    id: "8",
    date: "19 Jan 2023",
    product: "Gaming",
    type: "Multicolor",
    qty: 36,
    amount: "$350,00",
    status: "Tag",
    thumb: "#d1fae5",
  },
  {
    id: "9",
    date: "23 Jan 2023",
    product: "Clothing",
    type: "Multicolor",
    qty: 239,
    amount: "$105,50",
    status: "Tag",
    thumb: "#ffe4e6",
  },
];

const V1Content: React.FC = () => (
  <div
    className="content"
    style={{ overflow: "auto", padding: "var(--drp-space-5)" }}
  >
    <FilterBar />
    <div className="drp-card">
      <table className="drp-table">
        <thead>
          <tr>
            <th style={{ width: 40 }}>
              <input type="checkbox" className="drp-checkbox" />
            </th>
            <th>
              Date <SortIcon />
            </th>
            <th>
              Product <SortIcon />
            </th>
            <th>
              Type <SortIcon />
            </th>
            <th>
              Qty. <SortIcon />
            </th>
            <th>
              Amount <SortIcon />
            </th>
            <th>
              Status <SortIcon />
            </th>
            <th style={{ width: 40 }} />
          </tr>
        </thead>
        <tbody>
          {v1Sales.map((s) => (
            <tr key={s.id}>
              <td>
                <input type="checkbox" className="drp-checkbox" />
              </td>
              <td>
                <span className="drp-text drp-text--sm drp-text--muted">
                  {s.date}
                </span>
              </td>
              <td>
                <div className="drp-flex drp-items-center drp-gap-3">
                  <ProductThumb color={s.thumb} />
                  <span className="drp-text drp-text--sm drp-text--bold">
                    {s.product}
                  </span>
                </div>
              </td>
              <td>
                <span className="drp-text drp-text--sm drp-text--muted">
                  {s.type}
                </span>
              </td>
              <td>
                <span className="drp-text drp-text--sm">{s.qty}</span>
              </td>
              <td>
                <span className="drp-text drp-text--sm drp-text--bold">
                  {s.amount}
                </span>
              </td>
              <td>
                <span className="drp-tag drp-tag--mint drp-tag--filled">
                  {s.status}
                </span>
              </td>
              <td>
                <button className="drp-btn drp-btn--ghost drp-btn--sm">
                  ···
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

// ─── V2 – Date, Product + Order#, Customer + email, Amount + Tax, Status ─────

const v2Sales = [
  {
    id: "1",
    date: "16 Jan 2023",
    product: "Camera",
    order: "Order #: 7697-98",
    customer: "Benedita Tavares",
    email: "krueger@yahoo.com",
    amount: "$2,880,00",
    tax: "Tax: $79.0",
    status: "Tag",
    shipped: false,
    thumb: "var(--drp-cream)",
  },
  {
    id: "2",
    date: "16 Jan 2023",
    product: "Package",
    order: "Order #: 7690-43",
    customer: "Balveer Bhadiar",
    email: "cantu@verizon.net",
    amount: "$3,600,00",
    tax: "Tax: $99.0",
    status: "Tag",
    shipped: false,
    thumb: "#fef3c7",
  },
  {
    id: "3",
    date: "16 Jan 2023",
    product: "Architecture",
    order: "Order #: 3421-77",
    customer: "Yamaha Toshinobu",
    email: "cremonini@outlook.com",
    amount: "$2,860,00",
    tax: "Tax: $72.9",
    status: "Tag",
    shipped: false,
    thumb: "var(--drp-cream)",
  },
  {
    id: "4",
    date: "16 Jan 2023",
    product: "Sneakers",
    order: "Order #: 8654-55",
    customer: "Jushawn McDowell",
    email: "sequin@verizon.net",
    amount: "$2,880,00",
    tax: "Tax: $79.0",
    status: "Tag",
    shipped: false,
    thumb: "#fce7f3",
  },
  {
    id: "5",
    date: "16 Jan 2023",
    product: "Watches",
    order: "Order #: 0987-32",
    customer: "Ivan Magalhaes",
    email: "hedwig@mac.com",
    amount: "$3,600,00",
    tax: "Tax: $99.0",
    status: "Shipped",
    shipped: true,
    thumb: "#dbeafe",
  },
  {
    id: "6",
    date: "16 Jan 2023",
    product: "Headphones",
    order: "Order #: 6552-70",
    customer: "Merrile Burgett",
    email: "pappp@optonline.net",
    amount: "$2,860,00",
    tax: "Tax: $72.9",
    status: "Shipped",
    shipped: true,
    thumb: "#fef3c7",
  },
  {
    id: "7",
    date: "16 Jan 2023",
    product: "Gaming",
    order: "Order #: 6539-90",
    customer: "Merrile Burgett",
    email: "pappp@optonline.net",
    amount: "$2,860,00",
    tax: "Tax: $72.9",
    status: "Shipped",
    shipped: true,
    thumb: "#e0e7ff",
  },
];

const V2Content: React.FC = () => (
  <div
    className="content"
    style={{ overflow: "auto", padding: "var(--drp-space-5)" }}
  >
    <FilterBar />
    <div className="drp-card">
      <table className="drp-table">
        <thead>
          <tr>
            <th style={{ width: 40 }}>
              <input type="checkbox" className="drp-checkbox" />
            </th>
            <th>
              Date <SortIcon />
            </th>
            <th>
              Product <SortIcon />
            </th>
            <th>
              Customer <SortIcon />
            </th>
            <th>
              Amount <SortIcon />
            </th>
            <th>
              Status <SortIcon />
            </th>
            <th style={{ width: 40 }} />
          </tr>
        </thead>
        <tbody>
          {v2Sales.map((s) => (
            <tr key={s.id}>
              <td>
                <input type="checkbox" className="drp-checkbox" />
              </td>
              <td>
                <span className="drp-text drp-text--sm drp-text--muted">
                  {s.date}
                </span>
              </td>
              <td>
                <div className="drp-flex drp-items-center drp-gap-3">
                  <ProductThumb color={s.thumb} />
                  <div>
                    <span className="drp-text drp-text--sm drp-text--bold">
                      {s.product}
                    </span>
                    <br />
                    <span className="drp-caption">{s.order}</span>
                  </div>
                </div>
              </td>
              <td>
                <span className="drp-text drp-text--sm drp-text--bold">
                  {s.customer}
                </span>
                <br />
                <span className="drp-caption">{s.email}</span>
              </td>
              <td>
                <span className="drp-text drp-text--sm drp-text--bold">
                  {s.amount}
                </span>
                <br />
                <span className="drp-caption">{s.tax}</span>
              </td>
              <td>
                <span
                  className={`drp-tag ${s.shipped ? "drp-tag--mint drp-tag--filled" : "drp-tag--mint"}`}
                >
                  {s.status}
                </span>
              </td>
              <td>
                <button className="drp-btn drp-btn--ghost drp-btn--sm">
                  ···
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

// ─── Main export ──────────────────────────────────────────────────────────────

export interface SalesListProps {
  theme?: "light" | "dark";
  variant?: "v1" | "v2";
}

export const SalesList: React.FC<SalesListProps> = ({
  theme = "light",
  variant = "v1",
}) => (
  <div className="app-layout">
    <AppSidebar activeId="sales" />
    <div className="main-content">
      <AppTopBar title="Sales" />
      {variant === "v1" ? <V1Content /> : <V2Content />}
      <AppFooter />
    </div>
  </div>
);
