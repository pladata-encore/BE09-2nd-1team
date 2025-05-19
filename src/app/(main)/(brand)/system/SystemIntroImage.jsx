"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Jost } from "next/font/google";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function ManufacturingSection() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out-cubic", // ✔️ 더 부드러운 이징
      once: false,
      mirror: true,
    });

    const refreshOnScroll = () => {
      AOS.refresh();
    };

    window.addEventListener("scroll", refreshOnScroll);

    return () => {
      window.removeEventListener("scroll", refreshOnScroll);
    };
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center px-4 py-10 space-y-24 bg-white md:px-16">
      {/* 삼송 제조공장 */}
      <div className="relative flex flex-col items-center max-w-6xl md:flex-row md:items-start md:w-full">
        <div
          className="relative z-10 overflow-visible md:w-1/2 "
          data-aos="flip-left"
        >
          <div className="relative w-full h-auto scale-140">
            <Image
              src="/images/system_images/factory.png"
              alt="삼송 제조 공장"
              width={1800} // 이전보다 더 큼
              height={1200}
              className="w-full h-auto rounded shadow-lg"
            />

            <div className="absolute top-0 right-0 hidden translate-x-6 -translate-y-6 bg-yellow-400 h-30 w-50 -z-10 md:block"></div>
          </div>
        </div>

        {/* 배경 텍스트 - Jost 적용 */}
        <div
          className={`absolute hidden font-black text-gray-200 pointer-events-none select-none text-[170px] opacity-90 lg:block whitespace-nowrap ${jost.className}`}
          style={{ left: "calc(50% + 100px)", top: "-150px" }}
        >
          SSBNC
        </div>

        <div
          className="mt-6 text-center md:mt-0 md:pl-16 md:text-left md:w-1/2"
          data-aos="fade-up"
          style={{ transform: "translateX(110px)" }} // px 단위로 오른쪽 이동
        >
          <h2 className="mb-6 text-3xl font-bold mt-39 ">삼송 제조 공장</h2>
          <ul className="space-y-2 text-lg text-gray-700">
            <li>· HACCP 인증 깨끗한 환경</li>
            <li>· 효율적인 자동화 시스템</li>
            <li>· 라인당 일 최소 생산량 1만개</li>
            <li>· 안전한 생산 관리</li>
          </ul>
        </div>
      </div>

      {/* R&D 연구소 */}
      <div className="relative flex flex-col items-center max-w-6xl mt-10 md:flex-row-reverse md:items-start md:w-full">
        <div className="relative z-10 overflow-visible " data-aos="flip-right">
          <div
            className="relative w-full h-auto scale-110 "
            style={{ transform: "translateX(60px)" }} // px 단위로 오른쪽 이동
          >
            <Image
              src="/images/system_images/devolopment_lab.png"
              alt="R&D 기술연구소"
              width={600}
              height={400}
              className="rounded shadow-lg"
            />
            <div className="absolute top-0 left-0 hidden h-40 -translate-x-6 -translate-y-6 bg-yellow-400 w-60 -z-10 md:block"></div>
          </div>
        </div>

        {/* 배경 텍스트 - Jost 적용 */}
        <div
          className={`absolute hidden font-extrabold text-gray-200 pointer-events-none select-none text-[170px] opacity-90 lg:block whitespace-nowrap ${jost.className}`}
          style={{ left: "calc(50% - 370px)", top: "180px" }}
        >
          R&D
        </div>

        <div
          className="mt-6 text-center md:mt-0 md:pr-16 md:text-left md:w-1/2"
          data-aos="fade-up"
          style={{ transform: "translateX(-110px)" }} // px 단위로 오른쪽 이동
        >
          <h2 className="mb-6 text-4xl mt-15">R&D 연구소</h2>
          <ul className="space-y-2 text-lg text-gray-700">
            <li>· 시즌 신제품 개발</li>
            <li>· 정기 품질관리 제빵 교육</li>
            <li>· 시즌별 신메뉴 교육</li>
            <li>· 사업장 불시점검 실시</li>
          </ul>
        </div>
      </div>

      {/* S-LAB */}
      <div className="relative flex flex-col items-center max-w-6xl mt-10 md:flex-row md:items-start md:w-full">
        <div
          className="relative z-10 overflow-visible md:w-1/2"
          data-aos="flip-left"
        >
          <div
            className="relative w-full h-auto scale-120"
            style={{ transform: "translateX(-46px)" }} // px 단위로 오른쪽 이동
          >
            <Image
              src="/images/system_images/s_lab.png"
              alt="S-LAB"
              width={1000}
              height={800}
              className="rounded shadow-lg"
            />
            <div className="absolute top-0 right-0 hidden h-40 translate-x-6 -translate-y-6 bg-yellow-400 w-60 -z-10 md:block"></div>
          </div>
        </div>

        {/* 배경 텍스트 - Jost 적용 */}
        <div
          className={`absolute hidden font-extrabold text-gray-200 pointer-events-none select-none text-[170px] opacity-90 lg:block whitespace-nowrap ${jost.className}`}
          style={{ left: "calc(50% + 370px)", top: "-70px" }}
        >
          LAB
        </div>

        <div
          className="mt-6 text-center md:mt-0 md:pl-16 md:text-left md:w-1/2"
          data-aos="fade-up"
          style={{ transform: "translateY(-26px)" }} // px 단위로 오른쪽 이동
        >
          <h2 className="mb-6 text-4xl mt-39">S-LAB(삼송외식연구소)</h2>
          <ul className="space-y-2 text-lg text-gray-700">
            <li>· 다양한 식음사업 전개를 위한 '상품기획 + 운영' 연구</li>
            <li>· Pilot 매장으로 상품개발 및 운영 점검 가능</li>
            <li>· 소비자의 건강과 니즈를 고려한 지속적 연구개발 역할</li>
            <li>· 상시 고객 모니터링으로 needs 및 data 축적 가능</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
