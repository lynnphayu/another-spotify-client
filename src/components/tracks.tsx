import React from 'react';
import { useNavigate } from 'react-router';
import { Track } from '../types';

import { getArtistsNames, getSmallestSizeImage } from '../utils/dataHandling';

export default function Tracks({ tracks = [] }: { tracks?: Track[] }) {
  const history = useNavigate();

  return (
    <div className="grid gap-x-4 w-full">
      {tracks.map((item: Record<string, unknown>, i) => {
        const track = (item.track ? item.track : item) as Track;
        const { name, artists, album: { images, name: albumName } = {} } = track;
        const url = getSmallestSizeImage(images, 64);
        const artistName = getArtistsNames(artists);
        return (
          <div
            key={i}
            className="cursor-pointer border-t-2 border-l-2 border-r-2 border-white hover:border-green-500 rounded-md"
            onClick={() =>
              history('/track-detail', {
                state: { track }
              })
            }>
            <div className="flex flex-nowrap content-center items-center border-b-2 p-2 hover:border-green-500 hover:rounded-b-md">
              {/* <div className="w-1/6"> */}
              <div
                className="w-12 m:w-14 h-12 m:h-14 bg-contain flex-shrink-0 rounded-md mr-3"
                style={{ backgroundImage: `url(${url})` }}></div>
              {/* </div> */}
              <div>
                <div className="text-left">{name}</div>
                <div className="text-left text-sm">{artistName}</div>
                <div className="text-left text-sm text-gray-500">{albumName}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
