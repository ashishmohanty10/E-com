"use client";

import React, { useEffect, useRef, useState } from "react";
import Logo from "../../public/logo.svg";
import MenuBtn from "../../public/icon-menu.svg";
import CloseBtn from "../../public/icon-close.svg";
import CartIcon from "../../public/icon-cart.svg";
import ProfiltImg from "../../public/image-avatar.png";
import Image from "next/image";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Navbar = () => {
  const [sideNav, setSideNav] = useState(false);
  const [parent] = useAutoAnimate();
  return (
    <div className="h-[10vh] flex justify-between items-center md:border-b border-greyishBlur">
      {/* right div */}
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-5" ref={parent}>
          {/* sidebar icon */}
          {sideNav && <MobileNav setSideNav={setSideNav} />}
          <div className="md:hidden" onClick={() => setSideNav(true)}>
            <Image src={MenuBtn} alt="Close icon" />
          </div>

          {/* brandLogo */}
          <div>
            <Image src={Logo} alt="Brand Logo" />
          </div>
        </div>

        {/* Desktop navLinks */}
        <div className="hidden md:flex gap-5">
          {navLinks.map((data, idx) => {
            return (
              <ul key={idx}>
                <li className="text-sm font-medium hover:text-primaryOrange duration-75">
                  {data.title}
                </li>
              </ul>
            );
          })}
        </div>
      </div>

      {/* left div */}
      <div className="flex items-center gap-5">
        <div className="cursor-pointer">
          <Image src={CartIcon} alt="Cart Icon" />
        </div>

        <div className="cursor-pointer">
          <Image
            src={ProfiltImg}
            alt="Profile Image"
            className="w-[40px] h-[40px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const navLinks = [
  {
    id: 1,
    title: "Collection",
  },
  {
    id: 1,
    title: "Men",
  },

  {
    id: 1,
    title: "Women",
  },

  {
    id: 1,
    title: "About",
  },
  {
    id: 1,
    title: "Contact",
  },
];

type MobileNav = {
  setSideNav: React.Dispatch<React.SetStateAction<boolean>>;
};

function MobileNav({ setSideNav }: MobileNav) {
  return (
    <div className="bg-white p-5  h-screen   w-[200px] fixed top-0 left-0">
      <Image
        src={CloseBtn}
        alt="Close Icon"
        className="mb-5"
        onClick={() => setSideNav(false)}
      />
      <div>
        {navLinks.map((data, idx) => {
          return (
            <>
              <ul key={idx} className="flex flex-col mb-3 ">
                <li className="font-semibold hover:text-primaryOrange">
                  {data.title}
                </li>
              </ul>
            </>
          );
        })}
      </div>
    </div>
  );
}
