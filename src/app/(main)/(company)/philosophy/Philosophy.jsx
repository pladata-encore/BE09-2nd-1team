import React from "react";
import Misson from "./Philosophy_Misson"  
import Slogan from "./Philosophy_Slogan"
export default function Philosophy() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col items-center justify-center flex-grow">
        <div className="relative w-full  h-[580px] mx-auto bg-[url(/images/philosophy/Philosophy_banner.jpg)]">
          <div className="absolute inset-0 flex items-center justify-center bg-gray">
            <p className="text-6xl font-bold text-white mt-30" data-aos="fade-in">
              기업이념
            </p>
          </div>
        </div>
        <div className="w-full h-16" />
        {/* 섹션 1 */}
        <Misson />
                <div className="w-full h-16" />

        {/* 섹션 2 */}
        <Slogan />
      </main>
    </div>
  );
}
