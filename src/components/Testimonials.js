import React from "react";
import CardList from "./CardList";

const Testimonials = () => {
  return (
    <>
      <div className="p-[60px] flex flex-col w-full items-center justify-center">
        <div className="mb-16 space-y-1 text-center">
          <h1 className="text-4xl font-bold leading-10">
            NGƯỜI THẬT, KIẾM VIỆC THẬT!
          </h1>
          <p>
            Hàng ngàn người đã và đang kiếm tiền mỗi ngày cùng với Selly, còn
            bạn thì sao?
          </p>
        </div>
        <div className="rounded-lg flex flex-row gap-10">
          <CardList />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
