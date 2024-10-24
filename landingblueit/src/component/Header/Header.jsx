import React, { useState } from "react";
import logo_bluesky_landing from "../../assets/images/logo_bluesky_landing.svg";
import call3 from "../../assets/images/call3.svg";
import { MdChevronRight } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <div className="bg-white border-b-gray-100 w-full px-4 lg:px-6 py-2.5">
      <div className="flex flex-wrap justify-between items-center w-full">
        <a className="flex items-center">
          <Link to="/" onClick={handleLinkClick}>
            <img
              src={logo_bluesky_landing}
              className="mr-3 lg:w-[150px] lg:h-[60px] w-[170px] h-[48.8px] cursor-pointer"
              alt="Flowbite React Logo"
            />
          </Link>
        </a>
        <div className="flex items-center md:order-2">
          <button
            type="button"
            className="text-white hidden lg:block md:hidden font-medium bg-blue-sky-gradient1 rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 lg:w-56 lg:rounded-[30px] h-11"
          >
            <div className="w-full flex items-center justify-center gap-3">
              <img src={call3} alt="call3" />
              <p className="whitespace-nowrap">Hotline : 096 859 68 59</p>
            </div>
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden "
            aria-controls="mobile-menu"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <IoMdClose className="w-[36px] h-[36px]" />
            ) : (
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
            )}
          </button>
        </div>
        <div
          className={`w-full md:flex md:w-auto ${isOpen ? "block" : "hidden"}`}
          id="mobile-menu"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li className="flex items-center justify-between w-full">
              <Link
                to="/"
                className="block py-2 pr-4 pl-3 text-black text-[1rem] font-normal rounded md:p-0 whitespace-nowrap"
                aria-current="page"
                onClick={handleLinkClick}
              >
                Trang chủ
              </Link>
              <MdChevronRight size={30} className="block lg:hidden" />
            </li>
            <li className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between w-full py-2 px-3 whitespace-nowrap text-gray-900 rounded "
              >
                Về chúng tôi
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 lg:w-44 w-full bg-white rounded-lg shadow-lg z-10">
                  <ul className="py-2 text-sm text-black ">
                    <li className="flex items-center gap-3 lg:pl-2 hover:text-[#27C6FF]">
                      <MdChevronRight
                        size={30}
                        className="hover:text-[#27C6FF]"
                      />
                      <Link
                        to="/aboutus"
                        className="block px-4 py-2 hover:text-[#27C6FF] "
                        onClick={handleLinkClick}
                      >
                        Về chúng tôi
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="block px-4 py-2 hover:text-[#27C6FF]  "
                        onClick={handleLinkClick}
                      >
                        Đội ngũ thành viên
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="block px-4 py-2 hover:text-[#27C6FF]  "
                        onClick={handleLinkClick}
                      >
                        Thư viện ảnh
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className="flex items-center justify-between w-full">
              <Link
                to="#"
                className="block py-2 pr-4 pl-3 text-black text-[1rem] font-normal rounded md:p-0 whitespace-nowrap"
                onClick={handleLinkClick}
              >
                Dịch vụ
              </Link>
              <MdChevronRight size={30} className="block lg:hidden" />
            </li>
            <li className="flex items-center justify-between w-full">
              <Link
                to="#"
                className="block py-2 pr-4 pl-3 text-black text-[1rem] font-normal rounded md:p-0 whitespace-nowrap"
                onClick={handleLinkClick}
              >
                Tuyển dụng
              </Link>
              <MdChevronRight size={30} className="block lg:hidden" />
            </li>
            <li className="flex items-center justify-between w-full">
              <Link
                to="# "
                className="block py-2 pr-4 pl-3 text-black text-[1rem] font-normal rounded md:p-0 whitespace-nowrap"
                onClick={handleLinkClick}
              >
                Liên hệ
              </Link>
              <MdChevronRight size={30} className="block lg:hidden" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
