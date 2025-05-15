"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import menuData from "./data/menuData";

export default function Header() {
  // 햄버거 메뉴 버튼 토글 상태 관리
  const [isBtnToggle, setIsBtnToggle] = useState(false);

  // 전체메뉴 소메뉴 토글 상태 관리
  // const [menuOpen, setMenuOpen] = useState(Array(menuData.length).fill(true));

  // const handleMenuToggle = (index) => {
  //   setMenuOpen((prev) => {
  //     const updated = [...prev];
  //     updated[index] = !updated[index];
  //     return updated;
  //   });
  // };

  const [menuOpen, setMenuOpen] = useState(
    () => Array(menuData.length).fill(true) // 초기 상태: 모두 열림
  );

  const handleMenuToggle = (index) => {
    setMenuOpen((prev) => prev.map((isOpen, i) => (i === index ? !isOpen : isOpen)));
  };

  // 햄버거 메뉴 버튼 토글 이벤트트
  const handleBtnToggle = () => {
    setIsBtnToggle((prev) => !prev);
  };

  // 전체 메뉴 링크 클릭 시 메뉴 닫는 이벤트
  const handleCloseMenu = () => {
    setIsBtnToggle(false);
  };

  return (
    <header className="fixed h-[110px] w-[100%] max-w-[1600px] flex items-center justify-between bg-white">
      <div className="flex items-center h-full ml-4">
        <Link href="/">
          <Image src={"/icons/logo.png"} width={197} height={60} alt="삼송빵집 로고" />
        </Link>
      </div>
      <div className="flex items-center h-full">
        <ul className="flex items-center justify-around w-full h-full text-black bg-white">
          {menuData.map((menu) => (
            <li key={menu.title} className="h-full flex items-center px-[64px] relative group">
              <Link
                href={menu.items[0]?.href || "#"}
                className="h-full flex items-center py-2 text-[20px] text-[#512d1e] font-semibold"
              >
                {menu.title}
              </Link>

              {/* 서브메뉴 */}
              <ul className="absolute left-0 top-[100%] opacity-0 translate-y-[-40px] invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-500 ease-in-out bg-[#eca51d] shadow-lg z-10 min-w-[165px] text-center">
                {menu.items.map((item) => {
                  return (
                    <li
                      key={item.label}
                      className="flex justify-center items-center whitespace-nowrap border-b border-white h-[55px] px-4 py-2 hover:bg-[#512d1e] transition-colors duration-200"
                    >
                      <Link href={item.href} className="text-white text-base w-[165px] flex justify-center ">
                        {item.label}
                        {item.hasIcon && (
                          <span>
                            <Image
                              src={"/icons/ico_best.png"}
                              className="ml-[3px]"
                              width={30}
                              height={15}
                              alt="베스트 아이콘"
                            />
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      {/* isBtnToggle 상태에 따라 메뉴 열기 / 닫기 버튼 이미지 변경 */}
      {isBtnToggle ? (
        <div className="mr-4">
          <button className="relative cursor-pointer z-99" onClick={handleBtnToggle}>
            <Image src={"/icons/x.png"} width={45} height={45} alt="메뉴 토글 닫기 아이콘" />
          </button>
        </div>
      ) : (
        <div className="mr-4">
          <button className="cursor-pointer" onClick={handleBtnToggle}>
            <Image src={"/icons/ham-bar.png"} width={45} height={45} alt="메뉴 토글 햄버거 아이콘" />
          </button>
        </div>
      )}

      {/* isBtnToggle이 true일때만 보이는 전체 메뉴 */}
      {isBtnToggle && (
        <div className="absolute top-0 right-0 w-full h-[100vh] opacity-95 bg-[#2a1913] shadow-lg z-50">
          <div className="mx-auto  mt-[150px] ">
            <ul className="flex justify-around space-y-2 text-center">
              {menuData.map(({ title, items }, idx) => (
                <li key={idx}>
                  <button
                    className="mb-[20px] text-3xl text-white font-['OneMobileTitle']"
                    onClick={() => handleMenuToggle(idx)}
                  >
                    {title}
                  </button>
                  <ul
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      menuOpen[idx] ? "h-[500px] opacity-100" : "h-0 opacity-0"
                    }`}
                  >
                    {items.map(({ href, label, hasIcon, iconSrc, iconAlt }, i) => (
                      <li key={i}>
                        <Link
                          href={href}
                          className="text-white py-[15px] flex justify-center items-start font-medium text-lg hover:text-[#f5b335] transition-all duration-300 ease-in-out"
                          onClick={handleCloseMenu}
                        >
                          {label}
                          {hasIcon && <Image src={iconSrc} className="ml-[3px]" width={30} height={15} alt={iconAlt} />}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
