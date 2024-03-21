import React , {useState} from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink } from "react-router-dom";

function Sidebar({setUser, user}) {
  const logOut=() =>{
    setUser({})
    //localStorage.clear();

  }
  return (
    <div className=" bg-violet-700 text-white text-md font-sans min-h-screen px-3 py-2">
      <div className="flex">
        <span className="logo">FinanceMe</span>
      </div>
      <hr className=""></hr>
      <div className="my-20">
        <hr></hr>
        <ul className="py-3">
          <NavLink to="/">
            <li>
              <DashboardIcon />
              Dashboard
            </li>
          </NavLink>
          <NavLink to="/expense">
            <li>
              <AttachMoneyIcon />
              Expense
            </li>
          </NavLink>
          <NavLink to="/income">
            <li>
              <MoneyOffIcon />
              Income
            </li>
          </NavLink>
        </ul>
        <hr></hr>
      </div>
      <div className="my-20">
        <hr></hr>
        <ul className="py-3">
          <NavLink to="/line">
            <li>
              <DashboardIcon />
              Line Chart
            </li>
          </NavLink>
          <NavLink to="/epie">
            <li>
              <AttachMoneyIcon />
              Expense Pie Chart
            </li>
          </NavLink>
          <NavLink to="/ipie">
            <li>
              <MoneyOffIcon />
              Income Pie Chart
            </li>
          </NavLink>
          <NavLink to="/bar">
            <li>
              <MoneyOffIcon />
              Bar Chart
            </li>
          </NavLink>
        </ul>
        <hr></hr>
      </div>

      <div className="pt-2">
        <hr></hr>
        <ul className="py-3">
            <li>
              <AccountCircleIcon />
              {user.username}
            </li>
          <button onClick={logOut}>
            <li>
              <LogoutIcon />
              Logout
            </li>
            </button>
        </ul>
        <hr></hr>
      </div>
    </div>
  );
}

export default Sidebar;
