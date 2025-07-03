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
    <div className="fixed flex justify-center  top-5 left-0 z-[2] w-full  ">
      <div className=" flex justify-between items-center px-4 md:px-7 py-3 rounded-2xl native-blur-card w-11/12 md:w-4/5">
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
            <Link
              href="https://www.linkedin.com/in/yarakhairat"
              target="_blank"
            >
              Li
            </Link>
            <Link href="https://github.com/Surefire10" target="_blank">
              Gh
            </Link>
          </div>
        </div>
        <div className="flex gap-2 text-sm font-semibold">
          {currentTime} <span className="font-thin">EG</span>
        </div>
      </div>
    </div>
  );
}
