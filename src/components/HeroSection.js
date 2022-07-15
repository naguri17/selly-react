import React from "react";
import { HiDownload } from "react-icons/hi";
import StatBoxList from "./StatBoxList";

const HeroSection = () => {
  return (
    <>
      <div
        className="relative max-w-xxl h-[760px] mt-16 mx-auto container flex flex-col items-center gap-3 py-20"
        style={{
          width: "100%",
          height: "827px",
          "background-image": "url(/img/bg.svg)",
          "background-repeat": "no-repeat",
          "object-fit": "contain",
        }}
      >
        <div className="max-w-xxl flex flex-col">
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl px-14">
            <div className="w-full flex flex-col gap-6">
              <p className="text-6xl font-black text-white">Selly</p>
              <p className="text-3xl font-bold text-white">
                <span>BÁN HÀNG ONLINE KHÔNG CẦN BỎ VỐN</span>
                <br />
                <span className="text-base font-normal">
                  Kiếm tiền tại nhà đến <strong>10.000.000đ</strong>/ tháng
                </span>
              </p>
              <button className="relative w-5/6 bg-white p-2 rounded-lg font-semibold text-main">
                TẢI APP NGAY
                <HiDownload className="absolute right-3 top-2 text-2xl" />
              </button>
            </div>
            <iframe
              src="https://www.youtube.com/embed/E-PhOVv5drU"
              alt=""
              title="/"
              className="h-[255px] w-[500px]"
            ></iframe>
          </div>
          <div className="flex flex-row gap-4 w-[1025px] px-14 items-center justify-center mt-24">
            <StatBoxList />
          </div>
          <div class="absolute max-w-xxl mx-auto -bottom-8 translate-x-[20rem] rotate-3">
            <img
              src="./img/driving.png"
              class="h-[168px] w-[168px] mx-auto"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
