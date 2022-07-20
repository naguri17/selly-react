import React from "react";

const Footer = () => {
  return (
    <>
      <div
        className="relative max-w-xxl h-[480px] mt-16 mx-auto container flex flex-row items-center gap-3 py-20"
        style={{
          width: "100%",
          height: "600px",
          "background-image": "url(/img/bg2.svg)",
          "background-repeat": "no-repeat",
          "object-fit": "contain",
        }}
      >
        <div className="max-w-suit grid grid-cols-2 w-full mx-auto -translate-y-10">
          <div className="flex flex-col text-left gap-2">
            <p className="text-6xl font-bold text-white">Selly</p>
            <p className="mt-2 text-white w-[340px]">
              Tải ứng dụng để bắt đầu Bán Hàng online ngay hôm nay!
            </p>
            <div className="flex flex-row gap-3 w-[340px] h-[114px]">
              <img
                src="/img/qrcode.svg"
                alt=""
                className="bg-white p-2 rounded-lg"
              />
              <div className="flex flex-col gap-2.5">
                <img src="/img/download2.png" className="h-[52px]" alt="" />
                <img src="/img/download.png" className="h-[52px]" alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-col text-right text-white w-[432px]">
            <p className="text-3xl font-bold mb-4">Công ty TNHH Selly</p>
            <p className="">
              <strong>Địa chỉ:</strong>
              <span className="hover:text-side transition-all duration-500 cursor-pointer">
                {" "}
                Cloud9 Office & Studio, tầng 3A, 191 Lê Lợi, Phường Hải Châu 1,
                Quận Hải Châu, Thành phố Đà Nẵng, Việt Nam
              </span>
            </p>
            <p className="font-bold mt-1">
              Hotline:{" "}
              <span className="hover:text-side transition-all duration-500 cursor-pointer">
                1900633829
              </span>
            </p>
            <p className="font-bold mt-1 mb-5">
              Email:{" "}
              <span className="hover:text-side transition-all duration-500 cursor-pointer">
                cskh@selly.vn
              </span>
            </p>
            <p>
              Công ty TNHH Selly được thành lập theo Giấy chứng nhận đăng ký
              kinh doanh số 0402107056 do Sở KH&ĐT thành phố Đà Nẵng cấp ngày
              09/7/2021
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
