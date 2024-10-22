import React, { useState } from "react";

export default function ProjectProcess() {
  const [activeSection, setActiveSection] = useState(null);

  const handleToggle = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="w-full bg-[#f8ffff]">
      <div className="w-full container mx-auto p-3  gap-4 lg:gap-6  flex flex-col items-center lg:flex-row justify-center mt-6">
        <div className="w-full p-2">
          <div className="flex items-center gap-2">
            <p className="text-[1.125rem] font-semibold text-[#033F6A]">
              Quy trình làm việc của
            </p>
            <div className="border border-[#27C6FF] w-[7.125rem] h-10 rounded-md bg-[#27C6FF] flex items-center justify-center">
              <p className="text-[1.125rem] font-semibold text-white">
                BlueSkyIT
              </p>
            </div>
          </div>
          <div>
            <p className="text-[1.5rem] font-semibold text-[#27c6ff] w-[20rem] lg:text-[2.25rem] lg:w-[36rem]">
              Triển khai dự án của chúng tôi
            </p>
          </div>
          <div className="border-b">
            <div
              className="flex justify-between items-center py-4 cursor-pointer"
              onClick={() => handleToggle(1)}
            >
              <p className="text-lg font-semibold">
                1. Khám phá nhu cầu khách hàng (Discovery Phase)
              </p>
              <span>{activeSection === 1 ? "-" : "+"}</span>
            </div>
            {activeSection === 1 && (
              <div className="p-4 text-gray-600 bg-[#e4f7ff]">
                <p>
                  (Tìm hiểu nhu cầu của khách hàng, phân tích yêu cầu và xác
                  định giải pháp phù hợp để đảm bảo sản phẩm cuối cùng đáp ứng
                  mục tiêu kinh doanh.)
                </p>
              </div>
            )}
          </div>

          <div className="border-b">
            <div
              className="flex justify-between items-center py-4 cursor-pointer"
              onClick={() => handleToggle(2)}
            >
              <p className="text-lg font-semibold">
                2. Thiết kế và phát triển (Design and Development)
              </p>
              <span>{activeSection === 2 ? "-" : "+"}</span>
            </div>
            {activeSection === 2 && (
              <div className="p-4 text-gray-600 bg-[#e4f7ff]">
                <p>
                  Thiết kế giao diện và phát triển hệ thống dựa trên các yêu cầu
                  đã phân tích, tạo ra sản phẩm có tính thẩm mỹ và hiệu suất
                  cao.
                </p>
              </div>
            )}
          </div>

          <div className="border-b">
            <div
              className="flex justify-between items-center py-4 cursor-pointer"
              onClick={() => handleToggle(3)}
            >
              <p className="text-lg font-semibold">
                3. Bảo trì hệ thống (Maintenance)
              </p>
              <span>{activeSection === 3 ? "-" : "+"}</span>
            </div>
            {activeSection === 3 && (
              <div className="p-4 text-gray-600 bg-[#e4f7ff]">
                <p>
                  Sau khi triển khai, chúng tôi cung cấp dịch vụ bảo trì để đảm
                  bảo hệ thống luôn hoạt động ổn định, cập nhật và tối ưu hóa
                  khi cần.
                </p>
              </div>
            )}
          </div>

          <div className="border-b">
            <div
              className="flex justify-between items-center py-4 cursor-pointer"
              onClick={() => handleToggle(4)}
            >
              <p className="text-lg font-semibold">
                4. Triển khai diện rộng (Deployment)
              </p>
              <span>{activeSection === 4 ? "-" : "+"}</span>
            </div>
            {activeSection === 4 && (
              <div className="p-4 text-gray-600 bg-[#e4f7ff]">
                <p>
                  Triển khai sản phẩm lên môi trường hoạt động thực tế, đảm bảo
                  quá trình triển khai diễn ra suôn sẻ và không gây gián đoạn
                  cho hệ thống.
                </p>
              </div>
            )}
          </div>

          <div className="border-b">
            <div
              className="flex justify-between items-center py-4 cursor-pointer"
              onClick={() => handleToggle(5)}
            >
              <p className="text-lg font-semibold">
                5. Kiểm thử và đảm bảo chất lượng (Testing and QA)
              </p>
              <span>{activeSection === 5 ? "+" : "-"}</span>
            </div>
            {activeSection === 5 && (
              <div className="p-4 text-gray-600 bg-[#e4f7ff]">
                <p>
                  {" "}
                  Kiểm thử toàn diện sản phẩm nhằm phát hiện lỗi, tối ưu hiệu
                  suất và đảm bảo chất lượng trước khi chính thức đưa vào sử
                  dụng.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="w-full flex flex-col p-2 gap-4 relative bottom-[-40px]">
          <button
            className={`border py-2 h-[5.25rem] px-4 rounded-[6.25rem] border-[#1C9BDB] z-50 ${
              activeSection === 1 ? "bg-blue-500 text-white" : "bg-white"
            }`}
            onClick={() => handleToggle(1)}
          >
            Discovery Phase
          </button>
          <button
            className={`border py-2 h-[5.25rem] px-4 rounded-[6.25rem] border-[#1C9BDB] relative bottom-[20px] z-40 ${
              activeSection === 2 ? "bg-blue-500 text-white" : "bg-white"
            }`}
            onClick={() => handleToggle(2)}
          >
            Design and Development
          </button>
          <button
            className={`border py-2 h-[5.25rem] px-4 rounded-[6.25rem] border-[#1C9BDB] relative bottom-[40px] z-30 ${
              activeSection === 3 ? "bg-blue-500 text-white" : "bg-white"
            }`}
            onClick={() => handleToggle(3)}
          >
            Maintenance
          </button>
          <button
            className={`border py-2 h-[5.25rem] px-4 rounded-[6.25rem] border-[#1C9BDB] relative bottom-[60px] z-20 ${
              activeSection === 4 ? "bg-blue-500 text-white" : "bg-white"
            }`}
            onClick={() => handleToggle(4)}
          >
            Deployment
          </button>
          <button
            className={`border py-2 h-[5.25rem] px-4 rounded-[6.25rem] border-[#1C9BDB] relative bottom-[80px] z-10 ${
              activeSection === 5 ? "bg-blue-500 text-white" : "bg-white"
            }`}
            onClick={() => handleToggle(5)}
          >
            Testing and QA
          </button>
        </div>
      </div>
    </div>
  );
}
