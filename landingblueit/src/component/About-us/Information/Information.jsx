import certificate_01 from "../../../assets/images/certificate_01.svg";
import user22 from "../../../assets/images/user22.svg";
import infor_pc from "../../../assets/images/infor_pc.png";
import infor_mobi from "../../../assets/images/infor_mobi.png";

export default function Information() {
  return (
    <div className="w-full container mx-auto p-3 grid grid-cols-1 md:flex-row lg:flex-row mt-4">
      <div className="w-full flex flex-col  gap-4">
        <div className="flex items-center gap-2">
          <p className="text-[1.125rem] font-semibold text-[#033F6A]">
            Đối tác của
          </p>
          <div className="border border-[#27C6FF] w-[7.125rem] h-10 rounded-md bg-[#27C6FF] flex items-center justify-center">
            <p className="text-[1.125rem] font-semibold text-white">
              BlueSkyIT
            </p>
          </div>
        </div>
        <div>
          <p className="font-semibold text-[1.5rem] md:text-[1.75rem] lg:text-[1.75rem] text-[#27C6FF]">
            Đôi điều về Bầu Trời Xanh (BlueSkyIT)
          </p>
        </div>
        <div>
          <p className="text-[1rem] font-normal text-[#333]">
            Bầu Trời Xanh{" "}
            <spam className=" font-semibold text-black">(BlueSkyIt) </spam>là
            đơn vị tiên phong trong việc phát triển các giải pháp công nghệ cho
            giáo dục và nông nghiệp sạch. Với sứ mệnh đổi mới và tối ưu hóa,
            chúng tôi mang đến những sản phẩm và dịch vụ tiên tiến, giúp khách
            hàng nâng cao hiệu suất, quản lý hiệu quả và đảm bảo an toàn. Chúng
            tôi luôn hướng tới việc tạo ra giá trị bền vững và hỗ trợ khách hàng
            phát triển trong thời đại số hóa.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:flex-row lg:flex-row md:gap-3 lg:gap-3">
          <div className="flex flex-row items-center gap-3">
            <div className="w-10 h-10 bg-[#DBF4FF] flex items-center justify-center rounded-full">
              <img src={certificate_01} alt="cer" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#333] font-semibold text-[1rem]">
                Chứng nhận công ty
              </p>
              <p className="text-[1rem] font-normal text-[#606060]">
                Dịch vụ kỹ năng cung cấp tốt nhất
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-3">
            <div className="w-10 h-10 bg-[#DBF4FF] flex items-center justify-center rounded-full">
              <img src={user22} alt="user" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#333] font-semibold text-[1rem]">
                Đội ngũ chuyên gia
              </p>
              <p className="text-[1rem] font-normal text-[#606060]">
                Đẩm trình độ kỹ năng cao 100%
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-7">
        <img
          src={infor_mobi}
          alt="infor_mobi"
          className="block md:hidden lg:hidden w-full object-cover"
        />
        <img
          src={infor_pc}
          alt="infor_pc"
          className="hidden md:block lg:block w-full object-cover h-auto"
        />
      </div>
    </div>
  );
}
