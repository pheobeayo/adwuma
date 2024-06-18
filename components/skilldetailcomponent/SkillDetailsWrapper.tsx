import React from "react";
import Info from "@/components/skilldetailcomponent/Info";
import Modal from "@/components/skilldetailcomponent/Modal";
import Portfolio from "@/components/skilldetailcomponent/Portfolio";
import Request from "@/components/skilldetailcomponent/Request";
import Reviews from "@/components/skilldetailcomponent/Reviews";
import Similar from "@/components/skilldetailcomponent/Similar";
import { useState } from "react";

const SkillDetailsWrapper = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Info />
      <Portfolio />
      <Reviews />
      <Request setShowModal={setShowModal} />
      <Similar />
      <Modal isVisible={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default SkillDetailsWrapper;
