import { motion } from "framer-motion";
import Link from "next/link";

export function Contact() {
  return (
    <footer className="bg-black w-full font-thin h-[200px] md:h-[250px]">
      <div
        className="mobile-container md:container flex flex-col gap-10"
        id="contact"
      >
        <div className="w-full  ">
          <div className="flex items-center">
            <p className="">GET INTO CONTACT</p>
            <motion.h2
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="text-bold text-4xl text-green-600"
            >
              •
            </motion.h2>
          </div>
          <p className=" text-4xl w-full md:text-7xl tracking-wide ">
            READY WHEN YOU ARE
          </p>
        </div>
        <div className="relative flex items-end justify-end gap-10 text-sm md:text-lg ">
          <p className="absolute left-0 text-xs">Made By Yara ❤️</p>

          <Link href="/resume.pdf" target="_blank">
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
