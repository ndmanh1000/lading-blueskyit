import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Optional: for navigation buttons
import "swiper/css/pagination"; // Optional: for pagination

import vinh_phu from "../../assets/images/vinh_phu.svg";
import bigmax from "../../assets/images/bigmax.svg";
import bluerise from "../../assets/images/bluerise.svg";
import keyavo from "../../assets/images/keyavo.svg";

import { Navigation, Pagination } from "swiper";

export default function Slides() {
  return (
    <div className="w-full lg:pt-4">
      <Swiper
        spaceBetween={20}
        slidesPerView={7}
        breakpoints={{
          sm: {
            slidesPerView: 4,
          },
          lg: {
            slidesPerView: 10,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-[9.9rem] h-[4rem] shadow-custom flex items-center justify-center lg:w-[12rem] lg:h-[5rem]">
            <img src={vinh_phu} alt="Vinh Phu" className="object-cover" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-[9.9rem] h-[4rem] shadow-custom flex items-center justify-center lg:w-[12rem] lg:h-[5rem]">
            <img src={bluerise} alt="Bluerise" className="object-cover" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-[9.9rem] h-[4rem] shadow-custom flex items-center justify-center lg:w-[12rem] lg:h-[5rem]">
            <img src={keyavo} alt="Keyavo" className="object-cover" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-[9.9rem] h-[4rem] shadow-custom flex items-center justify-center lg:w-[12rem] lg:h-[5rem]">
            <img src={bigmax} alt="Bigmax" className="object-cover" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-[9.9rem] h-[4rem] shadow-custom flex items-center justify-center lg:w-[12rem] lg:h-[5rem]">
            <img src={keyavo} alt="Keyavo" className="object-cover" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-[9.9rem] h-[4rem] shadow-custom flex items-center justify-center lg:w-[12rem] lg:h-[5rem]">
            <img src={vinh_phu} alt="Vinh Phu" className="object-cover" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-[9.9rem] h-[4rem] shadow-custom flex items-center justify-center lg:w-[12rem] lg:h-[5rem]">
            <img src={bigmax} alt="Bigmax" className="object-cover" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-[9.9rem] h-[4rem] shadow-custom flex items-center justify-center lg:w-[12rem] lg:h-[5rem]">
            <img src={bigmax} alt="Bigmax" className="object-cover" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-[9.9rem] h-[4rem] shadow-custom flex items-center justify-center lg:w-[12rem] lg:h-[5rem]">
            <img src={bigmax} alt="Bigmax" className="object-cover" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-[9.9rem] h-[4rem] shadow-custom flex items-center justify-center lg:w-[12rem] lg:h-[5rem]">
            <img src={bigmax} alt="Bigmax" className="object-cover" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
