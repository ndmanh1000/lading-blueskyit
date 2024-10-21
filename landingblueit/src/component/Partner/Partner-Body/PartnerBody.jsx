import teacher from "../../../assets/images/teacher.png";
import rain from "../../../assets/images/rain.svg";
import heart from "../../../assets/images/heart.svg";
import mendal_start from "../../../assets/images/medal_star.svg";
import check1 from "../../../assets/images/check1.svg";

export default function PartnerBody() {
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
            25+
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
            80+
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
            99%
          </p>
          <p className="w-[6.6875rem] text-[1rem] font-normal lg:w-[15rem] lg:text-[1.125rem]">
            Sự tin tượng của khách hàng
          </p>
        </div>
        <div className="shadow-custom rounded-[20px] bg-white  w-[11.2rem] h-[14.875rem] lg:w-[21.375rem] lg:h-[18.25rem] gap-4 flex flex-col items-center justify-start p-2">
          <img
            src={mendal_start}
            alt="check1"
            className="w-[2.25rem] h-[2.25rem] lg:w-[104px] lg:h-[104px]"
          />
          <p className="w-[6.6875rem] lg:w-[15rem] font-semibold text-[1.75rem] lg:text-[2.875rem] lg:text-left">
            100%
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
