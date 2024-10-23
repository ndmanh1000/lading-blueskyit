import check2 from "../../../assets/images/check2.svg";
import customer_service from "../../../assets/images/customer_service.svg";

export default function Servic6() {
  return (
    <div className="w-full h-[28.125rem] lg:w-1/3 lg:h-[24rem] flex flex-col gap-3 border border-[#E2E2E2] bg-white rounded-[8px] px-[1.5rem] py-[1.62rem]">
      <div className="flex items-center justify-between">
        <img
          src={customer_service}
          alt="customer_service"
          className="w-[3rem] h-[3rem]"
        />
        <p className="text-[4rem] opacity-80 font-semibold text-[#F1F0F0] ">
          06
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="lg:h-[3rem]">
          <p className="text-[1.25rem] font-semibold text-[#333]">
            Dịch vụ bảo trì và hỗ trợ khách hàng sử dụng sản phẩm
          </p>
        </div>
        <div>
          <ul className="w-full pl-4 text-[1rem] font-normal lg:h-[10rem]">
            <li className="flex  gap-3 w-full h-auto bg-white rounded-[8px] hover:bg-blue-sky-gradient4 px-[0.75rem] py-[0.5rem]">
              <img src={check2} alt="check2" />
              <p>
                Chúng tôi cung cấp giải pháp này đảm bảo hệ thống luôn hoạt động
                ổn định, xử lý sự cố kịp thời và cung cấp hỗ trợ kỹ thuật liên
                tục, giúp doanh nghiệp vận hành suôn sẻ và hiệu quả.
              </p>
            </li>
            <li className="flex  gap-3 w-full h-auto bg-white rounded-[8px] hover:bg-blue-sky-gradient4 px-[0.75rem] py-[0.5rem]">
              <img src={check2} alt="check2" />
              <p>Hỗ trợ kĩ thuật liên tục 24/7</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
