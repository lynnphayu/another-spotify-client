import { useAtom } from 'jotai';
import React from 'react';
import useSWR from 'swr';
import Artists from '../components/artists';
import Tracks from '../components/tracks';
import { Artist, Track } from '../types';
import { useCSWR } from '../utils/client';
import { tokenAtom } from '../App';

export default function RecentlyPlayedTracks() {
  const [token] = useAtom(tokenAtom);
  const { data: recentlyPlayedTracks } = useCSWR<{ items: Track[] }>(
    `/recently_played?limit=${50}&before=${new Date().toISOString().split('T')[0]}`,
    token
  );

  return (
    <div className="w-full">
      <Tracks tracks={recentlyPlayedTracks?.items} />
    </div>
  );
}
