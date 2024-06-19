import React from "react";
import Info from "@/components/talentdetailcomponent/Info";
import Modal from "@/components/talentdetailcomponent/Modal";
import Portfolio from "@/components/talentdetailcomponent/Portfolio";
import Request from "@/components/talentdetailcomponent/Request";
import Reviews from "@/components/talentdetailcomponent/Reviews";
import Similar from "@/components/talentdetailcomponent/Similar";
import { useState } from "react";

const TalentDetailsWrapper = () => {
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

export default TalentDetailsWrapper;
