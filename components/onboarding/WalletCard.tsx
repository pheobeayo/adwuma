import React from "react";
import WalIcon1 from "../../public/icons/walicon1.svg";
import WalIcon2 from "../../public/icons/walicon2.svg";
import WalIcon3 from "../../public/icons/walicon3.svg";
import WalIcon4 from "../../public/icons/walicon4.svg";
import Image from "next/image";

type Props = {
  handleShowProfile: () => void;
};

const WalletCard = ({ handleShowProfile }: Props) => {
  return (
    <div className="p-4 h-screen flex flex-col justify-center items-center">
      <div className="h-[277px] max-w-md mx-auto bg-white shadow-lg rounded-lg pt-6 flex flex-col justify-end">
        <div className="h-full">
          <h1 className="font-[700] text-base text-center">
            Connect Your Wallet
          </h1>
          <p className="text-sm text-[#888888] mt-3 px-2 font-[500] text-center">
            Securely sign up or log in using your cryptocurrency wallet.
          </p>
        </div>

        <div className="mb-4 flex flex-col">
          <p className="text-xs text-center">
            Select your preferred wallet to continue
          </p>
          <div className="flex justify-between mx-3 mt-4">
            <div
              onClick={handleShowProfile}
              className="w-[64px] h-[64px] border-[1.5px] border-[#6A93FF] rounded-[4px] bg-[#EDF4FF] flex justify-center items-center cursor-pointer"
            >
              <Image src={WalIcon1} alt="icon" />
            </div>

            <div
              onClick={handleShowProfile}
              className="w-[64px] h-[64px] border-[1.5px] border-[#6A93FF] rounded-[4px] bg-[#EDF4FF] flex justify-center items-center cursor-pointer"
            >
              <Image src={WalIcon2} alt="icon" />
            </div>

            <div
              onClick={handleShowProfile}
              className="w-[64px] h-[64px] border-[1.5px] border-[#6A93FF] rounded-[4px] bg-[#EDF4FF] flex justify-center items-center cursor-pointer"
            >
              <Image src={WalIcon3} alt="icon" />
            </div>

            <div
              onClick={handleShowProfile}
              className="w-[64px] h-[64px] border-[1.5px] border-[#6A93FF] rounded-[4px] bg-[#EDF4FF] flex justify-center items-center cursor-pointer"
            >
              <Image src={WalIcon4} alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletCard;
