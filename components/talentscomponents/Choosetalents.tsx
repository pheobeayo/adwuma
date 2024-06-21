import Link from "next/link";
import React from "react";
import topone from "../../assets/top/topone.svg";
import toptwo from "../../assets/top/toptwo.svg";
import hackergirl from "../../assets/talents/hackergirl.svg";
import joycoder from "../../assets/talents/joycoder.svg";
import web3miracle from "../../assets/talents/web3miracle.svg";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";


const Choosetalents = () => {
  const choosetalents = [
    {
        image: hackergirl,
        title: "Full-stack Blockchain dev",
        ratings: 2.1,
      },
      {
        image: joycoder,
        title: "Web3 Frontend dev",
        ratings: 2.1,
      },
      {
        image: web3miracle,
        title: "Web3 designer",
        ratings: 2.1,
      },
    {
      image: topone,
      title: "KittyCrypto",
      ratings: 3.8,
    },
    {
      image: toptwo,
      title: "Cyber punk",
      ratings: 4.7,
    },
    
   
   
  ];

  return (
    <div className="pt-11">
      <div className="flex justify-between">
        <p className="text-sm text-[#888888] font-semibold">Meet Great talents</p>
        <Link href="/skills" className="text-sm text-[#2E0039]">
          View all
        </Link>
      </div>

      <Swiper slidesPerView={2} spaceBetween={10} className="mySwiper">
        {choosetalents.map((choosetalent, index) => (
          <SwiperSlide key={index}>
            <Link href="/skills/skilldetail" className="bg-[#F8F8F8] rounded-[8px] pb-2 mt-4">
              <Image
                src={choosetalent.image}
                alt="skillimage_"
                className="rounded-t-[8px]"
              />

              <div className="px-2 mt-3">
                <h2 className="text-sm font-semibold">{choosetalent.title}</h2>
                
              </div>

              <div className="px-2 flex flex-col flex-1 justify-end">
                <p className="text-[10px] mt-2">
                  Ratings:{" "}
                  <span className="text-[#6A93FF] font-semibold">
                    {choosetalent.ratings}
                  </span>
                </p>
                <div className="flex space-x-1 mt-1">
                  {[...Array(5)].map((_, index) => {
                    const star = index + 1;
                    return (
                      <StarIcon
                        key={index}
                        className={`${
                          star <= Math.round(choosetalent.ratings)
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

export default Choosetalents;
