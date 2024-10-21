import user_group from "../../assets/images/user_group.svg";
import td_support from "../../assets/images/td_support.svg";

export default function Benefit() {
  return (
    <div className="container mx-auto p-4 flex flex-col gap-7 items-center w-full  justify-center lg:flex-row lg:items-center lg:justify-between lg:pt-8 ">
      <div className="flex items-center gap-4">
        <div className="border border-[#1C9BDB] w-[3.75rem] h-[3.75rem] flex items-center justify-center bg-[#1C9BDB] rounded-[8px]">
          <img src={user_group} alt="us" />
        </div>
        <div className="flex flex-col gap-2 w-[17.375rem]">
          <p className="text-[1.25rem] font-semibold text-[#033F6A] lg:text-[1.5rem]">
            Đội ngũ chuyên gia
          </p>
          <p className="text-[0.875rem] font-normal w-[15rem]">
            Chúng tôi tự hào về trình độ kĩ năng, tay nghề cao của đội ngũ
            chuyên gia{" "}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className=" w-[3.75rem] h-[3.75rem] flex items-center justify-center bg-[#259D20] rounded-[8px]">
          <img src={td_support} alt="td" />
        </div>
        <div className="flex flex-col gap-2 w-[17.375rem]">
          <p className="text-[1.25rem] font-semibold text-[#033F6A] lg:text-[1.5rem]">
            Dịch vụ CSKH
          </p>
          <p className="text-[0.875rem] font-normal w-[15rem]">
            Chúng tôi tự hào cung cấp ngành dịch vụ khách hàng nhanh nhất.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className=" w-[3.75rem] h-[3.75rem] flex items-center justify-center bg-[#DB9D15] rounded-[8px]">
          <img src={td_support} alt="td" />
        </div>
        <div className="flex flex-col gap-2 w-[17.375rem]">
          <p className="text-[1.25rem] font-semibold text-[#033F6A] lg:text-[1.5rem]">
            Chi phí hợp lý
          </p>
          <p className="text-[0.875rem] font-normal w-[15rem]">
            Chúng tôi tin vào việc cung cấp mức giá hợp lý mang lại sự đặc biệt.
          </p>
        </div>
      </div>
    </div>
  );
}
