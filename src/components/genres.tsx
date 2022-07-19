import React from 'react';
import { upperFirst } from '../utils/dataHandling';

export default function Genres() {
  const genres = [
    "alt_rock",
    "bluegrass",
    "blues",
    "classical",
    "country",
    "dance",
    "electro",
    "hard_rock",
    "heavy_metal",
    "hip_hop",
    "house"]
  return <div className="grid gap-x-4 m-2 w-full">
    {genres.map((k) => <div className="flex flex-wrap content-center items-center border-b-2 hover:border-green-500 hover:rounded-b-md">
      <div className="w-full p-2 cursor-pointer border-t-2 border-l-2 border-r-2 border-white hover:border-green-500 rounded-md">
        {upperFirst(k, "_")}
      </div>
    </div>
    )}
  </div >;
}