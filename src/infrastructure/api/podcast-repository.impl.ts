import type { ITunesRSSEntry } from "@/domain/entities/itunes.entity";
import type { PodcastListItem } from "@/domain/entities/podcast.entity";
import type { IPodcastRepository } from "@/domain/repositories/podcast.repository";
import { itunesClient } from "../clients/itunes.client";

export class PodcastRepositoryImpl implements IPodcastRepository {
  async getTopPodcasts(): Promise<PodcastListItem[]> {
    try {
      const data = await itunesClient.getTopPodcasts();

      const podcasts = data.feed.entry.map((entry) =>
        this.mapRSSEntryToPodcastListItem(entry)
      );

      return podcasts;
    } catch (error) {
      console.warn("Fetch failed", {
        error: (error as Error).message,
      });
      throw error;
    }
  }

  private mapRSSEntryToPodcastListItem(entry: ITunesRSSEntry): PodcastListItem {
    const images = entry["im:image"];
    const imageUrl =
      images && images.length > 0 ? images[images.length - 1].label : "";

    return {
      id: entry.id.attributes["im:id"],
      name: entry["im:name"].label,
      artist: entry["im:artist"].label,
      image: imageUrl,
    };
  }
}

export const podcastRepository = new PodcastRepositoryImpl();
