import NavBar from "@/components/NavBar";
import SkillDetailsWrapper from "@/components/skilldetailcomponent/SkillDetailsWrapper";


const skilldetail = () => {
  return (
    <div className="max-w-md mx-auto ">
      <div className="fixed bottom-0 w-full z-10">
        <NavBar />
      </div>
      <div className="px-3 mb-28">
        <SkillDetailsWrapper />
      </div>
    </div>
  );
};

export default skilldetail;
