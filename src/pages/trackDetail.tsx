import React from "react";
import { useLocation } from "react-router";
import { getArtistsNames, getSmallestSizeImage } from "../utils/dataHandling";
import AlbumCard from "../components/albumCard";
import TrackCard from "../components/commonBriefCard";
import { Track } from "../types/tracks";

export default function TrackDetail() {
  const {
    track: {
      album: { images } = {},
      name,
      artists,
      preview_url,
      explicit,
      popularity,
    } = {},
  } = useLocation()?.state as { track: Track };
  const imageUrl = getSmallestSizeImage(images, 640 || 300);
  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center w-full">
        <TrackCard
          title={name}
          explicit={explicit}
          imageUrl={imageUrl}
          subtitle={getArtistsNames(artists)}
          popularity={popularity}
          previewUrl={preview_url}
        />
        <AlbumCard />
      </div>
    </div>
  );
}