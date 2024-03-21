import React, { useEffect } from "react";
import Sidebar from "../../Component/sidebar/Sidebar";
import Expenseform from "../../Component/Expenseform";
import "./home.css";
import MoneyStat from "../../Component/widget/MoneyStat";
import Transaction from "../../Component/widget/Transaction";
import Recent from "../../Component/widget/Recent";
import LineGraph from "../../Component/graph/LineGraph";
import BarChart from "../../Component/graph/BarChart";
import PieChart from "../../Component/graph/PieChart";
import ExpensePieChart from "../../Component/graph/ExpensePieChart";
import { useGlobalContext } from "../../context/globalContext";
import Navbar from "../../Component/navbar/Navbar";

const Home = ({setUser , user}) => {
  const {
    totalExpenses,
    incomes,
    expenses,
    totalIncome,
    totalBalance,
    getIncomes,
    deleteIncome,
    expensePieData,
    incomePieData,
    getExpenses,
    transactionHistory,
    incomeData,
    expenseData,
  } = useGlobalContext();
  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);
  const [...history] = transactionHistory();
  var incomeData1 = incomePieData();
  var expenseData1 = expensePieData();
  var idata = incomeData();
  var edata = expenseData();
  return (
    <div className="lg:flex lg:flex-row flex flex-col">
      <div className=" lg:hidden lg:w-52 rounded-lg lg:h-screen h-16 w-full mx-1 z-10">
        <Navbar setUser={setUser} user={user}/>
      </div>
      <div className=" hidden lg:block lg:w-52 rounded-lg lg:h-screen w-full mx-1">
        <Sidebar setUser={setUser} user={user}/>
      </div>
      <div className="bg-emerald-50 border-2 border-blue-500 w-full rounded-lg lg:m-3 mt-0">
        <div class="grid lg:grid-cols-8 lg:grid-rows-5 lg:h-max gap-2 my-1 mx-3 px-3 grid-cols-1 grid-rows-1">
          <div class="m-2  items-center lg:col-span-8 row-span-1">
            <div className="lg:col-span-6 flex flex-col lg:flex-row lg:h-full lg:justify-between">
              <div className="flex mt-3 lg:mt-0 items-center">
                <MoneyStat title="Total Expense" amount={totalExpenses()} />
              </div>
              <div className="flex mt-3 lg:mt-0 items-center">
                <MoneyStat title="Total Income" amount={totalIncome()} />
              </div>
              <div className="flex mt-3 lg:mt-0 items-center">
                <MoneyStat title="Total Balance" amount={totalBalance()} />
              </div>
            </div>
          </div>
          <div class="m-2 lg:hidden lg:row-span-2 lg:col-span-3 bg-emerald-50 border-2 border-blue-500 rounded-xl transform transition-all hover:-translate-y-0.5 duration-300 shadow-lg hover:shadow-2xl z-1">
            <LineGraph
              height="170px"
              width="200px"
              data1={idata}
              data2={edata}
            />
          </div>
          <div class="m-2 hidden lg:block lg:row-span-2 lg:col-span-3 bg-emerald-50 border-2 border-blue-500 rounded-xl transform transition-all hover:-translate-y-0.5 duration-300 shadow-lg hover:shadow-2xl z-1">
            <LineGraph
              // height="245px"
              // width="500px"
              data1={idata}
              data2={edata}
            />
          </div>
          <div class="m-2 lg:hidden lg:row-span-2 lg:col-span-3 bg-emerald-50 border-2 border-blue-500 rounded-xl transform transition-all hover:-translate-y-0.5 duration-300 shadow-lg hover:shadow-2xl z-1">
            <BarChart
              height="170px"
              width="200px"
              data1={idata}
              data2={edata}
            />
          </div>
          <div class="m-2 hidden lg:block lg:row-span-2 lg:col-span-3 bg-emerald-50 border-2 border-blue-500 rounded-xl transform transition-all hover:-translate-y-0.5 duration-300 shadow-lg hover:shadow-2xl z-1">
            <BarChart
              // height="50px"
              // width="100px"
              data1={idata}
              data2={edata}
            />
          </div>
          {/* mobile */}
          <div class="md:hidden :row-span-2 lg:col-span-3  flex items-center justify-center bg-emerald-50 border-2 border-blue-500 rounded-xl transform transition-all hover:-translate-y-0.5 duration-300 shadow-lg hover:shadow-2xl z-1">
            <PieChart
              height="300px"
              width="320px"
              pos="top"
              display={false}
              data={incomeData1}
            />
          </div>
          <div class=" md:hidden lg:row-span-2 lg:col-span-3 flex items-center justify-center bg-emerald-50 border-2 border-blue-500 rounded-xl transform transition-all hover:-translate-y-0.5 duration-300 shadow-lg hover:shadow-2xl z-1">
            <ExpensePieChart
              height="300px"
              width="320px"
              pos="top"
              display={false}
              data={expenseData1}
            />
          </div>
          {/* Tablet */}
          <div class="hidden md:block lg:hidden lg:row-span-2 lg:col-span-3  bg-emerald-50 border-2 border-blue-500 rounded-xl transform transition-all hover:-translate-y-0.5 duration-300 shadow-lg hover:shadow-2xl z-1">
            <PieChart
              height="500px"
              width="700px"
              pos="right"
              display={true}
              data={incomeData1}
            />
          </div>
          <div class="hidden md:block lg:hidden lg:row-span-2 lg:col-span-3  bg-emerald-50 border-2 border-blue-500 rounded-xl transform transition-all hover:-translate-y-0.5 duration-300 shadow-lg hover:shadow-2xl z-1">
            <ExpensePieChart
              height="500px"
              width="700px"
              pos="right"
              display={true}
              data={expenseData1}
            />
          </div>
          <div class="m-2  lg:row-span-4 lg:col-span-2">
            {/* <Recent Title="Shopping" Amount="$3700" /> */}
            {history.map((item) => {
              const { _id, title, amount, type } = item;
              var mycolor =
                type === "expense" ? "text-red-700" : "text-green-700";
              var mybg =
                type === "expense"
                  ? "from-indigo-200 from-20% via-sky-200 via-40% to-emerald-200 to-90%"
                  : "from-emerald-200 from-20% via-sky-200-40% to-indigo-200 to-90%";
              var myamount =
                type === "expense"
                  ? `-${amount <= 0 ? 0 : amount}`
                  : `+${amount <= 0 ? 0 : amount}`;

              return (
                <Recent
                  Title={title}
                  Amount={myamount}
                  mycolor={mycolor}
                  mybg={mybg}
                />
              );
            })}
          </div>
          {/* Laptop */}
          <div class="m-2 hidden lg:block lg:row-span-2 lg:col-span-3  items-center justify-center bg-emerald-50 border-2 border-blue-500 rounded-xl transform transition-all hover:-translate-y-0.5 duration-300 shadow-lg hover:shadow-2xl z-1">
            <PieChart
              height="245px"
              width="500px"
              pos="left"
              display={true}
              data={incomeData1}
            />
          </div>
          <div class="m-2 hidden lg:block lg:row-span-2 lg:col-span-3 bg-emerald-50 border-2 border-blue-500 rounded-xl transform transition-all hover:-translate-y-0.5 duration-300 shadow-lg hover:shadow-2xl z-1">
            <ExpensePieChart
              height="245px"
              width="500px"
              pos="left"
              display={true}
              data={expenseData1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
