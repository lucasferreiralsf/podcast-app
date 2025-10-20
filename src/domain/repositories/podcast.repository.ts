import type {
  PodcastEntity,
  PodcastListItem,
} from "../entities/podcast.entity";
import type { EpisodeEntity } from "../entities/episode.entity";

export interface IPodcastRepository {
  getTopPodcasts(): Promise<PodcastListItem[]>;

  getPodcastById(podcastId: string): Promise<{
    podcast: PodcastEntity;
    episodes: EpisodeEntity[];
  }>;

  getEpisodeById(podcastId: string, episodeId: string): Promise<EpisodeEntity>;
}
