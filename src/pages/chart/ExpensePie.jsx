import React , {useEffect} from 'react'
import ExpensePieChart from '../../Component/graph/ExpensePieChart'
import Sidebar from '../../Component/sidebar/Sidebar'
import Navbar from "../../Component/navbar/Navbar";
import { useGlobalContext } from "../../context/globalContext";

function ExpensePie({setUser, user}) {
  const { expensePieData, getExpenses } = useGlobalContext();
  useEffect(() => {
    getExpenses();
  }, []);
  var mydata = expensePieData();
  return (
    <div className="sm:flex sm:flex-row flex flex-col">
      <div className=" sm:hidden sm:w-52 rounded-lg sm:h-screen h-16 w-full mx-1 z-10">
        <Navbar setUser={setUser} user={user}/>
      </div>
      <div className=" hidden sm:block sm:w-52 rounded-lg sm:h-screen  w-full mx-1">
        <Sidebar setUser={setUser} user={user}/>
      </div>
      <div className="bg-emerald-100 border-2 w-full rounded-lg sm:m-3 flex items-center justify-center">
        <ExpensePieChart
        height="600px"
        width="600px"
        pos='top'
        display={true}
        data={mydata}
        />
      </div>
    </div>
  )
}

export default ExpensePie