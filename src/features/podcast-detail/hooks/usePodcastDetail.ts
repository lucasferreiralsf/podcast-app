import { useSuspenseQuery } from "@tanstack/react-query";
import { podcastRepository } from "@/infrastructure/api/podcast-repository.impl";

export function usePodcastDetail(podcastId: string) {
  return useSuspenseQuery({
    queryKey: ["podcast", podcastId],
    queryFn: async () => {
      return podcastRepository.getPodcastById(podcastId);
    },
    staleTime: 24 * 60 * 60 * 1000,
    gcTime: 24 * 60 * 60 * 1000,
    retry: 3,
  });
}
