import { useMemo } from "react";
import type { PodcastListItem } from "@/domain/entities/podcast.entity";

export function useFilteredPodcasts(
  podcasts: PodcastListItem[],
  searchQuery: string
) {
  return useMemo(() => {
    if (!searchQuery.trim()) {
      return podcasts;
    }

    const query = searchQuery.toLowerCase().trim();

    return podcasts.filter((podcast) => {
      const matchesName = podcast.name.toLowerCase().includes(query);
      const matchesArtist = podcast.artist.toLowerCase().includes(query);
      return matchesName || matchesArtist;
    });
  }, [podcasts, searchQuery]);
}
