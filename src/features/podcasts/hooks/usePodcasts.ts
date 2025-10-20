import { useSuspenseQuery } from '@tanstack/react-query';
import { podcastRepository } from '@/infrastructure/api/podcast-repository.impl';

export function usePodcasts() {
  return useSuspenseQuery({
    queryKey: ['podcasts', 'top'],
    queryFn: async () => {
      console.info('Fetching podcasts via React Query');
      return podcastRepository.getTopPodcasts();
    },
    staleTime: 24 * 60 * 60 * 1000, 
    gcTime: 24 * 60 * 60 * 1000, 
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
}
