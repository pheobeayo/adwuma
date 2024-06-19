import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import FeaturedImg1 from "../../assets/featured/featuredimg1.svg";
import FeaturedImg2 from "../../assets/featured/featuredimg2.svg";
import FeaturedImg3 from "../../assets/featured/featuredimg3.svg";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Featured = () => {
  const skills = [
    {
      image: FeaturedImg1,
      title: "Blockchain development",
      description: "Build decentralized platforms that are scalable",
      provider: "KittyCrypto",
      ratings: 4.2,
      reviews: 120,
    },
    {
      image: FeaturedImg2,
      title: "TokenBounds and Smart Wallet Creation",
      description: "Turn your digital assets to real wallet assets",
      provider: "Cyberpunk",
      ratings: 3.2,
      reviews: 51,
    },
    {
      image: FeaturedImg3,
      title: "Web3 Design",
      description: "Professional web3 design to help your blockchain stand out.",
      provider: "Kitty designer",
      ratings: 4.2,
      reviews: 120,
    },
  ];
  return (
    <div className="pt-8">
      <div className="mb-4">
        <p className="text-sm text-[#888888] font-semibold">Featured </p>
      </div>

      <Swiper slidesPerView={"auto"} spaceBetween={10} className="mySwiper">
        {skills.map((skill, index) => (
          <SwiperSlide key={index} className="max-w-[90%]">
            <Link href="/skills/skilldetail" className="bg-[#F8F8F8] rounded-[8px] mt-4 ">
              <div>
                <Image
                  src={skill.image}
                  alt="workshop_img"
                  className="rounded-t-[8px] h-[134px] object-cover"
                />
              </div>

              <div className="px-2 mt-3">
                <div>
                  <h2 className="text-sm font-semibold">
                    {skill.title}
                  </h2>
                  <p className="text-xs text-[#888888] font-medium mt-1">
                    {skill.description}
                  </p>
                </div>

                <div className="flex mt-4 justify-between">
                  <div>
                    <p className="text-[10px]">Provider</p>
                    <p className="text-xs text-[#888888] font-semibold">
                      {skill.provider}
                    </p>
                  </div>

                  <div>
                    <div className="flex space-x-1">
                      <p className="text-[10px]">Ratings: </p>
                      <p className="text-xs text-[#888888] font-semibold">
                        {skill.ratings}({skill.reviews} Reviews)
                      </p>
                    </div>
                    <div className="flex space-x-1 mt-1">
                      {[...Array(5)].map((_, index) => {
                        const star = index + 1;
                        return (
                          <StarIcon
                            key={index}
                            className={`${
                              star <= Math.round(skill.ratings)
                                ? "text-[#6A93FF]"
                                : "text-[#C4DBFF]"
                            } h-3 w-3`}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#EDF4FF] hover:bg-[#6A93FF] text-center text-[#6A93FF] hover:text-white rounded-b-[8px] font-semibold text-sm py-1 mt-5">
                Request Service
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Featured;
