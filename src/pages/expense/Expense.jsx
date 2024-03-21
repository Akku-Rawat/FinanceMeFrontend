import React, { useEffect, useState, useRef } from "react";
import Sidebar from "../../Component/sidebar/Sidebar";
import Expenseform from "../../Component/Expenseform";
import MoneyStat from "../../Component/widget/MoneyStat";
import Transaction from "../../Component/widget/Transaction";
import { useGlobalContext } from "../../context/globalContext";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

import "./s.css";
import Navbar from "../../Component/navbar/Navbar";

function Expense({setUser, user}) {
  const {
    totalExpenses,
    incomes,
    expenses,
    totalIncome,
    totalBalance,
    getIncomes,
    deleteExpense,
    getExpenses,
  } = useGlobalContext();

  useEffect(() => {
    //getIncomes()
    getExpenses();
  }, []);
  const titleRef = useRef();

  const scrollUp = () => {
    // window.scrollBy(0,-20)
    // console.log("scrollUp")
    titleRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="lg:flex lg:flex-row flex flex-col">
      <div className=" lg:hidden lg:w-52 rounded-lg lg:h-screen h-16 w-full mx-1 z-10">
        <Navbar setUser={setUser} user={user}/>
      </div>
      <div className=" hidden lg:block lg:w-52 rounded-lg lg:h-screen  w-full mx-1">
        <Sidebar setUser={setUser} user={user}/>
      </div>
      <div className="bg-emerald-50 border-2 border-blue-500 w-full rounded-lg lg:m-3">
        <div className="mx-3 lg:my-2 grid lg:h-full lg:grid-cols-6 lg:grid-rows-4 gap-x-7 px-3 grid-cols-1 grid-rows-1">
          <div className="lg:col-span-6 flex flex-col lg:flex-row lg:h-full lg:justify-between mt-3 lg:mt-0 ">
            <div className="flex items-center mt-3 lg:mt-0">
              <MoneyStat
                title="Min Expense"
                amount={Math.min(...expenses.map((item) => item.amount))}
              />
            </div>
            <div className="flex items-center mt-3 lg:mt-0">
              <MoneyStat
                title="Max Expense"
                amount={Math.max(...expenses.map((item) => item.amount))}
              />
            </div>
            <div className="flex items-center mt-3 lg:mt-0">
              <MoneyStat title="Total Expense" amount={totalExpenses()} />
            </div>
          </div>
          <div className="lg:row-span-3 lg:col-span-2">
            <Expenseform title="Add Expense" />
          </div>
          <div className="my-5 h-fit lg:my-0 lg:col-span-4 lg:row-span-3 bg-red-100 border-2 border-red-500 rounded-xl transform transition-all hover:-translate-y-0.5 duration-300 shadow-lg hover:shadow-xl z-1">
            <span className="flex justify-center">
              <button onClick={scrollUp}>
                <KeyboardDoubleArrowUpIcon />
              </button>
            </span>
            <div className="py-3 overflow-x-hidden overflow-y-auto px-3 h-[27rem] lg:h-[27rem] mydiv">
              {expenses.map((income) => {
                var d = new Date(income.date);

                var date = d.getDate();
                var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
                var year = d.getFullYear();
                var newDate = date + "/" + month + "/" + year;
                const { _id, title, amount, category, description, type } =
                  income;

                //var mybg = "from-indigo-200 from-20% via-sky-200 via-40% to-emerald-200 to-90%";
                return (
                  <Transaction
                    key={_id}
                    id={_id}
                    title={title}
                    description={description}
                    amount={amount}
                    date={newDate}
                    type={type}
                    category={category}
                    deleteItem={deleteExpense}
                    //mybg={mybg}
                  />
                );
              })}
            </div>
            <span className="flex justify-center">
              <button>
                <KeyboardDoubleArrowDownIcon />
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expense;
