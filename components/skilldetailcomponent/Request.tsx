import React from "react";

type Props = {
  setShowModal: (arg: boolean) => void;
}

const Request = ({setShowModal}: Props) => {
  return (
    <div>
      <div>
        <div className="pt-8 pb-2">
          <button onClick={() => setShowModal(true)} className="bg-[#6A93FF] w-full text-white h-[44px] rounded-[12px]">
            Request Service
          </button>
        </div>

        <p className="text-xs text-[#666666] text-center">Contact Alice to discuss your logo design needs and start your project.</p>
      </div>
    </div>
  );
};

export default Request;
