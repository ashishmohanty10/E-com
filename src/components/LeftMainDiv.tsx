"use client";

import React, { useState } from "react";
import ProductImg1 from "../../public/image-product-1.jpg";
import ProductImg2 from "../../public/image-product-2.jpg";
import ProductImg3 from "../../public/image-product-3.jpg";
import ProductImg4 from "../../public/image-product-4.jpg";
import Image from "next/image";

type ImagePreview = {
  img: string;
};
const image = [
  {
    img: ProductImg1,
  },
  {
    img: ProductImg2,
  },
  {
    img: ProductImg3,
  },
  {
    img: ProductImg4,
  },
];

const LeftMainDiv = () => {
  const [previewImage, setPreviewImage] = useState<number>(0);

  const handlePreviewImage = (index: number) => {
    setPreviewImage(index);
  };
  return (
    <div className="mt-10 md:w-1/2 flex items-center flex-col justify-center mb-5 md:mb-0">
      <Image
        src={image[previewImage].img}
        alt="Preview images"
        width={500}
        height={400}
        className="rounded-2xl"
      />

      <div className="flex items-center  gap-5 mt-5 object-contain">
        {image.map((data, idx) => {
          return (
            <div key={idx}>
              <Image
                src={data.img}
                onMouseEnter={() => handlePreviewImage(idx)}
                onClick={() => handlePreviewImage(idx)}
                alt="Preview Image thumbnails"
                width={60}
                height={60}
                className="rounded-xl "
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeftMainDiv;
