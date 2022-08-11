import { atom, useAtom } from 'jotai';
import React, { useEffect } from 'react';
import useSWR from 'swr';
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import ButtonWithIcon from '../components/buttonWithIcon';
import ProfileBriefCard from '../components/profileBriefCard';
import { cFetch, useCSWR } from '../utils/client';
import { loadingAtom } from '../App';
import { Profile } from '../types';
import { tokenAtom } from '../App';
import AudioFeatures from '../components/audioFeatures';
import FavouriteTracks from './favouriteTracks';
import PersonalAudioFeatures from './personalAudioFeatures';

export default function Landing() {
  const history = useNavigate();
  const [token] = useAtom(tokenAtom);

  const { data: profile, error } = useCSWR<Profile>('/profile', token);

  const BUTTONS = [
    {
      text: 'Personal Audio Features',
      svgIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-green-500"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M19 6.873a2 2 0 0 1 1 1.747v6.536a2 2 0 0 1 -1.029 1.748l-6 3.833a2 2 0 0 1 -1.942 0l-6 -3.833a2 2 0 0 1 -1.029 -1.747v-6.537a2 2 0 0 1 1.029 -1.748l6 -3.572a2.056 2.056 0 0 1 2 0l6 3.573z"></path>
        </svg>
      ),
      onClick: () => history('/audio-features')
    },
    {
      text: 'Favourites Artists',
      svgIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-green-500"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
        </svg>
      ),
      onClick: () => history('/favourite-artists')
    },
    {
      text: 'Favourites Tracks',
      svgIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-green-500"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
        </svg>
      ),
      onClick: () => history('/favourite-tracks')
    },
    {
      text: 'Recently Played Tracks',
      svgIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-green-500"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <circle cx="12" cy="12" r="9"></circle>
          <polyline points="12 7 12 12 15 15"></polyline>
        </svg>
      ),
      onClick: () => history('/recently-played')
    },
    {
      text: 'Browse Tracks',
      svgIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-green-500"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
          <path d="M12 21h-5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v4.5"></path>
          <circle cx="16.5" cy="17.5" r="2.5"></circle>
          <line x1="18.5" y1="19.5" x2="21" y2="22"></line>
        </svg>
      ),
      onClick: () => history('/search-panel')
    },
    {
      text: 'Personal Playlists',
      svgIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current text-green-500"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <circle cx="14" cy="17" r="3"></circle>
          <path d="M17 17v-13h4"></path>
          <path d="M13 5h-10"></path>
          <line x1="3" y1="9" x2="13" y2="9"></line>
          <path d="M9 13h-6"></path>
        </svg>
      ),
      onClick: () => history('/playlists')
    }
  ];
  return (
    <div className="justify-center grid grid-cols-6 gap-2">
      <div className="col-span-6 clear-both">
        {profile && <ProfileBriefCard profile={profile} />}
      </div>
      {/* <div className="col-span-0 md:col-span-2"></div> */}
      <div className="col-span-6 md:col-span-2 lg:col-span-2 my-2 mr-2">
        {BUTTONS.map(({ text, svgIcon, onClick }, index) => (
          <div key={index} className="my-2">
            <ButtonWithIcon text={text} svgIcon={svgIcon} onClick={onClick} />
          </div>
        ))}
      </div>
      <div className="col-start-3 col-end-7 md:flow-root hidden border-2 rounded-md my-4 ml-2 p-2">
        <Outlet />
      </div>
    </div>
  );
}
