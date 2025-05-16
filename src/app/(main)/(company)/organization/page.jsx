import React from "react";

export default function page() {
  return (
    <>
      <div></div>
      <div className="relative w-[500px] h-[500px]">
        <img
          src="images\organization\intro4-img_230627.png"
          alt="기업이념"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl font-bold text-white"></span>
        </div>
      </div>

      <div className="mt-4 space-y-6 text-base text-center text-gray-700">
        {/* 첫 번째 문단 덩어리 */}
        <div className="space-y-2 text-lg leading-relaxed tracking-wide fade-in-up">
          <p>우주 최강 제빵 사관학교 삼송 스쿨에 다니는 삼송 친구들 이야기.</p>
          <p>
            최고의 원료, 최고의 손맛, 빵에 대한 우주 최강 지식이 아니고서는
            아무나 들어갈 수 없는 학교이다.
          </p>
        </div>
      </div>
    </>
  );
}
