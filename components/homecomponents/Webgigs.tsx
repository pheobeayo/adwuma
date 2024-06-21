import Link from "next/link";
import React from "react";
import webone from "../../assets/web/webone.svg";
import webtwo from "../../assets/web/webtwo.svg";
import webthree from "../../assets/web/webthree.svg";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

const Webgigs = () => {
  const webgigs = [
    {
      image: webone,
      title: "Block Chain developers",
      description:
        "Maximize your talents",
      ratings: 3.8,
    },
    {
      image: webtwo,
      title: "Community Managers",
      description: "You are valued.",
      ratings: 4.7,
    },
    {
      image: webthree,
      title: "Data Analysts",
      description: "Explore your gigs",
      ratings: 2.1,
    },
   
   
  ];

  return (
    <div className="pt-11">
      <div className="flex justify-between">
        <p className="text-sm text-[#888888] font-semibold">Gigs</p>
        <Link href="/skills" className="text-sm text-[#2E0039]">
          View all
        </Link>
      </div>

      <Swiper slidesPerView={2} spaceBetween={10} className="mySwiper">
        {webgigs.map((webgig, index) => (
          <SwiperSlide key={index}>
            <Link href="/skills/skilldetail" className="bg-[#F8F8F8] rounded-[8px] pb-2 mt-4">
              <Image
                src={webgig.image}
                alt="skillimage_"
                className="rounded-t-[8px]"
              />

              <div className="px-2 mt-3">
                <h2 className="text-sm font-semibold">{webgig.title}</h2>
                <p className="text-xs text-[#888888] font-medium mt-1">
                  {webgig.description}
                </p>
              </div>

              <div className="px-2 flex flex-col flex-1 justify-end">
                <p className="text-[10px] mt-2">
                  Ratings:{" "}
                  <span className="text-[#6A93FF] font-semibold">
                    {webgig.ratings}
                  </span>
                </p>
                <div className="flex space-x-1 mt-1">
                  {[...Array(5)].map((_, index) => {
                    const star = index + 1;
                    return (
                      <StarIcon
                        key={index}
                        className={`${
                          star <= Math.round(webgig.ratings)
                            ? "text-[#6A93FF]"
                            : "text-[#C4DBFF]"
                        } h-3 w-3`}
                      />
                    );
                  })}
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Webgigs;
