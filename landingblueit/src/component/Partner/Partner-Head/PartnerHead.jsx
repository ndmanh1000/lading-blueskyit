import Slides from "../Slides";

export default function PartnerHead() {
  return (
    <div className="w-full flex flex-col">
      <div className="flex items-center gap-2">
        <p className="text-[1.125rem] font-semibold text-[#033F6A]">
          Đối tác của
        </p>
        <div className="border border-[#27C6FF] w-[7.125rem] h-10 rounded-md bg-[#27C6FF] flex items-center justify-center">
          <p className="text-[1.125rem] font-semibold text-white">BlueSkyIT</p>
        </div>
      </div>
      <div className="w-full">
        <Slides />
      </div>
    </div>
  );
}
