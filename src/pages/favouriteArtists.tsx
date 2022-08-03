import { useAtom } from 'jotai';
import React from 'react';
import useSWR from 'swr';
import { loadingAtom } from '../App';
import Artists from '../components/artists';
import Tracks from '../components/tracks';
import { Artist, Track } from '../types';
import { cFetch, useCSWR } from '../utils/client';
import { tokenAtom } from '../App';

export default function FavouriteArtists() {
  const [token] = useAtom(tokenAtom);

  const { data: topArtistsChunk, error } = useCSWR<{ items: Artist[] }>(
    `/top?type=artists&limit=10000000`,
    token
  );

  return (
    <div className="w-full">
      <Artists artists={topArtistsChunk?.items} />
    </div>
  );
}
