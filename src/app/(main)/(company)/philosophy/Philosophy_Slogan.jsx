"use client";

import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["900"],
});

export default function Slogan() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative flex flex-col items-center w-screen">
      {/* 배경 박스 - 부모가 화면 전체 너비라 중앙 정렬 가능 */}
      <div
        className="absolute top-0 left-1/2 w-[1920px] h-[920.41px] bg-[#fefbf5] -z-10"
        style={{ transform: "translateX(-50%)" }}
        aria-hidden="true"
      ></div>

      {/* 타이틀 */}
      <p className="font-semibold text-center mt-30 text-7xl" data-aos="fade-up" data-aos-delay="600">
  <span className="font-thin text-[#eca51d]">[</span>
  <span className={`${montserrat.className} px-2 text-black font-black`}>SLOGAN</span>
  <span className="font-thin text-[#eca51d]">]</span>
</p>


      {/* 본문 텍스트 */}
      <div className="space-y-6 text-base text-center text-gray-700 mt-7">
        <div
          className="space-y-2 text-lg leading-relaxed tracking-wide"
          data-aos="fade-up"
        >
          <p
            className="text-[22px] font-block"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            경영 이념
          </p>
          <p
            className="mt-5 text-[18px]"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            “맛있고 건강한 빵”이라는 기본 원칙을 철저히 고수한 결과
          </p>
          <p
            className="mt-5 text-[18px]"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            소비자의 만족과 신뢰를 모두 얻을 수 있었습니다.
          </p>
        </div>

        {/* 흰색 사각 박스 3개 */}
        <div className="relative flex flex-col items-center gap-8 mt-16 mb-20 md:flex-row md:justify-center">
          {/* Box 1 */}
          <div
            className="w-[430px] h-[450px] bg-white rounded-md shadow-md flex flex-col items-center justify-center p-6"
            data-aos="flip-left"
            data-aos-delay="900"
          >
            <img
              src="/images/philosophy/slogan1.png"
              alt="slogan1"
              className="object-contain w-[81px] h-[70px]"
            />
            <span className="text-[20px] w-[150.28px] h-[44px] font-semibold bg-black rounded-full bg-opacity-70 text-white flex items-center justify-center mt-4">
              정직한 경영
            </span>

            <p className="mt-5 text-[18px]">임직원과 직원간 충분한 의사소통</p>
            <p className="text-[18px]">윤리적 책임경영</p>
            <p className="text-[18px]">정직한 제품생산</p>

            {/* 세로 선 */}
            <div className="w-[2px] h-[40px] bg-[#eca51d] mt-6 mb-2"></div>

            {/* 문구 */}
            <p className="max-w-xs text-sm text-center text-[26px] text-[#eca51d]">
              소비자와 직원 모두
            </p>
            <p className="max-w-xs text-sm text-center text-[26px] text-[#eca51d]">
              만족하는 기업
            </p>
          </div>

          {/* Box 2 */}
          <div
            className="w-[430px] h-[450px] bg-white rounded-md shadow-md flex flex-col items-center justify-center p-6"
            data-aos="flip-left"
            data-aos-delay="1000"
          >
            <img
              src="/images/philosophy/slogan2.png"
              alt="slogan2"
              className="object-contain w-[81px] h-[70px]"
            />
            <span className="text-[20px] w-[150.28px] h-[44px] font-semibold bg-black rounded-full bg-opacity-70 text-white flex items-center justify-center mt-4">
              소비자 신뢰
            </span>

            <p className="mt-5 text-[18px]">
              소비자 건강과 행복을 최우선으로 고려
            </p>
            <p className="text-[18px]">소비자와 적극소통</p>
            <p className="text-[18px]">지속적인 제품개발</p>

            {/* 세로 선 */}
            <div className="w-[2px] h-[40px] bg-[#eca51d] mt-6 mb-2"></div>

            {/* 문구 */}
            <p className="max-w-xs text-sm text-center text-[26px] text-[#eca51d]">
              소비자가 믿고
            </p>
            <p className="max-w-xs text-sm text-center text-[26px] text-[#eca51d]">
              신뢰하는 기업
            </p>
          </div>

          {/* Box 3 */}
          <div
            className="w-[430px] h-[450px] bg-white rounded-md shadow-md flex flex-col items-center justify-center p-6"
            data-aos="flip-left"
            data-aos-delay="1100"
          >
            <img
              src="/images/philosophy/slogan3.png"
              alt="slogan3"
              className="object-contain w-[81px] h-[70px]"
            />
            <span className="text-[20px] w-[150.28px] h-[44px] font-semibold bg-black rounded-full bg-opacity-70 text-white flex items-center justify-center mt-4">
              사랑의 기업
            </span>

            <p className="mt-5 text-[18px]">행복한 사회를 위한 봉사활동</p>
            <p className="text-[18px]">사회적 책임기업</p>
            <p className="text-[18px]">나눔정신 실현</p>

            {/* 세로 선 */}
            <div className="w-[2px] h-[40px] bg-[#eca51d] mt-6 mb-2"></div>

            {/* 문구 */}
            <p className="max-w-xs text-sm text-center text-[26px] text-[#eca51d]">
              소비자로부터
            </p>
            <p className="max-w-xs text-sm text-center text-[26px] text-[#eca51d]">
              사랑받는 기업
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
