export interface EpisodeEntity {
  id: string;
  trackId: number;
  title: string;
  description: string;
  releaseDate: string;
  duration: number;
  audioUrl: string;
}

export interface EpisodeListItem {
  id: string;
  trackId: number;
  title: string;
  releaseDate: string;
  duration: number;
}
