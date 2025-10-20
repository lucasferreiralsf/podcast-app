import { Headphones } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router";
import { LoadingIndicator } from "./LoadingIndicator";

interface HeaderProps {
  breadcrumbs?: ReactNode;
}

export function Header({ breadcrumbs }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background shadow-sm">
      <div className="container flex h-16 items-center justify-between px-6 gap-4">
        <div className="flex items-center gap-6 min-w-0 flex-1">
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-bold text-primary hover:text-primary/80 transition-colors group flex-shrink-0"
          >
            <Headphones className="h-6 w-6 group-hover:scale-110 transition-transform" />
            <span>Podcaster</span>
          </Link>

          {breadcrumbs && (
            <div className="border-l pl-6 min-w-0 flex-1">{breadcrumbs}</div>
          )}
        </div>

        <LoadingIndicator />
      </div>
    </header>
  );
}
