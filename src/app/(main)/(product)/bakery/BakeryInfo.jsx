"use client";

<<<<<<< HEAD
import React, { useState, useRef } from "react";
=======
import React, { useState, useEffect, useRef } from "react";
>>>>>>> develop
import products from "../product/products.json";
import ProductModal from "../product/ProductModal";
import AOS from "aos";
import "aos/dist/aos.css";
import { usePathname } from "next/navigation";

export default function BakeryInfo() {
<<<<<<< HEAD
  //
=======
>>>>>>> develop
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const hoverTimeout = useRef(null);
  const pathname = usePathname();

  // 통옥수수,고로케 제품을 제외한 리스트 새로 생성
  // 콘짜렐라부터 시작
const part1 = products.slice(8, 12);
// 이후 크림치즈, 크림치즈찰떡빵 삽입입
const part2 = products.slice(2, 4);
// 나머지 메뉴 삽입
const part3 = products.slice(12);

const selectedProducts = [
  ...part1,  
  ...part2,  
  ...part3   
];

  useEffect(() => {
    // AOS 초기화
    AOS.init({
      duration: 800,
      once: true, // 스크롤 시 애니메이션이 한 번만 실행되도록 설정
    });
    AOS.refresh();
  }, [pathname]);

  const handleMouseEnter = (index) => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
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
          alt="베이커리"
          className="object-cover w-full h-full"
        />
        <div
          className="absolute inset-0 flex items-center justify-center"
          data-aos="fade-up"
        >
          <span className="text-6xl font-bold text-white">베이커리</span>
        </div>
      </div>
      {/* 제품 리스트 영역 */}
      <div className="grid justify-center gap-6 m-4 sm:grid-cols-2 md:grid-cols-4 items-left">
<<<<<<< HEAD
        {bakeryProducts.map((product, index) => {
=======
        {selectedProducts.map((product, index) => {
>>>>>>> develop
          const isHovered = hoveredIndex === index;
          return (
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
                className={`m-5 flex flex-col ${
                  isHovered ? "justify-center items-center" : "items-start"
                }`}
                style={{ minHeight: "320px" }}
              >
                <img
                  src={isHovered ? product.imagedetail : product.image}
                  className={`transition-all duration-300 ${
                    isHovered ? "w-3/4 h-3/4" : "w-full h-10/12"
                  }`}
                  alt={`${product.name} 이미지`}
                />
                {isHovered && (
                  <p className="w-full mt-4 text-lg text-center text-white">
                    {product.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {/* 제품 상세정보 모달 */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}
