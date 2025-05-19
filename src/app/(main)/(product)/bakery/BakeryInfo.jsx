"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductCard from "../product/ProductCard";
import products from "../product/product";

export default function BakeryInfo() {
  const pathname = usePathname();

  useEffect(() => {
    // AOS 초기화
    AOS.init({
      duration: 800,
      once: false, // 스크롤 시 애니메이션이 한 번만 실행되도록 설정
    });
    AOS.refresh();
  }, [pathname]);

  // 콘짜렐라부터 시작작
  const part1 = products.slice(8, 12);
  // 이후 크림치즈, 크림치즈찰떡빵 삽입
  const part2 = products.slice(2, 4);
  // 나머지 메뉴 삽입
  const part3 = products.slice(12);

  const BakeryItems = [...part1, ...part2, ...part3];

  return (
    <>
      {/* 제품 소개 이미지 영역 */}
      <div className="relative w-full h-[580px]">
        <img src="/images/products/product_main.jpg" alt="베이커리" className="object-cover w-full h-full" />
        <div className="absolute inset-0 flex items-center justify-center" data-aos="fade-up">
          <span className="text-6xl font-bold text-white">베이커리</span>
        </div>
      </div>
      {/* 제품 리스트 영역 */}
      <div className="mx-[30px] mt-[80px]">
        <ProductCard items={BakeryItems} />
      </div>
    </>
  );
}
