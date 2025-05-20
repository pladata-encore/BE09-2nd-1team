// components/BrandIdentity.tsx
import React from "react";

export default function Identify() {
  return (
    <div className="text-gray-800 bg-white">
      {/* === B.I Section === */}
      <div
        className="relative w-[1600px] h-[686.28px] overflow-hidden bg-white mx-auto"
        style={{ maxWidth: "1600px" }}
      >
        {/* Title */}
        <div className="absolute top-0 left-0 p-16 w-[400px]">
          <h1 className="text-[48px] font-bold text-gray-900">B.I</h1>
          <h2 className="mt-4 text-[40px] font-semibold text-yellow-500">
            Brand Identity
          </h2>
        </div>

        {/* Images */}
        <div className="flex flex-col justify-center items-center h-full pr-16 pl-[440px] space-y-4">
          <div className="flex items-center justify-center p-2 overflow-hidden w-[800px] h-[267.75px]">
            <img
              src="/images/identi_images/brand-Brand-Identity.png"
              alt="삼송빵집 로고 1"
              className="object-contain max-w-full max-h-full"
            />
          </div>
          <div className="flex items-center justify-center p-2 overflow-hidden w-[800px] h-[267.75px]">
            <img
              src="/images/identi_images/brand2-sig-en.png"
              alt="삼송빵집 로고 2"
              className="object-contain max-w-full max-h-full"
            />
          </div>
        </div>
      </div>
      {/* 구분선 */}
      <div className="w-full h-px bg-[#512d1e] my-12" />

      {/* === Symbol Section === */}
      <div
        className="relative w-[1600px] h-[380px] overflow-hidden bg-white mx-auto"
        style={{ maxWidth: "1600px" }}
      >
        {/* Title */}
        <div className="absolute top-0 left-0 p-16 w-[400px]">
          <h1 className="text-[48px] font-bold text-gray-900">심볼</h1>
          <h2 className="mt-4 text-[40px] font-semibold text-yellow-500">
            Symbol
          </h2>
        </div>

        {/* 이미지와 텍스트 수평 정렬 */}
        <div className="flex items-center justify-between h-full pl-[440px] pr-16">
          {/* 심볼 이미지 */}
          <div className="w-[500px] h-[300px] flex items-center justify-center"
          style={{ transform: "translateX(-120px) translateY(30px)" }}>
            <img
              src="/images/identi_images/brand2-symbol.png"
              alt="삼송빵집 심볼"
              className="object-contain max-h-full"
            />
          </div>

          {/* 텍스트 (박스 안 우측 끝, 오른쪽 정렬) */}
          <div className="w-[500px] text-right pointer-events-none"
                    style={{ transform: "translateX(-120px) translateY(95px)" }}>
            <p className="text-[130px] font-bold text-black leading-none opacity-5"
            style={{transform: "translateX(10px)"}}>
              SAMSOMG
            </p>
            <p className="text-[130px] font-bold text-black opacity-5 mt-[-30px]"
            style={{transform: "translateX(170px)"}}>
              BAKERY
            </p>
          </div>
        </div>
      </div>
      {/* 구분선   */}
      <div className="w-full h-px bg-[#512d1e] my-12" />

      {/* === 삼송프렌즈 Section === */}
      <div
        className="relative w-[1600px] h-[400px] overflow-hidden bg-white mx-auto"
        style={{ maxWidth: "1600px" }}
      >
        {/* Title */}
        <div className="absolute top-0 left-0 p-16 w-[400px]">
          <h1 className="text-[48px] font-bold text-gray-900">삼송프렌즈</h1>
          <h2 className="mt-4 text-[40px] font-semibold text-yellow-500">
            Character
          </h2>
        </div>

        {/* Character Image */}
        <div className="absolute right-0 top-0 h-full flex items-center pr-16 pl-[440px]">
          <div className="w-[1090px] h-[241.28px] flex items-center justify-center">
            <img
              src="/images/identi_images/brand-cha.png"
              alt="삼송빵집 캐릭터"
              className="object-contain max-h-full"
            />
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-[#512d1e] my-12" />

      {/* === 컬러시스템 Section === */}
      <div
        className="relative w-[1600px] h-[500px] overflow-hidden bg-white mx-auto"
        style={{ maxWidth: "1600px" }}
      >
        {/* Title */}
        <div className="absolute top-0 left-0 p-16 w-[400px]">
          <h1 className="text-[48px] font-bold text-gray-900">컬러시스템</h1>
          <h2 className="mt-4 text-[40px] font-semibold text-yellow-500">
            Color System
          </h2>
        </div>

        {/* Color Image */}
        <div
          className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
          style={{ transform: "translateX(120px)" }} // px 단위로 오른쪽 이동
        >
          <div className="w-[800px] h-[404px] flex items-center justify-center">
            <img
              src="/images/identi_images/brand2-Color-System.png"
              alt="삼송빵집 컬러 시스템"
              className="object-contain max-h-full"
            />
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-[#512d1e] my-12" />
    </div>
  );
}
