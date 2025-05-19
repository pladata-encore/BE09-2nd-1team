"use client";

import React,{useEffect} from "react";
import "aos/dist/aos.css";
import Aos from "aos";
export default function Identify() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="relative text-gray-800 bg-[#fefbf5] w-[2258.82px] h-[1058.99px]">
      {/* 우측 상단 겹치는 이미지 (좌우 반전 → 오른쪽으로 이동) */}
      <img
        src="/images/identi_images/num04.png"
        alt="장식 이미지"
        className="absolute top-10 right-70 w-[380px] h-[220px] z-10"
        data-aos="zoom-in"
        data-aos-delay="700"
      />

      {/* Logo Section */}
      <div className="relative z-0 flex justify-center gap-10 p-16 mt-20">
        {/* 텍스트 및 로고2 박스 (왼쪽으로 이동) */}
        <div className="w-[800px] h-[809px] flex flex-col items-center justify-center p-6"data-aos = "fade-right" data-aos-delay="800">
          <div className="flex flex-col items-center text-center">
            <p className="mb-6 text-[70px] leading-none">
              <span className="font-extrabold text-yellow-500">나눔 </span>
              차별화
            </p>
            <p className="text-[18px] leading-relaxed text-gray-700 mb-6 max-w-[600px]">
              공익 TV 프로그램 후원과 학교 공기관, 기업 그리고 어려운 이웃 등
              <br />
              지역민에게 꾸준한 CSR활동을 위한 삼송 나누리 프로젝트를 진행하고
              있습니다.
            </p>
            <div className="flex justify-center mt-8 mb-6">
              <div className="w-[587.44px] h-[66px] bg-[#4b2d1e] text-white rounded-full text-[30px] font-semibold whitespace-nowrap flex items-center justify-center">
                안정적 성장 및 이익 사회 환원의 착한 기업
              </div>
            </div>

            <ul className="max-w-[600px] space-y-4 text-[20px]  font-bold text-left text-gray-700 list-disc pl-5">
              <li>지역별 제한으로 대구의 대표 빵집이라는 브랜드 희소성 고수</li>
              <li>지역밀착형 점포 운영으로 매장 내실 집중화</li>
              <li>사회환원 및 이익 기여 활동 지역과 함께 전개</li>
            </ul>
          </div>

          {/* 로고 2 이미지 */}
          <div className="mt-15 h-[236px] w-[583] flex items-center justify-center">
            <img
              src="/images/identi_images/brand-gift-differnt2.png"
              alt="삼송빵집 로고 2"
              className="object-contain h-full"
            />
          </div>
        </div>

        {/* 로고 1 박스 (오른쪽으로 이동) */}
        <div className="w-[800px] h-[809px] flex items-center justify-center"data-aos = "zoom-in" data-aos-delay="700">
          <img
            src="/images/identi_images/brand-gift-differnt1.png"
            alt="삼송빵집 로고 1"
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
