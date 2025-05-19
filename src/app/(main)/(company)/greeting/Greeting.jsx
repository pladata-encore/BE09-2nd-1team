"use client";

import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Greeting() {
  useEffect(() => {
    // 전체 섹션(부모 요소)을 기준으로 타임라인 구성
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".intro-animation", // 애니메이션 대상이 되는 전체 섹션
        start: "top 85%", // 섹션 상단이 뷰포트의 90% 위치에 도달할 때 시작
        end: "bottom 30%", // 섹션 하단이 뷰포트의 60% 지점에 도달할 때까지 애니메이션 진행
        scrub: 1.5, // 스크롤과 애니메이션을 1.5초 동안 부드럽게 동기화
      },
    });

    // .slide-text 클래스를 가진 각 요소들이 작은 x 오프셋과 함께 서서히 나타나도록 설정
    tl.from(".slide-text", {
      x: 30, // 오른쪽에서 30px 만큼 이동 (오버액션 방지)
      opacity: 0, // 처음에는 투명하게 시작
      duration: 1, // 각 요소의 애니메이션 지속 시간 1초
      ease: "expo.out", // 자연스럽고 부드러운 감속 효과
      stagger: 0.3, // 각 요소 사이에 0.3초 간격으로 순차적으로 나타남
    });

    gsap.from(".zoom-in", {
      scale: 0.5, // 50% 크기에서 시작
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });
  }, []);

  return (
    <>
      {/* 상단 이미지 영역 */}
      <div className="relative w-full h-[580px] overflow-hidden bg-gray-900">
        <img
          src="/images/greeting/s_visual6.jpg"
          alt="인사말"
          className="object-cover w-full h-full animate-fade-in"
        />
        <div className="absolute inset-0 flex items-center justify-center animate-fade-in">
          <span className="text-6xl font-bold text-white drop-shadow-lg">
            인사말
          </span>
        </div>
      </div>

      {/* 바디 */}
      <section className="p-8 bg-white intro-animation">
        <div className="flex flex-col items-center md:flex-row">
          {/* 텍스트 (왼쪽) */}
          <div>
            <div>
              <div className="flex slide-text">
                <span className="text-6xl font-bold text-yellow-900">
                  since
                </span>
                <span className="ml-2 text-6xl font-bold text-yellow-600">
                  1957
                </span>
              </div>
            </div>

            <div>
              <div className="flex flex-col slide-text">
                <p className="text-xl font-bold text-gray-800">
                  1957년 대구 남문시장에서 삼송제과로 시작된 <br />
                  삼송빵집은 3대를 이어 대구를 대표하는 <br />
                  추억과 역사의 빵집으로 많은 사랑을 받고 있습니다.
                </p>
              </div>
            </div>

            <div>
              <div className="flex flex-col slide-text">
                <p className="mt-4 text-lg text-gray-700">
                  정직한 경영과 성실한 제품 개발이 국내 최초의 오븐에 구운
                  고로케와 <br />
                  통옥수수빵의 탄생과 성공으로 이어졌고, 오늘날 한국을 대표하는{" "}
                  <br />
                  베이커리 브랜드 중 하나인 "삼송빵집"을 있게 했습니다.
                </p>
              </div>
            </div>

            <div>
              <div className="flex flex-col slide-text">
                <p className="mt-4 text-lg text-gray-700">
                  삼송비엔씨는 대형 프랜차이즈와 경쟁을 이겨낸 경험과 긴 업력의{" "}
                  <br />
                  노하우를 바탕으로 2022년부터 가맹사업 전개, 생산시스템 확충,
                  해외 <br />
                  진출 등으로 더욱 단단한 성장의 발판을 준비하고 있습니다.
                </p>
              </div>
            </div>

            <div>
              <div className="flex flex-col slide-text">
                <span className="font-semibold text-left text-gray-600">
                  {" "}
                  대표이사 박성욱{" "}
                </span>
                <span>
                  <img
                    src="/images/greeting/sign.png"
                    alt="사인"
                    className="w-[100px] h-auto object-cover"
                  />
                </span>
              </div>
            </div>
          </div>

          {/* 이미지(오른쪽) */}
          <article className="min-w-[300px] flex flex-col items-center justify-center w-1/2 mt-8 zoom-in">
            <img
              src="/images/greeting/intro_bakery.png"
              alt="intro_bakery"
              className="object-cover w-[700px] h-auto rounded-lg shadow-lg"
            />
          </article>
        </div>
      </section>
    </>
  );
}
