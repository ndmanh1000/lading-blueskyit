import SlideStaff from "./Slide_Staff";

export default function Staff() {
  return (
    <div className="w-full pt-10">
      <div className="flex items-center justify-center gap-2">
        <div className="border border-[#27C6FF] w-[7.125rem] h-10 rounded-md bg-[#27C6FF] flex items-center justify-center">
          <p className="text-[1.125rem] font-semibold text-white">BlueSkyIT</p>
        </div>
        <p className="text-[1.125rem] font-semibold text-[#033F6A]">
          Đội ngũ thành viên
        </p>
      </div>
      <div className="text-center pt-3">
        <p className="text-[#1375B7] font-semibold text-[1.5rem]">
          Những chuyên gia hàng đầu
        </p>
      </div>
      <div className="pt-6">
        <SlideStaff />
      </div>
    </div>
  );
}
