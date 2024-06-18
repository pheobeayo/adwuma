import React, { useState } from "react";
import ModalForm from "./ModalForm";
import ModalFormConfirm from "./ModalFormConfirm";
import ModalConfirmation from "./ModalConfirmation";

type Props = {
  isVisible: boolean;
  setShowModal: (arg: boolean) => void;
};

const Modal = ({ isVisible, setShowModal }: Props) => {
  const [formConfirm, setFormConfirm] = useState(false);
  const [confirm, setConfirm] = useState(false);
  if (!isVisible) return null;

  const handleClose = (e: any) => {
    if (e.target.id == "wrapper") {
      return setShowModal(false);
    }
  };

  const handleFormConfirm = () => {
    setFormConfirm(true)
  }

  const handleConfirm = () => {
    setConfirm(true)
  }
  return (
    <div
      onClick={handleClose}
      id="wrapper"
      className="fixed max-w-md inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-50 flex justify-center items-center"
    >
      <div className="w-[95%] flex flex-col">
        <button
          onClick={() => setShowModal(false)}
          className="text-white font-bold place-self-end"
        >
          X
        </button>
        {!formConfirm && <ModalForm handleFormConfirm={handleFormConfirm} />}
        {formConfirm && !confirm && <ModalFormConfirm handleConfirm={handleConfirm} />}
        {confirm && <ModalConfirmation />}
      </div>
    </div>
  );
};

export default Modal;
