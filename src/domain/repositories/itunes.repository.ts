import type {
  ITunesLookupResponse,
  ITunesRSSFeed,
} from "../entities/itunes.entity";

export interface IItunesRepository {
  getTopPodcasts(): Promise<ITunesRSSFeed>;

  getPodcastById(podcastId: string): Promise<ITunesLookupResponse>;
}
