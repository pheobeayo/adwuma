import Image from "next/image";
import React, { useEffect } from "react";
import ProfilePhoto from "../../assets/skill-detail/profilephoto.svg";

const Info = () => {
  useEffect(() => {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="mt-5">
      <div className="flex justify-between items-center">
        <div className="flex space-x-2 items-center">
          <Image src={ProfilePhoto} alt="profile_photo" />
          <p className="text-[#3D3D3D] font-semibold text-sm">Alicia Jones</p>
        </div>
        <div>
          <p className="text-sm text-[#6A93FF]">Available Now</p>
        </div>
      </div>

      <div className="mt-7">
        <h2 className="text-[#3D3D3D] font-semibold text-sm">
        Background
        </h2>
        <p className="text-[#666666] text-xs mt-2">
        As an Expert Smart Contract Developer, I specialize in creating secure, 
        efficient, and innovative blockchain solutions. With extensive experience 
        in developing, auditing, and deploying smart contracts, I bring a wealth of knowledge 
        and technical expertise to every project.
        </p>
        <div className="flex justify-between mt-3">
          <p className="text-xs text-[#666666] font-semibold">Price: </p>
          <p className="text-xs text-[#3D3D3D] font-semibold">400.00 USDT</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
