import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const QandA = ({ question, answer }) => {
  return (
    <>
      <div className="p-14 flex flex-col items-center">
        <h2 className="text-3xl text-center font-bold mb-14">
          CÁC CÂU HỎI THƯỜNG GẶP
        </h2>
        <div className="flex flex-col w-[968px] items-center justify-center">
          <div className="relative overflow-hidden mx-auto w-full">
            <input
              type="checkbox"
              className="peer absolute top-0 inset-x-0 opacity-0 w-full h-12 z-10 cursor-pointer"
            />
            <div className="h-12 w-full pl-5 flex justify-between items-center">
              <h1 className="text-lg text-left font-semibold w-[840px]">
                Selly có giống Shopee hay sàn TMĐT khác không?
              </h1>
            </div>
            <RiArrowDownSLine className="text-3xl absolute right-0 top-2 text-side mr-4 transition-transform duration-500 rotate-0 peer-checked:rotate-180" />
            <div className="overflow-hidden border-b-2 transition-transform duration-500 max-h-0 peer-checked:max-h-fit">
              <div className="p-5 w-[840px]">
                <p className="">
                  Các sàn thương mại điện tử Shopee, Lazada hay Tiki vì Shopee,
                  Lazada, Tiki là nơi bạn mở shop đăng bán các sản phẩm của mình
                  lên sàn hoặc là nơi mà người tiêu dùng mua sắm.<br></br>
                  <br></br> Selly là nền tảng công nghệ cung cấp nguồn hàng chất
                  lượng với giá tốt nhất từ nhà sản xuất đến với người có nhu
                  cầu kinh doanh online mà không cần bỏ vốn.<br></br>
                  <br></br> Vì vậy Selly không giống với các sàn thương mại
                  Shopee, Lazada hay Tiki. Với Selly, bạn có thể bắt đầu bán
                  hàng online mà không cần vốn, bạn chỉ cần vào Selly tìm sản
                  phẩm muốn bán sau đó lấy thông tin sản phẩm đăng bán trên mạng
                  xã hội như Facebook, Zalo, Instagram... hoặc gửi cho khách
                  hàng tiềm năng của bạn. Sau khi đã có khách hàng muốn mua sản
                  phẩm, bạn tạo đơn trên ứng dụng, Selly sẽ giúp bạn giao tận
                  tay khách hàng.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[968px] items-center justify-center">
          <div className="relative overflow-hidden mx-auto w-full">
            <input
              type="checkbox"
              className="peer absolute top-0 inset-x-0 opacity-0 w-full h-12 z-10 cursor-pointer"
            />
            <div className="h-12 w-full pl-5 flex justify-between items-center">
              <h1 className="text-lg text-left font-semibold w-[840px]">
                Selly có phiên bản website không?
              </h1>
            </div>
            <RiArrowDownSLine className="text-3xl absolute right-0 top-2 text-side mr-4 transition-transform duration-500 rotate-0 peer-checked:rotate-180" />
            <div className="over-hidden border-b-2 transition-all duration-500 max-h-0 peer-checked:max-h-fit">
              <div className="p-5 w-[840px]">
                <p className="">
                  Selly đã có phiên bản website để hỗ trợ Seller bán hàng thêm
                  dễ dàng ngay trên laptop, máy tính để bàn của mình. Bạn có thể
                  đăng ký tài khoản, tìm kiếm, đăng bán sản phẩm, theo dõi tình
                  trạng đơn hàng cũng như yêu cầu rút tiền ngay tại website
                  Selly. Đăng ký tài khoản và trải nghiệm bán hàng cùng Selly
                  ngay nhé!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[968px] items-center justify-center">
          <div className="relative overflow-hidden mx-auto w-full">
            <input
              type="checkbox"
              className="peer absolute top-0 inset-x-0 opacity-0 w-full h-12 z-10 cursor-pointer"
            />
            <div className="h-12 w-full pl-5 flex justify-between items-center">
              <h1 className="text-lg text-left font-semibold w-[840px]">
                Khách có được xem hàng và đồng kiểm với bưu tá khi hàng giao tới
                họ không?
              </h1>
            </div>
            <RiArrowDownSLine className="text-3xl absolute right-0 top-2 text-side mr-4 transition-transform duration-500 rotate-0 peer-checked:rotate-180" />
            <div className="over-hidden border-b-2 transition-all duration-500 max-h-0 peer-checked:max-h-fit">
              <div className="p-5 w-[840px]">
                <p className="">
                  Các Nhà cung cấp của Selly đều sẽ hỗ trợ cho khách kiểm tra
                  hàng trước khi nhận, nhưng tùy vào quy định của Hãng vận
                  chuyển mà sẽ có những mặt hàng được kiểm tra hàng và những mặt
                  hàng không được kiểm tra trước khi nhận.<br></br>
                  <br></br>
                  Với trường hợp những mặt hàng Hãng vận chuyển không cho kiểm
                  tra trước khi nhận nhưng người nhận có yêu cầu kiểm tra hàng,
                  shipper sẽ hỗ trợ đồng kiểm ngay tại thời điểm nhận hàng và sẽ
                  có phát sinh phí (phí đồng kiểm) tuỳ vào chính sách của từng
                  Hãng vận chuyển.<br></br>
                  <br></br>
                  Về chất lượng sản phẩm bạn có thể yên tâm rằng nguồn hàng của
                  Selly luôn được tuyển chọn kỹ càng về chất lượng. Nếu trong
                  trường hợp khách hàng của Seller đã nhận hàng và không đồng
                  kiểm cùng shipper, có thể quay lại quá trình bóc hàng hoá và
                  nếu có phát sinh lỗi sản phẩm, Selly sẽ vẫn hỗ trợ hoàn trả
                  hàng hoá theo quy định.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[968px] items-center justify-center">
          <div className="relative overflow-hidden mx-auto w-full">
            <input
              type="checkbox"
              className="peer absolute top-0 inset-x-0 opacity-0 w-full h-12 z-10 cursor-pointer"
            />
            <div className="h-12 w-full pl-5 flex justify-between items-center">
              <h1 className="text-lg text-left font-semibold w-[840px]">
                Nếu hàng giao tới khách mà khách không muốn nhận hàng thì tôi có
                phải chịu phí gì không?
              </h1>
            </div>
            <RiArrowDownSLine className="text-3xl absolute right-0 top-2 text-side mr-4 transition-transform duration-500 rotate-0 peer-checked:rotate-180" />
            <div className="over-hidden border-b-2 transition-all duration-500 max-h-0 peer-checked:max-h-fit">
              <div className="p-5 w-[840px]">
                <p className="">
                  Nếu khách hàng của bạn đặt hàng nhưng từ chối nhận hàng mà
                  không phải do lỗi liên quan đến hàng hóa thì bạn sẽ chịu phí
                  ship giao hàng đến khách và phí giao hàng hoàn về kho của Nhà
                  cung cấp.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[968px] items-center justify-center">
          <div className="relative overflow-hidden mx-auto w-full">
            <input
              type="checkbox"
              className="peer absolute top-0 inset-x-0 opacity-0 w-full h-12 z-10 cursor-pointer"
            />
            <div className="h-12 w-full pl-5 flex justify-between items-center">
              <h1 className="text-lg text-left font-semibold w-[840px]">
                Phí ship các sản phẩm trên Selly khi giao đến khách được tính
                như thế nào?
              </h1>
            </div>
            <RiArrowDownSLine className="text-3xl absolute right-0 top-2 text-side mr-4 transition-transform duration-500 rotate-0 peer-checked:rotate-180" />
            <div className="over-hidden border-b-2 transition-all duration-500 max-h-0 peer-checked:max-h-fit">
              <div className="p-5 w-[840px]">
                <p className="">
                  Phí ship được tính dựa vào kích thước, khối lượng của hàng
                  hóa, khoảng cách giao hàng (từ nơi gửi đến nơi nhận). Ngoài
                  ra, nếu chọn phương thức thanh toán khi nhận hàng (COD), phí
                  ship cũng có thể bị ảnh hưởng bởi giá trị cao thấp của đơn
                  hàng.<br></br>
                  <br></br>
                  Với từng đơn vị vận chuyển sẽ có mức phí ship chênh lệch khác
                  nhau. Vì vậy, khi bạn tạo đơn trên ứng dụng, Selly sẽ hiển thị
                  phí ship theo các đơn vị vận chuyển và bạn có thể tùy chọn đơn
                  vị vận chuyển mà mình yêu thích trong quá trình tạo đơn hàng
                  nhé.<br></br>
                  <br></br>
                  Bên cạnh đó, Selly luôn có chương trình hỗ trợ phí ship cho
                  đơn hàng với nhiều mức hỗ trợ khác nhau. Bạn có thể tham khảo
                  trực tiếp trên ứng dụng Selly để biết thêm chi tiết
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[968px] items-center justify-center">
          <div className="relative overflow-hidden mx-auto w-full">
            <input
              type="checkbox"
              className="peer absolute top-0 inset-x-0 opacity-0 w-full h-12 z-10 cursor-pointer"
            />
            <div className="h-12 w-full pl-5 flex justify-between items-center">
              <h1 className="text-lg text-left font-semibold w-[840px]">
                Mình có thể lấy sản phẩm của Selly bán trên Shopee được không?
              </h1>
            </div>
            <RiArrowDownSLine className="text-3xl absolute right-0 top-2 text-side mr-4 transition-transform duration-500 rotate-0 peer-checked:rotate-180" />
            <div className="over-hidden border-b-2 transition-all duration-500 max-h-0 peer-checked:max-h-fit">
              <div className="p-5 w-[840px]">
                <p className="">
                  Hiện tại ứng dụng Selly chưa hỗ trợ kết nối hệ thống với
                  Shopee và các sàn thương mại điện tử khác. Trong trường hợp
                  bạn vẫn mong muốn bán hàng của Selly trên các sàn thương mại
                  điện tử khác thì bạn có thể đặt hàng từ ứng dụng Selly về kho
                  của riêng bạn và sau đó đăng bán sản phẩm trên các sàn thương
                  mại điện tử đó.<br></br>
                  Hoặc trên các sàn thương mại điện tử đó có chế độ "Hàng đặt
                  trước", sau khi có khách đặt hàng thì mình tạo đơn trên Selly,
                  sau khi nhận được hàng từ Selly thì bạn chuẩn bị hàng của mình
                  và giao đến khách của các sàn thương mại điện tử đó nhé.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[968px] items-center justify-center">
          <div className="relative overflow-hidden mx-auto w-full">
            <input
              type="checkbox"
              className="peer absolute top-0 inset-x-0 opacity-0 w-full h-12 z-10 cursor-pointer"
            />
            <div className="h-12 w-full pl-5 flex justify-between items-center">
              <h1 className="text-lg text-left font-semibold w-[840px]">
                Tôi có cần bỏ vốn khi bán hàng với Selly không?
              </h1>
            </div>
            <RiArrowDownSLine className="text-3xl absolute right-0 top-2 text-side mr-4 transition-transform duration-500 rotate-0 peer-checked:rotate-180" />
            <div className="over-hidden border-b-2 transition-all duration-500 max-h-0 peer-checked:max-h-fit">
              <div className="p-5 w-[840px]">
                <p className="">
                  Khi kinh doanh cùng Selly thì bạn sẽ không cần cần bỏ vốn,
                  không phải lưu kho, không lo vận hành. Bạn chỉ việc đăng bán
                  và khi có khách mua hàng thì bạn tạo đơn trên ứng dụng, Selly
                  sẽ giao hàng đến tận tay khách hàng giúp bạn. Sau khi giao
                  hàng thành công, tiền hoa hồng sẽ được chuyển vào tài khoản
                  của bạn sau 7 ngày đối soát
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[968px] items-center justify-center">
          <div className="relative overflow-hidden mx-auto w-full">
            <input
              type="checkbox"
              className="peer absolute top-0 inset-x-0 opacity-0 w-full h-12 z-10 cursor-pointer"
            />
            <div className="h-12 w-full pl-5 flex justify-between items-center">
              <h1 className="text-lg text-left font-semibold w-[840px]">
                Mình có thể liên hệ với Selly bằng hình thức nào?
              </h1>
            </div>
            <RiArrowDownSLine className="text-3xl absolute right-0 top-2 text-side mr-4 transition-transform duration-500 rotate-0 peer-checked:rotate-180" />
            <div className="over-hidden border-b-2 transition-all duration-500 max-h-0 peer-checked:max-h-fit">
              <div className="p-5 w-[840px]">
                <p className="">
                  Có 4 cách để bạn liên hệ với Selly:<br></br>
                  <br></br>
                  1. Chat trực tiếp trên ứng dụng Selly <br></br>2. Gọi số điện
                  thoại hotline <span className="text-main">1900 633 829</span>{" "}
                  <br></br>3. Nhắn tin cho Selly qua tin nhắn tại fanpage{" "}
                  <span className="text-main">Selly - Dễ dàng bán hàng</span> 4.
                  Gửi mail về địa chỉ{" "}
                  <span className="text-main">cskh@selly.vn </span>
                  <br></br>
                  <br></br>Selly sẽ luôn tận tâm hỗ trợ bạn.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[968px] items-center justify-center">
          <div className="relative overflow-hidden mx-auto w-full">
            <input
              type="checkbox"
              className="peer absolute top-0 inset-x-0 opacity-0 w-full h-12 z-10 cursor-pointer"
            />
            <div className="h-12 w-full pl-5 flex justify-between items-center">
              <h1 className="text-lg text-left font-semibold w-[840px]">
                Mình muốn bán hàng với Selly để được nhận hoa hồng thì cần phải
                làm gì?
              </h1>
            </div>
            <RiArrowDownSLine className="text-3xl absolute right-0 top-2 text-side mr-4 transition-transform duration-500 rotate-0 peer-checked:rotate-180" />
            <div className="over-hidden border-b-2 transition-all duration-500 max-h-0 peer-checked:max-h-fit">
              <div className="p-5 w-[840px]">
                <p className="">
                  Để bán hàng với Selly thì bạn chỉ cần tải ứng dụng Selly, truy
                  cập vào ứng dụng và khám phá kho hàng phong phú của Selly. Sau
                  đó chọn sản phẩm bạn muốn bán, chia sẻ hình ảnh và thông tin
                  sản phẩm qua tin nhắn, Zalo, Facebook.. cho gia đình, bạn bè
                  hay bất kỳ ai có nhu cầu mua sắm.<br></br>
                  <br></br>
                  Nếu mọi người thích sản phẩm đó và đồng ý mua hàng, bạn chỉ
                  cần tạo đơn hàng trên ứng dụng và Selly sẽ giúp bạn vận chuyển
                  đến tận tay khách hàng.<br></br>
                  <br></br>
                  Sau khi đơn hàng giao thành công đến khách thì tiền hoa hồng
                  của bạn sẽ được chuyển vào tài khoản trên ví Selly sau 7 ngày
                  (đây là khoảng thời gian mà khách của bạn có thể đổi trả hàng
                  trong trường hợp sản phẩm bị lỗi hoặc có vấn đề).
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[968px] items-center justify-center">
          <div className="relative overflow-hidden mx-auto w-full">
            <input
              type="checkbox"
              className="peer absolute top-0 inset-x-0 opacity-0 w-full h-12 z-10 cursor-pointer"
            />
            <div className="h-12 w-full pl-5 flex justify-between items-center">
              <h1 className="text-lg text-left font-semibold w-[840px]">
                Selly có phiên bản website không?
              </h1>
            </div>
            <RiArrowDownSLine className="text-3xl absolute right-0 top-2 text-side mr-4 transition-transform duration-500 rotate-0 peer-checked:rotate-180" />
            <div className="over-hidden border-b-2 transition-all duration-500 max-h-0 peer-checked:max-h-fit">
              <div className="p-5 w-[840px]">
                <p className="">
                  Selly đã có phiên bản website để hỗ trợ Seller bán hàng thêm
                  dễ dàng ngay trên laptop, máy tính để bàn của mình. Bạn có thể
                  đăng ký tài khoản, tìm kiếm, đăng bán sản phẩm, theo dõi tình
                  trạng đơn hàng cũng như yêu cầu rút tiền ngay tại website
                  Selly. Đăng ký tài khoản và trải nghiệm bán hàng cùng Selly
                  ngay nhé!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QandA;
