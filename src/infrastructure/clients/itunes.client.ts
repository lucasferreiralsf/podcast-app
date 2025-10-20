import type {
  ITunesLookupResponse,
  ITunesRSSFeed,
} from "@/domain/entities/itunes.entity";
import type { IItunesRepository } from "@/domain/repositories/itunes.repository";

export class ITunesClient implements IItunesRepository {
  private readonly TOP_PODCASTS_URL =
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";
  private readonly LOOKUP_URL = "https://itunes.apple.com/lookup";

  async getTopPodcasts(): Promise<ITunesRSSFeed> {
    const response = await fetch(this.TOP_PODCASTS_URL);

    if (!response.ok) {
      throw new Error(
        `iTunes API failed: ${response.status} ${response.statusText}`
      );
    }

    const data: ITunesRSSFeed = await response.json();

    if (!data.feed || !data.feed.entry) {
      throw new Error("Invalid response structure from iTunes API");
    }

    return data;
  }

  async getPodcastById(podcastId: string): Promise<ITunesLookupResponse> {
    const url = `https://api.allorigins.win/get?url=${encodeURIComponent(
      `${this.LOOKUP_URL}?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`
    )}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `iTunes API failed: ${response.status} ${response.statusText}`
      );
    }

    const data: ITunesLookupResponse = JSON.parse(
      (await response.json()).contents
    );

    return data;
  }
}

export const itunesClient = new ITunesClient();
