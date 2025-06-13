import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link, useLoaderData } from "react-router";
import Slider_home from "./Slider_home";
import AcademyCard from "./AcademyCard ";
import Testimonials from "./Testimonials";
import WhyAthletia from "./WhyAthletia";

const Home = () => {
  const allEvents = useLoaderData();
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div>
      <div className="relative w-full ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="w-full"
        >
          {/* {Array.from({ length: 5 }).map((_, i) => (
       
        ))} */}

          {allEvents.map((work, i) => (
            <SwiperSlide key={i}>
              <Slider_home work={work}></Slider_home>
            </SwiperSlide>
          ))}

          <div
            className="absolute right-4 bottom-4 w-12 h-12 flex items-center justify-center text-white text-sm select-none"
            slot="container-end"
          >
            <svg
              className="w-12 h-12 transform -rotate-90"
              viewBox="0 0 48 48"
              ref={progressCircle}
            >
              <circle
                cx="24"
                cy="24"
                r="20"
                fill="none"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="4"
              />
              <circle
                cx="24"
                cy="24"
                r="20"
                fill="none"
                stroke="white"
                strokeWidth="4"
                strokeDasharray="126"
                strokeDashoffset="0"
                style={{
                  strokeDashoffset: "calc(126 * var(--progress))",
                  transition: "stroke-dashoffset 0.3s linear",
                }}
              />
            </svg>
            <span
              ref={progressContent}
              className="absolute text-white text-sm"
            ></span>
          </div>
        </Swiper>
      </div>
      <h3 className="my-8">Accademy Section</h3>
      <div className="grid grid-cols-1 my-8 mx-4 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allEvents.map((academy) => (
          <AcademyCard key={academy._id} academy={academy}></AcademyCard>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Link
          to="/all_event"
          className="text-2xl mx-auto my-4 btn  btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-[#177C82] text-white font-semibold "
        >
          See All
        </Link>
      </div>
      <Testimonials></Testimonials>
      <WhyAthletia></WhyAthletia>
    </div>
  );
};

export default Home;
