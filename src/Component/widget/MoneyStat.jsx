import React from "react";

function MoneyStat(prop) {
  return (
    <div className="flex w-full h-12 lg:h-24  mb-2 lg:w-96 md:h-16 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200  rounded-xl transform transition-all hover:-translate-y-1 duration-300 shadow-lg hover:shadow-xl z-1">
      <h1 className="justify-items-center items-center m-auto text-lg md:text-2xl font-sans">
        {prop.title}
      </h1>
      <h1 className="justify-items-center items-center m-auto text-lg md:text-xl font-sans pl-1">
        {prop.amount}
      </h1>
    </div>
  );
}

export default MoneyStat;
