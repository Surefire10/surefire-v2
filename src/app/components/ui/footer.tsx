"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex bg-black w-full font-thin h-[100px]  mt-10 mb-5">
      <div className="mobile-container md:container flex flex-col justify-end gap-10 ">
        <div className="relative flex items-end justify-end gap-10 text-sm md:text-lg ">
          <p className="absolute left-0 text-xs">Made By Yara ❤️</p>

          <Link
            className="hover:text-red-600 hover:duration-300"
            href="/resume.pdf"
            target="_blank"
          >
            ✶Resume✶
          </Link>
          <Link
            className="hover:text-red-600 hover:duration-300"
            href="mailto:yarakhairat10@gmail.com"
          >
            ✶Email✶
          </Link>
        </div>
      </div>
    </footer>
  );
}
