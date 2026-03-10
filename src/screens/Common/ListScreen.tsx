import React, { useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Table } from "../../components/Table";
import { Pagination } from "../../components/Pagination";
import { AppSidebar } from "../shared/AppSidebar";
import { AppFooter } from "../shared/AppFooter";

export interface ListScreenProps {
  title: string;
  subtitle?: string;
  activeId?: string;
  data: any[];
  columns: Array<{
    key: string;
    label: string;
    render?: (value: any) => React.ReactNode;
  }>;
  onAddClick?: () => void;
  onRowClick?: (row: any) => void;
  showSearch?: boolean;
  itemsPerPage?: number;
}

export const ListScreen: React.FC<ListScreenProps> = ({
  title,
  subtitle,
  activeId,
  data,
  columns,
  onAddClick,
  onRowClick,
  showSearch = true,
  itemsPerPage = 10,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = data.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIdx, startIdx + itemsPerPage);

  return (
    <div className="app-layout">
      <AppSidebar activeId={activeId} />
      <div className="main-content">
        <header className="topbar">
          <div className="topbar-left">
            <h1 className="topbar-title">{title}</h1>
          </div>
          {onAddClick && (
            <div className="topbar-right">
              <Button onClick={onAddClick} className="drp-btn drp-btn--primary">
                + Add New
              </Button>
            </div>
          )}
        </header>

        <div
          className="content"
          style={{ display: "flex", flexDirection: "column", gap: "var(--drp-space-6)" }}
        >
          {subtitle && <p className="drp-caption">{subtitle}</p>}

          {showSearch && (
            <Input
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
          )}

          <Table
            columns={columns.map((col) => ({
              key: col.key,
              header: col.label,
              render: col.render
                ? (row: any) => col.render!(row[col.key])
                : undefined,
            }))}
            data={paginatedData}
          />

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
        <AppFooter />
      </div>
    </div>
  );
};
