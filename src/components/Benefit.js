import React from "react";
import BenefitCardList from "./BenefitCardList";

const Benefit = () => {
  return (
    <>
      <div className="p-[60px] flex flex-col items-center justify-center">
        <div className="text-center space-y-1 max-w-2xl mb-14">
          <h1 className="text-4xl font-bold leading-10">
            BÁN HÀNG DỄ DÀNG CÙNG SELLY
          </h1>
          <p>
            Selly là nền tảng cung cấp nguồn hàng từ nhà sản xuất đến với người
            có nhu cầu bán hàng mà không cần bỏ vốn.
          </p>
        </div>
        <div className="flex flex-row gap-5 w-full items-center justify-center ">
          <BenefitCardList />
        </div>
      </div>
    </>
  );
};

export default Benefit;
