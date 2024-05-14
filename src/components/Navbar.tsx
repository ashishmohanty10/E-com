"use client";

import React, { useState } from "react";
import Logo from "../../public/logo.svg";
import MenuBtn from "../../public/icon-menu.svg";
import CloseBtn from "../../public/icon-close.svg";
import CartIcon from "../../public/icon-cart.svg";
import ProfiltImg from "../../public/image-avatar.png";
import Image from "next/image";

const Navbar = () => {
  const [sideNav, setSideNav] = useState(false);

  return (
    <div className="h-[60px] flex justify-between items-center md:border-b border-greyishBlur ">
      {/* right div */}
      <div>
        <div className="flex items-center gap-5">
          {/* sidebar icon */}
          <div className="md:hidden">
            {sideNav ? (
              <Image src={CloseBtn} alt="Close icon" />
            ) : (
              <Image src={MenuBtn} alt="Hamburger Icon" />
            )}
          </div>

          {/* brandLogo */}
          <div>
            <Image src={Logo} alt="Brand Logo" />
          </div>
        </div>
      </div>

      {/* left div */}
      <div className="flex items-center gap-5">
        <div>
          <Image src={CartIcon} alt="Cart Icon" />
        </div>

        <div>
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
