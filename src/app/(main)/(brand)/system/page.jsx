import React from "react";
import Image from "next/image";
import SystemIntroSection from "./SystemIntroSection"
import SystemIntroImage from "./SystemIntroImage"
export default function Page() {
  return (
    // top 화면
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col items-center justify-center flex-grow">
        <div className="mt-6 relative w-full  h-[580px] mx-auto bg-[url(/images/system_images/top_banner.jpg)]">
          <div className="absolute inset-0 flex items-center justify-center bg-gray">
            <p className="text-6xl font-bold text-white">운영시스템 </p>
          </div>
        </div>
        {/* 섹션 2 운영시스템 */}
        <SystemIntroSection />
        {/* 섹션 3 운영시스템 image*/}
        <SystemIntroImage />
      </main>
    </div>
  );
}
