import Image from "next/image";
import { FaPlus } from "react-icons/fa";

export default function Home() {
  return (
    <div className="container mx-auto min-h-screen">
      <div className="flex flex-col items-center text-center mt-20">
        <h1 className="text-5xl font-bold">
          Friends to keep close in your life
        </h1>
        <p className="text-[#64748B] pt-4">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br /> relationships that matter most.
        </p>
        <button className="flex items-center gap-1 mt-8 py-3 px-4 text-[16px] rounded-full  bg-[#244D3F] text-white">
          <FaPlus /> Add a Friend
        </button>
      </div>
    </div>
  );
}
