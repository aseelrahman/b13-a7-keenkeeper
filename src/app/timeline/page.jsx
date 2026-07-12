"use client";

import { TimeLineContext } from "@/context/TimeLineProvider";
import { useContext } from "react";
import TimeLineCard from "@/component/TimeLineCard";

const TimeLine = () => {
  const { timeLines, setTimeLines } = useContext(TimeLineContext);

  console.log(timeLines);

  return (
    <div className="py-20 bg-[#F8FAFC]">
      <div className="container mx-auto min-h-screen">
        <h2 className="text-[#1F2937] text-5xl font-bold">Timeline</h2>

        <div className="space-y-6 my-6">
          {timeLines.map((timeLine, index) => (
            <TimeLineCard key={index} timeLine={timeLine} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
