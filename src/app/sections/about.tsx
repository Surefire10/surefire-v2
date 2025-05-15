import { Blur } from "../components/ui/blur";

export function About() {
  return (
    <section
      className="flex flex-col w-full items-center justify-center gap-10 lg:gap-10 mobile-container lg:container lg:pt-20"
      id="about"
    >
      <Blur className="hidden lg:block" top={400} left={200} />
      <Blur className="block lg:hidden" top={250} left={0} />

      <div className="w-full ">
        <p className="text-2xl lg:text-3xl  lg:font-extralight">
          A Web-centric software developer, passionate problem-solver, and
          lifelong learning advocate.
          <br className="lg:hidden" />
          <span className="text-red-700">Fueled by curiosity.</span>
        </p>
      </div>
      <div className="w-full flex flex-col lg:flex-row  items-center lg:justify-between gap-10 lg:gap-16 ">
        <div className="flex flex-col gap-3 lg:gap-8 font-thin w-full">
          <span className="flex w-full -ml-2 text-lg">✶ Experience ✶</span>
          <div className="flex items-center justify-between text-base">
            <ul className="grid grid-cols-1 gap-2">
              <li>
                CRYPTICWEB3
                <span className="hidden lg:inline-block">(Remote)</span>
              </li>
              <li>JAN 2024-NOW</li>
              <li>FULL STACK DEVELOPER.</li>
            </ul>
            <ul className="grid grid-cols-1 gap-2 ">
              <li>SELF-EMPLOYED</li>
              <li>JUN 2023-NOW</li>
              <li>FULL STACK DEVELOPER.</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-3 lg:gap-8 font-thin w-full">
          <span className="flex w-full -ml-2 text-lg">✶ Technologies ✶</span>
          <ul className="grid grid-cols-3 gap-y-6 gap-x-8 text-base mx-0 ">
            <li>TYPESCRIPT</li>
            <li>SQL</li>
            <li>JAVA</li>
            <li>NEXT JS</li>
            <li>NEST JS</li>
            <li>TAILWIND CSS</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
