import React from "react";
import { Pictogram } from "../Pictogram/Pictogram";

type PaginationVariant = "dark" | "transparent";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  variant?: PaginationVariant;
  className?: string;
}

/**
 * Page navigation control for paginated lists and tables — use `variant="dark"` on surfaces with a dark background, and keep `totalPages` accurate to prevent dead-end states.
 * @example
 * <Pagination
 *   currentPage={page}
 *   totalPages={totalPages}
 *   onPageChange={(p) => setPage(p)}
 * />
 */
export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  variant,
  className = "",
}: PaginationProps) {
  const containerClasses = [
    "drp-pagination",
    variant && `drp-pagination--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Pagination">
      <div className={containerClasses}>
        <button
          className="drp-pagination__btn"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          aria-label="Go to previous page"
        >
          <Pictogram name="Left arrow" size={20} aria-hidden={true} />
        </button>
        {pages.map((page) => (
          <button
            key={page}
            className={`drp-pagination__page ${page === currentPage ? "drp-pagination__page--active" : ""}`}
            onClick={() => onPageChange(page)}
            aria-label={`Page ${page}`}
            aria-current={page === currentPage ? "page" : undefined}
          >
            {page}
          </button>
        ))}
        <button
          className="drp-pagination__btn"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          aria-label="Go to next page"
        >
          <Pictogram name="Right" size={20} aria-hidden={true} />
        </button>
      </div>
    </nav>
  );
}
