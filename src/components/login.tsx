import React from 'react';

export default function Login() {
  return <div className="flex justify-center flex-wrap content-center h-full">
    <div className="w-full md:w-2/3 flex justify-center flex-wrap content-center">
      <input type="text" className="border-2 w-full m-2 h-12 text-md rounded-full text-black px-4 tracking-wide password shadow-none focus:outline-none focus:border-green-500" placeholder="Email" />
      <input type="password" className="border-2 w-full m-2 h-12 text-md rounded-full text-black px-4 tracking-wide password shadow-none focus:outline-none focus:border-green-500" placeholder="Password" />
      <div className="w-full flex justify-center flex-wrap content-center">
        <button className="w-2/6 p-2 m-2 flex justify-center flex-wrap content-center text-black text-md font-semibold rounded-full border-2 no-shadow hover:border-green-500">
          Enter</button>
        <button className="w-3/6 p-2 m-2 flex justify-center flex-wrap content-center bg-green-500 text-white text-md font-semibold rounded-full hover:border-green-100">
          Login With Spotify</button>
      </div>
    </div>
  </div>;
}