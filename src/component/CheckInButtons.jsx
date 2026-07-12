"use client";
import { TimeLineContext } from "@/context/TimeLineProvider";
import { useContext } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { MdOutlineTextsms } from "react-icons/md";
import { toast } from "react-toastify";

const CheckInButtons = ({ friend }) => {
  const { timeLines, setTimeLines } = useContext(TimeLineContext);

  const addTimeLineEntry = (type) => {
    const newTimeLines = {
      name: friend.name,
      type,
      date: Date.now(),
    };
    setTimeLines([...timeLines, newTimeLines]);

    toast.success(`Timeline added for ${friend.name}`)
  };

  return (
    <div className="bg-[#FFFFFF] rounded-md shadow my-4 p-4 flex flex-col gap-4">
      <div className="text-[#244D3F] text-[20px] font-medium">
        Quick Check-In
      </div>
      <div className="grid grid-cols-3 gap-4">
        <button onClick={() => addTimeLineEntry("call")} className="bg-[#F8FAFC] p-4 rounded-md flex flex-col items-center gap-2 hover:scale-105 transition-transform duration-200">
          <span className="text-3xl">
            <BiPhoneCall />
          </span>
          <span className="text-[18px]">Call</span>
        </button>
        <button onClick={() => addTimeLineEntry("text")} className="bg-[#F8FAFC] p-4 rounded-md flex flex-col items-center gap-2 hover:scale-105 transition-transform duration-200">
          <span className="text-3xl">
            <MdOutlineTextsms />
          </span>
          <span className="text-[18px]">Text</span>
        </button>
        <button onClick={() => addTimeLineEntry("video")} className="bg-[#F8FAFC] p-4 rounded-md flex flex-col items-center gap-2 hover:scale-105 transition-transform duration-200">
          <span className="text-3xl">
            <HiOutlineVideoCamera />
          </span>
          <span className="text-[18px]">Video</span>
        </button>
      </div>
    </div>
  );
};

export default CheckInButtons;