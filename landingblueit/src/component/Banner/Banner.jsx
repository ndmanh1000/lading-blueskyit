import call1 from "../../assets/images/call1.png";
import send from "../../assets/images/send.svg";
import bg_lg from "../../assets/images/bg_lg.png";
import { Button } from "flowbite-react";
import bg_mo from "../../assets/images/bg_mo.png";
import start_rating from "../../assets/images/start_rating.png";
import user_switch from "../../assets/images/user_switch.svg";
import gay from "../../assets/images/gay.png";
import arrow_up from "../../assets/images/arrow_up.svg";
import crown from "../../assets/images/crown.svg";
import gay_lg from "../../assets/images/gay_lg.png";

export default function Banner() {
  return (
    <div
      className=" w-full rounded-[24px] mx-auto p-3 bg-cover bg-center bg-no-repeat container mt-20 lg:mt-32  "
      style={{
        backgroundImage: `url(${bg_lg})`,
      }}
    >
      <div className="p-1 flex flex-col gap-4 items-center md:flex-row lg:flex-row w-full lg:px-6">
        <div className=" h-auto flex flex-col gap-4 lg:gap-6 p-2 text-white relative lg:left-[70px]">
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
                  <p className="text-[#1375b7] font-medium text-[1.125rem]">
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
              <p className="text-[1rem] font-normal">
                2960+ đánh giá từ khách hàng
              </p>
            </div>
          </div>
        </div>

        {/* banner2 */}

        <div className="relative flex flex-col items-center gap-4 lg:relative lg:bottom-[-4px] lg:left-[140px]">
          {/*  */}

          <div className="flex items-center justify-around shadow-custom1 w-[22rem] h-[4.5625rem] lg:absolute lg:bottom-[245px] lg:left-[-120px] bg-white rounded-[36px] lg:w-[14.8125rem] lg:z-20">
            <div className="flex items-center lg:items-start justify-center flex-col gap-1 ">
              <p className="text-[#073C7A] text-[1.5rem] font-normal  left-[60px]">
                68K+
              </p>
              <p className="text-[0.875rem] font-normal text-[#333]">
                Khách hàng hài lòng
              </p>
            </div>
            <div className="bg-[#3DB72D] w-[3rem] h-[3rem] left-[26px] flex items-center justify-center rounded-full animate-bounce">
              <img src={user_switch} alt="user" />
            </div>
          </div>
          {/*  */}
          {/*  */}

          <div className="flex items-center justify-center shadow-custom1 w-[22rem] lg:absolute lg:bottom-[160px] lg:right-[-46px] h-[4.5625rem] bg-white rounded-[36px] lg:z-20 lg:w-[10.1875rem]">
            <div className="flex items-center justify-center flex-col gap-1">
              <p className="text-[0.875rem] font-normal text-[#333]">
                Tỉ lệ thành công
              </p>
              <p className=" text-[#073C7A] text-[1.5rem] font-normal">96%</p>
            </div>
          </div>

          {/*  */}
          {/*  */}
          <div className="flex items-center justify-around shadow-custom1 lg:absolute lg:bottom-[60px] lg:right-[147px] w-[22rem] h-[4.5625rem] bg-white rounded-[36px] lg:w-[15.8125rem] lg:z-20">
            <div className="bg-[#4CA8FF] w-[3rem] h-[3rem] flex items-center justify-center rounded-full right-[23px] animate-bounce">
              <img src={crown} alt="crown" />
            </div>
            <div className="flex items-center justify-center flex-col gap-1 right-[52px]">
              <p className="text-[#073C7A] text-[0.875rem] font-normal">
                Giá trị doanh nghiệp
              </p>
              <p className="text-[1.5rem] font-normal text-[#073C7A] flex">
                1.000.000${" "}
                <img src={arrow_up} alt="arrow_up" className="animate-bounce" />
              </p>
            </div>
          </div>
          <div>
            <img src={gay} alt="gay" className="block lg:hidden" />
            <img
              src={gay_lg}
              alt="gay_lg"
              className="hidden lg:block relative bottom-[-12px]"
            />
          </div>
          {/*  */}
        </div>

        {/* banner2 */}
      </div>
    </div>
  );
}
