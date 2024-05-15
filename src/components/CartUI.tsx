import { productAtom } from "@/atom";
import { useAtom } from "jotai";
import productimg1 from "../../public/image-product-1.jpg";
import React from "react";
import Image from "next/image";
import { HiTrash } from "react-icons/hi";

export function CartUi() {
  const [product, setProduct] = useAtom(productAtom);

  // product
  return (
    <div className="absolute top-12 right-[-50px] border w-[350px]  max-w-[350px] p-3 rounded-md shadow-md  flex flex-col gap-3  bg-white ">
      {product ? (
        <>
          <p className="text-xl font-bold">Cart</p>

          <div className="w-full bg-gray-300 h-[1px]" />
          <section className="flex justify-between gap-3">
            {/* product image */}
            <Image
              className="h-10 rounded w-auto"
              src={productimg1}
              alt="product-img"
            />
            {/* procut details */}
            <div className=" text-sm">
              <p className="text-gray-400">{product?.productName}</p>
              <p>
                <span className="text-gray-400">
                  {" "}
                  ${product?.productPrice} x {product?.productCount}{" "}
                </span>{" "}
                <span className="font-bold">
                  {" "}
                  $ {product?.productPrice * product?.productCount}.00
                </span>{" "}
              </p>
            </div>
            {/* delete icon */}
            <button onClick={() => setProduct(null)}>
              <HiTrash className="text-3xl text-gray-400" />
            </button>
          </section>
        </>
      ) : (
        <div className="text-gray-300 text-sm">You cart is empty</div>
      )}

      <button className="w-full bg-orange-400 text-white py-1.5 rounded-md">
        Checkout
      </button>
    </div>
  );
}
