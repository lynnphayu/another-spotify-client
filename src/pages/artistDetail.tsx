import React, { useEffect, useState } from 'react';
import { Link, Route, Routes, useNavigate, useLocation, useMatch } from 'react-router-dom';

import Artists from '../components/artists';
import ArtistBriefCard from '../components/commonBriefCard';
import Tracks from '../components/tracks';
import { Artist } from '../types';
import { genreAggregate, getSmallestSizeImage, upperFirst } from '../utils/dataHandling';

export default function ArtistDetail() {
  const [key, setKey] = useState(Math.random);
  let { pathname: path, pathnameBase: url } = useMatch(window.location.href) || {
    pathname: '',
    pathnamebase: ''
  };
  const { artist: { name = '', images = [], genres } = {} } = (useLocation()?.state || {}) as {
    artist: Artist;
  };

  useEffect(() => console.log(url, path), []);
  const imageUrl = getSmallestSizeImage(images, 640 || 300);
  return (
    <div>
      <ArtistBriefCard
        data={{
          title: name,
          imageUrl: imageUrl,
          subtitle: upperFirst(genreAggregate(genres) as unknown as string)
        }}
      />
      <div className="grid grid-cols-2 gap-2 my-2">
        <Link to={`${url}/top-tracks`} onClick={() => setKey(Math.random())}>
          <button className="w-full border-2 p-2 rounded-md">Top Tracks</button>
        </Link>
        <Link to={`${url}/related-artists`} onClick={() => setKey(Math.random())}>
          <button className="w-full border-2 p-2 rounded-md">Related Artists</button>
        </Link>
        <div className="col-span-2">
          <Routes>
            {/* <Route path={`${path}/top-tracks`} element={<Tracks tracks={t} />} />
            <Route path={`${path}/related-artists`} element={<Artists artists={a} />} /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
}
