/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { content } from "../../../public/content/content";
import { Blur } from "../components/ui/blur";

export function Builds() {
  return (
    <section
      className="flex flex-col w-full items-center justify-center gap-3 mobile-container lg:container lg:pt-28"
      id="builds"
    >
      <p className="text-2xl w-full font-light">
        I&apos;ve crafted websites, developed services, built useful tools, and
        messed with tiny little side projects.
        <br className="" />
        <span className="text-red-700 font-normal text-lg lg:ml-1 lg:text-2xl">
          Take a look down below.
        </span>
      </p>
      <div className="flex w-full h-[600px] items-center mt-10 lg:-mt-20">
        <Swiper
          spaceBetween={20}
          loop={true}
          centeredSlides={true}
          pagination={{ enabled: true }}
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          className="h-full"
        >
          {content &&
            content.map((project) => {
              return (
                <SwiperSlide key={project.id} className="w-full h-full ">
                  <div className=" flex flex-col lg:flex-row gap-10 lg:gap-2 w-full lg:justify-between items-center h-full  lg:px-0">
                    <div className="flex flex-col  p-0 w-full lg:gap-2 justify-between  lg:basis-[15%] lg:h-1/2">
                      <h2 className="text-2xl font-thin">{project.title}</h2>
                      <div className="flex flex-row p-0  text-sm lg:text-lg gap-2 lg:gap-2 lg:flex-col ">
                        {project.skills &&
                          project.skills.map((skill, index) => {
                            return (
                              <li className="font-extralight" key={index}>
                                {skill}
                              </li>
                            );
                          })}
                      </div>
                    </div>

                    <div className=" flex items-center mt-5 lg:mt-10">
                      <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        slidesPerView={1}
                        loop
                        direction="vertical"
                        className="h-[220px] lg:h-[300px] rounded-lg"
                        centeredSlides={true}
                        pagination={{ enabled: true }}
                        autoplay={{
                          delay: 3000,
                          disableOnInteraction: true,
                        }}
                      >
                        {project.images &&
                          project.images.map((image) => {
                            return (
                              <SwiperSlide key={image}>
                                <div className="w-[380px] md:[490px] lg:w-[600px] rounded-lg  ">
                                  <img
                                    src={"/images/" + image}
                                    width={1000}
                                    height={1000}
                                    className="max-w-full rounded-lg"
                                    alt="project image"
                                  />
                                </div>
                              </SwiperSlide>
                            );
                          })}
                      </Swiper>
                    </div>

                    <div className="flex flex-col gap-2 justify-between w-full lg:basis-[20%] lg:h-1/2">
                      <h2 className="font-thin text-2xl ">{project.scope}</h2>
                      <div>{project.description}</div>
                      {project.title === "Trill" && (
                        <div className="font-normal text-red-700">
                          DEMO COMING SOON
                        </div>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
        <Blur className="block lg:hidden" top={0} left={-300} />
      </div>
    </section>
  );
}
