import React from "react";

const Terms = () => {
  return (
    <>
      <div className="pb-10 w-full mx-auto -translate-y-5">
        <div className="flex flex-row items-center justify-center">
          <div className="flex flex-col gap-5 text-sm">
            <div className="flex flex-row gap-10 cursor-pointer">
              <p className="hover:underline">QUY CHẾ HOẠT ĐỘNG SÀN GĐTMĐT</p>
              <p className="hover:underline">CHÍNH SÁCH ĐỔI TRẢ</p>
              <p className="hover:underline">CHÍNH SÁCH BẢO MẬT</p>
            </div>
            <div className="flex flex-row gap-10 cursor-pointer">
              <p className="hover:underline">
                CHÍNH SÁCH GIAO HÀNG VÀ THANH TOÁN
              </p>
              <p className="hover:underline">CHÍNH SÁCH GIẢI QUYẾT KHIẾU NẠI</p>
            </div>
          </div>
          <img
            src="/img/logo_gov.png"
            className="w-[118px] h-[45px] ml-14"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Terms;
