import React from "react";
import Logo from "./Logo";

const data = [
  {
    src: "/img/logo1.png",
  },
  {
    src: "/img/logo2.png",
  },
  {
    src: "/img/logo3.png",
  },
  {
    src: "/img/logo4.png",
  },
  {
    src: "/img/logo5.png",
  },
  {
    src: "/img/logo6.png",
  },
  {
    src: "/img/logo7.png",
  },
];

const Achievement = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center p-14 gap-14">
        <div className="">
          <h2 className="text-3xl font-bold">BÁO CHÍ NÓI GÌ VỀ CHÚNG TÔI</h2>
        </div>
        <div className="py-12 px-16 max-w-[642px] rounded-xl bg-side space-y-3">
          <p className="text-[22px] text-white">
            Selly gọi thành công 2,6 triệu USD trong vòng gọi vốn Pre-Series A
            từ 5 quỹ đầu tư
          </p>
          <p className="text-white max-w-[396px] mx-auto">
            CyberAgent Capital, Do Ventures, Genesia Ventures, JAFCO Asia,
            KVision
          </p>
        </div>
        <div className="flex flex-row items-center justify-center gap-10">
          {data.map(({ src }, index) => {
            return <Logo src={src} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Achievement;
