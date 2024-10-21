import code from "../../assets/images/code.png";
import bok1 from "../../assets/images/bok1.png";
import bok2 from "../../assets/images/bok2.png";
import dott from "../../assets/images/dott.svg";
import bok3 from "../../assets/images/bok3.png";
import we_mo from "../../assets/images/we_mo.png";
import we_pc from "../../assets/images/we_pc.png";

export default function WeAre() {
  return (
    <div className="container mx-auto p-3 pl-6 flex flex-col lg:flex-row-reverse  gap-10">
      <div className="flex flex-col gap-4 w-full lg:gap-7 ">
        <div className="flex items-center gap-2 w-full ">
          <p className="text-[1.125rem] font-semibold text-[#033F6A]">
            Chúng tôi là
          </p>
          <div className="border border-[#27C6FF] w-[7.125rem] h-10 rounded-md bg-[#27C6FF] flex items-center justify-center">
            <p className="text-[1.125rem] font-semibold text-white">
              BlueSkyIT
            </p>
          </div>
        </div>
        <div>
          <p className="text-[1.5rem] text-[#1C9BDB] font-semibold w-[20rem] lg:text-[1.75rem] lg:w-[31.9rem]">
            Cam kết của chúng tôi đối với sự hài lòng của khách hàng
          </p>
        </div>
        <div>
          <p className="text-[1.125rem] font-normal w-[20rem] lg:w-[31.9rem]">
            Tại BlueSkyIT, cam kết mang lại sự hài lòng của khách hàng là cốt
            lõi trong mọi việc chúng tôi làm. Chúng tôi hiểu sự thành công của
            khách hàng.
          </p>
        </div>
        <div>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-4">
              <img
                src={dott}
                alt="dott"
                className="lg:w-[0.875rem] lg:h-[0.875rem]"
              />
              <p className="text-[1rem] font-normal w-[18rem] lg:w-[30rem]">
                Phát triển doanh nghiệp của bạn một cách đúng đắn.
              </p>
            </li>
            <li className="flex items-center gap-4">
              <img
                src={dott}
                alt="dott"
                className="lg:w-[0.875rem] lg:h-[0.875rem]"
              />
              <p className="text-[1rem] font-normal w-[18rem] lg:w-[27rem]">
                Hãy để tăng trưởng kinh doanh giúp doanh nghiệp của bạn phát
                triển.
              </p>
            </li>
            <li className="flex items-center gap-4">
              <img
                src={dott}
                alt="dott"
                className="lg:w-[0.875rem] lg:h-[0.875rem]"
              />
              <p className="text-[1rem] font-normal w-[18rem] lg:w-[27rem]">
                Cải thiện tình hình kinh doanh của doanh nghiệp trở nên tốt hơn.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className=" w-full lg:w-full ">
        <img src={we_mo} alt="we_mo" className="block lg:hidden" />
        <img src={we_pc} alt="we_pc" className="hidden lg:block " />
      </div>
    </div>
  );
}
