import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: 55,
  plugins: {
    legend: false,
    title: {
      display: false,
    },
  },
};

export const data = {
  labels: ["Single", "Double", "Delux", "Suit"],
  datasets: [
    {
      data: [3305, 859, 482, 138],
      backgroundColor: ["#9CABFF", "#1EE0AC", "#F9DB7B", "#FFA353"],
      borderColor: "#fff",
      borderWidth: 2,
      hoverBorderColor: "#fff",
    },
  ],
};

const RoomBookingChart = () => {
  return <Doughnut options={options} data={data} />;
};
export default RoomBookingChart;
