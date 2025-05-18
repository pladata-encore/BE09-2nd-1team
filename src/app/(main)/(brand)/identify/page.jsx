import React from "react";
import Identify from "./indentiIntro";
import Difference from "./Difference"
import Difference2 from "./Difference2"
import Difference3 from "./Difference3"
import Difference4 from "./Difference4"
export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col items-center justify-center flex-grow">
        <div className="relative w-full  h-[580px] mx-auto bg-[url(/images/identi_images/s_visual12.jpg)]">
          <div className="absolute inset-0 flex items-center justify-center bg-gray">
            <p className="text-6xl font-bold text-white">브랜드 아이덴티티</p>
          </div>
        </div>
        {/* 섹션 1 */}
        <Identify />
        {/* 섹션 2 */}
        <Difference />
        {/* 섹션 3 */}
        <Difference2 />
        {/* 섹션 4 */}
        <Difference3 />
        {/* 섹션 5 */}
        <Difference4 />
      </main>
    </div>
  );
}
