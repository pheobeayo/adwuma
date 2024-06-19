import Image from "next/image";
import React, { useState } from "react";

interface CardData {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface CardProps {
  card: CardData;
}

const Card: React.FC<CardProps> = ({ card }) => (
  <div className="bg-white shadow-lg rounded-lg max-w-md mx-auto text-center">
    <div className="bg-[#2E0039] rounded-t-lg flex items-end justify-center h-[240px]">
      <div className="w-[120px] h-[120px] bg-white/20 rounded-[10px] border-[1px] border-white flex items-center justify-center -mb-4">
        <span className="w-[64px] h-[64px] flex justify-center items-center pb-4">
          <Image src={card.icon} alt="icon" />
        </span>{" "}
        {/* Placeholder icon */}
      </div>
    </div>
    <div className="h-[200px]">
      <h2 className="text-base font-[500] mt-4 text-[#666666]">{card.title}</h2>
      <p className="text-sm text-[#888888] mt-2 px-5">{card.description}</p>
    </div>
  </div>
);

export default Card;
