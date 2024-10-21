import check2 from "../../../assets/images/check2.svg";
import designtools from "../../../assets/images/designtools.svg";
export default function Servic5() {
  return (
    <div className="w-full h-[24.75rem] lg:w-1/3 lg:h-[22rem] flex flex-col gap-3 border border-[#E2E2E2] bg-white rounded-[8px] px-[1.5rem] py-[1.62rem]">
      <div>
        <img
          src={designtools}
          alt="designtools"
          className="w-[3rem] h-[3rem]"
        />
      </div>
      <div className="flex flex-col gap-3">
        <div className="lg:h-[3rem]">
          <p className="text-[1.25rem] font-semibold text-[#333]">
            Thiết kế giao diện UI/UX cho ứng dụng & website
          </p>
        </div>
        <div>
          <ul className="w-full pl-4 text-[1rem] font-normal lg:h-[10rem]">
            <li className="flex  gap-3 w-full h-auto bg-white rounded-[8px] hover:bg-blue-sky-gradient4 px-[0.75rem] py-[0.5rem]">
              <img src={check2} alt="check2" />
              <p>
                Chúng tôi cung cấp các giải pháp giúp tạo ra giao diện người
                dùng, trải nghiệm sử dụng mượt mà và sáng tạo, tối ưu hóa sự
                tương tác.
              </p>
            </li>
            <li className="flex  gap-3 w-full h-auto bg-white rounded-[8px] hover:bg-blue-sky-gradient4 px-[0.75rem] py-[0.5rem]">
              <img src={check2} alt="check2" />
              <p>Thiết kế độc đáo & phù hợp với nhu cầu</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
