import type { ReactNode } from "react";
import { Header } from "./Header";

interface PageLayoutProps {
  children: ReactNode;
  maxWidth?: "default" | "wide" | "full";
  breadcrumbs?: ReactNode;
}

export function PageLayout({
  children,
  maxWidth = "default",
  breadcrumbs,
}: PageLayoutProps) {
  const containerClass =
    maxWidth === "full"
      ? "w-full px-4 sm:px-6 lg:px-8"
      : maxWidth === "wide"
      ? "container max-w-7xl mx-auto px-6"
      : "container mx-auto px-6";

  return (
    <div className="min-h-screen flex flex-col bg-muted/30">
      <Header breadcrumbs={breadcrumbs} />
      <main className={`flex-1 ${containerClass} py-8`}>{children}</main>
    </div>
  );
}
