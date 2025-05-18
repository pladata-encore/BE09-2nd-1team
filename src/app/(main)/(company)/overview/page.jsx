import React from "react";

export default function page() {
  return (
    <>
      <div className="relative w-full h-[500px]">
        <img
          src="/images/greeting/s_visual6.jpg"
          alt="기업개요"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-6xl font-bold text-white">기업개요</span>
      </div>
      <div class="max-w-2xl mx-auto p-6">
        <p class="mt-4 text-center text-lg">
          전국 <span class="font-bold">46개 매장</span> · 일{" "}
          <span class="font-bold">100만개의 빵</span> ·{" "}
          <span class="font-bold">300여명의 직원</span>
        </p>
        <p class="mt-2 text-center text-gray-700">
          한국을 대표하는 베이커리 브랜드로 성장했습니다.
        </p>
        <span></span>
      </div>
    </>
  );
}
