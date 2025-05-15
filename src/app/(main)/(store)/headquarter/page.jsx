"use client";

import React from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const images = [
    "/images/(store)/main1.png",
    "/images/(store)/main2.png",
    "/images/(store)/main3.png",
    "/images/(store)/main4.png",
    "/images/(store)/main5.png",
  ];

  return (
    <>
      <Header />

      {/* Hero Section (배경 + 로고 + 텍스트) */}
      <section className="relative h-[500px] w-full">
        <Image
          src="/images/(store)/s_von.jpg"
          alt="삼송빵집 배경"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Image
            src="/images/logo.png"
            alt="삼송빵집 로고"
            width={180}
            height={60}
            className="mb-4"
          />
          <h1 className="text-5xl font-bold text-white">삼송빵집 본점</h1>
        </div>
      </section>

      {/* 내비게이션 바 */}
      <nav className="bg-[#5C2E14] text-white py-2 px-4 flex justify-center">
        <div className="flex items-center gap-2 text-sm font-medium">
          <span>🏠</span>
          <span>매장안내</span>
          <span className="mx-2">▼</span>
          <span className="font-bold">삼송빵집 본점</span>
        </div>
      </nav>

      <main className="max-w-screen-lg px-4 py-6 mx-auto">
        {/* 대표 이미지 */}
        <div className="relative w-full mb-2 aspect-video">
          <Image
            src={images[0]}
            alt="매장 대표 이미지"
            fill
            className="object-cover rounded-md"
          />
        </div>

        {/* 썸네일 목록 */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          {images.map((src, index) => (
            <div key={index} className="relative flex-shrink-0 w-32 h-20">
              <Image
                src={src}
                alt={`매장 이미지 ${index + 1}`}
                fill
                className="object-cover rounded"
              />
            </div>
          ))}
        </div>

        {/* 제목 */}
        <h2 className="mb-4 text-2xl font-bold">삼송빵집 본점</h2>

        {/* 상세 정보 테이블 */}
        <div className="w-full border-t border-gray-300">
          <div className="grid grid-cols-[100px_1fr] gap-y-4 py-6 text-sm sm:text-base">
            <span className="font-semibold">대표번호</span>
            <span>053) 254-4064</span>

            <span className="font-semibold">주소</span>
            <span>대구시 중구 중앙대로 397 (동성로3가 1-3)</span>

            <span className="font-semibold">영업시간</span>
            <span>AM 08:00 ~ PM 22:00</span>

            <span className="font-semibold">주차여부</span>
            <span>주차불가 지역 (중앙로 대중교통 전용지구)</span>

            <span className="font-semibold">기타</span>
            <span>제품 소진 시 조기 마감</span>
          </div>
        </div>

      </main>

  
    </>
  );
}
