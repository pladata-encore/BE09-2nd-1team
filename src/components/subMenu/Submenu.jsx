"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import menuData from "../header/data/menuData";

export default function Submenu() {
  const pathname = usePathname();
  // 드롭다운 상태 관리
  const [isSectionOpen, setIsSectionOpen] = useState(false);
  const [isItemOpen, setIsItemOpen] = useState(false);

  // 현재 페이지에 해당하는 섹션과 현재 아이템 탐색 (startsWith로 매칭)
  let currentSection = null;
  let currentItem = null;

  for (const section of menuData) {
    for (const item of section.items) {
      if (pathname === item.href || pathname.startsWith(item.href + "/")) {
        currentSection = section;
        currentItem = item;
        break;
      }
    }
    if (currentSection) break;
  }

  // 메뉴에 해당하지 않는 경로인 경우 렌더링 생략
  if (!currentSection || !currentItem) return null;

  const toggleSection = () => {
    setIsSectionOpen((prev) => {
      const next = !prev;
      if (next) setIsItemOpen(false); // 열릴 때 반대쪽 닫기
      return next;
    });
  };

  const toggleItem = () => {
    setIsItemOpen((prev) => {
      const next = !prev;
      if (next) setIsSectionOpen(false); // 열릴 때 반대쪽 닫기
      return next;
    });
  };

  return (
    <div className="w-full max-w-[1600px] absolute bottom-[15%] left-[-16px] px-4">
      <div className="relative h-[80px] leading-[90px] mt-[-45px] font-normal z-10 flex items-center">
        {/* Home 아이콘 */}
        <Link
          href="/"
          className="block w-[90px] h-[90px] bg-[#512d1e] bg-[url('/images/main/ico_home.png')] bg-no-repeat bg-center"
          aria-label="홈으로 이동"
        />

        {/* 1단계 메뉴 */}
        <div
          onClick={toggleSection}
          onMouseLeave={() => setIsSectionOpen(false)}
          className="bg-[#512d1e] text-white text-[17px] w-[calc(30%-45px)] text-left border-l border-[#735245] relative cursor-pointer select-none"
        >
          <h2 className="flex items-center h-full px-[27px] bg-[url('/images/main/arrow_down.png')] bg-no-repeat bg-[right_20px_center]">
            {currentSection.title}
          </h2>
          <ul
            className={`absolute top-full left-0 w-full bg-[#fdfbf7] z-20 transition-[max-height] duration-300 ease-in-out overflow-hidden ${
              isSectionOpen ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            {menuData.map((section, index) => (
              <li key={section.title}>
                <Link
                  href={section.items[0].href}
                  className={`block px-6 py-2 flex items-center h-[51px] text-[#333] text-base font-medium 
                  ${index === 0 ? "border-0" : "border-t-[1px] border-[#ddd]"} 
                  ${index === menuData.length - 1 ? "border-b-[1px] border-[#ddd]" : ""}
                  ${section.items.some((item) => pathname === item.href) ? "bg-[#f5b335]" : "hover:bg-[#ccc]"}`}
                >
                  {section.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 2단계 메뉴 */}
        <div
          onClick={toggleItem}
          onMouseLeave={() => setIsItemOpen(false)}
          className="bg-[#512d1e] text-white text-[17px] w-[calc(30%-45px)] text-left border-l border-[#735245] relative cursor-pointer select-none"
        >
          <h2 className="flex items-center h-full px-[27px] bg-[url('/images/main/arrow_down.png')] bg-no-repeat bg-[right_20px_center]">
            {currentItem.label}
          </h2>
          <ul
            className={`absolute top-full left-0 w-full bg-[#fdfbf7] z-20 transition-[max-height] duration-300 ease-in-out overflow-hidden ${
              isItemOpen ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            {currentSection.items.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`px-6 py-2 flex items-center h-[51px] text-[#333] text-base font-medium 
                  ${index === 0 ? "border-t-0" : "border-t-[1px] border-[#ddd]"}
                  ${index === currentSection.items.length - 1 ? "border-b-[1px] border-[#ddd]" : ""}
                  ${pathname === item.href ? "bg-[#f5b335]" : "hover:bg-[#ccc]"}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
