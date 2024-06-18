"use client";
import React, { useState } from "react";
import HomeIcon from "../assets/nav/homeicon.svg";
import SkillsIcon from "../assets/nav/skillsicon.svg";
import CirclesIcon from "../assets/nav/circlesicon.svg";
import ProfileIcon from "../assets/nav/profileicon.svg";
import HomeFilled from "../assets/nav/homefilled.svg";
import SkillsFilled from "../assets/nav/skillsfilled.svg";
import CirclesFilled from "../assets/nav/circlesfilled.svg";
import ProfileFilled from "../assets/nav/profilefilled.svg";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  const [active, setActive] = useState("Home");
  const navs = [
    {
      icon: HomeIcon,
      filledIcon: HomeFilled,
      title: "Home",
      link: "/",
    },
    {
      icon: SkillsIcon,
      filledIcon: SkillsFilled,
      title: "Skills",
      link: "/skills",
    },
    {
      icon: SkillsIcon,
      filledIcon: CirclesFilled,
      title: "Gigs",
      link: "/gigs",
    },
    {
      icon: CirclesIcon,
      filledIcon: CirclesFilled,
      title: "Talents",
      link: "/talents",
    },
    {
      icon: CirclesIcon,
      filledIcon: CirclesFilled,
      title: "Circles",
      link: "/circles",
    },
    {
      icon: ProfileIcon,
      filledIcon: ProfileFilled,
      title: "Profile",
      link: "/profile",
    },
  ];
  return (
    <div className="flex justify-center items-center px-3 max-w-md shadow-2xl h-[80px] bg-white">
      <div className="flex justify-between w-full">
        {navs.map((nav, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center text-[#888888]"
          >
            <Link
              href={nav.link}
              className={`flex flex-col justify-center items-center cursor-pointer ${
                nav.title == active ? "text-[#6A93FF]" : "text-[#888888]"
              }`}
              onClick={() => setActive(nav.title)}
            >
              <Image
                src={nav.title == active ? nav.filledIcon : nav.icon}
                alt="nav_icon"
              />
              <p className="text-xs mt-2">{nav.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
