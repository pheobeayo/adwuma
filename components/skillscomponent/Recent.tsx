import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import RecentImg1 from "../../assets/recent/recentimg1.svg";
import RecentImg2 from "../../assets/recent/recentimg2.svg";
import RecentImg3 from "../../assets/recent/recentimg3.svg";
import RecentImg4 from "../../assets/recent/recentimg4.svg";
import RecentImg5 from "../../assets/recent/recentimg5.svg";
import RecentImg6 from "../../assets/recent/recentimg6.svg";

const Recent = () => {
  const skills = [
    {
      image: RecentImg1,
      title: "Graphic Design",
      description:
        "Professional graphic design services to elevate your brand.",
      ratings: 3.8,
    },
    {
      image: RecentImg2,
      title: "Web Development",
      description: "Custom websites and web applications.",
      ratings: 4.7,
    },
    {
      image: RecentImg3,
      title: "Portrait Photography",
      description: "Professional portrait photography sessions.",
      ratings: 2.1,
    },
    {
      image: RecentImg4,
      title: "Language Tutoring",
      description: "CLearn Spanish with a native speaker.",
      ratings: 4.2,
    },
    {
      image: RecentImg5,
      title: "SEO Consultation",
      description: "Improve your website's search engine ranking",
      ratings: 3.9,
    },
    {
      image: RecentImg6,
      title: "Portrait Photography",
      description: "Professional portrait photography sessions.",
      ratings: 3.4,
    },
  ];
  return (
    <div className="pt-11 mb-28">
      <div>
        <p className="text-sm text-[#888888] font-semibold">
          Recently Added Skills
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-2">
        {skills.map((skill, index) => (
          <div key={index} className="">
            <div className="bg-[#F8F8F8] rounded-[8px] pb-2 mt-4">
              <Image
                src={skill.image}
                alt="skillimage_"
                className="rounded-t-[8px]"
              />

              <div className="px-2 mt-3">
                <h2 className="text-sm font-semibold">{skill.title}</h2>
                <p className="text-xs text-[#888888] font-medium mt-1">
                  {skill.description}
                </p>
              </div>

              <div className="px-2 flex flex-col flex-1 justify-end">
                <p className="text-[10px] mt-2">
                  Ratings:{" "}
                  <span className="text-[#6A93FF] font-semibold">
                    {skill.ratings}
                  </span>
                </p>
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
        ))}
      </div>
    </div>
  );
};

export default Recent;
