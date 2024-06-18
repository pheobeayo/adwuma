import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Portfolio1 from "../../assets/skill-detail/portfolio1.svg";
import Portfolio2 from "../../assets/skill-detail/portfolio2.svg";
import Portfolio3 from "../../assets/skill-detail/portfolio3.svg";
import "swiper/css";

const Portfolio = () => {
  const works = [
    {
      image: Portfolio1,
      title: "Mockups",
    },
    {
      image: Portfolio2,
      title: "Abstract Logo",
    },
    {
      image: Portfolio3,
      title: "Mascot Logo",
    },
  ];
  return (
    <div className="pt-11">
      <div className="flex justify-between">
        <p className="text-sm text-[#888888] font-semibold">Portfolio</p>
      </div>

      <Swiper slidesPerView={2.5} spaceBetween={10} className="mySwiper">
        {works.map((work, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#F8F8F8] rounded-[8px] pb-2 mt-4">
              <Image
                src={work.image}
                alt="portfolio"
                className="rounded-t-[8px]"
              />

              <div className="px-2 text-center mt-3">
                <h2 className="text-sm font-semibold">{work.title}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Portfolio;
