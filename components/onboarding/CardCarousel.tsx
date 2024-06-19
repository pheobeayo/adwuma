import Image from "next/image";
import { useState } from "react";
import Card from "./Card";
import CardIcon from "../../assets/card/cardicon.svg"
import CardIcon1 from "../../assets/card/cardicon1.svg"
import CardIcon2 from "../../assets/card/cardicon2.svg"


interface CardData {
  id: number;
  title: string;
  description: string;
  icon: string;
  
}

type Props = {
  handleShowProfile: () => void;
};

const cards: CardData[] = [
  {
    id: 1,
    title: "Talent",
    description:
      "I’m looking for exciting Web3 projects that match my  skills and interests.",
    icon: CardIcon,
    
  },
  {
    id: 2,
    title: "Client",
    description:
      "I’m looking to hire skilled professionals for my project? ",
    icon: CardIcon1,
    
  },
  {
    id: 3,
    title: "Explorer",
    description:
      "Searching for projects or exciting opportunities that match your skills and interests.",
    icon: CardIcon2,
    
  },
];

const CardCarousel: React.FC<Props> = ({ handleShowProfile }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

 

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < cards.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="p-4 h-screen flex flex-col justify-center items-center">
      <Card card={cards[currentIndex]} />
      {/* Pagination */}
      <div className="flex justify-center -mt-10">
        {cards.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full mx-1 ${
              index === currentIndex ? "bg-[#9747FF]" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>

      <div className="flex justify-center mt-20">
        {/* {currentIndex > 0 && (
          <button
            className="bg-[#6A93FF] text-white px-4 py-2 rounded-[12px] mr-2"
            onClick={handlePrevious}
          >
            Previous
          </button>
        )} */}
        
        <button
          className="bg-gradient-to-b from-[#9747FF] via-[#6A93FF] to-[#9747FF] text-white w-[240px] h-[44px] px-4 py-2 rounded-[12px] ml-2"
          onClick={currentIndex === cards.length - 1 ? handleShowProfile : handleNext}
        >
          {currentIndex === cards.length - 1 ? "Get Started" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default CardCarousel;
