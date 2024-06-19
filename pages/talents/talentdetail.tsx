import NavBar from "@/components/NavBar";
import TalentDetailsWrapper from "@/components/talentdetailcomponent/TalentDetailsWrapper";


const talentdetail = () => {
  return (
    <div className="max-w-md mx-auto ">
      <div className="fixed bottom-0 w-full z-10">
        <NavBar />
      </div>
      <div className="px-3 mb-28">
        <TalentDetailsWrapper />
      </div>
    </div>
  );
};

export default talentdetail;
