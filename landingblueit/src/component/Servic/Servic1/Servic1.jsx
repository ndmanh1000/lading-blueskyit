import check2 from "../../../assets/images/check2.svg";
import cpu from "../../../assets/images/cpu.svg";
export default function Servic1() {
  return (
    <div className="w-full h-[23.25rem] lg:w-1/3 lg:h-[22rem] flex flex-col gap-3 border border-[#E2E2E2] bg-white rounded-[8px] px-[1.5rem] py-[1.62rem]">
      <div>
        <img src={cpu} alt="cpu" className="w-[3rem] h-[3rem]" />
      </div>
      <div className="flex flex-col gap-3">
        <div className="lg:h-[3rem]">
          <p className="text-[1.25rem] font-semibold text-[#333]">
            Phát triển phần mềm theo nhu cầu của doanh nghiệp
          </p>
        </div>
        <div>
          <ul className="w-full pl-4 text-[1rem] font-normal lg:h-[10rem]">
            <li className="flex  gap-3 w-full h-auto bg-white rounded-[8px] hover:bg-blue-sky-gradient4 px-[0.75rem] py-[0.5rem]">
              <img src={check2} alt="check2" />
              <p>Thiết kế kiến trúc phần mềm</p>
            </li>
            <li className="flex  gap-3 w-full h-auto bg-white rounded-[8px] hover:bg-blue-sky-gradient4 px-[0.75rem] py-[0.5rem]">
              <img src={check2} alt="check2" />
              <p>Tích hợp hệ thống</p>
            </li>
            <li className="flex  gap-3 w-full h-auto bg-white rounded-[8px] hover:bg-blue-sky-gradient4 px-[0.75rem] py-[0.5rem]">
              <img src={check2} alt="check2" />
              <p>Chuyển đổi dữ liệu</p>
            </li>
            <li className="flex  gap-3 w-full h-auto bg-white rounded-[8px] hover:bg-blue-sky-gradient4 px-[0.75rem] py-[0.5rem]">
              <img src={check2} alt="check2" />
              <p>Hiện đại hóa dụng cụ</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
