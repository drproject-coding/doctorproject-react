import type { ReactNode } from "react";

export interface TableColumn<T> {
  key: string;
  header: string;
  render?: (row: T) => ReactNode;
}

export interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  className?: string;
  "aria-label"?: string;
  caption?: string;
}

/**
 * Data table with typed columns and optional custom cell rendering.
 *
 * For row actions (edit, delete, view), use `<Icon size="sm">` wrapped in a plain `<button>` —
 * never use "..." or text-label buttons. This keeps action columns compact and visually consistent.
 *
 * @example
 * // Status badge + icon action buttons
 * <Table
 *   aria-label="Recent appointments"
 *   columns={[
 *     { key: "patient", header: "Patient" },
 *     { key: "status", header: "Status", render: (row) => <Badge variant="mint">{row.status}</Badge> },
 *     { key: "actions", header: "Actions", render: (row) => (
 *       <div style={{ display: "flex", gap: 8 }}>
 *         <button aria-label="Edit" style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}>
 *           <Icon name="edit" size="sm" bg="var(--drp-yellow)" />
 *         </button>
 *         <button aria-label="Delete" style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}>
 *           <Icon name="trash" size="sm" bg="var(--drp-pink)" />
 *         </button>
 *       </div>
 *     )},
 *   ]}
 *   data={appointments}
 * />
 */
export function Table<T extends Record<string, any>>({
  columns,
  data,
  className = "",
  "aria-label": ariaLabel,
  caption,
}: TableProps<T>) {
  return (
    <div className="drp-table-scroll" style={{ overflowX: "auto" }}>
      <table className={`drp-table ${className}`} aria-label={ariaLabel}>
        {caption && <caption>{caption}</caption>}
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} scope="col">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {columns.map((col) => (
                <td key={col.key}>
                  {col.render ? col.render(row) : String(row[col.key] ?? "")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
