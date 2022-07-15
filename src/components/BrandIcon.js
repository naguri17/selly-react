import React from "react";

const BrandIcon = ({ img }) => {
  return (
    <>
      <img
        src={img}
        className="h-28 w-28 rounded-full object-contain shadow-2xl border-doubl border-4"
        alt=""
      />
    </>
  );
};

export default BrandIcon;
