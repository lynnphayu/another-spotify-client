import React from "react";
import { useLocation } from "react-router";
import { Track } from "../types/tracks";
import { getArtistsNames, getSmallestSizeImage } from "../utils/dataHandling";
import AlbumCard from "./albumCard";
import TrackCard from "./commonBriefCard";

export default function TrackDetail() {
  const {
    track: {
      album: { images } = {},
      name,
      artists,
      preview_url,
      explicit,
      popularity,
    },
  } = useLocation()?.state as { track: Track };
  const imageUrl = getSmallestSizeImage(images, 640 || 300);
  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center w-full">
        <TrackCard
          data={{
            title: name,
            explicit,
            imageUrl,
            subtitle: getArtistsNames(artists),
            popularity,
            previewUrl: preview_url,
          }}
        />
        <AlbumCard />
      </div>
    </div>
  );
}
