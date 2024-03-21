import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog } from "@headlessui/react";
import ExpenseUpdate from "../ExpenseUpdate";
import IncomeUpdate from "../IncomeUpdate";
import {
  faDeleteLeft,
  faCartShopping,
  faMoneyBill,
  faIndianRupeeSign,
  faBuildingColumns,
  faPenToSquare,
  faComputer,
  faArrowTrendUp,
  faLandmark,
  faUserGraduate,
  faKitMedical,
  faTruckPlane,
  faBurger,
  faTv,
  faFaceSurprise,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
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
      : "bg-green-200";

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

  let [isOpen, setIsOpen] = useState(false);

  var myicon = type === "expense" ? expenseCatIcon() : categoryIcon();
  var mydec = type === "expense" ? <ExpenseUpdate setIsOpen={setIsOpen} isOpen={isOpen} updateId={id}/> : <IncomeUpdate setIsOpen={setIsOpen} isOpen={isOpen} updateId={id}/>


  return (
    <>
      <div>
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
        >
          <div className="fixed inset-0 flex items-center justify-center p-4">
           
            <Dialog.Panel className="sm:h-[33rem] sm:w-[30rem] py-3 lg:mt-0 bg-indigo-300 rounded-xl transform transition-all hover:-translate-y-0.5 duration-300 shadow-lg hover:shadow-xl z-1">
              <Dialog.Title className="items-center justify-center flex">Update Transaction</Dialog.Title>
              <div className="fixed top-2 right-2">
              <button onClick={() => setIsOpen(false)}>
                <FontAwesomeIcon
                  className="hidden sm:block"
                  icon={faXmark}
                  size="lg"
                />
                <FontAwesomeIcon
                  className="sm:hidden"
                  icon={faXmark}
                  size="sm"
                />
              </button>
            </div>
              
              {mydec}
              {/* ... */}
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>
      <div
        className={
          "z-1 grid sm:gap-0 grid-cols-6 sm:grid-cols-6 my-2 h-16 sm:h-20 w-full transform rounded-xl  shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl bg-gradient-to-r " +
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
        <div className="m-1 sm:col-span-4 text-sm sm:text-xl font-sans col-span-2">
          {title}
        </div>
        <div className="m-1 text-xs sm:text-lg font-sans sm:hidden col-span-2">{date}</div>
        <div className="m-auto flex justify-items-center items-center row-span-2 flex-col">
          <a data-tooltip-id="delete-tooltip" data-tooltip-content="Delete">
            <button className="" onClick={() => deleteItem(id)}>
              <FontAwesomeIcon
                className="hidden sm:block"
                icon={faDeleteLeft}
                size="lg"
              />
              <FontAwesomeIcon
                className="sm:hidden"
                icon={faDeleteLeft}
                size="sm"
              />
            </button>
          </a>
          <button onClick={() => setIsOpen(true)}>
            <FontAwesomeIcon
              className="hidden sm:block"
              icon={faPenToSquare}
              size="lg"
            />
            <FontAwesomeIcon
              className="sm:hidden"
              icon={faPenToSquare}
              size="sm"
            />
          </button>
        </div>
        <div className="m-1 text-xs sm:text-lg font-sans col-span-2 sm:col-span-1">{amount}</div>
        <div className="m-1 hidden sm:block text-xs sm:text-lg font-sans">
          {date}
        </div>
        <div className="m-1 sm:col-span-2 text-xs sm:text-lg font-sans col-span-2">
          {description}
        </div>
        <Tooltip id="delete-tooltip" />
      </div>
    </>
  );
}

export default Transaction;
