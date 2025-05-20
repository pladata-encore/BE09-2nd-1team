"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import drinks from "./drinks";
import DrinkCard from "./DrinkCard";

export default function DrinksInfo() {
  const pathname = usePathname();

  useEffect(() => {
    // AOS 초기화
    AOS.init({
      duration: 800,
      once: true, // 스크롤 시 애니메이션이 한 번만 실행되도록 설정
    });
    AOS.refresh();
  }, [pathname]);

  return (
    <>
      {/* 제품 소개 이미지 영역 */}
      <div className="relative w-full h-[580px]">
        <img src="/images/products/product_main.jpg" alt="카페/음료/디저트" className="object-cover w-full h-full" />
        <div className="absolute inset-0 flex items-center justify-center" data-aos="fade-up">
          <span className="text-6xl font-bold text-white">카페/음료/디저트</span>
        </div>
      </div>
      {/* 제품 리스트 영역 */}
      <div className="mx-[30px] mt-[80px]">
        <DrinkCard />
      </div>
    </>
  );
}
