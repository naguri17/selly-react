import React from "react";

const Card = ({ src, heading, name, position }) => {
  return (
    <div class="flex flex-col rounded-lg shadow-xl gap-5 h-[300px] w-[266px]">
      <iframe src={src} class="rounded-t-lg" alt="" title="/"></iframe>
      <div className="px-5 gap-3">
        <h6 class="text-base font-bold">{heading}</h6>
        <p class="mt-3">{name}</p>
        <p>{position}</p>
      </div>
    </div>
  );
};

export default Card;
