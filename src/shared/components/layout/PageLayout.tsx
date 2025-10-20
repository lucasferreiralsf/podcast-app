import { Outlet, useMatches } from "react-router";
import { Header } from "./Header";
import { Breadcrumbs } from "./Breadcrumbs";
import { useBreadcrumbs } from "@/shared/hooks/useBreadcrumbs";

interface RouteHandle {
  maxWidth?: "default" | "wide" | "full";
}

export function PageLayout() {
  const matches = useMatches();
  const breadcrumbItems = useBreadcrumbs();

  const currentMatch = matches[matches.length - 1];
  const maxWidth = (currentMatch?.handle as RouteHandle)?.maxWidth || "default";

  const containerClass =
    maxWidth === "full"
      ? "w-full px-4 sm:px-6 lg:px-8"
      : maxWidth === "wide"
      ? "container max-w-7xl mx-auto px-6"
      : "container mx-auto px-6";

  return (
    <div className="min-h-screen flex flex-col bg-muted/30">
      <Header breadcrumbs={<Breadcrumbs items={breadcrumbItems} />} />
      <main className={`flex-1 ${containerClass} py-8`}>
        <Outlet />
      </main>
    </div>
  );
}
