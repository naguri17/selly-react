import React from "react";
import Card from "./Card";

const data = [
  {
    src: "https://www.youtube.com/embed/7xtFGBUw7Dc",
    heading: "Tôi đã kiếm tiền trong mùa dịch như thế nào",
    name: "Phương Thanh",
    position: "Văn phòng",
  },
  {
    src: "https://www.youtube.com/embed/YsqM7a_2Qr4",
    heading: "Vừa làm mẹ, vừa kinh doanh tại nhà",
    name: "Lê Thị Trường",
    position: "Nội trợ",
  },
  {
    src: "https://www.youtube.com/embed/RfKfCGE-k4U",
    heading: "Kinh doanh không phân biệt tuổi tác",
    name: "Cô Phương Ngọc",
    position: "Diễn viên",
  },
];

const CardList = () => {
  return (
    <>
      {data.map(({ src, heading, name, position }, index) => {
        return (
          <Card src={src} heading={heading} name={name} position={position} />
        );
      })}
    </>
  );
};

export default CardList;
