import { PodcastListSkeleton } from "@/features/podcasts/components/PodcastListSkeleton";
import { PodcastsPage } from "@/features/podcasts/PodcastsPage";
import { NotFoundPage } from "@/shared/components/error/NotFoundPage";
import { PageLayout } from "@/shared/components/layout/PageLayout";
import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense
        fallback={
          <PageLayout>
            <PodcastListSkeleton />
          </PageLayout>
        }
      >
        <PodcastsPage />
      </Suspense>
    ),
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
