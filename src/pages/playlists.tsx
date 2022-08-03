import { useAtom } from 'jotai';
import React from 'react';
import useSWR from 'swr';
import PlaylistsComponent from '../components/playlists';
import { Playlist } from '../types';
import { useCSWR } from '../utils/client';
import { tokenAtom } from '../App';

export default function Playlists() {
  const [token] = useAtom(tokenAtom);
  const { data: playlists, error } = useCSWR<{ items: Playlist[] }>(
    `/playlists?limit=50&offset=0`,
    token
  );

  return (
    <div className="grid gap-x-4 w-full">
      <PlaylistsComponent playlists={playlists?.items} />
    </div>
  );
}
