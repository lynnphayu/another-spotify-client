import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Artist } from '../types';

import { genreAggregate, getSmallestSizeImage } from '../utils/dataHandling';

export default function Artists({ artists = [] }: { artists?: Artist[] }) {
  const history = useNavigate();

  return (
    <div className="w-full">
      {artists.map((artist, i) => {
        const { name, images, popularity, genres } = artist;
        const url = getSmallestSizeImage(images, 64);
        return (
          <div
            key={i}
            onClick={() => history('/artist-detail', { state: { artist } })}
            className="cursor-pointer border-t-2 border-l-2 border-r-2 border-white hover:border-green-500 rounded-md max-w-full">
            <div className="flex flex-wrap content-center items-center border-b-2 p-2 hover:border-green-500 hover:rounded-b-md">
              {/* <div className="w-1/6"> */}
              <div
                className="w-12 m:w-14 h-12 m:h-14 bg-contain rounded-md mr-3"
                style={{ backgroundImage: `url(${url})` }}></div>
              {/* </div> */}
              <div className="flex flex-nowrap justify-between flex-1">
                <div className="text-left">
                  <div>{name}</div>
                  <div className="text-xs">{genreAggregate(genres)}</div>
                </div>
                <div className="text-left text-sm flex flex-wrap flex-shrink-0 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline text-sm stroke-current text-gray-500"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3" />
                  </svg>
                  <p className="text-center text-sm text-gray-500">{popularity}</p>
                </div>
                {/* <div className="text-left text-sm text-gray-500">{albumName}</div> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
