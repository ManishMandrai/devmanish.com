// BarGraph.jsx
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarGraph = ({ theme = "light" }) => {
  // Your bar data with colors
  const items = [
    { label: "Coffee", height: 100, color: "rgba(255, 99, 132, 0.8)" },
    { label: "Design", height: 20, color: "rgba(255, 159, 64, 0.8)" },
    { label: "Dev", height: 70, color: "rgba(75, 192, 192, 0.8)" },
    { label: "Debug", height: 85, color: "rgba(54, 162, 235, 0.8)" },
    { label: "DSA", height: 50, color: "rgba(153, 102, 255, 0.8)" },
    { label: "Energy", height: 95, color: "rgba(201, 203, 207, 0.8)" },
  ];

  // Axis colors
  const axisColor = theme === "dark" ? "#e5e7eb" : "#008080"; // gray-200 / gray-700

  const data = {
    labels: items.map((i) => i.label),
    datasets: [
      {
        label: "",
        data: items.map((i) => i.height),
        backgroundColor: items.map((i) => i.color),
        borderRadius: 6,

        // ↓↓↓ Adjust bar width
        barThickness: 70, // change this number to increase/decrease bar width
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        ticks: { color: axisColor },
        grid: {
          display: false, // Hides vertical grid lines inside graph
        },

        // ↓↓↓ Adjust gap between bars
        categoryPercentage: 1.7, // reduce to increase gap (0.4 = more gap, 0.7 = less)
      },

      y: {
        ticks: { color: axisColor },
        grid: {
          display: false, // hides horizontal grid lines inside graph
        },
        border: {
          display: true, // keeps outer axis line
          color: axisColor,
        },
        beginAtZero: true,
        suggestedMax: 100,
      },
    },
  };

  return (
    <div className="w-[72rem] h-[28rem] flex justify-center mx-auto my-20"> {/** big 6xl graph size */}
    <Bar key={theme} data={data} options={options} />
    </div>
  );
};

export default BarGraph;
