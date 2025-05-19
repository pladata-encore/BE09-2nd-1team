import React from "react";
import Image from "next/image";
import FriendIntroSection from "./FriendIntroSection";
import CharacterCard from "./CharacterCard";
export default function Page() {
  return (
    // top 화면
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col items-center justify-center flex-grow">
        <div className="relative w-full  h-[580px] mx-auto bg-[url(/images/samsongfriends_images/friendreal.jpg)]">
          <div className="absolute inset-0 flex items-center justify-center bg-gray">
            <p className="text-6xl font-bold text-white">삼송 프렌즈 소개</p>
          </div>
        </div>
        {/* 섹션 2 소개 이미지 및 글귀*/}
        <div className="w-full h-16" />

        <FriendIntroSection />
        {/* 섹션 3 캐릭터 카드 */}
        <CharacterCard />
      </main>
    </div>
  );
}
