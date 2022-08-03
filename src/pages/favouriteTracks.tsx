import { useAtom } from 'jotai';
import React from 'react';
import useSWR from 'swr';
import Artists from '../components/artists';
import Tracks from '../components/tracks';
import { Artist, Track } from '../types';
import { useCSWR } from '../utils/client';
import { tokenAtom } from '../App';

export default function FavouriteTracks() {
  const [token] = useAtom(tokenAtom);
  const { data: topTracksChunk } = useCSWR<{ items: Track[] }>(`/top?limit=10000000`, token);

  return (
    <div className="w-full">
      <Tracks tracks={topTracksChunk?.items} />
    </div>
  );
}
