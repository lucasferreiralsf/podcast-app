export interface ITunesRSSFeed {
  feed: {
    entry: ITunesRSSEntry[];
  };
}

export interface ITunesRSSEntry {
  'im:name': { label: string };
  'im:image': Array<{ label: string; attributes: { height: string } }>;
  summary: { label: string };
  'im:artist': { label: string };
  id: {
    attributes: {
      'im:id': string;
    };
  };
  'im:releaseDate': { label: string; attributes?: { label: string } };
}

export interface ITunesLookupResponse {
  resultCount: number;
  results: ITunesResult[];
}

export interface ITunesResult {
  wrapperType: 'track' | 'podcastEpisode';
  kind?: string;
  collectionId?: number;
  trackId?: number;
  artistName?: string;
  collectionName?: string;
  trackName?: string;
  collectionCensoredName?: string;
  trackCensoredName?: string;
  collectionViewUrl?: string;
  feedUrl?: string;
  trackViewUrl?: string;
  artworkUrl30?: string;
  artworkUrl60?: string;
  artworkUrl100?: string;
  artworkUrl600?: string;
  collectionPrice?: number;
  trackPrice?: number;
  releaseDate?: string;
  collectionExplicitness?: string;
  trackExplicitness?: string;
  trackCount?: number;
  country?: string;
  currency?: string;
  primaryGenreName?: string;
  contentAdvisoryRating?: string;
  genreIds?: string[];
  genres?: string[];
  description?: string;
  shortDescription?: string;
  trackTimeMillis?: number;
  episodeUrl?: string;
  episodeFileExtension?: string;
  episodeContentType?: string;
  closedCaptioning?: string;
  previewUrl?: string;
}
