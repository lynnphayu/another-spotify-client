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
