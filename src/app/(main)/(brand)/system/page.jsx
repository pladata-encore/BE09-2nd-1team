"use client";
import Image from "next/image";
import SystemIntroSection from "./SystemIntroSection";
import SystemIntroImage from "./SystemIntroImage";
import Document from "./Document";
import SupportSystem from "./SupportSystem";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Page() {
  useEffect(() => {
    AOS.init({
      duration: 300, // 애니메이션 지속 시간 (ms)
      easing: "ease-in-out",
      once: true, // 한 번만 애니메이션 실행
    });
  }, []);
  return (
    // top 화면
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col items-center justify-center flex-grow">
        <div className="mt-6 relative w-full h-[580px] mx-auto bg-[url(/images/system_images/top_banner.jpg)]">
          <div className="absolute inset-0 flex items-center justify-center bg-gray">
            <p className="text-6xl font-bold text-white" data-aos="fade-up">
              운영시스템
            </p>
          </div>
        </div>
        <div className="w-full h-16" />

        {/* 섹션 2 운영시스템 */}
        <SystemIntroSection />
        <div className="w-full h-30" />

        {/* 섹션 3 운영시스템 image*/}
        <SystemIntroImage />
        <div className="w-full h-16" />

        {/* 섹션 4 지적재산권 */}
        <Document />

        {/* 섹션 5 지원시스템 */}

        <SupportSystem />
      </main>
    </div>
  );
}
