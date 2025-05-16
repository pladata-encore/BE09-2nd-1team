"use client";

import React from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import StoreLocationSection from "../samgsong-1957/components/StoreLocationSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import HeroSection from "./components/HeroSection";

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
      <HeroSection />

      {/* Breadcrumb */}
      <nav className="bg-[#5C2E14] text-white py-2 px-4 flex justify-center">
        <div className="flex items-center gap-2 text-sm font-medium">
          <span>🏠</span>
          <span>매장안내</span>
          <span className="mx-2">▼</span>
          <span className="font-bold">삼송빵집 본점</span>
        </div>
      </nav>

      {/* Main Section */}
      <main className="max-w-screen-lg px-4 py-6 mx-auto">
       
        <div className="relative w-full mb-6 overflow-hidden rounded-md">
          <Swiper
            navigation
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            loop
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative aspect-video">
                  <Image
                    src={src}
                    alt={`삼송빵집 본점 이미지 ${index + 1}`}
                    fill
                    className="object-cover rounded"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 상세 정보 */}
        <section>
          <h2 className="mb-4 text-2xl font-bold">삼송빵집 본점</h2>
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
        </section>
      </main>

      <StoreLocationSection />
      <Footer />
    </>
  );
}
