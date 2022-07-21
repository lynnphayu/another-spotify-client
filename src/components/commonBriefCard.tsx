import React, { useState, useEffect } from "react";

export default function CommonBriefCard({
  data,
}: {
  data: Record<string, unknown>;
}) {
  const { title, imageUrl, subtitle, previewUrl, explicit, popularity } = data;
  const [audio] = useState(new Audio(previewUrl as string));
  const [imageLoaded, setImageLoaded] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  useEffect(() => {
    audio.pause();
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.pause();
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [audio]);

  const onToggle = () => {
    previewUrl && setPlaying(!playing);
  };

  return (
    <div className="relative w-full">
      <img
        className={`z-0 w-full object-contain rounded-md ${
          !imageLoaded && "h-88"
        }`}
        onLoad={() => setImageLoaded(true)}
        src={imageUrl as string}
        alt="Artwork"
      />
      {(explicit as boolean) && (
        <div className="w-full rounded-md absolute flex flex-wrap justify-end top-0 left-0 from-gray-900 p-6">
          {/* <div className="text-left text-sm flex flex-wrap flex-shrink-0 items-center border-3 rounded-sm border-gray-800 px-0.5 bg-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" className="inline stroke-current text-gray-300" width="12" height="12" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3" />
        </svg>
        <p className="text-center text-gray-300 text-sm font-medium">{popularity}</p>
      </div> */}
          <div className="border-3 rounded-sm border-gray-800 px-1 bg-gray-800">
            <p className="text-gray-300 text-xs font-semibold w-full">
              {"EXPLICIT"}
            </p>
          </div>
        </div>
      )}
      <div className="w-full h-2/3 rounded-md absolute flex flex-wrap content-end items-end justify-between bottom-0 left-0 h-1/2 bg-gradient-to-t from-gray-900 p-6 hover:bg-none">
        <div>
          <p className="text-gray-300 text-xl font-medium w-full">
            {title as string}
          </p>
          <p className="text-gray-400 w-full">{subtitle as string}</p>
        </div>
      </div>
      {data.hasOwnProperty("previewUrl") && (
        <div className="w-full h-full absolute flex flex-wrap content-center justify-center  items-center bottom-0 left-0 ">
          <div
            className="border-4 border-gray-300 rounded-full p-1.5"
            onClick={onToggle}
          >
            {(previewUrl as string) &&
              (!playing ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="fill-current text-gray-300"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M7 4v16l13 -8z"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current text-gray-300"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <rect x="6" y="5" width="4" height="14" rx="1"></rect>
                  <rect x="14" y="5" width="4" height="14" rx="1"></rect>
                </svg>
              ))}
            {!previewUrl && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current text-gray-300"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="3"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <line x1="12" y1="4" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="17"></line>
              </svg>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
