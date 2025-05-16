"use client";
import React, { useState, useRef } from "react";
import drinks from "./drinks.json";
import DrinksModal from "./DrinksModal";

export default function DrinksInfo() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedDrink, setSelectedDrink] = useState(null);
  const hoverTimeout = useRef(null);

  const handleMouseEnter = (index) => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    // 마우스가 떠난 후 약간의 딜레이
    hoverTimeout.current = setTimeout(() => {
      setHoveredIndex(null);
    }, 150);
  };

  return (
    <>
      {/* 제품 소개 이미지 영역 */}
      <div className="relative w-full h-[650px]">
        <img
          src="/images/products/product_main.jpg"
          alt="제품 소개"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl font-bold text-white">
            커피/음료/디저트
          </span>
        </div>
      </div>
      {/* 제품 리스트 영역 */}
      <div className="grid justify-center gap-6 m-4 sm:grid-cols-2 md:grid-cols-4 items-left">
        {drinks.map((drink, index) => {
          const isHovered = hoveredIndex === index;
          return (
            // 제품 카드
            <div
              key={index}
              className={`mb-6 rounded-lg border bg-amber-50 transition-all duration-300 overflow-hidden relative`}
              style={
                isHovered
                  ? {
                      backgroundImage: "url('/images/products/product-bg.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }
                  : {}
              }
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => setSelectedDrink(drink)}
            >
              <h1
                className={`mt-8 ml-5 text-3xl font-bold text-left 
                  ${isHovered ? "text-amber-200" : "text-[#512d1e]"}`}
              >
                {drink.name}
              </h1>
              <h2
                className={`ml-5 mt-2 text-2xl font-bold text-left font-['yg-jalnan']
                  ${
                    isHovered ? "text-amber-200" : " text-[#512d1e] opacity-30"
                  } `}
              >
                {isHovered ? " " : drink.engName.toUpperCase()}
              </h2>
              {/* 이미지를 flex로 감싸! */}
              <div
                className={`m-5 flex flex-col ${
                  isHovered ? "justify-center items-center" : "items-start"
                }`}
                style={{ minHeight: "320px" }}
              >
                <img
                  src={isHovered ? drink.imagedetail : drink.image}
                  className={`transition-all duration-300 ${
                    isHovered ? "w-3/4 h-3/4" : "w-full h-10/12"
                  }`}
                  alt={`${drink.name} 이미지`}
                />
              </div>
            </div>
          );
        })}
        <div className="col-span-4 mb-5">
          <p className="text-lg text-center">
            음료는 현재 일부 매장에서만 운영되고 있습니다.
          </p>
        </div>
      </div>
      {/* 제품 상세정보 모달 */}
      <DrinksModal
        drink={selectedDrink}
        onClose={() => setSelectedDrink(null)}
      />
    </>
  );
}
