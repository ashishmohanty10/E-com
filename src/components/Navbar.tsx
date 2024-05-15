"use client";

import React, { useState } from "react";
import Logo from "../../public/logo.svg";
import MenuBtn from "../../public/icon-menu.svg";
import CloseBtn from "../../public/icon-close.svg";
import CartIcon from "../../public/icon-cart.svg";
import ProfiltImg from "../../public/image-avatar.png";
import Image from "next/image";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Link from "next/link";
import { HiShoppingCart, HiTrash } from "react-icons/hi";
import productimg1 from "../../public/image-product-1.jpg";
import { useAtom } from "jotai";
import { productAtom } from "@/atom";
import { CartUi } from "./CartUI";

const Navbar = () => {
  const [product] = useAtom(productAtom);
  const [sideNav, setSideNav] = useState(false);
  const [parent] = useAutoAnimate();
  const [isCart, setCart] = useState(false);

  function toggleCartUi() {
    setCart(!isCart);
  }
  return (
    <div className="h-[10vh] flex justify-between items-center md:border-b border-greyishBlur mb-5">
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
        <div className="flex gap-5">
          {navLinks.map((data, idx) => {
            return (
              <Link href={data.href} key={idx}>
                <span className="hidden md:flex items-center text-sm font-medium h-[10vh] border-b-[4px]   border-transparent   hover:border-primaryOrange hover:text-primaryOrange duration-75">
                  {data.title}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* left div */}
      <div className="flex items-center gap-5">
        <div className="relative cursor-pointer">
          <HiShoppingCart
            onClick={toggleCartUi}
            className="text-3xl cursor-pointer"
          />
          {product ? (
            <div className="bg-orange-500 text-white h-5 w-4 text-xs rounded-full flex items-center justify-center absolute top-[-5px] right-0">
              {" "}
              {product?.productCount}
            </div>
          ) : null}
          {isCart && <CartUi />}
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
    href: "#",
  },
  {
    id: 1,
    title: "Men",
    href: "#",
  },

  {
    id: 1,
    title: "Women",
    href: "#",
  },

  {
    id: 1,
    title: "About",
    href: "#",
  },
  {
    id: 1,
    title: "Contact",
    href: "#",
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

// cart UI
