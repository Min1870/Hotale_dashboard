import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const options = {
  responsive: true,
  elements: {
    line: {
      tension: 0.3,
    },
  },
  plugins: {
    datasets: {
      display: false,
    },
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
  scales: {
    x: {
      display: false,
      grid: {
        display: false,
      },
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Income",
      data: [
        4500, 3400, 5400, 7300, 3500, 4000, 5700, 4300, 5400, 7400, 4200, 7000,
      ],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.3)",
      fill: true,
    },
    {
      label: "Expenses",
      data: [
        4000, 4900, 4789, 6800, 4800, 5000, 4800, 4900, 5200, 5600, 4600, 6000,
      ],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132,0.5)",
      borderDash: [5, 5],
    },
  ],
};

const LineChart = () => {
  return <Line options={options} data={data} />;
};
export default LineChart;
