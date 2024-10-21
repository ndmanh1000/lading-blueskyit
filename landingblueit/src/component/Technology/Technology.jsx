import React from "react";
import Tabss from "./Tab";

export default function Technology() {
  return (
    <div className="w-full flex-wrap container mx-auto p-3 flex flex-col gap-4">
      <div className="flex items-center gap-2 lg:justify-center">
        <p className="text-[1.125rem] font-semibold text-[#033F6A]">
          Công nghệ của
        </p>
        <div className="border border-[#27C6FF] w-[7.125rem] h-10 rounded-md bg-[#27C6FF] flex items-center justify-center">
          <p className="text-[1.125rem] font-semibold text-white">BlueSkyIT</p>
        </div>
      </div>
      <div className="lg:text-center">
        <p>Chúng tôi sử dụng công nghệ</p>
      </div>
      <div>
        <Tabss />
      </div>
    </div>
  );
}
