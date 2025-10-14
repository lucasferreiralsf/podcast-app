import type { PodcastListItem } from "../entities/podcast.entity";

export interface IPodcastRepository {
  getTopPodcasts(): Promise<PodcastListItem[]>;
}
