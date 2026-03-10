import React, { useState } from "react";
import { ToolsTrackerSidebar } from "../shared/ToolsTrackerSidebar";
import { ToolsTrackerFooter } from "../shared/ToolsTrackerFooter";
import { TopBar } from "../../../components/TopBar/TopBar";
import { Tag } from "../../../components/Tag/Tag";
import { Badge } from "../../../components/Badge/Badge";
import { Button } from "../../../components/Button/Button";
import { Modal } from "../../../components/Modal/Modal";
import { Input } from "../../../components/Input/Input";
import { Pagination } from "../../../components/Pagination/Pagination";
import { Tabs } from "../../../components/Tabs/Tabs";

/* =========================================================================== */
/* Types                                                                         */
/* =========================================================================== */

type AdminTab = "users" | "products" | "invoices" | "activity" | "audit-trail";

interface TAdminUser {
  id: number;
  email: string;
  role: "superadmin" | "user";
  createdAt: string;
  lastSync: string;
  updatedAt: string;
}

interface TAdminProduct {
  id: number;
  user: string;
  name: string;
  status: "ACTIVATED" | "REDEEMED" | "OUTDATED" | "EXPIRED";
  purchaseDate: string;
  refundDeadline: string | null;
  plan: string | null;
  refunded: boolean;
  created: string;
  updated: string;
}

interface TAdminInvoice {
  uuid: string;
  urlDomain: string;
  status: "paid" | "has_refund" | "refunded";
  totalAmount: number;
  products: number;
  invoiceDate: string;
  paymentMethod: string;
  cardLast4: string;
  refunded: string;
  created: string;
  updated: string;
  userId: number;
  subtotal: number;
  tax: number;
  couponDiscount: number;
  planDiscount: number;
  totalDiscount: number;
  totalRefunded: number;
  cardType: string;
  currency: string;
  createdFull: string;
  updatedFull: string;
}

/* =========================================================================== */
/* Data                                                                          */
/* =========================================================================== */

const USERS: TAdminUser[] = [
  {
    id: 1,
    email: "yfatihi.pro@gmail.com",
    role: "superadmin",
    createdAt: "03/03/2026",
    lastSync: "05/03/2026",
    updatedAt: "2d ago",
  },
  {
    id: 10,
    email: "test@example.com",
    role: "user",
    createdAt: "01/03/2026",
    lastSync: "Never",
    updatedAt: "6d ago",
  },
  {
    id: 11,
    email: "test2@example.com",
    role: "user",
    createdAt: "01/03/2026",
    lastSync: "Never",
    updatedAt: "6d ago",
  },
  {
    id: 12,
    email: "toto@gmail.com",
    role: "user",
    createdAt: "02/03/2026",
    lastSync: "02/03/2026",
    updatedAt: "5d ago",
  },
  {
    id: 13,
    email: "yffatihi.pro@gmail.com",
    role: "user",
    createdAt: "03/03/2026",
    lastSync: "03/03/2026",
    updatedAt: "4d ago",
  },
];

