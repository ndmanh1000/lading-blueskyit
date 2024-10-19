import React, { useState } from "react";
import logo_bluesky_landing from "../../assets/images/logo_bluesky_landing.svg";
import call3 from "../../assets/images/call3.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-b-gray-100 w-full px-4 lg:px-6 py-2.5 ">
      <div className="flex flex-wrap justify-around items-center w-full">
        <a className="flex items-center">
          <img
            src={logo_bluesky_landing}
            className="mr-3 lg:w-[150px] lg:h-[60px] w-[170px] h-[48.8px]"
            alt="Flowbite React Logo"
          />
        </a>
        <div className="flex items-center md:order-2">
          <button
            type="button"
            className="text-white hidden lg:block md:block font-medium bg-blue-sky-gradient1 rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 lg:w-56 lg:rounded-[30px] h-11"
          >
            <div className="w-full flex items-center justify-center gap-3">
              <img src={call3} alt="call3" />
              <p> Hotline:096 859 68 59</p>
            </div>
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-[36px] h-[36px]"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 4h14a1 1 0 010 2H3a1 1 0 110-2zm0 4h14a1 1 0 010 2H3a1 1 0 110-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div
          className={`w-full md:flex md:w-auto ${isOpen ? "block" : "hidden"}`}
          id="mobile-menu"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-black text-[1rem] font-normal  rounded   md:p-0 "
                aria-current="page"
              >
                Trang chủ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-black text-[1rem] font-normal  rounded   md:p-0 "
              >
                Về chúng tôi
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-black text-[1rem] font-normal  rounded   md:p-0 "
              >
                Dịch vụ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-black text-[1rem] font-normal  rounded   md:p-0 "
              >
                Tuyển dụng
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-black text-[1rem] font-normal  rounded   md:p-0 "
              >
                Liên hệ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
