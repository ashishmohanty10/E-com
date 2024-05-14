"use client";

import React from "react";
import { HiOutlinePlusSm, HiPlusSm, HiShoppingCart } from "react-icons/hi";
import { HiMinusSm } from "react-icons/hi";
import { countAtom, productAtom } from "../atom";
import { useAtom } from "jotai";
import ProductImg1 from "../../public/image-product-1.jpg";

const RightMainDiv = () => {
  const [count, setCount] = useAtom(countAtom);
  const [product, setProduct] = useAtom(productAtom);

  function increament() {
    setCount(count + 1);
  }

  function decreament() {
    setCount(count - 1);
  }

  function addToCart() {
    setProduct({
      image: ProductImg1,
      procutName: "Autumn Limited Edition...",
      productCount: count,
      productPrice: 125,
    });
  }
  return (
    <div className="flex flex-col max-w-[400px]">
      <p className="text-sm font-bold text-primaryOrange mb-4">
        SNEAKER COMPANY
      </p>

      <h2 className="text-4xl font-bold mb-6 text-veryDa">
        Fall Limited Edition Sneaker
      </h2>

      <p className="text-sm font-medium text-darkGreyishBlue  tracking-tight leading-relaxed mb-4">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole,they'll withstand everything the
        weather can offer
      </p>

      <p className="flex gap-2 items-center">
        <span className="font-bold text-2xl text-veryDarkBlue">$125.00</span>
        <span className="py-1 px-2 rounded-md text-sm font-semibold text-primaryOrange bg-paleOrange ">
          50%
        </span>
      </p>

      <p className="text-greyishBlue mb-4">
        <s>$250.00</s>
      </p>

      <section className="flex items-center gap-5">
        {/* plus and minus btn  */}
        <div className=" flex gap-2 rounded-md text-primaryOrange bg-gray-100  items-center  h-14 w-32 px-5 justify-between">
          <button onClick={decreament}>
            <HiMinusSm className="text-xl" />
          </button>
          <span className="text-black font-bold"> {count} </span>
          <button onClick={increament}>
            <HiPlusSm className="text-xl" />
          </button>
        </div>

        <button className="h-14 w-[200px] items-center justify-center flex gap-3 bg-primaryOrange text-white  rounded-md ">
          <span>
            <HiShoppingCart className="text-xl" />
          </span>

          <span className="font-bold">Add to Card</span>
        </button>
      </section>
    </div>
  );
};

export default RightMainDiv;
