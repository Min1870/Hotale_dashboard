import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: false,
    title: {
      display: false,
    },
    tooltip: {
      callbacks: {
        title: () => null, // or function () { return null; }
      },
    },
  },

  scales: {
    x: {
      display: false,
      grid: {
        display: false,
      },
    },
    y: {
      display: false,
      grid: {
        display: false,
      },
    },
  },
};
const labels = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
];

export const data = {
  labels,
  datasets: [
    {
      data: [
        1110, 1220, 1320, 980, 900, 720, 1060, 830, 890, 555, 789, 1190, 800,
        1250, 1130, 850, 750, 560, 810, 760, 1250, 1310, 1110, 980, 960, 720,
        980, 800, 650, 860,
      ],
      backgroundColor: "#9CABFF",
      barThickness: 6,
    },
  ],
};

const SaleRevenueChart = () => {
  return <Bar options={options} data={data} />;
};
export default SaleRevenueChart;
