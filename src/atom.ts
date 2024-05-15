import { atom } from "jotai";
import { StaticImageData } from "next/image";

export const countAtom = atom(0);

type productAtomType = {
  image: string | StaticImageData;
  productName: string;
  productPrice: number;
  productCount: number;
};

export const productAtom = atom<productAtomType | null>(null);
