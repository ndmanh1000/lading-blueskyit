import React from "react";
import Tabss from "./Tab";

export default function Technology() {
  return (
    <div className="w-full bg-[#f8ffff]">
      <div className="w-full flex-wrap container mx-auto p-3 flex flex-col gap-4">
        <div className="w-full lg:flex lg:flex-col lg:items-center lg:justify-center">
          <div className="flex items-center gap-2 lg:justify-center lg:items-center">
            <p className="text-[1.125rem] font-semibold text-[#033F6A]">
              Công nghệ của
            </p>
            <div className="border border-[#27C6FF] w-[7.125rem] h-10 rounded-md bg-[#27C6FF] flex items-center justify-center">
              <p className="text-[1.125rem] font-semibold text-white">
                BlueSkyIT
              </p>
            </div>
          </div>
          <div className="lg:text-center lg:items-center lg:justify-center lg:flex lg:whitespace-nowrap">
            <p className="text-[1.5rem] font-semibold text-[#1375B7] w-[20rem] lg:text-[2.25rem] lg:w-[75rem]">
              Chúng tôi sử dụng công nghệ
            </p>
          </div>
        </div>

        <div>
          <Tabss />
        </div>
      </div>
    </div>
  );
}
