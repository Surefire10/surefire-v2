import { Blur } from "../components/ui/blur";

export function About() {
  return (
    <section
      className="flex flex-col w-full items-center justify-center lg:gap-3 mobile-container lg:container lg:pt-20"
      id="about"
    >
      <Blur className="hidden lg:block" top={400} left={200} />
      <Blur className="block lg:hidden" top={250} left={0} />

      <div className="w-full">
        <p className="text-2xl  font-light">
          A Web-centric software developer, passionate problem-solver, and
          lifelong learning advocate.
          <br />
          <span className="text-red-700 font-normal">Fueled by curiosity.</span>
        </p>
      </div>
      <div className="w-full flex font-light lg:justify-between lg:gap-16 mt-10">
        <span className="flex w-full">✶ Experience ✶</span>
        <span className="flex w-full">✶ Technologies ✶</span>
      </div>
      <div className="w-full flex  items-center lg:justify-between lg:gap-16 ">
        <div className="flex font-thin w-full h-full gap-5 mt-2 ">
          <div className="flex gap-10">
            <div className="text-sm lg:text-base">
              <p>CRYPTICWEB3, NETHERLANDS/DUBAI (REMOTE)</p>
              <p>JANUARY 2024-NOW</p>
              <p>JUNIOR FULL STACK DEVELOPER.</p>
            </div>
          </div>
          <div className="flex gap-10">
            <div className="text-sm lg:text-base">
              <p>SELF-EMPLOYED</p>
              <p>JUNE 2023-DECEMBER 2023 </p>
              <p>FRONTEND DEVELOPER.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-2  font-thin w-full">
          <ul className="flex flex-col lg:flex-row -mt-10  lg:gap-3 text-sm lg:text-base ">
            <li>TYPESCRIPT</li>
            <li>JAVA</li>
            <li>SQL</li>
            <li>NEXT.JS</li>
            <li>NEST.JS</li>
            <li>SPRING BOOT</li>
            <li>TAILWIND CSS</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
