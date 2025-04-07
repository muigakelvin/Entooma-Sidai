// src/components/LineChart.jsx
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ labels, data, options }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: "Sessions",
        data,
        borderColor: "#1976D2", // Primary line color
        backgroundColor: "rgba(25, 118, 210, 0.2)", // Gradient-like fill
        borderWidth: 2,
        pointRadius: 4, // Size of data points
        pointHoverRadius: 6, // Larger size on hover
        pointBackgroundColor: "#1976D2", // Data point color
        pointBorderColor: "#fff", // Border around data points
        pointBorderWidth: 2, // Border thickness
        fill: true, // Enable gradient fill
      },
    ],
  };

  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top", // Position the legend at the top
        labels: {
          font: {
            size: 14,
            weight: "bold",
          },
          color: "#fff", // White text for dark theme
        },
      },
      tooltip: {
        enabled: true,
        mode: "index", // Show tooltips for all datasets at the hovered point
        intersect: false,
        backgroundColor: "#1E1E1E", // Dark background for tooltips
        titleColor: "#fff", // White title text
        bodyColor: "#fff", // White body text
        borderColor: "#3A3A3A", // Tooltip border color
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // Subtle grid lines
        },
        ticks: {
          color: "#fff", // White axis labels
          font: {
            size: 12,
          },
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // Subtle grid lines
        },
        ticks: {
          color: "#fff", // White axis labels
          font: {
            size: 12,
          },
        },
      },
    },
    animation: {
      duration: 1000, // Smooth animation duration
      easing: "easeInOutQuad", // Smooth easing effect
    },
  };

  return <Line data={chartData} options={{ ...defaultOptions, ...options }} />;
};

export default LineChart;
