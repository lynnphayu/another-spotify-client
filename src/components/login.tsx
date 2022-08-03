import React, { createElement, useEffect, useState } from 'react';

interface Credential {
  token: string;
  profile: Record<string, unknown>;
}

export default function Login() {
  const [credential, setCredential] = useState<Credential>();
  // get redirect from query params
  const redirect = new URLSearchParams(window.location.search).get('redirect');
  // login to http://localhost:8090/api/v1/spotify/login with no Cors and set response to crendential

  // const login = async () =>
  //   fetch('http://localhost:8090/api/v1/spotify/login', {
  //     method: 'GET'
  //   })
  //     .then((e) => {
  //       console.log(e);
  //       return e.json();
  //     })
  //     .then((response) => setCredential(response));

  // useEffect(() => {
  //   console.log(credential);
  // }, [credential]);

  return (
    <div className="flex justify-center flex-wrap content-center h-full">
      <div className="w-full flex justify-center flex-wrap content-center">
        {/* <input
          type="text"
          className="border-2 w-full m-2 h-12 text-md rounded-full text-black px-4 tracking-wide password shadow-none focus:outline-none focus:border-green-500"
          placeholder="Email"
        /> */}
        {/* <input
          type="password"
          className="border-2 w-full m-2 h-12 text-md rounded-full text-black px-4 tracking-wide password shadow-none focus:outline-none focus:border-green-500"
          placeholder="Password"
        />
        <div className="w-full flex justify-center flex-wrap content-center">
          <button className="w-2/6 p-2 m-2 flex justify-center flex-wrap content-center text-black text-md font-semibold rounded-full border-2 no-shadow hover:border-green-500">
            Enter
          </button>
          <button className="w-3/6 p-2 m-2 flex justify-center flex-wrap content-center bg-green-500 text-white text-md font-semibold rounded-full hover:border-green-100">
            Login With Spotify
          </button>
        </div> */}
        <a
          href={`${import.meta.env.VITE_API_ENDPOINT}/login?redirect=${`${window.location.origin}/${
            redirect || ''
          }`}`}
          className="w-full p-2 m-2 flex justify-center flex-wrap content-center bg-green-500 text-white text-md font-semibold rounded-full hover:border-green-100">
          Login With Spotify
        </a>
      </div>
    </div>
  );
}
