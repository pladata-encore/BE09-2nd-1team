  // components/BrandIdentity.tsx
  import React from "react";

  export default function Identify() {
    return (
      <div className="text-gray-800 bg-white">
        {/* B.I Section */}
        <div className="flex items-start justify-between p-16 mt-20">
          {/* Title */}
          <div className="w-1/3" style={{ transform: "translateX(-240px)" }}>
            <h1 className="text-[48px] font-bold text-gray-900">B.I</h1>
            <h2 className="mt-4 text-[40px] font-semibold text-yellow-500">
              Brand Identity
            </h2>
          </div>

          {/* Logos */}
          <div className="w-[1000px] grid grid-cols-1 gap-10">
            <div className="h-[300px] p-6 flex flex-col items-center justify-center">
              <img
                src="/images/identi_images/brand-Brand-Identity.png"
                alt="삼송빵집 로고 1"
                className="object-contain max-h-full"
              />
            </div>

            <div className="h-[300px] p-6 flex flex-col items-center justify-center">
              <img
                src="/images/identi_images/brand2-sig-en.png"
                alt="삼송빵집 로고 2"
                className="object-contain max-h-full"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#512d1e] my-12" />

      {/* Symbol Section */}
      <div className="flex items-start justify-between p-16 mt-20">
        {/* Title */}
        <div
          className="w-1/3"
          style={{ transform: "translateX(-240px) translateY(-70px)" }}
        >
          <h1 className="text-[48px] font-bold text-gray-900">심볼</h1>
          <h2 className="mt-4 text-[40px] font-semibold text-yellow-500">
            Symbol
          </h2>
        </div>

        {/* Symbol + Text */}
        <div className="w-[1000px] relative flex justify-end">
          <div className="w-[500px] h-[300px] p-6 flex items-center justify-center">
            <img
              src="/images/identi_images/brand2-symbol.png"
              alt="삼송빵집 심볼"
              className="object-contain max-h-full"
            />
          </div>

          <div className="absolute top-0 right-0 p-6 text-right">
            <p className="text-[100px] font-bold text-[#f5b335] leading-none opacity-5">
              SAMSOMG
            </p>
            <p className="text-[100px] font-bold text-[#f5b335] opacity-5">
              BAKERY
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-[#512d1e] my-12" />

      {/* 삼송프렌즈 Section */}
      <div className="flex items-start justify-between p-16 mt-20">
        {/* Title */}
        <div
          className="w-1/3"
          style={{ transform: "translateX(-240px) translateY(-70px)" }}
        >
          <h1 className="text-[48px] font-bold text-gray-900">삼송프렌즈</h1>
          <h2 className="mt-4 text-[40px] font-semibold text-yellow-500">
            Character
          </h2>
        </div>

        {/* Character Image */}
        <div className="w-[1000px] flex justify-end">
          <div className="w-[900px] h-[300px] p-6 flex items-center justify-end">
            <img
              src="/images/identi_images/brand-cha.png"
              alt="삼송빵집 캐릭터"
              className="object-contain max-h-full"
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-[#512d1e] my-12" />

      {/* 컬러시스템 Section */}
      <div className="flex items-start justify-between p-16 mt-20">
        {/* Title */}
        <div
          className="w-1/3"
          style={{ transform: "translateX(-240px) translateY(-70px)" }}
        >
          <h1 className="text-[48px] font-bold text-gray-900">컬러시스템</h1>
          <h2 className="mt-4 text-[40px] font-semibold text-yellow-500">
            Color System
          </h2>
        </div>

        {/* Color Image */}
        <div className="w-[1000px] relative flex justify-end">
          <div className="w-[900px] h-[450px] p-6 flex items-center justify-center">
            <img
              src="/images/identi_images/brand2-Color-System.png"
              alt="삼송빵집 컬러 시스템"
              className="object-contain max-h-full"
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-[#512d1e] my-12" />
    </div>
  );
}
