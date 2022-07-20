import React from "react";

const Model = () => {
  return (
    <>
      <div className="w-full bg-[#f5f5f5] p-14">
        <div className="mb-16 space-y-1 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold tracking-wide text-center">
            MÔ HÌNH THƯƠNG MẠI
          </h1>
          <p className="font-bold text-center">
            TRÊN NỀN TẢNG MẠNG XÃ HỘI CỦA SELLY
          </p>
          <img src="/img/md4.jpg" className="scale-75" alt="" />
        </div>
      </div>
      <div className="py-14 my-10 flex flex-col space-y-2 text-center items-center justify-center">
        <h1 className="text-3xl font-bold">ƯU ĐÃI CHỈ CÓ TẠI SELLY</h1>
        <p className="w-[620px]">
          Nhiều chương trình ưu đãi hàng tháng cực kỳ hấp dẫn dành cho seller và
          khách hàng của seller.
        </p>
      </div>
    </>
  );
};

export default Model;