const PRODUCTS: TAdminProduct[] = [
  {
    id: 3048,
    user: "yfatihi.pro@gmail.com",
    name: "TubeOnAI",
    status: "ACTIVATED",
    purchaseDate: "08/02/2026",
    refundDeadline: null,
    plan: "License Tier 3",
    refunded: false,
    created: "16/02/2026",
    updated: "4d ago",
  },
  {
    id: 3049,
    user: "yfatihi.pro@gmail.com",
    name: "BrowserAct",
    status: "ACTIVATED",
    purchaseDate: "08/02/2026",
    refundDeadline: null,
    plan: "License Tier 5",
    refunded: false,
    created: "16/02/2026",
    updated: "4d ago",
  },
  {
    id: 3050,
    user: "yfatihi.pro@gmail.com",
    name: "VisualSitemaps",
    status: "ACTIVATED",
    purchaseDate: "14/01/2026",
    refundDeadline: null,
    plan: "License Tier 4",
    refunded: false,
    created: "16/02/2026",
    updated: "4d ago",
  },
  {
    id: 3051,
    user: "yfatihi.pro@gmail.com",
    name: "WriterZen",
    status: "REDEEMED",
    purchaseDate: "14/01/2026",
    refundDeadline: null,
    plan: "Code-based",
    refunded: false,
    created: "16/02/2026",
    updated: "4d ago",
  },
  {
    id: 3052,
    user: "yfatihi.pro@gmail.com",
    name: "Pretty Prompt",
    status: "OUTDATED",
    purchaseDate: "23/12/2025",
    refundDeadline: null,
    plan: "License Tier 2",
    refunded: false,
    created: "16/02/2026",
    updated: "4d ago",
  },
  {
    id: 3053,
    user: "yfatihi.pro@gmail.com",
    name: "SheetXAI",
    status: "ACTIVATED",
    purchaseDate: "23/12/2025",
    refundDeadline: null,
    plan: "License Tier 2",
    refunded: false,
    created: "16/02/2026",
    updated: "4d ago",
  },
  {
    id: 3054,
    user: "yfatihi.pro@gmail.com",
    name: "Tabby",
    status: "ACTIVATED",
    purchaseDate: "19/12/2025",
    refundDeadline: null,
    plan: "License Tier 2",
    refunded: false,
    created: "16/02/2026",
    updated: "4d ago",
  },
  {
    id: 3055,
    user: "yfatihi.pro@gmail.com",
    name: "AppSumo Plus Yearly Plan",
    status: "EXPIRED",
    purchaseDate: "14/12/2022",
    refundDeadline: null,
    plan: null,
    refunded: false,
    created: "16/02/2026",
    updated: "4d ago",
  },
  {
    id: 3056,
    user: "yfatihi.pro@gmail.com",
    name: "The Build Faster Bundle",
    status: "REDEEMED",
    purchaseDate: "01/12/2025",
    refundDeadline: null,
    plan: "Code-based",
    refunded: false,
    created: "16/02/2026",
    updated: "4d ago",
  },
  {
    id: 3057,
    user: "yfatihi.pro@gmail.com",
    name: "Semdash",
    status: "ACTIVATED",
    purchaseDate: "01/12/2025",
    refundDeadline: null,
    plan: "License Tier 3",
    refunded: false,
    created: "16/02/2026",
    updated: "4d ago",
  },
  {
    id: 3058,
    user: "yfatihi.pro@gmail.com",
    name: "AgenticFlow",
    status: "ACTIVATED",
    purchaseDate: "01/12/2025",
    refundDeadline: null,
    plan: "License Tier 5",
    refunded: false,
    created: "16/02/2026",
    updated: "4d ago",
  },
  {
    id: 3059,
    user: "test@example.com",
    name: "Grain",
    status: "ACTIVATED",
    purchaseDate: "05/01/2026",
    refundDeadline: null,
    plan: "License Tier 2",
    refunded: false,
    created: "16/02/2026",
    updated: "4d ago",
  },
  {
    id: 3060,
    user: "test@example.com",
    name: "Opticks",
    status: "ACTIVATED",
    purchaseDate: "10/01/2026",
    refundDeadline: null,
    plan: "License Tier 1",
    refunded: true,
    created: "16/02/2026",
    updated: "3d ago",
  },
];

function mkInvoice(
  uuid: string,
  status: TAdminInvoice["status"],
  totalAmount: number,
  products: number,
  invoiceDate: string,
  refunded: string,
  overrides: Partial<TAdminInvoice> = {},
): TAdminInvoice {
  const subtotal = parseFloat((totalAmount * 1.11).toFixed(2));
  const planDiscount = parseFloat((subtotal - totalAmount).toFixed(2));
  return {
    uuid,
    urlDomain: "...l.com",
    status,
    totalAmount,
    products,
    invoiceDate,
    paymentMethod: "Visa",
    cardLast4: "9078",
    refunded,
    created: "16/02/2026",
    updated: "7d ago",
    userId: 1,
    subtotal,
    tax: 0,
    couponDiscount: 0,
    planDiscount,
    totalDiscount: planDiscount,
    totalRefunded: 0,
    cardType: "Visa",
    currency: "USD",
    createdFull: "16/02/2026 02:20:51",
    updatedFull: "28/02/2026 09:06:21",
    ...overrides,
  };
}

