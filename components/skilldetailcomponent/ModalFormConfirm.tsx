import React from "react";
import ProfilePhoto from "../../assets/skill-detail/profilephoto.svg";
import Image from "next/image";

type Props = {
  handleConfirm: () => void;
};

const ModalFormConfirm = ({ handleConfirm }: Props) => {
  return (
    <div className="bg-white px-2 py-5 rounded-[8px]">
      <p className="text-xs text-[#666666]">Confirm Your Request</p>

      <div className="bg-[#F8F8F8] mt-5 px-2 py-3 rounded-[4px]">
        <p className="text-xs text-[#888888]">Skills</p>
        <h2 className="text-[#3D3D3D] text-sm font-semibold mt-3">
          Professional Logo Design
        </h2>
        <p className="text-xs text-[#666666] mt-2">
          I specialize in creating unique and professional logos that make your
          brand stand out. With over 5 years of experience in graphic design, I
          have helped numerous clients enhance their brand identity.
        </p>

        <div className="flex space-x-2 pt-3 items-center">
          <Image src={ProfilePhoto} alt="profile_photo" />
          <p className="text-sm font-semibold text-[#3D3D3D]">Alicia Jones</p>
        </div>
      </div>

      <div className="bg-[#F8F8F8] mt-5 px-2 py-3 rounded-[4px]">
        <p className="text-xs text-[#888888]">Summary</p>
        <div>
          <p className="text-xs text-[#888888] mt-3">Description</p>
          <p className="text-sm text-[#3D3D3D] font-semibold mt-1">
            I need a modern logo for my tech startup
          </p>
        </div>

        <div>
          <p className="text-xs text-[#888888] mt-3">Completion date</p>
          <p className="text-sm text-[#3D3D3D] font-semibold mt-1">
            25th July, 2024
          </p>
        </div>

        <div>
          <p className="text-xs text-[#888888] mt-3">Additional file</p>
          <p className="text-sm text-[#6A93FF] font-semibold mt-1">
            Brand PRD.pdf
          </p>
        </div>
      </div>

      <div className="mt-4 flex justify-between space-x-4">
        <button className="border-[1px] text-sm border-gray-600 text-[#666666] bg-transparent hover:bg-[#6A93FF] hover:text-white rounded-[4px] py-2 px-4 w-1/2">Edit</button>
        <button onClick={handleConfirm} className="bg-[#6A93FF] w-1/2 text-white h-[44px] rounded-[4px]">Next</button>
      </div>
    </div>
  );
};

export default ModalFormConfirm;
