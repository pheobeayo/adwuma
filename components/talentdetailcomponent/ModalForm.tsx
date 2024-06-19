import React from "react";

type Props = {
  handleFormConfirm: () => void;
};

const ModalForm = ({ handleFormConfirm }: Props) => {
  return (
    <div className="bg-white px-2 py-5 rounded-[8px]">
      <p className="text-xs text-[#666666]">Project Contract</p>
      <div className="mb-2 mt-2">
        <label className="block text-[#666666] text-sm font-[600] mb-2">
          Project Name
        </label>
        <input
          className="h-[40px] border-[1px] border-[#888888] rounded-[8px] w-full py-2 px-3 text-[#888888] leading-tight focus:outline-none text-sm focus:shadow-outline bg-transparent"
          placeholder="E.g. A Dapp called Memoverse"
        />
      </div>
      <div className="mb-2 mt-2">
        <label className="block text-[#666666] text-sm font-[600] mb-2">
          Project description
        </label>
        <input
          className="h-[40px] border-[1px] border-[#888888] rounded-[8px] w-full py-2 px-3 text-[#888888] leading-tight focus:outline-none text-sm focus:shadow-outline bg-transparent"
          placeholder="Enter details of the project"
        />
      </div>
      <div className="mb-2 mt-2">
        <label className="block text-[#666666] text-sm font-[600] mb-2">
          Milestones
        </label>
        <input
          className="h-[40px] border-[1px] border-[#888888] rounded-[8px] w-full py-2 px-3 text-[#888888] leading-tight focus:outline-none text-sm focus:shadow-outline bg-transparent"
          placeholder="Enter milestones of the project"
        />
      </div>

      <div className="mb-2 mt-2">
        <label className="block text-[#666666] text-sm font-[600] mb-2">
          Start date
        </label>
        <input
          type="date"
          className="h-[40px] border-[1px] border-[#888888] rounded-[8px] w-full py-2 px-3 text-[#888888] leading-tight focus:outline-none text-sm focus:shadow-outline bg-transparent"
          placeholder="Select a date"
        />
      </div>

      <div className="mb-2 mt-2">
        <label className="block text-[#666666] text-sm font-[600] mb-2">
          Preferred completion date
        </label>
        <input
          type="date"
          className="h-[40px] border-[1px] border-[#888888] rounded-[8px] w-full py-2 px-3 text-[#888888] leading-tight focus:outline-none text-sm focus:shadow-outline bg-transparent"
          placeholder="Select a date"
        />
      </div>

      <div className="mb-2 mt-2">
        <label className="block text-[#666666] text-sm font-[600] mb-2">
          Milestone Deadline
        </label>
        <input
          type="date"
          className="h-[40px] border-[1px] border-[#888888] rounded-[8px] w-full py-2 px-3 text-[#888888] leading-tight focus:outline-none text-sm focus:shadow-outline bg-transparent"
          placeholder="Select a date"
        />
      </div>

      <div className="mb-2 mt-2">
        <label className="block text-[#666666] text-sm font-[600] mb-2">
        Total Project Fee
        </label>
        <input
          type="amount"
          className="h-[40px] border-[1px] border-[#888888] rounded-[8px] w-full py-2 px-3 text-[#888888] leading-tight focus:outline-none text-sm focus:shadow-outline bg-transparent"
          placeholder="write total project fee"
        />
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
