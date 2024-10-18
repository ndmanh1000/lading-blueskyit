import call1 from "../../assets/images/call1.png";
import send from "../../assets/images/send.svg";
import bg_lg from "../../assets/images/bg_lg.png";
import { Button } from "flowbite-react";
import bg_mo from "../../assets/images/bg_mo.png";
import start_rating from "../../assets/images/start_rating.png";

export default function Banner() {
  return (
    <div className=" w-full lg:py-10 bg-blue-100  rounded-[24px] mx-auto bg-cover bg-center bg-no-repeat lg:px-52 ">
      {/* <div
        className="hidden md:block bg-cover lg:rounded-[30px] bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bg_lg})`,
        }}
      ></div> */}
      <div className="p-1 flex flex-col items-center md:flex-row lg:flex-row w-full ">
        <div className=" h-auto flex flex-col gap-4 p-2">
          <div className="lg:w-[45rem] w-[22rem]">
            <p>CHÀO MỪNG BẠN ĐẾN VỚI BLUESKYIT</p>
          </div>
          <div className="lg:w-[40rem] w-[22rem] text-[1.5rem] font-medium leading-[2.25rem] lg:text-[2.25rem] lg:font-medium lg:leading-[3rem]">
            <p>
              Chúng tôi cung cấp mọi giải pháp công nghệ cho các doanh nghiệp
            </p>
          </div>
          <div className="lg:w-[40rem] w-[22rem] text-[1rem] font-normal leading-[1.75rem] ">
            <p>
              Trong môi trường kinh doanh cạnh tranh ngày nay, nhu cầu về các
              giải pháp CNTT hiệu quả và tiết kiệm chi phí chưa bao giờ cấp
              thiết đến thế.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row md:items-center justify-center gap-4">
            <div className="flex items-center w-full">
              <div>
                <button className=" bg-white border border-white flex items-center shadow-custom rounded-[30px] gap-3 justify-center w-72 h-12 ">
                  <img src={call1} alt="call1" />
                  <p className="text-[#1375b7] font-medium">
                    Liên hệ tư vấn ngay
                  </p>
                </button>
              </div>
              <div className="border border-white w-[48px] h-[48px] bg-white flex items-center justify-center rounded-full">
                <img src={send} alt="send" />
              </div>
            </div>
            <div className="flex flex-col w-full justify-center lg:flex-col lg:items-start lg:text-left  items-center">
              <img src={start_rating} alt="rate" className="w-28" />
              <p>2960+ đánh giá từ khách hàng</p>
            </div>
          </div>
        </div>
        <div>2</div>
      </div>
    </div>
  );
}
