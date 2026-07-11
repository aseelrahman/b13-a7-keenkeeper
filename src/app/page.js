import Image from "next/image";
import { FaPlus } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-[#F8FAFC]">
      <div className="container mx-auto min-h-screen">
        <div className="flex flex-col items-center text-center pt-20">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 m-10 sm:m-5">
          <div className="bg-[#FFFFFF] text-center flex flex-col gap-2 py-8 rounded-md shadow">
            <span className="text-[32px] font-semibold">10</span>
            <span className="text-[#64748B]">Total Friends</span>
          </div>
          <div className="bg-[#FFFFFF] text-center flex flex-col gap-2 py-8 rounded-md shadow">
            <span className="text-[32px] font-semibold">3</span>
            <span className="text-[#64748B]">On Track</span>
          </div>
          <div className="bg-[#FFFFFF] text-center flex flex-col gap-2 py-8 rounded-md shadow">
            <span className="text-[32px] font-semibold">6</span>
            <span className="text-[#64748B]">Need Attention</span>
          </div>
          <div className="bg-[#FFFFFF] text-center flex flex-col gap-2 py-8 rounded-md shadow">
            <span className="text-[32px] font-semibold">12</span>
            <span className="text-[#64748B]">Interactions This Month</span>
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </div>
  );
}
