import React, { useState } from "react";
import start_rating from "../../assets/images/start_rating.png";
import tuanle_mo from "../../assets/images/tuanle_mo.png";
import tuanle_pc from "../../assets/images/tuanle_pc.png";
import { FiMapPin } from "react-icons/fi";

import leftt from "../../assets/images/leftt.svg";
import rightt from "../../assets/images/rightt.svg";
import pc_01 from "../../assets/images/pc_01.png";
import mobi01 from "../../assets/images/mobi01.png";
import pc02 from "../../assets/images/pc02.png";
import mobi02 from "../../assets/images/mobi02.png";
import pc03 from "../../assets/images/pc03.png";
import mobi03 from "../../assets/images/mobi03.png";
const testimonials = [
  {
    text: "Dịch vụ phần mềm tuyệt vời",
    content:
      "Phần mềm quản lý giáo dục của công ty Bầu Trời Xanh đã giúp chúng tôi tối ưu hóa quy trình dạy học và quản lý học viên một cách hiệu quả. Nhờ đó, chúng tôi có thể tập trung hơn vào chất lượng giảng dạy và tăng cường sự hài lòng của phụ huynh và học sinh.",
    name: "Lê Quang Huy",
    position: "Giám đốc trung tâm Anh Ngữ- HuyLe",
    location: "Đan Phượng - Hà Nội",
    imageMobile: tuanle_mo,
    imageDesktop: tuanle_pc,
  },
  {
    text: "Tiết kiệm được khá nhiều thời gian làm việc",
    content:
      "Dịch vụ tích hợp hệ thống của Bầu Trời Xanh rất chuyên nghiệp.Họ giúp chúng tôi kết nối các hệ thống công nghệ cũ với những nền tảng một cách trơn tru, giảm thiểu thời gian gián đoạn và đảm bảo an ninh dữ liệu",
    name: "Vũ Hồng Quyền",
    position: "Trưởng phòng kỹ thuật-Keyavo",
    location: "Thanh Xuân - Hà Nội",
    imageMobile: mobi01,
    imageDesktop: pc_01,
  },
  {
    text: "Hệ thống quản lý dễ dàng",
    content:
      "Chúng tôi rất hài lòng với các giải pháp công nghệ mà Bầu Trời Xanh cung cấp.Hệ thống theo dõi và quản lý quy trình sản xuất nông sản của chúng tôi đã trở nên mình bạch và dễ dàng hơn bao giờ hết, đồng thời giúp đáp ứng các tiêu chuẩn an toàn vệ sinh thực phẩm",
    name: "Trần Văn Bạch",
    position: "Chủ trang trại nông nghiệp sạch",
    location: "Đà Lạt - Lâm Đồng",
    imageMobile: mobi02,
    imageDesktop: pc02,
  },
  {
    text: "Giải pháp phát triển toàn diện",
    content:
      "Bầu Trời Xanh cung cấp một giải pháp phát triển web và di động toàn diện.Nhóm phát triển đã giúp chúng tôi xây dựng ứng dụng Android và IOS hoàn hảo, từ thiết kế đến triển khai, với sự hỗ trợ kỹ thuật 24/7 cực kỳ hiệu qủa",
    name: "Vũ Hoàng Nam",
    position: "Nhà phát triển ứng dụng di động",
    location: "Cầu Giấy - Hà Nội",
    imageMobile: mobi03,
    imageDesktop: pc03,
  },

  // Add more testimonials as needed
];

export default function FeedBack() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full bg-[#f8ffff]">
      <div className="container w-full mx-auto p-3 flex flex-col gap-4 lg:flex-row lg:gap-3 lg:pt-7">
        <div className="flex flex-col gap-6 w-full shadow-custom1 rounded-[8px] bg-white px-[1.5rem] py-[1rem] h-auto lg:w-3/12">
          <div>
            <p className="text-[#27C6FF] font-semibold text-[2.25rem]">
              6,800 +
            </p>
            <p className="text-[#033F6A] font-semibold text-[1.5rem] w-[18.875rem] lg:text-[1.75rem]  ">
              Khách hàng nói gì về BlueSkyIT
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1 w-[7rem] h-[7.25rem]">
              <img src={start_rating} alt="rate" className="w-24 h-auto" />
              <p className="text-[#333] text-[1rem] font-normal">
                Từ 200+ đánh giá từ khách hàng
              </p>
            </div>
            <div className="flex flex-col  gap-1 w-[8.6875rem] h-[7.25rem]">
              <img src={start_rating} alt="rate" className="w-24 h-auto" />
              <p className="text-[#333] text-[1rem] font-normal">
                Từ 100+ cộng đồng CNTT Việt Nam
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-9/12  shadow-custom1 rounded-[8px] px-[1.88rem] py-[1.5rem] h-auto">
          <div className="flex flex-col gap-3">
            <p className="text-[#27C6FF] text-[1.25rem] font-semibold flex-wrap">
              {testimonials[currentIndex].text}
            </p>
            <p className="text-[1rem] text-[#033F6A] font-normal w-[18.125rem] h-[12rem] lg:h-[4.5rem]  lg:w-full">
              {testimonials[currentIndex].content}
            </p>
          </div>
          <div className="lg:flex items-center gap-3">
            <div className="mt-4">
              <img
                src={testimonials[currentIndex].imageMobile}
                alt="tl"
                className="rounded-[8px] w-full block lg:hidden"
              />
              <img
                src={testimonials[currentIndex].imageDesktop}
                alt="tlpc"
                className="w-full hidden lg:block lg:w-[7.25rem] lg-[7.6875rem]"
              />
            </div>
            <div className="flex items-center flex-col lg:flex-row justify-center pt-6 gap-4  w-full">
              <div>
                <div className="flex flex-col items-center gap-4 lg:items-start justify-center">
                  <p className="text-[#033F6A] text-[1.125rem] font-semibold">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="lg:whitespace-nowrap text-[#606060] text-[1rem] font-normal ">
                    {testimonials[currentIndex].position}
                  </p>
                </div>

                <div className="flex gap-1 items-center lg:float-start justify-center lg:pt-3">
                  <FiMapPin />
                  <p>{testimonials[currentIndex].location}</p>
                </div>
              </div>

              <div className="flex gap-2 w-full items-center justify-center lg:w-full lg:relative lg:left-[300px] lg:bottom-[-30px]">
                <button
                  className="w-10 h-10 border border-[#E1F7FF] bg-[#E1F7FF] rounded-full flex items-center justify-center"
                  onClick={handlePrev}
                >
                  <img src={leftt} alt="le" />
                </button>
                <button
                  className="w-10 h-10 border border-[#E1F7FF] bg-[#E1F7FF] rounded-full flex items-center justify-center"
                  onClick={handleNext}
                >
                  <img src={rightt} alt="ri" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
