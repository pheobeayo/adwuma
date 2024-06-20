import Image from "next/image";
import Link from "next/link";
import React from "react";
import CircleImg1 from "../../assets/circles/circlesimg1.svg";
import CircleImg2 from "../../assets/circles/circlesimg2.svg";
import CirclePP from "../../assets/circles/circlespp.svg";
import CircleTime from "../../assets/circles/circlesTime.svg";
import aya from "../../assets/circles/aya.svg"
import mu from "../../assets/circles/mu.svg"
import blockheader from "../../assets/circles/blockheader.svg"
import starknet from "../../assets/circles/starknet.svg"
import onlydust from "../../assets/circles/onlydust.svg"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import zkbutton from '../../assets/alert/zkbutton.svg';

const Communities = () => {
  const circles = [
    
    {
      image: onlydust,
      title: "Only Dust",
      people: "50",
      posts: "7",
    },
    {
      image: aya,
      title: "Aya ",
      people: "100",
      posts: "9",
    },

    {
      image:  CircleImg1,
      title: "Blockchain developers",
      people: "120",
      posts: "5",
    },
   {
      image:CircleImg2 ,
      title: "Web3 designers",
      people: "120",
      posts: "5",
    },
    {
      image: blockheader,
      title: "Blockheader",
      people: "120",
      posts: "5",
    },
   
    {
      image: starknet,
      title: "Starknet",
      people: "12",
      posts: "7",
    },
    {
      image: mu,
      title: "The mu",
      people: "12",
      posts: "7",
    },
  ];
  return (
    <div className="pt-11 mb-28">
      <div className="flex justify-between">
        <p className="text-sm text-[#2E0039] font-semibold">Popular Communities</p>
        <Link href="/communities" className="text-sm text-[#2E0039]">
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

              <div className="bg-[#9747FF] hover:bg-[#2E0039] text-center text-white hover:text-white rounded-b-[8px] font-semibold text-sm py-1 mt-5">
                Join
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='grid place-items-end mt-3'>
      <Image src={zkbutton} alt='zkbutton' />
      </div>
    </div>
  );
};

export default Communities;
