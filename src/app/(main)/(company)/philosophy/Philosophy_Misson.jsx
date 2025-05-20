"use client";

import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["900"],
});

export default function Misson() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col items-center">
      {/* 타이틀 */}
      <p
        className="mt-20 font-semibold text-center text-7xl"
        data-aos="fade-up"
      >
        <span className="font-thin text-[#eca51d]">[</span>
        <span className={`${montserrat.className} px-2 text-black font-black`}>
          MISSON
        </span>
        <span className="font-thin text-[#eca51d]">]</span>
      </p>

      {/* 본문 텍스트 */}
      <div className="mt-4 space-y-6 text-base text-center text-gray-700">
        <div
          className="space-y-2 text-lg leading-relaxed tracking-wide"
          data-aos="fade-up"
        >
          <p>
            3대를 이어 대구를 대표하는 브랜드로 정직한 경영과 꾸준한 신제품
            개발로
          </p>
          <p>국내는 물론 세계 속 삼송으로 도약하기 위한 준비를 마쳤습니다.</p>
        </div>

        {/* 원형 카드 3개 */}
        <div className="relative flex flex-col items-center mt-16 md:flex-row md:justify-center">
          {/* Quality */}
          <div
            className="flex flex-col items-center justify-center w-[350px] h-[350px] rounded-full bg-[rgba(250,248,239,1)] text-center p-6 z-20"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <h2 className="text-[40px] font-black">
              <span
                className={`${montserrat.className} text-amber-500 font-black`}
              >
                Q
              </span>
              <span className={`${montserrat.className} text-black font-black`}>
                uality
              </span>
            </h2>
            <p className="mt-4 text-gray-600 text-[18px] leading-relaxed">
              지속적인 제품개발과 <br />
              경쟁력 확보
            </p>
          </div>

          {/* History - 겹치게 설정 */}
          <div
            className="flex flex-col items-center justify-center w-[350px] h-[350px] rounded-full bg-[rgba(245,239,236,0.6)] text-center p-6 -ml-7 z-30"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <h3 className="text-[40px] font-bold">
              <span
                className={`${montserrat.className} text-[#512d1e] font-black`}
              >
                H
              </span>
              <span className={`${montserrat.className} text-black font-black`}>
                istory
              </span>
            </h3>
            <p className="mt-4 text-gray-600 text-[18px] leading-relaxed">
              100년 역사의 <br />
              장수기업으로 성장
            </p>
          </div>

          {/* Global - 더 겹치게 설정 */}
          <div
            className="flex flex-col items-center justify-center w-[350px] h-[350px] rounded-full bg-[rgba(247,241,241,1)] text-center p-6 -ml-7 z-20"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h3 className="text-[40px] font-bold">
              <span
                className={`${montserrat.className} text-[#9e583a] font-black`}
              >
                G
              </span>
              <span className={`${montserrat.className} text-black font-black`}>
                lobal
              </span>
            </h3>
            <p className="mt-4 text-gray-600 text-[18px] leading-relaxed">
              글로벌 시장진출을 <br />
              통한 지속성장
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
