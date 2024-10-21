import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bluerrise from "../../assets/images/bluerrise.png";
import keya from "../../assets/images/keya.png";
import cmd from "../../assets/images/cmd.png";

export default function Project() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="w-full container mx-auto p-3 mt-9 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <p className="text-[1.125rem] font-semibold text-[#033F6A]">
          Các dự án của
        </p>
        <div className="border border-[#27C6FF] w-[7.125rem] h-10 rounded-md bg-[#27C6FF] flex items-center justify-center">
          <p className="text-[1.125rem] font-semibold text-white">BlueSkyIT</p>
        </div>
      </div>
      <div>
        <p className="text-[1.5rem] text-[#1375B7] font-semibold lg:text-[2.25rem]">
          Những dự án tiêu biểu của chúng tôi
        </p>
        <p className="text-[1rem] font-normal text-[#333] lg:w-[66rem]">
          Các dự án gần đây của chúng tôi nêu bật chuyên môn của chúng tôi trong
          việc cung cấp các giải pháp phù hợp đáp ứng nhu cầu và mục tiêu riêng
          của khách hàng, phần mềm tùy chỉnh.
        </p>
      </div>
      <Slider {...sliderSettings}>
        <div className="px-2">
          {" "}
          <div className="w-full bg-white shadow-custom2 h-[23rem] lg:h-[36rem] border border-gray-100 rounded-2xl">
            <div>
              <img
                src={cmd}
                alt="cmd"
                className="object-cover rounded-2xl w-full"
              />
            </div>
            <div className="flex flex-col gap-2 w-full h-[8.5rem] px-[1.88rem] py-[1.25rem]">
              <p className="text-[#033F6A] text-[1.5rem] font-semibold">
                Website giới thiệu hệ thống BlueRise
              </p>
              <p className="text-[#919191] text-[1rem] font-normal">Website</p>
            </div>
          </div>
        </div>
        <div className="px-2">
          {" "}
          <div className="w-full bg-white shadow-custom2 h-[23rem] border lg:h-[36rem] border-gray-100 rounded-2xl">
            <div>
              <img
                src={keya}
                alt="keya"
                className="object-cover rounded-2xl w-full"
              />
            </div>
            <div className="flex flex-col gap-2 w-full h-[8.5rem] px-[1.88rem] py-[1.25rem]">
              <p className="text-[#033F6A] text-[1.5rem] font-semibold">
                Website giới thiệu hệ thống Keyavo
              </p>
              <p className="text-[#919191] text-[1rem] font-normal">Website</p>
            </div>
          </div>
        </div>
        <div className="px-2">
          {" "}
          <div className="w-full bg-white shadow-custom2 h-[23rem] border lg:h-[36rem] border-gray-100 rounded-2xl">
            <div>
              <img
                src={bluerrise}
                alt="bluerrise"
                className="object-cover rounded-2xl w-full"
              />
            </div>
            <div className="flex flex-col gap-2 w-full h-[8.5rem] px-[1.88rem] py-[1.25rem]">
              <p className="text-[#033F6A] text-[1.5rem] font-semibold">
                Website giới thiệu hệ thống BlueRise
              </p>
              <p className="text-[#919191] text-[1rem] font-normal">Website</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
