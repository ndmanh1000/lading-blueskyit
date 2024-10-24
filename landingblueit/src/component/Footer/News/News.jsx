import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Optional: for navigation buttons
import "swiper/css/pagination"; // Optional: for pagination
import { GoCheck } from "react-icons/go";
import sms_check from "../../../assets/images/sms_check.svg";
import Footer from "./Footer/Footer";
import footer_pc from "../../../assets/images/footer_pc.png";

export default function News() {
  return (
    <div
      className=" bg-slate-400 bg-cover bg-center bg-no-repeat lg:pb-[86px]"
      style={{
        backgroundImage: `url(${footer_pc})`,
      }}
    >
      <div className="container mx-auto p-3 flex flex-col gap-4 w-full ">
        <div className="w-full lg:pt-10">
          <div className="hidden lg:block ">
            <Swiper
              spaceBetween={20}
              slidesPerView={4}
              breakpoints={{
                sm: {
                  slidesPerView: 7,
                },
                lg: {
                  slidesPerView: 10,
                },
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="w-[19.0625rem] h-[3.25rem] border border-white rounded-[40px] px-[0.5rem] py-[0.5rem] flex items-center justify-around">
                  <div className="border border-white text-[#27C6FF] bg-white w-10 h-10 rounded-full flex items-center justify-center">
                    <GoCheck />
                  </div>
                  <div>
                    <p className="text-white">Tư vấn hỗ trợ sản phẩm IT</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="w-[19.0625rem] h-[3.25rem]  border border-white rounded-[40px] px-[0.5rem] py-[0.5rem] flex items-center justify-around">
                  <div className="border border-white bg-white text-[#27C6FF] w-10 h-10 rounded-full flex items-center justify-center">
                    <GoCheck />
                  </div>
                  <div>
                    <p className="text-white">Lập trình ứng dụng</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="w-[19.0625rem] h-[3.25rem] border border-white rounded-[40px] px-[0.5rem] py-[0.5rem] flex items-center justify-around">
                  <div className="border border-white bg-white w-10 h-10 text-[#27C6FF] rounded-full flex items-center justify-center">
                    <GoCheck />
                  </div>
                  <div>
                    <p className="text-white">Phát triển website</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="w-[19.0625rem] h-[3.25rem] border border-white rounded-[40px] px-[0.5rem] py-[0.5rem] flex items-center justify-around">
                  <div className="border border-white bg-white text-[#27C6FF] w-10 h-10 rounded-full flex items-center justify-center">
                    <GoCheck />
                  </div>
                  <div>
                    <p className="text-white">Dịch vụ phần mềm</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="w-[19.0625rem] h-[3.25rem] border border-white rounded-[40px] px-[0.5rem] py-[0.5rem] flex items-center justify-around">
                  <div className="border border-white bg-white text-[#27C6FF] w-10 h-10 rounded-full flex items-center justify-center">
                    <GoCheck />
                  </div>
                  <div>
                    <p className="text-white">Thiết kế web chuẩn SEO</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-[19.0625rem] h-[3.25rem] border border-white rounded-[40px] px-[0.5rem] py-[0.5rem] flex items-center justify-around">
                  <div className="border border-white bg-white w-10 text-[#27C6FF] h-10 rounded-full flex items-center justify-center">
                    <GoCheck />
                  </div>
                  <div>
                    <p className="text-white">Tư vấn hỗ trợ sản phẩm IT</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-[19.0625rem] h-[3.25rem] border border-white rounded-[40px] px-[0.5rem] py-[0.5rem] flex items-center justify-around">
                  <div className="border border-white text-[#27C6FF] bg-white w-10 h-10 rounded-full flex items-center justify-center">
                    <GoCheck />
                  </div>
                  <div>
                    <p className="text-white">Tư vấn hỗ trợ sản phẩm IT</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-[19.0625rem] h-[3.25rem] border border-white rounded-[40px] px-[0.5rem] py-[0.5rem] flex items-center justify-around">
                  <div className="border border-white text-[#27C6FF] bg-white w-10 h-10 rounded-full flex items-center justify-center">
                    <GoCheck />
                  </div>
                  <div>
                    <p className="text-white">Tư vấn hỗ trợ sản phẩm IT</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-[19.0625rem] h-[3.25rem] border border-white rounded-[40px] px-[0.5rem] py-[0.5rem] flex items-center justify-around">
                  <div className="border border-white text-[#27C6FF] bg-white w-10 h-10 rounded-full flex items-center justify-center">
                    <GoCheck />
                  </div>
                  <div>
                    <p className="text-white">Tư vấn hỗ trợ sản phẩm IT</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="block lg:hidden mt-14">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                sm: {
                  slidesPerView: 7,
                },
                lg: {
                  slidesPerView: 10,
                },
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="w-full h-[3.25rem] border border-white rounded-[40px] px-[0.5rem] py-[0.5rem] flex items-center justify-around">
                  <div className="border border-white text-[#27C6FF] bg-white w-10 h-10 rounded-full flex items-center justify-center">
                    <GoCheck />
                  </div>
                  <div>
                    <p className="text-white">Tư vấn hỗ trợ sản phẩm IT</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="w-full h-[3.25rem] border border-white rounded-[40px] px-[0.5rem] py-[0.5rem] flex items-center justify-around">
                  <div className="border border-white text-[#27C6FF] bg-white w-10 h-10 rounded-full flex items-center justify-center">
                    <GoCheck />
                  </div>
                  <div>
                    <p className="text-white">Thiết kế web chuẩn SEO</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="w-full h-[3.25rem] border border-white rounded-[40px] px-[0.5rem] py-[0.5rem] flex items-center justify-around">
                  <div className="border border-white text-[#27C6FF] bg-white w-10 h-10 rounded-full flex items-center justify-center">
                    <GoCheck />
                  </div>
                  <div>
                    <p className="text-white">Dịch vụ Devops</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="w-full h-[3.25rem] border border-white rounded-[40px] px-[0.5rem] py-[0.5rem] flex items-center justify-around">
                  <div className="border border-white text-[#27C6FF] bg-white w-10 h-10 rounded-full flex items-center justify-center">
                    <GoCheck />
                  </div>
                  <div>
                    <p className="text-white">Phát triển Website</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="w-full h-[3.25rem] border border-white rounded-[40px] px-[0.5rem] py-[0.5rem] flex items-center justify-around">
                  <div className="border border-white text-[#27C6FF] bg-white w-10 h-10 rounded-full flex items-center justify-center">
                    <GoCheck />
                  </div>
                  <div>
                    <p className="text-white">Lập trình ứng dụng</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="border border-b-[#FAFAFA] w-full mx-auto mt-4 lg:mt-5"></div>
        <div className="flex flex-col lg:flex-row w-full gap-4 lg:items-center lg:justify-between">
          <div className="flex flex-col gap-4">
            <p className="font-semibold text-[1.5rem] text-white">Bản tin</p>
            <p className="text-[1rem] text-white font-normal">
              Đăng ký nhận bản tin hàng tuần của BlueSkyIT để nhận được những
              thông tin cập nhật mới nhất.
            </p>
          </div>
          <div>
            <div class="flex items-center justify-around bg-white rounded-full p-2 shadow-lg">
              <div class="flex items-center space-x-2 px-4">
                <img src={sms_check} alt="sms_check" />
                <input
                  type="email"
                  placeholder="Nhập email của bạn"
                  class="outline-none text-black text-sm"
                />
              </div>
              <button class="bg-[#27C6FF] text-white flex items-center justify-center px-[1.8rem] py-[1rem] w-[7.5rem] h-[2.75rem] rounded-full">
                Gửi
              </button>
            </div>
          </div>
        </div>
        <div className="border border-b-[#FAFAFA] w-full mx-auto"></div>
        <Footer />
      </div>
    </div>
  );
}
