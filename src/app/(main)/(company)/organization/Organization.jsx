import React from "react";

export default function Organization({ src, alt }) {
  return (
    <>
      {/* 상단 이미지 영역 */}
      <div className="relative w-full h-[600px] overflow-hidden bg-gray-900">
        <img
          src="/images/greeting/s_visual6.jpg"
          alt="조직도"
          className="object-cover w-full h-full animate-fade-in"
        />
        <div className="absolute inset-0 flex items-center justify-center animate-fade-in">
          <span className="text-6xl font-bold text-white drop-shadow-lg">
            조직도
          </span>
        </div>
      </div>

      <div className="flex items-center justify-center h-screen">
        <img
          src={"/images/greetingintro2-bg.png"}
          alt={""}
          className="object-contain max-w-full max-h-screen"
        />
      </div>
    </>
  );
}
