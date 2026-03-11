export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Landmark navigation trail showing the user's location within the app hierarchy — always include an `href` on all items except the last (current page).
 * @example
 * <Breadcrumbs
 *   items={[
 *     { label: "Dashboard", href: "/dashboard" },
 *     { label: "Patients", href: "/patients" },
 *     { label: "Maria Gonzalez" },
 *   ]}
 * />
 */
export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  const lastIndex = items.length - 1;
  return (
    <nav className={`drp-breadcrumbs ${className}`} aria-label="Breadcrumb">
      {items.map((item, i) => (
        <span key={i}>
          {i > 0 && (
            <span className="drp-breadcrumbs__sep" aria-hidden="true">
              /
            </span>
          )}
          {item.href && i < lastIndex ? (
            <a className="drp-breadcrumbs__link" href={item.href}>
              {item.label}
            </a>
          ) : (
            <span
              className="drp-breadcrumbs__current"
              aria-current={i === lastIndex ? "page" : undefined}
            >
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
