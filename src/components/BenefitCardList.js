import React from "react";
const data = [
  {
    src: "/img/benefit-1.jpeg",
    heading: "GIÁ TẬN XƯỞNG",
  },
  {
    src: "/img/benefit-2.jpeg",
    heading: "BÁN HÀNG VỚI BA KHÔNG",
  },
  {
    src: "img/benefit-3.jpeg",
    heading: "MIỄN PHÍ VẬN CHUYỂN",
  },
];

const BenefitCardList = () => {
  return (
    <>
      <div className="flex flex-col w-[278px] h-[550px] shadow-xl items-center text-center rounded-xl">
        <img
          src={data[0].src}
          class="rounded-t-lg w-[290px] h-[378px]"
          alt=""
        />
        <h6 class="text-lg font-bold px-4 mt-6">{data[0].heading}</h6>
        <p class="mt-4 px-4 mx-2 pb-5">
          Hơn 12300 sản phẩm với mức
          <span class="text-main"> hoa hồng lên đến 60%</span>
        </p>
      </div>
      <div className="flex flex-col w-[278px] h-[550px] shadow-xl items-center text-center rounded-xl">
        <img
          src={data[1].src}
          class="rounded-t-lg w-[290px] h-[378px]"
          alt=""
        />
        <h6 class="text-lg font-bold px-4 mt-6">{data[1].heading}</h6>
        <div class="mt-4 px-4 pb-5">
          <p>
            <span class="text-main">KHÔNG </span>cần bỏ vốn
          </p>
          <p>
            <span class="text-main">KHÔNG </span>phải lưu kho
          </p>
          <p>
            <span class="text-main">KHÔNG </span>lo vận hành
          </p>
        </div>
      </div>
      <div className="flex flex-col w-[278px] h-[550px] shadow-xl items-center text-center rounded-xl">
        <img
          src={data[2].src}
          class="rounded-t-lg w-[290px] h-[378px]"
          alt=""
        />
        <h6 class="text-lg font-bold px-4 mt-6">{data[2].heading}</h6>
        <p class="mt-4 px-4 pb-5">
          Áp dụng với đơn từ <br />
          <span class="text-main">149.000đ</span>
        </p>
      </div>
    </>
  );
};

export default BenefitCardList;
