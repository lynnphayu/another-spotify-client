import React from 'react';
import { useLocation } from 'react-router';
import CommonBriefCard from '../components/commonBriefCard';
import Tracks from '../components/tracks';
import { Playlist, Track } from '../types';
import { getSmallestSizeImage } from '../utils/dataHandling';

export default function PlaylistDetail() {
  const { playlist: { name, images = [], description } = {} } = (useLocation()?.state || {}) as {
    playlist: Playlist;
  };
  const imageUrl = getSmallestSizeImage(images, 640 || 300);
  return (
    <div className="w-auto">
      <div className="flex flex-wrap justify-center w-full">
        <CommonBriefCard
          data={{
            title: name,
            imageUrl: imageUrl,
            subtitle: description
          }}
        />
        {/* <Tracks tracks={tracks.map(({ track }) => track)} /> */}
      </div>
    </div>
  );
}
