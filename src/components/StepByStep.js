import React from "react";
import { HiDownload } from "react-icons/hi";

const StepByStep = () => {
  return (
    <>
      <div className="w-full mt-16 bg-side gap-3 items-center justify-center py-20">
        <div className="max-w-suit grid grid-cols-2 gap-16 px-14 mx-auto">
          <div className="flex flex-col rounded-lg bg-white p-10 items-center justify-center text-center">
            <h2 className="font-bold text-3xl">Bán hàng dễ dàng</h2>
            <p>tăng thu nhập lên đến</p>
            <h2 className="font-bold text-3xl">10.000.000đ!</h2>
            <iframe
              src="https://www.youtube.com/embed/Q6RoeAXUlXo"
              alt=""
              title="/"
              className="rounded-lg my-10"
            ></iframe>
            <button className="relative w-[300px] bg-main p-2 rounded-lg font-semibold text-white">
              TẢI APP NGAY
              <HiDownload className="absolute right-3 top-2 text-2xl" />
            </button>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-row gap-8">
              <img src="/img/ic-play.svg" alt="" />
              <h1 className="text-white text-3xl font-bold">
                4 BƯỚC BÁN HÀNG TIỀN VỀ LIỀN TAY
              </h1>
            </div>
            <div className="flex flex-col gap-10 mt-4">
              <div class="flex items-center pl-4 form-checkbox">
                <div>
                  <input
                    class="form-check-input appearance-none rounded-full h-4 w-4 border-[3px] border-white bg-white checked:bg-side checked:border-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-12 cursor-pointer scale-150"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                </div>
                <label
                  class="form-check-label inline-block text-white"
                  for="flexRadioDefault1"
                >
                  Khám phá hơn
                  <span className="font-bold"> 12.400+ sản phẩm</span> và{" "}
                  <span className="font-bold">lựa chọn</span> mặt hàng bạn muốn
                  kinh doanh
                </label>
              </div>
              <div class="flex items-center pl-4 rounded form-checkbox">
                <div>
                  <input
                    class="form-check-input appearance-none rounded-full h-4 w-4 border-[3px] border-white bg-white checked:bg-side checked:border-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-12 cursor-pointer scale-150"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                </div>
                <label
                  class="form-check-label inline-block text-white"
                  for="flexRadioDefault1"
                >
                  <span className="font-bold">Đăng bán</span> sản phẩm qua mạng
                  xã hội hoặc gửi cho khách hàng tiềm năng của bạn
                </label>
              </div>
              <div class="flex items-center pl-4 rounded form-checkbox">
                <div>
                  <input
                    class="form-check-input appearance-none rounded-full h-4 w-4 border-[3px] border-white bg-white checked:bg-side checked:border-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-12 cursor-pointer scale-150"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                </div>
                <label
                  class="form-check-label inline-block text-white"
                  for="flexRadioDefault1"
                >
                  <span className="font-bold">Tạo đơn hàng</span> trên ứng dụng.
                  Selly sẽ giúp bạn vận chuyển đến khách hàng
                </label>
              </div>
              <div class="flex items-center pl-4 rounded form-checkbox">
                <div>
                  <input
                    class="form-check-input appearance-none rounded-full h-4 w-4 border-[3px] border-white bg-white checked:bg-side checked:border-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-12 cursor-pointer scale-150"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                </div>
                <label
                  class="form-check-label inline-block text-white"
                  for="flexRadioDefault1"
                >
                  <span className="font-bold">Nhận hoa hồng</span> và{" "}
                  <span className="font-bold">rút tiền</span> về tài khoản ngân
                  hàng
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepByStep;
