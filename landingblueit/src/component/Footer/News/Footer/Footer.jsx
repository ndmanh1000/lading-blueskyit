import Logo_b from "../../../../assets/images/Logo_b.svg";
import call_2 from "../../../../assets/images/call_2.svg";
import sms_2 from "../../../../assets/images/sms_2.svg";
import location_1 from "../../../../assets/images/location_1.svg";
import lolo_fb from "../../../../assets/images/lolo_fb.svg";
import lolo_you from "../../../../assets/images/lolo_you.svg";
import lolo_tik from "../../../../assets/images/lolo_tik.svg";
import map_mobi from "../../../../assets/images/map_mobi.png";
import map_pc from "../../../../assets/images/map_pc.png";

export default function Footer() {
  return (
    <div className="w-full text-white lg:pb-6">
      <div className="container mx-auto p-3 grid grid-cols-1 lg:grid-cols-2 w-full gap-6">
        <div className="flex flex-col gap-4 w-full">
          <div>
            <img src={Logo_b} alt="lo" />
          </div>
          <div className="flex flex-col ">
            <p>Công ty cổ phần đầu tư & công nghệ</p>
            <p>
              Bầu Trời Xanh - Cung cấp mọi giải pháp công nghệ hàng đầu tại Việt
              Nam
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 bg-[#27C6FF] rounded-full">
                <img src={call_2} alt="cal" />
              </div>
              <div>
                <p>0968.596.859</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 bg-[#27C6FF] rounded-full">
                <img src={sms_2} alt="sms" />
              </div>
              <div>
                <p>lienhe@blueskyit.vn</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-12 lg:w-10 h-10 bg-[#27C6FF] rounded-full">
                <img src={location_1} alt="map_mobi" />
              </div>
              <div>
                <p className="lg:w-[18rem]">
                  29 Khuất Duy Tiến, Thanh Xuân Bắc, Thanh Xuân, Hà Nội
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-[1.25rem] font-semibold">Đường dẫn</p>
            <ul className="ml-4 flex flex-col lg:gap-2 lg:mt-3">
              <li>. Trang chủ</li>
              <li>. Về chúng tôi</li>
              <li>. Dịch vụ</li>
              <li>. Tuyển dụng</li>
              <li>. Liên hệ</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 lg:gap-4">
            <div>
              <p className="text-[1.25rem] font-semibold">Mạng xã hội</p>
            </div>
            <div className="flex items-center gap-3">
              <div className=" bg-white border border-white w-10 h-10 flex items-center justify-center rounded-full">
                <img src={lolo_fb} alt="fbb" />
              </div>
              <div className=" bg-white border border-white w-10 h-10 flex items-center justify-center rounded-full">
                <img src={lolo_you} alt="fbb" />
              </div>
              <div className=" bg-white border border-white w-10 h-10 flex items-center justify-center rounded-full">
                <img src={lolo_tik} alt="fbb" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <img
            src={map_mobi}
            alt="map"
            className="w-full h-auto rounded block lg:hidden"
          />
        </div>
      </div>

      <div className="w-full bg-white text-[#1375B7] lg:w-full relative lg:bottom-[-60px] lg:rounded-[40px] lg:mx-auto rounded px-[1.5rem] lg:flex-row lg:items-center lg:justify-between py-[0.75rem] flex flex-col items-center justify-center gap-4">
        <div className="flex items-start w-full gap-3">
          <p>Chính sách bảo mật</p>
          <p>Điều khoản</p>
        </div>
        <div>
          <p className="lg:whitespace-nowrap">
            Copyright © 2024 BlueSkyIT. All Rights Reserved. Design by
            letuantbvn
          </p>
        </div>
      </div>
    </div>
  );
}
