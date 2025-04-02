"use client";
import { Home } from "./sections/home";
import { About } from "./sections/about";
import { Contact } from "./sections/contact";
import { Builds } from "./sections/builds";

export default function page() {
  return (
    <main className="flex flex-col gap-10 md:gap-5 items-center justify-center">
      <Home />
      <About />
      <Builds />
      <Contact />
    </main>
  );
}
