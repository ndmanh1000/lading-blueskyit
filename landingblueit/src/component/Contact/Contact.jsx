import { GoArrowUpRight } from "react-icons/go";
import contact from "../../assets/images/contact.png";
import { Button } from "flowbite-react";
import contact_pc from "../../assets/images/contact_pc.png";

export default function Contact() {
  return (
    <div>
      <div className="w-full relative h-[22rem] block lg:hidden mt-6">
        <img src={contact} alt="" className="h-[22rem] object-cover" />
        <div className=" absolute w-full bg-blue-sky-gradient5 top-0 h-[22rem]">
          <div className="w-full px-[1.25rem] py-[3.12rem]">
            <div className=" flex flex-col items-center justify-center gap-4">
              <p className="text-white text-center text-[1.75rem] font-semibold w-[21.875rem]">
                Sẵn sàng làm việc, Hãy trò chuyện
              </p>
              <p className="w-[21.875rem] text-white text-[1.125rem] pl-5 font-normal">
                Đội ngũ chuyên gia của chúng tôi sẵn sàng cộng tác với bạn từng
                bước, từ tư vấn ban đầu đến thực hiện.
              </p>
              <div className="flex items-center justify-center">
                <Button className="shadow-custom1 flex text-[#1375B7] items-center justify-center gap-4 bg-white w-[16.6rem] h-[3.375rem] px-[1.88rem] py-[1rem] rounded-[30px] ">
                  <p>Liên hệ ngay hôm nay</p>
                  <GoArrowUpRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="h-[26rem] hidden relative  w-full lg:block mt-7">
        <img
          src={contact_pc}
          alt=""
          className="h-[26rem] w-full object-contain rounded"
        />
        <div className=" absolute bg-blue-sky-gradient5 top-0 h-[26rem] rounded w-full">
          <div className="w-full px-[1.25rem] py-[3.12rem]">
            <div className=" flex flex-col justify-center gap-6 absolute left-[30%] bottom-[30%]">
              <p className="text-white text-center text-[2.25rem] font-semibold">
                Sẵn sàng làm việc, Hãy trò chuyện
              </p>
              <p className=" text-white text-[1.125rem] font-normal">
                Đội ngũ chuyên gia của chúng tôi sẵn sàng cộng tác với bạn từng
                bước, từ tư vấn ban đầu đến thực hiện.
              </p>
              <div className="flex items-center justify-center">
                <Button className="shadow-custom1 flex text-[#1375B7] items-center justify-center gap-4 bg-white w-[16.6rem] h-[3.375rem] px-[1.88rem] py-[1rem] rounded-[30px] ">
                  <p className="text-[1rem] font-normal whitespace-nowrap">
                    Liên hệ ngay hôm nay
                  </p>
                  <GoArrowUpRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
