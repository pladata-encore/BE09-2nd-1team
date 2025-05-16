"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import products from "./products.json";
import ProductModal from "./ProductModal";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProductInfo() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const hoverTimeout = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    // AOS 초기화
    AOS.init({
      duration: 800,
      once: true, // 스크롤 시 애니메이션이 한 번만 실행되도록 설정
    });
    AOS.refresh();
    return () => {
      if (hoverTimeout.current) {
        clearTimeout(hoverTimeout.current);
      }
    };
  }, [pathname]);

  const handleMouseEnter = (index) => {
    if (hoveredIndex !== index) {
      if (hoverTimeout.current) {
        clearTimeout(hoverTimeout.current);
        hoverTimeout.current = null;
      }
      setHoveredIndex(index);
    }
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
        <div
          className="absolute inset-0 flex items-center justify-center"
          data-aos="fade-up"
        >
          <span className="text-6xl font-bold text-white">제품소개</span>
        </div>
      </div>
      {/* 제품 리스트 영역 */}
      <div className="grid justify-center gap-6 m-4 sm:grid-cols-2 md:grid-cols-4 items-left">
        {products.map((product, index) => {
          const isHovered = hoveredIndex === index;
          return (
            // 제품 카드
            <div
              key={index}
              className="relative mb-6 overflow-hidden transition-all duration-300 border rounded-lg bg-amber-50"
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
              onClick={() => setSelectedProduct(product)}
              data-aos="fade-up"
            >
              <h1
                className={`mt-8 ml-5 text-3xl font-bold text-left 
      ${isHovered ? "text-amber-200" : "text-[#512d1e]"}`}
              >
                {product.name}
              </h1>
              <h1
                className={`ml-5 mt-2 text-2xl font-bold text-left font-['yg-jalnan']
      ${isHovered ? "text-amber-200" : "text-[#512d1e] opacity-30"}`}
              >
                {isHovered ? " " : product.engName.toUpperCase()}
              </h1>
              {/* 이미지와 설명을 flex로 감쌈 */}
              <div
                className={`mt-5 md-5 flex flex-col ${
                  isHovered ? "justify-center items-center" : "items-start"
                }`}
                style={{ minHeight: "320px" }}
              >
                <img
                  src={isHovered ? product.imagedetail : product.image}
                  className={`transition-all duration-300 ${
                    isHovered ? "w-3/4 h-full" : "w-full h-10/12"
                  }`}
                  alt={`${product.name} 이미지`}
                />
                {isHovered && (
                  <p className="m-4 text-lg text-center text-white ">
                    {product.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {/* 제품 상세정보 모달 */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}
