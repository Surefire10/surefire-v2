"use client";
import Link from "next/link";
import { refreshTime } from "../time";
import { useEffect, useState } from "react";

export function Header() {
  const [currentTime, setCurrentTime] = useState(refreshTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(refreshTime());
    }, 1000);

    // The cleanup function is declared like this
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-[2] native-blur-card  flex justify-between items-center w-full px-5 py-2.5">
      <div className="flex gap-1 font-extralight text-md md:text-2xl group hover:cursor-default ">
        <span className="group-hover:opacity-60 opacity-100 duration-200">
          Yara
        </span>
        <span className="group-hover:opacity-100 opacity-60 duration-200">
          Khairat
        </span>
        <span className="font-sans group-hover:opacity-60 duration-200">
          ;(
        </span>
      </div>
      <div className="flex gap-2 text-sm">
        <span>Socials |</span>
        <div className="flex gap-1 md:gap-2 opacity-60">
          <Link href="https://www.linkedin.com/in/yarakhairat">Li</Link>
          <Link href="https://github.com/Surefire10">Gh</Link>
        </div>
      </div>
      <div className="flex gap-2 text-sm font-semibold">
        {currentTime} <span className="font-thin">EG</span>
      </div>
    </div>
  );
}
