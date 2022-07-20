import React from "react";
import BrandIcon from "./BrandIcon";

const data = [
  { img: "/img/icon.png" },
  { img: "img/bq.png" },
  { img: "img/sato.png" },
  { img: "img/vigift.jpg" },
  { img: "img/duka.png" },
  { img: "img/haras.jpg" },
  { img: "img/yummy.jpg" },
  { img: "img/lephuong.jpg" },
  { img: "img/gianni.jpg" },
  { img: "img/an.png" },
  { img: "img/quyen.jpg" },
  { img: "img/wonmom.png" },
  { img: "img/chava.png" },
  { img: "img/bioplas.png" },
  { img: "img/phongboutique.jpg" },
  { img: "img/remax.png" },
  { img: "img/suongmai.jpg" },
  { img: "img/luckystar.jpg" },
  { img: "img/dh.png" },
  { img: "img/toson.png" },
];

const BrandList = () => {
  return (
    <>
      {data.map((item, index) => {
        return <BrandIcon img={item.img} />;
      })}
    </>
  );
};

export default BrandList;
