import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function ExpensePieChart(prop) {
  const data = {
    labels: ["Shopping", "Education", "Bills", "Food", "Transportation", "Entertainment", "HEalth", "Loan", "Others"],
    datasets: [
      {
        label: "Transactions",
        data: prop.data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,

    responsive: false,
    plugins: {
      legend: {
        display: prop.display,
        position: prop.pos,
      },
      // title: {
      //   display: true,
      //   text: 'Pie Chart',
      // },
    },
  };
  console.log(prop.mydata);
  return (
    <div>
      <Pie
        data={data}
        options={options}
        height={prop.height}
        width={prop.width}
      />
    </div>
  );
}

export default ExpensePieChart;
