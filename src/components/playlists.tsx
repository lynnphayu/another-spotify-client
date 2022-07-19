import React from "react";
import { useNavigate } from "react-router-dom";
import { Playlist } from "../types/tracks";
import { getSmallestSizeImage } from "../utils/dataHandling";

export default function Playlists({
  playlists = [],
}: {
  playlists: Playlist[];
}) {
  const history = useNavigate();

  return (
    <div className="grid gap-x-4  w-full">
      {playlists.map((playlist, i) => {
        const {
          name,
          images,
          tracks: { total = 0 } = {},
          owner: { display_name: ownerName } = {},
        } = playlist;
        const url = getSmallestSizeImage(images, 64);
        return (
          <div
            key={i}
            className="cursor-pointer border-t-2 border-l-2 border-r-2 border-white hover:border-green-500 rounded-md"
            onClick={() => history("/playlist-detail", { state: { playlist } })}
          >
            <div className="flex flex-wrap content-center justify-between items-center border-b-2 p-2 hover:border-green-500 hover:rounded-b-md">
              {/* <div className="w-1/6"> */}
              <div
                className="w-12 m:w-14 h-12 m:h-14 bg-contain rounded-md mr-3"
                style={{ backgroundImage: `url(${url})` }}
              ></div>
              {/* </div> */}
              <div className="flex-grow">
                <div className="text-left">{name}</div>
                <div className="text-left text-sm text-gray-500">
                  {ownerName}
                </div>
              </div>
              <div className="text-left text-sm text-gray-500">{total}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
