import React, { useState } from "react";

export default function Tabss() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Web Platfom",
    "Database",
    "Cloud & DevOps",
    "Mobile Apps",
    "Other Frameworks",
    "Other Frameworks1",
    "Other Frameworks2",
    "Other Frameworks3",
    "Other Frameworks4",
  ];

  return (
    <div className="w-full mx-auto ">
      <div className="grid grid-cols-2  w-full rounded-lg bg-[#dbf4ff] lg:h-[4.875rem] items-center justify-around">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`py-2 px-4 text-sm font-medium ${
              activeTab === index ? "" : ""
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-4 p-4  ">
        <h2 className="text-lg font-semibold">{tabs[activeTab]}</h2>
        <p>Đây là nội dung của {tabs[activeTab]}.</p>
      </div>
    </div>
  );
}