const INVOICES: TAdminInvoice[] = [
  mkInvoice(
    "d1bcf2ec-449b-41a3-84cc-ef0f41ace523",
    "paid",
    862.2,
    27,
    "28/02/2026",
    "–",
  ),
  mkInvoice(
    "d2aa3a9f-bc2f-48c3-a200-42d02ecd42f1",
    "paid",
    714.6,
    2,
    "28/02/2026",
    "–",
  ),
  mkInvoice(
    "585a2c2c-9a4f-4fdd-b654-a1aeef7eed23",
    "paid",
    306.0,
    0,
    "28/02/2026",
    "–",
  ),
  mkInvoice(
    "a0fa6ca8-ed66-4ee5-a4d9-b6d5ef0a8334",
    "paid",
    196.29,
    2,
    "28/02/2026",
    "–",
  ),
  mkInvoice(
    "5084339e-439f-429d-88f4-b9d0bcb934b7",
    "paid",
    125.1,
    1,
    "28/02/2026",
    "–",
  ),
  mkInvoice(
    "4dea64bf-4c70-4d55-846a-8bd1babb1d68",
    "paid",
    99.0,
    0,
    "28/02/2026",
    "–",
  ),
  mkInvoice(
    "aaa2742a-c097-4551-818d-e70a11de4ac6",
    "paid",
    130.17,
    3,
    "28/02/2026",
    "–",
  ),
  mkInvoice(
    "17804d24-f630-4ca2-9a95-0e27d4e7af1f",
    "paid",
    193.59,
    1,
    "28/02/2026",
    "–",
  ),
  mkInvoice(
    "edde49e1-9c9c-4a75-915a-87d1ea74bd9b",
    "has_refund",
    130.25,
    4,
    "22/11/2025",
    "$17.10",
    { totalRefunded: 17.1 },
  ),
  mkInvoice(
    "b2f4c1a8-3e9d-4b12-a567-89c0d1e2f345",
    "paid",
    248.4,
    5,
    "15/11/2025",
    "–",
  ),
];

const ACTIVITY_LOG = [
  {
    id: 1,
    user: "yfatihi.pro@gmail.com",
    action: "Synced products from AppSumo",
    time: "2h ago",
    type: "sync",
  },
  {
    id: 2,
    user: "yfatihi.pro@gmail.com",
    action: "Created invoice d1bcf2ec…",
    time: "4h ago",
    type: "create",
  },
  {
    id: 3,
    user: "toto@gmail.com",
    action: "Registered new account",
    time: "1d ago",
    type: "user",
  },
  {
    id: 4,
    user: "yfatihi.pro@gmail.com",
    action: "Updated product TubeOnAI status → ACTIVATED",
    time: "2d ago",
    type: "update",
  },
  {
    id: 5,
    user: "test@example.com",
    action: "Logged in",
    time: "2d ago",
    type: "auth",
  },
  {
    id: 6,
    user: "yfatihi.pro@gmail.com",
    action: "Deleted product AppSumo Plus Yearly Plan",
    time: "3d ago",
    type: "delete",
  },
  {
    id: 7,
    user: "yfatihi.pro@gmail.com",
    action: "Synced invoices from AppSumo",
    time: "3d ago",
    type: "sync",
  },
  {
    id: 8,
    user: "yffatihi.pro@gmail.com",
    action: "Registered new account",
    time: "4d ago",
    type: "user",
  },
];

const AUDIT_LOG = [
  {
    id: 1,
    timestamp: "08/03/2026 14:32",
    user: "yfatihi.pro@gmail.com",
    action: "UPDATE",
    entity: "Product",
    entityId: "3048",
    details: "status: ACTIVATED",
  },
  {
    id: 2,
    timestamp: "08/03/2026 12:10",
    user: "yfatihi.pro@gmail.com",
    action: "CREATE",
    entity: "Invoice",
    entityId: "d1bcf2…",
    details: "amount: $862.20",
  },
  {
    id: 3,
    timestamp: "07/03/2026 09:55",
    user: "toto@gmail.com",
    action: "LOGIN",
    entity: "User",
    entityId: "12",
    details: "",
  },
  {
    id: 4,
    timestamp: "06/03/2026 18:42",
    user: "yfatihi.pro@gmail.com",
    action: "SYNC",
    entity: "Products",
    entityId: "–",
    details: "334 products synced",
  },
  {
    id: 5,
    timestamp: "05/03/2026 11:20",
    user: "yfatihi.pro@gmail.com",
    action: "DELETE",
    entity: "Product",
    entityId: "2999",
    details: "name: Old Tool",
  },
  {
    id: 6,
    timestamp: "04/03/2026 08:05",
    user: "test@example.com",
    action: "LOGIN",
    entity: "User",
    entityId: "10",
    details: "",
  },
  {
    id: 7,
    timestamp: "03/03/2026 16:30",
    user: "yfatihi.pro@gmail.com",
    action: "CREATE",
    entity: "User",
    entityId: "13",
    details: "role: user",
  },
  {
    id: 8,
    timestamp: "02/03/2026 10:15",
    user: "yfatihi.pro@gmail.com",
    action: "SYNC",
    entity: "Invoices",
    entityId: "–",
    details: "73 invoices synced",
  },
];

