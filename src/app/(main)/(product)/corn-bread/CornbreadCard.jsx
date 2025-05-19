"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import products from "../product/products.json";
import ProductModal from "../product/ProductModal";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CornbreadCard() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const hoverTimeout = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    AOS.refresh();
  }, [pathname]);

  const handleMouseEnter = (index) => {
    clearTimeout(hoverTimeout.current);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => setHoveredIndex(null), 150);
  };

  return (
    <>
      <div className="relative w-full">
        <h1 className="text-3xl font-bold text-center text-black">제품소개</h1>
      </div>

      <div className="flex items-center justify-center flex-1 gap-6 m-4">
        {products.slice(0, 2).map((product, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <div
              key={index}
              className="relative w-[304px] h-[403px] transition-all duration-300 border rounded-lg bg-amber-50 overflow-hidden"
              style={{
                backgroundImage: isHovered
                  ? "url('/images/products/product-bg.png')"
                  : undefined,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => setSelectedProduct(product)}
              data-aos="fade-left"
            >
              <div className="flex flex-col h-full p-6">
                {/* 텍스트 영역 */}
                <div>
                  <h1
                    className={`text-2xl font-bold ${
                      isHovered ? "text-amber-200" : "text-[#512d1e]"
                    }`}
                  >
                    {product.name}
                  </h1>
                  <h2
                    className={`mt-2 text-xl font-['yg-jalnan'] transition-opacity ${
                      isHovered ? "opacity-0 h-0" : "opacity-30"
                    }`}
                  >
                    {product.engName.toUpperCase()}
                  </h2>
                </div>

                {/* 이미지 영역 - hover 시 scale로 축소 */}
                <div
                  className={`flex items-center ${
                    isHovered ? "justify-center" : "justify-end"
                  } flex-1 transition-all duration-300`}
                >
                  <img
                    src={isHovered ? product.imagedetail : product.image}
                    className={`object-contain transition-transform duration-300 w-full 
                ${isHovered ? "scale-75" : "scale-100"} 
                max-h-[220px]`}
                    alt={product.name}
                  />
                </div>

                {/* 설명 텍스트 (hover 시에만 표시) */}
                <div
                  className={`mt-4 transition-all duration-300 ${
                    isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <p className="text-lg leading-relaxed text-center text-white whitespace-pre-line">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}
