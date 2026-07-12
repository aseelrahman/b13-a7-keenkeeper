"use client";
import StatsChart from "@/component/StatsChart";
import { TimeLineContext } from "@/context/TimeLineProvider";
import { useContext } from "react";

const Stats = () => {
  const { timeLines } = useContext(TimeLineContext);

  const counts = { text: 0, call: 0, video: 0 };
  if (timeLines) {
    timeLines.forEach((entry) => {
      if (counts[entry.type] !== undefined) counts[entry.type]++;
    });
  }
  const data = [
    { name: "Text", value: counts.text, fill: "#60A5FA" },
    { name: "Call", value: counts.call, fill: "#4ADE80" },
    { name: "Video", value: counts.video, fill: "#F472B6" },
  ];

  console.log(counts);

  return (
    <div className="bg-[#F8FAFC]">
      <div className="container mx-auto min-h-screen py-20">
        <h1 className="text-3xl text-center md:text-left md:text-5xl font-bold mb-4">Friendship Analytics</h1>
        <div className="bg-white rounded-md shadow p-8 m-10 md:m-0">
          <h2 className="text-[#244D3F] text-[20px] text-center md:text-left">By Interaction Type</h2>
          <StatsChart data={data} />
        </div>
      </div>
    </div>
  );
};

export default Stats;
