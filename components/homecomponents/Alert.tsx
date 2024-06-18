import Image from "next/image";
import NotificationIcon from "../../assets/alert/notification.svg";
import profileimage from "../../assets/alert/profileimage.svg";
import { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";


const Alert = () => {
  useEffect(() => {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="pt-4  -scroll-mt-96">
      <div className="flex justify-between space-x-4">
        {/* Connect wallet button */}
        <button className=" w-full text-white h-[44px] rounded-[12px]">
        <ConnectButton/>
        </button>

         

        <div className="flex justify-end items-center space-x-5 w-full">
          <Image src={NotificationIcon} alt="notify_" />
          <div>
            <Image
              src={profileimage}
              alt="profileimage"
              className="w-[32px] h-[32px] rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
