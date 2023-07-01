import React from "react";

function Recent(prop) {
  return (
    <div class={"z-1 grid-cols-1 my-2 sm:ml-3 grid h-16 w-full transform rounded-xl bg-gradient-to-r shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl " + prop.mybg}>
      <div class="m-2 flex justify-between justify-items-center items-center">
        <div class="m-2 sm:text-xl text-xs font-sans">{prop.Title}</div>
        <div class={"m-2 sm:text-xl text-xs font-sans " + prop.mycolor}>{prop.Amount}</div>
      </div>
    </div>
  );
}

export default Recent;
