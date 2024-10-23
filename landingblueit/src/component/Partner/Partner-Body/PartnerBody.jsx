import React, { useState, useEffect } from "react";

import teacher from "../../../assets/images/teacher.png";
import rain from "../../../assets/images/rain.svg";
import heart from "../../../assets/images/heart.svg";
import mendal_start from "../../../assets/images/medal_star.svg";
import check1 from "../../../assets/images/check1.svg";

export default function PartnerBody() {
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const [percentage3, setPercentage3] = useState(0);
  const [percentage4, setPercentage4] = useState(0);

  // 25+ loading effect with continuous loop
  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage1((prev) => {
        if (prev < 25) {
          return prev + 1;
        } else {
          return 0; // Reset to 0 when reaching 25
        }
      });
    }, 600); // Adjust speed as needed

    return () => clearInterval(interval);
  }, []);

  // 80+ loading effect with continuous loop
  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage2((prev) => {
        if (prev < 80) {
          return prev + 1;
        } else {
          return 0; // Reset to 0 when reaching 80
        }
      });
    }, 600); // Adjust speed as needed

    return () => clearInterval(interval);
  }, []);

  // 99% loading effect with continuous loop
  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage3((prev) => {
        if (prev < 99) {
          return prev + 1;
        } else {
          return 0; // Reset to 0 when reaching 99
        }
      });
    }, 600); // Adjust speed as needed

    return () => clearInterval(interval);
  }, []);

  // 100% loading effect with continuous loop
  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage4((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          return 0; // Reset to 0 when reaching 100
        }
      });
    }, 600); // Adjust speed as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto p-3 flex flex-col items-center justify-center lg:flex-row gap-4 w-full">
      <div className="grid grid-cols-2 w-full items-center justify-center gap-[1rem] container ">
        <div className="shadow-custom rounded-[20px] bg-white  w-[11.2rem] h-[14.875rem] lg:w-[21.375rem] lg:h-[18.25rem] gap-4 flex flex-col items-center justify-start p-2">
          <img
            src={rain}
            alt="check1"
            className="w-[2.25rem] h-[2.25rem] lg:w-[104px] lg:h-[104px]"
          />
          <p className="w-[6.6875rem] lg:w-[15rem] font-semibold text-[1.75rem] lg:text-[2.875rem] lg:text-left">
            {percentage1}+
          </p>
          <p className="w-[6.6875rem] text-[1rem] font-normal lg:w-[15rem] lg:text-[1.125rem]">
            Năm kinh nghiệm trong lĩnh vực IT
          </p>
        </div>
        <div className="shadow-custom rounded-[20px] bg-white  w-[11.2rem] h-[14.875rem] lg:w-[21.375rem] lg:h-[18.25rem] gap-4 flex flex-col items-center justify-start p-2">
          <img
            src={check1}
            alt="check1"
            className="w-[2.25rem] h-[2.25rem] lg:w-[104px] lg:h-[104px]"
          />
          <p className="w-[6.6875rem] lg:w-[15rem] font-semibold text-[1.75rem] lg:text-[2.875rem] lg:text-left">
            {percentage2}+
          </p>
          <p className="w-[6.6875rem] text-[1rem] font-normal lg:w-[15rem] lg:text-[1.125rem]">
            Câu chuyện thành công của đối tác
          </p>
        </div>
        <div className="shadow-custom rounded-[20px] bg-white  w-[11.2rem] h-[14.875rem] lg:w-[21.375rem] lg:h-[18.25rem] gap-4 flex flex-col items-center justify-start p-2">
          <img
            src={heart}
            alt="check1"
            className="w-[2.25rem] h-[2.25rem] lg:w-[104px] lg:h-[104px]"
          />
          <p className="w-[6.6875rem] lg:w-[15rem] font-semibold text-[1.75rem] lg:text-[2.875rem] lg:text-left">
            {percentage3}%
          </p>
          <p className="w-[6.6875rem] text-[1rem] font-normal lg:w-[15rem] lg:text-[1.125rem]">
            Sự tin tưởng của khách hàng
          </p>
        </div>
        <div className="shadow-custom rounded-[20px] bg-white  w-[11.2rem] h-[14.875rem] lg:w-[21.375rem] lg:h-[18.25rem] gap-4 flex flex-col items-center justify-start p-2">
          <img
            src={mendal_start}
            alt="check1"
            className="w-[2.25rem] h-[2.25rem] lg:w-[104px] lg:h-[104px]"
          />
          <p className="w-[6.6875rem] lg:w-[15rem] font-semibold text-[1.75rem] lg:text-[2.875rem] lg:text-left">
            {percentage4}%
          </p>
          <p className="w-[6.6875rem] text-[1rem] font-normal lg:w-[15rem] lg:text-[1.125rem]">
            Kết quả được đảm bảo
          </p>
        </div>
      </div>
      <div className=" relative rounded-[16px] bg-blue-sky-gradient3 lg:justify-start w-[23.875rem] h-[23.5rem] lg:w-full lg:h-[38rem]   ">
        <div className="relative -z-10 w-full">
          <img
            src={teacher}
            alt="2"
            className="rounded-[16px] w-[23.875rem] h-[23.5rem] lg:w-full object-cover lg:h-[38rem]"
          />
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-[2.25rem] font-semibold lg:text-[2.875rem]">
            200+
          </p>
          <p className="text-[1.5rem] font-semibold w-[17rem] lg:text-[2.25rem] lg:w-[27.0625rem]">
            Đội ngũ nhân sự của chúng tôi
          </p>
        </div>
      </div>
    </div>
  );
}
