export interface PodcastEntity {
  id: string;
  name: string;
  artist: string;
  image: string;
  summary: string;
  releaseDate?: string;
}

export interface PodcastListItem {
  id: string;
  name: string;
  artist: string;
  image: string;
}
