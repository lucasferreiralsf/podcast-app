import type { IPodcastRepository } from "@/domain/repositories/podcast.repository";
import type {
  PodcastEntity,
  PodcastListItem,
} from "@/domain/entities/podcast.entity";
import type { EpisodeEntity } from "@/domain/entities/episode.entity";
import { itunesClient } from "../clients/itunes.client";
import type {
  ITunesResult,
  ITunesRSSEntry,
} from "@/domain/entities/itunes.entity";

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

  async getPodcastById(podcastId: string): Promise<{
    podcast: PodcastEntity;
    episodes: EpisodeEntity[];
  }> {
    try {
      const data = await itunesClient.getPodcastById(podcastId);

      if (
        data.resultCount === 0 ||
        !data.results ||
        data.results.length === 0
      ) {
        throw new Error(`Podcast not found: ${podcastId}`);
      }

      const podcastData = data.results[0];
      const podcast = this.mapResultToPodcastEntity(podcastData, podcastId);

      const episodes = data.results
        .slice(1)
        .filter((result) => result.wrapperType === "podcastEpisode")
        .map((result) => this.mapResultToEpisodeEntity(result));

      return { podcast, episodes };
    } catch (error) {
      console.warn("Fetch failed", {
        podcastId,
        error: (error as Error).message,
      });

      throw error;
    }
  }

  async getEpisodeById(
    podcastId: string,
    episodeId: string
  ): Promise<EpisodeEntity> {
    const { episodes } = await this.getPodcastById(podcastId);

    const episode = episodes.find(
      (ep) => ep.id === episodeId || String(ep.trackId) === episodeId
    );

    if (!episode) {
      const error = new Error(`Episode not found: ${episodeId}`);
      console.error("Episode not found", error, { podcastId, episodeId });
      throw error;
    }

    return episode;
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

  private mapResultToPodcastEntity(
    result: ITunesResult,
    podcastId: string
  ): PodcastEntity {
    return {
      id: podcastId,
      name: result.collectionName || result.trackName || "Unknown Podcast",
      artist: result.artistName || "Unknown Artist",
      image:
        result.artworkUrl600 ||
        result.artworkUrl100 ||
        result.artworkUrl60 ||
        "",
      summary:
        result.description ||
        result.shortDescription ||
        "No description available",
      releaseDate: result.releaseDate,
    };
  }

  private mapResultToEpisodeEntity(result: ITunesResult): EpisodeEntity {
    return {
      id: String(result.trackId || Date.now()),
      trackId: result.trackId || 0,
      title: result.trackName || "Unknown Episode",
      description:
        result.description ||
        result.shortDescription ||
        "No description available",
      releaseDate: result.releaseDate || new Date().toISOString(),
      duration: result.trackTimeMillis || 0,
      audioUrl: result.episodeUrl || result.previewUrl || "",
    };
  }
}

export const podcastRepository = new PodcastRepositoryImpl();
