"use client";
import { useState } from "react";

export default function Home() {
  const [animateOut, setAnimateOut] = useState(false);
  return(
    <div className="flex-1 bg-gray-900">
      <div className="absolute bottom-8 left-0 flex flex-col justify-center items-center h-[100%] w-screen bg-sky-600 rounded-b-[150px] cursor-pointer" style={{ animation: animateOut ? 'softBounce 3s ease-in-out infinite, animateOut 1.25s forwards ease-in' : 'softBounce 3s ease-in-out infinite' }} onClick={ () => setAnimateOut(true) }>
        <h1 className="text-8xl">ASTRONEER GUIDE</h1>
        <h2 className="text-3xl mt-6">(Click to Enter)</h2>
      </div>
      <div className="text-6xl flex flex-col justify-center items-center h-[100%] w-screen">
        CONTENT
      </div>
    </div>
  )
}
