import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Optional: for navigation buttons
import "swiper/css/pagination"; // Optional: for pagination
import { useState } from "react";
import staff1 from "../../assets/images/staff1.png";
import staff2 from "../../assets/images/staff2.png";

import staff3 from "../../assets/images/staff3.png";

import staff4 from "../../assets/images/staff4.png";

import staff5 from "../../assets/images/staff5.png";
import fbb from "../../assets/images/fbb.png";
import maill from "../../assets/images/maill.svg";
import telegram from "../../assets/images/tele.svg";
import zalo from "../../assets/images/zalo.svg";
import { GoArrowUpRight } from "react-icons/go";
import ModalStaff1 from "../Modal/ModalStaff1";

export default function Slides() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true); // Open the modal when the image is clicked
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="w-full lg:pt-4">
      <div className="block lg:hidden">
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
            <div className="border relative border-[#B7E7FF] bg-[#B7E7FF] w-full rounded-[24px] h-[29.375rem] px-[1.88rem] py-[1.88rem]">
              <div className="flex items-center justify-center">
                <img
                  src={staff1}
                  alt="st1"
                  className="rounded-[8px] w-[15rem] h-[17.5rem] object-cover cursor-pointer"
                  onClick={handleImageClick}
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <p className="text-[1.25rem] font-semibold text-[#033F6A]">
                  Bùi Hữu Hoài
                </p>
                <p>Chuyên viên IT HelpDesk</p>
                <div className="flex flex-row items-center justify-center gap-3">
                  <div>
                    <img src={fbb} alt="fbb" />
                  </div>
                  <div className="w-10 h-10 border border-white bg-white flex items-center justify-center rounded-full">
                    <img src={maill} alt="maill" />
                  </div>
                  <img src={telegram} alt="tele" />
                  <div className="w-10 h-10 border border-white bg-white flex items-center justify-center rounded-full">
                    <img src={zalo} alt="zalo" />
                  </div>
                </div>
              </div>
              <ModalStaff1 isOpen={isModalOpen} onClose={handleCloseModal} />{" "}
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="border border-[#B7E7FF] bg-[#B7E7FF] w-full rounded-[24px] h-[29.375rem] px-[1.88rem] py-[1.88rem]">
              <div className="flex items-center justify-center">
                <img
                  src={staff2}
                  alt="st2"
                  className=" rounded-[8px] w-[15rem] h-[17.5rem] object-cover"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <p className="text-[1.25rem] font-semibold text-[#033F6A]">
                  Trần Văn Bạch
                </p>
                <p>Giám đốc kĩ thuật IT - Co.Founder</p>
                <div className="flex flex-row items-center justify-center gap-3">
                  <div>
                    <img src={fbb} alt="fbb" />
                  </div>
                  <div className="w-10 h-10 border border-white bg-white flex items-center justify-center rounded-full">
                    <img src={maill} alt="maill" />
                  </div>
                  <img src={telegram} alt="tele" />
                  <div className="w-10 h-10 border border-white bg-white flex items-center justify-center rounded-full">
                    <img src={zalo} alt="zalo" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="border border-[#B7E7FF] bg-[#B7E7FF] w-full rounded-[24px] h-[29.375rem] px-[1.88rem] py-[1.88rem]">
              <div className="flex items-center justify-center">
                <img
                  src={staff3}
                  alt="st2"
                  className=" rounded-[8px] w-[15rem] h-[17.5rem] object-cover"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <p className="text-[1.25rem] font-semibold text-[#033F6A]">
                  Trần Anh Tuấn
                </p>
                <p>Chủ tịch & CEO, Founder</p>
                <div className="flex flex-row items-center justify-center gap-3">
                  <div>
                    <img src={fbb} alt="fbb" />
                  </div>
                  <div className="w-10 h-10 border border-white bg-white flex items-center justify-center rounded-full">
                    <img src={maill} alt="maill" />
                  </div>
                  <img src={telegram} alt="tele" />
                  <div className="w-10 h-10 border border-white bg-white flex items-center justify-center rounded-full">
                    <img src={zalo} alt="zalo" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="border border-[#B7E7FF] bg-[#B7E7FF] w-full rounded-[24px] h-[29.375rem] px-[1.88rem] py-[1.88rem]">
              <div className="flex items-center justify-center">
                <img
                  src={staff4}
                  alt="st2"
                  className=" rounded-[8px] w-[15rem] h-[17.5rem] object-cover"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <p className="text-[1.25rem] font-semibold text-[#033F6A]">
                  Ngô Hoàng Sơn
                </p>
                <p>Phó giám đốc kỹ thuật-Co.Founder</p>
                <div className="flex flex-row items-center justify-center gap-3">
                  <div>
                    <img src={fbb} alt="fbb" />
                  </div>
                  <div className="w-10 h-10 border border-white bg-white flex items-center justify-center rounded-full">
                    <img src={maill} alt="maill" />
                  </div>
                  <img src={telegram} alt="tele" />
                  <div className="w-10 h-10 border border-white bg-white flex items-center justify-center rounded-full">
                    <img src={zalo} alt="zalo" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="border border-[#B7E7FF] bg-[#B7E7FF] w-full rounded-[24px] h-[29.375rem] px-[1.88rem] py-[1.88rem]">
              <div className="flex items-center justify-center">
                <img
                  src={staff5}
                  alt="st2"
                  className=" rounded-[8px] w-[15rem] h-[17.5rem] object-cover"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <p className="text-[1.25rem] font-semibold text-[#033F6A]">
                  Phạm Anh Tuấn
                </p>
                <p>Phó giám đốc kỹ thuật-Co.Founder</p>
                <div className="flex flex-row items-center justify-center gap-3">
                  <div>
                    <img src={fbb} alt="fbb" />
                  </div>
                  <div className="w-10 h-10 border border-white bg-white flex items-center justify-center rounded-full">
                    <img src={maill} alt="maill" />
                  </div>
                  <img src={telegram} alt="tele" />
                  <div className="w-10 h-10 border border-white bg-white flex items-center justify-center rounded-full">
                    <img src={zalo} alt="zalo" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="hidden lg:block">
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
            <div className="border border-[#B7E7FF] bg-[#B7E7FF] w-full rounded-[24px] h-[29.375rem] px-[1.88rem] py-[1.88rem]">
              <div className="flex items-center justify-center">
                <img
                  src={staff1}
                  alt="st1"
                  className=" rounded-[8px] w-[15rem] h-[17.5rem] object-cover"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <p className="text-[1.25rem] font-semibold text-[#033F6A]">
                  Bùi Hữu Hoài
                </p>
                <p>Chuyên viên IT HelpDesk</p>
                <div className="flex flex-row items-center justify-center gap-3">
                  <div>
                    <img src={fbb} alt="fbb" />
                  </div>
                  <div className="w-10 h-10 border border-white bg-white flex items-center justify-center rounded-full">
                    <img src={maill} alt="maill" />
                  </div>
                  <img src={telegram} alt="tele" />
                  <div className="w-10 h-10 border border-white bg-white flex items-center justify-center rounded-full">
                    <img src={zalo} alt="zalo" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="border border-[#B7E7FF] bg-[#B7E7FF] w-full rounded-[24px] h-[29.375rem] px-[1.88rem] py-[1.88rem]">
              <div className="flex items-center justify-center">
                <img
                  src={staff2}
                  alt="st2"
                  className=" rounded-[8px] w-[15rem] h-[17.5rem] object-cover"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <p className="text-[1.25rem] font-semibold text-[#033F6A]">
                  Trần Văn Bạch
                </p>
                <p>Giám đốc kĩ thuật IT - Co.Founder</p>
                <div className="flex flex-row items-center justify-center gap-3">
                  <div>
                    <img src={fbb} alt="fbb" />
                  </div>
                  <div className="w-10 h-10 border border-white bg-white flex items-center justify-center rounded-full">
                    <img src={maill} alt="maill" />
                  </div>
                  <img src={telegram} alt="tele" />
                  <div className="w-10 h-10 border border-white bg-white flex items-center justify-center rounded-full">
                    <img src={zalo} alt="zalo" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="border border-[#B7E7FF] bg-[#B7E7FF] w-full rounded-[24px] h-[29.375rem] px-[1.88rem] py-[1.88rem]">
              <div className="flex items-center justify-center">
                <img
                  src={staff3}
                  alt="st2"
                  className=" rounded-[8px] w-[15rem] h-[17.5rem] object-cover"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <p className="text-[1.25rem] font-semibold text-[#033F6A]">
                  Trần Anh Tuấn
                </p>
                <p>Chủ tịch & CEO, Founder</p>
                <div className="flex flex-row items-center justify-center gap-3">
                  <div>
                    <img src={fbb} alt="fbb" />
                  </div>
                  <div className="w-10 h-10 border border-white bg-white flex items-center justify-center rounded-full">
                    <img src={maill} alt="maill" />
                  </div>
                  <img src={telegram} alt="tele" />
                  <div className="w-10 h-10 border border-white bg-white flex items-center justify-center rounded-full">
                    <img src={zalo} alt="zalo" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="border border-[#B7E7FF] bg-[#B7E7FF] w-full rounded-[24px] h-[29.375rem] px-[1.88rem] py-[1.88rem]">
              <div className="flex items-center justify-center">
                <img
                  src={staff4}
                  alt="st2"
                  className=" rounded-[8px] w-[15rem] h-[17.5rem] object-cover"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <p className="text-[1.25rem] font-semibold text-[#033F6A]">
                  Ngô Hoàng Sơn
                </p>
                <p>Phó giám đốc kỹ thuật-Co.Founder</p>
                <div className="flex flex-row items-center justify-center gap-3">
                  <div>
                    <img src={fbb} alt="fbb" />
                  </div>
                  <div className="w-10 h-10 border border-white bg-white flex items-center justify-center rounded-full">
                    <img src={maill} alt="maill" />
                  </div>
                  <img src={telegram} alt="tele" />
                  <div className="w-10 h-10 border border-white bg-white flex items-center justify-center rounded-full">
                    <img src={zalo} alt="zalo" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="border border-[#B7E7FF] bg-[#B7E7FF] w-full rounded-[24px] h-[29.375rem] px-[1.88rem] py-[1.88rem]">
              <div className="flex items-center justify-center">
                <img
                  src={staff5}
                  alt="st2"
                  className=" rounded-[8px] w-[15rem] h-[17.5rem] object-cover"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <p className="text-[1.25rem] font-semibold text-[#033F6A]">
                  Phạm Anh Tuấn
                </p>
                <p>Phó giám đốc kỹ thuật-Co.Founder</p>
                <div className="flex flex-row items-center justify-center gap-3">
                  <div>
                    <img src={fbb} alt="fbb" />
                  </div>
                  <div className="w-10 h-10 border border-white bg-white flex items-center justify-center rounded-full">
                    <img src={maill} alt="maill" />
                  </div>
                  <img src={telegram} alt="tele" />
                  <div className="w-10 h-10 border border-white bg-white flex items-center justify-center rounded-full">
                    <img src={zalo} alt="zalo" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex items-center justify-center pt-6">
        <div className="lg:w-36 lg:h-11 w-full h-11 flex items-center justify-center gap-4 shadow rounded-[30px] ">
          <p>Xem tất cả</p>
          <GoArrowUpRight />
        </div>
      </div>
    </div>
  );
}
