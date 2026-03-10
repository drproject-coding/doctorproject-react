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
