"use client";

import React,{useEffect} from "react";
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
        src="/images/identi_images/num01.png" // 원하는 이미지 경로
        alt="장식 이미지"
        className="absolute top-10 left-20 w-[320px] h-[220px] z-10"
        data-aos="zoom-in"
        data-aos-delay="100"
      />

      {/* Logo Section */}
      <div className="relative z-0 flex justify-center gap-10 p-16 mt-20">
        {/* 로고 1 박스 */}
        <div className="w-[800px] h-[809px] flex items-center justify-center" data-aos = "zoom-in" data-aos-delay="100">
          <img
            src="/images/identi_images/brand-cunsumer-differnt1.png"
            alt="삼송빵집 로고 1"
            className="object-contain w-full h-full"
          />
        </div>

        <div className="w-[800px] h-[809px] flex flex-col items-center justify-center p-6"data-aos = "fade-left" data-aos-delay="200">
          {/* 텍스트 박스 */}
          <div className="flex flex-col items-center text-center">
            <p className="mb-6 text-[70px]  leading-none">
              <span className="font-extrabold text-yellow-500">고객만족</span>
              차별화
            </p>
            <p className="text-[18px] leading-relaxed text-gray-700 mb-6 max-w-[600px]">
              건강하고 맛있는 빵의 원칙 아래 매달 새로운 제품을 개발하고
              <br />그 중 철저한 내부검증을 통해 선발된 제품을 출시하고
              있습니다.
            </p>
            <div className="flex justify-center mt-8 mb-6">
              <div className="w-[610px] h-[66px] bg-[#4b2d1e] text-white rounded-full text-[30px] font-semibold whitespace-nowrap flex items-center justify-center">
                60년간 이어온 전통과 끊임없는 신제품 개발
              </div>
            </div>

            <ul className="max-w-[600px] space-y-4 text-[20px] font-bold text-left text-gray-700 list-disc pl-5">
              <li>국내 독점 아이템 개발 및 특허권 확보</li>
              <li>신선한 재료만을 아끼지 않고 넣어 만든 알찬 상품</li>
              <li>천연당, 신소재 활용한 제품 개발의 끊임없는 R&D</li>
            </ul>
          </div>

          {/* 로고 2 이미지 */}
          <div className="mt-10 h-[250px] w-full mt-6 flex items-center justify-center">
            <img
              src="/images/identi_images/brand6-img1-2_230616.png"
              alt="삼송빵집 로고 2"
              className="object-contain h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
