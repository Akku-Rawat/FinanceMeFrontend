import React from "react";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavLink } from "react-router-dom";
function Navbar({ setUser, user }) {
  // let Links = [
  //   { name: "DashBoard", link: "/" },
  //   { name: "Expense", link: "/expense" },
  //   { name: "Income", link: "/income" },
  //   // {name:"Line Chart",link:"/line"},
  //   // {name:"Bar Chart",link:"/bar"},
  //   // {name:"Expense Pie",link:"/epie"},
  //   // {name:"Income Pie",link:"/ipie"},
  // ];
  let [open, setOpen] = useState(false);
  return (
    <div className="lg:hidden shadow-md w-full fixed top-0 left-0">
      <div className="lg:flex items-center justify-between bg-red-300 py-4 lg:px-10 px-7">
        <div
          className="font-bold text-xl sm:text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          {/* <span className='text-3xl text-indigo-600 mr-1 pt-2'>
        </span> */}
          FinanceMe
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer lg:hidden flex justify-center"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </div>

        <ul
          className={`lg:flex lg:items-center lg:pb-0 pb-5 absolute lg:static bg-blue-300 lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-300 ease-in ${
            open ? "top-16 " : "top-[-490px]"
          }`}
        >
          <li className="lg:ml-8 text-lg lg:my-0 my-7">
            {/* <AccountCircleIcon /> */}
            {user.username}
          </li>
          <NavLink to="/">
            <li className="lg:ml-8 text-lg lg:my-0 my-7">Dashboard</li>
          </NavLink>
          <NavLink to="/expense">
            <li className="lg:ml-8 text-lg lg:my-0 my-7">Expense</li>
          </NavLink>
          <NavLink to="/income">
            <li className="lg:ml-8 text-lg lg:my-0 my-7">Income</li>
          </NavLink>
          <button onClick={() => setUser({})}>
            <li>
              {/* <LogoutIcon /> */}
              Logout
            </li>
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
