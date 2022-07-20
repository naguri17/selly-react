import React from "react";

const Example = () => {
  return (
    <>
      <div className="p-14 max-w-xxl">
        <div className="container grid grid-cols-2 p-32 items-center justify-center mx-auto">
          <div className="flex flex-col w-[430px] gap-5 translate-x-52">
            <h1 class="text-3xl font-bold">
              THU NHẬP HÀNG THÁNG CỦA BẠN VỚI SELLY
            </h1>
            <p className="w-[350px]">
              Tỷ lệ hoa hồng trung bình bán hàng trên Selly là
              <strong> 30%</strong> cho mỗi đơn hàng
            </p>
            <div class="italic w-[350px] border-b-2 pb-6">
              <p class="flex justify-between">
                <span>Bán mỗi ngày: </span>
                <span>3 đơn hàng</span>
              </p>
              <p class="flex justify-between">
                <span>Giá trị trung bình </span>
                <span>370.000đ</span>
              </p>
              <p class="flex justify-between">
                <span>Tỷ lệ hoa hồng: </span>
                <span>30%</span>
              </p>
            </div>
            <p class="flex justify-between w-[350px]">
              Tổng thu nhập:
              <span class="text-right text-2xl text-main font-bold">
                10.000.000đ
              </span>
            </p>
          </div>
          <div className="flex flex-col w-[530px] gap-10 scale-150 translate-x-40">
            <img src="/img/md3.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Example;
