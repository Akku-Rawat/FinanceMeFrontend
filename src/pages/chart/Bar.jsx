import React , {useEffect} from "react";
import BarChart from "../../Component/graph/BarChart";
import Sidebar from "../../Component/sidebar/Sidebar";
import Navbar from "../../Component/navbar/Navbar";
import { useGlobalContext } from "../../context/globalContext";

function Bar({setUser, user}) {
  const { getExpenses, getIncomes, incomeData, expenseData } = useGlobalContext();
  useEffect(() => {
    getExpenses();
    getIncomes();
  }, []);

  var idata = incomeData();
  var edata = expenseData();
  return (
    <div className="sm:flex sm:flex-row flex flex-col">
      <div className=" sm:hidden sm:w-52 rounded-lg sm:h-screen h-16 w-full mx-1 z-10">
        <Navbar setUser={setUser} user={user}/>
      </div>
      <div className=" hidden sm:block sm:w-52 rounded-lg sm:h-screen  w-full mx-1">
        <Sidebar setUser={setUser} user={user}/>
      </div>
      <div className="bg-emerald-100 border-2 w-full rounded-lg sm:m-3 flex items-center justify-center">
        {/* <div className="flex justify-center items-center bg-slate-700 w-3/4 h-3/4"
        >
      </div> */}
      <BarChart 
      height="600px"
      width="1300px"
      data1={idata}
      data2={edata}
      />
      </div>
    </div>
  );
}

export default Bar;
