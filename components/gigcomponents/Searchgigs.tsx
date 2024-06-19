import Image from "next/image";
import Link from "next/link";
import React from "react";
import Filter from "../../assets/search/filter.svg";

const SearchGigs = () => {
  return (
    <div className="pt-5">
      <div className="flex justify-between">
        <p className="text-sm text-[#888888] font-semibold">Explore Gigs</p>
        <Link href="/skills" className="text-sm text-[#6A93FF] underline">
          Request(2)
        </Link>
      </div>

      <div className="flex space-x-2 mt-5">
        <div className="relative w-full ">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>

          <input
            className="h-[44px] relative pl-10 border-[1px] border-[#666666] text-sm rounded-[8px] w-full py-2 px-3 text-[#888888] leading-tight focus:outline-none focus:shadow-outline bg-transparent"
            id="links"
            type="text"
            placeholder="Search for gigs to boost your career an earn.."
          />
        </div>

        <button className="h-[44px] border-[1px] border-[#666666] rounded-[8px] py-2 px-3 text-[#888888] leading-tight focus:outline-none focus:shadow-outline bg-transparent flex justify-center items-center">
          <Image src={Filter} alt="link_icon" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default SearchGigs;