/* =========================================================================== */
/* Shared table styles                                                           */
/* =========================================================================== */

const TH: React.CSSProperties = {
  padding: "9px 14px",
  textAlign: "left",
  color: "#888",
  fontWeight: 600,
  fontSize: 11,
  textTransform: "uppercase",
  letterSpacing: 0.5,
  whiteSpace: "nowrap",
  borderBottom: "1px solid #e5e7eb",
  background: "#fafafa",
};

const TD: React.CSSProperties = {
  padding: "10px 14px",
  fontSize: 12,
  borderBottom: "1px solid #f0f0f0",
  verticalAlign: "middle",
};

const FIELD_WRAP: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 4,
  marginBottom: 12,
};

const LABEL: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 600,
};

/* =========================================================================== */
/* Small helpers                                                                 */
/* =========================================================================== */

const LinkIcon: React.FC = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
    <path
      d="M5.2 2H2.5C1.67 2 1 2.67 1 3.5v7C1 11.33 1.67 12 2.5 12h7c.83 0 1.5-.67 1.5-1.5V7.8"
      stroke="#f97316"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    <path
      d="M7 1h5v5"
      stroke="#f97316"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="6"
      y1="7"
      x2="12"
      y2="1"
      stroke="#f97316"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
  </svg>
);

/* Role → Tag */
const RoleBadge: React.FC<{ role: TAdminUser["role"] }> = ({ role }) => (
  <Tag color={role === "superadmin" ? "orange" : "purple"}>
    {role === "superadmin" ? "SUPERADMIN" : "USER"}
  </Tag>
);

/* Product status → Tag */
const PRODUCT_STATUS_COLOR: Record<
  TAdminProduct["status"],
  React.ComponentProps<typeof Tag>["color"]
> = {
  ACTIVATED: "black",
  REDEEMED: "purple",
  OUTDATED: "grey",
  EXPIRED: "grey",
};
const ProductStatusTag: React.FC<{ status: TAdminProduct["status"] }> = ({
  status,
}) => <Tag color={PRODUCT_STATUS_COLOR[status]}>{status}</Tag>;

/* Invoice status → Tag */
const INVOICE_STATUS: Record<
  TAdminInvoice["status"],
  { color: React.ComponentProps<typeof Tag>["color"]; label: string }
> = {
  paid: { color: "mint", label: "PAID" },
  has_refund: { color: "orange", label: "HAS_REFUND" },
  refunded: { color: "pink", label: "REFUNDED" },
};
const InvoiceStatusTag: React.FC<{ status: TAdminInvoice["status"] }> = ({
  status,
}) => {
  const { color, label } = INVOICE_STATUS[status];
  return <Tag color={color}>{label}</Tag>;
};

/* Refunded yes/no → Tag */
const RefundedTag: React.FC<{ value: boolean }> = ({ value }) => (
  <Tag color={value ? "pink" : "mint"}>{value ? "YES" : "NO"}</Tag>
);

/* Product count → Badge */
const CountBadge: React.FC<{ count: number }> = ({ count }) => (
  <Badge>{count}</Badge>
);

/* Audit action → colored Tag */
const AUDIT_ACTION_COLOR: Record<
  string,
  React.ComponentProps<typeof Tag>["color"]
> = {
  UPDATE: "yellow",
  CREATE: "mint",
  DELETE: "pink",
  LOGIN: "grey",
  SYNC: "purple",
};
const AuditActionTag: React.FC<{ action: string }> = ({ action }) => (
  <Tag color={AUDIT_ACTION_COLOR[action] ?? "grey"}>{action}</Tag>
);

/* Activity dot */
const ACTIVITY_DOT_COLOR: Record<string, string> = {
  sync: "#3b82f6",
  create: "#22c55e",
  user: "#7c3aed",
  update: "#f59e0b",
  auth: "#9ca3af",
  delete: "#ef4444",
};
const ActivityDot: React.FC<{ type: string }> = ({ type }) => (
  <span
    style={{
      display: "inline-block",
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: ACTIVITY_DOT_COLOR[type] ?? "#9ca3af",
      flexShrink: 0,
      marginTop: 3,
    }}
  />
);

/* =========================================================================== */
/* Card shell                                                                    */
/* =========================================================================== */

