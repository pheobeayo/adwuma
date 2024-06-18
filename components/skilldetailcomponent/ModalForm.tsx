import React from "react";

type Props = {
  handleFormConfirm: () => void;
};

const ModalForm = ({ handleFormConfirm }: Props) => {
  return (
    <div className="bg-white px-2 py-5 rounded-[8px]">
      <p className="text-xs text-[#666666]">Customize Your Request</p>

      <div className="mb-6 mt-5">
        <label className="block text-[#666666] text-sm font-[600] mb-2">
          Describe your requirements
        </label>
        <input
          className="h-[44px] border-[1px] border-[#888888] rounded-[8px] w-full py-2 px-3 text-[#888888] leading-tight focus:outline-none text-sm focus:shadow-outline bg-transparent"
          placeholder="E.g. I need a modern logo for my tech startup"
        />
      </div>

      <div className="mb-6 mt-2">
        <label className="block text-[#666666] text-sm font-[600] mb-2">
          Preferred completion date
        </label>
        <input
          type="date"
          className="h-[44px] border-[1px] border-[#888888] rounded-[8px] w-full py-2 px-3 text-[#888888] leading-tight focus:outline-none text-sm focus:shadow-outline bg-transparent"
          placeholder="Select a date"
        />
      </div>

      <div className="mb-6 mt-2">
        <label className="block text-[#666666] text-sm font-[600] mb-2">
          Upload files (optional)
        </label>
        <input
          type="file"
          className="h-[44px] border-[1px] border-[#888888] rounded-[8px] w-full py-2 px-3 text-[#888888] leading-tight focus:outline-none text-sm focus:shadow-outline bg-transparent"
          placeholder="Select a date"
        />
        <p className="text-xs mt-1 text-[#666666]">
          Accepted Formats; PNG, JPG, & PDF
        </p>
      </div>

      <div className="">
        <button onClick={handleFormConfirm} className="bg-[#6A93FF] w-full text-white h-[44px] rounded-[12px]">
          Next
        </button>
      </div>
    </div>
  );
};

export default ModalForm;
