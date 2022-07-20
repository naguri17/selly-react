import React from "react";

const Logo = ({ src }) => {
  return (
    <>
      <div className="">
        <img
          src={src}
          alt=""
          className="max-h-[50px] max-w-[300px] object-contain"
        />
      </div>
    </>
  );
};

export default Logo;
