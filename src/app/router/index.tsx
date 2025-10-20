import { EpisodeDetailSkeleton } from "@/features/episode-detail/components/EpisodeDetailSkeleton";
import { EpisodeDetailPage } from "@/features/episode-detail/EpisodeDetailPage";
import { PodcastDetailSkeleton } from "@/features/podcast-detail/components/PodcastDetailSkeleton";
import { PodcastDetailPage } from "@/features/podcast-detail/PodcastDetailPage";
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
    path: "/podcast/:podcastId",
    element: (
      <Suspense
        fallback={
          <PageLayout>
            <PodcastDetailSkeleton />
          </PageLayout>
        }
      >
        <PodcastDetailPage />
      </Suspense>
    ),
  },
  {
    path: "/podcast/:podcastId/episode/:episodeId",
    element: (
      <Suspense
        fallback={
          <PageLayout>
            <EpisodeDetailSkeleton />
          </PageLayout>
        }
      >
        <EpisodeDetailPage />
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
