import React from "react"

export default function Password() {
  return <div className="flex justify-center flex-wrap content-center h-full">
    <div className="w-full md:w-2/6 lg:w-1/6 flex justify-center flex-wrap content-center">
      <input type="password" className="border-2 w-full m-2 py-2 text-md rounded-full text-black px-4 tracking-wide password shadow-none" placeholder="Password" />
      <input type="password" className="border-2 w-full m-2 py-2 text-md rounded-full text-black px-4 tracking-wide password shadow-none" placeholder="Reenter Password"/>
      <button className="w-4/6 p-2 m-2 flex justify-center flex-wrap content-center bg-green-500 text-white text-md font-semibold rounded-full shadow-lg">
        Enter</button>
    </div>
  </div>
}