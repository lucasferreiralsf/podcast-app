import { EpisodeDetailPage } from "@/features/episode-detail/EpisodeDetailPage";
import { PodcastDetailPage } from "@/features/podcast-detail/PodcastDetailPage";
import { PodcastsPage } from "@/features/podcasts/PodcastsPage";
import { NotFoundPage } from "@/shared/components/error/NotFoundPage";
import { PageLayout } from "@/shared/components/layout/PageLayout";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: PageLayout,
    handle: {
      crumb: () => "Home",
    },
    children: [
      {
        index: true,

        Component: PodcastsPage,
      },
      {
        path: "/podcast/:podcastId",
        handle: {
          maxWidth: "wide",
        },
        Component: PodcastDetailPage,
      },
      {
        path: "/podcast/:podcastId/episode/:episodeId",
        handle: {
          maxWidth: "wide",
        },
        Component: EpisodeDetailPage,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
