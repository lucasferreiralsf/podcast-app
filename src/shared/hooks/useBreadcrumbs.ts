import { useIsFetching, useQueryClient } from "@tanstack/react-query";
import { useMatches } from "react-router";
import { useMemo } from "react";

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface Episode {
  id: string;
  trackId: number;
  title: string;
}

export function useBreadcrumbs(): BreadcrumbItem[] {
  const matches = useMatches();
  const queryClient = useQueryClient();
  const isFetching = useIsFetching();

  return useMemo(() => {
    const breadcrumbs: BreadcrumbItem[] = [];

    const currentMatch = matches[matches.length - 1];
    const params = currentMatch.params;

    if (isFetching) {
      return breadcrumbs;
    }

    if (params.podcastId) {
      const podcastData = queryClient.getQueryData<{
        podcast: { name: string; id: string };
        episodes: Episode[];
      }>(["podcast", params.podcastId]);

      if (podcastData) {
        breadcrumbs.push({
          label: podcastData.podcast.name,
          path: `/podcast/${params.podcastId}`,
        });
      }
    }

    if (params.podcastId && params.episodeId) {
      const podcastData = queryClient.getQueryData<{
        podcast: { name: string; id: string };
        episodes: Episode[];
      }>(["podcast", params.podcastId]);

      if (podcastData) {
        const episode = podcastData.episodes.find(
          (ep) =>
            String(ep.trackId) === params.episodeId ||
            ep.id === params.episodeId
        );

        if (episode) {
          breadcrumbs.push({
            label: episode.title,
            path: `/podcast/${params.podcastId}/episode/${params.episodeId}`,
          });
        }
      }
    }

    return breadcrumbs;
  }, [matches, queryClient, isFetching]);
}
