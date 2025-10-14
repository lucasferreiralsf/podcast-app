import type { PodcastListItem } from '@/domain/entities/podcast.entity';
import { PodcastCard } from './PodcastCard';

interface PodcastListProps {
  podcasts: PodcastListItem[];
}

export function PodcastList({ podcasts }: PodcastListProps) {
  if (podcasts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">
          No podcasts found matching your search.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {podcasts.map((podcast) => (
        <PodcastCard key={podcast.id} podcast={podcast} />
      ))}
    </div>
  );
}
