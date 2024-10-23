import Servic1 from "./Servic1/Servic1";
import Servic2 from "./Servic2/Servic2";
import Servic3 from "./Servic3/Servic3";
import Servic4 from "./Servic4/Servic4";
import Servic5 from "./Servic5/Servic5";
import Servic6 from "./Servic6/Servic6";
import bg_servic from "../../assets/images/bg_servic.png";

export default function Servic() {
  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bg_servic})`,
      }}
    >
      <div className="container mx-auto p-3 lg:mt-8">
        <div className="flex items-center justify-center gap-2">
          <p className="text-[1rem] font-semibold text-[#333]">DỊCH VỤ CỦA</p>
          <div className="border border-[#27C6FF] w-[7.125rem] h-10 rounded-md bg-[#27C6FF] flex items-center justify-center">
            <p className="text-[1.125rem] font-semibold text-white">
              BlueSkyIT
            </p>
          </div>
        </div>
        <div className="text-start lg:flex lg:items-center lg:justify-center lg:whitespace-nowrap w-full">
          <p className="text-[1.5rem] font-semibold text-[#1375B7] w-[19rem]">
            Chúng tôi có thể giúp gì cho bạn
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full lg:w-full gap-3 mt-8">
          <div className="flex flex-col gap-3 lg:flex-row">
            <Servic1 />
            <Servic2 />
            <Servic3 />
          </div>

          <div className="flex flex-col gap-3 lg:flex-row lg:gap-4">
            <Servic4 />
            <Servic5 />
            <Servic6 />
          </div>
        </div>
      </div>
    </div>
  );
}
