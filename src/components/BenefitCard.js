import React from "react";

const BenefitCard = ({ src, heading, content }) => {
  return (
    <>
      <div className="flex flex-col w-[278px] h-[550px] shadow-xl items-center text-center rounded-xl">
        <img src={src} class="rounded-t-lg w-[290px] h-[378px]" alt="" />
        <h6 class="text-lg font-bold px-4 mt-6">{heading}</h6>
        <p class="mt-4 px-4 mx-2 pb-5">
          Hơn 12300 sản phẩm với mức
          <span class="text-main"> hoa hồng lên đến 60%</span>
        </p>
      </div>
    </>
  );
};

export default BenefitCard;
