import React from "react";
import LocationInfo from "./LocationInfo";
import LocationKakao from "./LocationKakao"
// import Location from "./Location";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col items-center justify-center flex-grow">
        <div className="relative w-full  h-[580px] mx-auto bg-[url(/images/greeting/s_visual6.jpg)]">
          <div className="absolute inset-0 flex items-center justify-center bg-gray">
            <p className="text-6xl font-bold text-white">오시는 길 </p>
          </div>
        </div>
        {/* 섹션 2 카카오맵*/}
        <LocationKakao />
        {/* 섹션 3 길안내 */}
                <div className="w-full h-16" />

        <LocationInfo />
      </main>
    </div>
    
  )
  
}
