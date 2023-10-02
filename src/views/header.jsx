import React from "react";
import logo from "../image/tagoplus.png";

const Header = () => {
  return (
    <header className="flex justify-between cont mx-auto fixed top-0 w-full left-[40px] right-[40px] h-[91px] items-center z-10">
      <a href="/" className="w-[143px] brightness-[2000]">
        <img className="w-full aspect-[143/20] h-auto" src={logo} alt="logo" />
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
          <button className="h-auto w-auto px-4 py-2 rounded-md bg-[#d9d9d9]">
            로그인
          </button>
          <button className="h-auto w-auto px-4 py-1 rounded-md bg-[#333333] text-[#fefefe]">
            회원가입
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
