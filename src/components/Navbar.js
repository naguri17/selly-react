import React from "react";
import { AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <div className="w-full fixed z-10 flex flex-col items-center justify-center">
        <div className="w-full h-16 px-6 bg-main flex items-center justify-center fixed top-0">
          <div className="container max-w-xxl flex flex-row justify-between">
            <p className="text-4xl font-bold text-white">Selly</p>
            <div className="flex flex-row gap-2 items-center text-white">
              <AiOutlineUser className="text-2xl text-white" />
              <p className="text-white font-bold text-sm">
                Đăng ký / Đăng nhập
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
