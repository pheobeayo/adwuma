import Image from "next/image";
import Link from "next/link";
import React from "react";
import CircleImg1 from "../../assets/circles/circlesimg1.svg";
import CircleImg2 from "../../assets/circles/circlesimg2.svg";
import CirclePP from "../../assets/circles/circlespp.svg";
import CircleTime from "../../assets/circles/circlesTime.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Circles = () => {
  const circles = [
    {
      image: CircleImg1,
      title: "Web Developers",
      people: "120",
      posts: "5",
    },
    {
      image: CircleImg2,
      title: "SEO Specialists",
      people: "30",
      posts: "3",
    },
    {
      image: CircleImg1,
      title: "Graphic Designers",
      people: "12",
      posts: "7",
    },
  ];
  return (
    <div className="pt-11 mb-28">
      <div className="flex justify-between">
        <p className="text-sm text-[#888888] font-semibold">Popular Cicles</p>
        <Link href="/cicles" className="text-sm text-[#6A93FF]">
          View all
        </Link>
      </div>

      <Swiper slidesPerView={2} spaceBetween={10} className="mySwiper">
        {circles.map((circle, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#F8F8F8] rounded-[8px] mt-4">
              <Image
                src={circle.image}
                alt="circleimage_"
                className="rounded-t-[8px]"
              />

              <div className="px-2 mt-3">
                <h2 className="text-sm font-semibold">{circle.title}</h2>

                <div className="flex justify-between mt-2">
                  <div className="flex space-x-2">
                    <Image src={CirclePP} alt="icon" />
                    <p className="text-xs text-[#888888] font-medium">
                      {circle.people}
                    </p>
                  </div>

                  <div className="flex space-x-2 justify-center items-center">
                    <Image src={CircleTime} alt="icon" />
                    <p className="text-xs text-[#888888] font-medium">
                      {circle.posts} new posts
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#EDF4FF] hover:bg-[#6A93FF] text-center text-[#6A93FF] hover:text-white rounded-b-[8px] font-semibold text-sm py-1 mt-5">
                Join
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Circles;
