import Image from "next/image";
import React from "react";
import profileimage from "../../assets/alert/profileimage.svg";
import LinkIcon from "../../assets/profile/linkicon.svg";
import { PlusIcon } from "@heroicons/react/24/solid";

type Props = {
  handleSubmit: () => void;
};

interface ButtonData {
  title: string;
}

const Profile = ({ handleSubmit }: Props) => {
  const buttons: ButtonData[] = [
    {
      title: "Resume",
    },
    {
      title: "Behance",
    },
    {
      title: "LinkedIn",
    },
    {
      title: "Github",
    },
    {
      title: "Dribble",
    },
    {
      title: "Medium",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#9747FF] via-[#6A93FF] to-[#9747FF]">
      <div className="pt-4">
        <h1 className="text-[#fff] font-[500] font-serif text-4xl text-center pt-3">
          Sign up
        </h1>
        <p className="text-sm text-[#fff] text-center pt-3">
          Provide accurate information to help others find you and your skills.
        </p>

        <div className="flex flex-col justify-center items-center pt-14">
          <div className=" font-[500]">
            <Image src={profileimage} alt="profileimage" />
          </div>
          <a className="text-center text-sm text-[#fff] underline font-[500] pt-3 cursor-pointer">
            Kindly Add Your Profile Picture
          </a>
        </div>

        <div className="max-w-md mx-auto mt-10 mb-3 px-4">
          <form>
            <div className="mb-6">
              <label
                className="block text-[#fff] text-sm font-[500] mb-2"
                htmlFor="username"
              >
                Username:
              </label>
              <input
                className="h-[44px] border-[1px] border-black rounded-[8px] w-full py-2 px-3 text-[#fff] leading-tight focus:outline-none focus:shadow-outline bg-[#D9D9D9]"
                id="username"
                type="text"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-[#fff] text-sm font-[500] mb-2"
                htmlFor="bio"
              >
                Bio:
              </label>
              <input
                className="h-[44px] border-[1px] border-black rounded-[8px] w-full py-2 px-3 text-[#fff] leading-tight focus:outline-none focus:shadow-outline bg-[#D9D9D9]"
                id="bio"
                placeholder="Write a short bio about yourself"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-white text-sm font-[500] mb-2"
                htmlFor="skills"
              >
                Skills:
              </label>
              <input
                className="h-[44px] border-[1px] border-black rounded-[8px] w-full py-2 px-3 text-[#888888] leading-tight focus:outline-none focus:shadow-outline bg-[#D9D9D9]"
                id="skills"
                type="text"
                placeholder="List your skills or services"
              />
            </div>
            <div className="mb-6">
              <div>
                <label
                  className="block text-white text-sm font-[500] mb-2"
                  htmlFor="links"
                >
                  Links
                </label>
              </div>

              <div className="flex space-x-2">
                <input
                  className="h-[44px] border-[1px] border-black rounded-[8px] w-full py-2 px-3 text-[#888888] leading-tight focus:outline-none focus:shadow-outline bg-[#D9D9D9]"
                  id="links"
                  type="text"
                  placeholder="Resume"
                />

                <button className="h-[44px] border-[1px] border-black rounded-[8px] py-2 px-5 text-[#888888] leading-tight focus:outline-none focus:shadow-outline bg-[#D9D9D9] flex justify-center items-center">
                  <Image src={LinkIcon} alt="link_icon" className="mr-2" /> Link
                </button>
              </div>
            </div>

            <div className="mb-4 grid grid-cols-3 gap-x-3 gap-y-5 w-auto">
              {buttons.map((button) => (
                <div
                  key={button.title}
                  className="border-[1px] text-sm border-gray-600 text-[#666666] bg-[#D9D9D9] hover:bg-[#6A93FF] hover:text-white rounded-[4px] py-2 px-4 flex justify-center items-center"
                >
                  <div className="">{button.title} </div>
                  <div>
                    <PlusIcon className="h-4 w-4 ml-2 font-extrabold" />
                  </div>
                </div>
              ))}
            </div>
          </form>
        </div>

        <div className="max-w-md mx-auto px-4 pt-6 pb-5">
          <button
            onClick={handleSubmit}
            className="bg-[#2E0039] w-full text-white h-[44px] rounded-[12px] border-[#9747FF] border-2"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
