export type Profile = {
  images: Image[];
  country: string;
  display_name: string;
  email: string;
};
export type Track = {
  album: Album;
  name: string;
  artists: Artist[];
  preview_url: string | null;
  explicit: boolean;
  popularity: number;
};

export type Album = {
  images: Image[];
  name: string;
};

export type Artist = {
  id: string;
  external_urls: ExternalUrls;
  href: string;
  type: string;
  uri: string;
  name: string;
  images?: Image[];
  popularity?: number;
  genres?: string[];
};

export type Playlist = {
  name: string;
  images: Image[];
  tracks: { href: string; total: number };
  owner: Owner;
  description: string;
};

export type Image = {
  height: number | null;
  width: number | null;
  url: string;
};

export type Owner = {
  display_name: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  type: string;
  uri: string;
};

export type ExternalUrls = {
  spotify: string;
};

export type AudioFeatures = {
  danceability: number;
  energy: number;
  key: number;
  loudness: number;
  mode: number;
  speechiness: number;
  acousticness: number;
  instrumentalness: number;
  liveness: number;
  valence: number;
  tempo: number;
  duration_ms: number;
  time_signature: number;
  track_href: string;
  analysis_url: string;
  type: string;
  id: string;
  uri: string;
};
