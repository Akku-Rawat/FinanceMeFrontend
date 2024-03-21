import React from "react";
import {useWindowSize} from 'react-use';
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
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  //responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Line Chart',
    },
  },
};

function LineGraph(prop) {
  const labels = [
    "Jan",
    "Feb",
    "Ma",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Income",
        data: prop.data1,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Expense",
        data: prop.data2,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  //const {width, height} = useWindowSize();
  return (
    <div className="sm:h-auto sm:w-auto w-full h-full">
      <Line 
      data={data}
      options={options}
      height={prop.height} width={prop.width}
      //height={height} width={width}
      />
    </div>
  );
}

export default LineGraph;
