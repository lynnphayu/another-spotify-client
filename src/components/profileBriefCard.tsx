import React from 'react';
import { Profile } from '../types';

export default function ProfileBriefCard({
  profile: { images, display_name, country, email }
}: {
  profile: Profile;
}) {
  return (
    <div className="cursor-pointer justify-center content-center flex flex-nowrap border-2 p-2 rounded-md shadow-sm hover:border-green-500">
      <div className="w-2/6 content-center flex flex-wrap justify-center">
        <div
          className="w-24 h-24 rounded-full border-2 bg-local bg-center bg-contain"
          style={{
            backgroundImage: `url(${images[0]?.url})`
          }}></div>
      </div>
      <div className="w-4/6 p-2 flex flex-wrap content-center">
        <p className="w-full tracking-wide font-medium">{display_name}</p>
        <p className="w-full tracking-wide">{email}</p>
        <p className="w-full tracking-wide">{country}</p>
      </div>
    </div>
  );
}