const ManagementCard: React.FC<{
  title: string;
  actions: React.ReactNode;
  filters?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
}> = ({ title, actions, filters, children, footer }) => (
  <div
    style={{
      background: "white",
      border: "1px solid #e5e7eb",
      borderRadius: 8,
      overflow: "hidden",
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px 20px",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <h3 style={{ margin: 0, fontSize: 15, fontWeight: 700 }}>{title}</h3>
      <div style={{ display: "flex", gap: 8 }}>{actions}</div>
    </div>
    {filters && (
      <div
        style={{
          padding: "12px 20px",
          borderBottom: "1px solid #e5e7eb",
          display: "flex",
          gap: 10,
        }}
      >
        {filters}
      </div>
    )}
    <div style={{ overflowX: "auto" }}>{children}</div>
    {footer && (
      <div
        style={{
          padding: "12px 20px",
          borderTop: "1px solid #e5e7eb",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {footer}
      </div>
    )}
  </div>
);

/* =========================================================================== */
/* Modals                                                                        */
/* =========================================================================== */

const EditUserModal: React.FC<{
  open: boolean;
  user: Partial<TAdminUser>;
  onClose: () => void;
  isCreate?: boolean;
}> = ({ open, user, onClose, isCreate = false }) => {
  const [email, setEmail] = useState(user.email ?? "");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<TAdminUser["role"]>(user.role ?? "user");

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={isCreate ? "Create User" : "Edit User"}
      footer={
        <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
          <Button variant="primary" size="sm" onClick={onClose}>
            Save
          </Button>
          <Button variant="outline" size="sm" onClick={onClose}>
            Cancel
          </Button>
        </div>
      }
    >
      <div style={FIELD_WRAP}>
        <label style={LABEL}>Email</label>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div style={FIELD_WRAP}>
        <label style={LABEL}>Password</label>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Leave blank to keep current password"
        />
        {!isCreate && (
          <span style={{ fontSize: 11, color: "#9ca3af" }}>
            Leave blank to keep existing password (for updates)
          </span>
        )}
      </div>
      <div style={FIELD_WRAP}>
        <label style={LABEL}>Role</label>
        <select
          className="drp-input"
          value={role}
          onChange={(e) => setRole(e.target.value as TAdminUser["role"])}
        >
          <option value="superadmin">Superadmin</option>
          <option value="user">User</option>
        </select>
      </div>
    </Modal>
  );
};

const EditInvoiceModal: React.FC<{
  open: boolean;
  invoice: TAdminInvoice | null;
  onClose: () => void;
}> = ({ open, invoice, onClose }) => {
  if (!invoice) return null;

  const fields: { label: string; key: keyof TAdminInvoice; type?: string }[] = [
    { label: "User ID", key: "userId" },
    { label: "Invoice UUID", key: "uuid" },
    { label: "Total Amount", key: "totalAmount" },
    { label: "Invoice Date", key: "updatedFull" },
    { label: "Subtotal", key: "subtotal" },
    { label: "Tax", key: "tax" },
    { label: "Coupon Discount", key: "couponDiscount" },
    { label: "Plan Discount", key: "planDiscount" },
    { label: "Total Discount (computed)", key: "totalDiscount" },
    { label: "Total Refunded", key: "totalRefunded" },
    { label: "Payment Method", key: "paymentMethod" },
    { label: "Card Type", key: "cardType" },
    { label: "Card Last 4", key: "cardLast4" },
    { label: "Currency", key: "currency" },
  ];

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Edit Invoice"
      footer={
        <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
          <Button variant="primary" size="sm" onClick={onClose}>
            Save
          </Button>
          <Button variant="outline" size="sm" onClick={onClose}>
            Cancel
          </Button>
        </div>
      }
    >
      <p
        style={{
          fontSize: 11,
          color: "#9ca3af",
          marginTop: 0,
          marginBottom: 14,
        }}
      >
        Created: {invoice.createdFull} | Updated: {invoice.updatedFull}
      </p>
      <div style={FIELD_WRAP}>
        <label style={LABEL}>Status</label>
        <select className="drp-input" defaultValue={invoice.status}>
          <option value="paid">Paid</option>
          <option value="has_refund">Has Refund</option>
          <option value="refunded">Refunded</option>
        </select>
      </div>
      {fields.map(({ label, key }) => (
        <div key={key} style={FIELD_WRAP}>
          <label style={LABEL}>{label}</label>
          <Input defaultValue={String(invoice[key])} />
        </div>
      ))}
    </Modal>
  );
};

/* =========================================================================== */
/* Panels                                                                        */
/* =========================================================================== */

const PAGE_SIZE = 5;

const UsersPanel: React.FC = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [editingUser, setEditingUser] = useState<Partial<TAdminUser> | null>(
    null,
  );
  const [isCreate, setIsCreate] = useState(false);

  const filtered = USERS.filter(
    (u) => !search || u.email.toLowerCase().includes(search.toLowerCase()),
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const openEdit = (user: TAdminUser) => {
    setIsCreate(false);
    setEditingUser(user);
  };
  const openCreate = () => {
    setIsCreate(true);
    setEditingUser({});
  };

  return (
    <>
      <EditUserModal
        open={editingUser !== null}
        user={editingUser ?? {}}
        isCreate={isCreate}
        onClose={() => setEditingUser(null)}
      />
      <ManagementCard
        title="User Management"
        actions={
          <>
            <Button variant="outline" size="sm">
              Sync Users
            </Button>
            <Button variant="outline" size="sm">
              Delete All
            </Button>
            <Button variant="primary" size="sm" onClick={openCreate}>
              Create User
            </Button>
          </>
        }
        filters={
          <Input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            placeholder="Search users by email..."
          />
        }
        footer={
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        }
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ ...TH, width: 36 }}>
                <input type="checkbox" />
              </th>
              <th style={TH}>ID</th>
              <th style={TH}>EMAIL</th>
              <th style={TH}>ROLE</th>
              <th style={TH}>CREATED AT</th>
              <th style={TH}>LAST SYNC</th>
              <th style={TH}>UPDATED</th>
              <th style={TH}>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {paged.map((user) => (
              <tr key={user.id}>
                <td style={TD}>
                  <input type="checkbox" />
                </td>
                <td style={TD}>{user.id}</td>
                <td style={TD}>{user.email}</td>
                <td style={TD}>
                  <RoleBadge role={user.role} />
                </td>
                <td style={TD}>{user.createdAt}</td>
                <td style={TD}>{user.lastSync}</td>
                <td style={TD}>{user.updatedAt}</td>
                <td style={TD}>
                  <div style={{ display: "flex", gap: 6 }}>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openEdit(user)}
                    >
                      Edit
                    </Button>
                    <Button variant="danger" size="sm">
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ManagementCard>
    </>
  );
};

const ProductsPanel: React.FC = () => {
  const [search, setSearch] = useState("");
  const [userFilter, setUserFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [page, setPage] = useState(1);

  const allUsers = Array.from(new Set(PRODUCTS.map((p) => p.user)));

  const filtered = PRODUCTS.filter((p) => {
    if (search && !p.name.toLowerCase().includes(search.toLowerCase()))
      return false;
    if (userFilter !== "all" && p.user !== userFilter) return false;
    if (statusFilter !== "all" && p.status !== statusFilter) return false;
    return true;
  });
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <ManagementCard
      title="Product Management"
      actions={
        <>
          <Button variant="outline" size="sm">
            Sync Products
          </Button>
          <Button variant="outline" size="sm">
            Delete All
          </Button>
          <Button variant="primary" size="sm">
            Create Product
          </Button>
        </>
      }
      filters={
        <>
          <Input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            placeholder="Search products..."
          />
          <select
            className="drp-input"
            value={userFilter}
            onChange={(e) => {
              setUserFilter(e.target.value);
              setPage(1);
            }}
            style={{ width: 200 }}
          >
            <option value="all">All Users</option>
            {allUsers.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>
          <select
            className="drp-input"
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setPage(1);
            }}
            style={{ width: 160 }}
          >
            <option value="all">All Statuses</option>
            <option value="ACTIVATED">Activated</option>
            <option value="REDEEMED">Redeemed</option>
            <option value="OUTDATED">Outdated</option>
            <option value="EXPIRED">Expired</option>
          </select>
        </>
      }
      footer={
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      }
    >
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ ...TH, width: 36 }}>
              <input type="checkbox" />
            </th>
            <th style={TH}>ID</th>
            <th style={TH}>USER</th>
            <th style={TH}>NAME</th>
            <th style={TH}>URL</th>
            <th style={TH}>STATUS</th>
            <th style={TH}>PURCHASE DATE</th>
            <th style={TH}>REFUND DEADLINE</th>
            <th style={TH}>PLAN</th>
            <th style={TH}>REFUNDED</th>
            <th style={TH}>CREATED</th>
            <th style={TH}>UPDATED</th>
            <th style={TH}>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {paged.map((p) => (
            <tr key={p.id}>
              <td style={TD}>
                <input type="checkbox" />
              </td>
              <td style={TD}>{p.id}</td>
              <td
                style={{
                  ...TD,
                  maxWidth: 140,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {p.user}
              </td>
              <td style={TD}>{p.name}</td>
              <td style={TD}>
                <a
                  href="#"
                  style={{
                    display: "inline-flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                    textDecoration: "none",
                    color: "#f97316",
                    fontSize: 11,
                  }}
                >
                  <LinkIcon />
                  <span>Details</span>
                </a>
              </td>
              <td style={TD}>
                <ProductStatusTag status={p.status} />
              </td>
              <td style={TD}>{p.purchaseDate}</td>
              <td style={TD}>{p.refundDeadline ?? "N/A"}</td>
              <td style={TD}>{p.plan ?? "–"}</td>
              <td style={TD}>
                <RefundedTag value={p.refunded} />
              </td>
              <td style={TD}>{p.created}</td>
              <td style={TD}>{p.updated}</td>
              <td style={TD}>
                <div style={{ display: "flex", gap: 6 }}>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                  <Button variant="danger" size="sm">
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </ManagementCard>
  );
};

const InvoicesPanel: React.FC = () => {
  const [search, setSearch] = useState("");
  const [userFilter, setUserFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [page, setPage] = useState(1);
  const [editingInvoice, setEditingInvoice] = useState<TAdminInvoice | null>(
    null,
  );

  const filtered = INVOICES.filter((inv) => {
    if (search && !inv.uuid.toLowerCase().includes(search.toLowerCase()))
      return false;
    if (statusFilter !== "all" && inv.status !== statusFilter) return false;
    return true;
  });
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <>
      <EditInvoiceModal
        open={editingInvoice !== null}
        invoice={editingInvoice}
        onClose={() => setEditingInvoice(null)}
      />
      <ManagementCard
        title="Invoice Management"
        actions={
          <>
            <Button variant="outline" size="sm">
              Sync Invoices
            </Button>
            <Button variant="outline" size="sm">
              Delete All
            </Button>
            <Button variant="primary" size="sm">
              Create Invoice
            </Button>
          </>
        }
        filters={
          <>
            <Input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              placeholder="Search invoices..."
            />
            <select
              className="drp-input"
              value={userFilter}
              onChange={(e) => setUserFilter(e.target.value)}
              style={{ width: 200 }}
            >
              <option value="all">All Users</option>
              <option value="1">yfatihi.pro@gmail.com</option>
            </select>
            <select
              className="drp-input"
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setPage(1);
              }}
              style={{ width: 160 }}
            >
              <option value="all">All Statuses</option>
              <option value="paid">Paid</option>
              <option value="has_refund">Has Refund</option>
              <option value="refunded">Refunded</option>
            </select>
          </>
        }
        footer={
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        }
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={TH}>INVOICE UUID</th>
              <th style={TH}>URL</th>
              <th style={TH}>STATUS</th>
              <th style={TH}>TOTAL AMOUNT</th>
              <th style={TH}>PRODUCTS</th>
              <th style={TH}>INVOICE DATE</th>
              <th style={TH}>PAYMENT</th>
              <th style={TH}>REFUNDED</th>
              <th style={TH}>CREATED</th>
              <th style={TH}>UPDATED</th>
              <th style={TH}>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {paged.map((inv) => (
              <tr key={inv.uuid}>
                <td style={{ ...TD, maxWidth: 180 }}>
                  <span
                    style={{
                      display: "block",
                      fontSize: 11,
                      lineHeight: 1.4,
                      wordBreak: "break-all",
                    }}
                  >
                    {inv.uuid}
                  </span>
                </td>
                <td style={TD}>
                  <span
                    style={{ display: "block", fontSize: 11, color: "#9ca3af" }}
                  >
                    {inv.urlDomain}
                  </span>
                  <a
                    href="#"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 3,
                      fontSize: 11,
                      color: "#f97316",
                      textDecoration: "none",
                    }}
                  >
                    <LinkIcon /> View
                  </a>
                </td>
                <td style={TD}>
                  <InvoiceStatusTag status={inv.status} />
                </td>
                <td style={TD}>${inv.totalAmount.toFixed(2)}</td>
                <td style={TD}>
                  <CountBadge count={inv.products} />
                </td>
                <td style={TD}>{inv.invoiceDate}</td>
                <td style={TD}>
                  <span style={{ display: "block", fontSize: 12 }}>
                    {inv.paymentMethod}
                  </span>
                  <span style={{ fontSize: 11, color: "#9ca3af" }}>
                    ****{inv.cardLast4}
                  </span>
                </td>
                <td style={TD}>{inv.refunded}</td>
                <td style={TD}>{inv.created}</td>
                <td style={TD}>{inv.updated}</td>
                <td style={TD}>
                  <div style={{ display: "flex", gap: 6 }}>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setEditingInvoice(inv)}
                    >
                      Edit
                    </Button>
                    <Button variant="danger" size="sm">
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ManagementCard>
    </>
  );
};

const ActivityPanel: React.FC = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(ACTIVITY_LOG.length / PAGE_SIZE));
  const paged = ACTIVITY_LOG.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <ManagementCard
      title="Activity Log"
      actions={
        <Button variant="outline" size="sm">
          Clear Log
        </Button>
      }
      footer={
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      }
    >
      <div style={{ padding: "8px 0" }}>
        {paged.map((entry) => (
          <div
            key={entry.id}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 12,
              padding: "10px 20px",
              borderBottom: "1px solid #f5f5f5",
            }}
          >
            <ActivityDot type={entry.type} />
            <div style={{ flex: 1, fontSize: 13 }}>
              <span style={{ fontWeight: 600, color: "var(--drp-purple)" }}>
                {entry.user}
              </span>
              <span style={{ color: "#374151" }}> — {entry.action}</span>
            </div>
            <span style={{ fontSize: 11, color: "#9ca3af", flexShrink: 0 }}>
              {entry.time}
            </span>
          </div>
        ))}
      </div>
    </ManagementCard>
  );
};

