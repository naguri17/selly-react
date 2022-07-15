import React from "react";
import BrandList from "./BrandList";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
  IoIosArrowForward,
} from "react-icons/io";

const Brand = () => {
  return (
    <>
      <div className="p-14 w-full flex flex-col items-center justify-center text-center">
        <p className="text-3xl font-bold mb-14">
          CÁC THƯƠNG HIỆU ĐỒNG HÀNH CÙNG SELLY
        </p>
        <div className="relative grid grid-cols-8 gap-10 mb-10">
          <BrandList />
          <button class="absolute items-center -left-16 top-[180px]">
            <IoIosArrowDropleftCircle
              className="arrow-btn"
              color="#c8cad1"
              size="55px"
              onMouseOver={({ target }) => (target.style.color = "#a4a8b3")}
              onMouseOut={({ target }) => (target.style.color = "#c8cad1")}
            />
          </button>
          <button class="absolute items-center -right-16 top-[180px] border-solid border-5">
            <IoIosArrowDroprightCircle
              className="arrow-btn"
              color="#c8cad1"
              size="55px"
              onMouseOver={({ target }) => (target.style.color = "#a4a8b3")}
              onMouseOut={({ target }) => (target.style.color = "#c8cad1")}
            />
          </button>
        </div>
        <div className="relative w-[355px] rounded-lg py-2 mx-5 bg-main hover:bg-pink-700 text-white font-semibold">
          <h2>Liên hệ để trở thành đối tác</h2>
          <IoIosArrowForward className="absolute right-3 top-2 text-2xl " />
        </div>
      </div>
    </>
  );
};

export default Brand;
