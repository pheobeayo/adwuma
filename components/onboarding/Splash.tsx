import Image from "next/image";
import React from "react";
import splash from "../../assets/alert/splash.svg";
import zkpass from "../../assets/alert/zkpass.svg";

const Splash = () => {
  return (
    <div className="bg-white w-screen h-screen">
      <div className="grid place-items-center">
        <Image src={splash} alt="splash" />
      </div>
      <div className="grid place-items-center">
        <button className="bg-[#9747FF] text-white w-[240px] h-[44px] px-4 py-2 rounded-[12px] ml-2">
          {" "}
          powered by <Image src={zkpass} alt="zkpass" />{" "}
        </button>{" "}
      </div>
    </div>
  );
};
export default Splash;
