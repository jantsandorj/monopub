import React, { useEffect } from "react";
import logo from "../image/tagoplus.png";

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const Navbar = document.getElementById("head");
      const logo = document.getElementById("header_logo");
      const li = document.querySelectorAll(".menu_item");
      const liArray = Array.from(li);
      const scrollTop = window.scrollY;

      if (scrollTop > window.innerHeight) {
        Navbar.style.backgroundColor = "#ffffff";
        liArray.forEach((a) => {
          a.style.color = "#393939";
        });
        logo.style.filter = "brightness(0)";
      } else {
        Navbar.style.backgroundColor = "transparent";
        liArray.forEach((a) => {
          a.style.color = "#ffffff";
        });
        logo.style.filter = "brightness(2000)";
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll, { passive: true });
    };
  }, []);

  return (
    <header className="h-[91px] w-full fixed duration-700 z-50" id="head">
      <div className="header_wrap flex justify-between cont mx-auto fixed top-0 w-full left-[40px] right-[40px] h-[91px] items-center z-50">
        <a
          href="/"
          className="w-[143px] brightness-[2000] duration-300"
          id="header_logo"
        >
          <img
            className="w-full aspect-[143/20] h-auto"
            src={logo}
            alt="logo"
          />
        </a>
        <nav className="flex gap-[76px]">
          <ul className="menu_list flex gap-[15px]">
            <li className="flex items-center">
              <a className="menu_item" href="/">
                서비스 소개
              </a>
            </li>
            <li className="flex items-center">
              <a className="menu_item" href="/">
                퍼블리싱 의뢰
              </a>
            </li>
            <li className="flex items-center">
              <a className="menu_item" href="/">
                고객센터
              </a>
            </li>
            <li className="flex items-center">
              <a className="menu_item" href="/">
                마이페이지
              </a>
            </li>
          </ul>
          <div className="flex gap-[5px]">
            <button className="h-auto w-auto px-4 py-2 rounded-md active:scale-95 bg-[#d9d9d9] before:ease relative overflow-hidden text-[#393939] shadow-md transition-all before:absolute before:right-0 before:top-0 before:h-full before:w-full before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-button hover:before:-translate-x-40">
              로그인
            </button>
            <button className="h-auto w-auto px-4 py-1 rounded-md active:scale-95 bg-[#333333] text-[#fefefe] before:ease relative overflow-hidden shadow-md transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-button hover:before:-translate-x-40">
              회원가입
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
