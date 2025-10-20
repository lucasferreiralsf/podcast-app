import { Link, useLocation } from "react-router";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
}

export function Breadcrumbs({ items = [] }: BreadcrumbsProps) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  if (isHome || items.length === 0) {
    return null;
  }

  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground overflow-hidden">
      {items.map((item, index) => (
        <div key={item.path} className="flex items-center space-x-2 min-w-0">
          {index > 0 && <ChevronRight className="h-4 w-4 flex-shrink-0" />}
          {index === items.length - 1 ? (
            <span className="font-medium text-foreground truncate">
              {item.label}
            </span>
          ) : (
            <Link
              to={item.path}
              className="hover:text-foreground transition-colors truncate"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
