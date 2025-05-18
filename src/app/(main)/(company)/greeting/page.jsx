"use client";

import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";

// export default function AnimatedText() {
//   useEffect(() => {
//     gsap.from(".text-block", {
//       x: 100, // 오른쪽에서 시작
//       opacity: 0,
//       duration: 1.5,
//       ease: "power3.out",
//     });
//   }, []);

export function useSlideAnimation(targetClass) {
  useEffect(() => {
    gsap.from(targetClass, {
      x: 100, // 오른쪽에서 시작
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });
  }, []);
}

export default function Page() {
  useEffect(() => {
    AOS.init({ duration: 1500, easing: "ease-in-out" });
  }, []);

  return (
    <>
      <div>
        <div className="relative w-full h-[500px]">
          <img
            src="/images/greeting/s_visual6.jpg"
            alt="인사말"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl font-bold text-white">인사말</span>
          </div>
        </div>
        <div className="flex items-center justify-between w-full p-8 bg-white">
          {/* 텍스트 (왼쪽) */}

          <div className="w-1/2 pr-6">
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="aos-init aos-animate"
            >
              <div>
                <span className="text-4xl font-bold text-yellow-900">
                  since
                </span>
                <span className="text-4xl font-bold text-yellow-600">1957</span>
              </div>
              <div>
                <p className="text-xl font-bold text-gray-800">
                  1957년 대구 남문시장에서 삼송제과로 시작된 <br />
                  삼송빵집은 3대를 이어 대구를 대표하는 <br />
                  추억과 역사의 빵집으로 많은 사랑을 받고 있습니다.
                </p>
              </div>
              <div>
                <p className="mt-4 text-lg text-gray-700">
                  정직한 경영과 성실한 제품 개발이 국내 최초의 오븐에 구운
                  고로케와 통옥수수빵의 탄생과 성공으로 이어졌고, 오늘날 한국을
                  대표하는 베이커리 브랜드 중 하나인 "삼송빵집"을 있게 했습니다.
                </p>
              </div>
              <div>
                <p className="mt-4 text-lg text-gray-700">
                  삼송비엔씨는 대형 프랜차이즈와 경쟁을 이겨낸 경험과 긴 업력의
                  노하우를 바탕으로 2022년부터 가맹사업 전개, 생산시스템 확충,
                  해외 진출 등으로 더욱 단단한 성장의 발판을 준비하고 있습니다.
                </p>
              </div>
              <div className="flex items-center justify-end mt-6 space-x-4">
                {/* 직책 성함 */}
                <p className="font-semibold text-right text-gray-600">
                  대표이사 박성욱
                </p>

                {/* 사인 이미지 */}
                <img
                  src="/images/greeting/sign.png"
                  alt="사인"
                  className="w-[100px] h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* 이미지 (오른쪽) */}
          <div className="w-1/2">
            <img
              src="/images/greeting/intro_bakery.png"
              alt="intro_bakery"
              className="object-cover w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
