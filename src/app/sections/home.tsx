"use client";

import { motion } from "framer-motion";
import { Blur } from "../components/ui/blur";
import Image from "next/image";
import triangle from "../../../public/images/meta/art.jpg";

export function Home() {
  return (
    <section
      className="relative flex flex-col gap-6 lg:gap-0  items-center justify-center mobile-container lg:container mt-24 lg:mt-10 "
      id="home"
    >
      <Blur className="hidden lg:block" top={250} left={-600} />
      <Blur className="block lg:hidden" top={180} left={-20} />
      <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between lg:items-center pt-16">
        <div className="text-7xl lg:text-8xl uppercase font-light w-3/4 lg:basis-[20%] ">
          <p>I build neat stuff for the internet</p>
        </div>
        <motion.div
          animate={{ y: [0, -10, 0] }} // Moves up and down
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="hidden lg:block"
        >
          <motion.div
            animate={{ rotate: [0, 360] }} // Keyframes for smooth looping
            transition={{ repeat: Infinity, duration: 200, ease: "linear" }}
            className="relative -left-10 xl:-left-20 w-[300px] h-[300px] xl:w-[450px] xl:h-[450px]"
          >
            <div className="absolute  w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] " />
            <Image
              src={triangle}
              alt="tri"
              width={1500}
              className="max-w-full"
            />
          </motion.div>
        </motion.div>
      </div>
      <div className="flex justify-between items-start w-full ">
        <div className="flex items-center gap-[0.1px]  font-extralight ">
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
          <h2>Hit me up.</h2>
        </div>
        <div className="flex items-center gap-[1px]  font-light">
          <motion.h2
            animate={{ y: [-25, -5] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="text-bold text-4xl text-red-700"
          >
            &darr;
          </motion.h2>
        </div>
      </div>
    </section>
  );
}
