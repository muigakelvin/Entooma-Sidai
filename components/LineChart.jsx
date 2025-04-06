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
        borderColor: "#1976D2",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  return <Line data={chartData} options={options} />;
};

export default LineChart;
