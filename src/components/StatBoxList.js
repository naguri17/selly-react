import React from "react";
import StatBox from "./StatBox";

const data = [
  {
    icons: "/img/ic-stat1.svg",
    figure: "55.600+",
    desc: "Seller có thu nhập với Selly",
  },
  {
    icons: "/img/ic-stat2.svg",
    figure: "510+",
    desc: "Nhà sản xuất",
  },
  {
    icons: "/img/ic-stat3.svg",
    figure: "12.300+",
    desc: "Sản phẩm giá sỉ",
  },
];

const StatBoxList = () => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <StatBox icons={item.icons} figure={item.figure} desc={item.desc} />
        );
      })}
    </>
  );
};

export default StatBoxList;
