import React from "react";
import FastfoodRoundedIcon from "@mui/icons-material/FastfoodRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faDeleteLeft, faCartShopping, faMoneyBill, faIndianRupeeSign, faBuildingColumns, faComputer, faArrowTrendUp, faLandmark, faUserGraduate,  faKitMedical, faTruckPlane, faBurger, faTv, faFaceSurprise}  from "@fortawesome/free-solid-svg-icons";
import { useGlobalContext } from "../../context/globalContext";
//import { Tooltip as ReactTooltip } from 'react-tooltip'
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

function Transaction({
  id,
  title,
  amount,
  date,
  category,
  description,
  deleteItem,
  type,
}) {
  var mybg =
    type === "expense"
      ? "bg-red-300"
      : "bg-green-300";

  const categoryIcon = () => {
    switch (category) {
      case "Salary":
        return faIndianRupeeSign;
      case "Freelance":
        return faComputer;
      case "Investment":
        return faArrowTrendUp;
      case "Bank Transfer":
        return faBuildingColumns;
      case "Others":
        return faFaceSurprise;
      default:
        return "";
    }
  };

  const expenseCatIcon = () => {
    switch (category) {
      case "Shopping":
        return faCartShopping;
      case "Health":
        return faKitMedical;
      case "Loan":
        return faLandmark;
      case "Food":
        return faBurger;
      case "Transportation":
        return faTruckPlane;
      case "Entertainment":
        return faTv;
      case "Bills":
        return faMoneyBill;
      case "Education":
        return faUserGraduate;
      case "Others":
        return faFaceSurprise;
      default:
        return "";
    }
  };

  var myicon = type === 'expense' ? expenseCatIcon() : categoryIcon();

  return (
    <div
      className={
        "z-1 grid grid-cols-4 sm:grid-cols-6 my-2 h-16 sm:h-20 w-full transform rounded-xl  shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl bg-gradient-to-r " +
        mybg
      }
    >
      <div className="m-auto flex justify-items-center items-center row-span-2">
        <FontAwesomeIcon
          className="hidden sm:block"
          icon={myicon}
          size="lg"
        />
        <FontAwesomeIcon className="sm:hidden" icon={myicon} size="sm" />
      </div>
      <div className="m-1 sm:col-span-4 text-sm sm:text-xl font-sans">
        {title}
      </div>
      <div className="m-1 text-xs sm:text-lg font-sans sm:hidden">{date}</div>
      <div className="m-auto flex justify-items-center items-center row-span-2">
        <a data-tooltip-id="delete-tooltip" data-tooltip-content="Delete">
          <button className="" onClick={() => deleteItem(id)}>
            <FontAwesomeIcon
              className="hidden sm:block"
              icon={faDeleteLeft}
              //{type === 'expense' ? expenseCatIcon() : categoryIcon()}
              size="lg"
            />
            <FontAwesomeIcon
              className="sm:hidden"
              icon={faDeleteLeft}
              size="sm"
            />
          </button>
        </a>
      </div>
      <div className="m-1 text-xs sm:text-lg font-sans">{amount}</div>
      <div className="m-1 hidden sm:block text-xs sm:text-lg font-sans">
        {date}
      </div>
      <div className="m-1 sm:col-span-2 text-xs sm:text-lg font-sans">
        {description}
      </div>
      <Tooltip id="delete-tooltip" />
    </div>
  );
}

export default Transaction;
