import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AudioFeatures from './audioFeatures';
import FavouritesTracks from './tracks';

export default function Landing() {
  return (
    <div className="flex flex-wrap justify-center grid grid-cols-6 grid-row-7 gap-2 w-full">
      <div className="cursor-pointer w-full h-36 col-span-6 md:col-span-3 clear-both p-2 justify-center content-center flex flex-nowrap border-2 rounded-md shadow-sm hover:border-green-500">
        <div className="w-2/6 content-center flex flex-wrap justify-center">
          <div
            className="w-24 h-24 rounded-full border-2 bg-local bg-center bg-contain"
            style={{
              backgroundImage:
                'url(https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1022768947785978&height=300&width=300&ext=1614252702&hash=AeRLpcsZEVIfPCQF3Pc)'
            }}></div>
          {/* <img className="max-w-full h-24 rounded-full border-2"
          src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1022768947785978&height=300&width=300&ext=1614252702&hash=AeRLpcsZEVIfPCQF3Pc" alt="" /> */}
        </div>
        <div className="w-4/6 p-2 flex flex-wrap content-center">
          <p className="w-full tracking-wide font-medium">Lin Phay Oo</p>
          <p className="w-full tracking-wide">lynnphayu@icloud.com</p>
          <p className="w-full tracking-wide">US</p>
        </div>
      </div>
      <div className="col-span-0 md:col-span-3"></div>
      <div className="cursor-pointer w-full p-2 col-span-6 md:col-span-2 justify-end content-around flex flex-wrap border-2 rounded-md transition-width duration-500 ease-in-out shadow-sm hover:border-green-500">
        <div className="w-5/6 flex flex-nowrap justify-center content-center items-center">
          Personal Audio Features
        </div>
        <div className="w-1/6 flex flex-nowrap justify-center content-center items-center border-l-2">
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
        </div>
      </div>
      <div className="cursor-pointer w-full p-2 col-span-6 md:col-span-2 justify-end content-around flex flex-wrap border-2 rounded-md transition-width duration-500 ease-in-out shadow-sm hover:border-green-500">
        <div className="w-5/6 flex flex-nowrap justify-center content-center items-center">
          Favourites Artists & Tracks
        </div>
        <div className="w-1/6 flex flex-nowrap justify-center content-center items-center border-l-2">
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
        </div>
      </div>
      <div className="cursor-pointer w-full p-2 col-span-6 md:col-span-2 justify-end content-around flex flex-wrap border-2 rounded-md transition-width duration-500 ease-in-out shadow-sm hover:border-green-500">
        <div className="w-5/6 flex flex-nowrap justify-center content-center items-center">
          Recently Played Tracks
        </div>
        <div className="w-1/6 flex flex-nowrap justify-center content-center items-center border-l-2">
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
        </div>
      </div>
      <div className="cursor-pointer w-full p-2 col-span-6 md:col-span-2 justify-end content-around flex flex-wrap border-2 rounded-md transition-width duration-500 ease-in-out shadow-sm hover:border-green-500">
        <div className="w-5/6 flex flex-nowrap justify-center content-center items-center">
          Browse Tracks
        </div>
        <div className="w-1/6 flex flex-nowrap justify-center content-center items-center border-l-2">
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
        </div>
      </div>
      <div className="cursor-pointer w-full p-2 col-span-6 md:col-span-2 justify-end content-around flex flex-wrap border-2 rounded-md transition-width duration-500 ease-in-out shadow-sm hover:border-green-500">
        <div className="w-5/6 flex flex-nowrap justify-center content-center items-center">
          Personal Playlists
        </div>
        <div className="w-1/6 flex flex-nowrap justify-center content-center items-center border-l-2">
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
        </div>
      </div>
      <div className="row-start-2 row-span-6 col-start-3 col-end-7 md:flex hidden border-2 rounded-md">
        <Routes>
          <Route path={`/landing/personal-audio-features`}>{/* <AudioFeatures /> */}</Route>
          <Route path={`/landing/favourite-tracks`}>
            <FavouritesTracks tracks={undefined} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}
