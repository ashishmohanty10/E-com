import LeftMainDiv from "@/components/LeftMainDiv";
import RightMainDiv from "@/components/RightMainDiv";
import Image from "next/image";

export default function Home() {
  return (
    <main className="md:flex md:flex-row  justify-center items-center gap-10 ">
      <LeftMainDiv />
      <RightMainDiv />
    </main>
  );
}
