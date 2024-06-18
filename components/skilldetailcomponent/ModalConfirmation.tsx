import Image from "next/image";
import React from "react";
import ConfirmIcon from "../../assets/skill-detail/confirm.svg";
import Link from "next/link";

const ModalConfirmation = () => {
  return (
    <div className="bg-white px-2 py-5 rounded-[8px]">
      <div className="flex flex-col justify-center items-center pt-5">
        <Image src={ConfirmIcon} alt="con_icon" />
        <p className="text-center font-semibold text-sm text-[#3D3D3D] mt-6">
          Your service request has been submitted. Alicia will respond within 24
          hours.
        </p>
      </div>

      <div className="mt-8 flex justify-between space-x-4">
        <button className="border-[1px] text-sm border-gray-600 text-[#666666] bg-transparent hover:bg-[#6A93FF] hover:text-white rounded-[4px] py-2 px-4 w-1/2">
          View My Requests
        </button>

        <button className="bg-[#6A93FF] w-1/2 text-white h-[44px] rounded-[4px]">
          <Link href="/">Back to Home</Link>
        </button>
      </div>
    </div>
  );
};

export default ModalConfirmation;
