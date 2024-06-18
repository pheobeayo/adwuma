import Image from "next/image";
import React from "react";
import WorkshopImg1 from "../../assets/workshop/workshopimg1.svg";
import WorkshopImg2 from "../../assets/workshop/workshopimg2.svg";

const Workshops = () => {
  const workshops = [
    {
      title: "Blockchain Basics",
      image: WorkshopImg1,
      description: "A beginner's guide to blockchain technology.",
      date: "June 10 2024",
      time: "2:00 PM EST",
    },
    {
      title: "Design Thinking",
      image: WorkshopImg2,
      description: "Learn how to apply design thinking principles.",
      date: "June 15 2024",
      time: "4:00 PM EST",
    },
  ];
  return (
    <div className="pt-14">
      <p className="text-sm text-[#888888] font-semibold">Workshops</p>

      {workshops.map((workshop, index) => (
        <div key={index} className="rounded-[8px] pb-2 mt-4 bg-[#F8F8F8]">
          <div>
            <Image
              src={workshop.image}
              alt="workshop_img"
              className="rounded-t-[8px]"
            />
          </div>

          <div className="px-2 mt-3">
            <div>
              <h2 className="text-sm font-semibold text-[#6A93FF]">
                {workshop.title}
              </h2>
              <p className="text-xs text-[#888888] font-medium mt-1">
                {workshop.description}
              </p>
            </div>

            <div className="flex mt-4 space-x-4">
              <div>
                <p className="text-[10px]">Date</p>
                <p className="text-xs text-[#888888]">{workshop.date}</p>
              </div>

              <div>
                <p className="text-[10px]">Time</p>
                <p className="text-xs text-[#888888]">{workshop.time}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Workshops;
