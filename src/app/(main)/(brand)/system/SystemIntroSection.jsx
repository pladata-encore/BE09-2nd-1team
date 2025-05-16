"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SystemIntroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = containerRef.current.querySelectorAll("[data-animate='fade-up']");

    elements.forEach((el, i) => {
      // 초기 상태 세팅
      gsap.set(el, { autoAlpha: 0, y: 50 });

      ScrollTrigger.create({
        trigger: el,
        start: "top 60%",
        end: "bottom 40%",
        onEnter: () => {
          gsap.to(el, {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: i * 0.15, // 요소별로 딜레이 추가 (0.15초 간격)
          });
        },
        onLeaveBack: () => {
          gsap.to(el, {
            autoAlpha: 0,
            y: 50,
            duration: 0.6,
            ease: "power3.in",
            delay: 0,
          });
        },
        // 옵션 더 추가 가능 (onEnterBack, onLeave 등)
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="max-w-4xl px-4 mx-auto text-center">
      <span
        className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#512D1E] block mb-4"
        data-animate="fade-up"
      >
        끊임없는 <span className="font-bold text-amber-400">메뉴개발</span>과{" "}
        탄탄한 <span className="font-bold text-amber-400">기술력</span>
      </span>
      <p
        className="mt-4 text-2xl text-center"
        data-animate="fade-up"
      >
        자동화 생산 공장을 통해 생산성을 확보하고
      </p>
      <p
        className="mt-4 text-2xl text-center"
        data-animate="fade-up"
      >
        제품R&D를 위한 연구소와 신규브랜드 시장성 연구를 위해 S-LAB을 운영하고 있습니다.
      </p>
    </div>
  );
}
