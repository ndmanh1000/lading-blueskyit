import arrow_right11 from "../../../assets/images/arrow_right11.svg";
import home1 from "../../../assets/images/home1.svg";
import aboutus_mobi from "../../../assets/images/aboutus_mobi.png";
import aboutus_pc from "../../../assets/images/aboutus_pc.png";

export default function AboutUsBanner() {
  return (
    <div className="w-full pt-24 ">
      <div className="block md:hidden lg:hidden w-full relative  h-[12rem]">
        <img src={aboutus_mobi} alt="mobi" className="w-full h-[12rem]" />
        <div className="w-full absolute top-0 bg-blue-sky-gradient6 h-[12rem] ">
          <div className="absolute bottom-[30%] right-[30%] flex flex-col gap-2 items-center justify-center">
            <p className="text-[1.5rem] font-semibold text-white">
              Về chúng tôi
            </p>
            <div className="w-[12.5rem] h-[2.625rem] rounded-[40px] bg-white flex items-center justify-around">
              <img src={home1} alt="home1" />
              <img src={arrow_right11} alt="ar" />
              <p className="text-[1rem] font-normal text-[#1375B7]">
                Về chúng tôi
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block lg:block w-full relative  h-[13.75rem]">
        <img src={aboutus_pc} alt="pc" className="w-full h-[13.75rem]" />
        <div className="w-full absolute top-0 bg-blue-sky-gradient6 h-[13.75rem] ">
          <div className="absolute bottom-[30%] right-[47%] flex flex-col gap-2 items-center justify-center">
            <p className="text-[2.25rem] font-semibold text-white">
              Về chúng tôi
            </p>
            <div className="w-[12.5rem] h-[2.625rem] rounded-[40px] bg-white flex items-center justify-around">
              <img src={home1} alt="home1" />
              <img src={arrow_right11} alt="ar" />
              <p className="text-[1.125rem] font-normal text-[#1375B7]">
                Về chúng tôi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
