"use client"

import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
export default function Identify() {
    useEffect(() => {
        Aos.init();
      }, []);
  return (
    <div className="relative text-gray-800 bg-white">
      {/* 좌측 상단 겹치는 이미지 */}
      <img
        src="/images/identi_images/num03.png" // 원하는 이미지 경로
        alt="장식 이미지"
        className="absolute top-10 left-20 w-[320px] h-[220px] z-10"
        data-aos = "zoom-in" data-aos-delay="500"
      />

      {/* Logo Section */}
      <div className="relative z-0 flex justify-center gap-10 p-16 mt-20" >
        {/* 로고 1 박스 */}
        <div className="w-[800px] h-[809px] flex items-center justify-center">
          <img
            src="/images/identi_images/brand-service-differnt1.png"
            alt="삼송빵집 로고 1"
            className="object-contain w-full h-full"
            data-aos = "zoom-in" data-aos-delay="500"
          />
        </div>

        <div className="w-[800px] h-[809px] flex flex-col items-center justify-center p-6" data-aos = "fade-left" data-aos-delay="600">
          {/* 텍스트 박스 */}
          <div className="flex flex-col items-center text-center">
            <p className="mb-6 text-[70px]  leading-none text-[#512d1e]">
              <span className="font-extrabold text-yellow-500">운영 </span>
              차별화
            </p>
            <p className="text-[18px] leading-relaxed text-gray-700 mb-6 max-w-[600px]">
              매일, 매시간 갓 구운 빵을 전하기 위해
              <br />
              판매공간보다 넓은 제빵공간과 다수의 숙련된 제빵사를 중심으로
              운영됩니다.
            </p>
            <div className="flex justify-center mt-8 mb-6">
              <div className="w-[676px] h-[66px] bg-[#4b2d1e] text-white rounded-full text-[30px] font-semibold whitespace-nowrap flex items-center justify-center">
                삼송빵집 방식 그대로, 전국 각 매장의 수작업 생산
              </div>
            </div>

            <ul className="max-w-[600px] space-y-4 text-[20px]  text-left text-gray-700 list-disc pl-5">
              <li>직원채용→관리까지 본사 경영/현장 교육 실시</li>
              <li>신입직원교육(필수 7일 이상)</li>
              <li>정기 제빵 교육(분기별) 실시</li>
              <li>매 시간 새 빵을 만드는 소량 다빈도 제조</li>
            </ul>
          </div>

          {/* 로고 2 이미지 */}
          <div className="mt-10 h-[236x] w-full mt-6 flex items-center justify-center">
            <img
              src="/images/identi_images/brand-service-differnt2.png"
              alt="삼송빵집 로고 2"
              className="object-contain h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
