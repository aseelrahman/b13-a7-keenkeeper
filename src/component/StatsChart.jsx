"use client";

import { Legend, Pie, PieChart, Tooltip } from "recharts";

const StatsChart = ({ isAnimationActive = true, data }) => {
  return (
    <div className=" flex justify-center py-6">
      <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "80vh",
          aspectRatio: 1,
        }}
        responsive
      >
        <Pie
          data={data}
          innerRadius="85%"
          outerRadius="100%"
          // Corner radius is the rounded edge of each pie slice
          cornerRadius="10%"
          fill="#8884d8"
          // padding angle is the gap between each pie slice
          paddingAngle={3}
          dataKey="value"
          isAnimationActive={isAnimationActive}
        />

        <Legend
          iconType="circle"
          formatter={(value, entry) => `${value}: ${entry.payload.value}`}
          wrapperStyle={{ paddingTop: 20 }}
        />

        <Tooltip />
      </PieChart>
    </div>
  );
};

export default StatsChart;
