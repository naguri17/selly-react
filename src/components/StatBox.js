import React from "react";

const StatBox = ({ icons, figure, desc }) => {
  return (
    <div class="p-[20px] h-44 w-1/3 rounded-lg text-center text-main bg-white">
      <img src={icons} class="mx-auto w-[48px] h-[48px]" alt="" />
      <div>
        <h2 class="text-2xl font-black mt-8">{figure}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default StatBox;
