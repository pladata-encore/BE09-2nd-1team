"use client";

import React, { useState } from "react";
import products from "./products.json";
export default function ProductDetail() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <div className="relative w-full h-[550px]">
        <img
          src="/images/products/product_main.jpg"
          alt="제품 소개"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl font-bold text-white">제품소개</span>
        </div>
      </div>
      <div className="grid justify-center grid-cols-1 gap-6 m-4 sm:grid-cols-2 md:grid-cols-4 items-left">
        {products.map((product, index) => {
          const isHovered = hoveredIndex === index;
          return (
            // 제품 카드
            <div key={index} className="mb-6 rounded-lg border-1 bg-amber-50">
              {/* 제품 이름 */}
              <h1
                className={`m-5 text-3xl font-bold text-left 
                  ${isHovered ? "text-red-500" : "text-black"}`}>
                {product.name}
              </h1>
              {/* 마우스 올리면 상세 설명 출력 */}
              <p className="m-5 text-base text-left">
                {isHovered ? product.description : ""}
              </p>
              <img
                src={isHovered ? product.imagedetail : product.image}
                className="w-[300px] h-[300px] m-5"
                alt={`${product.name} 이미지`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