const AuditTrailPanel: React.FC = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(AUDIT_LOG.length / PAGE_SIZE));
  const paged = AUDIT_LOG.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <ManagementCard
      title="Audit Trail"
      actions={
        <Button variant="outline" size="sm">
          Export CSV
        </Button>
      }
      footer={
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      }
    >
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={TH}>TIMESTAMP</th>
            <th style={TH}>USER</th>
            <th style={TH}>ACTION</th>
            <th style={TH}>ENTITY</th>
            <th style={TH}>ID</th>
            <th style={TH}>DETAILS</th>
          </tr>
        </thead>
        <tbody>
          {paged.map((entry) => (
            <tr key={entry.id}>
              <td style={{ ...TD, whiteSpace: "nowrap", fontSize: 11 }}>
                {entry.timestamp}
              </td>
              <td
                style={{
                  ...TD,
                  maxWidth: 160,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {entry.user}
              </td>
              <td style={TD}>
                <AuditActionTag action={entry.action} />
              </td>
              <td style={TD}>{entry.entity}</td>
              <td style={{ ...TD, fontFamily: "monospace", fontSize: 11 }}>
                {entry.entityId}
              </td>
              <td style={{ ...TD, color: "#6b7280", fontSize: 11 }}>
                {entry.details || "–"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </ManagementCard>
  );
};

/* =========================================================================== */
/* Main component                                                                */
/* =========================================================================== */

const TAB_ITEMS = [
  { key: "users", label: "Users" },
  { key: "products", label: "Products" },
  { key: "invoices", label: "Invoices" },
  { key: "activity", label: "Activity" },
  { key: "audit-trail", label: "Audit Trail" },
];

export interface ToolsTrackerAdminPanelProps {
  defaultTab?: AdminTab;
}

export const ToolsTrackerAdminPanel: React.FC<ToolsTrackerAdminPanelProps> = ({
  defaultTab = "users",
}) => {
  const [activeTab, setActiveTab] = useState<AdminTab>(defaultTab);

  return (
    <div className="drp-app-shell" style={{ display: "flex", height: "100vh" }}>
      <ToolsTrackerSidebar activeId="admin-panel" />
      <div
        className="main-content"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          minWidth: 0,
        }}
      >
        <TopBar title="Admin Panel" />
        <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px" }}>
          <div style={{ marginBottom: 18 }}>
            <Tabs
              items={TAB_ITEMS}
              activeKey={activeTab}
              onChange={(key) => setActiveTab(key as AdminTab)}
            />
          </div>

          {activeTab === "users" && <UsersPanel />}
          {activeTab === "products" && <ProductsPanel />}
          {activeTab === "invoices" && <InvoicesPanel />}
          {activeTab === "activity" && <ActivityPanel />}
          {activeTab === "audit-trail" && <AuditTrailPanel />}
        </div>
        <ToolsTrackerFooter />
      </div>
    </div>
  );
};
