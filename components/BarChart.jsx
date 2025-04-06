// src/components/BarChart.jsx
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ labels, data, options }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: "Page views and downloads",
        data,
        backgroundColor: "#1976D2",
        borderColor: "#1976D2",
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;
